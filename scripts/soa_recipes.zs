// ============================================================
// SoA Recipes - Ported from GreedyCraft
// CraftTweaker 1.20.1 syntax
// Recipes for soa_additions custom items and related tweaks.
//
// [BLOCKED] = Recipe requires items from mods not in SOA.
//             Uncomment/adapt when substitute items are decided.
// ============================================================

#priority 100

// --- Common item shortcuts ---
val AIR = <item:minecraft:air>;
val CREATIVE_SHARD = <item:soa_additions:creative_shard>;
val NETHER_STAR = <tag:items:forge:nether_stars>;
val TIME_SHARD = <item:soa_additions:time_shard>;

// --- Helper: 3x3 compression recipe ---
function compress(name as string, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IItemStack) as void {
    craftingTable.addShaped(name, output, [
        [input, input, input],
        [input, input, input],
        [input, input, input]
    ]);
}

// --- Helper: shapeless decompression recipe ---
function decompress(name as string, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IItemStack) as void {
    craftingTable.addShapeless(name, output, [input]);
}

// ============================================================
//  GATE / KEY ITEMS
// ============================================================

// === Twilight Gem ===
// Alt recipe from GC using TF items (original needed thaumcraft:salis_mundus)
craftingTable.addShaped("soa_twilight_gem", <item:soa_additions:twilight_gem>, [
    [<item:minecraft:air>, <item:twilightforest:magic_map_focus>, <item:minecraft:air>],
    [<tag:items:forge:ingots/steeleaf>, <tag:items:forge:gems/diamond>, <item:twilightforest:naga_scale>],
    [<item:minecraft:air>, <tag:items:forge:ingots/knightmetal>, <item:minecraft:air>]
]);

// Normal mode recipe adapted (original used salis_mundus, replaced with botania fertilizer)
craftingTable.addShaped("soa_twilight_gem_alt", <item:soa_additions:twilight_gem>, [
    [<tag:items:minecraft:saplings>, <item:botania:fertilizer>, <tag:items:minecraft:saplings>],
    [<item:botania:fertilizer>, <item:botania:mana_diamond>, <item:botania:fertilizer>],
    [<tag:items:minecraft:saplings>, <item:botania:fertilizer>, <tag:items:minecraft:saplings>]
]);

// === Ender Charm ===
// Original used ingotDurasteel + ingotDreadium (AbyssalCraft, not available)
// Adapted with end-tier progression items
craftingTable.addShaped("soa_ender_charm", <item:soa_additions:ender_charm>, [
    [<item:minecraft:ender_eye>, <tag:items:forge:ingots/end_steel>, <item:minecraft:ender_eye>],
    [<tag:items:forge:ingots/dark_steel>, <tag:items:forge:nether_stars>, <tag:items:forge:ingots/dark_steel>],
    [<item:minecraft:ender_eye>, <tag:items:forge:ingots/end_steel>, <item:minecraft:ender_eye>]
]);

// === Twilight Shield ===
// Original GC normal mode recipe
craftingTable.addShaped("soa_twilight_shield", <item:soa_additions:twilight_shield>, [
    [<item:twilightforest:ironwood_ingot>, <tag:items:forge:ingots/knightmetal>, <item:twilightforest:ironwood_ingot>],
    [<item:twilightforest:fiery_ingot>, <item:twilightforest:alpha_yeti_fur>, <item:twilightforest:fiery_ingot>],
    [<item:minecraft:air>, <item:twilightforest:carminite>, <item:minecraft:air>]
]);

// ============================================================
//  MEDALS (Compression/Decompression)
// ============================================================

compress("soa_pioneer_medal", <item:soa_additions:pioneer_medal>, <item:soa_additions:ordinary_medal>);
compress("soa_greedy_medal", <item:soa_additions:greedy_medal>, <item:soa_additions:pioneer_medal>);
decompress("soa_rev_medal_pioneer", <item:soa_additions:ordinary_medal> * 9, <item:soa_additions:pioneer_medal>);
decompress("soa_rev_medal_greedy", <item:soa_additions:pioneer_medal> * 9, <item:soa_additions:greedy_medal>);

