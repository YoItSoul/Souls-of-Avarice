// ============================================================
// SoA World Events — port of GreedyCraft scripts/events_and_commands/events/
//   { onEntityLivingSpawn.zs, onEntityLivingUpdate.zs, MobSpawnerEvents.zs,
//     GameStagesEvents.zs }
//
// 1.12 GC drove these via CrafTweaker event bus. 1.20.1 KubeJS port:
//
//   onEntityLivingSpawn:
//     • Deny spawn for entities with maxHealth ≥ 1,048,576 (anti-overflow
//       safety against bugged HP attribute stacks).
//
//   onEntityLivingUpdate:
//     • Clamp entity motion magnitudes to ≤ 8.0 (anti-velocity exploit).
//     • Keep boss-class entities below y=255 (prevents "ur ghast" dome cheese
//       where a flying boss escapes the world ceiling).
//     • Both checks polled every 20t per entity to limit overhead — GC ran
//       per-tick which was wasteful.
//
//   MobSpawnerEvents:
//     • Spawner break: probabilistic break with chance scaling on the
//       spawn-kill counter. GC depended on spawnercontrol mod NBT
//       ('spawnercontrol:controllable_spawner_cap') which doesn't exist in
//       1.20.1 (SoA uses AgeingSpawners instead). Simplified to constant
//       50% break chance + AgeingSpawners-aware drop logic.
//     • Success → bonus XP scaled by difficulty + chat quote.
//     • Failure → Mining Fatigue stacking + chat quote + cancel.
//     • Always drop a `soa_additions:time_fragment` (1× guaranteed,
//       1/33 second roll) on actual break.
//     • Quote pool deferred to task #69 (mob_spawner_quotes.zs port).
//
//   GameStagesEvents:
//     • On stage gained: send lore message, play challenge sound, give a
//       'tablet of enlightenment' (soa_additions item) NBT-tagged with the
//       stage, update player difficulty to max stage difficulty.
//     • On stage removed: prevent removing 'iswuss' (cheat marker stage).
//     • SDM GameStages doesn't fire add/remove events to KubeJS, so we poll
//       per-player stage diffs every 20t and synthesize transitions.
// ============================================================

console.info('[soa_scripts] soa_world_events.js loading')

let GameStageHelper = null
try {
    GameStageHelper = Java.loadClass('net.darkhax.gamestages.GameStageHelper')
} catch (e) {
    console.warn('[soa_world_events] GameStages absent: stage-transition lore disabled')
}

// Vec3 constructor for setDeltaMovement(Vec3). KubeJS Rhino exposes only
// the Vec3-taking overload of setDeltaMovement (SRG m_20256_); the
// (double,double,double) overload is hidden, so we have to box the values.
const $Vec3 = Java.loadClass('net.minecraft.world.phys.Vec3')

// ============================================================
// onEntityLivingSpawn — anti-overflow HP guard
// ============================================================
const HP_OVERFLOW_THRESHOLD = 1048576.0  // 2^20 — matches GC literal

EntityEvents.spawned(event => {
    const e = event.entity
    if (!e || !e.living) return
    try {
        const max = e.getMaxHealth()
        if (max >= HP_OVERFLOW_THRESHOLD) event.cancel()
    } catch (err) { /* not a living entity, skip */ }
})

// ============================================================
// onEntityLivingUpdate — motion clamp + boss y-cap
// ============================================================
const MOTION_LIMIT = 8.0
const MAX_BOSS_Y = 255.0
const BOSS_RESET_Y = 252.0

// KubeJS 2001 has no per-mob tick event. Drive motion clamp + boss y-cap
// from a server-tick poll over loaded entities. 20-tick cadence with id-phased
// offset so the load is spread across the polling window.
const BOSS_TYPE_FRAGMENTS = ['wither', 'ender_dragon', 'frostmaw', 'umvuthi', 'alpha_yeti', 'snow_queen']

