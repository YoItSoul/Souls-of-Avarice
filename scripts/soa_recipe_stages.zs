// ============================================================
// SoA Recipe Stages - Ported from GreedyCraft
// Hides crafting recipes behind gamestages using RecipeStages.
// Mirrors the item restrictions in soa_item_stages.zs so that
// players cannot see or craft staged items until they unlock
// the required gamestage.
//
// Uses Recipes.setRecipeStage(stage, recipeName) for recipes by name,
// and Recipes.setRecipeStage(stage, output) for recipes by output item.
// Both are overloads of the same method.
//
// JEI hiding is handled automatically by ItemStages 8.0.3 and
// RecipeStages — staged items/recipes are hidden from JEI for
// players without the required stage (no script action needed).
// ============================================================

import mods.recipestages.Recipes;

// ============================================================
//  ABYSSAL_CONQUERER
// ============================================================

Recipes.setRecipeStage("abyssal_conquerer", <item:soa_additions:north_star>);
Recipes.setRecipeStage("abyssal_conquerer", <item:soa_additions:mirion_ingot>);

// ============================================================
//  AWAKENED
// ============================================================

Recipes.setRecipeStage("awakened", <item:draconicevolution:awakened_draconium_block>);
Recipes.setRecipeStage("awakened", <item:draconicevolution:awakened_draconium_ingot>);
Recipes.setRecipeStage("awakened", <item:draconicevolution:awakened_draconium_nugget>);
Recipes.setRecipeStage("awakened", <item:draconicevolution:awakened_crafting_injector>);
Recipes.setRecipeStage("awakened", <item:magicfeather:magic_feather>);
Recipes.setRecipeStage("awakened", <item:inventorypets:pet_cloud>);
Recipes.setRecipeStage("awakened", <item:avaritia:neutron_compressor>);
Recipes.setRecipeStage("awakened", <item:draconicevolution:chaos_shard>);
// SoA Additions awakened-tier alloys
Recipes.setRecipeStage("awakened", <item:soa_additions:chromasteel_ingot>);
Recipes.setRecipeStage("awakened", <item:soa_additions:protonium_ingot>);
Recipes.setRecipeStage("awakened", <item:soa_additions:terra_alloy_ingot>);
Recipes.setRecipeStage("awakened", <item:soa_additions:titanium_ingot>);
Recipes.setRecipeStage("awakened", <item:soa_additions:titanium_nugget>);
Recipes.setRecipeStage("awakened", <item:mysticalagriculture:titanium_essence>);
Recipes.setRecipeStage("awakened", <item:mysticalagriculture:titanium_seeds>);
// Draconic Evolution draconic tier tools/armor
Recipes.setRecipeStage("awakened", <item:draconicevolution:draconic_axe>);
Recipes.setRecipeStage("awakened", <item:draconicevolution:draconic_bow>);
Recipes.setRecipeStage("awakened", <item:draconicevolution:draconic_pickaxe>);
Recipes.setRecipeStage("awakened", <item:draconicevolution:draconic_shovel>);
Recipes.setRecipeStage("awakened", <item:draconicevolution:draconic_hoe>);
Recipes.setRecipeStage("awakened", <item:draconicevolution:draconic_sword>);
Recipes.setRecipeStage("awakened", <item:draconicevolution:draconic_chestpiece>);
Recipes.setRecipeStage("awakened", <item:draconicevolution:draconic_capacitor>);
// Draconic Additions draconic harness/necklace
Recipes.setRecipeStage("awakened", <item:draconicadditions:draconic_harness>);
Recipes.setRecipeStage("awakened", <item:draconicadditions:draconic_necklace>);

// ============================================================
//  CHALLENGER_A (Inferium tier)
// ============================================================

Recipes.setRecipeStage("challenger_a", <item:tinymobfarm:stone_farm>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_ingot>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_block>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_nugget>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_gemstone>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_gemstone_block>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_farmland>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_furnace>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_growth_accelerator>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_watering_can>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_upgrade>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_sword>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_pickaxe>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_axe>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_shovel>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_hoe>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_helmet>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_chestplate>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_leggings>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_boots>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_bow>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_crossbow>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_shears>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_fishing_rod>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_scythe>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_sickle>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_staff>);
Recipes.setRecipeStage("challenger_a", <item:mysticalagriculture:inferium_seeds>);

// ============================================================
//  CHALLENGER_B (Prudentium tier)
// ============================================================

