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

// Awakened Draconium block/ingot/nugget belong to fusion_matrix in GC
// (restage.zs:96-98) - staged in that section instead, matching their item stage.
// The Awakened Crafting Injector is in no GC addIngredients block and no
// crafttweaker.log line, so GC never staged its recipe.
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
// Storage blocks - GC staged <ore:block*> alongside the ingots (items.zs:111-138)
Recipes.setRecipeStage("awakened", <item:soa_additions:chromasteel_block>);
Recipes.setRecipeStage("awakened", <item:soa_additions:protonium_block>);
Recipes.setRecipeStage("awakened", <item:soa_additions:terra_alloy_block>);
Recipes.setRecipeStage("awakened", <item:soa_additions:titanium_block>);
// Draconic Metal (GC <ore:*DraconicMetal>, tconevo:metal:5/6/7 + metal_block:1).
// No dust line: nothing in the pack crafts tconevo:draconic_metal_dust.
Recipes.setRecipeStage("awakened", <item:tconevo:draconic_metal_ingot>);
Recipes.setRecipeStage("awakened", <item:tconevo:draconic_metal_block>);
Recipes.setRecipeStage("awakened", <item:tconevo:draconic_metal_nugget>);
Recipes.setRecipeStage("awakened", <item:soa_additions:creative_modifier>);  // GC tconstruct:materials:50
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
Recipes.setRecipeStage("chaotic", <item:soa_additions:cosmilite_block>);
// Chaotic Metal (GC <ore:*ChaoticMetal>, tconevo:metal:10/12 + metal_block:2)
Recipes.setRecipeStage("chaotic", <item:tconevo:chaotic_ingot>);
Recipes.setRecipeStage("chaotic", <item:tconevo:chaotic_block>);
Recipes.setRecipeStage("chaotic", <item:tconevo:chaotic_nugget>);
Recipes.setRecipeStage("chaotic", <item:avaritia:infinity_catalyst>);  // restage.zs:67 -> chaotic
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
Recipes.setRecipeStage("chaotic_dominator", <resource:soa_additions:death_coin>);
// Difficulty Changer is in BOTH the chaotic_dominator and wielder_of_infinity
// blocks in GC (items.zs:41 and :480); the later action wins, so its final
// recipe stage is wielder_of_infinity - staged in that section.
Recipes.setRecipeStage("chaotic_dominator", <item:draconicevolution:chaotic_core>);
Recipes.setRecipeStage("chaotic_dominator", <item:draconicevolution:chaotic_energy_core>);

// ============================================================
//  DESCENDANT_OF_THE_SUN
// ============================================================

