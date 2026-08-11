console.info('[soa_scripts] loot_urns.js loading')

const URN_TABLES = [
    'supplementaries:blocks/urn_loot/common',
    'supplementaries:blocks/urn_loot/uncommon',
    'supplementaries:blocks/urn_loot/rare',
    'supplementaries:blocks/urn_loot/epic',
]

const VASE_TABLE = 'deeperdarker:blocks/ancient_vase'
const NOT_SILK = {
    condition: 'minecraft:inverted',
    term: {
        condition: 'minecraft:match_tool',
        predicate: {
            enchantments: [
                { enchantment: 'minecraft:silk_touch', levels: { min: 1 } },
            ],
        },
    },
}

const URN_LOOT = [
    ['soa_additions:medkit_super', 1, 1, 1],
    ['soa_additions:medkit_big', 4, 1, 3],
    ['soa_additions:medkit_small', 20, 1, 6],
    ['soa_additions:experience_ingot', 18, 2, 12],
    ['scalinghealth:heart_crystal_shard', 1, 1, 2],
    ['scalinghealth:heart_dust', 4, 4, 24],
    ['soa_additions:delivery_order', 8, 1, 1],
    ['soa_additions:tower_chest_key', 10, 1, 1],
    ['soa_additions:huaji', 8, 1, 2],
    ['waystones:return_scroll', 32, 2, 5],
    ['minecraft:gold_nugget', 20, 5, 12],
    ['minecraft:rotten_flesh', 50, 2, 14],
    ['minecraft:bone', 40, 2, 14],
    ['minecraft:cobweb', 30, 3, 7],
    ['minecraft:paper', 10, 2, 15],
    ['minecraft:copper_ingot', 10, 2, 12],
    ['thermal:tin_ingot', 10, 2, 12],
    ['thermal:bronze_ingot', 18, 2, 10],
    ['soa_additions:platinum_ingot', 6, 2, 6],
    ['thermal:silver_nugget', 8, 2, 8],
    ['soa_additions:food_bag', 2, 1, 1],
    ['soa_additions:furniture_crate', 2, 1, 1],
    ['minecraft:diamond', 2, 3, 8],
    ['soa_additions:purifying_dust', 3, 10, 40],
]

const URN_BAGS = [
    ['{"Loot":"soa_additions:loot_crate_common","Type":"COMMON","Name":"Common Loot Crate","Color":5635925}', 18, 1, 2],
    ['{"Loot":"soa_additions:loot_crate_rare","Type":"RARE","Name":"Rare Loot Crate","Color":5592575}', 5, 1, 1],
    ['{"Loot":"soa_additions:loot_crate_epic","Type":"EPIC","Name":"Epic Loot Crate","Color":16733695}', 1, 1, 1],
]

LootJS.modifiers((event) => {
    try {
        URN_LOOT.forEach(([item, weight, min, max]) => {
            event.addLootTableModifier(URN_TABLES)
                .addLoot({ item: item, count: min === max ? min : { min: min, max: max }, chance: weight / 100 })
        })
        URN_BAGS.forEach(([nbt, weight, min, max]) => {
            event.addLootTableModifier(URN_TABLES)
                .addLoot(Item.of('lootbags:loot_bag', nbt).withChance(weight / 100))
        })
        console.info('[loot_urns] supplementaries urn entries registered')
    } catch (e) {
        console.warn('[loot_urns] supplementaries: ' + e)
    }
    try {
        URN_LOOT.forEach(([item, weight, min, max]) => {
            event.addLootTableModifier(VASE_TABLE)
                .customCondition(NOT_SILK)
                .addLoot({ item: item, count: min === max ? min : { min: min, max: max }, chance: weight / 100 })
        })
        URN_BAGS.forEach(([nbt, weight, min, max]) => {
            event.addLootTableModifier(VASE_TABLE)
                .customCondition(NOT_SILK)
                .addLoot(Item.of('lootbags:loot_bag', nbt).withChance(weight / 100))
        })
        console.info('[loot_urns] deeperdarker ancient vase entries registered')
    } catch (e) {
        console.warn('[loot_urns] deeperdarker: ' + e)
    }
    console.info('[loot_urns] ' + (URN_LOOT.length + URN_BAGS.length) + ' GC urn entries -> supplementaries + deeperdarker')
})