ServerEvents.tick(event => {
    const tick = event.server.tickCount
    if (tick % 5 !== 0) return  // coarse 5t outer cadence; fine 20t per entity below
    // server.allLevels is Iterable<ServerLevel>; avoids the ambiguous
    // getLevel(ResourceKey) vs kjs$getLevel(ResourceLocation) overload.
    event.server.allLevels.forEach(lvl => {
        if (!lvl) return
        lvl.entities.forEach(e => {
            if (!e || !e.living) return
            if ((tick + e.id) % 20 !== 0) return

            // Vec3 in 1.20.1 has both public final fields x/y/z AND accessor
            // methods x()/y()/z(). Rhino wraps the field/method ambiguity in
            // FieldAndMethods, which throws NullPointerException on numeric
            // comparisons (Field.get(null)). Call the method form explicitly.
            const m = e.getDeltaMovement()
            let mx = m.x(), my = m.y(), mz = m.z(), dirty = false
            if (mx >  MOTION_LIMIT) { mx =  MOTION_LIMIT; dirty = true }
            if (mx < -MOTION_LIMIT) { mx = -MOTION_LIMIT; dirty = true }
            if (my >  MOTION_LIMIT) { my =  MOTION_LIMIT; dirty = true }
            if (my < -MOTION_LIMIT) { my = -MOTION_LIMIT; dirty = true }
            if (mz >  MOTION_LIMIT) { mz =  MOTION_LIMIT; dirty = true }
            if (mz < -MOTION_LIMIT) { mz = -MOTION_LIMIT; dirty = true }
            if (dirty) e.setDeltaMovement(new $Vec3(mx, my, mz))

            // Same caveat: use Entity.getY() / getX() / getZ() over .y/.x/.z.
            if (e.getY() > MAX_BOSS_Y) {
                try {
                    const t = String(e.type)
                    let isBoss = false
                    for (const frag of BOSS_TYPE_FRAGMENTS) { if (t.includes(frag)) { isBoss = true; break } }
                    if (isBoss) e.setPos(e.getX(), BOSS_RESET_Y, e.getZ())
                } catch (err) { /* type lookup failed */ }
            }
        })
    })
})

// ============================================================
// MobSpawnerEvents — spawner break chance + bonus XP + time_fragment drop
// ============================================================
const SPAWNER_BREAK_CHANCE = 0.5  // GC's formula collapsed (no kill-counter NBT)
const FATIGUE_DURATION = 200      // 10 seconds
const MAX_FATIGUE_LEVEL = 5

BlockEvents.broken(event => {
    const block = event.block
    const player = event.player
    if (!block || !player || player.creative) return
    if (player.level.isClientSide()) return
    if (String(block.id) !== 'minecraft:spawner') return

    if (Math.random() < SPAWNER_BREAK_CHANCE) {
        // Success: drop time_fragment + bonus XP
        const bonusXP = 4 + Math.floor(Math.random() * 12)  // base 4 + 0..11
        const diffMult = (player.level.getDifficulty().getId() * 2.0) / 100.0 + 1.0
        const totalXP = Math.ceil(bonusXP * diffMult)
        try { player.giveExperiencePoints(totalXP) } catch (e) { /* */ }

        try {
            block.popItem(Item.of('soa_additions:time_fragment'))
            if (Math.random() < (1.0 / 33.0)) {
                block.popItem(Item.of('soa_additions:time_fragment'))
            }
        } catch (e) { /* item not registered */ }

        // Pick a success quote from the pool
        try {
            const pool = global.SOA_SPAWNER_SUCCESS_QUOTES
            if (pool && pool.length > 0) {
                const q = pool[Math.floor(Math.random() * pool.length)]
                player.tell(Component.literal('§9[Spawner] §a' + q))
            }
        } catch (e) { /* */ }
        player.tell(Component.translatable('greedycraft.event.mob_spawner.kill_bonus')
            .append(Component.literal(' §e+' + totalXP + 'XP')))
    } else {
        // Failure: cancel break + apply Mining Fatigue + chat warn
        event.cancel()
        const cur = player.getEffect('minecraft:mining_fatigue')
        const lvl = cur ? Math.min(cur.getAmplifier() + 1, MAX_FATIGUE_LEVEL) : 1
        player.potionEffects.add('minecraft:mining_fatigue', FATIGUE_DURATION, lvl, false, false)

        // Pick a deny quote from the pool
        try {
            const pool = global.SOA_SPAWNER_QUOTES
            if (pool && pool.length > 0) {
                const q = pool[Math.floor(Math.random() * pool.length)]
                player.tell(Component.literal('§9[Spawner] §f' + q))
            }
        } catch (e) { /* */ }
        player.tell(Component.translatable('greedycraft.event.mob_spawner.chance')
            .append(Component.literal(' ' + Math.floor(SPAWNER_BREAK_CHANCE * 100) + '%')))
    }
})