// Infernium compression/decompression (custom soa recipes)
Recipes.setRecipeStage("descendant_of_the_sun", <resource:soa_additions:infernium_ingot>);
Recipes.setRecipeStage("descendant_of_the_sun", <resource:soa_additions:infernium_ingot_from_block>);
Recipes.setRecipeStage("descendant_of_the_sun", <item:soa_additions:infernium_ingot>);
Recipes.setRecipeStage("descendant_of_the_sun", <item:soa_additions:infernium_nugget>);
Recipes.setRecipeStage("descendant_of_the_sun", <item:soa_additions:infernium_ore_block>);
Recipes.setRecipeStage("descendant_of_the_sun", <item:soa_additions:infernium_block>);  // GC <ore:blockInfernium>
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
Recipes.setRecipeStage("fusion_matrix", <resource:soa_additions:beast_hand>);
Recipes.setRecipeStage("fusion_matrix", <item:soa_additions:beast_hand>);
Recipes.setRecipeStage("fusion_matrix", <item:soa_additions:electronium_ingot>);
Recipes.setRecipeStage("fusion_matrix", <item:soa_additions:electronium_block>);  // GC <ore:blockElectronium>
Recipes.setRecipeStage("fusion_matrix", <item:soa_additions:fusion_matrix_ingot>);
Recipes.setRecipeStage("fusion_matrix", <item:soa_additions:fusion_matrix_block>);
Recipes.setRecipeStage("fusion_matrix", <item:summoningrituals:altar>);  // GC <zensummoning:altar>
// Awakened Draconium - GC restage.zs:96-98 puts these in fusion_matrix
Recipes.setRecipeStage("fusion_matrix", <item:draconicevolution:awakened_draconium_block>);
Recipes.setRecipeStage("fusion_matrix", <item:draconicevolution:awakened_draconium_ingot>);
Recipes.setRecipeStage("fusion_matrix", <item:draconicevolution:awakened_draconium_nugget>);
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
// Crafting Table — mirrors the forge:workbenches ItemStages restriction.
// Covers both the 4-logs recipe and the vanilla 2x2 planks recipe re-added by
// kubejs/server_scripts/recipes/soa_deviations.js.
Recipes.setRecipeStage("getting_started", <item:minecraft:crafting_table>);
// <ore:workbench> also covered Cyclic's Workbench in GC; #forge:workbenches holds
// only minecraft:crafting_table in 1.20, so it needs its own line.
Recipes.setRecipeStage("getting_started", <item:cyclic:workbench>);
// <ore:plankWood> (GC items.zs:50). The tag covers 185 planks; Tenebra and
// Witherwood are outside #minecraft:planks. The craftable Witherwood item is
// treasure2:witherwood_planks - treasure2:wither_planks shares its display name
// but no recipe produces it.
Recipes.setRecipeStage("getting_started", <tag:items:minecraft:planks>);
Recipes.setRecipeStage("getting_started", <item:defiledlands:tenebra_planks>);
Recipes.setRecipeStage("getting_started", <item:treasure2:witherwood_planks>);
// <ore:chest> (items.zs:51) and <ore:cobblestone> (items.zs:63). Both tags are
// broader than GC's ore dictionary entries, which errs toward gating.
Recipes.setRecipeStage("getting_started", <tag:items:forge:chests>);
Recipes.setRecipeStage("getting_started", <tag:items:forge:cobblestone>);
// Smithery workstations (replaced Tinkers' Construct tool stations)
Recipes.setRecipeStage("getting_started", <item:smithery:casting_table>);
Recipes.setRecipeStage("getting_started", <item:smithery:part_press>);
Recipes.setRecipeStage("getting_started", <item:smithery:forge_controller>);
Recipes.setRecipeStage("getting_started", <item:smithery:forge_drain>);
Recipes.setRecipeStage("getting_started", <item:smithery:forge_item_port>);
Recipes.setRecipeStage("getting_started", <item:smithery:forge_fuel_port>);
Recipes.setRecipeStage("getting_started", <item:smithery:furnace_bricks>);
Recipes.setRecipeStage("getting_started", <item:smithery:fluid_pipe>);

// ============================================================
//  GRADUATED (Creative tier)
// ============================================================

Recipes.setRecipeStage("graduated", <item:botania:creative_pool>);
Recipes.setRecipeStage("graduated", <item:chancecubes:creative_pendant>);
Recipes.setRecipeStage("graduated", <item:draconicevolution:creative_capacitor>);
Recipes.setRecipeStage("graduated", <item:draconicevolution:creative_op_capacitor>);
Recipes.setRecipeStage("graduated", <item:projecte:tome>);
Recipes.setRecipeStage("graduated", <item:projecte:watch_of_flowing_time>);
// GC gated <storagedrawers:upgrade_creative:1> = Creative Vending Upgrade; the
// Creative Storage Upgrade (meta 0) was never staged.
Recipes.setRecipeStage("graduated", <item:storagedrawers:creative_vending_upgrade>);
Recipes.setRecipeStage("graduated", <item:dankstorage:dank_6>);
Recipes.setRecipeStage("graduated", <item:soa_additions:ocd_certificate>);
// GC gated ae2wtlib:wut_creative (Creative Wireless Ultimate Terminal), which has
// no 1.20 counterpart. The ordinary Wireless Universal Terminal was never staged,
// and its item is not restricted either - gating only the recipe made it
// uncraftable while remaining holdable.
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
// appflux is not in GreedyCraft, so there is no gate to port. Staging only the
// recipes left these cells uncraftable while remaining freely holdable - the
// items were never restricted - so the gate is dropped entirely.

// ============================================================
//  HARDMODE
// ============================================================

