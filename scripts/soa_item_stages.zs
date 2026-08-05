// ============================================================
// SoA Item Stages - Re-ported from GreedyCraft items.zs
// Source: D:/Minecraft/Instances/GreedyCraft/scripts/gamestages/items.zs
// Generated: 2026-04-26 (regen via /tmp/port_gc_stages.py)
//
// Translation rules:
//   <ore:X>            -> <tag:items:forge:Y> (camelCase -> snake_case)
//   additions:greedycraft-* -> soa_additions:*
//   additions:tcsponsors-*  -> tcsponsors:*
//   cyclicmagic:*           -> cyclic:*
//   thermal{foundation,expansion,innovation,cultivation}:* -> thermal:*
//   appliedenergistics2:*   -> ae2:*
//   {extrabotany,botanicadds}:* -> mythicbotany:*
//   {thaumicwonders,thaumictinkerer}:* -> thaumcraft:*
//   {nyx,thaumadditions,tconevo,bloodarsenal,plustic}:* -> soa_additions:*
//   tconstruct:tooltables:N -> smithery:casting_table / part_press /
//                              forge_controller / forge_drain / forge_item_port /
//                              forge_fuel_port / furnace_bricks (TC removed for Smithery)
//   danknull:dank_null_N -> dankstorage:dank_N
//   eternalsingularity:eternal_singularity -> avaritia:eternal_singularity
//   solarflux:solar_panel_infinity -> solarflux:sp_avaritia.infinity
//   hooked:hook:3/4 -> rehooked:diamond_hook / ender_hook
//   .withTag({...}) and trailing :meta variants stripped (1.20.1 merged)
//
// Lines prefixed `// OMIT_MOD` reference items whose mod is not bundled
// with SoA. Kept commented for traceability and future enabling.
//
// Pickup interception handled by GreedyBag item (soa_additions).
// ============================================================

import mods.itemstages.ItemStages;


// === abyssal_conquerer ===
ItemStages.restrict(<item:soa_additions:north_star>, "abyssal_conquerer");
ItemStages.restrict(<tag:items:forge:nether_stars>, "abyssal_conquerer");
ItemStages.restrict(<item:minecraft:wither_skeleton_skull>, "abyssal_conquerer");
ItemStages.restrict(<tag:items:forge:ingots/mirion>, "abyssal_conquerer");
ItemStages.restrict(<tag:items:forge:storage_blocks/mirion>, "abyssal_conquerer");

// === awakened ===
// BAD_ID (removed with TConstruct; Smithery has no rod cast equivalent): ItemStages.restrict(<item:tconstruct:rod_cast>, "awakened");
ItemStages.restrict(<tag:items:forge:ingots/draconic_metal>, "awakened");
ItemStages.restrict(<tag:items:forge:storage_blocks/draconic_metal>, "awakened");
ItemStages.restrict(<tag:items:forge:nuggets/draconic_metal>, "awakened");
ItemStages.restrict(<tag:items:forge:dusts/draconic_metal>, "awakened");
ItemStages.restrict(<tag:items:forge:nuggets/titanium>, "awakened");
ItemStages.restrict(<tag:items:forge:ingots/titanium>, "awakened");
ItemStages.restrict(<tag:items:forge:ores/titanium>, "awakened");
ItemStages.restrict(<tag:items:forge:dusts/titanium>, "awakened");
ItemStages.restrict(<tag:items:forge:storage_blocks/titanium>, "awakened");
// OMIT_MOD (mod missing: extrautils2): ItemStages.restrict(<item:extrautils2:chicken_ring>, "awakened");
// OMIT_MOD (mod missing: extrautils2): ItemStages.restrict(<item:extrautils2:angel_ring>, "awakened");
ItemStages.restrict(<item:inventorypets:pet_cloud>, "awakened");
// BAD_ID (item not registered: cyclic:glowing_chorus_fruit): ItemStages.restrict(<item:cyclic:glowing_chorus_fruit>, "awakened");
// OMIT_MOD (mod missing: toolprogression): ItemStages.restrict(<item:toolprogression:magic_mushroom>, "awakened");
ItemStages.restrict(<tag:items:forge:storage_blocks/terra_alloy>, "awakened");
ItemStages.restrict(<tag:items:forge:ingots/terra_alloy>, "awakened");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:laser_relay_item>, "awakened");
ItemStages.restrict(<item:magicfeather:magic_feather>, "awakened");
// EMPTY_TAG (empty tag: forge:bedrock): ItemStages.restrict(<tag:items:forge:bedrock>, "awakened");
ItemStages.restrict(<tag:items:forge:ingots/protonium>, "awakened");
ItemStages.restrict(<tag:items:forge:storage_blocks/protonium>, "awakened");
// OMIT_MOD (mod missing: modularmachinery): ItemStages.restrict(<item:modularmachinery:blockcasing_creative>, "awakened");
ItemStages.restrict(<tag:items:forge:ingots/chromasteel>, "awakened");
ItemStages.restrict(<tag:items:forge:storage_blocks/chromasteel>, "awakened");
// OMIT_MOD (mod missing: openmodularturrets): ItemStages.restrict(<item:openmodularturrets:turret_base>, "awakened");

// === challenger_a ===
// EMPTY_TAG (empty tag: forge:seeds/tier1): ItemStages.restrict(<tag:items:forge:seeds/tier1>, "challenger_a");
ItemStages.restrict(<tag:items:forge:essences/inferium>, "challenger_a");
ItemStages.restrict(<tag:items:forge:ingots/inferium>, "challenger_a");
ItemStages.restrict(<item:tinymobfarm:stone_farm>, "challenger_a");

// === challenger_b ===
// EMPTY_TAG (empty tag: forge:seeds/tier2): ItemStages.restrict(<tag:items:forge:seeds/tier2>, "challenger_b");
ItemStages.restrict(<tag:items:forge:essences/prudentium>, "challenger_b");
ItemStages.restrict(<tag:items:forge:ingots/prudentium>, "challenger_b");
ItemStages.restrict(<item:tinymobfarm:iron_farm>, "challenger_b");

// === challenger_c ===
// EMPTY_TAG (empty tag: forge:seeds/tier3): ItemStages.restrict(<tag:items:forge:seeds/tier3>, "challenger_c");
ItemStages.restrict(<tag:items:forge:essences/intermedium>, "challenger_c");
ItemStages.restrict(<tag:items:forge:ingots/intermedium>, "challenger_c");
ItemStages.restrict(<item:tinymobfarm:gold_farm>, "challenger_c");

// === challenger_d ===
// EMPTY_TAG (empty tag: forge:seeds/tier4): ItemStages.restrict(<tag:items:forge:seeds/tier4>, "challenger_d");
ItemStages.restrict(<tag:items:forge:essences/superium>, "challenger_d");
ItemStages.restrict(<tag:items:forge:ingots/superium>, "challenger_d");
ItemStages.restrict(<item:tinymobfarm:diamond_farm>, "challenger_d");

// === challenger_e ===
// EMPTY_TAG (empty tag: forge:seeds/tier5): ItemStages.restrict(<tag:items:forge:seeds/tier5>, "challenger_e");
ItemStages.restrict(<tag:items:forge:essences/supremium>, "challenger_e");
ItemStages.restrict(<tag:items:forge:ingots/supremium>, "challenger_e");
ItemStages.restrict(<item:tinymobfarm:emerald_farm>, "challenger_e");

// === challenger_f ===
ItemStages.restrict(<tag:items:forge:essences/insanium>, "challenger_f");
ItemStages.restrict(<tag:items:forge:ingots/insanium>, "challenger_f");
ItemStages.restrict(<item:tinymobfarm:inferno_farm>, "challenger_f");

// === challenger_g ===
// EMPTY_TAG (empty tag: forge:seeds/tier6): ItemStages.restrict(<tag:items:forge:seeds/tier6>, "challenger_g");
ItemStages.restrict(<item:tinymobfarm:ultimate_farm>, "challenger_g");

// === chaotic ===
ItemStages.restrict(<tag:items:forge:ingots/chaotic_metal>, "chaotic");
ItemStages.restrict(<tag:items:forge:storage_blocks/chaotic_metal>, "chaotic");
ItemStages.restrict(<tag:items:forge:nuggets/chaotic_metal>, "chaotic");
ItemStages.restrict(<tag:items:forge:dusts/chaotic_metal>, "chaotic");
ItemStages.restrict(<tag:items:forge:ingots/cosmilite>, "chaotic");
ItemStages.restrict(<tag:items:forge:storage_blocks/cosmilite>, "chaotic");
ItemStages.restrict(<item:soa_additions:flux_singularity>, "chaotic");
ItemStages.restrict(<item:soa_additions:mana_singularity>, "chaotic");
ItemStages.restrict(<item:soa_additions:experience_singularity>, "chaotic");
ItemStages.restrict(<item:soa_additions:matter_singularity>, "chaotic");
ItemStages.restrict(<item:soa_additions:anti_entropy_matter>, "chaotic");
ItemStages.restrict(<item:solarflux:sp_custom_cosmic_solar_panel>, "chaotic");  // Cosmic Solar Panel
ItemStages.restrict(<item:avaritia:eternal_singularity>, "chaotic");

// === chaotic_dominator ===
ItemStages.restrict(<item:soa_additions:death_coin>, "chaotic_dominator");
// BAD_ID (item not registered: scalinghealth:difficultychanger): ItemStages.restrict(<item:scalinghealth:difficultychanger>, "chaotic_dominator");
ItemStages.restrict(<item:soa_additions:difficulty_changer>, "chaotic_dominator");
// BAD_ID (item not registered: avaritia:infinitato): ItemStages.restrict(<item:avaritia:infinitato>, "chaotic_dominator");
ItemStages.restrict(<item:draconicevolution:chaotic_energy_core>, "chaotic_dominator");

// === descendant_of_the_sun ===
ItemStages.restrict(<tag:items:forge:ingots/infernium>, "descendant_of_the_sun");
ItemStages.restrict(<tag:items:forge:nuggets/infernium>, "descendant_of_the_sun");
ItemStages.restrict(<tag:items:forge:storage_blocks/infernium>, "descendant_of_the_sun");
// EMPTY_TAG (empty tag: forge:dusts/infernium): ItemStages.restrict(<tag:items:forge:dusts/infernium>, "descendant_of_the_sun");
ItemStages.restrict(<item:soa_additions:infernium_ingot>, "descendant_of_the_sun");
ItemStages.restrict(<item:soa_additions:infernium_block>, "descendant_of_the_sun");
ItemStages.restrict(<item:soa_additions:infernium_nugget>, "descendant_of_the_sun");
ItemStages.restrict(<item:soa_additions:infernium_ore_block>, "descendant_of_the_sun");

// === ender_charm ===
ItemStages.restrict(<item:minecraft:end_rod>, "ender_charm");
ItemStages.restrict(<item:minecraft:end_stone_bricks>, "ender_charm");
ItemStages.restrict(<item:minecraft:end_portal_frame>, "ender_charm");
ItemStages.restrict(<item:prefab:item_ender_gateway>, "ender_charm");
// EMPTY_TAG (empty tag: forge:end_stones): ItemStages.restrict(<tag:items:forge:end_stones>, "ender_charm");
// EMPTY_TAG (empty tag: forge:chorus_fruit): ItemStages.restrict(<tag:items:forge:chorus_fruit>, "ender_charm");
ItemStages.restrict(<item:rehooked:ender_hook>, "ender_charm");

// === expert ===
ItemStages.restrict(<item:soa_additions:fake_philosopher_stone>, "expert");
ItemStages.restrict(<item:soa_additions:undead_medkit>, "expert");
ItemStages.restrict(<item:soa_additions:strange_lolipop>, "expert");
ItemStages.restrict(<item:soa_additions:adrenaline>, "expert");
ItemStages.restrict(<item:soa_additions:shield_gum>, "expert");
ItemStages.restrict(<item:soa_additions:goodie_bag>, "expert");

// === fearless_man ===
// OMIT_MOD (mod missing: abyssalcraft): ItemStages.restrict(<item:abyssalcraft:dreadkey>, "fearless_man");
// OMIT_MOD (mod missing: abyssalcraft): ItemStages.restrict(<item:abyssalcraft:gatewaykeydl>, "fearless_man");
// OMIT_MOD (mod missing: abyssalcraft): ItemStages.restrict(<item:abyssalcraft:dreadshard>, "fearless_man");
// SoA: Valoria substitutes for the AC fearless_man-tier items above.
//   abyssalcraft:dreadkey      -> valoria:void_core            (endgame "key" item)
//   abyssalcraft:gatewaykeydl  -> valoria:rune_of_curses       (deeper-dimension key)
//   abyssalcraft:dreadshard    -> valoria:nihility_shard       (corruption shard)
ItemStages.restrict(<item:valoria:void_core>, "fearless_man");
ItemStages.restrict(<item:valoria:rune_of_curses>, "fearless_man");
ItemStages.restrict(<item:valoria:nihility_shard>, "fearless_man");
ItemStages.restrict(<tag:items:forge:ingots/dreadium>, "fearless_man");
// SoA: the Warden is the gate to abyssal_conquerer (see "A Glimpse of the Abyss").
//   The deep dark is walkable long before the Aether, so an early Warden kill is
//   reachable; locking its heart behind fearless_man keeps that from paying out.
//   Interim measure — deep dark areas are planned to be made inaccessible outright.
ItemStages.restrict(<item:deeperdarker:heart_of_the_deep>, "fearless_man");

// === fusion_matrix ===
ItemStages.restrict(<item:soa_additions:beast_hand>, "fusion_matrix");
// OMIT_MOD (mod missing: zensummoning): ItemStages.restrict(<item:zensummoning:altar>, "fusion_matrix");
ItemStages.restrict(<tag:items:forge:ores/draconium>, "fusion_matrix");
ItemStages.restrict(<tag:items:forge:ingots/draconium>, "fusion_matrix");
ItemStages.restrict(<tag:items:forge:dusts/draconium>, "fusion_matrix");
ItemStages.restrict(<tag:items:forge:storage_blocks/draconium>, "fusion_matrix");
ItemStages.restrict(<tag:items:forge:ingots/electronium>, "fusion_matrix");
ItemStages.restrict(<tag:items:forge:storage_blocks/electronium>, "fusion_matrix");
ItemStages.restrict(<item:soa_additions:fusion_matrix_ingot>, "fusion_matrix");
ItemStages.restrict(<item:soa_additions:fusion_matrix_block>, "fusion_matrix");

// === getting_started ===
ItemStages.restrict(<tag:items:forge:workbenches>, "getting_started");
// #forge:workbenches holds only minecraft:crafting_table in 1.20; GC's
// <ore:workbench> also covered Cyclic's workbench.
ItemStages.restrict(<item:cyclic:workbench>, "getting_started");  // Workbench
ItemStages.restrict(<tag:items:minecraft:planks>, "getting_started");
// GC used <ore:plankWood>; these two are outside #minecraft:planks in 1.20:
ItemStages.restrict(<item:defiledlands:tenebra_planks>, "getting_started");  // Tenebra Planks
ItemStages.restrict(<item:treasure2:wither_planks>, "getting_started");  // Witherwood Planks
ItemStages.restrict(<tag:items:forge:chests>, "getting_started");
ItemStages.restrict(<item:minecraft:wooden_pickaxe>, "getting_started");
ItemStages.restrict(<item:minecraft:stone_pickaxe>, "getting_started");
ItemStages.restrict(<item:minecraft:diamond_pickaxe>, "getting_started");
ItemStages.restrict(<item:minecraft:golden_pickaxe>, "getting_started");
ItemStages.restrict(<item:minecraft:iron_pickaxe>, "getting_started");
ItemStages.restrict(<item:minecraft:wooden_axe>, "getting_started");
ItemStages.restrict(<item:minecraft:stone_axe>, "getting_started");
ItemStages.restrict(<item:minecraft:diamond_axe>, "getting_started");
ItemStages.restrict(<item:minecraft:golden_axe>, "getting_started");
ItemStages.restrict(<item:minecraft:iron_axe>, "getting_started");
ItemStages.restrict(<tag:items:forge:cobblestone>, "getting_started");
// Smithery workstations (replaced Tinkers' Construct tool stations)
ItemStages.restrict(<item:smithery:casting_table>, "getting_started");
ItemStages.restrict(<item:smithery:part_press>, "getting_started");
// OMIT_MOD (mod missing: conarm): ItemStages.restrict(<item:conarm:armorstation>, "getting_started");
ItemStages.restrict(<item:smithery:forge_controller>, "getting_started");
ItemStages.restrict(<item:smithery:forge_drain>, "getting_started");
ItemStages.restrict(<item:smithery:forge_item_port>, "getting_started");
ItemStages.restrict(<item:smithery:forge_fuel_port>, "getting_started");
ItemStages.restrict(<item:smithery:furnace_bricks>, "getting_started");
ItemStages.restrict(<item:smithery:fluid_pipe>, "getting_started");
ItemStages.restrict(<tag:items:forge:ingots/iron>, "getting_started");
ItemStages.restrict(<tag:items:forge:ingots/gold>, "getting_started");
ItemStages.restrict(<tag:items:forge:nuggets/iron>, "getting_started");
ItemStages.restrict(<tag:items:forge:nuggets/gold>, "getting_started");
ItemStages.restrict(<tag:items:forge:dusts/iron>, "getting_started");
ItemStages.restrict(<tag:items:forge:dusts/gold>, "getting_started");
ItemStages.restrict(<tag:items:forge:storage_blocks/iron>, "getting_started");
ItemStages.restrict(<tag:items:forge:storage_blocks/gold>, "getting_started");

// === graduated ===
// OMIT_MOD (mod missing: extrautils2): ItemStages.restrict(<item:extrautils2:creative_energy>, "graduated");
// OMIT_MOD (mod missing: extrautils2): ItemStages.restrict(<item:extrautils2:creative_passive_generator>, "graduated");
// OMIT_MOD (mod missing: extrautils2): ItemStages.restrict(<item:extrautils2:creative_destruction_wand>, "graduated");
// OMIT_MOD (mod missing: extrautils2): ItemStages.restrict(<item:extrautils2:creative_builders_wand>, "graduated");
// OMIT_MOD (mod missing: extrautils2): ItemStages.restrict(<item:extrautils2:creative_harvest>, "graduated");
ItemStages.restrict(<item:draconicevolution:creative_capacitor>, "graduated");
// BAD_ID (item not registered: ae2:creative_storage_cell): ItemStages.restrict(<item:ae2:creative_storage_cell>, "graduated");
// NO_EQUIVALENT: GC gated thermalcultivation:watering_can:32000 (the CREATIVE
// variant, restaged to wielder_of_infinity by restage.zs:59), never the plain
// can. Thermal 1.20 has no creative watering can.
// BAD_ID (item not registered: thermal:injector_creative): ItemStages.restrict(<item:thermal:injector_creative>, "graduated");
ItemStages.restrict(<item:botania:creative_pool>, "graduated");
ItemStages.restrict(<item:mysticalagradditions:creative_essence>, "graduated");
ItemStages.restrict(<item:soa_additions:creative_controller>, "graduated");
ItemStages.restrict(<item:dankstorage:dank_6>, "graduated");
ItemStages.restrict(<item:projecte:watch_of_flowing_time>, "graduated");
ItemStages.restrict(<item:projecte:tome>, "graduated");
// BAD_ID (item not registered: thermal:upgrade_creative): ItemStages.restrict(<item:thermal:upgrade_creative>, "graduated");
ItemStages.restrict(<item:chancecubes:creative_pendant>, "graduated");
// NO_EQUIVALENT: GC gated ae2wtlib:wut_creative (Creative Wireless Ultimate
// Terminal); ae2wtlib 1.20 ships no creative terminal, and GC never gated the
// ordinary Wireless Universal Terminal.
// META MISMATCH: GC gated <storagedrawers:upgrade_creative:1> = Creative
// Vending Upgrade only (already restricted in the graduated parity block);
// meta 0, the Creative Storage Upgrade, was never staged.
// OMIT_MOD (mod missing: extrautils2): ItemStages.restrict(<item:extrautils2:creative_spike>, "graduated");
// OMIT_MOD (mod missing: extrautils2): ItemStages.restrict(<item:extrautils2:creative_chest>, "graduated");
// OMIT_MOD (mod missing: thaumcraft): ItemStages.restrict(<item:thaumcraft:creative_essentia_jar>, "graduated");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:creative_player_interface>, "graduated");
// BAD_ID (item not registered: draconicevolution:creative_exchanger): ItemStages.restrict(<item:draconicevolution:creative_exchanger>, "graduated");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:spectrecoil_genesis>, "graduated");
ItemStages.restrict(<item:soa_additions:ocd_certificate>, "graduated");

// === hardmode ===
ItemStages.restrict(<tag:items:forge:essences/tier6>, "hardmode");
ItemStages.restrict(<item:minecraft:popped_chorus_fruit>, "hardmode");
// BAD_ID (item not registered: tconstruct:materials): ItemStages.restrict(<item:tconstruct:materials>, "hardmode");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_phantom_booster>, "hardmode");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_phantom_placer>, "hardmode");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_phantomface>, "hardmode");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_phantom_energyface>, "hardmode");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_phantom_liquiface>, "hardmode");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_phantom_redstoneface>, "hardmode");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:item_disenchanting_lens>, "hardmode");
ItemStages.restrict(<item:soa_additions:forbidden_bible>, "hardmode");
// -- 2026-07-14 boss-gate audit additions --
// Meet Your Fight summon items (GC analog: defiledlands calling_stone /
// idol_sorrow were staged 'nether'; MYF's own tier ladder spreads them out).
ItemStages.restrict(<item:meetyourfight:haunted_bell>, "nether");       // Bellringer
ItemStages.restrict(<item:meetyourfight:fossil_bait>, "nether");        // Swampjaw
ItemStages.restrict(<item:meetyourfight:devils_ante>, "wither_slayer"); // Dame Fortuna
ItemStages.restrict(<item:meetyourfight:wilted_ideals>, "hardmode");    // Rosalyne
ItemStages.restrict(<item:meetyourfight:dusk_key>, "hardmode");         // Rosalyne (dusk chamber)
// BOMD Night Lich summon item.
// OMIT_MOD (mod missing: bosses_of_mass_destruction): ItemStages.restrict(<item:bosses_of_mass_destruction:soul_star>, "wither_slayer");
// Defiled Lands (mod re-added 2026-07-27) — GC gamestages/items.zs gates all
// of these to "nether" (idol_sorrow, ingotRavaging, calling_stone,
// essenceDestroyer/Mourner, gemRemorseful).
ItemStages.restrict(<item:defiledlands:idol_sorrow>, "nether");
ItemStages.restrict(<item:defiledlands:calling_stone>, "nether");
ItemStages.restrict(<item:defiledlands:ravaging_ingot>, "nether");
ItemStages.restrict(<item:soa_additions:ravaging_ingot>, "nether");   // SOA analog kept during DL absence
ItemStages.restrict(<item:defiledlands:essence_destroyer>, "nether");
ItemStages.restrict(<item:defiledlands:essence_mourner>, "nether");
ItemStages.restrict(<item:defiledlands:remorseful_gem>, "nether");
// Firron ritual token — post-dragon like all altar summons (user decision;
// altar itself is fusion_matrix, this keeps the catalyst craftable a hair
// earlier so players can prep the fight).
ItemStages.restrict(<item:kubejs:ravaging_catalyst>, "hardmode");
// OMIT_MOD (mod missing: extrautils2): ItemStages.restrict(<item:extrautils2:machine>, "hardmode");
// BAD_ID (item not registered: mythicbotany:bottledflame): ItemStages.restrict(<item:mythicbotany:bottledflame>, "hardmode");
ItemStages.restrict(<item:soa_additions:true_blood_sigil>, "hardmode");
ItemStages.restrict(<item:soa_additions:ordinary_medal>, "hardmode");
// OMIT_MOD (mod missing: abyssalcraft): ItemStages.restrict(<item:abyssalcraft:gatewaykeyjzh>, "hardmode");
// SoA: Valoria substitute for AC's hardmode-tier deepest gateway key.
ItemStages.restrict(<item:valoria:wicked_shield>, "hardmode");
ItemStages.restrict(<item:minecraft:dragon_egg>, "hardmode");
ItemStages.restrict(<item:soa_additions:medkit_super>, "hardmode");
ItemStages.restrict(<item:soa_additions:wither_soul>, "hardmode");
ItemStages.restrict(<item:soa_additions:dragon_soul>, "hardmode");
ItemStages.restrict(<item:twilightforest:fortification_scepter>, "hardmode");
// BAD_ID (item not registered: soa_additions:material): ItemStages.restrict(<item:soa_additions:material>, "hardmode");
ItemStages.restrict(<tag:items:forge:storage_blocks/fusion_matrix>, "hardmode");
ItemStages.restrict(<item:soa_additions:creative_shard>, "hardmode");
ItemStages.restrict(<tag:items:forge:ingots/cryonium>, "hardmode");
ItemStages.restrict(<tag:items:forge:storage_blocks/cryonium>, "hardmode");
ItemStages.restrict(<tag:items:forge:ores/cryonium>, "hardmode");
ItemStages.restrict(<tag:items:forge:dusts/cryonium>, "hardmode");
ItemStages.restrict(<tag:items:forge:nuggets/cryonium>, "hardmode");
// BAD_ID (item not registered: soa_additions:osgloglasingot): ItemStages.restrict(<item:soa_additions:osgloglasingot>, "hardmode");
ItemStages.restrict(<item:minecraft:elytra>, "hardmode");
// OMIT_MOD (mod missing: colytra): ItemStages.restrict(<item:colytra:elytra_bauble>, "hardmode");
// BAD_ID (item not registered: soa_additions:osmiridiumingot): ItemStages.restrict(<item:soa_additions:osmiridiumingot>, "hardmode");
// BAD_ID (item not registered: biomesoplenty:gem): ItemStages.restrict(<item:biomesoplenty:gem>, "hardmode");
ItemStages.restrict(<tag:items:forge:ingots/cytosinite>, "hardmode");
ItemStages.restrict(<tag:items:forge:storage_blocks/cytosinite>, "hardmode");
ItemStages.restrict(<tag:items:forge:ores/cytosinite>, "hardmode");
// EMPTY_TAG (empty tag: forge:nuggets/cytosinite): ItemStages.restrict(<tag:items:forge:nuggets/cytosinite>, "hardmode");
ItemStages.restrict(<tag:items:forge:dusts/cytosinite>, "hardmode");
ItemStages.restrict(<tag:items:forge:ingots/shadowium>, "hardmode");
ItemStages.restrict(<tag:items:forge:storage_blocks/shadowium>, "hardmode");
ItemStages.restrict(<tag:items:forge:nuggets/shadowium>, "hardmode");
ItemStages.restrict(<tag:items:forge:dusts/shadowium>, "hardmode");
// OMIT_MOD (mod missing: extrautils2): ItemStages.restrict(<item:extrautils2:teleporter>, "hardmode");
// OMIT_MOD (mod missing: openblocks): ItemStages.restrict(<item:openblocks:hang_glider>, "hardmode");
// NBT-ONLY IN GC: items.zs 428-429 gates only enchanted books with
// StoredEnchantments lvl 5 / lvl 10; the plain item is gated at `nether` only.
// A flat restrict here required BOTH stages for every enchanted book.
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:item_tele_staff>, "hardmode");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_misc>, "hardmode");
ItemStages.restrict(<tag:items:forge:ores/ruby>, "hardmode");
// EMPTY_TAG (empty tag: forge:ores/peridot): ItemStages.restrict(<tag:items:forge:ores/peridot>, "hardmode");
ItemStages.restrict(<tag:items:forge:ores/topaz>, "hardmode");
// EMPTY_TAG (empty tag: forge:ores/tanzanite): ItemStages.restrict(<tag:items:forge:ores/tanzanite>, "hardmode");
// EMPTY_TAG (empty tag: forge:ores/malachite): ItemStages.restrict(<tag:items:forge:ores/malachite>, "hardmode");
ItemStages.restrict(<tag:items:forge:ores/sapphire>, "hardmode");
// EMPTY_TAG (empty tag: forge:ores/amber): ItemStages.restrict(<tag:items:forge:ores/amber>, "hardmode");
ItemStages.restrict(<item:soa_additions:terrestrial_artifact>, "hardmode");
ItemStages.restrict(<tag:items:forge:storage_blocks/ethaxium>, "hardmode");
ItemStages.restrict(<tag:items:forge:ingots/ethaxium>, "hardmode");
// EMPTY_TAG (empty tag: forge:nuggets/ethaxium): ItemStages.restrict(<tag:items:forge:nuggets/ethaxium>, "hardmode");
// EMPTY_TAG (empty tag: forge:ingots/ethaxium): ItemStages.restrict(<tag:items:forge:ingots/ethaxium>, "hardmode");
// EMPTY_TAG (empty tag: forge:gems/ender_biotite): ItemStages.restrict(<tag:items:forge:gems/ender_biotite>, "hardmode");
// OMIT_MOD (mod missing: tofucraft): ItemStages.restrict(<item:tofucraft:swordkinu>, "hardmode");
// OMIT_MOD (mod missing: tofucraft): ItemStages.restrict(<item:tofucraft:swordmomen>, "hardmode");
// OMIT_MOD (mod missing: tofucraft): ItemStages.restrict(<item:tofucraft:swordsolid>, "hardmode");
// OMIT_MOD (mod missing: tofucraft): ItemStages.restrict(<item:tofucraft:swordmetal>, "hardmode");
// OMIT_MOD (mod missing: tofucraft): ItemStages.restrict(<item:tofucraft:sworddiamond>, "hardmode");
// OMIT_MOD (mod missing: netherex): ItemStages.restrict(<item:netherex:amethyst_ore>, "hardmode");
// OMIT_MOD (mod missing: netherex): ItemStages.restrict(<item:netherex:amethyst_crystal>, "hardmode");
// OMIT_MOD (mod missing: netherex): ItemStages.restrict(<item:netherex:amethyst_block>, "hardmode");
// OMIT_MOD (mod missing: modularmachinery): ItemStages.restrict(<item:modularmachinery:blockcasing>, "hardmode");
ItemStages.restrict(<tag:items:forge:ingots/aeonsteel>, "hardmode");
ItemStages.restrict(<tag:items:forge:storage_blocks/aeonsteel>, "hardmode");
// OMIT_MOD (mod missing: openmodularturrets): ItemStages.restrict(<item:openmodularturrets:turret_base>, "hardmode");

// === master_engineer ===
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_directional_breaker>, "master_engineer");
// OMIT_MOD (mod missing: extrautils2): ItemStages.restrict(<item:extrautils2:quarry>, "master_engineer");
// OMIT_MOD (mod missing: extrautils2): ItemStages.restrict(<item:extrautils2:quarryproxy>, "master_engineer");
// EMPTY_TAG (empty tag: forge:alloys/ultimate): ItemStages.restrict(<tag:items:forge:alloys/ultimate>, "master_engineer");
// EMPTY_TAG (empty tag: forge:circuits/ultimate): ItemStages.restrict(<tag:items:forge:circuits/ultimate>, "master_engineer");
ItemStages.restrict(<item:solarflux:sp_8>, "master_engineer");
// BAD_ID (item not registered: enderio:block_killer_joe): ItemStages.restrict(<item:enderio:block_killer_joe>, "master_engineer");
ItemStages.restrict(<item:cyclic:user>, "master_engineer");
// OMIT_MOD (mod missing: thaumcraft): ItemStages.restrict(<item:thaumcraft:animation_tablet>, "master_engineer");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_miner>, "master_engineer");
ItemStages.restrict(<item:solarflux:sp_de.wyvern>, "master_engineer");
ItemStages.restrict(<item:solarflux:sp_de.draconic>, "master_engineer");
ItemStages.restrict(<item:solarflux:sp_de.chaotic>, "master_engineer");
ItemStages.restrict(<item:solarflux:sp_avaritia.neutronium>, "master_engineer");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_breaker>, "master_engineer");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_phantom_breaker>, "master_engineer");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_fluid_placer>, "master_engineer");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_dropper>, "master_engineer");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_fluid_collector>, "master_engineer");
// OMIT_MOD (mod missing: rftools): ItemStages.restrict(<item:rftools:shield_block3>, "master_engineer");
// OMIT_MOD (mod missing: rftools): ItemStages.restrict(<item:rftools:shield_block4>, "master_engineer");

