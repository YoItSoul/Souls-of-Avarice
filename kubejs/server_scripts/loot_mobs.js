console.info('[soa_scripts] loot_mobs.js loading')

function isChristmas() {
    const now = new Date()

    return now.getMonth() === 11 && now.getDate() >= 20 && now.getDate() <= 27
}
function isLunarNewYear() {

    const now = new Date()
    return (now.getMonth() === 0 && now.getDate() >= 22) ||
           (now.getMonth() === 1 && now.getDate() <= 12)
}

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
    'minecraft:entities/zombified_piglin',
    'minecraft:entities/ghast',
    'minecraft:entities/blaze',
    'minecraft:entities/cave_spider',
    'minecraft:entities/witch',
    'minecraft:entities/slime',
    'minecraft:entities/magma_cube',
    'minecraft:entities/drowned',
    'minecraft:entities/phantom',
    'minecraft:entities/pillager',
    'minecraft:entities/vindicator',
    'minecraft:entities/evoker',
]

const SLIME_TABLES = [
    'minecraft:entities/slime',
    'minecraft:entities/magma_cube',
]

LootJS.modifiers((event) => {

    try {
        event.addLootTableModifier('mowziesmobs:entities/ferrous_wroughtnaut')
            .addLoot({ item: 'minecraft:iron_ingot', count: { min: 32, max: 64 } })
            .addLoot({ item: 'thermal:iron_dust', count: { min: 4, max: 16 } })
        console.info('[loot_mobs] wroughtnaut bonus drops registered')
    } catch (e) {
        console.warn('[loot_mobs] wroughtnaut: ' + e)
    }

    try {
        event.addLootTableModifier(SLIME_TABLES)
            .killedByPlayer()
            .randomChanceWithLooting(0.005, 0.0025)
            .addLoot(Item.of('soa_additions:slime_crown'))
        console.info('[loot_mobs] slime crown drop registered')
    } catch (e) {
        console.warn('[loot_mobs] slime crown: ' + e)
    }

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