// Custom soa recipes
Recipes.setRecipeStage("hardmode", <resource:soa_additions:forbidden_bible>);
Recipes.setRecipeStage("hardmode", <resource:soa_additions:true_blood_sigil>);
Recipes.setRecipeStage("hardmode", <resource:soa_additions:medkit_super>);
Recipes.setRecipeStage("hardmode", <resource:soa_additions:pioneer_medal>);
Recipes.setRecipeStage("hardmode", <resource:soa_additions:greedy_medal>);
Recipes.setRecipeStage("hardmode", <resource:soa_additions:ordinary_medal_from_pioneer>);
Recipes.setRecipeStage("hardmode", <resource:soa_additions:pioneer_medal_from_greedy>);

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
// NAME COLLISION: GC's master_engineer "Vertical Digger" is
// actuallyadditions:block_miner (mod absent from SOA). Cyclic's "Miner" is a
// different item that GC never staged.
Recipes.setRecipeStage("master_engineer", <item:mekanism:ultimate_control_circuit>);  // GC <ore:circuitUltimate>
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

// Every <resource:> id in this file carried a bogus extra "soa_" prefix until
// 2026-07-31 (soa_additions:soa_death_coin for soa_additions:death_coin, etc.),
// so all 23 recipe-id gates matched nothing. Most were covered anyway by the
// <item:> output gate beside them; the Death Coin recipe was not gated at all.
// A soa_energy_matter_core gate stood here and a soa_overflux_capacitor gate in
// NETHER: nothing in the pack crafts either item, so there is no recipe id to
// point at and both were dropped (the <item:> gates below still apply).
Recipes.setRecipeStage("master_wizard", <resource:soa_additions:purifying_pill>);
Recipes.setRecipeStage("master_wizard", <item:soa_additions:purifying_pill>);
Recipes.setRecipeStage("master_wizard", <item:soa_additions:energy_matter_core>);

// ============================================================
//  NETHER
// ============================================================

// Custom soa recipes by name
Recipes.setRecipeStage("nether", <resource:soa_additions:blood_sigil>);
Recipes.setRecipeStage("nether", <resource:soa_additions:bloody_sacrifice>);
Recipes.setRecipeStage("nether", <resource:soa_additions:bloody_sacrifice_alt>);
Recipes.setRecipeStage("nether", <resource:soa_additions:awakened_eye>);
Recipes.setRecipeStage("nether", <resource:soa_additions:medkit_big>);

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

// Recipe-id gate removed alongside the shaped crafting recipe; the item-id
// gate below still applies to the Malum spirit_infusion recipe in
// kubejs/server_scripts/recipes/custom/malum_arcane_crystal_ball.js.
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
Recipes.setRecipeStage("wielder_of_infinity", <item:soa_additions:infinity_block_block>);
Recipes.setRecipeStage("wielder_of_infinity", <item:soa_additions:infinity_block_block_block>);
Recipes.setRecipeStage("wielder_of_infinity", <item:soa_additions:difficulty_changer>);  // GC items.zs:480, later action wins
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
// Infinity Catalyst -> chaotic (restage.zs:67); staged in that section.
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
Recipes.setRecipeStage("wither_slayer", <resource:soa_additions:ender_charm>);
Recipes.setRecipeStage("wither_slayer", <resource:soa_additions:bravery_certificate>);

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
Recipes.setRecipeStage("wyvern", <resource:soa_additions:solarium_star>);
Recipes.setRecipeStage("wyvern", <resource:soa_additions:sun_totem>);

// Mod items by output
Recipes.setRecipeStage("wyvern", <item:soa_additions:solarium_star>);
Recipes.setRecipeStage("wyvern", <item:soa_additions:sun_totem>);
Recipes.setRecipeStage("wyvern", <item:soa_additions:solar_seed>);
Recipes.setRecipeStage("wyvern", <item:soa_additions:broken_solarium_star>);
Recipes.setRecipeStage("wyvern", <item:avaritia:neutron_collector>);
// Wyvern Metal (GC <ore:*WyvernMetal>, tconevo:metal:0/2 + metal_block:0)
Recipes.setRecipeStage("wyvern", <item:tconevo:wyvern_ingot>);
Recipes.setRecipeStage("wyvern", <item:tconevo:wyvern_block>);
Recipes.setRecipeStage("wyvern", <item:tconevo:wyvern_nugget>);
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

