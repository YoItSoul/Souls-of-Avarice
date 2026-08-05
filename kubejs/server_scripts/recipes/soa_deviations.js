// priority: -100
// ============================================================
// SoA deliberate deviations from GreedyCraft recipe parity.
//
// Deviations live here rather than in recipes/ported_gc/* so the ported GC
// scripts stay a faithful 1:1 translation. Negative priority = this file loads
// last, so re-adds here are not caught by the bulk removals in
// recipes/ported_gc/vanilla_remove.js.
// ============================================================

console.info('[soa_deviations] loading')

ServerEvents.recipes(event => {
    // --- Crafting Table: restore vanilla's 2x2 planks recipe ---------------
    // GC removed vanilla's crafting table recipe (remove.zs:78) and moved the
    // 2x2-planks pattern onto the TConstruct Crafting Station instead
    // (shaped.zs:347, auto_gen_-444867109), leaving 4 logs -> 4 tables
    // (auto_gen_288981592) as the only source of a vanilla crafting table.
    // TConstruct is gone in SoA and Smithery ships no Crafting Station
    // analogue, so GC's planks path vanished with it -- re-add it as vanilla had
    // it. The 4-logs recipe stays as the bulk/bootstrap source.
    //
    // Gated behind getting_started by soa_recipe_stages.zs, plus the existing
    // forge:workbenches and minecraft:planks ItemStages restrictions in
    // soa_item_stages.zs (both already getting_started).
    event.shaped(Item.of('minecraft:crafting_table', 1), ['AA', 'AA'], {
        A: '#minecraft:planks'
    }).id('soa_deviations:crafting_table_from_planks')

    console.info('[soa_deviations] DONE')
})
