console.info('[soa_deviations] loading')

ServerEvents.recipes(event => {

    event.shaped(Item.of('minecraft:crafting_table', 1), ['AA', 'AA'], {
        A: '#minecraft:planks'
    }).id('soa_deviations:crafting_table_from_planks')

    console.info('[soa_deviations] DONE')
})