// ============================================================
//  BOUNTY HUNTER MEDALS (Compression/Decompression)
// ============================================================

compress("soa_bh_medal_silver", <item:soa_additions:bounty_hunter_medal_silver>, <item:soa_additions:bounty_hunter_medal_bronze>);
compress("soa_bh_medal_gold", <item:soa_additions:bounty_hunter_medal>, <item:soa_additions:bounty_hunter_medal_silver>);
decompress("soa_bh_medal_silver_rev", <item:soa_additions:bounty_hunter_medal_bronze> * 9, <item:soa_additions:bounty_hunter_medal_silver>);
decompress("soa_bh_medal_gold_rev", <item:soa_additions:bounty_hunter_medal_silver> * 9, <item:soa_additions:bounty_hunter_medal>);

// ============================================================
//  ANCIENT TOME (Compression/Decompression)
// ============================================================

compress("soa_ancient_tome_page", <item:soa_additions:ancient_tome_page>, <item:soa_additions:ancient_tome_fragment>);
compress("soa_ancient_tome", <item:soa_additions:ancient_tome>, <item:soa_additions:ancient_tome_page>);
decompress("soa_rev_tome_1", <item:soa_additions:ancient_tome_page> * 9, <item:soa_additions:ancient_tome>);
decompress("soa_rev_tome_0", <item:soa_additions:ancient_tome_fragment> * 9, <item:soa_additions:ancient_tome_page>);

// ============================================================
//  EXPERIENCE ITEMS (Compression/Decompression)
// ============================================================

compress("soa_experience_ingot", <item:soa_additions:experience_ingot>, <item:soa_additions:experience_nugget>);
decompress("soa_rev_experience_ingot", <item:soa_additions:experience_nugget> * 9, <item:soa_additions:experience_ingot>);
compress("soa_experience_ingot_from_droplet", <item:soa_additions:experience_ingot>, <item:mysticalagriculture:experience_droplet>);

// Experience Nugget from 1x MA Experience Droplet
craftingTable.addShapeless("soa_experience_nugget_from_droplet", <item:soa_additions:experience_nugget>, [
    <item:mysticalagriculture:experience_droplet>
]);

// ============================================================
//  INFERNIUM (Compression/Decompression)
// ============================================================

compress("soa_infernium_ingot", <item:soa_additions:infernium_ingot>, <item:soa_additions:infernium_nugget>);
decompress("soa_rev_infernium_ingot", <item:soa_additions:infernium_nugget> * 9, <item:soa_additions:infernium_ingot>);

// ============================================================
//  MEDKITS
// ============================================================

// Medkit (Small)
craftingTable.addShaped("soa_medkit_small", <item:soa_additions:medkit_small>, [
    [<item:minecraft:air>, <item:scalinghealth:heart_dust>, <item:minecraft:air>],
    [<item:scalinghealth:heart_dust>, <item:minecraft:glass_bottle>, <item:scalinghealth:heart_dust>],
    [<item:minecraft:air>, <item:scalinghealth:heart_dust>, <item:minecraft:air>]
]);

// Advanced Medkit
craftingTable.addShaped("soa_medkit_big", <item:soa_additions:medkit_big>, [
    [<item:minecraft:air>, <item:scalinghealth:heart_crystal_shard>, <item:minecraft:air>],
    [<item:scalinghealth:heart_crystal_shard>, <item:soa_additions:medkit_small>, <item:scalinghealth:heart_crystal_shard>],
    [<item:minecraft:air>, <item:scalinghealth:heart_crystal_shard>, <item:minecraft:air>]
]);

// Super Medkit
craftingTable.addShaped("soa_medkit_super", <item:soa_additions:medkit_super>, [
    [<item:minecraft:air>, <item:scalinghealth:heart_crystal>, <item:minecraft:air>],
    [<item:scalinghealth:heart_crystal>, <item:soa_additions:medkit_big>, <item:scalinghealth:heart_crystal>],
    [<item:minecraft:air>, <item:scalinghealth:heart_crystal>, <item:minecraft:air>]
]);

// ============================================================
//  DELIVERY ORDER
// ============================================================

