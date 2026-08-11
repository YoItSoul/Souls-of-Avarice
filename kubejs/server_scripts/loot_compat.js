console.info('[soa_scripts] loot_compat.js loading')

LootJS.modifiers((event) => {

    const PLANT_BLOCKS = [
        'minecraft:grass',
        'minecraft:tall_grass',
        'minecraft:fern',
        'minecraft:large_fern',
        'minecraft:vine',

    ]
    for (const block of PLANT_BLOCKS) {
        try {
            event.addLootTableModifier('minecraft:blocks/' + block.split(':')[1])
                .randomChance(0.005)
                .addLoot(Item.of('soa_additions:lucky_clover'))
        } catch (e) {  }
    }

    try {

        console.info('[loot_compat] bedrock drop: skipped (LootJS cannot override empty vanilla bedrock table)')
    } catch (e) {  }

    try {

        console.info('[loot_compat] end_portal_frame drop: skipped (no vanilla loot table)')
    } catch (e) {  }
})

console.info('[soa_scripts] loot_compat.js: registered')
