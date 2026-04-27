// ============================================================
// SoA Mob Loot — port of GreedyCraft scripts/loot_tables/mobs.zs
//
// 1.12 GC modified entity loot tables:
//   1. BetterSlimes (quazar / knight_slime / gold_slime) — slime mod absent
//      in 1.20.1; SKIP the BetterSlimes-specific overrides.
//   2. Mowzie's Mobs ferrous_wroughtnaut — bonus iron + thermalfoundation:160
//      (now thermal:iron_dust) + a roll into simple_dungeon table.
//   3. Slime crown drop on all slime tables — vanilla slime + magma_cube.
//   4. Seasonal Christmas gift drop on hostile mobs (Dec).
//   5. Seasonal Lunar New Year red_packet drop on hostile mobs.
//
// Slime crown chance: GC used `randomChanceWithLooting(0.005, 0.0025)`
// → base 0.5% + 0.25% per Looting level. LootJS exposes random_chance and
// random_chance_with_looting JSON conditions; we use the latter.
// ============================================================

console.info('[soa_scripts] loot_mobs.js loading')

// ---- Date helpers (replaces GC scripts/util/date.zs) ----
function isChristmas() {
    const now = new Date()
    // GC range: Dec 20 .. Dec 27 (inclusive)
    return now.getMonth() === 11 && now.getDate() >= 20 && now.getDate() <= 27
}
function isLunarNewYear() {
    // Approx Lunar NY varies; GC source used a hard date table. Use a window
    // around late Jan / early Feb that catches the holiday in most years.
    const now = new Date()
    return (now.getMonth() === 0 && now.getDate() >= 22) ||
           (now.getMonth() === 1 && now.getDate() <= 12)
}

// Vanilla hostile mob loot tables for seasonal drops
const HOSTILE_MOBS = [
    'minecraft:entities/zombie',
    'minecraft:entities/skeleton',
    'minecraft:entities/husk',
    'minecraft:entities/zombie_villager',
    'minecraft:entities/spider',
    'minecraft:entities/wither_skeleton',
    'minecraft:entities/stray',
    'minecraft:entities/endermite',
    'minecraft:entities/enderman',
    'minecraft:entities/creeper',
    'minecraft:entities/zombified_piglin',  // 1.13+ rename
    'minecraft:entities/ghast',
    'minecraft:entities/blaze',
    'minecraft:entities/cave_spider',
    'minecraft:entities/witch',
    'minecraft:entities/slime',
    'minecraft:entities/magma_cube',
    'minecraft:entities/drowned',           // 1.13+
    'minecraft:entities/phantom',           // 1.13+
    'minecraft:entities/pillager',          // 1.14+
    'minecraft:entities/vindicator',
    'minecraft:entities/evoker',
]

// All slime-family tables that should drop the Slime Crown
const SLIME_TABLES = [
    'minecraft:entities/slime',
    'minecraft:entities/magma_cube',
]

LootJS.modifiers((event) => {
    // ---- Mowzie's ferrous_wroughtnaut bonus drops ----
    try {
        event.addLootTableModifier('mowziesmobs:entities/ferrous_wroughtnaut')
            .addLoot({ item: 'minecraft:iron_ingot', count: { min: 32, max: 64 } })
            .addLoot({ item: 'thermal:iron_dust', count: { min: 4, max: 16 } })
        console.info('[loot_mobs] wroughtnaut bonus drops registered')
    } catch (e) {
        console.warn('[loot_mobs] wroughtnaut: ' + e)
    }

    // ---- Slime Crown drops on all slime-family kills ----
    // Base 0.5% + 0.25% per Looting level. killed_by_player required.
    try {
        event.addLootTableModifier(SLIME_TABLES)
            .killedByPlayer()
            .randomChanceWithLooting(0.005, 0.0025)
            .addLoot(Item.of('soa_additions:slime_crown'))
        console.info('[loot_mobs] slime crown drop registered')
    } catch (e) {
        console.warn('[loot_mobs] slime crown: ' + e)
    }

    // ---- Seasonal Christmas gift on hostile kills ----
    if (isChristmas()) {
        try {
            event.addLootTableModifier(HOSTILE_MOBS)
                .killedByPlayer()
                .randomChanceWithLooting(0.0, 0.005)
                .addLoot(Item.of('soa_additions:gift'))
            console.info('[loot_mobs] Christmas gift drop active')
        } catch (e) {
            console.warn('[loot_mobs] xmas gift: ' + e)
        }
    }

    // ---- Seasonal Lunar New Year red packet on hostile kills ----
    if (isLunarNewYear()) {
        try {
            event.addLootTableModifier(HOSTILE_MOBS)
                .killedByPlayer()
                .randomChanceWithLooting(0.0, 0.005)
                .addLoot(Item.of('soa_additions:red_packet'))
            console.info('[loot_mobs] Lunar New Year drop active')
        } catch (e) {
            console.warn('[loot_mobs] LNY: ' + e)
        }
    }
})

console.info('[soa_scripts] loot_mobs.js: registered')