craftingTable.addShaped("soa_delivery_order", <item:soa_additions:delivery_order>, [
    [<item:soa_additions:time_shard>, <item:soa_additions:time_shard>, <item:soa_additions:time_shard>],
    [<item:soa_additions:time_shard>, <item:minecraft:paper>, <item:soa_additions:time_shard>],
    [<item:soa_additions:time_shard>, <item:soa_additions:time_shard>, <item:soa_additions:time_shard>]
]);

// ============================================================
//  DIFFICULTY SYNCER
// ============================================================

craftingTable.addShaped("soa_difficulty_syncer", <item:soa_additions:difficulty_syncer>, [
    [<tag:items:forge:glass_panes>, <tag:items:forge:glass_panes>, <tag:items:forge:glass_panes>],
    [<tag:items:forge:glass_panes>, <item:minecraft:bone>, <tag:items:forge:glass_panes>],
    [<tag:items:forge:glass_panes>, <tag:items:forge:glass_panes>, <tag:items:forge:glass_panes>]
]);

// ============================================================
//  DEATH COUNTER
// ============================================================

craftingTable.addShapeless("soa_death_counter", <item:soa_additions:death_counter>, [
    <item:tconstruct:pattern>, <item:minecraft:bone>
]);

// ============================================================
//  SOLARIUM STAR
// ============================================================

craftingTable.addShapeless("soa_solarium_star", <item:soa_additions:solarium_star>, [
    <item:soa_additions:broken_solarium_star>, <item:soa_additions:solar_seed>
]);

// ============================================================
//  SUN TOTEM
// ============================================================

craftingTable.addShaped("soa_sun_totem", <item:soa_additions:sun_totem>, [
    [<item:minecraft:air>, <item:draconicevolution:wyvern_core>, <item:minecraft:air>],
    [<item:soa_additions:solarium_star>, <item:minecraft:totem_of_undying>, <item:soa_additions:solarium_star>],
    [<item:minecraft:air>, <tag:items:forge:nether_stars>, <item:minecraft:air>]
]);

// ============================================================
//  LOLI LOLLIPOP
// ============================================================

craftingTable.addShaped("soa_loli_lolipop", <item:soa_additions:loli_lolipop>, [
    [<item:minecraft:air>, <item:minecraft:sugar>, <item:soa_additions:time_shard>],
    [<item:minecraft:air>, <tag:items:forge:rods/wooden>, <item:minecraft:sugar>],
    [<tag:items:forge:rods/wooden>, <item:minecraft:air>, <item:minecraft:air>]
]);

// ============================================================
//  BEAST HAND
// ============================================================

// [BLOCKED] Original used ore:ingotAeonsteel - not available yet
// Using draconium ingot as substitute until aeonsteel is added
craftingTable.addShaped("soa_beast_hand", <item:soa_additions:beast_hand>, [
    [<tag:items:forge:ingots/draconium>, <item:minecraft:snow_block>, <tag:items:forge:ingots/draconium>],
    [<item:twilightforest:alpha_yeti_fur>, <tag:items:forge:dusts/draconium>, <item:twilightforest:alpha_yeti_fur>],
    [<item:minecraft:air>, <item:twilightforest:alpha_yeti_fur>, <item:minecraft:air>]
]);

// ============================================================
//  BLOODY SACRIFICE
// ============================================================

// Original used tconstruct:edible:3 (monster jerky) - not in 1.20.1 TC
// Using rotten_flesh as substitute
craftingTable.addShaped("soa_bloody_sacrifice", <item:soa_additions:bloody_sacrifice>, [
    [<item:soa_additions:raw_human_meat>, <item:minecraft:rotten_flesh>, <item:soa_additions:raw_human_meat>],
    [<item:minecraft:rotten_flesh>, <item:minecraft:bone>, <item:minecraft:rotten_flesh>],
    [<item:soa_additions:raw_human_meat>, <item:minecraft:rotten_flesh>, <item:soa_additions:raw_human_meat>]
]);