Recipes.setRecipeStage("challenger_b", <item:tinymobfarm:iron_farm>);
Recipes.setRecipeStage("challenger_b", <item:mysticalagriculture:prudentium_ingot>);
Recipes.setRecipeStage("challenger_b", <item:mysticalagriculture:prudentium_block>);
Recipes.setRecipeStage("challenger_b", <item:mysticalagriculture:prudentium_nugget>);
Recipes.setRecipeStage("challenger_b", <item:mysticalagriculture:prudentium_gemstone>);
Recipes.setRecipeStage("challenger_b", <item:mysticalagriculture:prudentium_gemstone_block>);
Recipes.setRecipeStage("challenger_b", <item:mysticalagriculture:prudentium_farmland>);
Recipes.setRecipeStage("challenger_b", <item:mysticalagriculture:prudentium_furnace>);
Recipes.setRecipeStage("challenger_b", <item:mysticalagriculture:prudentium_growth_accelerator>);
Recipes.setRecipeStage("challenger_b", <item:mysticalagriculture:prudentium_watering_can>);
Recipes.setRecipeStage("challenger_b", <item:mysticalagriculture:prudentium_upgrade>);
Recipes.setRecipeStage("challenger_b", <item:mysticalagriculture:prudentium_sword>);
Recipes.setRecipeStage("challenger_b", <item:mysticalagriculture:prudentium_pickaxe>);
Recipes.setRecipeStage("challenger_b", <item:mysticalagriculture:prudentium_axe>);
Recipes.setRecipeStage("challenger_b", <item:mysticalagriculture:prudentium_shovel>);
Recipes.setRecipeStage("challenger_b", <item:mysticalagriculture:prudentium_hoe>);
Recipes.setRecipeStage("challenger_b", <item:mysticalagriculture:prudentium_helmet>);
Recipes.setRecipeStage("challenger_b", <item:mysticalagriculture:prudentium_chestplate>);
Recipes.setRecipeStage("challenger_b", <item:mysticalagriculture:prudentium_leggings>);
Recipes.setRecipeStage("challenger_b", <item:mysticalagriculture:prudentium_boots>);

// ============================================================
//  CHALLENGER_C
// ============================================================

Recipes.setRecipeStage("challenger_c", <item:tinymobfarm:gold_farm>);

// ============================================================
//  CHALLENGER_D
// ============================================================

Recipes.setRecipeStage("challenger_d", <item:tinymobfarm:diamond_farm>);

// ============================================================
//  CHALLENGER_E (Supremium tier)
// ============================================================

Recipes.setRecipeStage("challenger_e", <item:tinymobfarm:emerald_farm>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:supremium_ingot>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:supremium_block>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:supremium_nugget>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:supremium_gemstone>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:supremium_gemstone_block>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:supremium_farmland>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:supremium_furnace>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:supremium_growth_accelerator>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:supremium_watering_can>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:supremium_upgrade>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:supremium_sword>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:supremium_pickaxe>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:supremium_axe>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:supremium_shovel>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:supremium_hoe>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:supremium_helmet>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:supremium_chestplate>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:supremium_leggings>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:supremium_boots>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:awakened_supremium_ingot>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:awakened_supremium_block>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:awakened_supremium_gemstone>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:awakened_supremium_gemstone_block>);
Recipes.setRecipeStage("challenger_e", <item:mysticalagriculture:awakened_supremium_upgrade>);

// ============================================================
//  CHALLENGER_F (Insanium tier)
// ============================================================

Recipes.setRecipeStage("challenger_f", <item:tinymobfarm:inferno_farm>);
Recipes.setRecipeStage("challenger_f", <item:mysticalagradditions:insanium_ingot>);
Recipes.setRecipeStage("challenger_f", <item:mysticalagradditions:insanium_block>);
Recipes.setRecipeStage("challenger_f", <item:mysticalagradditions:insanium_nugget>);
Recipes.setRecipeStage("challenger_f", <item:mysticalagradditions:insanium_gemstone>);
Recipes.setRecipeStage("challenger_f", <item:mysticalagradditions:insanium_gemstone_block>);
Recipes.setRecipeStage("challenger_f", <item:mysticalagradditions:insanium_farmland>);

// ============================================================
//  CHALLENGER_G
// ============================================================

Recipes.setRecipeStage("challenger_g", <item:tinymobfarm:ultimate_farm>);

// ============================================================
//  CHAOTIC
// ============================================================

