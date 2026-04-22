// Ported from GreedyCraft: scripts/recipes/vanilla/crafting_table/changes.zs
// 1.12.2 CraftTweaker -> 1.20.1 KubeJS
//
// GC's RecipeUtil.removeAndAdd removes existing recipes producing <out> and
// adds a new shaped recipe. We emulate via event.remove({output}) +
// event.shaped(). RecipeUtil.removeAndAddShapeless is the shapeless variant.
//
// ID rewrites:
//   additions:greedycraft-<X> -> soa_additions:<X>
//   projecte:item.pe_matter:1 -> projecte:dark_matter
//   <ore:ingot<Metal>> -> #forge:ingots/<metal>
//   <ore:nuggetIron>   -> #forge:nuggets/iron  (vanilla)
//   <ore:gemDiamond>   -> #forge:gems/diamond
//   <ore:netherStar>   -> minecraft:nether_star
//   <ore:ingotBrick>   -> #forge:ingots/brick
//   <ore:shardTime>    -> soa_additions:time_shard
//   <ore:blockSupremiumEssence> -> mysticalagriculture:supremium_block
//   <ore:leather>      -> #forge:leather  (fallback: minecraft:leather)
//   <ore:wool>         -> #minecraft:wool
//
// Absent mods (recipes SKIPPED):
//   openblocks, extrautils2, bonsaitrees, hooked (microcrafting), rftools,
//   defiledlands, birdsfoods, charm, equivalentintegrations, actuallyadditions,
//   mekanism (laser_amplifier uses draconicevolution:chaotic_core — portable
//   iff mekanism:laser_amplifier exists in 1.20).

console.info('[soa_ported] vanilla_changes.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] vanilla_changes.js: registering recipes')

    // fusion_crafting_core: blockDurasteel (FIXME: no durasteel block item) +
    //                      draconic_core + fusion_matrix ingot
    // FIXME: draconicevolution:fusion_crafting_core is NOT registered in SoA's
    // Draconic Evolution build (only draconium_core/wyvern_core exist). Skip
    // re-crafting the core since the item itself isn't present.
    // event.remove({ output: 'draconicevolution:fusion_crafting_core' })
    // event.shaped(
    //     'draconicevolution:fusion_crafting_core',
    //     ['FDF', 'DCD', 'FDF'],
    //     {
    //         F: 'soa_additions:fusion_matrix_ingot',
    //         D: '#forge:ingots/durasteel',
    //         C: 'draconicevolution:draconium_core'
    //     }
    // ).id('soa_ported:fusion_crafting_core_gc')

    // master_infusion_crystal: supremium block corners + netherStar center +
    //                         durasteel ingots on sides
    // FIXME: mysticalagriculture:supremium_block vs insanium — verify target.
    event.remove({ output: 'mysticalagriculture:master_infusion_crystal' })
    event.shaped(
        'mysticalagriculture:master_infusion_crystal',
        ['DBD', 'BNB', 'DBD'],
        {
            D: '#forge:ingots/durasteel',
            B: 'mysticalagriculture:supremium_block',
            N: 'minecraft:nether_star'
        }
    ).id('soa_ported:master_infusion_crystal_gc')

    // Vanilla horse armor: keep GC's 3x3 crafting recipes (stock 1.20 vanilla
    // has no craft for these, so this adds them back).
    const horseArmor = (out, mat, name) => {
        event.remove({ output: out })
        event.shaped(out, ['MMM', 'LWL', 'MMM'], {
            M: mat, L: 'minecraft:leather', W: '#minecraft:wool'
        }).id('soa_ported:' + name)
    }
    horseArmor('minecraft:diamond_horse_armor', '#forge:gems/diamond', 'diamond_horse_armor')
    horseArmor('minecraft:golden_horse_armor',  '#forge:ingots/gold',  'gold_horse_armor')
    horseArmor('minecraft:iron_horse_armor',    '#forge:ingots/iron',  'iron_horse_armor')

    // --- Absent-mod recipes (kept for documentation) ---
    // exu_squid_ring, exu_angel_ring                 -> extrautils2 absent
    // quark_rainbow_rune                             -> quark runes 1.20 use named items; FIXME
    // iron_chain_ring (hooked:microcrafting:2)       -> hooked absent
    // bonsai_pot                                     -> bonsaitrees absent
    // laser_amplifier (mekanism:machineblock2:14)    -> 1.20 mekanism uses named items; FIXME
    // xu_overclocked_generator                       -> extrautils2 absent
    // storage_detector (rftools:storage_scanner)     -> rftools absent
    // idol_of_sorrow  (defiledlands:idol_sorrow)     -> defiledlands absent
    // birdsfoods_pita                                -> birdsfoods absent
    // lens_of_certain_death / lens_of_miner          -> actuallyadditions absent
    // transmutation_efficiency / charm / upgrade /
    //   machine_{0,1,2} (equivalentintegrations:*)   -> equivalentintegrations absent
    console.info('[soa_ported] vanilla_changes.js: DONE')
})
