// ============================================================
// SoA Ore Stages - Ported from GreedyCraft
// Hides ores behind gamestages using SDM OreStages.
// Players without the required stage will see the replacement
// block instead of the actual ore. Mining it yields nothing.
//
// Syntax: OreStages.addOreStage(stage, blockstate, replacement, explosion)
//   explosion = false means no explosion when mined without stage
//
// Only actual ores are staged here. Non-ore blocks are handled
// by ItemStages (soa_item_stages.zs) and RecipeStages instead.
// ============================================================

import mods.orestages.OreStages;

// ============================================================
//  CHALLENGER_A (Inferium tier)
// ============================================================

OreStages.addOreStage("challenger_a", <blockstate:mysticalagriculture:inferium_ore>, <blockstate:minecraft:stone>, false);
OreStages.addOreStage("challenger_a", <blockstate:mysticalagriculture:deepslate_inferium_ore>, <blockstate:minecraft:deepslate>, false);
OreStages.addOreStage("challenger_a", <blockstate:mysticalagriculture:prosperity_ore>, <blockstate:minecraft:stone>, false);
OreStages.addOreStage("challenger_a", <blockstate:mysticalagriculture:deepslate_prosperity_ore>, <blockstate:minecraft:deepslate>, false);
OreStages.addOreStage("challenger_a", <blockstate:mysticalagriculture:soulium_ore>, <blockstate:minecraft:soul_sand>, false);

// ============================================================
//  NETHER
// ============================================================

OreStages.addOreStage("nether", <blockstate:minecraft:nether_quartz_ore>, <blockstate:minecraft:netherrack>, false);
OreStages.addOreStage("nether", <blockstate:minecraft:nether_gold_ore>, <blockstate:minecraft:netherrack>, false);
OreStages.addOreStage("nether", <blockstate:minecraft:ancient_debris>, <blockstate:minecraft:netherrack>, false);
OreStages.addOreStage("nether", <blockstate:minecraft:gilded_blackstone>, <blockstate:minecraft:blackstone>, false);
OreStages.addOreStage("nether", <blockstate:tconstruct:cobalt_ore>, <blockstate:minecraft:netherrack>, false);

// ============================================================
//  SKILLED_ENGINEER
// ============================================================

// Big Reactors ores
OreStages.addOreStage("skilled_engineer", <blockstate:bigreactors:yellorite_ore>, <blockstate:minecraft:stone>, false);
OreStages.addOreStage("skilled_engineer", <blockstate:bigreactors:deepslate_yellorite_ore>, <blockstate:minecraft:deepslate>, false);
OreStages.addOreStage("skilled_engineer", <blockstate:bigreactors:anglesite_ore>, <blockstate:minecraft:stone>, false);
OreStages.addOreStage("skilled_engineer", <blockstate:bigreactors:benitoite_ore>, <blockstate:minecraft:stone>, false);

// Mekanism ores
OreStages.addOreStage("skilled_engineer", <blockstate:mekanism:uranium_ore>, <blockstate:minecraft:stone>, false);
OreStages.addOreStage("skilled_engineer", <blockstate:mekanism:deepslate_uranium_ore>, <blockstate:minecraft:deepslate>, false);
OreStages.addOreStage("skilled_engineer", <blockstate:mekanism:fluorite_ore>, <blockstate:minecraft:stone>, false);
OreStages.addOreStage("skilled_engineer", <blockstate:mekanism:deepslate_fluorite_ore>, <blockstate:minecraft:deepslate>, false);

// ============================================================
//  HARDMODE
// ============================================================

// Draconium ores
OreStages.addOreStage("hardmode", <blockstate:draconicevolution:overworld_draconium_ore>, <blockstate:minecraft:stone>, false);
OreStages.addOreStage("hardmode", <blockstate:draconicevolution:deepslate_draconium_ore>, <blockstate:minecraft:deepslate>, false);
OreStages.addOreStage("hardmode", <blockstate:draconicevolution:nether_draconium_ore>, <blockstate:minecraft:netherrack>, false);
OreStages.addOreStage("hardmode", <blockstate:draconicevolution:end_draconium_ore>, <blockstate:minecraft:end_stone>, false);

// Thermal gem ores
OreStages.addOreStage("hardmode", <blockstate:thermal:ruby_ore>, <blockstate:minecraft:stone>, false);
OreStages.addOreStage("hardmode", <blockstate:thermal:deepslate_ruby_ore>, <blockstate:minecraft:deepslate>, false);
OreStages.addOreStage("hardmode", <blockstate:thermal:sapphire_ore>, <blockstate:minecraft:stone>, false);
OreStages.addOreStage("hardmode", <blockstate:thermal:deepslate_sapphire_ore>, <blockstate:minecraft:deepslate>, false);
