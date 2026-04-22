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

    // AlloySmelter.removeRecipe(<thermalfoundation:material:160>);    // enderium ingot
    event.remove({ type: 'enderio:alloy_smelting', output: 'thermal:enderium_ingot' })
    // AlloySmelter.removeRecipe(<enderio:item_alloy_ingot:8>);         // end steel
    event.remove({ type: 'enderio:alloy_smelting', output: 'enderio:end_steel_ingot' })
    // AlloySmelter.removeRecipe(<enderio:item_material:54>);           // enhanced end-steel machine chassis
    event.remove({ type: 'enderio:alloy_smelting', output: 'enderio:enhanced_machine_chassis' }) // FIXME: confirm 1.20 EIO ID

    // AlloySmelter.addRecipe(<modularmachinery:itemmodularium>*2, [<ore:ingotIron>, <ore:ingotBronze>, <ore:dustRedstone>], 2000, 10.0f);
    event.custom({
        type: 'enderio:alloy_smelting',
        inputs: [{ tag: 'forge:ingots/iron' }, { tag: 'forge:ingots/bronze' }, { tag: 'forge:dusts/redstone' }],
        output: { item: 'soa_additions:modularium_ingot', count: 2 },
        energy: 2000,
        experience: 10.0
    })
    // AlloySmelter.addRecipe(<modularmachinery:itemmodularium>*2, [<ore:ingotConductiveIron>, <ore:ingotBronze>], 2000, 10.0f);
    event.custom({
        type: 'enderio:alloy_smelting',
        inputs: [{ item: 'enderio:conductive_alloy_ingot' }, { tag: 'forge:ingots/bronze' }],
        output: { item: 'soa_additions:modularium_ingot', count: 2 },
        energy: 2000,
        experience: 10.0
    })
    // AlloySmelter.addRecipe(<tconevo:material>*2, [<ore:ingotAdamant>, <ore:ingotManyullyn>*2, <ore:ingotEnderium>*2], 7500, 30.0f);
    // tconevo:material -> soa_additions:fusion_matrix_ingot
    event.custom({
        type: 'enderio:alloy_smelting',
        inputs: [
            { tag: 'forge:ingots/adamant' }, // FIXME: tag may not exist -- "adamant" was GC ore dict
            { tag: 'forge:ingots/manyullyn', count: 2 },
            { tag: 'forge:ingots/enderium',  count: 2 }
        ],
        output: { item: 'soa_additions:fusion_matrix_ingot', count: 2 },
        energy: 7500,
        experience: 30.0
    })
    // AlloySmelter.addRecipe(<additions:netherite_ingot>, [<ore:gemAncientDebris>*4, <ore:ingotGold>*4], 6000, 50.0f);
    event.custom({
        type: 'enderio:alloy_smelting',
        inputs: [
            { item: 'minecraft:ancient_debris', count: 4 },
            { tag: 'forge:ingots/gold',         count: 4 }
        ],
        output: { item: 'minecraft:netherite_ingot' },
        energy: 6000,
        experience: 50.0
    })
    // AlloySmelter.addRecipe(<additions:stainless_steel_ingot>*4, [<ore:ingotManganeseSteel>*4, <ore:ingotNickel>, <ore:ingotChromium>], 4000, 12.0f);
    event.custom({
        type: 'enderio:alloy_smelting',
        inputs: [
            { tag: 'forge:ingots/manganese_steel', count: 4 },
            { tag: 'forge:ingots/nickel' },
            { tag: 'forge:ingots/chromium' }
        ],
        output: { item: 'soa_additions:stainless_steel_ingot', count: 4 },
        energy: 4000,
        experience: 12.0
    })
    // AlloySmelter.addRecipe(<additions:manganese_steel_ingot>*2, [<ore:ingotSteel>*2, <ore:ingotManganese>], 1200, 4.0f);
    event.custom({
        type: 'enderio:alloy_smelting',
        inputs: [
            { tag: 'forge:ingots/steel', count: 2 },
            { tag: 'forge:ingots/manganese' }
        ],
        output: { item: 'soa_additions:manganese_steel_ingot', count: 2 },
        energy: 1200,
        experience: 4.0
    })
    // AlloySmelter.addRecipe(<enderio:item_alloy_ingot:8>*2, [<ore:obsidian>, <ore:ingotDarkSteel>*2, <ore:enderpearl>], 800, 2.0f);
    event.custom({
        type: 'enderio:alloy_smelting',
        inputs: [
            { tag: 'forge:obsidian' },
            { item: 'enderio:dark_steel_ingot', count: 2 },
            { tag: 'forge:ender_pearls' }
        ],
        output: { item: 'enderio:end_steel_ingot', count: 2 },
        energy: 800,
        experience: 2.0
    })
    // AlloySmelter.addRecipe(<enderio:item_material:54>, [<ore:itemEndSteelMachineChassi>, <ore:dyeEnhancedMachine>, <ore:ingotDurasteel>*2], 24000, 60.0f);
    event.custom({
        type: 'enderio:alloy_smelting',
        inputs: [
            { tag: 'forge:end_steel_machine_chassis' },     // FIXME: tag/id
            { tag: 'forge:enhanced_machine_dye' },          // FIXME: tag/id
            { item: 'soa_additions:durasteel_ingot', count: 2 }
        ],
        output: { item: 'enderio:enhanced_machine_chassis' }, // FIXME: confirm 1.20 EIO ID
        energy: 24000,
        experience: 60.0
    })
    console.info('[soa_ported] enderio.js: DONE')
})