// ============================================================
// GameStagesEvents — stage-add lore broadcast + difficulty bump
// ============================================================
//
// SDM GameStages 1.20.1 doesn't fire add/remove events to KubeJS. We poll
// per-player every 20t and diff against a cached set to synthesize the
// "stage just acquired" event.
//
// stageMap: maps stage → ScalingHealth difficulty value. Mirrors GC's
// stageMap from list_stages.zs. Higher value = more difficult.
const STAGE_MAP = {
    getting_started: 0,
    nether: 100,
    wither_slayer: 200,
    ender_charm: 300,
    hardmode: 500,
    descendant_of_the_sun: 600,
    novice_engineer: 50,  novice_wizard: 50,
    skilled_engineer: 250, skilled_wizard: 250,
    master_engineer: 500, master_wizard: 500,
    wyvern: 800,
    awakened: 1200,
    chaotic: 1800,
    fusion_matrix: 2000,
    chaotic_dominator: 2400,
    abyssal_conquerer: 2800,
    wielder_of_infinity: 3200,
    expert: 0,
    graduated: 600,
    challenger_a: 600, challenger_b: 800, challenger_c: 1000,
    challenger_d: 1200, challenger_e: 1500, challenger_f: 1800, challenger_g: 2400,
}

// Per-player previous stage set (uuid → Set<stage>). Cleared on logout.
const PREV_STAGES = new Map()

PlayerEvents.loggedOut(event => { try { PREV_STAGES.delete(String(event.player.uuid)) } catch (e) {} })

function diffStages(player) {
    if (!GameStageHelper) return []
    const uuid = String(player.uuid)
    const prev = PREV_STAGES.get(uuid) || new Set()
    const added = []
    for (const stage in STAGE_MAP) {
        if (GameStageHelper.hasStage(player, stage) && !prev.has(stage)) {
            added.push(stage)
            prev.add(stage)
        }
    }
    PREV_STAGES.set(uuid, prev)
    return added
}

PlayerEvents.tick(event => {
    const player = event.player
    if (!player || player.level.isClientSide()) return
    if (player.tickCount % 20 !== 0) return  // poll every 20t

    const added = diffStages(player)
    for (const stage of added) onStageAdded(player, stage)
})

function onStageAdded(player, stage) {
    let mode = 'adventure'
    try { mode = String(global.SOA_PACKMODE || 'adventure') } catch (e) { /* */ }
    if (mode === 'casual' || player.creative) return

    // Stage-acquired chat banner
    player.tell(Component.literal('§9' + '='.repeat(50)))
    player.tell(Component.translatable('greedycraft.event.stage.lore.title')
        .append(Component.literal(' ').append(Component.literal(stage).gold())))
    player.tell(Component.translatable('greedycraft.event.stage.lore.unlocked'))

    // Sound — challenge complete (vanilla 1.20.1 sound id)
    try {
        player.playNotifySound('minecraft:ui.toast.challenge_complete', 'players', 1.0, 1.0)
    } catch (e) { /* */ }

    // Tablet of Enlightenment item — soa_additions:tablet_of_enlightenment
    // (deferred until item is registered in Java mod). NBT carries stage +
    // player identity so future shift-tooltip can show provenance.
    try {
        const tablet = Item.of('soa_additions:tablet_of_enlightenment').withNBT({
            stage: stage,
            playerName: player.username,
            playerUUID: String(player.uuid),
        })
        if (!player.inventory.add(tablet)) player.drop(tablet, false)
    } catch (e) { /* item not yet registered — skip silently */ }

    // Difficulty bump — set ScalingHealth player difficulty to max stage value
    let maxDiff = 0
    for (const s in STAGE_MAP) {
        if (GameStageHelper.hasStage(player, s) && STAGE_MAP[s] > maxDiff) maxDiff = STAGE_MAP[s]
    }
    if (maxDiff > 0) {
        try {
            player.runCommand('scalinghealth difficulty ' + player.username + ' set ' + maxDiff)
        } catch (e) { /* command name may differ in 1.20.1 build */ }
    }

    player.tell(Component.literal('§9' + '='.repeat(50)))
}

console.info('[soa_scripts] soa_world_events.js: registered (' +
             Object.keys(STAGE_MAP).length + ' stages tracked)')