// Alternate pattern
craftingTable.addShaped("soa_bloody_sacrifice_alt", <item:soa_additions:bloody_sacrifice>, [
    [<item:minecraft:rotten_flesh>, <item:soa_additions:raw_human_meat>, <item:minecraft:rotten_flesh>],
    [<item:soa_additions:raw_human_meat>, <item:minecraft:bone>, <item:soa_additions:raw_human_meat>],
    [<item:minecraft:rotten_flesh>, <item:soa_additions:raw_human_meat>, <item:minecraft:rotten_flesh>]
]);

// ============================================================
//  BLOOD SIGIL
// ============================================================

// Original used tconstruct:edible:3 + abyssalcraft:ironp (iron plate)
// Using rotten_flesh + iron plate (forge tag exists in 1.20.1)
craftingTable.addShaped("soa_blood_sigil", <item:soa_additions:blood_sigil>, [
    [<item:minecraft:air>, <item:minecraft:rotten_flesh>, <item:minecraft:air>],
    [<item:minecraft:rotten_flesh>, <tag:items:forge:plates/iron>, <item:minecraft:rotten_flesh>],
    [<item:minecraft:air>, <item:minecraft:rotten_flesh>, <item:minecraft:air>]
]);

// ============================================================
//  TRUE BLOOD SIGIL
// ============================================================

craftingTable.addShaped("soa_true_blood_sigil", <item:soa_additions:true_blood_sigil>, [
    [<item:soa_additions:bloody_sacrifice>, <item:soa_additions:blood_sigil>, <item:soa_additions:bloody_sacrifice>],
    [<item:soa_additions:blood_sigil>, <item:soa_additions:creative_shard>, <item:soa_additions:blood_sigil>],
    [<item:soa_additions:bloody_sacrifice>, <item:soa_additions:blood_sigil>, <item:soa_additions:bloody_sacrifice>]
]);

// ============================================================
//  BRAVERY CERTIFICATE
// ============================================================

// Original used abyssalcraft:cingot, ore:ingotValkyrie, ore:ingotAeroite, ore:ingotAsgardium
// Adapted: hellforged (bound metal), gravitite (valkyrie), golden_amber (aether)
craftingTable.addShaped("soa_bravery_certificate", <item:soa_additions:bravery_certificate>, [
    [<item:aether:enchanted_gravitite>, <tag:items:forge:nether_stars>, <item:aether:enchanted_gravitite>],
    [<tag:items:forge:ingots/hellforged>, <tag:items:forge:ingots/demonite>, <tag:items:forge:ingots/hellforged>],
    [<item:aether:enchanted_gravitite>, <item:aether:golden_amber>, <item:aether:enchanted_gravitite>]
]);

// ============================================================
//  DEATH COIN
// ============================================================

// Original used tconevo:metal:5 (not available) - using draconium_awakened as substitute
craftingTable.addShaped("soa_death_coin", <item:soa_additions:death_coin>, [
    [<item:draconicevolution:awakened_core>, <item:soa_additions:ancient_tome_fragment>, <item:draconicevolution:awakened_core>],
    [<tag:items:forge:ingots/draconium_awakened>, <item:soa_additions:bounty_hunter_medal>, <tag:items:forge:ingots/draconium_awakened>],
    [<item:draconicevolution:awakened_core>, <item:soa_additions:creative_shard>, <item:draconicevolution:awakened_core>]
]);

// ============================================================
//  PURIFYING PILL
// ============================================================

// [BLOCKED] Original used thaumcraft:sanity_soap (not available)
// Using milk bucket as thematic substitute
craftingTable.addShaped("soa_purifying_pill", <item:soa_additions:purifying_pill>, [
    [<item:minecraft:air>, <item:soa_additions:creative_shard>, <item:minecraft:air>],
    [<item:soa_additions:creative_shard>, <item:minecraft:milk_bucket>, <item:soa_additions:creative_shard>],
    [<item:minecraft:air>, <item:soa_additions:creative_shard>, <item:minecraft:air>]
]);

// ============================================================
//  ENERGY-MATTER CONVERSION CORE
// ============================================================