Recipes.setRecipeStage("chaotic", <item:avaritia:eternal_singularity>);
Recipes.setRecipeStage("chaotic", <item:soa_additions:flux_singularity>);
Recipes.setRecipeStage("chaotic", <item:soa_additions:mana_singularity>);
Recipes.setRecipeStage("chaotic", <item:soa_additions:experience_singularity>);
Recipes.setRecipeStage("chaotic", <item:soa_additions:matter_singularity>);
Recipes.setRecipeStage("chaotic", <item:soa_additions:anti_entropy_matter>);
Recipes.setRecipeStage("chaotic", <item:soa_additions:cosmilite_ingot>);
// Draconic Evolution chaotic tier tools/armor/machines
Recipes.setRecipeStage("chaotic", <item:draconicevolution:chaotic_axe>);
Recipes.setRecipeStage("chaotic", <item:draconicevolution:chaotic_bow>);
Recipes.setRecipeStage("chaotic", <item:draconicevolution:chaotic_pickaxe>);
Recipes.setRecipeStage("chaotic", <item:draconicevolution:chaotic_shovel>);
Recipes.setRecipeStage("chaotic", <item:draconicevolution:chaotic_hoe>);
Recipes.setRecipeStage("chaotic", <item:draconicevolution:chaotic_staff>);
Recipes.setRecipeStage("chaotic", <item:draconicevolution:chaotic_sword>);
Recipes.setRecipeStage("chaotic", <item:draconicevolution:chaotic_chestpiece>);
Recipes.setRecipeStage("chaotic", <item:draconicevolution:chaotic_capacitor>);
Recipes.setRecipeStage("chaotic", <item:draconicevolution:chaotic_crafting_injector>);
// Draconic Additions chaos machinery & gear
Recipes.setRecipeStage("chaotic", <item:draconicadditions:chaos_heart>);
Recipes.setRecipeStage("chaotic", <item:draconicadditions:chaos_crystalizer>);
Recipes.setRecipeStage("chaotic", <item:draconicadditions:chaos_extractor>);
Recipes.setRecipeStage("chaotic", <item:draconicadditions:chaos_infuser>);
Recipes.setRecipeStage("chaotic", <item:draconicadditions:chaos_liquifier>);
Recipes.setRecipeStage("chaotic", <item:draconicadditions:chaos_container>);
Recipes.setRecipeStage("chaotic", <item:draconicadditions:chaotic_harness>);
Recipes.setRecipeStage("chaotic", <item:draconicadditions:chaotic_necklace>);
Recipes.setRecipeStage("chaotic", <item:draconicadditions:item_stable_chaos>);
Recipes.setRecipeStage("chaotic", <item:draconicadditions:item_semi_stable_chaos>);
Recipes.setRecipeStage("chaotic", <item:draconicadditions:item_unstable_chaos>);
Recipes.setRecipeStage("chaotic", <item:draconicadditions:item_chaos_injector>);

// ============================================================
//  CHAOTIC_DOMINATOR
// ============================================================

// Death Coin (custom soa recipe)
Recipes.setRecipeStage("chaotic_dominator", <resource:soa_additions:soa_death_coin>);
Recipes.setRecipeStage("chaotic_dominator", <item:soa_additions:difficulty_changer>);
Recipes.setRecipeStage("chaotic_dominator", <item:draconicevolution:chaotic_core>);
Recipes.setRecipeStage("chaotic_dominator", <item:draconicevolution:chaotic_energy_core>);

// ============================================================
//  DESCENDANT_OF_THE_SUN
// ============================================================

// Infernium compression/decompression (custom soa recipes)
Recipes.setRecipeStage("descendant_of_the_sun", <resource:soa_additions:soa_infernium_ingot>);
Recipes.setRecipeStage("descendant_of_the_sun", <resource:soa_additions:soa_rev_infernium_ingot>);
Recipes.setRecipeStage("descendant_of_the_sun", <item:soa_additions:infernium_ingot>);
Recipes.setRecipeStage("descendant_of_the_sun", <item:soa_additions:infernium_nugget>);
Recipes.setRecipeStage("descendant_of_the_sun", <item:soa_additions:infernium_ore_block>);
Recipes.setRecipeStage("descendant_of_the_sun", <item:draconicevolution:awakened_core>);

// ============================================================
//  ENDER_CHARM (End items)
// ============================================================