// GC parity: containers.zs whitelisted whole *Java packages* of container
// menus so that staged recipes still craft inside mod GUIs and automation,
// where RecipeStages cannot resolve a single crafting player. RecipeStages
// 8.0.0.2 matches these keys as `menu.getClass().getName().startsWith(key)`
// (ServerStuff#handleServer), so the argument is a Java package root, NOT a
// mod id -- the mod-id values used here until 2026-07-31 matched nothing.
// Roots verified in the shipped jars:
//   cofh     -> cofh.thermal.*.common.inventory.* menus plus the shared
//               cofh.core.common.inventory.* filter menus (GC used "cofh" too)
//   mcjty    -> rftoolsbase/rftoolscontrol own menus AND
//               mcjty.lib.container.GenericContainer, which is what
//               rftoolspower and xnet actually open (they ship no menu classes
//               of their own) -- this is why GC used the bare "mcjty"
//   forestry -> forestry.*.gui.* (was already correct, hence the one that worked)
//   thelm    -> thelm.packagedauto.menu.* and the five sibling Packaged* mods
Recipes.setPackageStages("cofh", "getting_started", "novice_tinker", "skilled_tinker", "master_tinker", "novice_engineer", "skilled_engineer", "master_engineer", "novice_wizard", "skilled_wizard", "master_wizard", "qualified_botanian", "alchemist", "zealot", "twilight_shield", "valkyrie_smasher", "lunatic_cultist", "twilight_conquerer", "sun_killer", "forest_keeper", "hardmode", "wither_slayer", "the_awakened", "wielder_of_infinity", "cosmic_dominator", "fearless_man", "challenger_a", "challenger_b", "challenger_c", "challenger_d", "challenger_e", "challenger_f", "challenger_g", "challenger_all", "transmutation_table", "wand_blueprint", "tactic_blueprint", "shuriken_blueprint", "laser_gun_blueprint", "abyssal_conquerer", "cosmic_ripper", "gatekeeper", "gaia", "wyvern", "awakened", "chaotic", "twilight_forest", "chaotic_dominator", "ender_charm", "nether", "infinite_solar_energy", "space_treasure_hunter");
Recipes.setPackageStages("mcjty", "getting_started", "novice_tinker", "skilled_tinker", "master_tinker", "novice_engineer", "skilled_engineer", "master_engineer", "novice_wizard", "skilled_wizard", "master_wizard", "qualified_botanian", "alchemist", "zealot", "twilight_shield", "valkyrie_smasher", "lunatic_cultist", "twilight_conquerer", "sun_killer", "forest_keeper", "hardmode", "wither_slayer", "the_awakened", "wielder_of_infinity", "cosmic_dominator", "fearless_man", "challenger_a", "challenger_b", "challenger_c", "challenger_d", "challenger_e", "challenger_f", "challenger_g", "challenger_all", "transmutation_table", "wand_blueprint", "tactic_blueprint", "shuriken_blueprint", "laser_gun_blueprint", "abyssal_conquerer", "cosmic_ripper", "gatekeeper", "gaia", "wyvern", "awakened", "chaotic", "twilight_forest", "chaotic_dominator", "ender_charm", "nether", "infinite_solar_energy", "space_treasure_hunter");
Recipes.setPackageStages("forestry", "getting_started", "novice_tinker", "skilled_tinker", "master_tinker", "novice_engineer", "skilled_engineer", "master_engineer", "novice_wizard", "skilled_wizard", "master_wizard", "qualified_botanian", "alchemist", "zealot", "twilight_shield", "valkyrie_smasher", "lunatic_cultist", "twilight_conquerer", "sun_killer", "forest_keeper", "hardmode", "wither_slayer", "the_awakened", "wielder_of_infinity", "cosmic_dominator", "fearless_man", "challenger_a", "challenger_b", "challenger_c", "challenger_d", "challenger_e", "challenger_f", "challenger_g", "challenger_all", "transmutation_table", "wand_blueprint", "tactic_blueprint", "shuriken_blueprint", "laser_gun_blueprint", "abyssal_conquerer", "cosmic_ripper", "gatekeeper", "gaia", "wyvern", "awakened", "chaotic", "twilight_forest", "chaotic_dominator", "ender_charm", "nether", "infinite_solar_energy", "space_treasure_hunter");
Recipes.setPackageStages("thelm", "getting_started", "novice_tinker", "skilled_tinker", "master_tinker", "novice_engineer", "skilled_engineer", "master_engineer", "novice_wizard", "skilled_wizard", "master_wizard", "qualified_botanian", "alchemist", "zealot", "twilight_shield", "valkyrie_smasher", "lunatic_cultist", "twilight_conquerer", "sun_killer", "forest_keeper", "hardmode", "wither_slayer", "the_awakened", "wielder_of_infinity", "cosmic_dominator", "fearless_man", "challenger_a", "challenger_b", "challenger_c", "challenger_d", "challenger_e", "challenger_f", "challenger_g", "challenger_all", "transmutation_table", "wand_blueprint", "tactic_blueprint", "shuriken_blueprint", "laser_gun_blueprint", "abyssal_conquerer", "cosmic_ripper", "gatekeeper", "gaia", "wyvern", "awakened", "chaotic", "twilight_forest", "chaotic_dominator", "ender_charm", "nether", "infinite_solar_energy", "space_treasure_hunter");

