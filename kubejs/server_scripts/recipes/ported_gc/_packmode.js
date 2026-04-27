// ============================================================
// SoA Pack-mode selector — 1:1 port of GreedyCraft's three packmodes
// from scripts/global/packmode/{adventure,casual,expert}.zs.
//
// GC defined three packmodes via CraftTweaker `#packmode` directives:
//   - casual    (MOB_ARMOR 0.5x, FORGE_OUTPUT 2.0x, FORGE_COST 0.5x — easy)
//   - adventure (MOB_ARMOR 1.0x, FORGE_OUTPUT 1.0x, FORGE_COST 1.0x — default)
//   - expert    (MOB_ARMOR 1.5x, FORGE_OUTPUT 0.5x, FORGE_COST 1.5x — hard)
//
// Each mode set 9 globals that other scripts read. SoA exposes the same
// table here so KubeJS scripts and the SoA Java mod can branch identically.
//
// Switching modes: change SOA_PACKMODE below to one of the three names.
// All other globals re-derive automatically.
//
// This file must sort before every packmode_*.js (leading underscore
// guarantees that under KubeJS's lexicographic load order).
// ============================================================

// Master selector — change to 'casual' / 'adventure' / 'expert'.
// Default 'adventure' matches GC's default packmode (and its quick_start
// patchouli book recommended starting mode).
global.SOA_PACKMODE = 'adventure'

// Per-mode global table — values lifted verbatim from GC's three .zs files.
const PACKMODE_TABLE = {
    casual: {
        FROSTMAW_HP: 12500,
        BARAKO_HP: 30000,
        BARAKO_MINION_COUNT: 2,
        FROSTMAW_MINION_COUNT: 3,
        DEATH_HUMAN_SPAWN_CHANCE: 0.20,
        COSMILITE_OUTPUT_COUNT: 16,
        MOB_ARMOR_MULTIPLIER: 0.5,
        FORGE_OUTPUT_MULTIPLIER: 2.0,
        FORGE_COST_MULTIPLIER: 0.5,
    },
    adventure: {
        FROSTMAW_HP: 25000,
        BARAKO_HP: 60000,
        BARAKO_MINION_COUNT: 4,
        FROSTMAW_MINION_COUNT: 6,
        DEATH_HUMAN_SPAWN_CHANCE: 0.33,
        COSMILITE_OUTPUT_COUNT: 8,
        MOB_ARMOR_MULTIPLIER: 1.0,
        FORGE_OUTPUT_MULTIPLIER: 1.0,
        FORGE_COST_MULTIPLIER: 1.0,
    },
    expert: {
        FROSTMAW_HP: 45000,
        BARAKO_HP: 100000,
        BARAKO_MINION_COUNT: 8,
        FROSTMAW_MINION_COUNT: 10,
        DEATH_HUMAN_SPAWN_CHANCE: 0.50,
        COSMILITE_OUTPUT_COUNT: 4,
        MOB_ARMOR_MULTIPLIER: 1.5,
        FORGE_OUTPUT_MULTIPLIER: 0.5,
        FORGE_COST_MULTIPLIER: 1.5,
    },
}

// Resolve the active packmode and copy its globals onto `global` so every
// other script can read e.g. `global.MOB_ARMOR_MULTIPLIER` without
// re-checking the mode.
const _activeMode = PACKMODE_TABLE[global.SOA_PACKMODE] || PACKMODE_TABLE.adventure
for (const k in _activeMode) global[k] = _activeMode[k]

// Back-compat: old scripts referenced `global.SOA_PACKMODE === 'normal'`.
// Map 'normal' as an alias for 'adventure' so existing branches still work.
if (global.SOA_PACKMODE === 'normal') global.SOA_PACKMODE = 'adventure'

console.info(`[soa_ported] SOA_PACKMODE = ${global.SOA_PACKMODE}` +
             ` (mob_armor=${global.MOB_ARMOR_MULTIPLIER}x,` +
             ` forge_out=${global.FORGE_OUTPUT_MULTIPLIER}x,` +
             ` forge_cost=${global.FORGE_COST_MULTIPLIER}x)`)