Recipes.setRecipeStage("ender_charm", <item:minecraft:end_stone_bricks>);
Recipes.setRecipeStage("ender_charm", <item:minecraft:end_rod>);
Recipes.setRecipeStage("ender_charm", <item:minecraft:end_portal_frame>);

// ============================================================
//  EXPERT
// ============================================================

Recipes.setRecipeStage("expert", <item:soa_additions:fake_philosopher_stone>);
Recipes.setRecipeStage("expert", <item:soa_additions:undead_medkit>);
Recipes.setRecipeStage("expert", <item:soa_additions:strange_lolipop>);
Recipes.setRecipeStage("expert", <item:soa_additions:adrenaline>);
Recipes.setRecipeStage("expert", <item:soa_additions:shield_gum>);
Recipes.setRecipeStage("expert", <item:soa_additions:goodie_bag>);

// ============================================================
//  FUSION_MATRIX (Draconium tier)
// ============================================================

// Beast Hand (custom soa recipe)
Recipes.setRecipeStage("fusion_matrix", <resource:soa_additions:soa_beast_hand>);
Recipes.setRecipeStage("fusion_matrix", <item:soa_additions:beast_hand>);
Recipes.setRecipeStage("fusion_matrix", <item:soa_additions:electronium_ingot>);
Recipes.setRecipeStage("fusion_matrix", <item:draconicevolution:draconium_ingot>);
Recipes.setRecipeStage("fusion_matrix", <item:draconicevolution:draconium_nugget>);
Recipes.setRecipeStage("fusion_matrix", <item:draconicevolution:draconium_block>);
Recipes.setRecipeStage("fusion_matrix", <item:draconicevolution:draconium_dust>);
Recipes.setRecipeStage("fusion_matrix", <item:draconicevolution:wyvern_core>);
Recipes.setRecipeStage("fusion_matrix", <item:draconicevolution:wyvern_crafting_injector>);
Recipes.setRecipeStage("fusion_matrix", <item:draconicevolution:wyvern_energy_core>);
Recipes.setRecipeStage("fusion_matrix", <item:draconicevolution:draconic_energy_core>);
Recipes.setRecipeStage("fusion_matrix", <item:mysticalagriculture:draconium_essence>);
Recipes.setRecipeStage("fusion_matrix", <item:mysticalagriculture:awakened_draconium_essence>);

// ============================================================
//  GETTING_STARTED
// ============================================================

Recipes.setRecipeStage("getting_started", <item:minecraft:wooden_pickaxe>);
Recipes.setRecipeStage("getting_started", <item:minecraft:wooden_axe>);
Recipes.setRecipeStage("getting_started", <item:minecraft:stone_pickaxe>);
Recipes.setRecipeStage("getting_started", <item:minecraft:stone_axe>);
Recipes.setRecipeStage("getting_started", <item:minecraft:iron_pickaxe>);
Recipes.setRecipeStage("getting_started", <item:minecraft:iron_axe>);
Recipes.setRecipeStage("getting_started", <item:minecraft:golden_pickaxe>);
Recipes.setRecipeStage("getting_started", <item:minecraft:golden_axe>);
Recipes.setRecipeStage("getting_started", <item:minecraft:diamond_pickaxe>);
Recipes.setRecipeStage("getting_started", <item:minecraft:diamond_axe>);
// Tinkers' Construct tool stations
Recipes.setRecipeStage("getting_started", <item:tconstruct:crafting_station>);
Recipes.setRecipeStage("getting_started", <item:tconstruct:part_builder>);
Recipes.setRecipeStage("getting_started", <item:tconstruct:part_chest>);
Recipes.setRecipeStage("getting_started", <item:tconstruct:tinkers_anvil>);
Recipes.setRecipeStage("getting_started", <item:tconstruct:tinkers_chest>);
Recipes.setRecipeStage("getting_started", <item:tconstruct:tinkers_gadgetry>);

// ============================================================
//  GRADUATED (Creative tier)
// ============================================================

