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

// Motion clamp + boss y-cap moved to Java (soa_additions SoaTickRules, 3.58.3):
// iterating every loaded entity through Rhino was a JS invocation per entity
// per poll. Constants above are retained by the Java port.

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
        // GC MobSpawnerEvents.zs: bonus XP × (1 + ScalingHealth difficulty × 2%)
        const shDiff = player.persistentData.contains('soa_sh_difficulty')
            ? player.persistentData.getInt('soa_sh_difficulty') : 0
        const diffMult = 1.0 + shDiff * 0.02
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
// Stage → ScalingHealth difficulty. 1:1 with GC's global stageMap:
//   scripts/global/difficulty_mapping.zs        (casual + adventure)
//   scripts/global/difficulty_mapping_expert.zs (expert)
// SOA-only stages (engineer/wizard tracks, challengers, fusion_matrix,
// descendant_of_the_sun, graduated) have no GC value; they are placed on
// GC's scale between their neighboring GC progression stages.
const STAGE_MAP_NORMAL = {
    // --- GC values (difficulty_mapping.zs) ---
    getting_started: 0,
    twilight_forest: 20,
    nether: 64,
    abyssal_conquerer: 128,
    wither_slayer: 256,
    ender_charm: 320,
    hardmode: 640,
    wyvern: 750,
    awakened: 900,
    chaotic_dominator: 1200,
    chaotic: 1400,
    wielder_of_infinity: 1600,
    super_hardmode: 1600,
    // --- SOA-only, interpolated on GC's casual/adventure scale ---
    expert: 0,
    novice_engineer: 50,   novice_wizard: 50,
    skilled_engineer: 250, skilled_wizard: 250,
    master_engineer: 500,  master_wizard: 500,
    descendant_of_the_sun: 600,
    graduated: 600,
    challenger_a: 600, challenger_b: 750, challenger_c: 900,
    challenger_d: 1050, challenger_e: 1200, challenger_f: 1400, challenger_g: 1600,
    fusion_matrix: 1500,
}
const STAGE_MAP_EXPERT = {
    // --- GC values (difficulty_mapping_expert.zs) ---
    getting_started: 25,
    twilight_forest: 50,
    nether: 100,
    abyssal_conquerer: 225,
    wither_slayer: 400,
    ender_charm: 480,
    hardmode: 900,
    wyvern: 1050,
    awakened: 1250,
    chaotic_dominator: 1600,
    chaotic: 2000,
    wielder_of_infinity: 2400,
    super_hardmode: 2400,
    // --- SOA-only, interpolated on GC's expert scale ---
    expert: 0,
    novice_engineer: 75,   novice_wizard: 75,
    skilled_engineer: 375, skilled_wizard: 375,
    master_engineer: 700,  master_wizard: 700,
    descendant_of_the_sun: 850,
    graduated: 850,
    challenger_a: 900, challenger_b: 1050, challenger_c: 1250,
    challenger_d: 1450, challenger_e: 1700, challenger_f: 2000, challenger_g: 2400,
    fusion_matrix: 2200,
}

function soaStageMap() {
    let mode = 'adventure'
    try { mode = String(global.SOA_PACKMODE || 'adventure') } catch (e) { /* */ }
    return mode === 'expert' ? STAGE_MAP_EXPERT : STAGE_MAP_NORMAL
}

// Compute the player's stage-derived difficulty (max across held stages),
// store it in persistentData (read by soa_entity_hurt.js — GC's
// onEntityLivingHurt.zs used player.difficulty directly), and push it into
// ScalingHealth. The 1.20.1 command is /sh_difficulty (NOT "scalinghealth
// difficulty" — that silently failed); run from the server source since it
// requires elevated permissions.
function soaApplyStageDifficulty(player) {
    if (!GameStageHelper) return 0
    const map = soaStageMap()
    let maxDiff = 0
    for (const s in map) {
        if (GameStageHelper.hasStage(player, s) && map[s] > maxDiff) maxDiff = map[s]
    }
    player.persistentData.putInt('soa_sh_difficulty', maxDiff)
    try {
        player.server.runCommandSilent('sh_difficulty ' + player.username + ' set ' + maxDiff)
    } catch (e) {
        console.warn('[soa_world_events] sh_difficulty command failed: ' + e)
    }
    return maxDiff
}
global.soaApplyStageDifficulty = soaApplyStageDifficulty

// Stage-added detection is EVENT-DRIVEN via GameStages' own Forge event —
// replaces the old 20t polling loop (which also re-fired the banner + tablet
// for every already-held stage on every login). ForgeEvents is startup-scope
// only, so the actual subscription lives in
// startup_scripts/soa_forge_event_bridge.js and forwards through this global.
global.soaOnStageAdded = (player, stage) => onStageAdded(player, stage)

function onStageAdded(player, stage) {
    // 'fearless_man' is granted by the re-homed "The Fearless" quest
    // (1_remembering, adventure/expert) via crafting the Bravery Certificate --
    // the 1:1 port of GC's AbyssalCraft-chapter quest. No auto-grant needed.

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
    // (GC GameStagesEvents.zs: player.difficulty = max over stageMap)
    soaApplyStageDifficulty(player)

    player.tell(Component.literal('§9' + '='.repeat(50)))
}

// ============================================================
// One-time difficulty repair on login — the old broken command means every
// existing player is sitting at ScalingHealth difficulty 0 regardless of
// stages. Re-derive once per player (flagged in persistentData), then
// stage-add events keep it current. Not re-run every login so that manual
// adjustments (difficulty changer items, GC parity) survive relogs.
// ============================================================
PlayerEvents.loggedIn(event => {
    const player = event.player
    if (!player || player.level.isClientSide()) return
    let mode = 'adventure'
    try { mode = String(global.SOA_PACKMODE || 'adventure') } catch (e) { /* */ }
    if (mode === 'casual') return  // GC casual never auto-sets difficulty
    if (player.persistentData.getBoolean('soa_diff_synced_v1')) return
    const applied = soaApplyStageDifficulty(player)
    player.persistentData.putBoolean('soa_diff_synced_v1', true)
    console.info('[soa_world_events] difficulty repair: ' + player.username + ' -> ' + applied)
})

console.info('[soa_scripts] soa_world_events.js: registered (' +
             Object.keys(STAGE_MAP_NORMAL).length + ' stages tracked)')
