// Ported from GreedyCraft: scripts/recipes/vanilla/crafting_table/compressing.zs
// 1.12.2 CraftTweaker -> 1.20.1 KubeJS
//
// GC's addCompressingRecipe registers a 3x3 shaped recipe (9 of src -> 1 of
// compressed) AND a shapeless uncraft (1 compressed -> 9 of src). We mirror
// both directions via event.shaped / event.shapeless.
//
// ID rewrites applied:
//   additions:<metal>_ingot / additions:greedycraft-<metal>_block ->
//     soa_additions:<metal>_ingot / soa_additions:<metal>_block (FIXME: block items NOT
//     registered in soa_additions for: aqualite, manganese_steel, durasteel,
//     aeonsteel, chromasteel. Only soa_additions:modularium_ingot has a storage block tag.)
//   additions:greedycraft-time_* -> soa_additions:time_*
//   modularmachinery:itemmodularium -> soa_additions:modularium_ingot
//
// Taiga metals (70+ entries) entirely absent; not ported.

console.info('[soa_ported] vanilla_compressing.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] vanilla_compressing.js: registering recipes')

    const compress = (ingot, block, name) => {
        event.shaped(Item.of(block, 1), ['XXX', 'XXX', 'XXX'], { X: ingot })
            .id('soa_ported:compress_' + name)
        event.shapeless(Item.of(ingot, 9), [block])
            .id('soa_ported:uncompress_' + name)
    }

    // time_fragment -> time_shard -> sand_of_time (3-stage compressing chain)
    compress('soa_additions:time_fragment', 'soa_additions:time_shard', 'time_shard')
    compress('soa_additions:time_shard',    'soa_additions:sand_of_time', 'sand_of_time')

    // FIXME(blocks-pending): soa_additions has no storage blocks for these metals.
    // If blocks are added later, re-enable:
    // compress('soa_additions:aqualite_ingot',        'soa_additions:aqualite_block',        'aqualite')
    // compress('soa_additions:manganese_steel_ingot', 'soa_additions:manganese_steel_block', 'manganese_steel')
    // compress('soa_additions:durasteel_ingot',       'soa_additions:durasteel_block',       'durasteel')
    // compress('soa_additions:aeonsteel_ingot',       'soa_additions:aeonsteel_block',       'aeonsteel')
    // compress('soa_additions:chromasteel_ingot',     'soa_additions:chromasteel_block',     'chromasteel')

    // modularium has a #forge:storage_blocks/modularium tag — but GC's target
    // item was additions:greedycraft-modularium_block, which may not be registered
    // as an item in soa_additions. Skip until a concrete block item is identified.
    // compress('soa_additions:modularium_ingot', 'soa_additions:modularium_block', 'modularium')

    // Taiga metal nugget/ingot/block compressing chains: mod absent.
    console.info('[soa_ported] vanilla_compressing.js: DONE')
})