Recipes.setRecipeStage("graduated", <item:botania:creative_pool>);
Recipes.setRecipeStage("graduated", <item:chancecubes:creative_pendant>);
Recipes.setRecipeStage("graduated", <item:draconicevolution:creative_capacitor>);
Recipes.setRecipeStage("graduated", <item:draconicevolution:creative_op_capacitor>);
Recipes.setRecipeStage("graduated", <item:projecte:tome>);
Recipes.setRecipeStage("graduated", <item:projecte:watch_of_flowing_time>);
Recipes.setRecipeStage("graduated", <item:storagedrawers:creative_storage_upgrade>);
Recipes.setRecipeStage("graduated", <item:soa_additions:ocd_certificate>);
Recipes.setRecipeStage("graduated", <item:ae2wtlib:wireless_universal_terminal>);
Recipes.setRecipeStage("graduated", <item:soa_additions:creative_controller>);
// AE2 creative cells
Recipes.setRecipeStage("graduated", <item:ae2:creative_energy_cell>);
Recipes.setRecipeStage("graduated", <item:ae2:creative_fluid_cell>);
Recipes.setRecipeStage("graduated", <item:ae2:creative_item_cell>);
// Mekanism creative storage
Recipes.setRecipeStage("graduated", <item:mekanism:creative_bin>);
Recipes.setRecipeStage("graduated", <item:mekanism:creative_chemical_tank>);
Recipes.setRecipeStage("graduated", <item:mekanism:creative_energy_cube>);
Recipes.setRecipeStage("graduated", <item:mekanism:creative_fluid_tank>);
// Create creative blocks
Recipes.setRecipeStage("graduated", <item:create:creative_crate>);
Recipes.setRecipeStage("graduated", <item:create:creative_motor>);
Recipes.setRecipeStage("graduated", <item:create:creative_fluid_tank>);
Recipes.setRecipeStage("graduated", <item:create:creative_blaze_cake>);
// Applied Flux high-capacity FE storage cells (top tiers)
Recipes.setRecipeStage("graduated", <item:appflux:fe_16m_cell>);
Recipes.setRecipeStage("graduated", <item:appflux:fe_16m_portable_cell>);
Recipes.setRecipeStage("graduated", <item:appflux:fe_64m_cell>);
Recipes.setRecipeStage("graduated", <item:appflux:fe_64m_portable_cell>);
Recipes.setRecipeStage("graduated", <item:appflux:fe_256m_cell>);
Recipes.setRecipeStage("graduated", <item:appflux:fe_256m_portable_cell>);

// ============================================================
//  HARDMODE
// ============================================================

// Custom soa recipes
Recipes.setRecipeStage("hardmode", <resource:soa_additions:soa_forbidden_bible>);
Recipes.setRecipeStage("hardmode", <resource:soa_additions:soa_true_blood_sigil>);
Recipes.setRecipeStage("hardmode", <resource:soa_additions:soa_medkit_super>);
Recipes.setRecipeStage("hardmode", <resource:soa_additions:soa_pioneer_medal>);
Recipes.setRecipeStage("hardmode", <resource:soa_additions:soa_greedy_medal>);
Recipes.setRecipeStage("hardmode", <resource:soa_additions:soa_rev_medal_pioneer>);
Recipes.setRecipeStage("hardmode", <resource:soa_additions:soa_rev_medal_greedy>);

// Mod items by output
Recipes.setRecipeStage("hardmode", <item:soa_additions:forbidden_bible>);
Recipes.setRecipeStage("hardmode", <item:soa_additions:true_blood_sigil>);
Recipes.setRecipeStage("hardmode", <item:soa_additions:medkit_super>);
Recipes.setRecipeStage("hardmode", <item:soa_additions:wither_soul>);
Recipes.setRecipeStage("hardmode", <item:soa_additions:dragon_soul>);
Recipes.setRecipeStage("hardmode", <item:soa_additions:creative_shard>);
Recipes.setRecipeStage("hardmode", <item:soa_additions:glider>);
Recipes.setRecipeStage("hardmode", <item:soa_additions:ordinary_medal>);
Recipes.setRecipeStage("hardmode", <item:minecraft:elytra>);
Recipes.setRecipeStage("hardmode", <item:minecraft:popped_chorus_fruit>);
// SoA Additions hardmode alloys
Recipes.setRecipeStage("hardmode", <item:soa_additions:cryonium_ingot>);
Recipes.setRecipeStage("hardmode", <item:soa_additions:cytosinite_ingot>);
Recipes.setRecipeStage("hardmode", <item:soa_additions:shadowium_ingot>);
// SoA Additions gems
Recipes.setRecipeStage("hardmode", <item:soa_additions:amber>);
Recipes.setRecipeStage("hardmode", <item:soa_additions:malachite>);
Recipes.setRecipeStage("hardmode", <item:soa_additions:peridot>);
Recipes.setRecipeStage("hardmode", <item:soa_additions:tanzanite>);
Recipes.setRecipeStage("hardmode", <item:soa_additions:topaz>);
// Mystical Agriculture peridot essences/seeds
Recipes.setRecipeStage("hardmode", <item:mysticalagriculture:peridot_essence>);
Recipes.setRecipeStage("hardmode", <item:mysticalagriculture:peridot_seeds>);

