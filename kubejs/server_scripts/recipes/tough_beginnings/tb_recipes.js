ServerEvents.recipes(event => {
    event.remove({id: 'tough_beginnings:woodblock'})
    event.remove({id: 'tough_beginnings:woodblock_2'})
    
    event.custom({
        type: 'minecraft:campfire_cooking',
        ingredient: { item: 'tough_beginnings:block_of_wood' },
        result: 'tough_beginnings:tough_block_of_wood',
        experience: 10,
        cookingtime: 200
    })

    event.custom({
        type: 'minecraft:smelting',
        ingredient: { item: 'tough_beginnings:block_of_wood' },
        result: 'tough_beginnings:tough_block_of_wood',
        experience: 10,
        cookingtime: 100
    })

    event.custom({
        type: 'minecraft:crafting_shaped',
        pattern: [
            ' S ',
            'SFS',
            'LLL'
        ],
        key: {
            S: { item: 'minecraft:stick' },
            F: { item: 'tough_beginnings:pile_of_fiber' },
            L: { tag: 'minecraft:logs' }
        },
        result: {
            item: 'minecraft:campfire',
            count: 1
        }
    })
})