// Original was from ProjectE but doesn't exist in 1.20.1 ProjectE
// Custom recipe using ProjectE items
craftingTable.addShaped("soa_energy_matter_core", <item:soa_additions:energy_matter_core>, [
    [<item:projecte:dark_matter>, <item:projecte:red_matter>, <item:projecte:dark_matter>],
    [<item:projecte:red_matter>, <tag:items:forge:nether_stars>, <item:projecte:red_matter>],
    [<item:projecte:dark_matter>, <item:projecte:red_matter>, <item:projecte:dark_matter>]
]);

// ============================================================
//  ARCANE CRYSTAL BALL
// ============================================================

// [BLOCKED] Original recipe unknown - creating a thematic recipe
craftingTable.addShaped("soa_arcane_crystal_ball", <item:soa_additions:arcane_crystal_ball>, [
    [<item:minecraft:air>, <item:minecraft:amethyst_shard>, <item:minecraft:air>],
    [<item:minecraft:amethyst_shard>, <item:minecraft:ender_eye>, <item:minecraft:amethyst_shard>],
    [<item:minecraft:air>, <item:minecraft:amethyst_shard>, <item:minecraft:air>]
]);

// ============================================================
//  PEARL OF KNOWLEDGE
// ============================================================

// Original used Blood Altar tier 5 with botania:mana_pearl
// Crafting table fallback recipe
craftingTable.addShaped("soa_pearl_of_knowledge", <item:soa_additions:pearl_of_knowledge>, [
    [<item:soa_additions:experience_ingot>, <item:soa_additions:experience_ingot>, <item:soa_additions:experience_ingot>],
    [<item:soa_additions:experience_ingot>, <item:botania:mana_pearl>, <item:soa_additions:experience_ingot>],
    [<item:soa_additions:experience_ingot>, <item:soa_additions:experience_ingot>, <item:soa_additions:experience_ingot>]
]);

// ============================================================
//  AWAKENED EYE
// ============================================================

// [BLOCKED] Original used abyssalcraft items
// Adapted recipe using available end-game items
craftingTable.addShaped("soa_awakened_eye", <item:soa_additions:awakened_eye>, [
    [<item:minecraft:ender_eye>, <tag:items:forge:ingots/draconium_awakened>, <item:minecraft:ender_eye>],
    [<tag:items:forge:ingots/draconium_awakened>, <item:draconicevolution:awakened_core>, <tag:items:forge:ingots/draconium_awakened>],
    [<item:minecraft:ender_eye>, <tag:items:forge:ingots/draconium_awakened>, <item:minecraft:ender_eye>]
]);

// ============================================================
//  FORBIDDEN BIBLE
// ============================================================

// Original used ore:ingotVoid + ore:ingotDemonicMetal + TCreopargh skull
// Using soa void_ingot + bloodmagic demonite + wither skull
craftingTable.addShaped("soa_forbidden_bible", <item:soa_additions:forbidden_bible>, [
    [<item:soa_additions:void_ingot>, <tag:items:forge:ingots/demonite>, <item:soa_additions:void_ingot>],
    [<tag:items:forge:ingots/demonite>, <item:minecraft:wither_skeleton_skull>, <tag:items:forge:ingots/demonite>],
    [<item:soa_additions:void_ingot>, <tag:items:forge:ingots/demonite>, <item:soa_additions:void_ingot>]
]);

// ============================================================
//  RESPAWN ANCHOR (Anchor of Resurrection)
// ============================================================

// [BLOCKED] Original used ore:ingotAeroite + ore:ingotAsgardium
// Adapted with available materials
craftingTable.addShaped("soa_respawn_anchor", <item:soa_additions:respawn_anchor>, [
    [<item:soa_additions:time_shard>, <item:aether:enchanted_gravitite>, <item:soa_additions:time_shard>],
    [<tag:items:forge:nether_stars>, <item:minecraft:totem_of_undying>, <tag:items:forge:nether_stars>],
    [<item:soa_additions:time_shard>, <item:aether:enchanted_gravitite>, <item:soa_additions:time_shard>]
]);

// ============================================================
//  EXPERIENCE TRANSPORTER
// ============================================================