// ============================================================
//  MASTER_ENGINEER
// ============================================================

Recipes.setRecipeStage("master_engineer", <item:cyclic:user>);
Recipes.setRecipeStage("master_engineer", <item:cyclic:miner>);
Recipes.setRecipeStage("master_engineer", <item:solarflux:sp_8>);
Recipes.setRecipeStage("master_engineer", <item:solarflux:sp_avaritia.neutronium>);
Recipes.setRecipeStage("master_engineer", <item:solarflux:sp_de.chaotic>);
Recipes.setRecipeStage("master_engineer", <item:solarflux:sp_de.draconic>);
Recipes.setRecipeStage("master_engineer", <item:solarflux:sp_de.wyvern>);
// Mekanism late-game automation / generation
Recipes.setRecipeStage("master_engineer", <item:mekanism:antiprotonic_nucleosynthesizer>);
Recipes.setRecipeStage("master_engineer", <item:mekanism:dimensional_stabilizer>);
Recipes.setRecipeStage("master_engineer", <item:mekanism:atomic_disassembler>);
Recipes.setRecipeStage("master_engineer", <item:mekanismgenerators:fusion_reactor_controller>);
Recipes.setRecipeStage("master_engineer", <item:mekanismgenerators:fusion_reactor_frame>);
Recipes.setRecipeStage("master_engineer", <item:mekanismgenerators:fusion_reactor_logic_adapter>);
Recipes.setRecipeStage("master_engineer", <item:mekanismgenerators:fusion_reactor_port>);

// ============================================================
//  MASTER_WIZARD
// ============================================================

Recipes.setRecipeStage("master_wizard", <resource:soa_additions:soa_purifying_pill>);
Recipes.setRecipeStage("master_wizard", <resource:soa_additions:soa_energy_matter_core>);
Recipes.setRecipeStage("master_wizard", <item:soa_additions:purifying_pill>);
Recipes.setRecipeStage("master_wizard", <item:soa_additions:energy_matter_core>);

// ============================================================
//  NETHER
// ============================================================

// Custom soa recipes by name
Recipes.setRecipeStage("nether", <resource:soa_additions:soa_blood_sigil>);
Recipes.setRecipeStage("nether", <resource:soa_additions:soa_bloody_sacrifice>);
Recipes.setRecipeStage("nether", <resource:soa_additions:soa_bloody_sacrifice_alt>);
Recipes.setRecipeStage("nether", <resource:soa_additions:soa_awakened_eye>);
Recipes.setRecipeStage("nether", <resource:soa_additions:soa_overflux_capacitor>);
Recipes.setRecipeStage("nether", <resource:soa_additions:soa_medkit_big>);

// soa_additions items by output
Recipes.setRecipeStage("nether", <item:soa_additions:shining_star>);
Recipes.setRecipeStage("nether", <item:soa_additions:medkit_big>);
Recipes.setRecipeStage("nether", <item:soa_additions:blood_sigil>);
Recipes.setRecipeStage("nether", <item:soa_additions:bloody_sacrifice>);
Recipes.setRecipeStage("nether", <item:soa_additions:awakened_eye>);
Recipes.setRecipeStage("nether", <item:soa_additions:overflux_capacitor>);
// SoA Additions nether-tier alloys
Recipes.setRecipeStage("nether", <item:soa_additions:aeroite_ingot>);
Recipes.setRecipeStage("nether", <item:soa_additions:aqualite_ingot>);
Recipes.setRecipeStage("nether", <item:soa_additions:asgardium_ingot>);
Recipes.setRecipeStage("nether", <item:soa_additions:durasteel_ingot>);
Recipes.setRecipeStage("nether", <item:soa_additions:gaiasteel_ingot>);

