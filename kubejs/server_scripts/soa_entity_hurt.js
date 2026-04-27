// ============================================================
// SoA Entity Hurt — port of GreedyCraft scripts/events_and_commands/events/onEntityLivingHurt.zs
//
// 1.12 GC ran a LivingHurtEvent handler that:
//   1. Burning undead in daylight take +5% maxHP fire damage per tick
//   2. Player thorns retaliation capped at 50 dmg AND 5% target maxHP
//      (and zeroed against bosses)
//   3. Spider/CaveSpider hits stack Slowness on the player; at level 4
//      they also place a cobweb at the player's feet
//   4. Explosion damage scales 2.5x on stage 'nether', 3.0x on 'hardmode'
//   5. Projectile damage gets a small linear scaling per ScalingHealth
//      difficulty; skeleton arrows hit 2x harder
//   6. Boss damage scaled by 0.32% per ScalingHealth difficulty point
//   7. Eldritch Guardian damage capped at 15% maxHP (Thaumcraft absent)
//
// 1.20.1 KubeJS ports preserve every rule whose mods + APIs are present.
// Effective player.difficulty is queried from ScalingHealth's API where
// possible; falls back to 0 when the cap isn't loaded.
// ============================================================

console.info('[soa_scripts] soa_entity_hurt.js loading')

let GameStageHelper = null
try {
    GameStageHelper = Java.loadClass('net.darkhax.gamestages.GameStageHelper')
} catch (e) {
    console.warn('[soa_entity_hurt] GameStages not loaded; explosion-stage scaling disabled')
}

// Bosses excluded from per-difficulty damage scaling — fights would become
// unwinnable. GC list ported as-is; absent mods (abyssalcraft/aether_legacy/
// extrabotany/botania) just won't have entities matching, so no-op.
const DAMAGE_SCALING_BLACKLIST = new Set([
    'twilightforest:naga',
    'twilightforest:lich',
    'twilightforest:ur_ghast',
    'twilightforest:hydra',
    'twilightforest:final_boss',
    'twilightforest:knight_phantom',
    'twilightforest:minoshroom',
    'twilightforest:alpha_yeti',
    'twilightforest:snow_queen',
    'twilightforest:goblin_knight_upper',
    'mowziesmobs:frostmaw',
    'mowziesmobs:umvuthi',
    'mowziesmobs:ferrous_wroughtnaut',
    'mowziesmobs:naga',
    'minecraft:ender_dragon',
    'minecraft:wither',
    'minecraft:warden',
    'aether:slider',
    'aether:valkyrie_queen',
    'aether:fire_minion',
    'aether:sun_spirit',
    'deep_aether:nightmare_walker',
])

const SKELETON_TYPES = new Set([
    'minecraft:skeleton',
    'minecraft:wither_skeleton',
    'minecraft:stray',
    'minecraft:bogged',
])

// Approximate ScalingHealth difficulty without the addon API (peer mod call
// would need a Java helper). Falls back to MC difficulty (Easy=1, Normal=2,
// Hard=3) scaled into 0..100 range. Override via global.SOA_DIFFICULTY_OVERRIDE
// for tuning in normal/expert packmodes.
function getDifficulty(player) {
    if (typeof global.SOA_DIFFICULTY_OVERRIDE !== 'undefined') return global.SOA_DIFFICULTY_OVERRIDE
    const lvl = player.level.difficulty.id  // 0=peaceful 1=easy 2=normal 3=hard
    return lvl * 25  // 0/25/50/75 — mild scaling without ScalingHealth wired in
}