// [BLOCKED] Original used ore:eternalLifeEssence (Blood Magic)
// Adapted recipe
craftingTable.addShaped("soa_experience_transporter", <item:soa_additions:experience_transporter>, [
    [<item:minecraft:ender_eye>, <item:soa_additions:experience_ingot>, <item:minecraft:ender_eye>],
    [<item:soa_additions:experience_ingot>, <item:soa_additions:pearl_of_knowledge>, <item:soa_additions:experience_ingot>],
    [<item:minecraft:ender_eye>, <item:soa_additions:experience_ingot>, <item:minecraft:ender_eye>]
]);

// ============================================================
//  BLUEPRINT ITEMS
// ============================================================

// Blank Blueprint
craftingTable.addShaped("soa_blueprint", <item:soa_additions:blueprint>, [
    [<item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>],
    [<item:minecraft:lapis_lazuli>, <item:minecraft:paper>, <item:minecraft:lapis_lazuli>],
    [<item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>]
]);

// Blueprint [Sceptre/Wand]
// [BLOCKED] Original used thaumcraft infusion - adapted
craftingTable.addShaped("soa_blueprint_wand", <item:soa_additions:blueprint_wand>, [
    [<item:minecraft:air>, <item:minecraft:blaze_rod>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:soa_additions:blueprint>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:blaze_rod>, <item:minecraft:air>]
]);

// Blueprint [Shuriken]
craftingTable.addShaped("soa_blueprint_shuriken", <item:soa_additions:blueprint_shuriken>, [
    [<item:minecraft:air>, <tag:items:forge:ingots/iron>, <item:minecraft:air>],
    [<tag:items:forge:ingots/iron>, <item:soa_additions:blueprint>, <tag:items:forge:ingots/iron>],
    [<item:minecraft:air>, <tag:items:forge:ingots/iron>, <item:minecraft:air>]
]);

// Blueprint [Tactic]
craftingTable.addShaped("soa_blueprint_tactic", <item:soa_additions:blueprint_tactic>, [
    [<item:minecraft:air>, <item:minecraft:bow>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:soa_additions:blueprint>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:crossbow>, <item:minecraft:air>]
]);

// Blueprint [Laser Gun]
craftingTable.addShaped("soa_blueprint_laser_gun", <item:soa_additions:blueprint_laser_gun>, [
    [<item:minecraft:air>, <item:minecraft:redstone>, <item:minecraft:air>],
    [<item:minecraft:redstone>, <item:soa_additions:blueprint>, <item:minecraft:redstone>],
    [<item:minecraft:air>, <item:minecraft:redstone>, <item:minecraft:air>]
]);

// ============================================================
//  OVERFLUX CAPACITOR
// ============================================================

// [BLOCKED] Original was thaumicwonders:flux_capacitor - adapted
craftingTable.addShaped("soa_overflux_capacitor", <item:soa_additions:overflux_capacitor>, [
    [<tag:items:forge:ingots/draconium_awakened>, <item:soa_additions:creative_shard>, <tag:items:forge:ingots/draconium_awakened>],
    [<item:soa_additions:creative_shard>, <item:draconicevolution:awakened_core>, <item:soa_additions:creative_shard>],
    [<tag:items:forge:ingots/draconium_awakened>, <item:soa_additions:creative_shard>, <tag:items:forge:ingots/draconium_awakened>]
]);

// ============================================================
//  MISC ITEMS
// ============================================================

// Grass String
craftingTable.addShaped("soa_grass_string", <item:soa_additions:grass_string>, [
    [<item:soa_additions:plant_fibre>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:soa_additions:plant_fibre>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:soa_additions:plant_fibre>]
]);

// Crude Hatchet
craftingTable.addShaped("soa_crude_hatchet", <item:soa_additions:crude_hatchet>, [
    [<item:soa_additions:pebble>, <item:soa_additions:grass_string>],
    [<tag:items:forge:rods/wooden>, <item:minecraft:air>]
]);

// ============================================================
//  GRAVEL -> RAW FLINT (replaces Tinkers' 3 gravel -> 1 flint)
// ============================================================

craftingTable.removeByName("tconstruct:common/flint");
craftingTable.addShapeless("soa_gravel_to_raw_flint", <item:tough_beginnings:raw_flint>, [
    <item:minecraft:gravel>, <item:minecraft:gravel>, <item:minecraft:gravel>
]);