// endrem eye gating (2026-07-17) — hide eye recipes until their stage
Recipes.setRecipeStage("twilight_shield", <item:endrem:old_eye>);
Recipes.setRecipeStage("wither_slayer", <item:endrem:black_eye>);
Recipes.setRecipeStage("hardmode", <item:endrem:cold_eye>);
Recipes.setRecipeStage("skilled_wizard", <item:endrem:corrupted_eye>);
Recipes.setRecipeStage("master_wizard", <item:endrem:cryptic_eye>);
Recipes.setRecipeStage("master_wizard", <item:endrem:cursed_eye>);
Recipes.setRecipeStage("zealot", <item:endrem:evil_eye>);
Recipes.setRecipeStage("nether", <item:endrem:exotic_eye>);
Recipes.setRecipeStage("twilight_shield", <item:endrem:guardian_eye>);
Recipes.setRecipeStage("twilight_shield", <item:endrem:lost_eye>);
Recipes.setRecipeStage("qualified_botanian", <item:endrem:magical_eye>);
Recipes.setRecipeStage("nether", <item:endrem:nether_eye>);
Recipes.setRecipeStage("twilight_shield", <item:endrem:rogue_eye>);
Recipes.setRecipeStage("twilight_shield", <item:endrem:undead_eye>);
Recipes.setRecipeStage("alchemist", <item:endrem:witch_eye>);
Recipes.setRecipeStage("wither_slayer", <item:endrem:wither_eye>);

// --- containers.zs parity: GC whitelists these GUI packages across every stage ---
Recipes.setPackageStages("appeng", "getting_started", "novice_tinker", "skilled_tinker", "master_tinker", "novice_engineer", "skilled_engineer", "master_engineer", "novice_wizard", "skilled_wizard", "master_wizard", "qualified_botanian", "alchemist", "zealot", "twilight_shield", "valkyrie_smasher", "lunatic_cultist", "twilight_conquerer", "sun_killer", "forest_keeper", "hardmode", "wither_slayer", "the_awakened", "wielder_of_infinity", "cosmic_dominator", "fearless_man", "challenger_a", "challenger_b", "challenger_c", "challenger_d", "challenger_e", "challenger_f", "challenger_g", "challenger_all", "transmutation_table", "wand_blueprint", "tactic_blueprint", "shuriken_blueprint", "laser_gun_blueprint", "abyssal_conquerer", "cosmic_ripper", "gatekeeper", "gaia", "wyvern", "awakened", "chaotic", "twilight_forest", "chaotic_dominator", "ender_charm", "nether", "infinite_solar_energy", "space_treasure_hunter");
Recipes.setPackageStages("mekanism", "getting_started", "novice_tinker", "skilled_tinker", "master_tinker", "novice_engineer", "skilled_engineer", "master_engineer", "novice_wizard", "skilled_wizard", "master_wizard", "qualified_botanian", "alchemist", "zealot", "twilight_shield", "valkyrie_smasher", "lunatic_cultist", "twilight_conquerer", "sun_killer", "forest_keeper", "hardmode", "wither_slayer", "the_awakened", "wielder_of_infinity", "cosmic_dominator", "fearless_man", "challenger_a", "challenger_b", "challenger_c", "challenger_d", "challenger_e", "challenger_f", "challenger_g", "challenger_all", "transmutation_table", "wand_blueprint", "tactic_blueprint", "shuriken_blueprint", "laser_gun_blueprint", "abyssal_conquerer", "cosmic_ripper", "gatekeeper", "gaia", "wyvern", "awakened", "chaotic", "twilight_forest", "chaotic_dominator", "ender_charm", "nether", "infinite_solar_energy", "space_treasure_hunter");