// === master_wizard ===
// OMIT_MOD (mod missing: thaumcraft): ItemStages.restrict(<item:thaumcraft:primordial_pearl>, "master_wizard");
ItemStages.restrict(<item:soa_additions:purifying_pill>, "master_wizard");
ItemStages.restrict(<item:soa_additions:energy_matter_core>, "master_wizard");
// OMIT_MOD (mod missing: thaumcraft): ItemStages.restrict(<item:thaumcraft:plate>, "master_wizard");
// OMIT_MOD (mod missing: thaumcraft): ItemStages.restrict(<item:thaumcraft:ingot>, "master_wizard");
// OMIT_MOD (mod missing: thaumcraft): ItemStages.restrict(<item:thaumcraft:void_seed>, "master_wizard");
// SoA: tag was 'primordial' in GC; SoA registers the metal as 'primal_metal'.
ItemStages.restrict(<tag:items:forge:ingots/primal_metal>, "master_wizard");
ItemStages.restrict(<tag:items:forge:storage_blocks/primal_metal>, "master_wizard");
ItemStages.restrict(<tag:items:forge:nuggets/primal_metal>, "master_wizard");
ItemStages.restrict(<tag:items:forge:dusts/primal_metal>, "master_wizard");
// OMIT_MOD (mod missing: thaumcraft): ItemStages.restrict(<item:thaumcraft:causality_collapser>, "master_wizard");
ItemStages.restrict(<item:soa_additions:mithrillium_ingot>, "master_wizard");
ItemStages.restrict(<item:soa_additions:adaminite_ingot>, "master_wizard");
ItemStages.restrict(<item:soa_additions:mithminite_ingot>, "master_wizard");
// BAD_ID (item not registered: soa_additions:mithrillium_plate): ItemStages.restrict(<item:soa_additions:mithrillium_plate>, "master_wizard");
// BAD_ID (item not registered: soa_additions:adaminite_plate): ItemStages.restrict(<item:soa_additions:adaminite_plate>, "master_wizard");
// BAD_ID (item not registered: soa_additions:mithminite_plate): ItemStages.restrict(<item:soa_additions:mithminite_plate>, "master_wizard");
// OMIT_MOD (mod missing: thaumcraft): ItemStages.restrict(<item:thaumcraft:void_beacon>, "master_wizard");
// OMIT_MOD (mod missing: thaumcraft): ItemStages.restrict(<item:thaumcraft:coalescence_matrix_precursor>, "master_wizard");
// OMIT_MOD (mod missing: thaumcraft): ItemStages.restrict(<item:thaumcraft:meaty_orb>, "master_wizard");
// BAD_ID (item not registered: soa_additions:mithrillium_nugget): ItemStages.restrict(<item:soa_additions:mithrillium_nugget>, "master_wizard");
// BAD_ID (item not registered: soa_additions:adaminite_nugget): ItemStages.restrict(<item:soa_additions:adaminite_nugget>, "master_wizard");
// BAD_ID (item not registered: soa_additions:mithminite_nugget): ItemStages.restrict(<item:soa_additions:mithminite_nugget>, "master_wizard");
// BAD_ID (item not registered: soa_additions:mithminite_smelter): ItemStages.restrict(<item:soa_additions:mithminite_smelter>, "master_wizard");
// BAD_ID (item not registered: soa_additions:adaminite_smelter): ItemStages.restrict(<item:soa_additions:adaminite_smelter>, "master_wizard");
// BAD_ID (item not registered: soa_additions:mithrillium_smelter): ItemStages.restrict(<item:soa_additions:mithrillium_smelter>, "master_wizard");
// BAD_ID (item not registered: soa_additions:void_anvil): ItemStages.restrict(<item:soa_additions:void_anvil>, "master_wizard");
// BAD_ID (item not registered: soa_additions:shadow_enchanter): ItemStages.restrict(<item:soa_additions:shadow_enchanter>, "master_wizard");
// OMIT_MOD (mod missing: thaumcraft): ItemStages.restrict(<item:thaumcraft:flux_capacitor>, "master_wizard");
// OMIT_MOD (mod missing: thaumcraft): ItemStages.restrict(<item:thaumcraft:coalescence_matrix>, "master_wizard");

// === nether ===
ItemStages.restrict(<item:mythicbotany:mana_infuser>, "nether");
// BAD_ID (item not registered: mythicbotany:terra_catalyst): ItemStages.restrict(<item:mythicbotany:terra_catalyst>, "nether");
// BAD_ID (item not registered: mythicbotany:gaia_shard): ItemStages.restrict(<item:mythicbotany:gaia_shard>, "nether");
// OMIT_MOD (mod missing: threng): ItemStages.restrict(<item:threng:material>, "nether");
// BAD_ID (item not registered: ae2:material): ItemStages.restrict(<item:ae2:material>, "nether");
ItemStages.restrict(<tag:items:forge:gems/fluix>, "nether");
ItemStages.restrict(<tag:items:forge:dusts/fluix>, "nether");
// BAD_ID (item not registered: ae2:part): ItemStages.restrict(<item:ae2:part>, "nether");
// EMPTY_TAG (empty tag: forge:gems/certus_quartz): ItemStages.restrict(<tag:items:forge:gems/certus_quartz>, "nether");
// EMPTY_TAG (empty tag: forge:gems/fluix): ItemStages.restrict(<tag:items:forge:gems/fluix>, "nether");
// OMIT_MOD (mod missing: abyssalcraft): ItemStages.restrict(<item:abyssalcraft:eoa>, "nether");
// OMIT_MOD (mod missing: abyssalcraft): ItemStages.restrict(<item:abyssalcraft:oc>, "nether");
// OMIT_MOD (mod missing: abyssalcraft): ItemStages.restrict(<item:abyssalcraft:powerstonetracker>, "nether");
// OMIT_MOD (mod missing: abyssalcraft): ItemStages.restrict(<item:abyssalcraft:gatewaykey>, "nether");
// SoA: Valoria substitutes for AC's nether-tier items above.
//   abyssalcraft:eoa                -> valoria:eye_chunk                  (Eye of Achievement -> Eye Chunk)
//   abyssalcraft:oc                 -> valoria:elemental_crystal          (Omothol Crystal -> elemental crystal)
//   abyssalcraft:powerstonetracker  -> valoria:crypt_locator              (tracker item)
//   abyssalcraft:gatewaykey         -> valoria:valoria_portal_frame_shard (basic dim portal key)
ItemStages.restrict(<item:valoria:eye_chunk>, "nether");
ItemStages.restrict(<item:valoria:elemental_crystal>, "nether");
ItemStages.restrict(<item:valoria:crypt_locator>, "nether");
ItemStages.restrict(<item:valoria:valoria_portal_frame_shard>, "nether");
// OMIT_MOD (mod missing: defiledlands): ItemStages.restrict(<item:defiledlands:idol_sorrow>, "nether");
ItemStages.restrict(<item:quark:blaze_lantern>, "nether");
// BAD_ID (item not registered: thermal:dust_lumium): ItemStages.restrict(<item:thermal:dust_lumium>, "nether");
ItemStages.restrict(<item:treasure2:skull_sword>, "nether");
ItemStages.restrict(<item:soa_additions:shining_star>, "nether");
// EMPTY_TAG (empty tag: forge:eternal_life_essence): ItemStages.restrict(<tag:items:forge:eternal_life_essence>, "nether");
ItemStages.restrict(<tag:items:forge:ingots/gaia>, "nether");
ItemStages.restrict(<tag:items:forge:ingots/netherite>, "nether");
ItemStages.restrict(<tag:items:forge:storage_blocks/netherite>, "nether");
// EMPTY_TAG (empty tag: forge:gems/ancient_debris): ItemStages.restrict(<tag:items:forge:gems/ancient_debris>, "nether");
// EMPTY_TAG (empty tag: forge:ores/ancient_debris): ItemStages.restrict(<tag:items:forge:ores/ancient_debris>, "nether");
ItemStages.restrict(<item:minecraft:beacon>, "nether");
ItemStages.restrict(<tag:items:forge:ores/ardite>, "nether");
ItemStages.restrict(<tag:items:forge:ingots/ardite>, "nether");
ItemStages.restrict(<tag:items:forge:dusts/ardite>, "nether");
ItemStages.restrict(<tag:items:forge:ores/cobalt>, "nether");
ItemStages.restrict(<tag:items:forge:ingots/cobalt>, "nether");
ItemStages.restrict(<tag:items:forge:dusts/cobalt>, "nether");
// Explicit valoria entries: the cobalt tags above are filled by
// kubejs/data/forge/tags (post-TC), invisible to the offline tags.json
// export that regen_block_stages.py reads — keep these so block stages
// still gate the ore blocks.
ItemStages.restrict(<item:valoria:cobalt_ore>, "nether");
ItemStages.restrict(<item:valoria:deepslate_cobalt_ore>, "nether");
ItemStages.restrict(<item:valoria:raw_cobalt_ore>, "nether");
ItemStages.restrict(<item:minecraft:blaze_rod>, "nether");
ItemStages.restrict(<item:minecraft:blaze_powder>, "nether");
ItemStages.restrict(<tag:items:forge:dusts/glowstone>, "nether");
// OMIT_MOD (mod missing: tcsponsors): ItemStages.restrict(<item:tcsponsors:sponsors_chest>, "nether");
ItemStages.restrict(<tag:items:forge:storage_blocks/glowstone>, "nether");
ItemStages.restrict(<item:soa_additions:medkit_big>, "nether");
ItemStages.restrict(<item:soa_additions:blood_sigil>, "nether");
ItemStages.restrict(<tag:items:forge:dusts/quartz>, "nether");
ItemStages.restrict(<tag:items:forge:gems/quartz>, "nether");
ItemStages.restrict(<tag:items:forge:ores/quartz>, "nether");
ItemStages.restrict(<item:soa_additions:bloody_sacrifice>, "nether");
ItemStages.restrict(<item:minecraft:ender_eye>, "nether");
ItemStages.restrict(<item:minecraft:enchanted_book>, "nether");
ItemStages.restrict(<item:minecraft:anvil>, "nether");
// The Ender (dark steel sword): GC's final gate is `disabled` - see that section.
ItemStages.restrict(<item:minecraft:enchanting_table>, "nether");
ItemStages.restrict(<item:inventorypets:pet_nether_portal>, "nether");
ItemStages.restrict(<tag:items:forge:ingots/demonic_metal>, "nether");
ItemStages.restrict(<item:soa_additions:awakened_eye>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:great_sword_diamond>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:great_sword_iron>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:great_sword_bull>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:great_sword_monking>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:spear_diamond>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:spear_iron>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:staff_healing>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:sword_moonlight>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:dagger_iron>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:dagger_diamond>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:dagger_ninja>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:dagger_monking>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:sword_turtle>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:sword_spider>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:staff_poison>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:staff_thunder>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:staff_wind>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:sword_sunshine>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:battle_axe_bull>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:sword_walker>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_walker_king>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:staff_spider>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:staff_gun>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:revolver>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:musket>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:musket_dagger_iron>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:musket_dagger_monking>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:musket_dagger_diamond>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:captain_revolver>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:helmet_slime>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:chestplate_slime>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:leggings_slime>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:boots_slime>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:helmet_bull>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:chestplate_bull>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:leggings_bull>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:boots_bull>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:helmet_turtle>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:chestplate_turtle>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:leggings_turtle>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:boots_turtle>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:helmet_spider>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:chestplate_spider>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:leggings_spider>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:boots_spider>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:helmet_inquisition>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:chestplate_inquisition>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:leggings_inquisition>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:boots_inquisition>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:helmet_heavy_diamond>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:chestplate_heavy_diamond>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:leggings_heavy_diamond>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:boots_heavy_diamond>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:helmet_heavy_iron>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:chestplate_heavy_iron>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:leggings_heavy_iron>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:boots_heavy_iron>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:helmet_diamond_dyable>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:chestplate_diamond_dyable>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:leggings_diamond_dyable>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:boots_diamond_dyable>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:helmet_iron_dyable>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:chestplate_iron_dyable>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:leggings_iron_dyable>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:boots_iron_dyable>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:helmet_dragon>, "nether");
ItemStages.restrict(<tag:items:forge:storage_blocks/demonic_metal>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_bull>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_carl>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_dragonslayer>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_fire>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_goblin>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_monking>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_moon>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_mummy>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_pigman>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_pirate>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_pirate2>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_rainbow>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_reflective>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_rusted>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_skeleton_friends>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_specter>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_spider>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_sun>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_tomb>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_triton>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_turtle>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_walker>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_warped>, "nether");
// OMIT_MOD (mod missing: cqrepoured): ItemStages.restrict(<item:cqrepoured:shield_zombie>, "nether");
ItemStages.restrict(<item:botania:enchanter>, "nether");
// OMIT_MOD (mod missing: thaumcraft): ItemStages.restrict(<item:thaumcraft:osmotic_enchanter>, "nether");
ItemStages.restrict(<tag:items:forge:ingots/aeroite>, "nether");
ItemStages.restrict(<tag:items:forge:storage_blocks/aeroite>, "nether");
ItemStages.restrict(<tag:items:forge:nuggets/aeroite>, "nether");
ItemStages.restrict(<tag:items:forge:dusts/aeroite>, "nether");
ItemStages.restrict(<tag:items:forge:ingots/asgardium>, "nether");
ItemStages.restrict(<tag:items:forge:storage_blocks/asgardium>, "nether");
ItemStages.restrict(<tag:items:forge:nuggets/asgardium>, "nether");
ItemStages.restrict(<tag:items:forge:dusts/asgardium>, "nether");
ItemStages.restrict(<tag:items:forge:ingots/meteor>, "nether");
ItemStages.restrict(<tag:items:forge:storage_blocks/meteor>, "nether");
ItemStages.restrict(<tag:items:forge:dusts/meteor>, "nether");
// OMIT_MOD (mod missing: openblocks): ItemStages.restrict(<item:openblocks:auto_anvil>, "nether");
ItemStages.restrict(<item:rehooked:diamond_hook>, "nether");
// OMIT_MOD (mod missing: tcsponsors): ItemStages.restrict(<item:tcsponsors:sponsor_chest_fragment>, "nether");
ItemStages.restrict(<tag:items:forge:ingots/lumium>, "nether");
ItemStages.restrict(<tag:items:forge:storage_blocks/lumium>, "nether");
ItemStages.restrict(<tag:items:forge:nuggets/lumium>, "nether");
ItemStages.restrict(<tag:items:forge:dusts/lumium>, "nether");
ItemStages.restrict(<tag:items:forge:gears/lumium>, "nether");
ItemStages.restrict(<tag:items:forge:ingots/valkyrie>, "nether");
// EMPTY_TAG (empty tag: forge:nuggets/valkyrie): ItemStages.restrict(<tag:items:forge:nuggets/valkyrie>, "nether");
ItemStages.restrict(<tag:items:forge:storage_blocks/valkyrie>, "nether");
// EMPTY_TAG (empty tag: forge:essences/destroyer): ItemStages.restrict(<tag:items:forge:essences/destroyer>, "nether");
ItemStages.restrict(<tag:items:forge:ingots/ravaging>, "nether");
// OMIT_MOD (mod missing: defiledlands): ItemStages.restrict(<item:defiledlands:calling_stone>, "nether");
// EMPTY_TAG (empty tag: forge:essences/mourner): ItemStages.restrict(<tag:items:forge:essences/mourner>, "nether");
ItemStages.restrict(<tag:items:forge:gems/remorseful>, "nether");
// EMPTY_TAG (empty tag: forge:slime_crystals/magma): ItemStages.restrict(<tag:items:forge:slime_crystals/magma>, "nether");
ItemStages.restrict(<tag:items:forge:storage_blocks/quartz>, "nether");
ItemStages.restrict(<item:minecraft:brewing_stand>, "nether");
ItemStages.restrict(<tag:items:forge:ingots/aqualite>, "nether");
ItemStages.restrict(<tag:items:forge:nuggets/aqualite>, "nether");
ItemStages.restrict(<tag:items:forge:dusts/aqualite>, "nether");
ItemStages.restrict(<tag:items:forge:ores/aqualite>, "nether");
ItemStages.restrict(<tag:items:forge:storage_blocks/aqualite>, "nether");
ItemStages.restrict(<item:inventorypets:pet_squid>, "nether");
ItemStages.restrict(<item:minecraft:ghast_tear>, "nether");
// EMPTY_TAG (empty tag: forge:bone_withered): ItemStages.restrict(<tag:items:forge:bone_withered>, "nether");
// OMIT_MOD (mod missing: netherex): ItemStages.restrict(<item:netherex:wither_bone>, "nether");
// OMIT_MOD (mod missing: darkutils): ItemStages.restrict(<item:darkutils:material>, "nether");
// EMPTY_TAG (empty tag: forge:dropofevil): ItemStages.restrict(<tag:items:forge:dropofevil>, "nether");
// BAD_ID (item not registered: quark:black_ash): ItemStages.restrict(<item:quark:black_ash>, "nether");
ItemStages.restrict(<item:minecraft:magma_cream>, "nether");
// OMIT_MOD (mod missing: modularmachinery): ItemStages.restrict(<item:modularmachinery:blockcasing>, "nether");
ItemStages.restrict(<tag:items:forge:ingots/durasteel>, "nether");
ItemStages.restrict(<tag:items:forge:storage_blocks/durasteel>, "nether");
// OMIT_MOD (mod missing: openmodularturrets): ItemStages.restrict(<item:openmodularturrets:turret_base>, "nether");
ItemStages.restrict(<item:minecraft:quartz>, "nether");
// EMPTY_TAG (empty tag: forge:nitor): ItemStages.restrict(<tag:items:forge:nitor>, "nether");

// === novice_engineer ===
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_battery_box>, "novice_engineer");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_item_viewer_hopping>, "novice_engineer");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_bio_reactor>, "novice_engineer");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_farmer>, "novice_engineer");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_empowerer>, "novice_engineer");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_shock_suppressor>, "novice_engineer");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_display_stand>, "novice_engineer");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_player_interface>, "novice_engineer");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_item_viewer>, "novice_engineer");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_crystal_empowered>, "novice_engineer");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_enervator>, "novice_engineer");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_energizer>, "novice_engineer");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_lava_factory_controller>, "novice_engineer");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_canola_press>, "novice_engineer");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_coffee_machine>, "novice_engineer");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:block_atomic_reconstructor>, "novice_engineer");
// (The Ender - gated at `disabled` in GC, see that section.)

// === novice_wizard ===
// OMIT_MOD (mod missing: thaumcraft): ItemStages.restrict(<item:thaumcraft:infusion_matrix>, "novice_wizard");
// OMIT_MOD (mod missing: thaumcraft): ItemStages.restrict(<item:thaumcraft:plate>, "novice_wizard");
// OMIT_MOD (mod missing: thaumcraft): ItemStages.restrict(<item:thaumcraft:ingot>, "novice_wizard");
ItemStages.restrict(<tag:items:forge:ingots/bound_metal>, "novice_wizard");
ItemStages.restrict(<tag:items:forge:storage_blocks/bound_metal>, "novice_wizard");
ItemStages.restrict(<tag:items:forge:nuggets/bound_metal>, "novice_wizard");
ItemStages.restrict(<tag:items:forge:dusts/bound_metal>, "novice_wizard");
ItemStages.restrict(<tag:items:forge:ingots/sentient_metal>, "novice_wizard");
ItemStages.restrict(<tag:items:forge:storage_blocks/sentient_metal>, "novice_wizard");
ItemStages.restrict(<tag:items:forge:nuggets/sentient_metal>, "novice_wizard");
ItemStages.restrict(<tag:items:forge:dusts/sentient_metal>, "novice_wizard");
// OMIT_MOD (mod missing: thaumcraft): ItemStages.restrict(<item:thaumcraft:mechanism_complex>, "novice_wizard");

// === skilled_engineer ===
ItemStages.restrict(<tag:items:forge:ingots/iridium>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:nuggets/iridium>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:storage_blocks/iridium>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:ores/iridium>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:dusts/iridium>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:dusts/platinum>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:ingots/platinum>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:nuggets/platinum>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:ores/platinum>, "skilled_engineer");
ItemStages.restrict(<item:solarflux:sp_5>, "skilled_engineer");
ItemStages.restrict(<item:solarflux:sp_6>, "skilled_engineer");
ItemStages.restrict(<item:solarflux:sp_7>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:storage_blocks/platinum>, "skilled_engineer");
// OMIT_MOD (mod missing: rftools): ItemStages.restrict(<item:rftools:builder>, "skilled_engineer");
// OMIT_MOD (mod missing: extrautils2): ItemStages.restrict(<item:extrautils2:passivegenerator>, "skilled_engineer");
// OMIT_MOD (mod missing: extrautils2): ItemStages.restrict(<item:extrautils2:machine>, "skilled_engineer");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:biomeradar>, "skilled_engineer");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:redstoneobserver>, "skilled_engineer");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:irondropper>, "skilled_engineer");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:onlinedetector>, "skilled_engineer");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:dyeingmachine>, "skilled_engineer");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:enderbridge>, "skilled_engineer");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:prismarineenderbridge>, "skilled_engineer");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:enderanchor>, "skilled_engineer");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:imbuingstation>, "skilled_engineer");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:spectreblock>, "skilled_engineer");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:analogemitter>, "skilled_engineer");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:fluiddisplay>, "skilled_engineer");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:advancedredstoneinterface>, "skilled_engineer");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:fertilizeddirt>, "skilled_engineer");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:playerinterface>, "skilled_engineer");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:basicredstoneinterface>, "skilled_engineer");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:rainshield>, "skilled_engineer");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:spectrecoil_number>, "skilled_engineer");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:spectrecoil_normal>, "skilled_engineer");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:spectrecoil_redstone>, "skilled_engineer");
// OMIT_MOD (mod missing: randomthings): ItemStages.restrict(<item:randomthings:spectrecoil_ender>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:ores/yellorium>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:ingots/yellorium>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:dusts/yellorium>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:ingots/enderium>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:storage_blocks/enderium>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:nuggets/enderium>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:dusts/enderium>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:gears/enderium>, "skilled_engineer");
// EMPTY_TAG (empty tag: forge:gems/gelid): ItemStages.restrict(<tag:items:forge:gems/gelid>, "skilled_engineer");
// EMPTY_TAG (empty tag: forge:storage_blocks/gelid): ItemStages.restrict(<tag:items:forge:storage_blocks/gelid>, "skilled_engineer");
// EMPTY_TAG (empty tag: forge:storage_blocks/gelid_enderium): ItemStages.restrict(<tag:items:forge:storage_blocks/gelid_enderium>, "skilled_engineer");
// EMPTY_TAG (empty tag: forge:ingots/gelid_enderium): ItemStages.restrict(<tag:items:forge:ingots/gelid_enderium>, "skilled_engineer");
// EMPTY_TAG (empty tag: forge:nuggets/gelid_enderium): ItemStages.restrict(<tag:items:forge:nuggets/gelid_enderium>, "skilled_engineer");
// BAD_ID (item not registered: bigreactors:orebenitoite): ItemStages.restrict(<item:bigreactors:orebenitoite>, "skilled_engineer");
// BAD_ID (item not registered: bigreactors:oreanglesite): ItemStages.restrict(<item:bigreactors:oreanglesite>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:ingots/cyanite>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:storage_blocks/cyanite>, "skilled_engineer");

// === skilled_wizard ===
// BAD_ID (item not registered: soa_additions:void_thaumometer): ItemStages.restrict(<item:soa_additions:void_thaumometer>, "skilled_wizard");
// BAD_ID (item not registered: soa_additions:crystal_bore): ItemStages.restrict(<item:soa_additions:crystal_bore>, "skilled_wizard");
// OMIT_MOD (mod missing: thaumcraft): ItemStages.restrict(<item:thaumcraft:matrix_speed>, "skilled_wizard");
// OMIT_MOD (mod missing: thaumcraft): ItemStages.restrict(<item:thaumcraft:matrix_cost>, "skilled_wizard");
// OMIT_MOD (mod missing: thaumcraft): ItemStages.restrict(<item:thaumcraft:stabilizer>, "skilled_wizard");
// OMIT_MOD (mod missing: astralsorcery): ItemStages.restrict(<item:astralsorcery:blockstarlightinfuser>, "skilled_wizard");
// OMIT_MOD (mod missing: astralsorcery): ItemStages.restrict(<item:astralsorcery:blockattunementaltar>, "skilled_wizard");
// OMIT_MOD (mod missing: astralsorcery): ItemStages.restrict(<item:astralsorcery:blockaltar>, "skilled_wizard");
// OMIT_MOD (mod missing: astralsorcery): ItemStages.restrict(<item:astralsorcery:blockprism>, "skilled_wizard");
// OMIT_MOD (mod missing: astralsorcery): ItemStages.restrict(<item:astralsorcery:itemshiftingstar>, "skilled_wizard");
// OMIT_MOD (mod missing: astralsorcery): ItemStages.restrict(<item:astralsorcery:itemcraftingcomponent>, "skilled_wizard");
// SoA: malum:cluster_of_brilliance is the SoA stand-in for AS Resonating Gemstone — gate matches GC.
ItemStages.restrict(<item:malum:cluster_of_brilliance>, "skilled_wizard");
ItemStages.restrict(<item:soa_additions:arcane_crystal_ball>, "skilled_wizard");
ItemStages.restrict(<tag:items:forge:storage_blocks/astral_metal>, "skilled_wizard");
ItemStages.restrict(<tag:items:forge:ingots/astral_metal>, "skilled_wizard");
ItemStages.restrict(<tag:items:forge:storage_blocks/crimsonite>, "skilled_wizard");
ItemStages.restrict(<tag:items:forge:ingots/crimsonite>, "skilled_wizard");

// === wielder_of_infinity ===
// OMIT_MOD (mod missing: thaumcraft): ItemStages.restrict(<item:thaumcraft:thaumonomicon>, "wielder_of_infinity");
ItemStages.restrict(<item:soa_additions:pioneer_medal>, "wielder_of_infinity");
ItemStages.restrict(<item:soa_additions:greedy_medal>, "wielder_of_infinity");
ItemStages.restrict(<tag:items:forge:storage_blocks/compressed_infinity>, "wielder_of_infinity");
ItemStages.restrict(<tag:items:forge:storage_blocks/double_compressed_infinity>, "wielder_of_infinity");
// BAD_ID (item not registered: mythicbotany:managenerator): ItemStages.restrict(<item:mythicbotany:managenerator>, "wielder_of_infinity");
// OMIT_MOD (mod missing: ambience): ItemStages.restrict(<item:ambience:horn>, "wielder_of_infinity");
// OMIT_MOD (mod missing: ambience): ItemStages.restrict(<item:ambience:ocarina>, "wielder_of_infinity");
ItemStages.restrict(<item:soa_additions:creative_soul>, "wielder_of_infinity");
ItemStages.restrict(<item:soa_additions:difficulty_changer>, "wielder_of_infinity");
ItemStages.restrict(<item:soa_additions:creative_controller>, "wielder_of_infinity");
// NBT-ONLY IN GC: items.zs 471-477 gates only the creative-tier
// <minecraft:diamond_*>.withTag({ench:[{lvl:10 as short}]}) variants, never the
// plain items (GC leaves plain diamond gear ungated; pickaxe/axe sit in
// getting_started). Restricting the plain items here locked ordinary diamond
// gear -- including quest rewards -- behind the endgame stage.
ItemStages.restrict(<item:soa_additions:infinity_block_block>, "wielder_of_infinity");
ItemStages.restrict(<item:soa_additions:infinity_block_block_block>, "wielder_of_infinity");
ItemStages.restrict(<item:draconicevolution:draconic_staff>, "wielder_of_infinity");
// OMIT_MOD (mod missing: extrautils2): ItemStages.restrict(<item:extrautils2:rainbowgenerator>, "wielder_of_infinity");
ItemStages.restrict(<item:solarflux:sp_avaritia.infinity>, "wielder_of_infinity");
// OMIT_MOD (mod missing: actuallyadditions): ItemStages.restrict(<item:actuallyadditions:item_growth_ring>, "wielder_of_infinity");

// === wither_slayer ===
ItemStages.restrict(<item:soa_additions:gaiasteel_ingot>, "wither_slayer");
ItemStages.restrict(<tag:items:forge:storage_blocks/gaiasteel>, "wither_slayer");
ItemStages.restrict(<item:soa_additions:bravery_certificate>, "wither_slayer");
ItemStages.restrict(<item:enderio:reinforced_obsidian_block>, "wither_slayer");
ItemStages.restrict(<item:mysticalagriculture:witherproof_block>, "wither_slayer");
ItemStages.restrict(<item:mysticalagriculture:witherproof_glass>, "wither_slayer");
ItemStages.restrict(<item:soa_additions:ender_charm>, "wither_slayer");
ItemStages.restrict(<tag:items:forge:ingots/evil_metal>, "wither_slayer");
ItemStages.restrict(<tag:items:forge:storage_blocks/evil_metal>, "wither_slayer");
// OMIT_MOD (mod missing: rftools): ItemStages.restrict(<item:rftools:shield_template_block>, "wither_slayer");
// OMIT_MOD (mod missing: rftools): ItemStages.restrict(<item:rftools:shield_block1>, "wither_slayer");
// OMIT_MOD (mod missing: rftools): ItemStages.restrict(<item:rftools:shield_block2>, "wither_slayer");
ItemStages.restrict(<item:minecraft:end_crystal>, "wither_slayer");
ItemStages.restrict(<tag:items:forge:ingots/stellar_alloy>, "wither_slayer");
// EMPTY_TAG (empty tag: forge:storage_blocks/stellar_alloy): ItemStages.restrict(<tag:items:forge:storage_blocks/stellar_alloy>, "wither_slayer");
// EMPTY_TAG (empty tag: forge:nuggets/stellar_alloy): ItemStages.restrict(<tag:items:forge:nuggets/stellar_alloy>, "wither_slayer");
// OMIT_MOD (mod missing: abyssalcraft): ItemStages.restrict(<item:abyssalcraft:soulreaper>, "wither_slayer");
// SoA: Valoria substitute — reaper_scythe is the literal name match for AC's soulreaper.
ItemStages.restrict(<item:valoria:reaper_scythe>, "wither_slayer");

// === wyvern ===
ItemStages.restrict(<tag:items:forge:ingots/wyvern_metal>, "wyvern");
ItemStages.restrict(<tag:items:forge:storage_blocks/wyvern_metal>, "wyvern");
ItemStages.restrict(<tag:items:forge:nuggets/wyvern_metal>, "wyvern");
ItemStages.restrict(<tag:items:forge:dusts/wyvern_metal>, "wyvern");
ItemStages.restrict(<item:soa_additions:solarium_star>, "wyvern");
ItemStages.restrict(<item:soa_additions:sun_totem>, "wyvern");
ItemStages.restrict(<item:soa_additions:solar_seed>, "wyvern");
ItemStages.restrict(<item:soa_additions:broken_solarium_star>, "wyvern");


// ============================================================
// Parity fixes 2026-07-13 — items GC staged that were missing here.
// Matched by display name against soa_exports/items.json (audit:
// tools/audit/stage_audit.py). One line per 1.20 item id.
// ============================================================

// === awakened (parity) ===
ItemStages.restrict(<item:minecraft:bedrock>, "awakened");  // Bedrock
ItemStages.restrict(<item:draconicevolution:chaos_shard>, "awakened");  // Chaos Shard
ItemStages.restrict(<item:avaritia:neutron_compressor>, "awakened");  // Neutronium Compressor

// === chaotic (parity) ===
ItemStages.restrict(<item:avaritia:infinity_catalyst>, "chaotic");  // Infinity Catalyst
ItemStages.restrict(<item:mekanism:laser_amplifier>, "chaotic");  // Laser Amplifier
ItemStages.restrict(<item:draconicevolution:reactor_stabilizer>, "chaotic");  // Reactor Stabilizer

// === chaotic_dominator (parity) ===
ItemStages.restrict(<item:draconicevolution:chaotic_core>, "chaotic_dominator");  // Chaotic Core
ItemStages.restrict(<item:scalinghealth:cursed_heart>, "chaotic_dominator");  // Cursed Heart

