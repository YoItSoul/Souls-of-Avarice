// ============================================================
// SoA Boss Health — port of GC's MobsPropertiesRandomness flat overrides
//   (GreedyCraft/config/MobsPropertiesRandomness/json/*.json, "isflat": true)
//
// GC set fixed base max-health for hand-tuned bosses; all of them are also on
// the ScalingHealth exempt list (difficulty_exempt tag here), so this base IS
// their final HP — plus the expert packmode ×1.5 from soa_additions
// PackModeEffects for entities GC boss-flagged (giants/wroughtnaut were NOT
// isBoss in 1.12 and are blacklisted from the buff on the Java side).
//
// Not handled here:
//   - wither/ender_dragon: 7700/7000 via kubejs/data/progressivebosses
//     datapack override (PB owns their stats in 1.20).
//   - chaos guardian: 10000 via config/brandon3055/DraconicEvolution.cfg.
//   - doppleganger (Gaia): Botania recomputes HP at spawn (player count /
//     hard mode); GC's non-flat MPR +100 has no clean analog — left alone.
//   - ritual frostmaw/umvuthi: spawn-NBT HP from _packmode.js (GC verbatim).
//   - abyssalcraft/extrabotany bosses: mods gone; Warden (500,
//     ×1.5 expert = 750) already equals GC J'zahar exactly.
//   - defiledlands re-added 2026-07-27: Destroyer/Mourner HP from GC
//     MobsPropertiesRandomness (destroyer.json 2400 / mourner.json 4600).
// ============================================================

const $BossAttributes = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes')

const BOSS_BASE_HP = {
    'twilightforest:naga': 550,
    'twilightforest:lich': 600,
    'twilightforest:minoshroom': 600,
    'twilightforest:hydra': 840,
    'twilightforest:knight_phantom': 500,   // per phantom, matches GC
    'twilightforest:ur_ghast': 750,
    'twilightforest:alpha_yeti': 800,
    'twilightforest:snow_queen': 700,
    'twilightforest:giant_miner': 700,
    'twilightforest:armored_giant': 700,
    'mowziesmobs:ferrous_wroughtnaut': 400,
    'defiledlands:the_destroyer': 2400,
    'defiledlands:the_mourner': 4600,
}

// forEach (not for..in) — Rhino errors on const/let declared in a for-loop
// body ("redeclaration of var"); a callback scope sidesteps it.
Object.keys(BOSS_BASE_HP).forEach(id => {
    const hp = BOSS_BASE_HP[id]
    EntityEvents.spawned(id, event => {
        const e = event.entity
        if (!e || !e.living || e.level.isClientSide()) return
        const inst = e.getAttribute($BossAttributes.MAX_HEALTH)
        if (!inst) return
        // Base set once (spawned fires again on chunk reload); heal to the
        // post-modifier max so the expert ×1.5 modifier is respected.
        if (Math.abs(inst.baseValue - hp) > 0.5) {
            inst.baseValue = hp
            e.health = e.maxHealth
        }
    })
})

console.info('[soa_scripts] soa_boss_health.js: registered (' +
             Object.keys(BOSS_BASE_HP).length + ' boss overrides)')
