// Ported from GreedyCraft: scripts/recipes/mods/enderio.zs
// 1.12.2 CraftTweaker -> 1.20.1 KubeJS
// IDs verified via soa_exports/items.json.
//
// EnderIO 1.20.1 recipe types (FIXME: schemas best-guess):
//   SagMill       -> enderio:sagmill
//   AlloySmelter  -> enderio:alloy_smelting
//
// Verified 1.20 EIO IDs:
//   enderio:dark_steel_ingot, enderio:end_steel_ingot, enderio:conductive_alloy_ingot
//   (conductiveIron renamed to conductive_alloy)
//
// forge:dungeonLootTier1/2/3 -- GC-specific ore dict. NOT present in SoA
// tags.json; those recipes need the tag to be created via datapack first.
// Left with FIXME on the tag reference.

console.info('[soa_ported] enderio.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] enderio.js: registering recipes')

    // ---- SagMill ----

    // EIO 1.20 sag_milling schema: { type:"enderio:sag_milling", energy, input:{item|tag},
    //   outputs:[{ chance:0-1, item:{item:"..."}, optional:false }] }
    // GC 1.12 bonus_chance/bonus_type have no EIO 1.20 analog — dropped.
    // GC chance is 0-100 percent; EIO uses 0.0-1.0. Translate by /100.
    // forge:dungeon_loot_tier_* tags must be defined by datapack for inputs to match.

    // SagMill.addRecipe([<additions:greedycraft-time_fragment>*2, <additions:greedycraft-experience_ingot>], ..., <ore:dungeonLootTier1>, "CHANCE_ONLY", 12000, ...);
    event.custom({
        type: 'enderio:sag_milling',
        energy: 12000,
        input:   { tag: 'forge:dungeon_loot_tier_1' }, // FIXME: tag needs to be defined in soa_additions tag datapack
        outputs: [
            { chance: 0.2, item: { item: 'soa_additions:time_fragment' },    optional: false },
            { chance: 0.2, item: { item: 'soa_additions:time_fragment' },    optional: false },
            { chance: 0.5, item: { item: 'soa_additions:experience_ingot' }, optional: false }
        ]
    })
    event.custom({
        type: 'enderio:sag_milling',
        energy: 30000,
        input:   { tag: 'forge:dungeon_loot_tier_2' }, // FIXME: tag needs to be defined
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
        input:   { tag: 'forge:dungeon_loot_tier_3' }, // FIXME: tag needs to be defined
        outputs: [
            { chance: 0.3, item: { item: 'soa_additions:time_fragment',    count: 6  }, optional: false },
            { chance: 0.4, item: { item: 'soa_additions:time_fragment',    count: 4  }, optional: false },
            { chance: 0.5, item: { item: 'soa_additions:time_fragment',    count: 3  }, optional: false },
            { chance: 0.6, item: { item: 'soa_additions:experience_ingot', count: 16 }, optional: false }
        ]
    })

    // SagMill.addRecipe([<nyx:meteor_dust>], [100], <ore:ingotMeteor>, "CHANCE_ONLY", 600, [100]);
    // FIXME: meteor_dust not registered in SoA -> output cannot be produced; recipe NOT ported.
    // SagMill.addRecipe([<nyx:meteor_dust>], [100], <ore:shardMeteor>, ...);   // same FIXME
    // SagMill.addRecipe([<nyx:meteor_dust>*9], [100], <ore:blockMeteor>, ...); // same FIXME

    // SagMill.addRecipe([<additions:greedycraft-purifying_dust>*8], [100], <botania:specialflower>.withTag({type:"puredaisy"}), "CHANCE_ONLY", 600, [100]);
    event.custom({
        type: 'enderio:sag_milling',
        energy: 600,
        input: { item: 'botania:pure_daisy' }, // 1.20 botania: specialflower{puredaisy} -> pure_daisy item
        outputs: [
            { chance: 1.0, item: { item: 'soa_additions:purifying_dust', count: 8 }, optional: false }
        ]
    })

    // SagMill.removeRecipe(<minecraft:coal>);
    event.remove({ type: 'enderio:sag_milling', input: 'minecraft:coal' })
    // SagMill.removeRecipe(<actuallyadditions:block_misc:2>);             // actuallyadditions absent -> skipped
    // SagMill.addRecipe([<actuallyadditions:item_dust:7>*4], ...);        // actuallyadditions absent -> skipped


    // ---- AlloySmelter ----

    // EIO 1.20 alloy_smelting schema (verified from data/enderio/recipes/alloy_smelting/cake_base.json):
    //   inputs: [{ count, ingredient: { item|tag } }, ...]
    //   result: { count, item }
    // GC's old shape (inputs:[{tag/item, count}], output:{}) silently fails parse with
    // "Item cannot be null".

    // AlloySmelter.removeRecipe(<thermalfoundation:material:160>);    // enderium ingot
    event.remove({ type: 'enderio:alloy_smelting', output: 'thermal:enderium_ingot' })
    // AlloySmelter.removeRecipe(<enderio:item_alloy_ingot:8>);         // end steel
    event.remove({ type: 'enderio:alloy_smelting', output: 'enderio:end_steel_ingot' })
    // AlloySmelter.removeRecipe(<enderio:item_material:54>);           // enhanced end-steel machine chassis
    // SKIPPED: enderio:enhanced_machine_chassis does not exist in 1.20 EIO 6.2.18 (confirmed via
    // soa_exports/items.json — only ensouled_chassis and void_chassis ship). Both the remove
    // and the corresponding add below are dropped.

    // AlloySmelter.addRecipe(<modularmachinery:itemmodularium>*2, [<ore:ingotIron>, <ore:ingotBronze>, <ore:dustRedstone>], 2000, 10.0f);
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
    // AlloySmelter.addRecipe(<modularmachinery:itemmodularium>*2, [<ore:ingotConductiveIron>, <ore:ingotBronze>], 2000, 10.0f);
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
    // AlloySmelter.addRecipe(<tconevo:material>*2, [<ore:ingotAdamant>, <ore:ingotManyullyn>*2, <ore:ingotEnderium>*2], 7500, 30.0f);
    // tconevo:material -> soa_additions:fusion_matrix_ingot
    // forge:ingots/adamant tag does not exist in this pack (only taiga:tinker_materials/adamant).
    // Fall back to the direct item id taiga:adamant_ingot.
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
    // AlloySmelter.addRecipe(<additions:netherite_ingot>, [<ore:gemAncientDebris>*4, <ore:ingotGold>*4], 6000, 50.0f);
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
    // AlloySmelter.addRecipe(<additions:stainless_steel_ingot>*4, [<ore:ingotManganeseSteel>*4, <ore:ingotNickel>, <ore:ingotChromium>], 4000, 12.0f);
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
    // AlloySmelter.addRecipe(<additions:manganese_steel_ingot>*2, [<ore:ingotSteel>*2, <ore:ingotManganese>], 1200, 4.0f);
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
    // AlloySmelter.addRecipe(<enderio:item_alloy_ingot:8>*2, [<ore:obsidian>, <ore:ingotDarkSteel>*2, <ore:enderpearl>], 800, 2.0f);
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
    // SKIPPED: AlloySmelter.addRecipe(enhanced_machine_chassis, ...) — output item not present in 1.20 EIO.
    console.info('[soa_ported] enderio.js: DONE')
})