// === disabled (parity) ===
ItemStages.restrict(<item:mekanism:jetpack_armored>, "disabled");  // Armored Jetpack
ItemStages.restrict(<item:cyclic:placer>, "disabled");  // Block Placer
ItemStages.restrict(<item:bloodarsenal:bound_sickle>, "disabled");  // Bound Sickle
ItemStages.restrict(<item:enderio:broken_spawner>, "disabled");  // Broken Spawner
ItemStages.restrict(<item:mekanism:cardboard_box>, "disabled");  // Cardboard Box
ItemStages.restrict(<item:ae2:certus_quartz_axe>, "disabled");  // Certus Quartz Axe
ItemStages.restrict(<item:ae2:certus_quartz_hoe>, "disabled");  // Certus Quartz Hoe
ItemStages.restrict(<item:ae2:certus_quartz_pickaxe>, "disabled");  // Certus Quartz Pickaxe
ItemStages.restrict(<item:ae2:certus_quartz_sword>, "disabled");  // Certus Quartz Sword
ItemStages.restrict(<item:botania:balance_cloak>, "disabled");  // Cloak of Balance
ItemStages.restrict(<item:botania:unholy_cloak>, "disabled");  // Cloak of Sin
ItemStages.restrict(<item:botania:holy_cloak>, "disabled");  // Cloak of Virtue
ItemStages.restrict(<item:cyclic:crystal_axe>, "disabled");  // Crystal Axe
ItemStages.restrict(<item:cyclic:crystal_hoe>, "disabled");  // Crystal Hoe
ItemStages.restrict(<item:cyclic:crystal_sword>, "disabled");  // Crystal Sword
ItemStages.restrict(<item:cyclic:spikes_diamond>, "disabled");  // Diamond Spikes
ItemStages.restrict(<item:draconicevolution:draconic_axe>, "disabled");  // Draconic Axe
ItemStages.restrict(<item:draconicevolution:draconic_bow>, "disabled");  // Draconic Bow
ItemStages.restrict(<item:draconicevolution:draconic_pickaxe>, "disabled");  // Draconic Pickaxe
ItemStages.restrict(<item:draconicevolution:draconic_shovel>, "disabled");  // Draconic Shovel
ItemStages.restrict(<item:draconicevolution:draconic_sword>, "disabled");  // Draconic Sword
// NAME COLLISION: GC's "Ender Bow" is enderio:item_end_steel_bow, not Twilight
// Forest's. TF's Ender Bow is never staged in GC (no `Adding to item stage`
// line for twilightforest:ender_bow); EnderIO 1.20 ships no bow.
ItemStages.restrict(<item:cyclic:energy_pipe>, "disabled");  // Energy Cable
ItemStages.restrict(<item:cyclic:fluid_pipe>, "disabled");  // Fluid Cable
ItemStages.restrict(<item:cyclic:item_pipe>, "disabled");  // Item Cable
ItemStages.restrict(<item:mekanism:jetpack>, "disabled");  // Jetpack
ItemStages.restrict(<item:bloodmagic:livingboots>, "disabled");  // Living Boots
ItemStages.restrict(<item:bloodmagic:livingplate>, "disabled");  // Living Chestplate
ItemStages.restrict(<item:bloodmagic:livinghelmet>, "disabled");  // Living Helmet
ItemStages.restrict(<item:bloodmagic:livingleggings>, "disabled");  // Living Leggings
ItemStages.restrict(<item:minecraft:mushroom_stew>, "disabled");  // Mushroom Stew
ItemStages.restrict(<item:cyclic:netherbrick_hoe>, "disabled");  // Nether Hoe
ItemStages.restrict(<item:ae2:nether_quartz_axe>, "disabled");  // Nether Quartz Axe
ItemStages.restrict(<item:ae2:nether_quartz_hoe>, "disabled");  // Nether Quartz Hoe
ItemStages.restrict(<item:ae2:nether_quartz_pickaxe>, "disabled");  // Nether Quartz Pickaxe
ItemStages.restrict(<item:ae2:nether_quartz_sword>, "disabled");  // Nether Quartz Sword
ItemStages.restrict(<item:cyclic:packager>, "disabled");  // Packager
ItemStages.restrict(<item:inventorypets:item_petrifier>, "disabled");  // Petrifier
ItemStages.restrict(<item:enderio:powered_spawner>, "disabled");  // Powered Spawner
ItemStages.restrict(<item:valoria:samurai_chestplate>, "disabled");  // Samurai Chestplate
ItemStages.restrict(<item:cyclic:sandstone_hoe>, "disabled");  // Sandstone Hoe
ItemStages.restrict(<item:cyclic:sandstone_sword>, "disabled");  // Sandstone Sword
ItemStages.restrict(<item:inventorypets:solstice_boots>, "disabled");  // Solstice Boots
ItemStages.restrict(<item:inventorypets:solstice_chestplate>, "disabled");  // Solstice Chestplate
ItemStages.restrict(<item:inventorypets:solstice_helmet>, "disabled");  // Solstice Helmet
ItemStages.restrict(<item:inventorypets:solstice_leggings>, "disabled");  // Solstice Leggings
ItemStages.restrict(<item:inventorypets:solstice_sword>, "disabled");  // Solstice Sword
ItemStages.restrict(<item:cyclic:sprinkler>, "disabled");  // Sprinkler
ItemStages.restrict(<item:draconicevolution:stabilized_spawner>, "disabled");  // Stabilized Mob Spawner
ItemStages.restrict(<item:bloodarsenal:stasis_axe>, "disabled");  // Stasis Axe
ItemStages.restrict(<item:bloodarsenal:stasis_pickaxe>, "disabled");  // Stasis Pickaxe
ItemStages.restrict(<item:bloodarsenal:stasis_shovel>, "disabled");  // Stasis Shovel
ItemStages.restrict(<item:enderio:stone_gear>, "disabled");  // Stone Compound Gear
ItemStages.restrict(<item:enderio:dark_steel_sword>, "disabled");  // The Ender
ItemStages.restrict(<item:twilightforest:time_sapling>, "disabled");  // Tree of Time Sapling
ItemStages.restrict(<item:twilightforest:uncrafting_table>, "disabled");  // Uncrafting Table
ItemStages.restrict(<item:valoria:void_axe>, "disabled");  // Void Axe
ItemStages.restrict(<item:projecte:void_ring>, "disabled");  // Void Ring
ItemStages.restrict(<item:valoria:void_shovel>, "disabled");  // Void Shovel
ItemStages.restrict(<item:enderio:wood_gear>, "disabled");  // Wooden Gear

// === ender_charm (parity) ===
ItemStages.restrict(<item:minecraft:chorus_fruit>, "ender_charm");  // Chorus Fruit

// === energy_matter_core (parity) ===
ItemStages.restrict(<item:projecte:condenser_mk1>, "energy_matter_core");  // Energy Condenser
ItemStages.restrict(<item:projecte:condenser_mk2>, "energy_matter_core");  // Energy Condenser MK2
ItemStages.restrict(<item:projecte:transmutation_table>, "energy_matter_core");  // Transmutation Table
ItemStages.restrict(<item:projecte:transmutation_tablet>, "energy_matter_core");  // Transmutation Tablet

// === fusion_matrix (parity) ===
ItemStages.restrict(<item:draconicevolution:awakened_draconium_block>, "fusion_matrix");  // Awakened Draconium Block
ItemStages.restrict(<item:mysticalagradditions:awakened_draconium_crux>, "fusion_matrix");  // Awakened Draconium Crux
ItemStages.restrict(<item:mysticalagriculture:awakened_draconium_essence>, "fusion_matrix");  // Awakened Draconium Essence
ItemStages.restrict(<item:draconicevolution:awakened_draconium_ingot>, "fusion_matrix");  // Awakened Draconium Ingot
ItemStages.restrict(<item:draconicevolution:awakened_draconium_nugget>, "fusion_matrix");  // Awakened Draconium Nugget
// DE renamed its cores between versions - match by TIER, not display name:
//   1.12 draconic_core  ("Draconic Core",  t1) == 1.20 draconium_core ("Draconium Core")
//   1.12 awakened_core  ("Awakened Core",  t3) == 1.20 awakened_core  ("Draconic Core")
ItemStages.restrict(<item:draconicevolution:draconium_core>, "fusion_matrix");  // GC "Draconic Core" (t1), restage.zs:91
ItemStages.restrict(<item:draconicevolution:awakened_core>, "descendant_of_the_sun");  // GC "Awakened Core" (t3), restage.zs:64
ItemStages.restrict(<item:draconicevolution:draconium_chest>, "fusion_matrix");  // Draconium Chest
ItemStages.restrict(<item:mysticalagriculture:draconium_essence>, "fusion_matrix");  // Draconium Essence
ItemStages.restrict(<item:draconicevolution:draconium_nugget>, "fusion_matrix");  // Draconium Nugget
ItemStages.restrict(<item:cyclic:lightning_scepter>, "fusion_matrix");  // Engraved Thunder
// 2026-07-14 audit: altar was restricted TWICE (here + a duplicate 'nether'
// entry further down, both enforced). USER DECISION: all altar summons are
// post-dragon content, so the altar keeps GC's 'fusion_matrix' stage; the
// duplicate entry below was removed. Per-boss catalysts add their own tiers
// (sun_totem=wyvern, beast_hand=fusion_matrix, forbidden_bible=hardmode,
// ravaging_catalyst=hardmode).
ItemStages.restrict(<item:summoningrituals:altar>, "fusion_matrix");  // Summoning Altar
ItemStages.restrict(<item:draconicevolution:wyvern_core>, "fusion_matrix");  // Wyvern Core

// === getting_started (parity) ===
ItemStages.restrict(<item:cyclic:sandstone_axe>, "getting_started");  // Sandstone Axe
ItemStages.restrict(<item:cyclic:sandstone_pickaxe>, "getting_started");  // Sandstone Pickaxe
ItemStages.restrict(<item:cyclic:sandstone_shovel>, "getting_started");  // Sandstone Shovel

// === graduated (parity) ===
ItemStages.restrict(<item:storagedrawers:creative_vending_upgrade>, "graduated");  // Creative Vending Upgrade
ItemStages.restrict(<item:projecte:harvest_goddess_band>, "graduated");  // Harvest Goddess Band
ItemStages.restrict(<item:cyclic:battery_infinite>, "graduated");  // Infinite Battery

// === hardmode (parity) ===
ItemStages.restrict(<item:taiga:abyssum_dust>, "hardmode");  // Abyssum Dust
ItemStages.restrict(<item:taiga:abyssum_ingot>, "hardmode");  // Abyssum Ingot
ItemStages.restrict(<item:taiga:abyssum_nugget>, "hardmode");  // Abyssum Nugget
ItemStages.restrict(<item:taiga:abyssum_ore>, "hardmode");  // Abyssum Ore
ItemStages.restrict(<item:taiga:adamant_dust>, "hardmode");  // Adamant Dust
ItemStages.restrict(<item:taiga:adamant_ingot>, "hardmode");  // Adamant Ingot
ItemStages.restrict(<item:taiga:adamant_nugget>, "hardmode");  // Adamant Nugget
ItemStages.restrict(<item:draconicevolution:advanced_dislocator>, "hardmode");  // Advanced Dislocator
ItemStages.restrict(<item:draconicevolution:entity_detector_advanced>, "hardmode");  // Advanced Entity Detector
ItemStages.restrict(<item:projecte:aeternalis_fuel>, "hardmode");  // Aeternalis Fuel
ItemStages.restrict(<item:projecte:aeternalis_fuel_block>, "hardmode");  // Aeternalis Fuel Block
ItemStages.restrict(<item:projecte:black_alchemical_bag>, "hardmode");  // Alchemical Bag (Black)
ItemStages.restrict(<item:projecte:blue_alchemical_bag>, "hardmode");  // Alchemical Bag (Blue)
ItemStages.restrict(<item:projecte:brown_alchemical_bag>, "hardmode");  // Alchemical Bag (Brown)
ItemStages.restrict(<item:projecte:cyan_alchemical_bag>, "hardmode");  // Alchemical Bag (Cyan)
ItemStages.restrict(<item:projecte:gray_alchemical_bag>, "hardmode");  // Alchemical Bag (Gray)
ItemStages.restrict(<item:projecte:green_alchemical_bag>, "hardmode");  // Alchemical Bag (Green)
ItemStages.restrict(<item:projecte:light_blue_alchemical_bag>, "hardmode");  // Alchemical Bag (Light Blue)
ItemStages.restrict(<item:projecte:light_gray_alchemical_bag>, "hardmode");  // Alchemical Bag (Light Gray)
ItemStages.restrict(<item:projecte:lime_alchemical_bag>, "hardmode");  // Alchemical Bag (Lime)
ItemStages.restrict(<item:projecte:magenta_alchemical_bag>, "hardmode");  // Alchemical Bag (Magenta)
ItemStages.restrict(<item:projecte:orange_alchemical_bag>, "hardmode");  // Alchemical Bag (Orange)
ItemStages.restrict(<item:projecte:pink_alchemical_bag>, "hardmode");  // Alchemical Bag (Pink)
ItemStages.restrict(<item:projecte:purple_alchemical_bag>, "hardmode");  // Alchemical Bag (Purple)
ItemStages.restrict(<item:projecte:red_alchemical_bag>, "hardmode");  // Alchemical Bag (Red)
ItemStages.restrict(<item:projecte:white_alchemical_bag>, "hardmode");  // Alchemical Bag (White)
ItemStages.restrict(<item:projecte:yellow_alchemical_bag>, "hardmode");  // Alchemical Bag (Yellow)
ItemStages.restrict(<item:projecte:alchemical_chest>, "hardmode");  // Alchemical Chest
ItemStages.restrict(<item:projecte:alchemical_coal>, "hardmode");  // Alchemical Coal
ItemStages.restrict(<item:projecte:alchemical_coal_block>, "hardmode");  // Alchemical Coal Block
// NAME COLLISION: GC's hardmode "Alchemy Table" is projectex:alchemy_table
// (no 1.20 counterpart). Blood Magic's table is gated at novice_wizard, as in GC.
ItemStages.restrict(<item:projecte:relay_mk1>, "hardmode");  // Anti-Matter Relay MK1
ItemStages.restrict(<item:projecte:relay_mk2>, "hardmode");  // Anti-Matter Relay MK2
ItemStages.restrict(<item:projecte:relay_mk3>, "hardmode");  // Anti-Matter Relay MK3
ItemStages.restrict(<item:projecte:archangel_smite>, "hardmode");  // Archangel's Smite
ItemStages.restrict(<item:taiga:astrium_dust>, "hardmode");  // Astrium Dust
ItemStages.restrict(<item:taiga:astrium_ingot>, "hardmode");  // Astrium Ingot
ItemStages.restrict(<item:taiga:astrium_nugget>, "hardmode");  // Astrium Nugget
ItemStages.restrict(<item:taiga:aurorium_dust>, "hardmode");  // Aurorium Dust
ItemStages.restrict(<item:taiga:aurorium_ingot>, "hardmode");  // Aurorium Ingot
ItemStages.restrict(<item:taiga:aurorium_nugget>, "hardmode");  // Aurorium Nugget
ItemStages.restrict(<item:taiga:aurorium_ore>, "hardmode");  // Aurorium Ore
// Awakened Draconium block/ingot/nugget: GC restage.zs:96-98 moves these to
// fusion_matrix, undoing the hardmode add. Gated there already.
ItemStages.restrict(<item:draconicevolution:advanced_magnet>, "hardmode");  // Awakened Item Dislocator
ItemStages.restrict(<item:taiga:basalt_dust>, "hardmode");  // Basalt Dust
ItemStages.restrict(<item:taiga:basalt_ingot>, "hardmode");  // Basalt Ingot
ItemStages.restrict(<item:taiga:basalt_nugget>, "hardmode");  // Basalt Nugget
ItemStages.restrict(<item:draconicevolution:basic_io_crystal>, "hardmode");  // Basic Energy I/O Crystal
ItemStages.restrict(<item:draconicevolution:basic_relay_crystal>, "hardmode");  // Basic Energy Relay Crystal
ItemStages.restrict(<item:draconicevolution:basic_wireless_crystal>, "hardmode");  // Basic Wireless Energy Crystal
ItemStages.restrict(<item:projecte:black_hole_band>, "hardmode");  // Black Hole Band
ItemStages.restrict(<item:jaopca:storage_blocks.orichalcos>, "hardmode");  // Block of Orichalcos
ItemStages.restrict(<item:projecte:body_stone>, "hardmode");  // Body Stone
ItemStages.restrict(<item:draconicevolution:player_dislocator>, "hardmode");  // Bound Dislocator (Player)
ItemStages.restrict(<item:draconicevolution:p2p_dislocator>, "hardmode");  // Bound Dislocator (Point to Point)
ItemStages.restrict(<item:projecte:catalytic_lens>, "hardmode");  // Catalytic Lens
ItemStages.restrict(<item:draconicevolution:celestial_manipulator>, "hardmode");  // Celestial Manipulator
// Chaos Shard -> awakened (restage.zs:62), Chaotic Core -> chaotic_dominator
// (restage.zs:63). Both undo the hardmode add; gated in those stages already.
ItemStages.restrict(<item:draconicevolution:chaotic_crafting_injector>, "hardmode");  // Chaotic Fusion Crafting Injector
ItemStages.restrict(<item:tconevo:coalescence_matrix>, "hardmode");  // Coalescence Matrix
ItemStages.restrict(<item:avaritia:compressed_crafting_table>, "hardmode");  // Compressed Crafting Table
ItemStages.restrict(<item:avaritia:cosmic_meatballs>, "hardmode");  // Cosmic Meatballs
ItemStages.restrict(<item:draconicevolution:crystal_binder>, "hardmode");  // Crystal Binder
ItemStages.restrict(<item:avaritia:crystal_matrix>, "hardmode");  // Crystal Matrix
ItemStages.restrict(<item:avaritia:crystal_matrix_ingot>, "hardmode");  // Crystal Matrix Ingot
ItemStages.restrict(<item:projecte:dark_matter>, "hardmode");  // Dark Matter
ItemStages.restrict(<item:projecte:dm_axe>, "hardmode");  // Dark Matter Axe
ItemStages.restrict(<item:projecte:dark_matter_block>, "hardmode");  // Dark Matter Block
ItemStages.restrict(<item:projecte:dm_boots>, "hardmode");  // Dark Matter Boots
ItemStages.restrict(<item:projecte:dm_chestplate>, "hardmode");  // Dark Matter Chestplate
ItemStages.restrict(<item:projecte:dm_furnace>, "hardmode");  // Dark Matter Furnace
ItemStages.restrict(<item:projecte:dm_hammer>, "hardmode");  // Dark Matter Hammer
ItemStages.restrict(<item:projecte:dm_helmet>, "hardmode");  // Dark Matter Helmet
ItemStages.restrict(<item:projecte:dm_hoe>, "hardmode");  // Dark Matter Hoe
ItemStages.restrict(<item:projecte:dm_leggings>, "hardmode");  // Dark Matter Leggings
ItemStages.restrict(<item:projecte:dm_pedestal>, "hardmode");  // Dark Matter Pedestal
ItemStages.restrict(<item:projecte:dm_pick>, "hardmode");  // Dark Matter Pickaxe
ItemStages.restrict(<item:projecte:dm_shears>, "hardmode");  // Dark Matter Shears
ItemStages.restrict(<item:projecte:dm_shovel>, "hardmode");  // Dark Matter Shovel
ItemStages.restrict(<item:projecte:dm_sword>, "hardmode");  // Dark Matter Sword
ItemStages.restrict(<item:projecte:destruction_catalyst>, "hardmode");  // Destruction Catalyst
ItemStages.restrict(<item:avaritia:diamond_lattice>, "hardmode");  // Diamond Lattice
ItemStages.restrict(<item:taiga:dilithium_crystal>, "hardmode");  // Dilithium Crystal
ItemStages.restrict(<item:taiga:dilithium_dust>, "hardmode");  // Dilithium Dust
ItemStages.restrict(<item:taiga:dilithium_ingot>, "hardmode");  // Dilithium Ingot
ItemStages.restrict(<item:taiga:dilithium_nugget>, "hardmode");  // Dilithium Nugget
ItemStages.restrict(<item:taiga:dilithium_ore>, "hardmode");  // Dilithium Ore
ItemStages.restrict(<item:draconicevolution:disenchanter>, "hardmode");  // Disenchanter
ItemStages.restrict(<item:draconicevolution:dislocation_inhibitor>, "hardmode");  // Dislocation Normalization Field Projector
ItemStages.restrict(<item:draconicevolution:dislocator>, "hardmode");  // Dislocator
ItemStages.restrict(<item:draconicevolution:dislocator_pedestal>, "hardmode");  // Dislocator Pedestal
ItemStages.restrict(<item:draconicevolution:dislocator_receptacle>, "hardmode");  // Dislocator Receptacle
ItemStages.restrict(<item:projecte:divining_rod_3>, "hardmode");  // Divining Rod (high)
ItemStages.restrict(<item:projecte:divining_rod_1>, "hardmode");  // Divining Rod (low)
ItemStages.restrict(<item:projecte:divining_rod_2>, "hardmode");  // Divining Rod (medium)
ItemStages.restrict(<item:avaritia:double_compressed_crafting_table>, "hardmode");  // Double Compressed Crafting Table
// Draconic Axe / Bow -> disabled (GC restages both there; hardmode add undone)
// Draconic Core (1.20 awakened_core = GC's tier-3 "Awakened Core"):
// restage.zs:64 moves it to descendant_of_the_sun, undoing the hardmode add.
ItemStages.restrict(<item:draconicevolution:draconic_io_crystal>, "hardmode");  // Draconic Energy I/O Crystal
ItemStages.restrict(<item:draconicevolution:draconic_relay_crystal>, "hardmode");  // Draconic Energy Relay Crystal
ItemStages.restrict(<item:draconicevolution:awakened_crafting_injector>, "hardmode");  // Draconic Fusion Crafting Injector
ItemStages.restrict(<item:draconicevolution:draconic_hoe>, "hardmode");  // Draconic Hoe
// Draconic Pickaxe -> disabled (GC restage)
ItemStages.restrict(<item:draconicevolution:reactor_core>, "hardmode");  // Draconic Reactor Core
// Draconic Shovel -> disabled (GC restage)
ItemStages.restrict(<item:draconicevolution:draconic_staff>, "hardmode");  // Draconic Staff of Power
// Draconic Sword -> disabled (GC restage)
ItemStages.restrict(<item:draconicevolution:draconic_wireless_crystal>, "hardmode");  // Draconic Wireless Energy Crystal
ItemStages.restrict(<item:draconicevolution:draconium_block>, "hardmode");  // Draconium Block
// Draconium Chest -> fusion_matrix (restage.zs:102); hardmode add undone.
ItemStages.restrict(<item:draconicevolution:draconium_dust>, "hardmode");  // Draconium Dust
ItemStages.restrict(<item:draconicevolution:infused_obsidian>, "hardmode");  // Draconium Infused Obsidian
ItemStages.restrict(<item:draconicevolution:draconium_ingot>, "hardmode");  // Draconium Ingot
// Draconium Nugget -> fusion_matrix (restage.zs:101); hardmode add undone.
ItemStages.restrict(<item:draconicevolution:overworld_draconium_ore>, "hardmode");  // Draconium Ore
ItemStages.restrict(<item:draconicevolution:dragon_heart>, "hardmode");  // Dragon Heart
ItemStages.restrict(<item:taiga:duranite_dust>, "hardmode");  // Duranite Dust
ItemStages.restrict(<item:taiga:duranite_ingot>, "hardmode");  // Duranite Ingot
ItemStages.restrict(<item:taiga:duranite_nugget>, "hardmode");  // Duranite Nugget
ItemStages.restrict(<item:taiga:duranite_ore>, "hardmode");  // Duranite Ore
ItemStages.restrict(<item:taiga:dyonite_dust>, "hardmode");  // Dyonite Dust
ItemStages.restrict(<item:taiga:dyonite_ingot>, "hardmode");  // Dyonite Ingot
ItemStages.restrict(<item:taiga:dyonite_nugget>, "hardmode");  // Dyonite Nugget
ItemStages.restrict(<item:taiga:eezo_dust>, "hardmode");  // Eezo Dust
ItemStages.restrict(<item:taiga:eezo_ingot>, "hardmode");  // Eezo Ingot
ItemStages.restrict(<item:taiga:eezo_nugget>, "hardmode");  // Eezo Nugget
ItemStages.restrict(<item:taiga:eezo_ore>, "hardmode");  // Eezo Ore
ItemStages.restrict(<item:soa_additions:ender_biotite>, "hardmode");  // Ender Biotite
ItemStages.restrict(<item:draconicevolution:end_draconium_ore>, "hardmode");  // Ender Draconium Ore
ItemStages.restrict(<item:avaritia:endest_pearl>, "hardmode");  // Endest Pearl
ItemStages.restrict(<item:projecte:collector_mk1>, "hardmode");  // Energy Collector MK1
ItemStages.restrict(<item:projecte:collector_mk2>, "hardmode");  // Energy Collector MK2
ItemStages.restrict(<item:projecte:collector_mk3>, "hardmode");  // Energy Collector MK3
// Energy Condenser MK1/MK2 -> energy_matter_core (restage.zs:130-131);
// hardmode adds undone.
ItemStages.restrict(<item:draconicevolution:energy_core>, "hardmode");  // Energy Core
ItemStages.restrict(<item:draconicevolution:energy_core_stabilizer>, "hardmode");  // Energy Core Stabilizer
ItemStages.restrict(<item:draconicevolution:energy_pylon>, "hardmode");  // Energy Pylon
ItemStages.restrict(<item:draconicevolution:entity_detector>, "hardmode");  // Entity Detector (GC hardmode = DE's, not Cyclic's)
ItemStages.restrict(<item:projecte:evertide_amulet>, "hardmode");  // Evertide Amulet
ItemStages.restrict(<item:avaritia:extreme_crafting_table>, "hardmode");  // Extreme Crafting Table
ItemStages.restrict(<item:draconicevolution:fluid_gate>, "hardmode");  // Fluid Gate
ItemStages.restrict(<item:draconicevolution:flux_gate>, "hardmode");  // Flux Gate
ItemStages.restrict(<item:taiga:fractum_dust>, "hardmode");  // Fractum Dust
ItemStages.restrict(<item:taiga:fractum_ingot>, "hardmode");  // Fractum Ingot
ItemStages.restrict(<item:taiga:fractum_nugget>, "hardmode");  // Fractum Nugget
ItemStages.restrict(<item:draconicevolution:crafting_core>, "hardmode");  // Fusion Crafting Core
ItemStages.restrict(<item:projecte:gem_boots>, "hardmode");  // Gem Boots
ItemStages.restrict(<item:projecte:gem_chestplate>, "hardmode");  // Gem Chestplate
ItemStages.restrict(<item:projecte:gem_helmet>, "hardmode");  // Gem Helmet
ItemStages.restrict(<item:projecte:gem_leggings>, "hardmode");  // Gem Leggings
ItemStages.restrict(<item:projecte:gem_of_eternal_density>, "hardmode");  // Gem of Eternal Density
ItemStages.restrict(<item:draconicevolution:generator>, "hardmode");  // Generator
// Harvest Goddess Band -> graduated (restage.zs:117); hardmode add undone.
ItemStages.restrict(<item:projecte:high_covalence_dust>, "hardmode");  // High Covalence Dust
ItemStages.restrict(<item:projecte:hyperkinetic_lens>, "hardmode");  // Hyperkinetic Lens
ItemStages.restrict(<item:projecte:ignition_ring>, "hardmode");  // Ignition Ring
ItemStages.restrict(<item:taiga:ignitz_dust>, "hardmode");  // Ignitz Dust
ItemStages.restrict(<item:taiga:ignitz_ingot>, "hardmode");  // Ignitz Ingot
ItemStages.restrict(<item:taiga:ignitz_nugget>, "hardmode");  // Ignitz Nugget
ItemStages.restrict(<item:taiga:imperomite_dust>, "hardmode");  // Imperomite Dust
ItemStages.restrict(<item:taiga:imperomite_ingot>, "hardmode");  // Imperomite Ingot
ItemStages.restrict(<item:taiga:imperomite_nugget>, "hardmode");  // Imperomite Nugget
// Infinity block/boots/helmet/ingot -> wielder_of_infinity (restage.zs:45-57);
// Infinity Catalyst -> chaotic (restage.zs:67). All hardmode adds undone.
ItemStages.restrict(<item:projecte:interdiction_torch>, "hardmode");  // Interdiction Torch
ItemStages.restrict(<item:taiga:iox_dust>, "hardmode");  // Iox Dust
ItemStages.restrict(<item:taiga:iox_ingot>, "hardmode");  // Iox Ingot
ItemStages.restrict(<item:taiga:iox_nugget>, "hardmode");  // Iox Nugget
ItemStages.restrict(<item:projecte:iron_band>, "hardmode");  // Iron Band
ItemStages.restrict(<item:draconicevolution:magnet>, "hardmode");  // Item Dislocator
ItemStages.restrict(<item:taiga:jauxum_dust>, "hardmode");  // Jauxum Dust
ItemStages.restrict(<item:taiga:jauxum_ingot>, "hardmode");  // Jauxum Ingot
ItemStages.restrict(<item:taiga:jauxum_nugget>, "hardmode");  // Jauxum Nugget
ItemStages.restrict(<item:taiga:jauxum_ore>, "hardmode");  // Jauxum Ore
ItemStages.restrict(<item:taiga:karmesine_dust>, "hardmode");  // Karmesine Dust
ItemStages.restrict(<item:taiga:karmesine_ingot>, "hardmode");  // Karmesine Ingot
ItemStages.restrict(<item:taiga:karmesine_nugget>, "hardmode");  // Karmesine Nugget
ItemStages.restrict(<item:taiga:karmesine_ore>, "hardmode");  // Karmesine Ore
ItemStages.restrict(<item:projecte:klein_star_drei>, "hardmode");  // Klein Star Drei
ItemStages.restrict(<item:projecte:klein_star_ein>, "hardmode");  // Klein Star Ein
ItemStages.restrict(<item:projecte:klein_star_omega>, "hardmode");  // Klein Star Omega
ItemStages.restrict(<item:projecte:klein_star_sphere>, "hardmode");  // Klein Star Sphere
ItemStages.restrict(<item:projecte:klein_star_vier>, "hardmode");  // Klein Star Vier
ItemStages.restrict(<item:projecte:klein_star_zwei>, "hardmode");  // Klein Star Zwei
ItemStages.restrict(<item:draconicevolution:large_chaos_frag>, "hardmode");  // Large Chaos Fragment
ItemStages.restrict(<item:projecte:life_stone>, "hardmode");  // Life Stone
// Longbow of the Heavens -> wielder_of_infinity (restage.zs:47).
ItemStages.restrict(<item:projecte:low_covalence_dust>, "hardmode");  // Low Covalence Dust
ItemStages.restrict(<item:taiga:lumix_dust>, "hardmode");  // Lumix Dust
ItemStages.restrict(<item:taiga:lumix_ingot>, "hardmode");  // Lumix Ingot
ItemStages.restrict(<item:taiga:lumix_nugget>, "hardmode");  // Lumix Nugget
ItemStages.restrict(<item:avaritia:matter_cluster>, "hardmode");  // Matter Cluster
ItemStages.restrict(<item:projecte:medium_covalence_dust>, "hardmode");  // Medium Covalence Dust
ItemStages.restrict(<item:projecte:mercurial_eye>, "hardmode");  // Mercurial Eye
ItemStages.restrict(<item:taiga:meteorite_dust>, "hardmode");  // Meteorite Dust
ItemStages.restrict(<item:taiga:meteorite_ingot>, "hardmode");  // Meteorite Ingot
ItemStages.restrict(<item:taiga:meteorite_nugget>, "hardmode");  // Meteorite Nugget
ItemStages.restrict(<item:projecte:mind_stone>, "hardmode");  // Mind Stone
ItemStages.restrict(<item:draconicevolution:grinder>, "hardmode");  // Mob Grinder
ItemStages.restrict(<item:projecte:mobius_fuel>, "hardmode");  // Mobius Fuel
ItemStages.restrict(<item:projecte:mobius_fuel_block>, "hardmode");  // Mobius Fuel Block
// Nature's Ruin -> wielder_of_infinity (restage.zs:50).
ItemStages.restrict(<item:draconicevolution:nether_draconium_ore>, "hardmode");  // Nether Draconium Ore
// Neutronium block/ingot/nugget -> wyvern (restage.zs:108-110); Neutronium
// Compressor -> awakened (restage.zs:112). All hardmode adds undone.
ItemStages.restrict(<item:taiga:nihilite_dust>, "hardmode");  // Nihilite Dust
ItemStages.restrict(<item:taiga:nihilite_ingot>, "hardmode");  // Nihilite Ingot
ItemStages.restrict(<item:taiga:nihilite_nugget>, "hardmode");  // Nihilite Nugget
ItemStages.restrict(<item:taiga:niob_dust>, "hardmode");  // Niob Dust
ItemStages.restrict(<item:taiga:niob_ingot>, "hardmode");  // Niob Ingot
ItemStages.restrict(<item:taiga:niob_nugget>, "hardmode");  // Niob Nugget
ItemStages.restrict(<item:projecte:nova_cataclysm>, "hardmode");  // Nova Cataclysm
ItemStages.restrict(<item:projecte:nova_catalyst>, "hardmode");  // Nova Catalyst
ItemStages.restrict(<item:taiga:nucleum_dust>, "hardmode");  // Nucleum Dust
ItemStages.restrict(<item:taiga:nucleum_ingot>, "hardmode");  // Nucleum Ingot
ItemStages.restrict(<item:taiga:nucleum_nugget>, "hardmode");  // Nucleum Nugget
ItemStages.restrict(<item:taiga:obsidiorite_dust>, "hardmode");  // Obsidiorite Dust
ItemStages.restrict(<item:taiga:obsidiorite_ingot>, "hardmode");  // Obsidiorite Ingot
ItemStages.restrict(<item:taiga:obsidiorite_nugget>, "hardmode");  // Obsidiorite Nugget
ItemStages.restrict(<item:soa_additions:orichalcos_ingot>, "hardmode");  // Orichalcos Ingot
ItemStages.restrict(<item:soa_additions:osgloglas_ingot>, "hardmode");  // Osgloglas Ingot
ItemStages.restrict(<item:soa_additions:osmiridium_ingot>, "hardmode");  // Osmiridium Ingot
ItemStages.restrict(<item:taiga:osram_dust>, "hardmode");  // Osram Dust
ItemStages.restrict(<item:taiga:osram_ingot>, "hardmode");  // Osram Ingot
ItemStages.restrict(<item:taiga:osram_nugget>, "hardmode");  // Osram Nugget
ItemStages.restrict(<item:taiga:osram_ore>, "hardmode");  // Osram Ore
ItemStages.restrict(<item:taiga:ovium_dust>, "hardmode");  // Ovium Dust
ItemStages.restrict(<item:taiga:ovium_ingot>, "hardmode");  // Ovium Ingot
ItemStages.restrict(<item:taiga:ovium_nugget>, "hardmode");  // Ovium Nugget
ItemStages.restrict(<item:taiga:ovium_ore>, "hardmode");  // Ovium Ore
ItemStages.restrict(<item:taiga:palladium_dust>, "hardmode");  // Palladium Dust
ItemStages.restrict(<item:taiga:palladium_ingot>, "hardmode");  // Palladium Ingot
ItemStages.restrict(<item:taiga:palladium_nugget>, "hardmode");  // Palladium Nugget
ItemStages.restrict(<item:taiga:palladium_ore>, "hardmode");  // Palladium Ore
ItemStages.restrict(<item:draconicevolution:particle_generator>, "hardmode");  // Particle Generator
ItemStages.restrict(<item:projecte:philosophers_stone>, "hardmode");  // Philosopher's Stone
ItemStages.restrict(<item:draconicevolution:mob_soul>, "hardmode");  // Pig Soul
// Pile of Neutrons -> wyvern (restage.zs:107); Planet Eater ->
// wielder_of_infinity (restage.zs:49).
ItemStages.restrict(<item:draconicevolution:potentiometer>, "hardmode");  // Potentiometer
ItemStages.restrict(<item:taiga:prometheum_dust>, "hardmode");  // Prometheum Dust
ItemStages.restrict(<item:taiga:prometheum_ingot>, "hardmode");  // Prometheum Ingot
ItemStages.restrict(<item:taiga:prometheum_nugget>, "hardmode");  // Prometheum Nugget
ItemStages.restrict(<item:taiga:prometheum_ore>, "hardmode");  // Prometheum Ore
ItemStages.restrict(<item:taiga:proxii_dust>, "hardmode");  // Proxii Dust
ItemStages.restrict(<item:taiga:proxii_ingot>, "hardmode");  // Proxii Ingot
ItemStages.restrict(<item:taiga:proxii_nugget>, "hardmode");  // Proxii Nugget
ItemStages.restrict(<item:draconicevolution:rain_sensor>, "hardmode");  // Rain Sensor
ItemStages.restrict(<item:draconicevolution:reactor_injector>, "hardmode");  // Reactor Energy Injector
// Reactor Stabilizer -> chaotic (restage.zs:68); hardmode add undone.
ItemStages.restrict(<item:draconicevolution:reactor_prt_focus_ring>, "hardmode");  // Reactor Stabilizer Focus Ring
ItemStages.restrict(<item:draconicevolution:reactor_prt_stab_frame>, "hardmode");  // Reactor Stabilizer Frame
ItemStages.restrict(<item:draconicevolution:reactor_prt_in_rotor>, "hardmode");  // Reactor Stabilizer Inner Rotor
ItemStages.restrict(<item:draconicevolution:reactor_prt_out_rotor>, "hardmode");  // Reactor Stabilizer Outer Rotor
ItemStages.restrict(<item:draconicevolution:reactor_prt_rotor_full>, "hardmode");  // Reactor Stabilizer Rotor Assembly
ItemStages.restrict(<item:avaritia:record_fragment>, "hardmode");  // Record Fragment
ItemStages.restrict(<item:projecte:rm_katar>, "hardmode");  // Red Katar
ItemStages.restrict(<item:projecte:red_matter>, "hardmode");  // Red Matter
ItemStages.restrict(<item:projecte:rm_axe>, "hardmode");  // Red Matter Axe
ItemStages.restrict(<item:projecte:red_matter_block>, "hardmode");  // Red Matter Block
ItemStages.restrict(<item:projecte:rm_boots>, "hardmode");  // Red Matter Boots
ItemStages.restrict(<item:projecte:rm_chestplate>, "hardmode");  // Red Matter Chestplate
ItemStages.restrict(<item:projecte:rm_furnace>, "hardmode");  // Red Matter Furnace
ItemStages.restrict(<item:projecte:rm_hammer>, "hardmode");  // Red Matter Hammer
ItemStages.restrict(<item:projecte:rm_helmet>, "hardmode");  // Red Matter Helmet
ItemStages.restrict(<item:projecte:rm_hoe>, "hardmode");  // Red Matter Hoe
ItemStages.restrict(<item:projecte:rm_leggings>, "hardmode");  // Red Matter Leggings
ItemStages.restrict(<item:projecte:rm_pick>, "hardmode");  // Red Matter Pickaxe
ItemStages.restrict(<item:projecte:rm_shears>, "hardmode");  // Red Matter Shears
ItemStages.restrict(<item:projecte:rm_shovel>, "hardmode");  // Red Matter Shovel
ItemStages.restrict(<item:projecte:rm_sword>, "hardmode");  // Red Matter Sword
ItemStages.restrict(<item:projecte:rm_morning_star>, "hardmode");  // Red Morningstar
ItemStages.restrict(<item:projecte:repair_talisman>, "hardmode");  // Repair Talisman
ItemStages.restrict(<item:taiga:seismum_dust>, "hardmode");  // Seismum Dust
ItemStages.restrict(<item:taiga:seismum_ingot>, "hardmode");  // Seismum Ingot
ItemStages.restrict(<item:taiga:seismum_nugget>, "hardmode");  // Seismum Nugget
ItemStages.restrict(<item:draconicevolution:medium_chaos_frag>, "hardmode");  // Small Chaos Fragment
ItemStages.restrict(<item:taiga:solarium_dust>, "hardmode");  // Solarium Dust
ItemStages.restrict(<item:taiga:solarium_ingot>, "hardmode");  // Solarium Ingot
ItemStages.restrict(<item:taiga:solarium_nugget>, "hardmode");  // Solarium Nugget
ItemStages.restrict(<item:projecte:soul_stone>, "hardmode");  // Soul Stone
// Stabilized Mob Spawner: GC ends up gating this at `disabled` (crafttweaker.log
// 93801-93802 removes the hardmode add), already restricted in that section.
ItemStages.restrict(<item:projecte:swiftwolf_rending_gale>, "hardmode");  // Swiftwolf's Rending Gale
// Sword of the Cosmos -> wielder_of_infinity (restage.zs:46).
ItemStages.restrict(<item:taiga:terrax_dust>, "hardmode");  // Terrax Dust
ItemStages.restrict(<item:taiga:terrax_ingot>, "hardmode");  // Terrax Ingot
ItemStages.restrict(<item:taiga:terrax_nugget>, "hardmode");  // Terrax Nugget
ItemStages.restrict(<item:taiga:tiberium_crystal>, "hardmode");  // Tiberium Crystal
ItemStages.restrict(<item:taiga:tiberium_dust>, "hardmode");  // Tiberium Dust
ItemStages.restrict(<item:taiga:tiberium_ingot>, "hardmode");  // Tiberium Ingot
ItemStages.restrict(<item:taiga:tiberium_nugget>, "hardmode");  // Tiberium Nugget
ItemStages.restrict(<item:taiga:tiberium_ore>, "hardmode");  // Tiberium Ore
ItemStages.restrict(<item:draconicevolution:small_chaos_frag>, "hardmode");  // Tiny Chaos Fragment
ItemStages.restrict(<item:projecte:tome>, "hardmode");  // Tome of Knowledge
// Transmutation Table/Tablet -> energy_matter_core (restage.zs:126-127);
// hardmode adds undone.
ItemStages.restrict(<item:taiga:triberium_dust>, "hardmode");  // Triberium Dust
ItemStages.restrict(<item:taiga:triberium_ingot>, "hardmode");  // Triberium Ingot
ItemStages.restrict(<item:taiga:triberium_nugget>, "hardmode");  // Triberium Nugget
ItemStages.restrict(<item:taiga:tritonite_dust>, "hardmode");  // Tritonite Dust
ItemStages.restrict(<item:taiga:tritonite_ingot>, "hardmode");  // Tritonite Ingot
ItemStages.restrict(<item:taiga:tritonite_nugget>, "hardmode");  // Tritonite Nugget
ItemStages.restrict(<item:avaritia:ultimate_stew>, "hardmode");  // Ultimate Stew
ItemStages.restrict(<item:jaopca:dusts.uru>, "hardmode");  // Uru Dust
ItemStages.restrict(<item:soa_additions:uru_ingot>, "hardmode");  // Uru Ingot
ItemStages.restrict(<item:jaopca:nuggets.uru>, "hardmode");  // Uru Nugget
ItemStages.restrict(<item:taiga:valyrium_dust>, "hardmode");  // Valyrium Dust
ItemStages.restrict(<item:taiga:valyrium_ingot>, "hardmode");  // Valyrium Ingot
ItemStages.restrict(<item:taiga:valyrium_nugget>, "hardmode");  // Valyrium Nugget
ItemStages.restrict(<item:taiga:valyrium_ore>, "hardmode");  // Valyrium Ore
ItemStages.restrict(<item:taiga:vibranium_dust>, "hardmode");  // Vibranium Dust
ItemStages.restrict(<item:taiga:vibranium_ingot>, "hardmode");  // Vibranium Ingot
ItemStages.restrict(<item:taiga:vibranium_nugget>, "hardmode");  // Vibranium Nugget
ItemStages.restrict(<item:taiga:vibranium_ore>, "hardmode");  // Vibranium Ore
ItemStages.restrict(<item:taiga:violium_dust>, "hardmode");  // Violium Dust
ItemStages.restrict(<item:taiga:violium_ingot>, "hardmode");  // Violium Ingot
ItemStages.restrict(<item:taiga:violium_nugget>, "hardmode");  // Violium Nugget
// Void Ring: GC ends up gating this at `disabled` (crafttweaker.log 94069-94074
// removes the hardmode add), already restricted in that section.
ItemStages.restrict(<item:projecte:volcanite_amulet>, "hardmode");  // Volcanite Amulet
ItemStages.restrict(<item:projecte:watch_of_flowing_time>, "hardmode");  // Watch of Flowing Time
// Wyvern Core -> fusion_matrix (restage.zs:90); hardmode add undone.
ItemStages.restrict(<item:draconicevolution:wyvern_io_crystal>, "hardmode");  // Wyvern Energy I/O Crystal
ItemStages.restrict(<item:draconicevolution:wyvern_relay_crystal>, "hardmode");  // Wyvern Energy Relay Crystal
ItemStages.restrict(<item:draconicevolution:wyvern_crafting_injector>, "hardmode");  // Wyvern Fusion Crafting Injector
ItemStages.restrict(<item:draconicevolution:wyvern_wireless_crystal>, "hardmode");  // Wyvern Wireless Energy Crystal
ItemStages.restrict(<item:taiga:yrdeen_dust>, "hardmode");  // Yrdeen Dust
ItemStages.restrict(<item:taiga:yrdeen_ingot>, "hardmode");  // Yrdeen Ingot
ItemStages.restrict(<item:taiga:yrdeen_nugget>, "hardmode");  // Yrdeen Nugget
ItemStages.restrict(<item:projecte:zero_ring>, "hardmode");  // Zero Ring