// Vanilla/mod items by output
Recipes.setRecipeStage("nether", <item:minecraft:beacon>);
Recipes.setRecipeStage("nether", <item:minecraft:brewing_stand>);
Recipes.setRecipeStage("nether", <item:minecraft:enchanting_table>);
Recipes.setRecipeStage("nether", <item:minecraft:anvil>);
Recipes.setRecipeStage("nether", <item:minecraft:ender_eye>);
Recipes.setRecipeStage("nether", <item:minecraft:blaze_powder>);
Recipes.setRecipeStage("nether", <item:minecraft:magma_cream>);
Recipes.setRecipeStage("nether", <item:botania:enchanter>);
Recipes.setRecipeStage("nether", <item:quark:blaze_lantern>);
Recipes.setRecipeStage("nether", <item:treasure2:skull_sword>);
Recipes.setRecipeStage("nether", <item:inventorypets:pet_nether_portal>);
Recipes.setRecipeStage("nether", <item:inventorypets:pet_squid>);

// Netherite recipes
Recipes.setRecipeStage("nether", <item:minecraft:netherite_ingot>);
Recipes.setRecipeStage("nether", <item:minecraft:netherite_block>);
Recipes.setRecipeStage("nether", <item:minecraft:netherite_sword>);
Recipes.setRecipeStage("nether", <item:minecraft:netherite_pickaxe>);
Recipes.setRecipeStage("nether", <item:minecraft:netherite_axe>);
Recipes.setRecipeStage("nether", <item:minecraft:netherite_shovel>);
Recipes.setRecipeStage("nether", <item:minecraft:netherite_hoe>);
Recipes.setRecipeStage("nether", <item:minecraft:netherite_helmet>);
Recipes.setRecipeStage("nether", <item:minecraft:netherite_chestplate>);
Recipes.setRecipeStage("nether", <item:minecraft:netherite_leggings>);
Recipes.setRecipeStage("nether", <item:minecraft:netherite_boots>);

// ============================================================
//  NOVICE_ENGINEER
// ============================================================

Recipes.setRecipeStage("novice_engineer", <item:enderio:dark_steel_sword>);

// ============================================================
//  SKILLED_ENGINEER
// ============================================================

Recipes.setRecipeStage("skilled_engineer", <item:solarflux:sp_5>);
Recipes.setRecipeStage("skilled_engineer", <item:solarflux:sp_6>);
Recipes.setRecipeStage("skilled_engineer", <item:solarflux:sp_7>);
Recipes.setRecipeStage("skilled_engineer", <item:bigreactors:anglesite_ore>);
Recipes.setRecipeStage("skilled_engineer", <item:bigreactors:benitoite_ore>);
Recipes.setRecipeStage("skilled_engineer", <item:soa_additions:osmiridium_ingot>);
// Platinum items
Recipes.setRecipeStage("skilled_engineer", <item:create:crushed_raw_platinum>);
Recipes.setRecipeStage("skilled_engineer", <item:embers:platinum_crystal_seed>);
Recipes.setRecipeStage("skilled_engineer", <item:potionsmaster:platinum_powder>);
Recipes.setRecipeStage("skilled_engineer", <item:potionsmaster:calcinatedplatinum_powder>);
// Mystical Agriculture iridium & platinum
Recipes.setRecipeStage("skilled_engineer", <item:mysticalagriculture:iridium_essence>);
Recipes.setRecipeStage("skilled_engineer", <item:mysticalagriculture:iridium_seeds>);
Recipes.setRecipeStage("skilled_engineer", <item:mysticalagriculture:platinum_essence>);
Recipes.setRecipeStage("skilled_engineer", <item:mysticalagriculture:platinum_seeds>);
// Redstone Arsenal flux-powered tools/weapons
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_sword>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_axe>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_pickaxe>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_shovel>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_bow>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_crossbow>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_hammer>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_excavator>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_fishing_rod>);
// Redstone Arsenal flux armor
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_helmet>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_chestplate>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_leggings>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_boots>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_elytra>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_shield>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_quiver>);
// Redstone Arsenal flux materials/components
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_ingot>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_nugget>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_gear>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_plating>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_gem>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_gem_block>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_metal_block>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_dust>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_obsidian_rod>);
Recipes.setRecipeStage("skilled_engineer", <item:redstone_arsenal:flux_controller>);

// ============================================================
//  SKILLED_WIZARD
// ============================================================

Recipes.setRecipeStage("skilled_wizard", <resource:soa_additions:soa_arcane_crystal_ball>);
Recipes.setRecipeStage("skilled_wizard", <item:soa_additions:arcane_crystal_ball>);
Recipes.setRecipeStage("skilled_wizard", <item:soa_additions:astral_metal_ingot>);
Recipes.setRecipeStage("skilled_wizard", <item:soa_additions:crimsonite_ingot>);

