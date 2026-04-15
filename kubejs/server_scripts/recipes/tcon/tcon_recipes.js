ServerEvents.recipes(event => {
    event.custom({
        type: 'tconstruct:melting',
        ingredient: { item: 'minecraft:andesite' },
        result: {
            fluid: 'kubejs:molten_andesite',
            amount: 144
        },
        temperature: 850,
        time: 150
    })

    event.custom({
        type: 'tconstruct:alloy',
        inputs: [
            { fluid: 'kubejs:molten_andesite', amount: 144 },
            { tag: 'forge:molten_iron', amount: 144 }
        ],
        result: {
            fluid: 'kubejs:molten_andesite_alloy',
            amount: 144
        },
        temperature: 950,
        time: 50
    })

    event.custom({
        type: 'tconstruct:alloy',
        inputs: [
            { fluid: 'kubejs:molten_andesite', amount: 144 },
            { tag: 'forge:molten_zinc', amount: 144 }
        ],
        result: {
            fluid: 'kubejs:molten_andesite_alloy',
            amount: 144
        },
        temperature: 950,
        time: 30
    })

    event.custom({
        type: 'tconstruct:casting_table',
        cast: { item: 'tconstruct:rod_cast' },
        fluid: { fluid: 'kubejs:molten_andesite_alloy', amount: 18 },
        result: { item: 'create:shaft' },
        cooling_time: 60
    })

    event.custom({
        type: 'tconstruct:casting_basin',
        fluid: { fluid: 'kubejs:molten_andesite', amount: 1296 },
        result: { item: 'minecraft:andesite' },
        cooling_time: 150
    })

    event.custom({
        type: 'tconstruct:casting_table',
        cast: { tag: 'tconstruct:casts/multi_use/ingot' },
        fluid: { fluid: 'kubejs:molten_andesite_alloy', amount: 144 },
        result: { item: 'create:andesite_alloy' },
        cooling_time: 30
    })

    event.custom({
        type: 'tconstruct:casting_basin',
        fluid: { fluid: 'kubejs:molten_andesite_alloy', amount: 1296 },
        result: { item: 'create:andesite_alloy_block' },
        cooling_time: 150
    })

    event.remove({ id: 'tconstruct:tables/pattern' })

    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            { item: 'tough_beginnings:tough_block_of_wood' },
            { item: 'tough_beginnings:tough_block_of_wood' },
            { item: 'tough_beginnings:tough_block_of_wood' },
            { item: 'tough_beginnings:tough_block_of_wood' }
        ],
        result: {
            item: 'tconstruct:pattern',
            count: 1
        }
    })
})
