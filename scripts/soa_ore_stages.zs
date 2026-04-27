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

// Thermal Foundation ores — GC hid lead and silver behind skilled_engineer
// (thermalfoundation:ore:6 = lead, :7 = silver in 1.12) so the alloy
// progression (signalum/lumium/enderium etc. that consume these) stays gated.
OreStages.addOreStage("skilled_engineer", <blockstate:thermal:lead_ore>,             <blockstate:minecraft:stone>,     false);
OreStages.addOreStage("skilled_engineer", <blockstate:thermal:deepslate_lead_ore>,   <blockstate:minecraft:deepslate>, false);
OreStages.addOreStage("skilled_engineer", <blockstate:thermal:silver_ore>,           <blockstate:minecraft:stone>,     false);
OreStages.addOreStage("skilled_engineer", <blockstate:thermal:deepslate_silver_ore>, <blockstate:minecraft:deepslate>, false);

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

// SoA-additions absorbed ores (Additions/Nyx/Tconevo) — port of GC's
// scripts/gamestages/ore_replacement.zs hardmode block.
OreStages.addOreStage("hardmode", <blockstate:soa_additions:cytosinite_ore>, <blockstate:minecraft:dirt>, false);
OreStages.addOreStage("hardmode", <blockstate:soa_additions:cryonium_ore>, <blockstate:minecraft:stone>, false);
OreStages.addOreStage("hardmode", <blockstate:soa_additions:titanium_ore>, <blockstate:minecraft:end_stone>, false);

// Taiga ores (soa_taiga thingpack registers the `taiga:` namespace)
OreStages.addOreStage("hardmode", <blockstate:taiga:abyssum_ore>,    <blockstate:minecraft:end_stone>, false);
OreStages.addOreStage("hardmode", <blockstate:taiga:aurorium_ore>,   <blockstate:minecraft:end_stone>, false);
OreStages.addOreStage("hardmode", <blockstate:taiga:dilithium_ore>,  <blockstate:minecraft:stone>, false);
OreStages.addOreStage("hardmode", <blockstate:taiga:duranite_ore>,   <blockstate:minecraft:stone>, false);
OreStages.addOreStage("hardmode", <blockstate:taiga:eezo_ore>,       <blockstate:minecraft:stone>, false);
OreStages.addOreStage("hardmode", <blockstate:taiga:jauxum_ore>,     <blockstate:minecraft:diorite>, false);
OreStages.addOreStage("hardmode", <blockstate:taiga:karmesine_ore>,  <blockstate:minecraft:granite>, false);
OreStages.addOreStage("hardmode", <blockstate:taiga:osram_ore>,      <blockstate:taiga:basalt_block>, false);
OreStages.addOreStage("hardmode", <blockstate:taiga:ovium_ore>,      <blockstate:minecraft:andesite>, false);
OreStages.addOreStage("hardmode", <blockstate:taiga:palladium_ore>,  <blockstate:minecraft:end_stone>, false);
OreStages.addOreStage("hardmode", <blockstate:taiga:prometheum_ore>, <blockstate:minecraft:netherrack>, false);
OreStages.addOreStage("hardmode", <blockstate:taiga:tiberium_ore>,   <blockstate:minecraft:netherrack>, false);
OreStages.addOreStage("hardmode", <blockstate:soa_additions:uru_ore>, <blockstate:minecraft:stone>, false);
OreStages.addOreStage("hardmode", <blockstate:taiga:valyrium_ore>,   <blockstate:minecraft:netherrack>, false);
OreStages.addOreStage("hardmode", <blockstate:taiga:vibranium_ore>,  <blockstate:minecraft:stone>, false);

// ============================================================
//  DESCENDANT_OF_THE_SUN
// ============================================================

// Hide infernium ores until the player unlocks the descendant_of_the_sun stage
// (originally gated to the Solarium Star usage in GC).
OreStages.addOreStage("descendant_of_the_sun", <blockstate:soa_additions:infernium_ore_block>, <blockstate:minecraft:netherrack>, false);

// ============================================================
//  ENDER_CHARM
// ============================================================

// Hide End Portal Frames as unknown_block until the player has the ender_charm
// stage. GC's reasoning (per progression_harvest_levels_README.md): "Cannot
// find stronghold without stage" — the visual hide prevents stronghold
// discovery before the player has crafted the Ender Charm. The frame is also
// HL 5 in needs_duranite_tool, so even if a player finds it, they can't mine
// it without the stage's gear progression.
OreStages.addOreStage("ender_charm", <blockstate:minecraft:end_portal_frame>, <blockstate:soa_additions:unknown_block>, false);

// ============================================================
//  Additional gating from GC ore_replacement.zs
//  (entries whose blocks exist in SoA's installed mod set)
// ============================================================

// Aether ores (block until 'nether' stage so players go to Nether first)
OreStages.addOreStage("nether", <blockstate:soa_additions:aeroite_ore>,  <blockstate:aether:blue_aercloud>, false);
OreStages.addOreStage("nether", <blockstate:soa_additions:aqualite_ore>, <blockstate:minecraft:prismarine>, false);