// ============================================================
//  WIELDER_OF_INFINITY
// ============================================================

Recipes.setRecipeStage("wielder_of_infinity", <item:draconicevolution:draconic_staff>);
Recipes.setRecipeStage("wielder_of_infinity", <item:solarflux:sp_avaritia.infinity>);
Recipes.setRecipeStage("wielder_of_infinity", <item:soa_additions:pioneer_medal>);
Recipes.setRecipeStage("wielder_of_infinity", <item:soa_additions:greedy_medal>);
Recipes.setRecipeStage("wielder_of_infinity", <item:soa_additions:creative_soul>);
Recipes.setRecipeStage("wielder_of_infinity", <item:soa_additions:infinity_stone>);
// Avaritia infinity tools/weapons
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_sword>);
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_bow>);
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_crossbow>);
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_pickaxe>);
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_shovel>);
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_axe>);
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_hoe>);
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_trident>);
// Avaritia infinity armor
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_helmet>);
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_chestplate>);
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_pants>);
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_boots>);
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_elytra>);
// Avaritia infinity curios / utility / resources
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_ingot>);
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_nugget>);
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_catalyst>);
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_upgrade>);
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_ring>);
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_shield>);
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_totem>);
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_bucket>);
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_chest>);
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_clock>);
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:infinity_umbrella>);
// Avaritia compressed crafting tables
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:compressed_crafting_table>);
Recipes.setRecipeStage("wielder_of_infinity", <item:avaritia:double_compressed_crafting_table>);

// ============================================================
//  WITHER_SLAYER
// ============================================================

// Custom soa recipes by name
Recipes.setRecipeStage("wither_slayer", <resource:soa_additions:soa_ender_charm>);
Recipes.setRecipeStage("wither_slayer", <resource:soa_additions:soa_bravery_certificate>);

// Mod items by output
Recipes.setRecipeStage("wither_slayer", <item:soa_additions:bravery_certificate>);
Recipes.setRecipeStage("wither_slayer", <item:soa_additions:ender_charm>);
Recipes.setRecipeStage("wither_slayer", <item:enderio:reinforced_obsidian_block>);
Recipes.setRecipeStage("wither_slayer", <item:minecraft:end_crystal>);
Recipes.setRecipeStage("wither_slayer", <item:mysticalagriculture:witherproof_block>);
Recipes.setRecipeStage("wither_slayer", <item:mysticalagriculture:witherproof_glass>);

// ============================================================
//  WYVERN
// ============================================================

// Custom soa recipes by name
Recipes.setRecipeStage("wyvern", <resource:soa_additions:soa_solarium_star>);
Recipes.setRecipeStage("wyvern", <resource:soa_additions:soa_sun_totem>);

// Mod items by output
Recipes.setRecipeStage("wyvern", <item:soa_additions:solarium_star>);
Recipes.setRecipeStage("wyvern", <item:soa_additions:sun_totem>);
Recipes.setRecipeStage("wyvern", <item:soa_additions:solar_seed>);
Recipes.setRecipeStage("wyvern", <item:soa_additions:broken_solarium_star>);
Recipes.setRecipeStage("wyvern", <item:avaritia:neutron_collector>);
// Draconic Evolution wyvern tier tools/armor
Recipes.setRecipeStage("wyvern", <item:draconicevolution:wyvern_axe>);
Recipes.setRecipeStage("wyvern", <item:draconicevolution:wyvern_bow>);
Recipes.setRecipeStage("wyvern", <item:draconicevolution:wyvern_pickaxe>);
Recipes.setRecipeStage("wyvern", <item:draconicevolution:wyvern_shovel>);
Recipes.setRecipeStage("wyvern", <item:draconicevolution:wyvern_hoe>);
Recipes.setRecipeStage("wyvern", <item:draconicevolution:wyvern_sword>);
Recipes.setRecipeStage("wyvern", <item:draconicevolution:wyvern_chestpiece>);
Recipes.setRecipeStage("wyvern", <item:draconicevolution:wyvern_capacitor>);
Recipes.setRecipeStage("wyvern", <item:draconicevolution:wyvern_crafting_injector>);
// Draconic Additions wyvern harness/necklace
Recipes.setRecipeStage("wyvern", <item:draconicadditions:wyvern_harness>);
Recipes.setRecipeStage("wyvern", <item:draconicadditions:wyvern_necklace>);
