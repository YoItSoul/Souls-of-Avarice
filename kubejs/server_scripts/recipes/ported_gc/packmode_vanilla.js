// Ported from GreedyCraft: scripts/recipes/packmode/vanilla.zs
// 1.12.2 CraftTweaker -> 1.20.1 KubeJS
//
// GC used a dual-mode helper `RecipeUtil.addModeRecipe(name, out, normalGrid, expertGrid)`
// that picked the grid at runtime based on GC's packmode setting.
// Currently only the expert grids are ported here; normal-mode variants of
// these dual-mode recipes are TODO. Gated by global.SOA_PACKMODE (see
// _packmode.js): runs only when SOA_PACKMODE === 'expert'.
//
// ID mapping applied:
//   additions:greedycraft-<X> -> soa_additions:<X>
//   <ore:ingot/block<Metal>> -> #forge:ingots/<metal>  or  #forge:storage_blocks/<metal>
//   <ore:planksBloodwood>    -> FIXME: soa_additions:bloodwood_planks NOT registered
//                                (only soa_additions:bloodwood_log exists)
//
// Absent in SoA:
//   bloodmagic:monster_soul     (BM 1.20 dropped this item)
//   modularmachinery:*          (Modular Machinery not installed;
//                                modularium_ingot absorbed into soa_additions)

console.info('[soa_ported] packmode_vanilla.js loading')

ServerEvents.recipes(event => {
    if (global.SOA_PACKMODE !== 'expert') {
        console.info('[soa_ported] packmode_vanilla.js: skipped (SOA_PACKMODE is not expert; normal variants TODO)')
        return
    }
    console.info('[soa_ported] packmode_vanilla.js: registering recipes')

    // --- blood_altar (expert variant) ---
    // [<ore:planksBloodwood>, null, <ore:planksBloodwood>]
    // [<ore:blockManyullyn>, <additions:greedycraft-bloody_sacrifice>, <ore:blockManyullyn>]
    // [<ore:ingotStainlessSteel>, <bloodmagic:monster_soul>, <ore:ingotStainlessSteel>]
    // FIXME: planksBloodwood + bloodmagic:monster_soul unavailable.
    // Substitute bloodwood_log and FIXME monster_soul until replacement is chosen.
    event.shaped(
        Item.of('bloodmagic:altar', 1),
        ['P P', 'BSB', 'ITI'],
        {
            P: 'soa_additions:bloodwood_log',          // FIXME: bloodwood_planks not registered
            B: '#forge:storage_blocks/manyullyn',
            S: 'soa_additions:bloody_sacrifice',
            I: '#forge:ingots/stainless_steel',
            T: 'bloodmagic:soulgempetty'                // FIXME: GC used bloodmagic:monster_soul; dropped in 1.20 -> soul gem petty as closest analog
        }
    ).id('soa_ported:blood_altar_expert')

    // --- modularmachinery:blockcasing tiered upgrades ---
    // Modular Machinery not installed in SoA 1.20.1.
    // The upgrade chain T1->T4 targets modularmachinery:blockcasing:1..5 outputs
    // which don't exist. Preserved as documentation:
    //
    //   T1 expert: [blockStainlessSteel, ingotModularium, ...] + blockcasing:4 -> blockcasing:1
    //   T2 expert: [blockDurasteel,      ingotModularium, ...] + blockcasing:1 -> blockcasing:2
    //   T3 expert: [blockAeonsteel,      ingotModularium, ...] + blockcasing:2 -> blockcasing:3
    //   T4 expert: [blockChromasteel,    ingotModularium, ...] + blockcasing:3 -> blockcasing:5
    //
    // If a 1.20 machine-casing analog is added later, port these then.
    console.info('[soa_ported] packmode_vanilla.js: DONE')
})