// === master_engineer (parity) ===
ItemStages.restrict(<item:mekanism:alloy_atomic>, "master_engineer");  // Atomic Alloy
// NAME COLLISION: GC's master_engineer Fluid Collector/Placer are Actually
// Additions blocks (mod absent from SOA). Cyclic's own pair is gated at nether
// by the cyclicmagic mod-wide rule, as in GC.
ItemStages.restrict(<item:mekanism:ultimate_control_circuit>, "master_engineer");  // Ultimate Control Circuit

// === master_wizard (parity) ===
// Coalescence Matrix is a hardmode item in GC (taiga mod-wide gate); the
// master_wizard copy here was a duplicate that ANDed the two stages together.
ItemStages.restrict(<item:thermal:flux_capacitor>, "master_wizard");  // Flux Capacitor
// Void Anvil is a nether item in GC (cyclicmagic mod-wide gate); the
// master_wizard copy here was a duplicate.
ItemStages.restrict(<item:soa_additions:void_metal_ingot>, "master_wizard");  // Void Metal Ingot

// === nether (parity) ===
ItemStages.restrict(<item:aether:aechor_petal>, "nether");  // Aechor Petal
ItemStages.restrict(<item:aether:aerogel>, "nether");  // Aerogel
ItemStages.restrict(<item:aether:aerogel_slab>, "nether");  // Aerogel Slab
ItemStages.restrict(<item:aether:aerogel_stairs>, "nether");  // Aerogel Stairs
ItemStages.restrict(<item:aether:aerogel_wall>, "nether");  // Aerogel Wall
ItemStages.restrict(<item:aether:aether_dirt>, "nether");  // Aether Dirt
ItemStages.restrict(<item:aether:aether_portal_frame>, "nether");  // Aether Portal Frame
ItemStages.restrict(<item:aether:agility_cape>, "nether");  // Agility Cape
ItemStages.restrict(<item:aether:ambrosium_ore>, "nether");  // Ambrosium Ore
// Ambrosium Shard: GC un-stages it outright (restage.zs:31 removeItemStages),
// overriding the aether_legacy mod-wide nether gate.
ItemStages.restrict(<item:aether:ambrosium_torch>, "nether");  // Ambrosium Torch
ItemStages.restrict(<item:aether:angelic_slab>, "nether");  // Angelic Slab
ItemStages.restrict(<item:aether:angelic_stairs>, "nether");  // Angelic Stairs
ItemStages.restrict(<item:aether:angelic_stone>, "nether");  // Angelic Stone
ItemStages.restrict(<item:aether:angelic_wall>, "nether");  // Angelic Wall
ItemStages.restrict(<item:ae2:annihilation_core>, "nether");  // Annihilation Core
ItemStages.restrict(<item:cyclic:charm_antidote>, "nether");  // Antidote Charm
ItemStages.restrict(<item:cyclic:antimatter_wand>, "nether");  // Antimatter Evaporator
ItemStages.restrict(<item:cyclic:apple_lofty_stature>, "nether");  // Apple of Lofty Stature
ItemStages.restrict(<item:cyclic:apple_sprout>, "nether");  // Apple Sprout
ItemStages.restrict(<item:cyclic:battery>, "nether");  // Battery
ItemStages.restrict(<item:aether:berry_bush>, "nether");  // Berry Bush
ItemStages.restrict(<item:cyclic:biomass>, "nether");  // Biomass
ItemStages.restrict(<item:aether:ambrosium_block>, "nether");  // Block of Ambrosium
// Block Placer -> disabled (GC restage)
ItemStages.restrict(<item:cyclic:randomize_scepter>, "nether");  // Block Randomizer
// Aerclouds: GC un-stages every colour (restage.zs:26, <aether_legacy:aercloud:*>).
ItemStages.restrict(<item:aether:blue_berry>, "nether");  // Blue Berry
ItemStages.restrict(<item:aether:blue_cape>, "nether");  // Blue Cape
ItemStages.restrict(<item:aether:blue_gummy_swet>, "nether");  // Blue Gummy Swet
ItemStages.restrict(<item:aether:music_disc_aether_tune>, "nether");  // Blue Music Disc
ItemStages.restrict(<item:aether:book_of_lore>, "nether");  // Book of Lore
ItemStages.restrict(<item:cyclic:boomerang_carry>, "nether");  // Boomerang
ItemStages.restrict(<item:aether:bronze_dungeon_key>, "nether");  // Bronze Key
ItemStages.restrict(<item:cyclic:scythe_brush>, "nether");  // Brush Scythe
ItemStages.restrict(<item:aether:candy_cane>, "nether");  // Candy Cane
ItemStages.restrict(<item:aether:candy_cane_sword>, "nether");  // Candy Cane Sword
ItemStages.restrict(<item:cyclic:carbon_paper>, "nether");  // Carbon Paper
ItemStages.restrict(<item:aether:carved_slab>, "nether");  // Carved Slab
ItemStages.restrict(<item:aether:carved_stairs>, "nether");  // Carved Stairs
ItemStages.restrict(<item:aether:carved_stone>, "nether");  // Carved Stone
ItemStages.restrict(<item:aether:carved_wall>, "nether");  // Carved Wall
ItemStages.restrict(<item:cyclic:wand_hypno>, "nether");  // Chaos Reaper
ItemStages.restrict(<item:aether:chest_mimic>, "nether");  // Chest Mimic
ItemStages.restrict(<item:chisel:chisel>, "nether");  // Chisel
ItemStages.restrict(<item:cyclic:glove_climb>, "nether");  // Climbing Gloves
ItemStages.restrict(<item:aether:cloud_staff>, "nether");  // Cloud Staff
// (Cold Aercloud - un-staged with the rest of the aerclouds, restage.zs:26.)
ItemStages.restrict(<item:aether:cold_parachute>, "nether");  // Cold Parachute
ItemStages.restrict(<item:cyclic:conveyor>, "nether");  // Conveyor Belt
ItemStages.restrict(<item:cyclic:chorus_spectral>, "nether");  // Corrupted Chorus Fruit
// Crystal Axe -> disabled (GC restage)
ItemStages.restrict(<item:aether:crystal_fruit_leaves>, "nether");  // Crystal Fruit Leaves
// Crystal Hoe -> disabled (GC restage)
ItemStages.restrict(<item:aether:crystal_leaves>, "nether");  // Crystal Leaves
ItemStages.restrict(<item:cyclic:crystal_pickaxe>, "nether");  // Crystal Pickaxe
ItemStages.restrict(<item:cyclic:crystal_shovel>, "nether");  // Crystal Shovel
// Crystal Sword -> disabled (GC restage)
ItemStages.restrict(<item:cyclic:gem_amber>, "nether");  // Crystallized Amber
ItemStages.restrict(<item:cyclic:gem_obsidian>, "nether");  // Crystallized Obsidian
ItemStages.restrict(<item:cyclic:crystal_boots>, "nether");  // Crystallized Obsidian Boots
ItemStages.restrict(<item:cyclic:crystal_chestplate>, "nether");  // Crystallized Obsidian Chestplate
ItemStages.restrict(<item:cyclic:crystal_helmet>, "nether");  // Crystallized Obsidian Helmet
ItemStages.restrict(<item:cyclic:crystal_leggings>, "nether");  // Crystallized Obsidian Leggings
ItemStages.restrict(<item:aether:decorated_holiday_leaves>, "nether");  // Decorated Holiday Leaves
ItemStages.restrict(<item:cyclic:diamond_carrot_health>, "nether");  // Diamond Carrot
ItemStages.restrict(<item:aether:diamond_gloves>, "nether");  // Diamond Gloves
ItemStages.restrict(<item:valoria:diamond_spear>, "nether");  // Diamond Spear
// Diamond Spikes -> disabled (GC restage)
ItemStages.restrict(<item:cyclic:dice>, "nether");  // Dice
ItemStages.restrict(<item:cyclic:doorbell>, "nether");  // Doorbell
ItemStages.restrict(<item:cyclic:peat_unbaked>, "nether");  // Dry Peat Bog
ItemStages.restrict(<item:cyclic:fire_scepter>, "nether");  // Duskflame Hex
ItemStages.restrict(<item:cyclic:apple_emerald>, "nether");  // Emerald Apple
ItemStages.restrict(<item:cyclic:emerald_axe>, "nether");  // Emerald Axe
ItemStages.restrict(<item:cyclic:emerald_boots>, "nether");  // Emerald Boots
ItemStages.restrict(<item:cyclic:emerald_chestplate>, "nether");  // Emerald Chestplate
ItemStages.restrict(<item:cyclic:emerald_helmet>, "nether");  // Emerald Helmet
ItemStages.restrict(<item:cyclic:emerald_hoe>, "nether");  // Emerald Hoe
ItemStages.restrict(<item:cyclic:emerald_leggings>, "nether");  // Emerald Leggings
ItemStages.restrict(<item:cyclic:emerald_pickaxe>, "nether");  // Emerald Pickaxe
ItemStages.restrict(<item:cyclic:emerald_shovel>, "nether");  // Emerald Shovel
ItemStages.restrict(<item:cyclic:emerald_sword>, "nether");  // Emerald Sword
ItemStages.restrict(<item:cyclic:beacon_redstone>, "nether");  // Empty Beacon
ItemStages.restrict(<item:aether:enchanted_berry>, "nether");  // Enchanted Berry
ItemStages.restrict(<item:aether:enchanted_dart>, "nether");  // Enchanted Dart
ItemStages.restrict(<item:aether:enchanted_dart_shooter>, "nether");  // Enchanted Dart Shooter
ItemStages.restrict(<item:aether:enchanted_gravitite>, "nether");  // Enchanted Gravitite
ItemStages.restrict(<item:cyclic:carrot_ender>, "nether");  // Ender Carrot
ItemStages.restrict(<item:cyclic:ender_pearl_reuse>, "nether");  // Ender Orb
ItemStages.restrict(<item:cyclic:ender_pearl_mounted>, "nether");  // Ender Orb Translocator
ItemStages.restrict(<item:cyclic:ender_bag>, "nether");  // Ender Sack
ItemStages.restrict(<item:cyclic:charm_world>, "nether");  // Ender Wing
ItemStages.restrict(<item:cyclic:charm_home>, "nether");  // Ender Wing Prime
// Energy Cable -> disabled (GC restage)
ItemStages.restrict(<item:cyclic:wireless_energy>, "nether");  // Energy Transfer Node
// Engraved Thunder -> fusion_matrix (restage.zs:114); nether add undone.
ItemStages.restrict(<item:cyclic:peat_fuel_enriched>, "nether");  // Enriched Peat
ItemStages.restrict(<item:cyclic:detector_entity>, "nether");  // Entity Detector
ItemStages.restrict(<item:cyclic:evoker_fang>, "nether");  // Evoker Fang
ItemStages.restrict(<item:cyclic:experience_pylon>, "nether");  // Experience Pylon
ItemStages.restrict(<item:cyclic:fan>, "nether");  // Fan
ItemStages.restrict(<item:cyclic:charm_fire>, "nether");  // Fire Charm
ItemStages.restrict(<item:aether:flaming_sword>, "nether");  // Flaming Sword
// Fluid Cable -> disabled (GC restage)
ItemStages.restrict(<item:cyclic:collector_fluid>, "nether");  // Fluid Collector
ItemStages.restrict(<item:cyclic:placer_fluid>, "nether");  // Fluid Placer
ItemStages.restrict(<item:cyclic:tank>, "nether");  // Fluid Storage Tank
ItemStages.restrict(<item:cyclic:wireless_fluid>, "nether");  // Fluid Transfer Node
ItemStages.restrict(<item:ae2:fluix_pearl>, "nether");  // Fluix Pearl
ItemStages.restrict(<item:soa_additions:fluix_steel_ingot>, "nether");  // Fluix Steel Ingot
ItemStages.restrict(<item:cyclic:forester>, "nether");  // Forester
ItemStages.restrict(<item:ae2:formation_core>, "nether");  // Formation Core
ItemStages.restrict(<item:cyclic:scaffold_fragile>, "nether");  // Fragile Scaffolding
ItemStages.restrict(<item:cookingforblockheads:fridge>, "nether");  // Fridge
ItemStages.restrict(<item:cyclic:ice_scepter>, "nether");  // Frost Bringer
ItemStages.restrict(<item:botania:life_essence>, "nether");  // Gaia Spirit
ItemStages.restrict(<item:cyclic:scythe_harvest>, "nether");  // Garden Scythe
ItemStages.restrict(<item:aether:gingerbread_man>, "nether");  // Ginger Bread Man
// (Golden Aercloud - un-staged with the rest of the aerclouds, restage.zs:26.)
ItemStages.restrict(<item:aether:golden_amber>, "nether");  // Golden Amber
ItemStages.restrict(<item:aether:golden_dart>, "nether");  // Golden Dart
ItemStages.restrict(<item:aether:golden_dart_shooter>, "nether");  // Golden Dart Shooter
ItemStages.restrict(<item:aether:golden_feather>, "nether");  // Golden Feather
ItemStages.restrict(<item:aether:golden_gloves>, "nether");  // Golden Gloves
ItemStages.restrict(<item:aether:golden_gummy_swet>, "nether");  // Golden Gummy Swet
ItemStages.restrict(<item:aether:golden_oak_leaves>, "nether");  // Golden Oak Leaves
ItemStages.restrict(<item:aether:golden_oak_log>, "nether");  // Golden Oak Log
ItemStages.restrict(<item:aether:golden_oak_sapling>, "nether");  // Golden Oak Sapling
ItemStages.restrict(<item:aether:golden_parachute>, "nether");  // Golden Parachute
ItemStages.restrict(<item:aether:golden_pendant>, "nether");  // Golden Pendant
ItemStages.restrict(<item:aether:golden_ring>, "nether");  // Golden Ring
ItemStages.restrict(<item:aether:gravitite_gloves>, "nether");  // Gravitite Gloves
ItemStages.restrict(<item:aether:gravitite_ore>, "nether");  // Gravitite Ore
// Harvester -> skilled_engineer (restage.zs:122); nether add undone.
ItemStages.restrict(<item:aether:healing_stone>, "nether");  // Healing Stone
ItemStages.restrict(<item:cyclic:heart>, "nether");  // Heart Container
ItemStages.restrict(<item:aether:hellfire_slab>, "nether");  // Hellfire Slab
ItemStages.restrict(<item:aether:hellfire_stairs>, "nether");  // Hellfire Stairs
ItemStages.restrict(<item:aether:hellfire_stone>, "nether");  // Hellfire Stone
ItemStages.restrict(<item:aether:hellfire_wall>, "nether");  // Hellfire Wall
ItemStages.restrict(<item:aether:holiday_leaves>, "nether");  // Holiday Leaves
ItemStages.restrict(<item:aether:holy_sword>, "nether");  // Holy Sword
ItemStages.restrict(<item:aether:holystone>, "nether");  // Holystone
ItemStages.restrict(<item:aether:holystone_brick_slab>, "nether");  // Holystone Brick Slab
ItemStages.restrict(<item:aether:holystone_brick_stairs>, "nether");  // Holystone Brick Stairs
ItemStages.restrict(<item:aether:holystone_brick_wall>, "nether");  // Holystone Brick Wall
ItemStages.restrict(<item:aether:holystone_button>, "nether");  // Holystone Button
ItemStages.restrict(<item:aether:holystone_pressure_plate>, "nether");  // Holystone Pressure Plate
ItemStages.restrict(<item:aether:holystone_slab>, "nether");  // Holystone Slab
ItemStages.restrict(<item:aether:holystone_stairs>, "nether");  // Holystone Stairs
ItemStages.restrict(<item:aether:holystone_wall>, "nether");  // Holystone Wall
ItemStages.restrict(<item:aether:ice_pendant>, "nether");  // Ice Pendant
ItemStages.restrict(<item:aether:ice_ring>, "nether");  // Ice Ring
ItemStages.restrict(<item:aether:icestone>, "nether");  // Icestone
ItemStages.restrict(<item:aether:incubator>, "nether");  // Incubator
// Infinite Battery -> graduated (restage.zs:116); nether add undone.
ItemStages.restrict(<item:cyclic:stirrups_reverse>, "nether");  // Inverted Stirrups
ItemStages.restrict(<item:aether:invisibility_cloak>, "nether");  // Invisibility Cloak
ItemStages.restrict(<item:aether:iron_bubble>, "nether");  // Iron Bubble
ItemStages.restrict(<item:aether:iron_gloves>, "nether");  // Iron Gloves
ItemStages.restrict(<item:aether:iron_pendant>, "nether");  // Iron Pendant
ItemStages.restrict(<item:aether:iron_ring>, "nether");  // Iron Ring
ItemStages.restrict(<item:valoria:iron_spear>, "nether");  // Iron Spear
ItemStages.restrict(<item:cyclic:spikes_iron>, "nether");  // Iron Spikes
// Item Cable -> disabled (GC restage)
ItemStages.restrict(<item:cyclic:collector>, "nether");  // Item Collector
ItemStages.restrict(<item:cyclic:wireless_item>, "nether");  // Item Transfer Node
ItemStages.restrict(<item:cyclic:apple_lapis>, "nether");  // Lapis Apple
ItemStages.restrict(<item:cyclic:lapis_carrot_variant>, "nether");  // Lapis Carrot
ItemStages.restrict(<item:cyclic:laser>, "nether");  // Laser Cell
ItemStages.restrict(<item:aether:leather_gloves>, "nether");  // Leather Gloves
ItemStages.restrict(<item:aether:life_shard>, "nether");  // Life Shard
ItemStages.restrict(<item:aether:light_angelic_stone>, "nether");  // Light Angelic Stone
ItemStages.restrict(<item:aether:light_hellfire_stone>, "nether");  // Light Hellfire Stone
ItemStages.restrict(<item:aether:lightning_knife>, "nether");  // Lightning Knife
ItemStages.restrict(<item:aether:lightning_sword>, "nether");  // Lightning Sword
ItemStages.restrict(<item:smithery:paxel>, "nether");  // Mattock (TC) -> Smithery paxel
ItemStages.restrict(<item:embers:melter>, "nether");  // Melter
ItemStages.restrict(<item:productivebees:milk_bottle>, "nether");  // Milk
ItemStages.restrict(<item:cyclic:magic_net>, "nether");  // Monster Ball
ItemStages.restrict(<item:aether:mossy_holystone>, "nether");  // Mossy Holystone
ItemStages.restrict(<item:aether:mossy_holystone_slab>, "nether");  // Mossy Holystone Slab
ItemStages.restrict(<item:aether:mossy_holystone_stairs>, "nether");  // Mossy Holystone Stairs
ItemStages.restrict(<item:aether:mossy_holystone_wall>, "nether");  // Mossy Holystone Wall
ItemStages.restrict(<item:aether:nature_staff>, "nether");  // Nature Staff
// BAD_ID (removed with TConstruct; no 1.20 necrotic bone equivalent): ItemStages.restrict(<item:tconstruct:necrotic_bone>, "nether");  // Necrotic Bone
ItemStages.restrict(<item:aether:neptune_gloves>, "nether");  // Neptune Gloves
ItemStages.restrict(<item:cyclic:netherbrick_axe>, "nether");  // Nether Axe
// Nether Hoe -> disabled (GC restage)
ItemStages.restrict(<item:cyclic:netherbrick_pickaxe>, "nether");  // Nether Pickaxe
ItemStages.restrict(<item:cyclic:netherbrick_shovel>, "nether");  // Nether Shovel
ItemStages.restrict(<item:minecraft:netherite_scrap>, "nether");  // Netherite Scrap
ItemStages.restrict(<item:aether:obsidian_gloves>, "nether");  // Obsidian Gloves
ItemStages.restrict(<item:cyclic:shears_obsidian>, "nether");  // Obsidian Shears
// Packager -> disabled (GC restage)
ItemStages.restrict(<item:cyclic:peat_fuel>, "nether");  // Peat
ItemStages.restrict(<item:cyclic:beacon>, "nether");  // Pharos Beacon
ItemStages.restrict(<item:aether:phoenix_gloves>, "nether");  // Phoenix Gloves
ItemStages.restrict(<item:aether:pig_slayer>, "nether");  // Pig Slayer
ItemStages.restrict(<item:aether:pillar>, "nether");  // Pillar
ItemStages.restrict(<item:aether:pillar_top>, "nether");  // Pillar Top
ItemStages.restrict(<item:aether:poison_dart>, "nether");  // Poison Dart
ItemStages.restrict(<item:aether:poison_dart_shooter>, "nether");  // Poison Dart Shooter
ItemStages.restrict(<item:cyclic:dropper>, "nether");  // Precise Dropper
ItemStages.restrict(<item:aether:present>, "nether");  // Present
ItemStages.restrict(<item:aether:purple_flower>, "nether");  // Purple Flower
ItemStages.restrict(<item:ae2:quartz_fiber>, "nether");  // Quartz Fiber
ItemStages.restrict(<item:aether:quicksoil>, "nether");  // Quicksoil
ItemStages.restrict(<item:aether:quicksoil_glass>, "nether");  // Quicksoil Glass
ItemStages.restrict(<item:aether:quicksoil_glass_pane>, "nether");  // Quicksoil Glass Pane
ItemStages.restrict(<item:cyclic:laser_cannon>, "nether");  // Rainbow Cannon
ItemStages.restrict(<item:aether:red_cape>, "nether");  // Red Cape
ItemStages.restrict(<item:rehooked:red_hook>, "nether");  // Red Hook
ItemStages.restrict(<item:cyclic:redstone_carrot_speed>, "nether");  // Redstone Carrot
ItemStages.restrict(<item:cyclic:clock>, "nether");  // Redstone Clock
ItemStages.restrict(<item:aether:regeneration_stone>, "nether");  // Regeneration Stone
ItemStages.restrict(<item:cyclic:lever_remote>, "nether");  // Remote Lever
ItemStages.restrict(<item:cyclic:scaffold_replace>, "nether");  // Replaceable Scaffolding
ItemStages.restrict(<item:cyclic:scaffold_responsive>, "nether");  // Responsive Scaffolding
ItemStages.restrict(<item:cyclic:elevation_wand>, "nether");  // Rod of Elevation
// Sandstone Axe -> getting_started (restage.zs:85); nether add undone.
// Sandstone Hoe -> disabled (GC restage)
// Sandstone Pickaxe/Shovel -> getting_started (restage.zs:84,86); nether adds
// undone. These are stage-0 tools in GC.
// Sandstone Sword -> disabled (GC restage)
ItemStages.restrict(<item:cyclic:peat_baked>, "nether");  // Saturated Peat Deposit
ItemStages.restrict(<item:aether:sentry_stone>, "nether");  // Sentry Stone
ItemStages.restrict(<item:aether:shield_of_repulsion>, "nether");  // Shield of Repulsion
ItemStages.restrict(<item:aether:silver_dungeon_key>, "nether");  // Silver Key
ItemStages.restrict(<item:aether:skyroot_bed>, "nether");  // Skyroot Bed
ItemStages.restrict(<item:aether:skyroot_bookshelf>, "nether");  // Skyroot Bookshelf
ItemStages.restrict(<item:aether:skyroot_bucket>, "nether");  // Skyroot Bucket
ItemStages.restrict(<item:aether:skyroot_button>, "nether");  // Skyroot Button
ItemStages.restrict(<item:aether:skyroot_door>, "nether");  // Skyroot Door
ItemStages.restrict(<item:aether:skyroot_fence>, "nether");  // Skyroot Fence
ItemStages.restrict(<item:aether:skyroot_fence_gate>, "nether");  // Skyroot Fence Gate
ItemStages.restrict(<item:aether:skyroot_leaves>, "nether");  // Skyroot Leaves
ItemStages.restrict(<item:aether:skyroot_log>, "nether");  // Skyroot Log
ItemStages.restrict(<item:aether:skyroot_milk_bucket>, "nether");  // Skyroot Milk Bucket
ItemStages.restrict(<item:aether:skyroot_poison_bucket>, "nether");  // Skyroot Poison Bucket
ItemStages.restrict(<item:aether:skyroot_pressure_plate>, "nether");  // Skyroot Pressure Plate
ItemStages.restrict(<item:aether:skyroot_remedy_bucket>, "nether");  // Skyroot Remedy Bucket
ItemStages.restrict(<item:aether:skyroot_sapling>, "nether");  // Skyroot Sapling
ItemStages.restrict(<item:aether:skyroot_sign>, "nether");  // Skyroot Sign
ItemStages.restrict(<item:aether:skyroot_slab>, "nether");  // Skyroot Slab
ItemStages.restrict(<item:aether:skyroot_stairs>, "nether");  // Skyroot Stairs
ItemStages.restrict(<item:aether:skyroot_stick>, "nether");  // Skyroot Stick
ItemStages.restrict(<item:aether:skyroot_trapdoor>, "nether");  // Skyroot Trapdoor
ItemStages.restrict(<item:aether:skyroot_water_bucket>, "nether");  // Skyroot Water Bucket
ItemStages.restrict(<item:cyclic:sleeping_mat>, "nether");  // Sleeping Mat
// Slingshot: GC un-stages it outright (restage.zs:25 removeItemStages) - it is
// ungated in GreedyCraft despite the cyclicmagic mod-wide nether gate.
ItemStages.restrict(<item:cyclic:ender_eye_reuse>, "nether");  // Solid Ender Eye
ItemStages.restrict(<item:cyclic:soulstone>, "nether");  // Soulstone
ItemStages.restrict(<item:cyclic:soundproofing>, "nether");  // Soundproofing
ItemStages.restrict(<item:cyclic:spawn_inspector>, "nether");  // Spawn Detector
ItemStages.restrict(<item:cyclic:spawner_seeker>, "nether");  // Spawner Seeker
ItemStages.restrict(<item:cyclic:charm_speed>, "nether");  // Speed Charm
ItemStages.restrict(<item:valoria:spider_boots>, "nether");  // Spider Boots
ItemStages.restrict(<item:valoria:spider_chestplate>, "nether");  // Spider Chestplate
ItemStages.restrict(<item:valoria:spider_helmet>, "nether");  // Spider Helmet
ItemStages.restrict(<item:valoria:spider_leggings>, "nether");  // Spider Leggings
ItemStages.restrict(<item:cyclic:wand_missile>, "nether");  // Spirit Seeker
// Sprinkler -> disabled (GC restage)
ItemStages.restrict(<item:cyclic:stirrups>, "nether");  // Stirrups
ItemStages.restrict(<item:cyclic:storage_bag>, "nether");  // Storage Bag
// (duplicate altar restrict removed 2026-07-14 — see the fusion_matrix entry)
ItemStages.restrict(<item:aether:sun_altar>, "nether");  // Sun Altar
ItemStages.restrict(<item:aether:swet_ball>, "nether");  // Swet Ball
ItemStages.restrict(<item:aether:swet_cape>, "nether");  // Swet Cape
ItemStages.restrict(<item:cyclic:screen>, "nether");  // Text Projector
ItemStages.restrict(<item:cyclic:ender_torch>, "nether");  // Throwing Torch
ItemStages.restrict(<item:cyclic:torch_launcher>, "nether");  // Torch launcher
ItemStages.restrict(<item:cyclic:trash>, "nether");  // Trash Void
ItemStages.restrict(<item:aether:treasure_chest>, "nether");  // Treasure Chest
ItemStages.restrict(<item:cyclic:scythe_leaves>, "nether");  // Tree Scythe
ItemStages.restrict(<item:doot:trumpet>, "nether");  // Trumpet
ItemStages.restrict(<item:aether:valkyrie_cape>, "nether");  // Valkyrie Cape
ItemStages.restrict(<item:aether:valkyrie_gloves>, "nether");  // Valkyrie Gloves
ItemStages.restrict(<item:aether:valkyrie_lance>, "nether");  // Valkyrie Lance
ItemStages.restrict(<item:soa_additions:valkyrie_nugget>, "nether");  // Valkyrie Metal Nugget
ItemStages.restrict(<item:aether:music_disc_ascending_dawn>, "nether");  // Valkyrie Music Disc
ItemStages.restrict(<item:aether:vampire_blade>, "nether");  // Vampire Blade
ItemStages.restrict(<item:aether:victory_medal>, "nether");  // Victory Medal
ItemStages.restrict(<item:cyclic:glowing_helmet>, "nether");  // Vision Helmet
ItemStages.restrict(<item:cyclic:anvil_void>, "nether");  // Void Anvil
ItemStages.restrict(<item:cyclic:charm_void>, "nether");  // Void Charm
ItemStages.restrict(<item:cyclic:water_candle>, "nether");  // Water Candle
ItemStages.restrict(<item:aether:white_apple>, "nether");  // White Apple
ItemStages.restrict(<item:aether:white_cape>, "nether");  // White Cape
ItemStages.restrict(<item:aether:white_flower>, "nether");  // White Flower
ItemStages.restrict(<item:ae2:wireless_booster>, "nether");  // Wireless Booster
ItemStages.restrict(<item:ae2:wireless_receiver>, "nether");  // Wireless Receiver
ItemStages.restrict(<item:cyclic:workbench>, "nether");  // Workbench
ItemStages.restrict(<item:aether:yellow_cape>, "nether");  // Yellow Cape
ItemStages.restrict(<item:aether:zanite_gemstone>, "nether");  // Zanite Gemstone
ItemStages.restrict(<item:aether:zanite_gloves>, "nether");  // Zanite Gloves
ItemStages.restrict(<item:aether:zanite_ore>, "nether");  // Zanite Ore
ItemStages.restrict(<item:aether:zanite_pendant>, "nether");  // Zanite Pendant
ItemStages.restrict(<item:aether:zanite_ring>, "nether");  // Zanite Ring

