console.info('[soa_ported] vanilla_compressing.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] vanilla_compressing.js: registering recipes')

    const compress = (ingot, block, name) => {
        event.shaped(Item.of(block, 1), ['XXX', 'XXX', 'XXX'], { X: ingot })
            .id('soa_ported:compress_' + name)
        event.shapeless(Item.of(ingot, 9), [block])
            .id('soa_ported:uncompress_' + name)
    }

    compress('soa_additions:time_fragment', 'soa_additions:time_shard', 'time_shard')
    compress('soa_additions:time_shard',    'soa_additions:sand_of_time', 'sand_of_time')

    console.info('[soa_ported] vanilla_compressing.js: DONE')
})
