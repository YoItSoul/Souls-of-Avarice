global.SOA_PACKMODE = (function () {
    try {
        return Java.loadClass('com.soul.soa_additions.quest.PackModeBridge').current()
    } catch (e) {
        console.warn('[soa_ported] could not read pack mode from soa_additions (' + e +
                     ') — falling back to adventure')
        return 'adventure'
    }
})()

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

const _activeMode = PACKMODE_TABLE[global.SOA_PACKMODE] || PACKMODE_TABLE.adventure
for (const k in _activeMode) global[k] = _activeMode[k]

if (global.SOA_PACKMODE === 'normal') global.SOA_PACKMODE = 'adventure'

console.info(`[soa_ported] SOA_PACKMODE = ${global.SOA_PACKMODE} (from soa_additions)` +
             ` (mob_armor=${global.MOB_ARMOR_MULTIPLIER}x,` +
             ` forge_out=${global.FORGE_OUTPUT_MULTIPLIER}x,` +
             ` forge_cost=${global.FORGE_COST_MULTIPLIER}x)`)