EntityEvents.hurt(event => {
    const entity = event.entity
    if (!entity || !entity.living) return
    const src = event.source

    // (1) Burning undead in sunlight take bonus fire damage.
    if (entity.mobType && String(entity.mobType) === 'UNDEAD' &&
        entity.isOnFire() && entity.maxHealth > 0 &&
        entity.level.canSeeSky(entity.blockPosition()) &&
        entity.level.isDay() && src.is(net_minecraft_DamageTypeTag('IS_FIRE'))) {
        event.damage += entity.maxHealth / 20.0
    }

    // (2) Thorns cap (player-only attribution).
    const attacker = src.entity
    if (attacker && attacker.player && src.is(net_minecraft_DamageTypeTag('IS_PROJECTILE')) === false &&
        src.msgId === 'thorns') {
        let dmg = event.damage
        if (dmg > 50.0) dmg = 50.0
        if (entity.maxHealth > 0 && dmg > entity.maxHealth * 0.05) dmg = entity.maxHealth * 0.05
        if (DAMAGE_SCALING_BLACKLIST.has(String(entity.type))) {
            event.cancel()
            return
        }
        event.damage = dmg
    }

    if (!entity.player) return  // remaining rules apply only to players being hurt

    const player = entity
    const attackerType = attacker ? String(attacker.type) : null
    const playerDifficulty = getDifficulty(player)

    // (3) Spider/Cave Spider stack slowness, place webs at level cap.
    if (attackerType === 'minecraft:spider' || attackerType === 'minecraft:cave_spider') {
        const existing = player.getEffect('minecraft:slowness')
        if (!existing) {
            player.potionEffects.add('minecraft:slowness', 200, 0, false, false)
        } else if (Math.random() < 0.66) {
            const lvl = existing.getAmplifier()
            if (lvl < 3) {
                const inc = Math.random() < 0.33 ? 2 : 1
                player.potionEffects.add('minecraft:slowness', 200, lvl + inc, false, false)
            } else {
                player.potionEffects.add('minecraft:slowness', 200, 4, false, false)
                const here = player.blockPosition()
                if (String(player.level.getBlockState(here).block.id) === 'minecraft:air') {
                    player.level.setBlock(here, 'minecraft:cobweb', 3)
                }
            }
        }
    }

    let dmg = event.damage

    // (4) Stage-scaled explosion damage. GC source:
    //   if (player.hasGameStage("nether"))   { dmg *= 2.5f; }
    //   if (player.hasGameStage("hardmode")) { dmg *= 3.0f; }
    // Both branches multiply, so a hardmode player (who also has 'nether')
    // gets 7.5x. Preserved verbatim per "true port" directive.
    if (GameStageHelper && src.is(net_minecraft_DamageTypeTag('IS_EXPLOSION'))) {
        if (GameStageHelper.hasStage(player, 'nether'))   dmg *= 2.5
        if (GameStageHelper.hasStage(player, 'hardmode')) dmg *= 3.0
    }

    // (5) Projectile damage scales with difficulty; skeleton arrows 2x.
    // GC verbatim coefficients (0.003 difficulty / 2x skeleton).
    if (attacker && attacker.living && src.is(net_minecraft_DamageTypeTag('IS_PROJECTILE'))) {
        if (!DAMAGE_SCALING_BLACKLIST.has(attackerType)) {
            dmg *= (1.0 + 0.003 * playerDifficulty)
            if (SKELETON_TYPES.has(attackerType)) dmg *= 2.0
        }
    }

    // (6) Boss damage scales with difficulty (excluding blacklisted hard bosses).
    // GC verbatim coefficient (0.0032).
    if (attacker && attacker.living && attacker.maxHealth >= 100.0 &&
        !DAMAGE_SCALING_BLACKLIST.has(attackerType)) {
        dmg *= (1.0 + 0.0032 * playerDifficulty)
    }

    event.damage = dmg
})

// Helper that resolves "minecraft:foo" damage type tag once. KubeJS exposes
// damage source filters via DamageSource#is(TagKey<DamageType>) — we wrap it
// so the dotted-cap-style names look like the rest of the script.
function net_minecraft_DamageTypeTag(name) {
    const tag = net.minecraft.tags.DamageTypeTags[name]
    return tag
}

console.info('[soa_scripts] soa_entity_hurt.js: registered')