// === novice_engineer (parity) ===
ItemStages.restrict(<item:enderio:advanced_item_filter>, "novice_engineer");  // Advanced Item Filter
ItemStages.restrict(<item:enderio:alloy_smelter>, "novice_engineer");  // Alloy Smelter
ItemStages.restrict(<item:enderio:animal_token>, "novice_engineer");  // Animal Token
ItemStages.restrict(<item:enderio:aversion_obelisk>, "novice_engineer");  // Aversion Obelisk
ItemStages.restrict(<item:enderio:basic_capacitor>, "novice_engineer");  // Basic Capacitor
ItemStages.restrict(<item:enderio:basic_capacitor_bank>, "novice_engineer");  // Basic Capacitor Bank
ItemStages.restrict(<item:enderio:basic_fluid_filter>, "novice_engineer");  // Basic Fluid Filter
ItemStages.restrict(<item:enderio:basic_item_filter>, "novice_engineer");  // Basic Item Filter
ItemStages.restrict(<item:enderio:black_paper>, "novice_engineer");  // Black Paper
ItemStages.restrict(<item:enderio:cake_base>, "novice_engineer");  // Cake Base
ItemStages.restrict(<item:enderio:plant_matter_green>, "novice_engineer");  // Clippings and Trimmings
ItemStages.restrict(<item:potionsmaster:coal_powder>, "novice_engineer");  // Coal Powder
ItemStages.restrict(<item:enderio:cold_fire_igniter>, "novice_engineer");  // Cold Fire Igniter
// NAME COLLISION: GC's "Combustion Generator" is enderio:block_combustion_generator
// (novice_engineer); EnderIO 1.20 has only a Stirling Generator. Cyclic's fuel
// generator did not exist in 1.12, so it follows GC's cyclicmagic -> nether
// mod-wide gate (items.zs:763).
ItemStages.restrict(<item:cyclic:generator_fuel>, "nether");  // Combustion Generator (Cyclic)
ItemStages.restrict(<item:enderzoology:concussion_charge>, "novice_engineer");  // Concussion Charge
ItemStages.restrict(<item:enderio:conduit_binder>, "novice_engineer");  // Conduit Binder
ItemStages.restrict(<item:enderio:conduit_binder_composite>, "novice_engineer");  // Conduit Binder Composite
ItemStages.restrict(<item:enderio:conduit_probe>, "novice_engineer");  // Conduit Probe
ItemStages.restrict(<item:enderio:confusing_powder>, "novice_engineer");  // Confusing Powder
ItemStages.restrict(<item:enderio:coordinate_selector>, "novice_engineer");  // Coordinate Selector
ItemStages.restrict(<item:potionsmaster:copper_powder>, "novice_engineer");  // Copper Powder
ItemStages.restrict(<item:enderio:crafter>, "novice_engineer");  // Crafter
ItemStages.restrict(<item:enderio:dark_bimetal_gear>, "novice_engineer");  // Dark Bimetal Gear
ItemStages.restrict(<item:enderio:dark_steel_block>, "novice_engineer");  // Dark Steel Block
ItemStages.restrict(<item:enderio:dark_steel_door>, "novice_engineer");  // Dark Steel Door
ItemStages.restrict(<item:enderio:dark_steel_grinding_ball>, "novice_engineer");  // Dark Steel Grinding Ball
ItemStages.restrict(<item:enderio:dark_steel_ingot>, "novice_engineer");  // Dark Steel Ingot
ItemStages.restrict(<item:enderio:dark_steel_ladder>, "novice_engineer");  // Dark Steel Ladder
ItemStages.restrict(<item:enderio:dark_steel_nugget>, "novice_engineer");  // Dark Steel Nugget
ItemStages.restrict(<item:enderio:dark_steel_trapdoor>, "novice_engineer");  // Dark Steel Trapdoor
ItemStages.restrict(<item:enderio:dense_me_conduit>, "novice_engineer");  // Dense ME Conduit
ItemStages.restrict(<item:enderio:double_layer_capacitor>, "novice_engineer");  // Double-Layer Capacitor
ItemStages.restrict(<item:enderio:electromagnet>, "novice_engineer");  // Electromagnet
ItemStages.restrict(<item:enderio:end_steel_bars>, "novice_engineer");  // End Steel Bars
ItemStages.restrict(<item:enderio:end_steel_block>, "novice_engineer");  // End Steel Block
ItemStages.restrict(<item:enderio:end_steel_grinding_ball>, "novice_engineer");  // End Steel Grinding Ball
ItemStages.restrict(<item:enderio:end_steel_ingot>, "novice_engineer");  // End Steel Ingot
ItemStages.restrict(<item:enderio:end_steel_nugget>, "novice_engineer");  // End Steel Nugget
// (Ender Bow - name collision, see the `disabled` section. GC gates EnderIO's
// End Steel Bow here, which has no 1.20 counterpart.)
ItemStages.restrict(<item:enderzoology:ender_charge>, "novice_engineer");  // Ender Charge
ItemStages.restrict(<item:enderio:ender_crystal>, "novice_engineer");  // Ender Crystal
ItemStages.restrict(<item:enderio:ender_fluid_conduit>, "novice_engineer");  // Ender Fluid Conduit
ItemStages.restrict(<item:enderzoology:ender_fragment>, "novice_engineer");  // Ender Fragment
ItemStages.restrict(<item:enderio:ender_resonator>, "novice_engineer");  // Ender Resonator
ItemStages.restrict(<item:enderio:enderios>, "novice_engineer");  // "Enderios"
ItemStages.restrict(<item:enderio:enderman_head>, "novice_engineer");  // Enderman Head
ItemStages.restrict(<item:enderio:energetic_alloy_block>, "novice_engineer");  // Energetic Alloy Block
ItemStages.restrict(<item:enderio:energetic_alloy_grinding_ball>, "novice_engineer");  // Energetic Alloy Grinding Ball
ItemStages.restrict(<item:enderio:energetic_alloy_ingot>, "novice_engineer");  // Energetic Alloy Ingot
ItemStages.restrict(<item:enderio:energetic_alloy_nugget>, "novice_engineer");  // Energetic Alloy Nugget
ItemStages.restrict(<item:enderio:energized_gear>, "novice_engineer");  // Energized Bimetal Gear
ItemStages.restrict(<item:enderio:energy_conduit>, "novice_engineer");  // Energy Conduit
ItemStages.restrict(<item:enderio:enticing_crystal>, "novice_engineer");  // Enticing Crystal
ItemStages.restrict(<item:enderio:experience_rod>, "novice_engineer");  // Experience Rod
ItemStages.restrict(<item:enderio:flour>, "novice_engineer");  // Flour
ItemStages.restrict(<item:enderio:fluid_conduit>, "novice_engineer");  // Fluid Conduit
ItemStages.restrict(<item:enderio:fluid_tank>, "novice_engineer");  // Fluid Tank
ItemStages.restrict(<item:enderio:frank_n_zombie>, "novice_engineer");  // Frank'N'Zombie
ItemStages.restrict(<item:enderio:glider_wing>, "novice_engineer");  // Glider Wing
ItemStages.restrict(<item:potionsmaster:gold_powder>, "novice_engineer");  // Gold Powder
ItemStages.restrict(<item:enderio:grains_of_infinity>, "novice_engineer");  // Grains of Infinity
ItemStages.restrict(<item:enderio:pulsating_powder>, "novice_engineer");  // Grains of Piezallity
ItemStages.restrict(<item:enderio:prescient_powder>, "novice_engineer");  // Grains of Prescience
ItemStages.restrict(<item:enderio:ender_crystal_powder>, "novice_engineer");  // Grains of the End
ItemStages.restrict(<item:enderio:vibrant_powder>, "novice_engineer");  // Grains of Vibrancy
ItemStages.restrict(<item:enderio:guardian_diode>, "novice_engineer");  // Guardian Diode
ItemStages.restrict(<item:enderio:impulse_hopper>, "novice_engineer");  // Impulse Hopper
ItemStages.restrict(<item:enderio:industrial_insulation_block>, "novice_engineer");  // Industrial Insulation
ItemStages.restrict(<item:enderio:iron_gear>, "novice_engineer");  // Infinity Bimetal Gear
ItemStages.restrict(<item:enderio:infinity_rod>, "novice_engineer");  // Infinity Rod
ItemStages.restrict(<item:potionsmaster:iron_powder>, "novice_engineer");  // Iron Powder
ItemStages.restrict(<item:enderio:item_conduit>, "novice_engineer");  // Item Conduit
ItemStages.restrict(<item:potionsmaster:lapis_powder>, "novice_engineer");  // Lapis Lazuli Powder
ItemStages.restrict(<item:enderio:light>, "novice_engineer");  // Light
ItemStages.restrict(<item:enderio:light_inverted>, "novice_engineer");  // Light (Inverted)
ItemStages.restrict(<item:enderio:me_conduit>, "novice_engineer");  // ME Conduit
// NAME COLLISION: GC's novice_engineer "Mod Item Filter" is
// enderio:item_mod_item_filter (no 1.20 counterpart). The Blood Magic filter of
// the same name is gated at novice_wizard, where GC puts it.
ItemStages.restrict(<item:enderio:monster_token>, "novice_engineer");  // Monster Token
ItemStages.restrict(<item:enderio:nethercotta>, "novice_engineer");  // Nethercotta
ItemStages.restrict(<item:enderio:nutritious_stick>, "novice_engineer");  // Nutritious Stick
ItemStages.restrict(<item:enderio:octadic_capacitor>, "novice_engineer");  // Octadic Capacitor
ItemStages.restrict(<item:enderio:organic_black_dye>, "novice_engineer");  // Organic Black Dye
ItemStages.restrict(<item:enderio:organic_brown_dye>, "novice_engineer");  // Organic Brown Dye
ItemStages.restrict(<item:enderio:organic_green_dye>, "novice_engineer");  // Organic Green Dye
ItemStages.restrict(<item:enderzoology:owl_egg>, "novice_engineer");  // Owl Egg
ItemStages.restrict(<item:enderio:painting_machine>, "novice_engineer");  // Painting Machine
ItemStages.restrict(<item:enderio:photovoltaic_composite>, "novice_engineer");  // Photovoltaic Composite
ItemStages.restrict(<item:enderio:photovoltaic_plate>, "novice_engineer");  // Photovoltaic Plate
ItemStages.restrict(<item:enderio:player_token>, "novice_engineer");  // Player Token
// NAME COLLISION: GC's "Power Monitor" is enderio:block_power_monitor (no 1.20
// counterpart); RFTools Power is not gated by any GC mod-wide rule.
// Powered Spawner -> disabled (GC restage)
ItemStages.restrict(<item:enderio:prescient_crystal>, "novice_engineer");  // Prescient Crystal
ItemStages.restrict(<item:enderio:pressurized_fluid_conduit>, "novice_engineer");  // Pressurized Fluid Conduit
ItemStages.restrict(<item:enderio:pressurized_fluid_tank>, "novice_engineer");  // Pressurized Fluid Tank
ItemStages.restrict(<item:enderio:pulsating_crystal>, "novice_engineer");  // Pulsating Crystal
ItemStages.restrict(<item:potionsmaster:quartz_powder>, "novice_engineer");  // Quartz Powder
ItemStages.restrict(<item:enderio:redstone_alloy_block>, "novice_engineer");  // Redstone Alloy Block
ItemStages.restrict(<item:enderio:redstone_alloy_grinding_ball>, "novice_engineer");  // Redstone Alloy Grinding Ball
ItemStages.restrict(<item:enderio:redstone_alloy_ingot>, "novice_engineer");  // Redstone Alloy Ingot
ItemStages.restrict(<item:enderio:redstone_alloy_nugget>, "novice_engineer");  // Redstone Alloy Nugget
ItemStages.restrict(<item:enderio:redstone_and_filter>, "novice_engineer");  // Redstone AND Filter
ItemStages.restrict(<item:enderio:redstone_conduit>, "novice_engineer");  // Redstone Conduit
ItemStages.restrict(<item:enderio:redstone_counting_filter>, "novice_engineer");  // Redstone Counting Filter
ItemStages.restrict(<item:enderio:redstone_filter_base>, "novice_engineer");  // Redstone Filter Base
ItemStages.restrict(<item:enderio:redstone_nand_filter>, "novice_engineer");  // Redstone NAND Filter
ItemStages.restrict(<item:enderio:redstone_nor_filter>, "novice_engineer");  // Redstone NOR Filter
ItemStages.restrict(<item:enderio:redstone_not_filter>, "novice_engineer");  // Redstone NOT Filter
ItemStages.restrict(<item:enderio:redstone_or_filter>, "novice_engineer");  // Redstone OR Filter
ItemStages.restrict(<item:enderio:redstone_sensor_filter>, "novice_engineer");  // Redstone Sensor Filter
ItemStages.restrict(<item:enderio:redstone_timer_filter>, "novice_engineer");  // Redstone Timer Filter
ItemStages.restrict(<item:enderio:redstone_xnor_filter>, "novice_engineer");  // Redstone XNOR Filter
ItemStages.restrict(<item:enderio:redstone_xor_filter>, "novice_engineer");  // Redstone XOR Filter
ItemStages.restrict(<item:enderio:sag_mill>, "novice_engineer");  // SAG Mill
ItemStages.restrict(<item:enderio:sentient_ender>, "novice_engineer");  // Sentient Ender
ItemStages.restrict(<item:enderio:silicon>, "novice_engineer");  // Silicon
ItemStages.restrict(<item:enderio:skeletal_contractor>, "novice_engineer");  // Skeletal Contractor
ItemStages.restrict(<item:enderio:slice_and_splice>, "novice_engineer");  // Slice'N'Splice
ItemStages.restrict(<item:enderio:soul_binder>, "novice_engineer");  // Soul Binder
ItemStages.restrict(<item:enderio:soul_powder>, "novice_engineer");  // Soul Powder
ItemStages.restrict(<item:enderio:soularium_block>, "novice_engineer");  // Soularium Block
ItemStages.restrict(<item:enderio:soularium_grinding_ball>, "novice_engineer");  // Soularium Grinding Ball
ItemStages.restrict(<item:enderio:soularium_ingot>, "novice_engineer");  // Soularium Ingot
ItemStages.restrict(<item:enderio:soularium_nugget>, "novice_engineer");  // Soularium Nugget
ItemStages.restrict(<item:enderio:soularium_pressure_plate>, "novice_engineer");  // Soularium Pressure Plate
ItemStages.restrict(<item:enderio:staff_of_levity>, "novice_engineer");  // Staff of Levity
ItemStages.restrict(<item:enderio:stirling_generator>, "novice_engineer");  // Stirling Generator
// Stone Compound Gear -> disabled (GC restage)
ItemStages.restrict(<item:potionsmaster:tin_powder>, "novice_engineer");  // Tin Powder
ItemStages.restrict(<item:enderio:travel_anchor>, "novice_engineer");  // Travel Anchor
ItemStages.restrict(<item:enderio:plant_matter_brown>, "novice_engineer");  // Twigs and Prunings
ItemStages.restrict(<item:enderio:vacuum_chest>, "novice_engineer");  // Vacuum Chest
ItemStages.restrict(<item:enderio:vibrant_alloy_block>, "novice_engineer");  // Vibrant Alloy Block
ItemStages.restrict(<item:enderio:vibrant_alloy_grinding_ball>, "novice_engineer");  // Vibrant Alloy Grinding Ball
ItemStages.restrict(<item:enderio:vibrant_alloy_ingot>, "novice_engineer");  // Vibrant Alloy Ingot
ItemStages.restrict(<item:enderio:vibrant_alloy_nugget>, "novice_engineer");  // Vibrant Alloy Nugget
ItemStages.restrict(<item:enderio:vibrant_gear>, "novice_engineer");  // Vibrant Bimetal Gear
ItemStages.restrict(<item:enderio:vibrant_capacitor_bank>, "novice_engineer");  // Vibrant Capacitor Bank
ItemStages.restrict(<item:enderio:vibrant_crystal>, "novice_engineer");  // Vibrant Crystal
ItemStages.restrict(<item:enderio:weather_crystal>, "novice_engineer");  // Weather Crystal
ItemStages.restrict(<item:enderio:wired_charger>, "novice_engineer");  // Wired Charger
ItemStages.restrict(<item:enderzoology:withering_dust>, "novice_engineer");  // Withering Dust
// Wooden Gear -> disabled (GC restage)
ItemStages.restrict(<item:enderio:xp_vacuum>, "novice_engineer");  // XP Vacuum
ItemStages.restrict(<item:enderio:yeta_wrench>, "novice_engineer");  // Yeta Wrench
ItemStages.restrict(<item:enderio:z_logic_controller>, "novice_engineer");  // Z-Logic Controller
ItemStages.restrict(<item:enderio:zombie_electrode>, "novice_engineer");  // Zombie Electrode

// === novice_wizard (parity) ===
ItemStages.restrict(<item:bloodmagic:accelerationrune>, "novice_wizard");  // Acceleration Rune
ItemStages.restrict(<item:bloodmagic:reagentair>, "novice_wizard");  // Air Reagent
ItemStages.restrict(<item:bloodmagic:airsigil>, "novice_wizard");  // Air Sigil
ItemStages.restrict(<item:bloodmagic:alchemytable>, "novice_wizard");  // Alchemy Table
ItemStages.restrict(<item:bloodarsenal:altare_aenigmatica>, "novice_wizard");  // Altare Aenigmatica
ItemStages.restrict(<item:bloodmagic:arcaneashes>, "novice_wizard");  // Arcane Ashes
ItemStages.restrict(<item:bloodmagic:activationcrystalawakened>, "novice_wizard");  // Awakened Activation Crystal
ItemStages.restrict(<item:bloodmagic:basiccuttingfluid>, "novice_wizard");  // Basic Cutting Fluid
ItemStages.restrict(<item:bloodmagic:reagentbinding>, "novice_wizard");  // Binding Reagent
ItemStages.restrict(<item:bloodmagic:blankrune>, "novice_wizard");  // Blank Rune
ItemStages.restrict(<item:bloodmagic:blankslate>, "novice_wizard");  // Blank Slate
ItemStages.restrict(<item:bloodmagic:altar>, "novice_wizard");  // Blood Altar
ItemStages.restrict(<item:bloodarsenal:blood_capacitor>, "novice_wizard");  // Blood Capacitor
ItemStages.restrict(<item:bloodarsenal:blood_diamond>, "novice_wizard");  // Blood Diamond
ItemStages.restrict(<item:bloodarsenal:blood_infused_glowstone>, "novice_wizard");  // Blood Infused Glowstone
ItemStages.restrict(<item:bloodarsenal:blood_infused_glowstone_dust>, "novice_wizard");  // Blood Infused Glowstone Dust
ItemStages.restrict(<item:bloodarsenal:blood_infused_iron_axe>, "novice_wizard");  // Blood Infused Iron Axe
ItemStages.restrict(<item:bloodarsenal:blood_infused_iron_block>, "novice_wizard");  // Blood Infused Iron Block
ItemStages.restrict(<item:bloodarsenal:blood_infused_iron_ingot>, "novice_wizard");  // Blood Infused Iron Ingot
ItemStages.restrict(<item:bloodarsenal:blood_infused_iron_pickaxe>, "novice_wizard");  // Blood Infused Iron Pickaxe
ItemStages.restrict(<item:bloodarsenal:blood_infused_iron_shovel>, "novice_wizard");  // Blood Infused Iron Shovel
ItemStages.restrict(<item:bloodarsenal:blood_infused_iron_sickle>, "novice_wizard");  // Blood Infused Iron Sickle
ItemStages.restrict(<item:bloodarsenal:blood_infused_iron_sword>, "novice_wizard");  // Blood Infused Iron Sword
ItemStages.restrict(<item:bloodarsenal:blood_infused_stick>, "novice_wizard");  // Blood Infused Stick
ItemStages.restrict(<item:bloodarsenal:blood_infused_wooden_axe>, "novice_wizard");  // Blood Infused Wooden Axe
ItemStages.restrict(<item:bloodarsenal:blood_infused_wooden_pickaxe>, "novice_wizard");  // Blood Infused Wooden Pickaxe
ItemStages.restrict(<item:bloodarsenal:blood_infused_wooden_shovel>, "novice_wizard");  // Blood Infused Wooden Shovel
ItemStages.restrict(<item:bloodarsenal:blood_infused_wooden_sickle>, "novice_wizard");  // Blood Infused Wooden Sickle
ItemStages.restrict(<item:bloodarsenal:blood_infused_wooden_sword>, "novice_wizard");  // Blood Infused Wooden Sword
ItemStages.restrict(<item:bloodmagic:reagentbloodlight>, "novice_wizard");  // Blood Lamp Reagent
ItemStages.restrict(<item:bloodarsenal:blood_orange>, "novice_wizard");  // Blood Orange
ItemStages.restrict(<item:bloodarsenal:blood_stained_glass>, "novice_wizard");  // Blood Stained Glass
ItemStages.restrict(<item:bloodarsenal:blood_stained_glass_pane>, "novice_wizard");  // Blood Stained Glass Pane
ItemStages.restrict(<item:bloodarsenal:blood_torch>, "novice_wizard");  // Blood Torch
ItemStages.restrict(<item:bloodmagic:bloodstonebrick>, "novice_wizard");  // Bloodstone Brick
ItemStages.restrict(<item:bloodarsenal:bound_igniter>, "novice_wizard");  // Bound Igniter
ItemStages.restrict(<item:bloodarsenal:bound_shears>, "novice_wizard");  // Bound Shears
ItemStages.restrict(<item:bloodarsenal:bound_stick>, "novice_wizard");  // Bound Stick
ItemStages.restrict(<item:bloodmagic:chargingrune>, "novice_wizard");  // Charging Rune
ItemStages.restrict(<item:bloodmagic:coalsand>, "novice_wizard");  // Coal Sand
ItemStages.restrict(<item:bloodarsenal:soul_pendant_common>, "novice_wizard");  // Common Soul Pendant
ItemStages.restrict(<item:bloodmagic:soulgemcommon>, "novice_wizard");  // Common Tartaric Gem
ItemStages.restrict(<item:bloodmagic:dungeon_eye_corrosive>, "novice_wizard");  // Corrosive Demon Eye
ItemStages.restrict(<item:bloodmagic:corrosivecrystal>, "novice_wizard");  // Corrosive Will Crystal
ItemStages.restrict(<item:bloodmagic:activationcrystalcreative>, "novice_wizard");  // Creative Activation Crystal
ItemStages.restrict(<item:bloodmagic:daggerofsacrifice>, "novice_wizard");  // Dagger of Sacrifice
ItemStages.restrict(<item:bloodmagic:demoncrucible>, "novice_wizard");  // Demon Crucible
ItemStages.restrict(<item:bloodmagic:demoncrystallizer>, "novice_wizard");  // Demon Crystallizer
ItemStages.restrict(<item:bloodmagic:demonpylon>, "novice_wizard");  // Demon Pylon
ItemStages.restrict(<item:bloodmagic:demonwillgauge>, "novice_wizard");  // Demon Will Aura Gauge
ItemStages.restrict(<item:bloodmagic:defaultcrystal>, "novice_wizard");  // Demon Will Crystal
ItemStages.restrict(<item:bloodmagic:demonslate>, "novice_wizard");  // Demonic Slate
ItemStages.restrict(<item:bloodmagic:dungeon_eye_destructive>, "novice_wizard");  // Destructive Demon Eye
ItemStages.restrict(<item:bloodmagic:destructivecrystal>, "novice_wizard");  // Destructive Will Crystal
ItemStages.restrict(<item:bloodmagic:dislocationrune>, "novice_wizard");  // Displacement Rune
ItemStages.restrict(<item:bloodmagic:divinationsigil>, "novice_wizard");  // Divination Sigil
ItemStages.restrict(<item:bloodarsenal:sigil_ender>, "novice_wizard");  // Ender Sigil
ItemStages.restrict(<item:bloodmagic:enhancedteleposerfocus>, "novice_wizard");  // Enhanced Teleposition Focus
ItemStages.restrict(<item:bloodmagic:etherealslate>, "novice_wizard");  // Ethereal Slate
ItemStages.restrict(<item:bloodmagic:explosivepowder>, "novice_wizard");  // Explosive Powder
ItemStages.restrict(<item:thermal:fluid_filter_augment>, "novice_wizard");  // Fluid Filter
ItemStages.restrict(<item:bloodmagic:reagentfrost>, "novice_wizard");  // Frost Reagent
ItemStages.restrict(<item:bloodarsenal:glass_dagger_of_sacrifice>, "novice_wizard");  // Glass Dagger of Sacrifice
ItemStages.restrict(<item:bloodarsenal:glass_sacrificial_dagger>, "novice_wizard");  // Glass Sacrificial Dagger
ItemStages.restrict(<item:bloodarsenal:glass_shards>, "novice_wizard");  // Glass Shards
ItemStages.restrict(<item:bloodmagic:goldsand>, "novice_wizard");  // Gold Sand
ItemStages.restrict(<item:bloodarsenal:soul_pendant_grand>, "novice_wizard");  // Grand Soul Pendant
ItemStages.restrict(<item:bloodarsenal:soul_pendant_greater>, "novice_wizard");  // Greater Soul Pendant
ItemStages.restrict(<item:bloodmagic:soulgemgreater>, "novice_wizard");  // Greater Tartaric Gem
ItemStages.restrict(<item:bloodmagic:reagentgrowth>, "novice_wizard");  // Growth Reagent
ItemStages.restrict(<item:bloodmagic:soulforge>, "novice_wizard");  // Hellfire Forge
ItemStages.restrict(<item:bloodmagic:reagentholding>, "novice_wizard");  // Holding Reagent
ItemStages.restrict(<item:bloodmagic:infusedslate>, "novice_wizard");  // Imbued Slate
ItemStages.restrict(<item:bloodmagic:incensealtar>, "novice_wizard");  // Incense Altar
ItemStages.restrict(<item:bloodarsenal:blood_diamond_inert>, "novice_wizard");  // Inert Blood Diamond
ItemStages.restrict(<item:bloodmagic:inputroutingnode>, "novice_wizard");  // Input Routing Node
ItemStages.restrict(<item:bloodmagic:ironsand>, "novice_wizard");  // Iron Sand
ItemStages.restrict(<item:bloodmagic:lavacrystal>, "novice_wizard");  // Lava Crystal
ItemStages.restrict(<item:bloodmagic:reagentlava>, "novice_wizard");  // Lava Reagent
ItemStages.restrict(<item:bloodmagic:lavasigil>, "novice_wizard");  // Lava Sigil
ItemStages.restrict(<item:bloodarsenal:soul_pendant_lesser>, "novice_wizard");  // Lesser Soul Pendant
ItemStages.restrict(<item:bloodmagic:soulgemlesser>, "novice_wizard");  // Lesser Tartaric Gem
ItemStages.restrict(<item:bloodarsenal:sigil_lightning>, "novice_wizard");  // Lightning Sigil
ItemStages.restrict(<item:bloodmagic:upgradetrainer>, "novice_wizard");  // Living Armour Training Bracelet
// Living armour set -> disabled (GC restages all four there)
ItemStages.restrict(<item:bloodmagic:reagentmagnetism>, "novice_wizard");  // Magnetism Reagent
ItemStages.restrict(<item:bloodmagic:masterritualstone>, "novice_wizard");  // Master Ritual Stone
ItemStages.restrict(<item:bloodmagic:masterroutingnode>, "novice_wizard");  // Master Routing Node
ItemStages.restrict(<item:bloodmagic:reagentfastminer>, "novice_wizard");  // Mining Reagent
ItemStages.restrict(<item:bloodmagic:itemrouterfiltermoditems>, "novice_wizard");  // Mod Item Filter
ItemStages.restrict(<item:bloodmagic:noderouter>, "novice_wizard");  // Node Router
ItemStages.restrict(<item:bloodmagic:outputroutingnode>, "novice_wizard");  // Output Routing Node
ItemStages.restrict(<item:bloodarsenal:soul_pendant_petty>, "novice_wizard");  // Petty Soul Pendant
ItemStages.restrict(<item:bloodmagic:soulgempetty>, "novice_wizard");  // Petty Tartaric Gem
ItemStages.restrict(<item:bloodmagic:plantoil>, "novice_wizard");  // Plant Oil
ItemStages.restrict(<item:ars_nouveau:potion_flask>, "novice_wizard");  // Potion Flask
ItemStages.restrict(<item:chisel:raw/stone>, "novice_wizard");  // Raw Stone
ItemStages.restrict(<item:bloodmagic:reinforcedslate>, "novice_wizard");  // Reinforced Slate
ItemStages.restrict(<item:bloodmagic:reinforcedteleposerfocus>, "novice_wizard");  // Reinforced Teleposition Focus
ItemStages.restrict(<item:bloodmagic:ritualdiviner>, "novice_wizard");  // Ritual Diviner
ItemStages.restrict(<item:bloodmagic:ritualdivinerdusk>, "novice_wizard");  // Ritual Diviner [Dusk]
ItemStages.restrict(<item:bloodmagic:ritualstone>, "novice_wizard");  // Ritual Stone
ItemStages.restrict(<item:bloodmagic:ritualtinkerer>, "novice_wizard");  // Ritual Tinkerer
ItemStages.restrict(<item:bloodmagic:itemroutingnode>, "novice_wizard");  // Routing Node
ItemStages.restrict(<item:bloodmagic:bettercapacityrune>, "novice_wizard");  // Rune of Augmented Capacity
ItemStages.restrict(<item:bloodmagic:altarcapacityrune>, "novice_wizard");  // Rune of Capacity
ItemStages.restrict(<item:bloodmagic:sacrificerune>, "novice_wizard");  // Rune of Sacrifice
ItemStages.restrict(<item:bloodmagic:selfsacrificerune>, "novice_wizard");  // Rune of Self Sacrifice
ItemStages.restrict(<item:bloodmagic:orbcapacityrune>, "novice_wizard");  // Rune of the Orb
ItemStages.restrict(<item:bloodmagic:saltpeter>, "novice_wizard");  // Saltpeter
ItemStages.restrict(<item:bloodmagic:seersigil>, "novice_wizard");  // Seer's Sigil
ItemStages.restrict(<item:bloodmagic:soulaxe>, "novice_wizard");  // Sentient Axe
ItemStages.restrict(<item:bloodmagic:soulpickaxe>, "novice_wizard");  // Sentient Pickaxe
ItemStages.restrict(<item:bloodmagic:soulshovel>, "novice_wizard");  // Sentient Shovel
ItemStages.restrict(<item:bloodmagic:soulsword>, "novice_wizard");  // Sentient Sword
ItemStages.restrict(<item:bloodmagic:reagentsight>, "novice_wizard");  // Sight Reagent
ItemStages.restrict(<item:bloodmagic:sigilofholding>, "novice_wizard");  // Sigil of Holding
ItemStages.restrict(<item:bloodmagic:sigilofmagnetism>, "novice_wizard");  // Sigil of Magnetism
ItemStages.restrict(<item:bloodmagic:sigilofsuppression>, "novice_wizard");  // Sigil of Suppression
ItemStages.restrict(<item:bloodmagic:bloodlightsigil>, "novice_wizard");  // Sigil of the Blood Lamp
ItemStages.restrict(<item:bloodmagic:miningsigil>, "novice_wizard");  // Sigil of the Fast Miner
ItemStages.restrict(<item:bloodmagic:growthsigil>, "novice_wizard");  // Sigil of the Green Grove
ItemStages.restrict(<item:bloodmagic:speedrune>, "novice_wizard");  // Speed Rune
ItemStages.restrict(<item:bloodmagic:dungeon_eye_steadfast>, "novice_wizard");  // Steadfast Demon Eye
ItemStages.restrict(<item:bloodmagic:steadfastcrystal>, "novice_wizard");  // Steadfast Will Crystal
ItemStages.restrict(<item:bloodmagic:sulfur>, "novice_wizard");  // Sulfur
ItemStages.restrict(<item:bloodmagic:reagentsuppression>, "novice_wizard");  // Suppression Reagent
ItemStages.restrict(<item:bloodmagic:teleposer>, "novice_wizard");  // Teleposer
ItemStages.restrict(<item:bloodmagic:teleposerfocus>, "novice_wizard");  // Teleposition Focus
ItemStages.restrict(<item:bloodmagic:reagentteleposition>, "novice_wizard");  // Teleposition Reagent
ItemStages.restrict(<item:bloodmagic:telepositionsigil>, "novice_wizard");  // Teleposition Sigil
ItemStages.restrict(<item:soa_additions:thaumium_ingot>, "novice_wizard");  // Thaumium Ingot
ItemStages.restrict(<item:bloodmagic:obsidiantilepath>, "novice_wizard");  // Tiled Obsidian Path
ItemStages.restrict(<item:bloodmagic:stonetilepath>, "novice_wizard");  // Tiled Stone Path
ItemStages.restrict(<item:bloodmagic:woodtilepath>, "novice_wizard");  // Tiled Wooden Path
ItemStages.restrict(<item:bloodmagic:wornstonetilepath>, "novice_wizard");  // Tiled Worn Stone Path
ItemStages.restrict(<item:bloodmagic:experiencebook>, "novice_wizard");  // Tome of Peritia
ItemStages.restrict(<item:bloodarsenal:vampire_ring>, "novice_wizard");  // Vampire Ring
ItemStages.restrict(<item:bloodmagic:dungeon_eye_vengeful>, "novice_wizard");  // Vengeful Demon Eye
ItemStages.restrict(<item:bloodmagic:vengefulcrystal>, "novice_wizard");  // Vengeful Will Crystal
ItemStages.restrict(<item:bloodmagic:reagentvoid>, "novice_wizard");  // Void Reagent
ItemStages.restrict(<item:bloodmagic:voidsigil>, "novice_wizard");  // Void Sigil
ItemStages.restrict(<item:bloodarsenal:warp_blade>, "novice_wizard");  // Warp Blade
ItemStages.restrict(<item:bloodmagic:reagentwater>, "novice_wizard");  // Water Reagent
ItemStages.restrict(<item:bloodmagic:watersigil>, "novice_wizard");  // Water Sigil
ItemStages.restrict(<item:bloodmagic:activationcrystalweak>, "novice_wizard");  // Weak Activation Crystal
ItemStages.restrict(<item:bloodmagic:weakbloodshard>, "novice_wizard");  // Weak Blood Shard
ItemStages.restrict(<item:bloodmagic:woodbrickpath>, "novice_wizard");  // Wooden Path

