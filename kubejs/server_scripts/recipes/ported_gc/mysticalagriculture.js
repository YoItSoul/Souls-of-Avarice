// Ported from GreedyCraft: scripts/recipes/mods/mysticalagriculture.zs
// 1.12.2 CraftTweaker -> 1.20.1 KubeJS
// IDs verified via soa_exports/items.json.
//
// GC's registerSeedRecipe(seed, baseItem, tier, outputCount, essence, optionalOutput)
// expands to five recipes; only the vanilla 8-essence shaped crafting
// (step "d") is portable cross-version:
//
//   EEE      E = essence; result = optionalOutput (if non-null)
//   E E                         else baseItem * outputCount
//   EEE
//
// Essence IDs confirmed in soa_exports/items.json:
//   mysticalagriculture:titanium_essence  ✓
//   mysticalagriculture:chrome_essence    ✓   (NOT "chromium_essence")
//
// Essence IDs NOT PRESENT in installed MysticalAgriculture/Agradditions:
//   cake_essence, witch_essence, stainless_steel_essence,
//   fusion_matrix_essence, meteor_essence
// -> Recipes left with FIXME; user to register custom essences via
//    MysticalCustomization datapack or choose closest analog.
//
// ID mapping (see memory/project_gc_port_id_mapping.md):
//   additions:<metal>_ingot                -> soa_additions:<metal>_ingot
//   additions:greedycraft-titanium_nugget  -> soa_additions:titanium_nugget
//   tconevo:material (meta 0)              -> soa_additions:fusion_matrix_ingot
//   nyx:meteor_ingot                       -> soa_additions:meteor_ingot

console.info('[soa_ported] mysticalagriculture.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] mysticalagriculture.js: registering recipes')

    // registerSeedRecipe(<mysticalcreations:titanium_seeds>, <additions:titanium_ingot>, 6, 1, <mysticalcreations:titanium_essence>, <additions:greedycraft-titanium_nugget>);
    event.shaped(
        Item.of('soa_additions:titanium_nugget', 1),
        ['EEE', 'E E', 'EEE'],
        { E: 'mysticalagriculture:titanium_essence' } // verified in items.json
    ).id('soa_ported:titanium_seeds_essence')

    // registerSeedRecipe(<mysticalcreations:chromium_seeds>, <additions:chromium_ingot>, 5, 1, <mysticalcreations:chromium_essence>, null);
    event.shaped(
        Item.of('soa_additions:chromium_ingot', 1),
        ['EEE', 'E E', 'EEE'],
        { E: 'mysticalagriculture:chrome_essence' } // verified: "chrome", not "chromium"
    ).id('soa_ported:chromium_seeds_essence')

    // registerSeedRecipe(<mysticalcreations:cake_seeds>, <minecraft:cake>, 3, 2, <mysticalcreations:cake_essence>, null);
    // FIXME: cake_essence not registered; needs MysticalCustomization datapack entry.
    // event.shaped(
    //     Item.of('minecraft:cake', 2),
    //     ['EEE', 'E E', 'EEE'],
    //     { E: 'mysticalcreations:cake_essence' }
    // ).id('soa_ported:cake_seeds_essence')

    // registerSeedRecipe(<mysticalcreations:witch_seeds>, <mysticalcreations:witch_chunk>, 4, 1, <mysticalcreations:witch_essence>, null);
    // FIXME: witch_essence + witch_chunk not registered; pending MC datapack.
    // event.shaped(
    //     Item.of('mysticalcreations:witch_chunk', 1),
    //     ['EEE', 'E E', 'EEE'],
    //     { E: 'mysticalcreations:witch_essence' }
    // ).id('soa_ported:witch_seeds_essence')

    // registerSeedRecipe(<mysticalcreations:stainless_steel_seeds>, <additions:stainless_steel_ingot>, 5, 1, <mysticalcreations:stainless_steel_essence>, null);
    // FIXME: stainless_steel_essence not registered in MA or MAgradditions.
    // event.shaped(
    //     Item.of('soa_additions:stainless_steel_ingot', 1),
    //     ['EEE', 'E E', 'EEE'],
    //     { E: 'mysticalcreations:stainless_steel_essence' }
    // ).id('soa_ported:stainless_steel_seeds_essence')

    // registerSeedRecipe(<mysticalcreations:fusion_matrix_seeds>, <tconevo:material>, 6, 1, <mysticalcreations:fusion_matrix_essence>, <tconevo:material>);
    // FIXME: fusion_matrix_essence not registered; pending MC datapack entry.
    // event.shaped(
    //     Item.of('soa_additions:fusion_matrix_ingot', 1),
    //     ['EEE', 'E E', 'EEE'],
    //     { E: 'mysticalcreations:fusion_matrix_essence' }
    // ).id('soa_ported:fusion_matrix_seeds_essence')

    // registerSeedRecipe(<mysticalcreations:meteor_seeds>, <nyx:meteor_ingot>, 5, 1, <mysticalcreations:meteor_essence>, <nyx:meteor_ingot>);
    // FIXME: meteor_essence not registered; pending MC datapack entry.
    // event.shaped(
    //     Item.of('soa_additions:meteor_ingot', 1),
    //     ['EEE', 'E E', 'EEE'],
    //     { E: 'mysticalcreations:meteor_essence' }
    // ).id('soa_ported:meteor_seeds_essence')
    console.info('[soa_ported] mysticalagriculture.js: DONE')
})
