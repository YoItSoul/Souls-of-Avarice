console.info('[soa_ported] enderio.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] enderio.js: registering recipes')

    event.custom({
        type: 'enderio:sag_milling',
        energy: 12000,
        input:   { tag: 'forge:dungeon_loot_tier_1' },
        outputs: [
            { chance: 0.2, item: { item: 'soa_additions:time_fragment' },    optional: false },
            { chance: 0.2, item: { item: 'soa_additions:time_fragment' },    optional: false },
            { chance: 0.5, item: { item: 'soa_additions:experience_ingot' }, optional: false }
        ]
    })
    event.custom({
        type: 'enderio:sag_milling',
        energy: 30000,
        input:   { tag: 'forge:dungeon_loot_tier_2' },
        outputs: [
            { chance: 0.1, item: { item: 'soa_additions:time_fragment',    count: 2 }, optional: false },
            { chance: 0.3, item: { item: 'soa_additions:time_fragment' },              optional: false },
            { chance: 0.3, item: { item: 'soa_additions:time_fragment' },              optional: false },
            { chance: 0.5, item: { item: 'soa_additions:experience_ingot', count: 3 }, optional: false }
        ]
    })
    event.custom({
        type: 'enderio:sag_milling',
        energy: 100000,
        input:   { tag: 'forge:dungeon_loot_tier_3' },
        outputs: [
            { chance: 0.3, item: { item: 'soa_additions:time_fragment',    count: 6  }, optional: false },
            { chance: 0.4, item: { item: 'soa_additions:time_fragment',    count: 4  }, optional: false },
            { chance: 0.5, item: { item: 'soa_additions:time_fragment',    count: 3  }, optional: false },
            { chance: 0.6, item: { item: 'soa_additions:experience_ingot', count: 16 }, optional: false }
        ]
    })

    event.custom({
        type: 'enderio:sag_milling',
        energy: 600,
        input: { item: 'botania:pure_daisy' },
        outputs: [
            { chance: 1.0, item: { item: 'soa_additions:purifying_dust', count: 8 }, optional: false }
        ]
    })

    event.remove({ type: 'enderio:sag_milling', input: 'minecraft:coal' })

    event.remove({ type: 'enderio:alloy_smelting', output: 'thermal:enderium_ingot' })

    event.remove({ type: 'enderio:alloy_smelting', output: 'enderio:end_steel_ingot' })

    event.custom({
        type: 'enderio:alloy_smelting',
        energy: 2000,
        experience: 10.0,
        inputs: [
            { count: 1, ingredient: { tag: 'forge:ingots/iron' } },
            { count: 1, ingredient: { tag: 'forge:ingots/bronze' } },
            { count: 1, ingredient: { tag: 'forge:dusts/redstone' } }
        ],
        result: { count: 2, item: 'soa_additions:modularium_ingot' }
    })

    event.custom({
        type: 'enderio:alloy_smelting',
        energy: 2000,
        experience: 10.0,
        inputs: [
            { count: 1, ingredient: { item: 'enderio:conductive_alloy_ingot' } },
            { count: 1, ingredient: { tag: 'forge:ingots/bronze' } }
        ],
        result: { count: 2, item: 'soa_additions:modularium_ingot' }
    })

    event.custom({
        type: 'enderio:alloy_smelting',
        energy: 7500,
        experience: 30.0,
        inputs: [
            { count: 1, ingredient: { item: 'taiga:adamant_ingot' } },
            { count: 2, ingredient: { tag: 'forge:ingots/manyullyn' } },
            { count: 2, ingredient: { tag: 'forge:ingots/enderium' } }
        ],
        result: { count: 2, item: 'soa_additions:fusion_matrix_ingot' }
    })

    event.custom({
        type: 'enderio:alloy_smelting',
        energy: 6000,
        experience: 50.0,
        inputs: [
            { count: 4, ingredient: { item: 'minecraft:ancient_debris' } },
            { count: 4, ingredient: { tag: 'forge:ingots/gold' } }
        ],
        result: { count: 1, item: 'minecraft:netherite_ingot' }
    })

    event.custom({
        type: 'enderio:alloy_smelting',
        energy: 4000,
        experience: 12.0,
        inputs: [
            { count: 4, ingredient: { tag: 'forge:ingots/manganese_steel' } },
            { count: 1, ingredient: { tag: 'forge:ingots/nickel' } },
            { count: 1, ingredient: { tag: 'forge:ingots/chromium' } }
        ],
        result: { count: 4, item: 'soa_additions:stainless_steel_ingot' }
    })

    event.custom({
        type: 'enderio:alloy_smelting',
        energy: 1200,
        experience: 4.0,
        inputs: [
            { count: 2, ingredient: { tag: 'forge:ingots/steel' } },
            { count: 1, ingredient: { tag: 'forge:ingots/manganese' } }
        ],
        result: { count: 2, item: 'soa_additions:manganese_steel_ingot' }
    })

    event.custom({
        type: 'enderio:alloy_smelting',
        energy: 800,
        experience: 2.0,
        inputs: [
            { count: 1, ingredient: { tag: 'forge:obsidian' } },
            { count: 2, ingredient: { item: 'enderio:dark_steel_ingot' } },
            { count: 1, ingredient: { tag: 'forge:ender_pearls' } }
        ],
        result: { count: 2, item: 'enderio:end_steel_ingot' }
    })

    console.info('[soa_ported] enderio.js: DONE')
})