// === skilled_engineer (parity) ===
ItemStages.restrict(<item:mekanism:advanced_control_circuit>, "skilled_engineer");  // Advanced Control Circuit
ItemStages.restrict(<item:mekanismgenerators:advanced_solar_generator>, "skilled_engineer");  // Advanced Solar Generator
ItemStages.restrict(<item:mekanism:advanced_tier_installer>, "skilled_engineer");  // Advanced Tier Installer
ItemStages.restrict(<item:mekanism:upgrade_anchor>, "skilled_engineer");  // Anchor Upgrade
ItemStages.restrict(<item:bigreactors:anglesite_ore>, "skilled_engineer");  // Anglesite Ore
// Armored Jetpack -> disabled (GC restage)
// Atomic Alloy -> master_engineer (restage.zs:73, <ore:alloyUltimate>).
ItemStages.restrict(<item:mekanism:atomic_disassembler>, "skilled_engineer");  // Atomic Disassembler
ItemStages.restrict(<item:mekanism:basic_control_circuit>, "skilled_engineer");  // Basic Control Circuit
ItemStages.restrict(<item:mekanism:basic_tier_installer>, "skilled_engineer");  // Basic Tier Installer
ItemStages.restrict(<item:bigreactors:benitoite_ore>, "skilled_engineer");  // Benitoite Ore
ItemStages.restrict(<item:mekanism:bio_fuel>, "skilled_engineer");  // Bio Fuel
ItemStages.restrict(<item:mekanismgenerators:bio_generator>, "skilled_engineer");  // Bio-Generator
ItemStages.restrict(<item:mekanism:boiler_casing>, "skilled_engineer");  // Boiler Casing
ItemStages.restrict(<item:mekanism:boiler_valve>, "skilled_engineer");  // Boiler Valve
ItemStages.restrict(<item:mekanism:bounding_block>, "skilled_engineer");  // Bounding Block
ItemStages.restrict(<item:mekanism:block_bronze>, "skilled_engineer");  // Bronze Block
ItemStages.restrict(<item:mekanism:ingot_bronze>, "skilled_engineer");  // Bronze Ingot
ItemStages.restrict(<item:mekanism:nugget_bronze>, "skilled_engineer");  // Bronze Nugget
// Cardboard Box -> disabled (GC restage)
// Charcoal Block: GC un-stages it (restage.zs:42, <mekanism:basicblock:3>).
ItemStages.restrict(<item:mekanism:chargepad>, "skilled_engineer");  // Chargepad
ItemStages.restrict(<item:mekanism:chemical_crystallizer>, "skilled_engineer");  // Chemical Crystallizer
ItemStages.restrict(<item:mekanism:chemical_dissolution_chamber>, "skilled_engineer");  // Chemical Dissolution Chamber
ItemStages.restrict(<item:mekanism:chemical_infuser>, "skilled_engineer");  // Chemical Infuser
ItemStages.restrict(<item:mekanism:chemical_injection_chamber>, "skilled_engineer");  // Chemical Injection Chamber
ItemStages.restrict(<item:mekanism:chemical_oxidizer>, "skilled_engineer");  // Chemical Oxidizer
ItemStages.restrict(<item:mekanism:chemical_washer>, "skilled_engineer");  // Chemical Washer
ItemStages.restrict(<item:mekanism:combiner>, "skilled_engineer");  // Combiner
ItemStages.restrict(<item:prefab:block_compressed_obsidian>, "skilled_engineer");  // Compressed Obsidian
ItemStages.restrict(<item:mekanism:configuration_card>, "skilled_engineer");  // Configuration Card
ItemStages.restrict(<item:mekanism:configurator>, "skilled_engineer");  // Configurator
ItemStages.restrict(<item:mekanism:clump_copper>, "skilled_engineer");  // Copper Clump
ItemStages.restrict(<item:mekanism:crystal_copper>, "skilled_engineer");  // Copper Crystal
ItemStages.restrict(<item:mekanism:dust_copper>, "skilled_engineer");  // Copper Dust
// NOT staged: minecraft:copper_ingot / copper_ore. GC staged Mekanism by modid
// and 1.12 Mekanism shipped its own copper ingot/ore; 1.20 Mekanism uses vanilla
// copper, so the name-match swept vanilla copper behind skilled_engineer. Vanilla
// copper is early-game here (and raw_copper/copper_block were never staged anyway).
ItemStages.restrict(<item:mekanism:shard_copper>, "skilled_engineer");  // Copper Shard
ItemStages.restrict(<item:mekanism:crafting_formula>, "skilled_engineer");  // Crafting Formula
ItemStages.restrict(<item:mekanism:crusher>, "skilled_engineer");  // Crusher
// Diamond Dust: GC un-stages <ore:dustDiamond> outright (restage.zs:24).
ItemStages.restrict(<item:mekanism:dictionary>, "skilled_engineer");  // Dictionary
ItemStages.restrict(<item:mekanism:digital_miner>, "skilled_engineer");  // Digital Miner
ItemStages.restrict(<item:mekanism:dirty_dust_copper>, "skilled_engineer");  // Dirty Copper Dust
ItemStages.restrict(<item:mekanism:dirty_dust_gold>, "skilled_engineer");  // Dirty Gold Dust
ItemStages.restrict(<item:mekanism:dirty_dust_iron>, "skilled_engineer");  // Dirty Iron Dust
ItemStages.restrict(<item:mekanism:dirty_dust_lead>, "skilled_engineer");  // Dirty Lead Dust
ItemStages.restrict(<item:mekanism:dirty_dust_osmium>, "skilled_engineer");  // Dirty Osmium Dust
ItemStages.restrict(<item:jaopca:mekanism_dirty_dusts.silver>, "skilled_engineer");  // Dirty Silver Dust
ItemStages.restrict(<item:mekanism:dirty_dust_tin>, "skilled_engineer");  // Dirty Tin Dust
ItemStages.restrict(<item:mekanism:dynamic_tank>, "skilled_engineer");  // Dynamic Tank
ItemStages.restrict(<item:mekanism:dynamic_valve>, "skilled_engineer");  // Dynamic Valve
ItemStages.restrict(<item:mekanism:electric_bow>, "skilled_engineer");  // Electric Bow
ItemStages.restrict(<item:mekanism:electric_pump>, "skilled_engineer");  // Electric Pump
ItemStages.restrict(<item:mekanism:electrolytic_core>, "skilled_engineer");  // Electrolytic Core
ItemStages.restrict(<item:mekanism:electrolytic_separator>, "skilled_engineer");  // Electrolytic Separator
ItemStages.restrict(<item:mekanismgenerators:electromagnetic_coil>, "skilled_engineer");  // Electromagnetic Coil
ItemStages.restrict(<item:mekanism:elite_control_circuit>, "skilled_engineer");  // Elite Control Circuit
ItemStages.restrict(<item:mekanism:elite_tier_installer>, "skilled_engineer");  // Elite Tier Installer
ItemStages.restrict(<item:mekanism:energized_smelter>, "skilled_engineer");  // Energized Smelter
ItemStages.restrict(<item:mekanism:energy_tablet>, "skilled_engineer");  // Energy Tablet
ItemStages.restrict(<item:mekanism:upgrade_energy>, "skilled_engineer");  // Energy Upgrade
ItemStages.restrict(<item:mekanism:enriched_iron>, "skilled_engineer");  // Enriched Iron
ItemStages.restrict(<item:mekanism:enrichment_chamber>, "skilled_engineer");  // Enrichment Chamber
ItemStages.restrict(<item:mekanism:upgrade_filter>, "skilled_engineer");  // Filter Upgrade
ItemStages.restrict(<item:mekanism:flamethrower>, "skilled_engineer");  // Flamethrower
ItemStages.restrict(<item:mekanism:fluidic_plenisher>, "skilled_engineer");  // Fluidic Plenisher
ItemStages.restrict(<item:mekanism:formulaic_assemblicator>, "skilled_engineer");  // Formulaic Assemblicator
ItemStages.restrict(<item:mekanism:free_runners>, "skilled_engineer");  // Free Runners
ItemStages.restrict(<item:mekanism:fuelwood_heater>, "skilled_engineer");  // Fuelwood Heater
ItemStages.restrict(<item:mekanismgenerators:gas_burning_generator>, "skilled_engineer");  // Gas-Burning Generator
ItemStages.restrict(<item:mekanism:upgrade_gas>, "skilled_engineer");  // Gas Upgrade
ItemStages.restrict(<item:mekanism:gauge_dropper>, "skilled_engineer");  // Gauge Dropper
ItemStages.restrict(<item:mekanism:clump_gold>, "skilled_engineer");  // Gold Clump
ItemStages.restrict(<item:mekanism:crystal_gold>, "skilled_engineer");  // Gold Crystal
ItemStages.restrict(<item:mekanism:dust_gold>, "skilled_engineer");  // Gold Dust
ItemStages.restrict(<item:mekanism:shard_gold>, "skilled_engineer");  // Gold Shard
ItemStages.restrict(<item:cyclic:harvester>, "skilled_engineer");  // Harvester
ItemStages.restrict(<item:mekanism:hdpe_pellet>, "skilled_engineer");  // HDPE Pellet
ItemStages.restrict(<item:mekanism:hdpe_rod>, "skilled_engineer");  // HDPE Rod
ItemStages.restrict(<item:mekanism:hdpe_sheet>, "skilled_engineer");  // HDPE Sheet
ItemStages.restrict(<item:mekanismgenerators:heat_generator>, "skilled_engineer");  // Heat Generator
ItemStages.restrict(<item:mekanismgenerators:hohlraum>, "skilled_engineer");  // Hohlraum
ItemStages.restrict(<item:mekanism:induction_casing>, "skilled_engineer");  // Induction Casing
ItemStages.restrict(<item:mekanism:induction_port>, "skilled_engineer");  // Induction Port
ItemStages.restrict(<item:mekanism:clump_iron>, "skilled_engineer");  // Iron Clump
ItemStages.restrict(<item:mekanism:crystal_iron>, "skilled_engineer");  // Iron Crystal
ItemStages.restrict(<item:mekanism:dust_iron>, "skilled_engineer");  // Iron Dust
ItemStages.restrict(<item:mekanism:shard_iron>, "skilled_engineer");  // Iron Shard
// Jetpack -> disabled (GC restage)
ItemStages.restrict(<item:mekanism:laser>, "skilled_engineer");  // Laser
// Laser Amplifier -> chaotic (restage.zs:66).
ItemStages.restrict(<item:mekanismgenerators:laser_focus_matrix>, "skilled_engineer");  // Laser Focus Matrix
ItemStages.restrict(<item:mekanism:laser_tractor_beam>, "skilled_engineer");  // Laser Tractor Beam
ItemStages.restrict(<item:mekanism:clump_lead>, "skilled_engineer");  // Lead Clump
ItemStages.restrict(<item:mekanism:crystal_lead>, "skilled_engineer");  // Lead Crystal
ItemStages.restrict(<item:mekanism:dust_lead>, "skilled_engineer");  // Lead Dust
ItemStages.restrict(<item:mekanism:shard_lead>, "skilled_engineer");  // Lead Shard
ItemStages.restrict(<item:mekanism:dust_lithium>, "skilled_engineer");  // Lithium Dust
ItemStages.restrict(<item:mekanism:logistical_sorter>, "skilled_engineer");  // Logistical Sorter
ItemStages.restrict(<item:mekanism:metallurgic_infuser>, "skilled_engineer");  // Metallurgic Infuser
ItemStages.restrict(<item:mekanism:upgrade_muffling>, "skilled_engineer");  // Muffling Upgrade
ItemStages.restrict(<item:mekanism:network_reader>, "skilled_engineer");  // Network Reader
ItemStages.restrict(<item:mekanism:dust_obsidian>, "skilled_engineer");  // Obsidian Dust
ItemStages.restrict(<item:mekanism:oredictionificator>, "skilled_engineer");  // Oredictionificator
ItemStages.restrict(<item:mekanism:block_osmium>, "skilled_engineer");  // Osmium Block
ItemStages.restrict(<item:mekanism:clump_osmium>, "skilled_engineer");  // Osmium Clump
ItemStages.restrict(<item:mekanism:osmium_compressor>, "skilled_engineer");  // Osmium Compressor
ItemStages.restrict(<item:mekanism:crystal_osmium>, "skilled_engineer");  // Osmium Crystal
ItemStages.restrict(<item:mekanism:dust_osmium>, "skilled_engineer");  // Osmium Dust
ItemStages.restrict(<item:mekanism:ingot_osmium>, "skilled_engineer");  // Osmium Ingot
ItemStages.restrict(<item:mekanism:nugget_osmium>, "skilled_engineer");  // Osmium Nugget
ItemStages.restrict(<item:mekanism:osmium_ore>, "skilled_engineer");  // Osmium Ore
ItemStages.restrict(<item:mekanism:shard_osmium>, "skilled_engineer");  // Osmium Shard
ItemStages.restrict(<item:mekanism:personal_chest>, "skilled_engineer");  // Personal Chest
ItemStages.restrict(<item:mekanism:hdpe_stick>, "skilled_engineer");  // PlaStick
ItemStages.restrict(<item:mekanism:portable_teleporter>, "skilled_engineer");  // Portable Teleporter
ItemStages.restrict(<item:mekanism:precision_sawmill>, "skilled_engineer");  // Precision Sawmill
ItemStages.restrict(<item:mekanism:pressure_disperser>, "skilled_engineer");  // Pressure Disperser
ItemStages.restrict(<item:mekanism:pressurized_reaction_chamber>, "skilled_engineer");  // Pressurized Reaction Chamber
ItemStages.restrict(<item:mekanism:purification_chamber>, "skilled_engineer");  // Purification Chamber
ItemStages.restrict(<item:mekanism:quantum_entangloporter>, "skilled_engineer");  // Quantum Entangloporter
ItemStages.restrict(<item:mekanismgenerators:reactor_glass>, "skilled_engineer");  // Reactor Glass
ItemStages.restrict(<item:mekanism:block_refined_glowstone>, "skilled_engineer");  // Refined Glowstone
ItemStages.restrict(<item:mekanism:block_refined_obsidian>, "skilled_engineer");  // Refined Obsidian
ItemStages.restrict(<item:mekanism:dust_refined_obsidian>, "skilled_engineer");  // Refined Obsidian Dust
ItemStages.restrict(<item:mekanism:ingot_refined_obsidian>, "skilled_engineer");  // Refined Obsidian Ingot
ItemStages.restrict(<item:mekanism:nugget_refined_obsidian>, "skilled_engineer");  // Refined Obsidian Nugget
ItemStages.restrict(<item:mekanism:alloy_reinforced>, "skilled_engineer");  // Reinforced Alloy
ItemStages.restrict(<item:mekanism:resistive_heater>, "skilled_engineer");  // Resistive Heater
ItemStages.restrict(<item:mekanism:robit>, "skilled_engineer");  // Robit
ItemStages.restrict(<item:mekanism:rotary_condensentrator>, "skilled_engineer");  // Rotary Condensentrator
ItemStages.restrict(<item:mekanismgenerators:rotational_complex>, "skilled_engineer");  // Rotational Complex
// Salt / Salt Block: GC un-stages both (restage.zs:27-28,30).
ItemStages.restrict(<item:mekanismgenerators:saturating_condenser>, "skilled_engineer");  // Saturating Condenser
ItemStages.restrict(<item:mekanism:sawdust>, "skilled_engineer");  // Sawdust
ItemStages.restrict(<item:mekanism:scuba_tank>, "skilled_engineer");  // Scuba Tank
ItemStages.restrict(<item:mekanism:security_desk>, "skilled_engineer");  // Security Desk
ItemStages.restrict(<item:mekanism:seismic_reader>, "skilled_engineer");  // Seismic Reader
ItemStages.restrict(<item:mekanism:seismic_vibrator>, "skilled_engineer");  // Seismic Vibrator
ItemStages.restrict(<item:jaopca:mekanism_clumps.silver>, "skilled_engineer");  // Silver Clump
ItemStages.restrict(<item:jaopca:mekanism_crystals.silver>, "skilled_engineer");  // Silver Crystal
ItemStages.restrict(<item:thermal:silver_dust>, "skilled_engineer");  // Silver Dust
ItemStages.restrict(<item:jaopca:mekanism_shards.silver>, "skilled_engineer");  // Silver Shard
ItemStages.restrict(<item:mekanismgenerators:solar_generator>, "skilled_engineer");  // Solar Generator
ItemStages.restrict(<item:mekanism:solar_neutron_activator>, "skilled_engineer");  // Solar Neutron Activator
ItemStages.restrict(<item:mekanismgenerators:solar_panel>, "skilled_engineer");  // Solar Panel
ItemStages.restrict(<item:mekanism:upgrade_speed>, "skilled_engineer");  // Speed Upgrade
ItemStages.restrict(<item:mekanism:block_steel>, "skilled_engineer");  // Steel Block
ItemStages.restrict(<item:mekanism:steel_casing>, "skilled_engineer");  // Steel Casing
ItemStages.restrict(<item:mekanism:dust_steel>, "skilled_engineer");  // Steel Dust
ItemStages.restrict(<item:mekanism:ingot_steel>, "skilled_engineer");  // Steel Ingot
ItemStages.restrict(<item:mekanism:nugget_steel>, "skilled_engineer");  // Steel Nugget
ItemStages.restrict(<item:mekanism:structural_glass>, "skilled_engineer");  // Structural Glass
ItemStages.restrict(<item:mekanism:substrate>, "skilled_engineer");  // Substrate
ItemStages.restrict(<item:mekanism:dust_sulfur>, "skilled_engineer");  // Sulfur Dust
ItemStages.restrict(<item:mekanism:superheating_element>, "skilled_engineer");  // Superheating Element
ItemStages.restrict(<item:mekanism:teleportation_core>, "skilled_engineer");  // Teleportation Core
ItemStages.restrict(<item:mekanism:teleporter>, "skilled_engineer");  // Teleporter
ItemStages.restrict(<item:mekanism:teleporter_frame>, "skilled_engineer");  // Teleporter Frame
ItemStages.restrict(<item:mekanism:thermal_evaporation_block>, "skilled_engineer");  // Thermal Evaporation Block
ItemStages.restrict(<item:mekanism:thermal_evaporation_controller>, "skilled_engineer");  // Thermal Evaporation Controller
ItemStages.restrict(<item:mekanism:thermal_evaporation_valve>, "skilled_engineer");  // Thermal Evaporation Valve
ItemStages.restrict(<item:mekanism:block_tin>, "skilled_engineer");  // Tin Block
ItemStages.restrict(<item:mekanism:clump_tin>, "skilled_engineer");  // Tin Clump
ItemStages.restrict(<item:mekanism:crystal_tin>, "skilled_engineer");  // Tin Crystal
ItemStages.restrict(<item:mekanism:dust_tin>, "skilled_engineer");  // Tin Dust
ItemStages.restrict(<item:mekanism:ingot_tin>, "skilled_engineer");  // Tin Ingot
ItemStages.restrict(<item:mekanism:nugget_tin>, "skilled_engineer");  // Tin Nugget
ItemStages.restrict(<item:mekanism:tin_ore>, "skilled_engineer");  // Tin Ore
ItemStages.restrict(<item:mekanism:shard_tin>, "skilled_engineer");  // Tin Shard
ItemStages.restrict(<item:mekanismgenerators:turbine_blade>, "skilled_engineer");  // Turbine Blade
ItemStages.restrict(<item:mekanismgenerators:turbine_casing>, "skilled_engineer");  // Turbine Casing
ItemStages.restrict(<item:mekanismgenerators:turbine_rotor>, "skilled_engineer");  // Turbine Rotor
ItemStages.restrict(<item:mekanismgenerators:turbine_valve>, "skilled_engineer");  // Turbine Valve
ItemStages.restrict(<item:mekanismgenerators:turbine_vent>, "skilled_engineer");  // Turbine Vent
// Ultimate Control Circuit -> master_engineer (restage.zs:74, <ore:circuitUltimate>).
ItemStages.restrict(<item:mekanism:ultimate_tier_installer>, "skilled_engineer");  // Ultimate Tier Installer
ItemStages.restrict(<item:mekanismgenerators:wind_generator>, "skilled_engineer");  // Wind Generator

// === wielder_of_infinity (parity) ===
ItemStages.restrict(<item:avaritia:infinity>, "wielder_of_infinity");  // Infinity Block
ItemStages.restrict(<item:avaritia:infinity_boots>, "wielder_of_infinity");  // Infinity Boots
ItemStages.restrict(<item:avaritia:infinity_helmet>, "wielder_of_infinity");  // Infinity Helmet
ItemStages.restrict(<item:avaritia:infinity_ingot>, "wielder_of_infinity");  // Infinity Ingot
ItemStages.restrict(<item:avaritia:infinity_bow>, "wielder_of_infinity");  // Longbow of the Heavens
ItemStages.restrict(<item:avaritia:infinity_axe>, "wielder_of_infinity");  // Nature's Ruin
ItemStages.restrict(<item:avaritia:infinity_shovel>, "wielder_of_infinity");  // Planet Eater
ItemStages.restrict(<item:avaritia:infinity_sword>, "wielder_of_infinity");  // Sword of the Cosmos
ItemStages.restrict(<item:avaritia:infinity_pickaxe>, "wielder_of_infinity");  // World Breaker
ItemStages.restrict(<item:avaritia:infinity_chestplate>, "wielder_of_infinity");  // GC "Infinity Breastplate"
ItemStages.restrict(<item:avaritia:infinity_pants>, "wielder_of_infinity");  // GC "Infinity Leggings"
ItemStages.restrict(<item:avaritia:infinity_hoe>, "wielder_of_infinity");  // Eternal Fertility

// === wyvern (parity) ===
ItemStages.restrict(<item:avaritia:neutron>, "wyvern");  // Neutronium Block
ItemStages.restrict(<item:avaritia:neutron_collector>, "wyvern");  // Neutronium Collector (restage.zs:106)
ItemStages.restrict(<item:avaritia:neutron_ingot>, "wyvern");  // Neutronium Ingot
ItemStages.restrict(<item:avaritia:neutron_nugget>, "wyvern");  // Neutronium Nugget
ItemStages.restrict(<item:avaritia:neutron_pile>, "wyvern");  // Pile of Neutrons

// ============================================================
// parity_score.py gap closure (2026-07-17)
// ============================================================
// direct GC matches previously missed
ItemStages.restrict(<item:valoria:cobalt_ingot>, "nether");            // GC tconstruct:ingots:0 Cobalt Ingot
ItemStages.restrict(<item:aether:altar>, "nether");                    // GC aether_legacy:enchanter Summoning Altar
// GC tinkers_stages.zs materials mitigated at item level
ItemStages.restrict(<item:soa_additions:manyullyn_ingot>, "nether");
ItemStages.restrict(<item:soa_additions:manyullyn_nugget>, "nether");
ItemStages.restrict(<item:rftoolsbase:dimensionalshard>, "nether");    // GC 'dimansional_shard'
// ambiguous-name resolutions: stage every plausible 1.20 candidate
ItemStages.restrict(<item:bloodarsenal:block_blood_burned_string>, "novice_wizard");
ItemStages.restrict(<item:bloodarsenal:glass_shard>, "novice_wizard");
ItemStages.restrict(<item:bloodarsenal:stasis_plate>, "novice_wizard");
ItemStages.restrict(<item:bloodarsenal:stasis_plate_item>, "novice_wizard");
ItemStages.restrict(<item:soa_additions:amber>, "nether");
ItemStages.restrict(<item:valoria:amber_gem>, "nether");
ItemStages.restrict(<item:productivebees:amber>, "nether");
// Pebbles: GC un-stages <ore:rock> outright (restage.zs:22).
ItemStages.restrict(<item:enderio:enchanter>, "nether");
ItemStages.restrict(<item:mysticalagriculture:enchanter>, "nether");
ItemStages.restrict(<item:enderio:clear_glass_d>, "novice_engineer");
ItemStages.restrict(<item:enderio:fused_quartz_d>, "novice_engineer");
ItemStages.restrict(<item:enderio:clear_glass_da>, "novice_engineer");
ItemStages.restrict(<item:enderio:fused_quartz_da>, "novice_engineer");
ItemStages.restrict(<item:enderio:clear_glass_dm>, "novice_engineer");
ItemStages.restrict(<item:enderio:fused_quartz_dm>, "novice_engineer");
ItemStages.restrict(<item:enderio:clear_glass_dna>, "novice_engineer");
ItemStages.restrict(<item:enderio:fused_quartz_dna>, "novice_engineer");
ItemStages.restrict(<item:enderio:clear_glass_dnm>, "novice_engineer");
ItemStages.restrict(<item:enderio:fused_quartz_dnm>, "novice_engineer");
ItemStages.restrict(<item:enderio:clear_glass_dnp>, "novice_engineer");
ItemStages.restrict(<item:enderio:fused_quartz_dnp>, "novice_engineer");
ItemStages.restrict(<item:enderio:clear_glass_dp>, "novice_engineer");
ItemStages.restrict(<item:enderio:fused_quartz_dp>, "novice_engineer");
ItemStages.restrict(<item:enderio:clear_glass_e>, "novice_engineer");
ItemStages.restrict(<item:enderio:fused_quartz_e>, "novice_engineer");
ItemStages.restrict(<item:enderio:clear_glass_ea>, "novice_engineer");
ItemStages.restrict(<item:enderio:fused_quartz_ea>, "novice_engineer");
ItemStages.restrict(<item:enderio:clear_glass_em>, "novice_engineer");
ItemStages.restrict(<item:enderio:fused_quartz_em>, "novice_engineer");
ItemStages.restrict(<item:enderio:clear_glass_ena>, "novice_engineer");
ItemStages.restrict(<item:enderio:fused_quartz_ena>, "novice_engineer");
ItemStages.restrict(<item:enderio:clear_glass_enm>, "novice_engineer");
ItemStages.restrict(<item:enderio:fused_quartz_enm>, "novice_engineer");
ItemStages.restrict(<item:enderio:clear_glass_enp>, "novice_engineer");
ItemStages.restrict(<item:enderio:fused_quartz_enp>, "novice_engineer");
ItemStages.restrict(<item:enderio:clear_glass_ep>, "novice_engineer");
ItemStages.restrict(<item:enderio:fused_quartz_ep>, "novice_engineer");
ItemStages.restrict(<item:enderio:fused_quartz>, "novice_engineer");
ItemStages.restrict(<item:enderio:fused_quartz_a>, "novice_engineer");
ItemStages.restrict(<item:enderio:fused_quartz_m>, "novice_engineer");
ItemStages.restrict(<item:enderio:fused_quartz_na>, "novice_engineer");
ItemStages.restrict(<item:enderio:fused_quartz_nm>, "novice_engineer");
ItemStages.restrict(<item:enderio:fused_quartz_np>, "novice_engineer");
ItemStages.restrict(<item:enderio:fused_quartz_p>, "novice_engineer");
// Copper nuggets deliberately unstaged: GC's only staged "Copper Nugget" was
// mekanism:copper_nugget (staged via the mekanism modid sweep), which no longer
// exists in 1.20 — these bno/create/cyclic/embers/malum/thermal nuggets were
// name-match spillover, same root cause as the vanilla copper ingot/ore above.

// ============================================================
// endrem eye gating (2026-07-17): End Remastered eyes are pillar
// rewards/crafts — staged so structure-loot finds can't skip ahead.
// ============================================================
ItemStages.restrict(<item:endrem:old_eye>, "twilight_shield");
ItemStages.restrict(<item:endrem:black_eye>, "wither_slayer");
ItemStages.restrict(<item:endrem:cold_eye>, "hardmode");
ItemStages.restrict(<item:endrem:corrupted_eye>, "skilled_wizard");
ItemStages.restrict(<item:endrem:cryptic_eye>, "master_wizard");
ItemStages.restrict(<item:endrem:cursed_eye>, "master_wizard");
ItemStages.restrict(<item:endrem:evil_eye>, "zealot");
ItemStages.restrict(<item:endrem:exotic_eye>, "nether");
ItemStages.restrict(<item:endrem:guardian_eye>, "twilight_shield");
ItemStages.restrict(<item:endrem:lost_eye>, "twilight_shield");
ItemStages.restrict(<item:endrem:magical_eye>, "qualified_botanian");
ItemStages.restrict(<item:endrem:nether_eye>, "nether");
ItemStages.restrict(<item:endrem:rogue_eye>, "twilight_shield");
ItemStages.restrict(<item:endrem:undead_eye>, "twilight_shield");
ItemStages.restrict(<item:endrem:witch_eye>, "alchemist");
ItemStages.restrict(<item:endrem:wither_eye>, "wither_slayer");

// ============================================================
// Mod-wide locks (SOA-only, not from GreedyCraft).
// createModRestriction stages EVERY item owned by the mod id;
// individual items cannot be exempted from these.
// Block interaction gating for these namespaces is mirrored in
// kubejs/server_scripts/soa_block_stages.js (regen script parses
// the lines below — keep the exact call format).
// ============================================================

// === nouveau_lock (Ars Nouveau + addons) ===
ItemStages.createModRestriction("ars_nouveau", "nouveau_lock");
ItemStages.createModRestriction("ars_elemental", "nouveau_lock");
ItemStages.createModRestriction("ars_additions", "nouveau_lock");
ItemStages.createModRestriction("ars_technica", "nouveau_lock");     // Ars x Create crossover
ItemStages.createModRestriction("ars_creo", "nouveau_lock");         // Ars x Create crossover
ItemStages.createModRestriction("arseng", "nouveau_lock");           // Ars Energistique (AE2 addon)
ItemStages.createModRestriction("custommachineryars", "nouveau_lock");

// === create_lock (Create + addons) ===
ItemStages.createModRestriction("create", "create_lock");
ItemStages.createModRestriction("createaddition", "create_lock");            // Crafts & Additions
// createfood ("Create: Food", 2517 items) deliberately UNGATED - food/cooking
// content, not Create automation, and gating it locked most of the pack's
// cooking behind create_lock.
ItemStages.createModRestriction("createappliedkinetics", "create_lock");
ItemStages.createModRestriction("sculkcatalyticchamber", "create_lock");     // Create: Abyss Catalysis
ItemStages.createModRestriction("create_jetpack_curios", "create_lock");
ItemStages.createModRestriction("nocubescreateexp", "create_lock");          // Create Compact Exp

// === embers_lock (Embers Rekindled — not in GreedyCraft, gated until quest integration) ===
ItemStages.createModRestriction("embers", "embers_lock");

// === enigmatic_lock (Enigmatic Legacy + addons — gated until quest integration) ===
ItemStages.createModRestriction("enigmaticlegacy", "enigmatic_lock");
ItemStages.createModRestriction("enigmaticaddons", "enigmatic_lock");
// enigmaticdelicacy ("Enigmatic Delicacy", 61 items) deliberately UNGATED -
// food content rather than Enigmatic Legacy's progression items.

// ============================================================
//  GC gap resolution (2026-08-04)
//
//  Items GreedyCraft stages that had no counterpart here. Each was resolved
//  from GC display name -> 1.20 item by lang matching and adversarially
//  verified; ids below are confirmed present in soa_exports/items.json and
//  were not already gated per logs/soa_stage_dump.json.
//
//  Format:  <1.20 id>   // <1.20 name>  <- GC "<name>" <1.12 id>
// ============================================================

// --- awakened (3) ---
ItemStages.restrict(<item:actuallyadditions:bats_wing>, "awakened");  // Bat's Wing  <- GC "bat s wing" actuallyadditions:item_misc:15
ItemStages.restrict(<item:cyclic:chorus_flight>, "awakened");  // Glistering Chorus Fruit  <- GC "glowing chorus fruit" cyclicmagic:glowing_chorus:0
ItemStages.restrict(<item:soa_additions:creative_modifier>, "awakened");  // §dCreative Modifier  <- GC "creative modifier" tconstruct:materials:50

// --- challenger_a (7) ---
ItemStages.restrict(<item:mysticalagriculture:dirt_seeds>, "challenger_a");  // Dirt Seeds  <- GC "dirt seeds" mysticalagriculture:dirt_seeds:0
ItemStages.restrict(<item:mysticalagriculture:ice_seeds>, "challenger_a");  // Ice Seeds  <- GC "ice seeds" mysticalagriculture:ice_seeds:0
ItemStages.restrict(<item:mysticalagriculture:nature_seeds>, "challenger_a");  // Nature Seeds  <- GC "nature seeds" mysticalagriculture:nature_seeds:0
ItemStages.restrict(<item:mysticalagriculture:stone_seeds>, "challenger_a");  // Stone Seeds  <- GC "stone seeds" mysticalagriculture:stone_seeds:0
ItemStages.restrict(<item:mysticalagriculture:water_seeds>, "challenger_a");  // Water Seeds  <- GC "water seeds" mysticalagriculture:water_seeds:0
ItemStages.restrict(<item:mysticalagriculture:wood_seeds>, "challenger_a");  // Wood Seeds  <- GC "wood seeds" mysticalagriculture:wood_seeds:0
ItemStages.restrict(<item:mysticalagriculture:zombie_seeds>, "challenger_a");  // Zombie Seeds  <- GC "zombie seeds" mysticalagriculture:zombie_seeds:0

// --- challenger_b (20) ---
ItemStages.restrict(<item:mysticalagriculture:aluminum_brass_seeds>, "challenger_b");  // Aluminum Brass Seeds  <- GC "aluminum brass seeds" mysticalagriculture:aluminum_brass_seeds:0
ItemStages.restrict(<item:mysticalagriculture:aluminum_seeds>, "challenger_b");  // Aluminum Seeds  <- GC "aluminum seeds" mysticalagriculture:aluminum_seeds:0
ItemStages.restrict(<item:mysticalagriculture:apatite_seeds>, "challenger_b");  // Apatite Seeds  <- GC "apatite seeds" mysticalagriculture:apatite_seeds:0
ItemStages.restrict(<item:mysticalagriculture:basalt_seeds>, "challenger_b");  // Basalt Seeds  <- GC "basalt seeds" mysticalagriculture:basalt_seeds:0
ItemStages.restrict(<item:mysticalagriculture:chicken_seeds>, "challenger_b");  // Chicken Seeds  <- GC "chicken seeds" mysticalagriculture:chicken_seeds:0
ItemStages.restrict(<item:mysticalagriculture:coal_seeds>, "challenger_b");  // Coal Seeds  <- GC "coal seeds" mysticalagriculture:coal_seeds:0
ItemStages.restrict(<item:mysticalagriculture:copper_seeds>, "challenger_b");  // Copper Seeds  <- GC "copper seeds" mysticalagriculture:copper_seeds:0
ItemStages.restrict(<item:mysticalagriculture:cow_seeds>, "challenger_b");  // Cow Seeds  <- GC "cow seeds" mysticalagriculture:cow_seeds:0
ItemStages.restrict(<item:mysticalagriculture:dye_seeds>, "challenger_b");  // Dye Seeds  <- GC "dye seeds" mysticalagriculture:dye_seeds:0
ItemStages.restrict(<item:mysticalagriculture:fire_seeds>, "challenger_b");  // Fire Seeds  <- GC "fire seeds" mysticalagriculture:fire_seeds:0
ItemStages.restrict(<item:mysticalagriculture:grains_of_infinity_seeds>, "challenger_b");  // Grains of Infinity Seeds  <- GC "grains of infinity seeds" mysticalagriculture:grains_of_infinity_seeds:0
ItemStages.restrict(<item:mysticalagriculture:limestone_seeds>, "challenger_b");  // Limestone Seeds  <- GC "limestone seeds" mysticalagriculture:limestone_seeds:0
ItemStages.restrict(<item:mysticalagriculture:marble_seeds>, "challenger_b");  // Marble Seeds  <- GC "marble seeds" mysticalagriculture:marble_seeds:0
ItemStages.restrict(<item:mysticalagriculture:mystical_flower_seeds>, "challenger_b");  // Mystical Flower Seeds  <- GC "mystical flower seeds" mysticalagriculture:mystical_flower_seeds:0
ItemStages.restrict(<item:mysticalagriculture:nether_seeds>, "challenger_b");  // Nether Seeds  <- GC "nether seeds" mysticalagriculture:nether_seeds:0
ItemStages.restrict(<item:mysticalagriculture:pig_seeds>, "challenger_b");  // Pig Seeds  <- GC "pig seeds" mysticalagriculture:pig_seeds:0
ItemStages.restrict(<item:mysticalagriculture:sheep_seeds>, "challenger_b");  // Sheep Seeds  <- GC "sheep seeds" mysticalagriculture:sheep_seeds:0
ItemStages.restrict(<item:mysticalagriculture:silicon_seeds>, "challenger_b");  // Silicon Seeds  <- GC "silicon seeds" mysticalagriculture:silicon_seeds:0
ItemStages.restrict(<item:mysticalagriculture:slime_seeds>, "challenger_b");  // Slime Seeds  <- GC "slime seeds" mysticalagriculture:slime_seeds:0
ItemStages.restrict(<item:mysticalagriculture:sulfur_seeds>, "challenger_b");  // Sulfur Seeds  <- GC "sulfur seeds" mysticalagriculture:sulfur_seeds:0

// --- challenger_c (34) ---
ItemStages.restrict(<item:mysticalagriculture:aquamarine_seeds>, "challenger_c");  // Aquamarine Seeds  <- GC "aquamarine seeds" mysticalagriculture:aquamarine_seeds:0
ItemStages.restrict(<item:mysticalagriculture:ardite_seeds>, "challenger_c");  // Ardite Seeds  <- GC "ardite seeds" mysticalagriculture:ardite_seeds:0
ItemStages.restrict(<item:mysticalagriculture:basalz_seeds>, "challenger_c");  // Basalz Seeds  <- GC "basalz seeds" mysticalagriculture:basalz_seeds:0
ItemStages.restrict(<item:mysticalagriculture:black_quartz_seeds>, "challenger_c");  // Black Quartz Seeds  <- GC "black quartz seeds" jaopca:item_mysticalseedsquartzblack:0
ItemStages.restrict(<item:mysticalagriculture:blitz_seeds>, "challenger_c");  // Blitz Seeds  <- GC "blitz seeds" mysticalagriculture:blitz_seeds:0
ItemStages.restrict(<item:mysticalagriculture:blizz_seeds>, "challenger_c");  // Blizz Seeds  <- GC "blizz seeds" mysticalagriculture:blizz_seeds:0
ItemStages.restrict(<item:mysticalagriculture:brass_seeds>, "challenger_c");  // Brass Seeds  <- GC "brass seeds" mysticalagriculture:brass_seeds:0
ItemStages.restrict(<item:mysticalagriculture:bronze_seeds>, "challenger_c");  // Bronze Seeds  <- GC "bronze seeds" mysticalagriculture:bronze_seeds:0
ItemStages.restrict(<item:mysticalagriculture:cake_seeds>, "challenger_c");  // Cake Seeds  <- GC "cake seeds" mysticalcreations:cake_seeds:0
ItemStages.restrict(<item:mysticalagriculture:certus_quartz_seeds>, "challenger_c");  // Certus Quartz Seeds  <- GC "certus quartz seeds" mysticalagriculture:certus_quartz_seeds:0
ItemStages.restrict(<item:mysticalagriculture:conductive_alloy_seeds>, "challenger_c");  // Conductive Alloy Seeds  <- GC "conductive iron seeds" mysticalagriculture:conductive_iron_seeds:0
ItemStages.restrict(<item:mysticalagriculture:creeper_seeds>, "challenger_c");  // Creeper Seeds  <- GC "creeper seeds" mysticalagriculture:creeper_seeds:0
ItemStages.restrict(<item:mysticalagriculture:ender_biotite_seeds>, "challenger_c");  // Ender Biotite Seeds  <- GC "ender biotite seeds" mysticalagriculture:ender_biotite_seeds:0
ItemStages.restrict(<item:mysticalagriculture:glowstone_seeds>, "challenger_c");  // Glowstone Seeds  <- GC "glowstone seeds" mysticalagriculture:glowstone_seeds:0
ItemStages.restrict(<item:mysticalagriculture:graphite_seeds>, "challenger_c");  // Graphite Seeds  <- GC "graphite seeds" mysticalagriculture:graphite_seeds:0
ItemStages.restrict(<item:mysticalagriculture:guardian_seeds>, "challenger_c");  // Guardian Seeds  <- GC "guardian seeds" mysticalagriculture:guardian_seeds:0
ItemStages.restrict(<item:mysticalagriculture:iron_seeds>, "challenger_c");  // Iron Seeds  <- GC "iron seeds" mysticalagriculture:iron_seeds:0
ItemStages.restrict(<item:mysticalagriculture:ironwood_seeds>, "challenger_c");  // Ironwood Seeds  <- GC "ironwood seeds" mysticalagriculture:ironwood_seeds:0
ItemStages.restrict(<item:mysticalagriculture:knightslime_seeds>, "challenger_c");  // Knightslime Seeds  <- GC "knightslime seeds" mysticalagriculture:knightslime_seeds:0
ItemStages.restrict(<item:mysticalagriculture:lead_seeds>, "challenger_c");  // Lead Seeds  <- GC "lead seeds" mysticalagriculture:lead_seeds:0
ItemStages.restrict(<item:mysticalagriculture:manasteel_seeds>, "challenger_c");  // Manasteel Seeds  <- GC "manasteel seeds" mysticalagriculture:manasteel_seeds:0
ItemStages.restrict(<item:mysticalagriculture:nether_quartz_seeds>, "challenger_c");  // Nether Quartz Seeds  <- GC "nether quartz seeds" mysticalagriculture:nether_quartz_seeds:0
ItemStages.restrict(<item:mysticalagriculture:obsidian_seeds>, "challenger_c");  // Obsidian Seeds  <- GC "obsidian seeds" mysticalagriculture:obsidian_seeds:0
ItemStages.restrict(<item:mysticalagriculture:rabbit_seeds>, "challenger_c");  // Rabbit Seeds  <- GC "rabbit seeds" mysticalagriculture:rabbit_seeds:0
ItemStages.restrict(<item:mysticalagriculture:redstone_alloy_seeds>, "challenger_c");  // Redstone Alloy Seeds  <- GC "redstone alloy seeds" mysticalagriculture:redstone_alloy_seeds:0
ItemStages.restrict(<item:mysticalagriculture:redstone_seeds>, "challenger_c");  // Redstone Seeds  <- GC "redstone seeds" mysticalagriculture:redstone_seeds:0
ItemStages.restrict(<item:mysticalagriculture:saltpeter_seeds>, "challenger_c");  // Saltpeter Seeds  <- GC "saltpeter seeds" mysticalagriculture:saltpeter_seeds:0
ItemStages.restrict(<item:mysticalagriculture:silver_seeds>, "challenger_c");  // Silver Seeds  <- GC "silver seeds" mysticalagriculture:silver_seeds:0
ItemStages.restrict(<item:mysticalagriculture:skeleton_seeds>, "challenger_c");  // Skeleton Seeds  <- GC "skeleton seeds" mysticalagriculture:skeleton_seeds:0
ItemStages.restrict(<item:mysticalagriculture:sky_stone_seeds>, "challenger_c");  // Sky Stone Seeds  <- GC "sky stone seeds" mysticalagriculture:sky_stone_seeds:0
ItemStages.restrict(<item:mysticalagriculture:spider_seeds>, "challenger_c");  // Spider Seeds  <- GC "spider seeds" mysticalagriculture:spider_seeds:0
ItemStages.restrict(<item:mysticalagriculture:steeleaf_seeds>, "challenger_c");  // Steeleaf Seeds  <- GC "steeleaf seeds" mysticalagriculture:steeleaf_seeds:0
ItemStages.restrict(<item:mysticalagriculture:thaumium_seeds>, "challenger_c");  // Thaumium Seeds  <- GC "thaumium seeds" mysticalagriculture:thaumium_seeds:0
ItemStages.restrict(<item:mysticalagriculture:tin_seeds>, "challenger_c");  // Tin Seeds  <- GC "tin seeds" mysticalagriculture:tin_seeds:0

// --- challenger_d (36) ---
ItemStages.restrict(<item:mysticalagriculture:abyssalnite_seeds>, "challenger_d");  // Abyssalnite Seeds  <- GC "abyssalnite seeds" mysticalagriculture:abyssalnite_seeds:0
ItemStages.restrict(<item:mysticalagriculture:alumite_seeds>, "challenger_d");  // Alumite Seeds  <- GC "alumite seeds" mysticalagriculture:alumite_seeds:0
ItemStages.restrict(<item:mysticalagriculture:amber_seeds>, "challenger_d");  // Amber Seeds  <- GC "amber seeds" mysticalagriculture:amber_seeds:0
ItemStages.restrict(<item:mysticalagriculture:blaze_seeds>, "challenger_d");  // Blaze Seeds  <- GC "blaze seeds" mysticalagriculture:blaze_seeds:0
ItemStages.restrict(<item:mysticalagriculture:cobalt_seeds>, "challenger_d");  // Cobalt Seeds  <- GC "cobalt seeds" mysticalagriculture:cobalt_seeds:0
ItemStages.restrict(<item:mysticalagriculture:constantan_seeds>, "challenger_d");  // Constantan Seeds  <- GC "constantan seeds" mysticalagriculture:constantan_seeds:0
ItemStages.restrict(<item:mysticalagriculture:dark_steel_seeds>, "challenger_d");  // Dark Steel Seeds  <- GC "dark steel seeds" mysticalagriculture:dark_steel_seeds:0
ItemStages.restrict(<item:mysticalagriculture:electrum_seeds>, "challenger_d");  // Electrum Seeds  <- GC "electrum seeds" mysticalagriculture:electrum_seeds:0
ItemStages.restrict(<item:mysticalagriculture:elementium_seeds>, "challenger_d");  // Elementium Seeds  <- GC "elementium seeds" mysticalagriculture:elementium_seeds:0
ItemStages.restrict(<item:mysticalagriculture:end_seeds>, "challenger_d");  // End Seeds  <- GC "end seeds" mysticalagriculture:end_seeds:0
ItemStages.restrict(<item:mysticalagriculture:enderman_seeds>, "challenger_d");  // Enderman Seeds  <- GC "enderman seeds" mysticalagriculture:enderman_seeds:0
ItemStages.restrict(<item:mysticalagriculture:energetic_alloy_seeds>, "challenger_d");  // Energetic Alloy Seeds  <- GC "energetic alloy seeds" mysticalagriculture:energetic_alloy_seeds:0
ItemStages.restrict(<item:mysticalagriculture:experience_seeds>, "challenger_d");  // Experience Seeds  <- GC "experience seeds" mysticalagriculture:experience_seeds:0
ItemStages.restrict(<item:mysticalagriculture:fiery_ingot_seeds>, "challenger_d");  // Fiery Ingot Seeds  <- GC "fiery ingot seeds" mysticalagriculture:fiery_ingot_seeds:0
ItemStages.restrict(<item:mysticalagriculture:fluix_seeds>, "challenger_d");  // Fluix Seeds  <- GC "fluix seeds" mysticalagriculture:fluix_seeds:0
ItemStages.restrict(<item:mysticalagriculture:flux_infused_ingot_seeds>, "challenger_d");  // Flux-Infused Ingot Seeds  <- GC "fluxed electrum seeds" mysticalagriculture:fluxed_electrum_seeds:0
ItemStages.restrict(<item:mysticalagriculture:ghast_seeds>, "challenger_d");  // Ghast Seeds  <- GC "ghast seeds" mysticalagriculture:ghast_seeds:0
ItemStages.restrict(<item:mysticalagriculture:gold_seeds>, "challenger_d");  // Gold Seeds  <- GC "gold seeds" mysticalagriculture:gold_seeds:0
ItemStages.restrict(<item:mysticalagriculture:invar_seeds>, "challenger_d");  // Invar Seeds  <- GC "invar seeds" mysticalagriculture:invar_seeds:0
ItemStages.restrict(<item:mysticalagriculture:knightmetal_seeds>, "challenger_d");  // Knightmetal Seeds  <- GC "knightmetal seeds" mysticalagriculture:knightmetal_seeds:0
ItemStages.restrict(<item:mysticalagriculture:lapis_lazuli_seeds>, "challenger_d");  // Lapis Lazuli Seeds  <- GC "lapis lazuli seeds" mysticalagriculture:lapis_lazuli_seeds:0
ItemStages.restrict(<item:mysticalagriculture:lumium_seeds>, "challenger_d");  // Lumium Seeds  <- GC "lumium seeds" mysticalagriculture:lumium_seeds:0
ItemStages.restrict(<item:mysticalagriculture:malachite_seeds>, "challenger_d");  // Malachite Seeds  <- GC "malachite seeds" mysticalagriculture:malachite_seeds:0
ItemStages.restrict(<item:mysticalagriculture:mithril_seeds>, "challenger_d");  // Mithril Seeds  <- GC "mithril seeds" mysticalagriculture:mithril_seeds:0
ItemStages.restrict(<item:mysticalagriculture:nickel_seeds>, "challenger_d");  // Nickel Seeds  <- GC "nickel seeds" mysticalagriculture:nickel_seeds:0
ItemStages.restrict(<item:mysticalagriculture:osmium_seeds>, "challenger_d");  // Osmium Seeds  <- GC "osmium seeds" mysticalagriculture:osmium_seeds:0
ItemStages.restrict(<item:mysticalagriculture:peridot_seeds>, "challenger_d");  // Peridot Seeds  <- GC "peridot seeds" mysticalagriculture:peridot_seeds:0
ItemStages.restrict(<item:mysticalagriculture:pulsating_alloy_seeds>, "challenger_d");  // Pulsating Alloy Seeds  <- GC "pulsating iron seeds" mysticalagriculture:pulsating_iron_seeds:0
ItemStages.restrict(<item:mysticalagriculture:refined_glowstone_seeds>, "challenger_d");  // Refined Glowstone Seeds  <- GC "glowstone ingot seeds" mysticalagriculture:glowstone_ingot_seeds:0
ItemStages.restrict(<item:mysticalagriculture:ruby_seeds>, "challenger_d");  // Ruby Seeds  <- GC "ruby seeds" mysticalagriculture:ruby_seeds:0
ItemStages.restrict(<item:mysticalagriculture:sapphire_seeds>, "challenger_d");  // Sapphire Seeds  <- GC "sapphire seeds" mysticalagriculture:sapphire_seeds:0
ItemStages.restrict(<item:mysticalagriculture:signalum_seeds>, "challenger_d");  // Signalum Seeds  <- GC "signalum seeds" mysticalagriculture:signalum_seeds:0
ItemStages.restrict(<item:mysticalagriculture:soularium_seeds>, "challenger_d");  // Soularium Seeds  <- GC "soularium seeds" mysticalagriculture:soularium_seeds:0
ItemStages.restrict(<item:mysticalagriculture:tanzanite_seeds>, "challenger_d");  // Tanzanite Seeds  <- GC "tanzanite seeds" mysticalagriculture:tanzanite_seeds:0
ItemStages.restrict(<item:mysticalagriculture:topaz_seeds>, "challenger_d");  // Topaz Seeds  <- GC "topaz seeds" mysticalagriculture:topaz_seeds:0
ItemStages.restrict(<item:mysticalagriculture:void_metal_seeds>, "challenger_d");  // Void Metal Seeds  <- GC "void metal seeds" mysticalagriculture:void_metal_seeds:0

// --- challenger_e (21) ---
ItemStages.restrict(<item:mysticalagriculture:chromium_seeds>, "challenger_e");  // Chromium Seeds  <- GC "chromium seeds" mysticalcreations:chromium_seeds:0
ItemStages.restrict(<item:mysticalagriculture:diamond_seeds>, "challenger_e");  // Diamond Seeds  <- GC "diamond seeds" mysticalagriculture:diamond_seeds:0
ItemStages.restrict(<item:mysticalagriculture:draconium_seeds>, "challenger_e");  // Draconium Seeds  <- GC "draconium seeds" mysticalagriculture:draconium_seeds:0
ItemStages.restrict(<item:mysticalagriculture:dreadium_seeds>, "challenger_e");  // Dreadium Seeds  <- GC "dreadium seeds" mysticalagriculture:dreadium_seeds:0
ItemStages.restrict(<item:mysticalagriculture:emerald_seeds>, "challenger_e");  // Emerald Seeds  <- GC "emerald seeds" mysticalagriculture:emerald_seeds:0
ItemStages.restrict(<item:mysticalagriculture:end_steel_seeds>, "challenger_e");  // End Steel Seeds  <- GC "end steel seeds" mysticalagriculture:end_steel_seeds:0
ItemStages.restrict(<item:mysticalagriculture:ender_amethyst_seeds>, "challenger_e");  // Ender Amethyst Seeds  <- GC "ender amethyst seeds" mysticalagriculture:ender_amethyst_seeds:0
ItemStages.restrict(<item:mysticalagriculture:enderium_seeds>, "challenger_e");  // Enderium Seeds  <- GC "enderium seeds" mysticalagriculture:enderium_seeds:0
ItemStages.restrict(<item:mysticalagriculture:iridium_seeds>, "challenger_e");  // Iridium Seeds  <- GC "iridium seeds" mysticalagriculture:iridium_seeds:0
ItemStages.restrict(<item:mysticalagriculture:manyullyn_seeds>, "challenger_e");  // Manyullyn Seeds  <- GC "manyullyn seeds" mysticalagriculture:manyullyn_seeds:0
ItemStages.restrict(<item:mysticalagriculture:meteor_seeds>, "challenger_e");  // Meteor Seeds  <- GC "meteor seeds" mysticalcreations:meteor_seeds:0
ItemStages.restrict(<item:mysticalagriculture:platinum_seeds>, "challenger_e");  // Platinum Seeds  <- GC "platinum seeds" mysticalagriculture:platinum_seeds:0
ItemStages.restrict(<item:mysticalagriculture:refined_obsidian_seeds>, "challenger_e");  // Refined Obsidian Seeds  <- GC "refined obsidian seeds" mysticalagriculture:refined_obsidian_seeds:0
ItemStages.restrict(<item:mysticalagriculture:rock_crystal_seeds>, "challenger_e");  // Rock Crystal Seeds  <- GC "rock crystal seeds" mysticalagriculture:rock_crystal_seeds:0
ItemStages.restrict(<item:mysticalagriculture:stainless_steel_seeds>, "challenger_e");  // Stainless Steel Seeds  <- GC "stainless steel seeds" mysticalcreations:stainless_steel_seeds:0
ItemStages.restrict(<item:mysticalagriculture:starmetal_seeds>, "challenger_e");  // Starmetal Seeds  <- GC "starmetal seeds" mysticalagriculture:starmetal_seeds:0
ItemStages.restrict(<item:mysticalagriculture:steel_seeds>, "challenger_e");  // Steel Seeds  <- GC "steel seeds" mysticalagriculture:steel_seeds:0
ItemStages.restrict(<item:mysticalagriculture:terrasteel_seeds>, "challenger_e");  // Terrasteel Seeds  <- GC "terrasteel seeds" mysticalagriculture:terrasteel_seeds:0
ItemStages.restrict(<item:mysticalagriculture:vibrant_alloy_seeds>, "challenger_e");  // Vibrant Alloy Seeds  <- GC "vibrant alloy seeds" mysticalagriculture:vibrant_alloy_seeds:0
ItemStages.restrict(<item:mysticalagriculture:wither_skeleton_seeds>, "challenger_e");  // Wither Skeleton Seeds  <- GC "wither skeleton seeds" mysticalagriculture:wither_skeleton_seeds:0
ItemStages.restrict(<item:mysticalagriculture:yellorium_seeds>, "challenger_e");  // Yellorium Seeds  <- GC "yellorium seeds" mysticalagriculture:yellorium_seeds:0

// --- challenger_g (6) ---
ItemStages.restrict(<item:mysticalagriculture:awakened_draconium_seeds>, "challenger_g");  // Awakened Draconium Seeds  <- GC "awakened draconium seeds" mysticalagradditions:awakened_draconium_seeds:0
ItemStages.restrict(<item:mysticalagriculture:dragon_egg_seeds>, "challenger_g");  // Dragon Egg Seeds  <- GC "dragon egg seeds" mysticalagradditions:dragon_egg_seeds:0
ItemStages.restrict(<item:mysticalagriculture:fusion_matrix_seeds>, "challenger_g");  // Fusion Matrix Seeds  <- GC "fusion matrix seeds" mysticalcreations:fusion_matrix_seeds:0
ItemStages.restrict(<item:mysticalagriculture:nether_star_seeds>, "challenger_g");  // Nether Star Seeds  <- GC "nether star seeds" mysticalagradditions:nether_star_seeds:0
ItemStages.restrict(<item:mysticalagriculture:neutronium_seeds>, "challenger_g");  // Neutronium Seeds  <- GC "neutronium seeds" mysticalagradditions:neutronium_seeds:0
ItemStages.restrict(<item:mysticalagriculture:titanium_seeds>, "challenger_g");  // Titanium Seeds  <- GC "titanium seeds" mysticalcreations:titanium_seeds:0

// --- chaotic_dominator (1) ---
ItemStages.restrict(<item:soa_additions:chaotic_energy_core>, "chaotic_dominator");  // Chaotic Energy Core  <- GC "chaotic energy core" draconicadditions:chaotic_energy_core:0

// --- descendant_of_the_sun (1) ---
ItemStages.restrict(<item:jaopca:dusts.infernium>, "descendant_of_the_sun");  // Infernium Dust  <- GC "infernium dust" jaopca:item_dustinfernium:0

// --- disabled (16) ---
ItemStages.restrict(<item:actuallyadditions:greenhouse_glass>, "disabled");  // Greenhouse Glass  <- GC "greenhouse glass" actuallyadditions:block_greenhouse_glass:0
ItemStages.restrict(<item:actuallyadditions:placer>, "disabled");  // Auto-Placer  <- GC "auto placer" actuallyadditions:block_placer:0
ItemStages.restrict(<item:bloodarsenal:reagent_divinity>, "disabled");  // Reagent of Divinity  <- GC "divinity reagent" bloodarsenal:base_item:9
ItemStages.restrict(<item:cyclic:crafter>, "disabled");  // Crafting Machine  <- GC "auto crafter" cyclicmagic:auto_crafter:0
ItemStages.restrict(<item:cyclic:fisher>, "disabled");  // Fishing Net  <- GC "automatic fishing net" cyclicmagic:block_fishing:0
ItemStages.restrict(<item:forestry:bronze_pickaxe>, "disabled");  // Survivalist's Pickaxe  <- GC "survivalist s pickaxe" forestry:bronze_pickaxe:32767
ItemStages.restrict(<item:forestry:bronze_shovel>, "disabled");  // Survivalist's Shovel  <- GC "survivalist s shovel" forestry:bronze_shovel:32767
ItemStages.restrict(<item:forestry:kit_pickaxe>, "disabled");  // Pickaxe Kit  <- GC "pickaxe kit" forestry:kit_pickaxe:0
ItemStages.restrict(<item:tofucraft:tofu_diamond_sword>, "disabled");  // Diamond Tofu Sword  <- GC "diamond tofu sword" tofucraft:sworddiamond:32767
ItemStages.restrict(<item:tofucraft:tofu_kinu_sword>, "disabled");  // Kinu Tofu Sword  <- GC "kinu tofu sword" tofucraft:swordkinu:32767
ItemStages.restrict(<item:tofucraft:tofu_metal_sword>, "disabled");  // Metal Tofu Sword  <- GC "metal tofu sword" tofucraft:swordmetal:32767
ItemStages.restrict(<item:tofucraft:tofu_momen_sword>, "disabled");  // Momen Tofu Sword  <- GC "momen tofu sword" tofucraft:swordmomen:32767
ItemStages.restrict(<item:tofucraft:tofu_solid_sword>, "disabled");  // Solid Tofu Sword  <- GC "solid tofu sword" tofucraft:swordsolid:32767
ItemStages.restrict(<item:valoria:samurai_boots>, "disabled");  // Samurai Boots  <- GC "samurai shoes" sakura:samurai_shoes:0
ItemStages.restrict(<item:valoria:samurai_kabuto>, "disabled");  // Samurai Kabuto  <- GC "samurai helmet" sakura:samurai_helmet:0
ItemStages.restrict(<item:valoria:samurai_leggings>, "disabled");  // Samurai Leggings  <- GC "samurai pants" sakura:samurai_pants:0

// --- ender_charm (1) ---
ItemStages.restrict(<item:minecraft:end_stone>, "ender_charm");  // End Stone  <- GC "end stone" minecraft:end_stone:0

// --- energy_matter_core (2) ---
ItemStages.restrict(<item:projectexpansion:basic_collector>, "energy_matter_core");  // Basic Collector [MK 1]  <- GC "basic collector mk1" projectex:collector:32767
ItemStages.restrict(<item:projectexpansion:magenta_matter>, "energy_matter_core");  // Magenta Matter  <- GC "magenta matter" projectex:matter:32767

// --- fusion_matrix (1) ---
ItemStages.restrict(<item:mysticalagriculture:fusion_matrix_essence>, "fusion_matrix");  // Fusion Matrix Essence  <- GC "fusion matrix essence" mysticalcreations:fusion_matrix_essence:0

// --- getting_started (2) ---
ItemStages.restrict(<item:aether:chest_mimic>, "getting_started");  // Chest Mimic  <- GC "chest mimic" aether_legacy:chest_mimic:0
ItemStages.restrict(<item:aether:treasure_chest>, "getting_started");  // Treasure Chest  <- GC "treasure chest" aether_legacy:treasure_chest:0

// --- graduated (2) ---
ItemStages.restrict(<item:ae2:creative_item_cell>, "graduated");  // Creative ME Item Cell  <- GC "creative me storage cell" appliedenergistics2:creative_storage_cell:0
ItemStages.restrict(<item:projectexpansion:final_star>, "graduated");  // Final Star  <- GC "the final star" projectex:final_star:0

// --- hardmode (67) ---
ItemStages.restrict(<item:actuallyadditions:ender_casing>, "hardmode");  // Ender Casing  <- GC "ender casing" actuallyadditions:block_misc:8
ItemStages.restrict(<item:actuallyadditions:lens_of_disenchanting>, "hardmode");  // Lens of Disenchanting  <- GC "lens of disenchanting" actuallyadditions:item_disenchanting_lens:0
ItemStages.restrict(<item:actuallyadditions:phantom_booster>, "hardmode");  // Range Booster  <- GC "phantom booster" actuallyadditions:block_phantom_booster:0
ItemStages.restrict(<item:actuallyadditions:phantom_energyface>, "hardmode");  // Phantom Energyface  <- GC "phantom energyface" actuallyadditions:block_phantom_energyface:0
ItemStages.restrict(<item:actuallyadditions:phantom_itemface>, "hardmode");  // Phantom Itemface  <- GC "phantomface" actuallyadditions:block_phantomface:0
ItemStages.restrict(<item:actuallyadditions:phantom_liquiface>, "hardmode");  // Phantom Liquiface  <- GC "phantom liquiface" actuallyadditions:block_phantom_liquiface:0
ItemStages.restrict(<item:actuallyadditions:phantom_placer>, "hardmode");  // Phantom Placer  <- GC "phantom placer" actuallyadditions:block_phantom_placer:0
ItemStages.restrict(<item:actuallyadditions:phantom_redstoneface>, "hardmode");  // Phantom Redstoneface  <- GC "phantom redstoneface" actuallyadditions:block_phantom_redstoneface:0
ItemStages.restrict(<item:actuallyadditions:teleport_staff>, "hardmode");  // Teleport Staff  <- GC "teleport staff" actuallyadditions:item_tele_staff:0
ItemStages.restrict(<item:mysticalagriculture:dragon_egg_essence>, "hardmode");  // Dragon Egg Essence  <- GC "dragon egg essence" mysticalagradditions:dragon_egg_essence:0
ItemStages.restrict(<item:mysticalagriculture:nether_star_essence>, "hardmode");  // Nether Star Essence  <- GC "nether star essence" mysticalagradditions:nether_star_essence:0
ItemStages.restrict(<item:mysticalagriculture:neutronium_essence>, "hardmode");  // Neutronium Essence  <- GC "neutronium essence" mysticalagradditions:neutronium_essence:0
ItemStages.restrict(<item:projectexpansion:basic_compressed_collector>, "hardmode");  // Basic Compressed Collector [MK 1]  <- GC "basic collector mk1" projectex:compressed_collector:0
ItemStages.restrict(<item:projectexpansion:basic_emc_link>, "hardmode");  // Basic EMC Link [MK 1]  <- GC "basic energy emc link" projectex:energy_link:0
ItemStages.restrict(<item:projectexpansion:basic_power_flower>, "hardmode");  // Basic Power Flower [MK 1]  <- GC "basic power flower bonsai pot mk1" projectex:power_flower:0
ItemStages.restrict(<item:projectexpansion:basic_relay>, "hardmode");  // Basic Relay [MK 1]  <- GC "basic relay mk1" projectex:relay:0
ItemStages.restrict(<item:projectexpansion:blue_power_flower>, "hardmode");  // Blue Power Flower [MK 8]  <- GC "blue matter power flower bonsai pot mk8" projectex:power_flower:7
ItemStages.restrict(<item:projectexpansion:blue_relay>, "hardmode");  // Blue Relay [MK 8]  <- GC "blue matter relay mk8" projectex:relay:7
ItemStages.restrict(<item:projectexpansion:colossal_star_drei>, "hardmode");  // Colossal Star Drei  <- GC "colossal star drei" projectex:colossal_star_drei:0
ItemStages.restrict(<item:projectexpansion:colossal_star_ein>, "hardmode");  // Colossal Star Ein  <- GC "colossal star ein" projectex:colossal_star_ein:0
ItemStages.restrict(<item:projectexpansion:colossal_star_omega>, "hardmode");  // Colossal Star Omega  <- GC "colossal star omega" projectex:colossal_star_omega:0
ItemStages.restrict(<item:projectexpansion:colossal_star_sphere>, "hardmode");  // Colossal Star Sphere  <- GC "colossal star sphere" projectex:colossal_star_sphere:0
ItemStages.restrict(<item:projectexpansion:colossal_star_vier>, "hardmode");  // Colossal Star Vier  <- GC "colossal star vier" projectex:colossal_star_vier:0
ItemStages.restrict(<item:projectexpansion:colossal_star_zwei>, "hardmode");  // Colossal Star Zwei  <- GC "colossal star zwei" projectex:colossal_star_zwei:0
ItemStages.restrict(<item:projectexpansion:cyan_power_flower>, "hardmode");  // Cyan Power Flower [MK 9]  <- GC "cyan matter power flower bonsai pot mk9" projectex:power_flower:8
ItemStages.restrict(<item:projectexpansion:cyan_relay>, "hardmode");  // Cyan Relay [MK 9]  <- GC "cyan matter relay mk9" projectex:relay:8
ItemStages.restrict(<item:projectexpansion:dark_power_flower>, "hardmode");  // Dark Power Flower [MK 2]  <- GC "dark matter power flower bonsai pot mk2" projectex:power_flower:1
ItemStages.restrict(<item:projectexpansion:dark_relay>, "hardmode");  // Dark Relay [MK 2]  <- GC "dark matter relay mk2" projectex:relay:1
ItemStages.restrict(<item:projectexpansion:fading_power_flower>, "hardmode");  // Fading Power Flower [MK 15]  <- GC "fading matter power flower bonsai pot mk15" projectex:power_flower:14
ItemStages.restrict(<item:projectexpansion:fading_relay>, "hardmode");  // Fading Relay [MK 15]  <- GC "fading matter relay mk15" projectex:relay:14
ItemStages.restrict(<item:projectexpansion:final_power_flower>, "hardmode");  // Final Power Flower [MK 16]  <- GC "the final power flower bonsai pot" projectex:power_flower:15
ItemStages.restrict(<item:projectexpansion:final_relay>, "hardmode");  // Final Relay [MK 16]  <- GC "the final relay" projectex:relay:15
ItemStages.restrict(<item:projectexpansion:final_star_shard>, "hardmode");  // Final Star Shard  <- GC "the final star shard" projectex:final_star_shard:0
ItemStages.restrict(<item:projectexpansion:green_power_flower>, "hardmode");  // Green Power Flower [MK 10]  <- GC "green matter power flower bonsai pot mk10" projectex:power_flower:9
ItemStages.restrict(<item:projectexpansion:green_relay>, "hardmode");  // Green Relay [MK 10]  <- GC "green matter relay mk10" projectex:relay:9
ItemStages.restrict(<item:projectexpansion:knowledge_sharing_book>, "hardmode");  // Knowledge Sharing Book  <- GC "knowledge sharing book" projectex:knowledge_sharing_book:0
ItemStages.restrict(<item:projectexpansion:lime_power_flower>, "hardmode");  // Lime Power Flower [MK 11]  <- GC "lime matter power flower bonsai pot mk11" projectex:power_flower:10
ItemStages.restrict(<item:projectexpansion:lime_relay>, "hardmode");  // Lime Relay [MK 11]  <- GC "lime matter relay mk11" projectex:relay:10
// Magenta Matter: GC restage.zs:129 (<projectex:matter:*>) moves the matter tiers
// to energy_matter_core, undoing the projectex hardmode add - gated there instead.
ItemStages.restrict(<item:projectexpansion:magenta_power_flower>, "hardmode");  // Magenta Power Flower [MK 4]  <- GC "magenta matter power flower bonsai pot mk4" projectex:power_flower:3
ItemStages.restrict(<item:projectexpansion:magenta_relay>, "hardmode");  // Magenta Relay [MK 4]  <- GC "magenta matter relay mk4" projectex:relay:3
ItemStages.restrict(<item:projectexpansion:magnum_star_drei>, "hardmode");  // Magnum Star Drei  <- GC "magnum star drei" projectex:magnum_star_drei:0
ItemStages.restrict(<item:projectexpansion:magnum_star_ein>, "hardmode");  // Magnum Star Ein  <- GC "magnum star ein" projectex:magnum_star_ein:0
ItemStages.restrict(<item:projectexpansion:magnum_star_omega>, "hardmode");  // Magnum Star Omega  <- GC "magnum star omega" projectex:magnum_star_omega:0
ItemStages.restrict(<item:projectexpansion:magnum_star_sphere>, "hardmode");  // Magnum Star Sphere  <- GC "magnum star sphere" projectex:magnum_star_sphere:0
ItemStages.restrict(<item:projectexpansion:magnum_star_vier>, "hardmode");  // Magnum Star Vier  <- GC "magnum star vier" projectex:magnum_star_vier:0
ItemStages.restrict(<item:projectexpansion:magnum_star_zwei>, "hardmode");  // Magnum Star Zwei  <- GC "magnum star zwei" projectex:magnum_star_zwei:0
ItemStages.restrict(<item:projectexpansion:orange_power_flower>, "hardmode");  // Orange Power Flower [MK 13]  <- GC "orange matter power flower bonsai pot mk13" projectex:power_flower:12
ItemStages.restrict(<item:projectexpansion:orange_relay>, "hardmode");  // Orange Relay [MK 13]  <- GC "orange matter relay mk13" projectex:relay:12
ItemStages.restrict(<item:projectexpansion:pink_power_flower>, "hardmode");  // Pink Power Flower [MK 5]  <- GC "pink matter power flower bonsai pot mk5" projectex:power_flower:4
ItemStages.restrict(<item:projectexpansion:pink_relay>, "hardmode");  // Pink Relay [MK 5]  <- GC "pink matter relay mk5" projectex:relay:4
ItemStages.restrict(<item:projectexpansion:purple_power_flower>, "hardmode");  // Purple Power Flower [MK 6]  <- GC "purple matter power flower bonsai pot mk6" projectex:power_flower:5
ItemStages.restrict(<item:projectexpansion:purple_relay>, "hardmode");  // Purple Relay [MK 6]  <- GC "purple matter relay mk6" projectex:relay:5
ItemStages.restrict(<item:projectexpansion:red_power_flower>, "hardmode");  // Red Power Flower [MK 3]  <- GC "red matter power flower bonsai pot mk3" projectex:power_flower:2
ItemStages.restrict(<item:projectexpansion:red_relay>, "hardmode");  // Red Relay [MK 3]  <- GC "red matter relay mk3" projectex:relay:2
ItemStages.restrict(<item:projectexpansion:violet_power_flower>, "hardmode");  // Violet Power Flower [MK 7]  <- GC "violet matter power flower bonsai pot mk7" projectex:power_flower:6
ItemStages.restrict(<item:projectexpansion:violet_relay>, "hardmode");  // Violet Relay [MK 7]  <- GC "violet matter relay mk7" projectex:relay:6
ItemStages.restrict(<item:projectexpansion:white_power_flower>, "hardmode");  // White Power Flower [MK 14]  <- GC "white matter power flower bonsai pot mk14" projectex:power_flower:13
ItemStages.restrict(<item:projectexpansion:white_relay>, "hardmode");  // White Relay [MK 14]  <- GC "white matter relay mk14" projectex:relay:13
ItemStages.restrict(<item:projectexpansion:yellow_power_flower>, "hardmode");  // Yellow Power Flower [MK 12]  <- GC "yellow matter power flower bonsai pot mk12" projectex:power_flower:11
ItemStages.restrict(<item:projectexpansion:yellow_relay>, "hardmode");  // Yellow Relay [MK 12]  <- GC "yellow matter relay mk12" projectex:relay:11
// Tofu swords (diamond/kinu/metal): GC restages all three to `disabled`
// (crafttweaker.log shows the removal before the final add), so the hardmode
// entry is stale - they are gated in the disabled section above.
// (Momen/Solid Tofu Sword - restaged to `disabled` in GC, same as the three above.)
ItemStages.restrict(<item:valoria:amber_ore>, "hardmode");  // Amber Ore  <- GC "amber bearing stone" thaumcraft:ore_amber:0

// --- master_engineer (7) ---
ItemStages.restrict(<item:actuallyadditions:breaker>, "master_engineer");  // Auto-Breaker  <- GC "auto breaker" actuallyadditions:block_breaker:0
ItemStages.restrict(<item:actuallyadditions:dropper>, "master_engineer");  // Automatic Precision Dropper  <- GC "automatic precision dropper" actuallyadditions:block_dropper:0
ItemStages.restrict(<item:actuallyadditions:fluid_collector>, "master_engineer");  // Fluid Collector  <- GC "fluid collector" actuallyadditions:block_fluid_collector:0
ItemStages.restrict(<item:actuallyadditions:fluid_placer>, "master_engineer");  // Fluid Placer  <- GC "fluid placer" actuallyadditions:block_fluid_placer:0
ItemStages.restrict(<item:actuallyadditions:long_range_breaker>, "master_engineer");  // Long-Range Breaker  <- GC "long range breaker" actuallyadditions:block_directional_breaker:0
ItemStages.restrict(<item:actuallyadditions:phantom_breaker>, "master_engineer");  // Phantom Breaker  <- GC "phantom breaker" actuallyadditions:block_phantom_breaker:0
ItemStages.restrict(<item:actuallyadditions:vertical_digger>, "master_engineer");  // Vertical Digger  <- GC "vertical digger" actuallyadditions:block_miner:0

// --- nether (2) ---
ItemStages.restrict(<item:minecraft:ancient_debris>, "nether");  // Ancient Debris  <- GC "ancient debris" additions:greedycraft-ancient_debris:0
ItemStages.restrict(<item:soa_additions:wither_bone>, "nether");  // §8Wither Bone  <- GC "wither bone" netherex:wither_bone:0

// --- novice_engineer (16) ---
ItemStages.restrict(<item:actuallyadditions:atomic_reconstructor>, "novice_engineer");  // Atomic Reconstructor  <- GC "atomic reconstructor" actuallyadditions:block_atomic_reconstructor:0
ItemStages.restrict(<item:actuallyadditions:battery_box>, "novice_engineer");  // Battery Box  <- GC "battery box" actuallyadditions:block_battery_box:0
ItemStages.restrict(<item:actuallyadditions:bio_reactor>, "novice_engineer");  // Bio Reactor  <- GC "bio reactor" actuallyadditions:block_bio_reactor:0
ItemStages.restrict(<item:actuallyadditions:canola_press>, "novice_engineer");  // Canola Press  <- GC "canola press" actuallyadditions:block_canola_press:0
ItemStages.restrict(<item:actuallyadditions:coffee_machine>, "novice_engineer");  // Coffee Maker  <- GC "coffee maker" actuallyadditions:block_coffee_machine:0
ItemStages.restrict(<item:actuallyadditions:display_stand>, "novice_engineer");  // Display Stand  <- GC "display stand" actuallyadditions:block_display_stand:0
ItemStages.restrict(<item:actuallyadditions:empowered_restonia_crystal_block>, "novice_engineer");  // Empowered Restonia Crystal Block (+ 5 sibling Empowered Crystal Blocks)  <- GC "this is bugged throw it away please" actuallyadditions:block_crystal_empowered:32767
ItemStages.restrict(<item:actuallyadditions:empowerer>, "novice_engineer");  // Empowerer  <- GC "empowerer" actuallyadditions:block_empowerer:0
ItemStages.restrict(<item:actuallyadditions:energizer>, "novice_engineer");  // Energizer  <- GC "energizer" actuallyadditions:block_energizer:0
ItemStages.restrict(<item:actuallyadditions:enervator>, "novice_engineer");  // Enervator  <- GC "enervator" actuallyadditions:block_enervator:0
ItemStages.restrict(<item:actuallyadditions:farmer>, "novice_engineer");  // Farmer  <- GC "farmer" actuallyadditions:block_farmer:0
ItemStages.restrict(<item:actuallyadditions:hopping_item_interface>, "novice_engineer");  // Hopping Item Interface  <- GC "hopping item interface" actuallyadditions:block_item_viewer_hopping:0
ItemStages.restrict(<item:actuallyadditions:item_interface>, "novice_engineer");  // Item Interface  <- GC "item interface" actuallyadditions:block_item_viewer:0
ItemStages.restrict(<item:actuallyadditions:lava_factory_controller>, "novice_engineer");  // Lava Factory Controller  <- GC "lava factory controller" actuallyadditions:block_lava_factory_controller:0
ItemStages.restrict(<item:actuallyadditions:player_interface>, "novice_engineer");  // Player Interface  <- GC "player interface" actuallyadditions:block_player_interface:0
ItemStages.restrict(<item:actuallyadditions:shock_suppressor>, "novice_engineer");  // Shock Absorber  <- GC "shock absorber" actuallyadditions:block_shock_suppressor:0

// --- skilled_engineer (1) ---
ItemStages.restrict(<item:bigreactors:yellorite_ore>, "skilled_engineer");  // Yellorite Ore  <- GC "yellorite ore" bigreactors:oreyellorite:0

// --- wielder_of_infinity (1) ---
ItemStages.restrict(<item:actuallyadditions:ring_of_growth>, "wielder_of_infinity");  // Ring of Growth  <- GC "ring of growth" actuallyadditions:item_growth_ring:0

// ============================================================
//  Sweep of disabled lines + unaudited axes (2026-08-04)
//
//  OMIT_MOD/BAD_ID/EMPTY_TAG lines that were disabled against a stale
//  registry, plus gaps found auditing the mob/dimension/ore/liquid axes.
//  Every id re-confirmed in soa_exports/items.json and checked against the
//  existing file for duplicates before landing here.
// ============================================================

// --- awakened (1) ---
ItemStages.restrict(<item:smithery:molten_terra_alloy_bucket>, "awakened");

// --- challenger_a (2) ---
ItemStages.restrict(<item:mysticalagriculture:deepslate_seeds>, "challenger_a");
ItemStages.restrict(<item:mysticalagriculture:inferium_seeds>, "challenger_a");

// --- challenger_b (8) ---
ItemStages.restrict(<item:mysticalagriculture:amethyst_seeds>, "challenger_b");
ItemStages.restrict(<item:mysticalagriculture:coral_seeds>, "challenger_b");
ItemStages.restrict(<item:mysticalagriculture:fish_seeds>, "challenger_b");
ItemStages.restrict(<item:mysticalagriculture:honey_seeds>, "challenger_b");
ItemStages.restrict(<item:mysticalagriculture:menril_seeds>, "challenger_b");
ItemStages.restrict(<item:mysticalagriculture:rubber_seeds>, "challenger_b");
ItemStages.restrict(<item:mysticalagriculture:squid_seeds>, "challenger_b");
ItemStages.restrict(<item:mysticalagriculture:turtle_seeds>, "challenger_b");

// --- challenger_c (7) ---
ItemStages.restrict(<item:mysticalagriculture:amethyst_bronze_seeds>, "challenger_c");
ItemStages.restrict(<item:mysticalagriculture:copper_alloy_seeds>, "challenger_c");
ItemStages.restrict(<item:mysticalagriculture:pig_iron_seeds>, "challenger_c");
ItemStages.restrict(<item:mysticalagriculture:prismarine_seeds>, "challenger_c");
ItemStages.restrict(<item:mysticalagriculture:quartz_enriched_iron_seeds>, "challenger_c");
ItemStages.restrict(<item:mysticalagriculture:slimesteel_seeds>, "challenger_c");
ItemStages.restrict(<item:mysticalagriculture:zinc_seeds>, "challenger_c");

// --- challenger_d (10) ---
ItemStages.restrict(<item:mysticalagriculture:blazing_crystal_seeds>, "challenger_d");
ItemStages.restrict(<item:mysticalagriculture:chrome_seeds>, "challenger_d");
ItemStages.restrict(<item:mysticalagriculture:compressed_iron_seeds>, "challenger_d");
ItemStages.restrict(<item:mysticalagriculture:energized_steel_seeds>, "challenger_d");
ItemStages.restrict(<item:mysticalagriculture:fluorite_seeds>, "challenger_d");
ItemStages.restrict(<item:mysticalagriculture:hop_graphite_seeds>, "challenger_d");
ItemStages.restrict(<item:mysticalagriculture:rose_gold_seeds>, "challenger_d");
ItemStages.restrict(<item:mysticalagriculture:soulium_seeds>, "challenger_d");
ItemStages.restrict(<item:mysticalagriculture:tungsten_seeds>, "challenger_d");
ItemStages.restrict(<item:mysticalagriculture:uranium_seeds>, "challenger_d");

// --- challenger_e (8) ---
ItemStages.restrict(<item:mysticalagriculture:cyanite_seeds>, "challenger_e");
ItemStages.restrict(<item:mysticalagriculture:flux_infused_gem_seeds>, "challenger_e");
ItemStages.restrict(<item:mysticalagriculture:hepatizon_seeds>, "challenger_e");
ItemStages.restrict(<item:mysticalagriculture:netherite_seeds>, "challenger_e");
ItemStages.restrict(<item:mysticalagriculture:niotic_crystal_seeds>, "challenger_e");
ItemStages.restrict(<item:mysticalagriculture:queens_slime_seeds>, "challenger_e");
ItemStages.restrict(<item:mysticalagriculture:spirited_crystal_seeds>, "challenger_e");
ItemStages.restrict(<item:mysticalagriculture:uraninite_seeds>, "challenger_e");

// --- challenger_g (2) ---
ItemStages.restrict(<item:mysticalagriculture:gaia_spirit_seeds>, "challenger_g");
ItemStages.restrict(<item:mysticalagriculture:nitro_crystal_seeds>, "challenger_g");

// --- fusion_matrix (1) ---
ItemStages.restrict(<item:smithery:molten_draconium_bucket>, "fusion_matrix");

// --- hardmode (7) ---
ItemStages.restrict(<item:smithery:molten_osgloglas_bucket>, "hardmode");
ItemStages.restrict(<item:smithery:molten_osmiridium_bucket>, "hardmode");
ItemStages.restrict(<item:soa_additions:glider>, "hardmode");
ItemStages.restrict(<item:soa_additions:malachite>, "hardmode");
ItemStages.restrict(<item:soa_additions:peridot>, "hardmode");
ItemStages.restrict(<item:soa_additions:tanzanite>, "hardmode");
ItemStages.restrict(<item:soa_additions:topaz>, "hardmode");

// --- novice_engineer (5) ---
ItemStages.restrict(<item:actuallyadditions:empowered_diamatine_crystal_block>, "novice_engineer");  // Empowered Diamatine Crystal Block  <- GC actuallyadditions:block_crystal_empowered:2
ItemStages.restrict(<item:actuallyadditions:empowered_emeradic_crystal_block>, "novice_engineer");  // Empowered Emeradic Crystal Block  <- GC actuallyadditions:block_crystal_empowered:4
ItemStages.restrict(<item:actuallyadditions:empowered_enori_crystal_block>, "novice_engineer");  // Empowered Enori Crystal Block  <- GC actuallyadditions:block_crystal_empowered:5
ItemStages.restrict(<item:actuallyadditions:empowered_palis_crystal_block>, "novice_engineer");  // Empowered Palis Crystal Block  <- GC actuallyadditions:block_crystal_empowered:1
ItemStages.restrict(<item:actuallyadditions:empowered_void_crystal_block>, "novice_engineer");  // Empowered Void Crystal Block  <- GC actuallyadditions:block_crystal_empowered:3

// --- wielder_of_infinity (1) ---
ItemStages.restrict(<item:smithery:molten_infinity_metal_bucket>, "wielder_of_infinity");

// --- tag-based (verified non-empty) ---
ItemStages.restrict(<tag:items:forge:ores/amber>, "hardmode");
ItemStages.restrict(<tag:items:forge:storage_blocks/gelid>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:chorus_fruit>, "ender_charm");

// --- hardmode: Uru (GC taiga:uru_block / taiga:uru_ore -> soa_additions) ---
ItemStages.restrict(<item:soa_additions:uru_block>, "hardmode");  // Uru Block
ItemStages.restrict(<item:soa_additions:uru_ore>, "hardmode");  // Uru Ore

// --- disputed batch resolved (2026-08-04) ---
// Matter tiers -> energy_matter_core: GC restage.zs:129 <projectex:matter:*> undoes
// the hardmode add. Compressed collectors are NOT restaged, so they stay hardmode.
ItemStages.restrict(<item:projectexpansion:blue_matter>, "energy_matter_core");
ItemStages.restrict(<item:projectexpansion:cyan_matter>, "energy_matter_core");
ItemStages.restrict(<item:projectexpansion:fading_matter>, "energy_matter_core");
ItemStages.restrict(<item:projectexpansion:green_matter>, "energy_matter_core");
ItemStages.restrict(<item:projectexpansion:lime_matter>, "energy_matter_core");
ItemStages.restrict(<item:projectexpansion:orange_matter>, "energy_matter_core");
ItemStages.restrict(<item:projectexpansion:pink_matter>, "energy_matter_core");
ItemStages.restrict(<item:projectexpansion:purple_matter>, "energy_matter_core");
ItemStages.restrict(<item:projectexpansion:violet_matter>, "energy_matter_core");
ItemStages.restrict(<item:projectexpansion:white_matter>, "energy_matter_core");
ItemStages.restrict(<item:projectexpansion:yellow_matter>, "energy_matter_core");
ItemStages.restrict(<item:projectexpansion:blue_compressed_collector>, "hardmode");
ItemStages.restrict(<item:projectexpansion:cyan_compressed_collector>, "hardmode");
ItemStages.restrict(<item:projectexpansion:fading_compressed_collector>, "hardmode");
ItemStages.restrict(<item:projectexpansion:green_compressed_collector>, "hardmode");
ItemStages.restrict(<item:projectexpansion:lime_compressed_collector>, "hardmode");
ItemStages.restrict(<item:projectexpansion:magenta_compressed_collector>, "hardmode");
ItemStages.restrict(<item:projectexpansion:orange_compressed_collector>, "hardmode");
ItemStages.restrict(<item:projectexpansion:pink_compressed_collector>, "hardmode");
ItemStages.restrict(<item:projectexpansion:purple_compressed_collector>, "hardmode");
ItemStages.restrict(<item:projectexpansion:red_compressed_collector>, "hardmode");
ItemStages.restrict(<item:projectexpansion:violet_compressed_collector>, "hardmode");
ItemStages.restrict(<item:projectexpansion:white_compressed_collector>, "hardmode");
ItemStages.restrict(<item:projectexpansion:yellow_compressed_collector>, "hardmode");
ItemStages.restrict(<item:projectexpansion:dark_compressed_collector>, "hardmode");
ItemStages.restrict(<item:projectexpansion:final_compressed_collector>, "hardmode");

// --- molten buckets: same stage as their material (GC liquid.zs parity) ---
// A molten metal is the material in fluid form; gating the material but not its
// bucket leaves a pour-around-the-ladder bypass.
ItemStages.restrict(<item:smithery:molten_adamant_bucket>, "hardmode");
ItemStages.restrict(<item:smithery:molten_adaminite_bucket>, "hardmode");
ItemStages.restrict(<item:smithery:molten_aeonsteel_bucket>, "hardmode");
ItemStages.restrict(<item:smithery:molten_amethyst_bucket>, "hardmode");
ItemStages.restrict(<item:smithery:molten_aqualite_bucket>, "nether");
ItemStages.restrict(<item:smithery:molten_ardite_bucket>, "nether");
ItemStages.restrict(<item:smithery:molten_asgardium_bucket>, "nether");
ItemStages.restrict(<item:smithery:molten_astral_metal_bucket>, "skilled_wizard");
ItemStages.restrict(<item:smithery:molten_bedrock_bucket>, "awakened");
ItemStages.restrict(<item:smithery:molten_bound_metal_bucket>, "novice_wizard");
ItemStages.restrict(<item:smithery:molten_chaotic_metal_bucket>, "awakened");
ItemStages.restrict(<item:smithery:molten_chromasteel_bucket>, "awakened");
ItemStages.restrict(<item:smithery:molten_cobalt_bucket>, "nether");
ItemStages.restrict(<item:smithery:molten_cosmilite_bucket>, "chaotic");
ItemStages.restrict(<item:smithery:molten_crimsonite_bucket>, "skilled_wizard");
ItemStages.restrict(<item:smithery:molten_cryonium_bucket>, "hardmode");
ItemStages.restrict(<item:smithery:molten_cytosinite_bucket>, "hardmode");
ItemStages.restrict(<item:smithery:molten_dark_matter_bucket>, "hardmode");
ItemStages.restrict(<item:smithery:molten_dimensional_shard_bucket>, "nether");
ItemStages.restrict(<item:smithery:molten_draconic_metal_bucket>, "wyvern");
ItemStages.restrict(<item:smithery:molten_dreadium_bucket>, "fearless_man");
ItemStages.restrict(<item:smithery:molten_durasteel_bucket>, "nether");
ItemStages.restrict(<item:smithery:molten_electronium_bucket>, "fusion_matrix");
ItemStages.restrict(<item:smithery:molten_end_steel_bucket>, "novice_engineer");
ItemStages.restrict(<item:smithery:molten_ender_biotite_bucket>, "hardmode");
ItemStages.restrict(<item:smithery:molten_enderium_bucket>, "skilled_engineer");
ItemStages.restrict(<item:smithery:molten_ethaxium_bucket>, "hardmode");
ItemStages.restrict(<item:smithery:molten_fluix_bucket>, "nether");
ItemStages.restrict(<item:smithery:molten_fluix_steel_bucket>, "nether");
ItemStages.restrict(<item:smithery:molten_fusion_matrix_bucket>, "hardmode");
ItemStages.restrict(<item:smithery:molten_gaia_bucket>, "nether");
ItemStages.restrict(<item:smithery:molten_gaiasteel_bucket>, "wither_slayer");
ItemStages.restrict(<item:smithery:molten_gelid_enderium_bucket>, "skilled_engineer");
ItemStages.restrict(<item:smithery:molten_gelid_gem_bucket>, "skilled_engineer");
ItemStages.restrict(<item:smithery:molten_golden_amber_bucket>, "nether");
ItemStages.restrict(<item:smithery:molten_gravitite_bucket>, "nether");
ItemStages.restrict(<item:smithery:molten_infernium_bucket>, "descendant_of_the_sun");
ItemStages.restrict(<item:smithery:molten_insanium_bucket>, "hardmode");
ItemStages.restrict(<item:smithery:molten_iridium_bucket>, "skilled_engineer");
ItemStages.restrict(<item:smithery:molten_lumium_bucket>, "nether");
ItemStages.restrict(<item:smithery:molten_ma.supremium_bucket>, "hardmode");
ItemStages.restrict(<item:smithery:molten_manyullyn_bucket>, "nether");
ItemStages.restrict(<item:smithery:molten_meteor_bucket>, "nether");
ItemStages.restrict(<item:smithery:molten_mirion_bucket>, "abyssal_conquerer");
ItemStages.restrict(<item:smithery:molten_mithminite_bucket>, "hardmode");
ItemStages.restrict(<item:smithery:molten_mithrillium_bucket>, "hardmode");
ItemStages.restrict(<item:smithery:molten_neutronium_bucket>, "awakened");
ItemStages.restrict(<item:smithery:molten_orichalcos_bucket>, "hardmode");
ItemStages.restrict(<item:smithery:molten_platinum_bucket>, "skilled_engineer");
ItemStages.restrict(<item:smithery:molten_primal_metal_bucket>, "master_wizard");
ItemStages.restrict(<item:smithery:molten_protonium_bucket>, "energy_matter_core");
ItemStages.restrict(<item:smithery:molten_ravaging_bucket>, "nether");
ItemStages.restrict(<item:smithery:molten_red_matter_bucket>, "hardmode");
ItemStages.restrict(<item:smithery:molten_remorseful_bucket>, "nether");
ItemStages.restrict(<item:smithery:molten_rime_bucket>, "nether");
ItemStages.restrict(<item:smithery:molten_sentient_metal_bucket>, "novice_wizard");
ItemStages.restrict(<item:smithery:molten_shadowium_bucket>, "hardmode");
ItemStages.restrict(<item:smithery:molten_stellar_alloy_gc_bucket>, "wither_slayer");
ItemStages.restrict(<item:smithery:molten_terrestrial_bucket>, "hardmode");
ItemStages.restrict(<item:smithery:molten_titanium_bucket>, "awakened");
ItemStages.restrict(<item:smithery:molten_valkyrie_bucket>, "nether");
ItemStages.restrict(<item:smithery:molten_void_metal_bucket>, "master_wizard");
ItemStages.restrict(<item:smithery:molten_zanite_bucket>, "nether");

// --- resolved ambiguous mappings (owner decisions) ---
ItemStages.restrict(<item:ars_technica:quartz_dust>, "nether");
ItemStages.restrict(<item:thermal:watering_can>, "disabled");
ItemStages.restrict(<item:soa_additions:ruby>, "hardmode");
ItemStages.restrict(<item:soa_additions:sapphire>, "hardmode");
