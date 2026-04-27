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
//   tconstruct:tooltables:N -> tconstruct:crafting_station / part_builder /
//                              part_chest / tinkers_anvil / tinkers_chest /
//                              tinkers_gadgetry
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
ItemStages.restrict(<item:tconstruct:rod_cast>, "awakened");
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
// EMPTY_TAG (empty tag: forge:seeds/tier_1): ItemStages.restrict(<tag:items:forge:seeds/tier_1>, "challenger_a");
ItemStages.restrict(<tag:items:forge:essences/inferium>, "challenger_a");
ItemStages.restrict(<tag:items:forge:ingots/inferium>, "challenger_a");
ItemStages.restrict(<item:tinymobfarm:stone_farm>, "challenger_a");

// === challenger_b ===
// EMPTY_TAG (empty tag: forge:seeds/tier_2): ItemStages.restrict(<tag:items:forge:seeds/tier_2>, "challenger_b");
ItemStages.restrict(<tag:items:forge:essences/prudentium>, "challenger_b");
ItemStages.restrict(<tag:items:forge:ingots/prudentium>, "challenger_b");
ItemStages.restrict(<item:tinymobfarm:iron_farm>, "challenger_b");

// === challenger_c ===
// EMPTY_TAG (empty tag: forge:seeds/tier_3): ItemStages.restrict(<tag:items:forge:seeds/tier_3>, "challenger_c");
ItemStages.restrict(<tag:items:forge:essences/intermedium>, "challenger_c");
ItemStages.restrict(<tag:items:forge:ingots/intermedium>, "challenger_c");
ItemStages.restrict(<item:tinymobfarm:gold_farm>, "challenger_c");

// === challenger_d ===
// EMPTY_TAG (empty tag: forge:seeds/tier_4): ItemStages.restrict(<tag:items:forge:seeds/tier_4>, "challenger_d");
ItemStages.restrict(<tag:items:forge:essences/superium>, "challenger_d");
ItemStages.restrict(<tag:items:forge:ingots/superium>, "challenger_d");
ItemStages.restrict(<item:tinymobfarm:diamond_farm>, "challenger_d");

// === challenger_e ===
// EMPTY_TAG (empty tag: forge:seeds/tier_5): ItemStages.restrict(<tag:items:forge:seeds/tier_5>, "challenger_e");
ItemStages.restrict(<tag:items:forge:essences/supremium>, "challenger_e");
ItemStages.restrict(<tag:items:forge:ingots/supremium>, "challenger_e");
ItemStages.restrict(<item:tinymobfarm:emerald_farm>, "challenger_e");

// === challenger_f ===
ItemStages.restrict(<tag:items:forge:essences/insanium>, "challenger_f");
ItemStages.restrict(<tag:items:forge:ingots/insanium>, "challenger_f");
ItemStages.restrict(<item:tinymobfarm:inferno_farm>, "challenger_f");

// === challenger_g ===
// EMPTY_TAG (empty tag: forge:seeds/tier_6): ItemStages.restrict(<tag:items:forge:seeds/tier_6>, "challenger_g");
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
ItemStages.restrict(<item:solarflux:sp_avaritia.infinity>, "chaotic");
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
// EMPTY_TAG (empty tag: forge:endstone): ItemStages.restrict(<tag:items:forge:endstone>, "ender_charm");
// EMPTY_TAG (empty tag: forge:crop_chorusfruit): ItemStages.restrict(<tag:items:forge:crop_chorusfruit>, "ender_charm");
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
ItemStages.restrict(<tag:items:forge:ingots/dreadium>, "fearless_man");

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
ItemStages.restrict(<tag:items:minecraft:planks>, "getting_started");
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
ItemStages.restrict(<item:tconstruct:crafting_station>, "getting_started");
ItemStages.restrict(<item:tconstruct:part_chest>, "getting_started");
// OMIT_MOD (mod missing: conarm): ItemStages.restrict(<item:conarm:armorstation>, "getting_started");
ItemStages.restrict(<item:tconstruct:part_builder>, "getting_started");
ItemStages.restrict(<item:tconstruct:tinkers_gadgetry>, "getting_started");
ItemStages.restrict(<item:tconstruct:tinkers_anvil>, "getting_started");
ItemStages.restrict(<item:tconstruct:tinkers_chest>, "getting_started");
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
ItemStages.restrict(<item:thermal:watering_can>, "graduated");
// BAD_ID (item not registered: thermal:injector_creative): ItemStages.restrict(<item:thermal:injector_creative>, "graduated");
ItemStages.restrict(<item:botania:creative_pool>, "graduated");
ItemStages.restrict(<item:mysticalagradditions:creative_essence>, "graduated");
ItemStages.restrict(<item:soa_additions:creative_controller>, "graduated");
ItemStages.restrict(<item:dankstorage:dank_6>, "graduated");
ItemStages.restrict(<item:projecte:watch_of_flowing_time>, "graduated");
ItemStages.restrict(<item:projecte:tome>, "graduated");
// BAD_ID (item not registered: thermal:upgrade_creative): ItemStages.restrict(<item:thermal:upgrade_creative>, "graduated");
ItemStages.restrict(<item:chancecubes:creative_pendant>, "graduated");
ItemStages.restrict(<item:ae2wtlib:wireless_universal_terminal>, "graduated");
ItemStages.restrict(<item:storagedrawers:creative_storage_upgrade>, "graduated");
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
// OMIT_MOD (mod missing: extrautils2): ItemStages.restrict(<item:extrautils2:machine>, "hardmode");
// BAD_ID (item not registered: mythicbotany:bottledflame): ItemStages.restrict(<item:mythicbotany:bottledflame>, "hardmode");
ItemStages.restrict(<item:soa_additions:true_blood_sigil>, "hardmode");
ItemStages.restrict(<item:soa_additions:ordinary_medal>, "hardmode");
// OMIT_MOD (mod missing: abyssalcraft): ItemStages.restrict(<item:abyssalcraft:gatewaykeyjzh>, "hardmode");
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
ItemStages.restrict(<item:minecraft:enchanted_book>, "hardmode");
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
// EMPTY_TAG (empty tag: forge:ingots/ethaxium_brick): ItemStages.restrict(<tag:items:forge:ingots/ethaxium_brick>, "hardmode");
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
// EMPTY_TAG (empty tag: forge:alloy_ultimate): ItemStages.restrict(<tag:items:forge:alloy_ultimate>, "master_engineer");
// EMPTY_TAG (empty tag: forge:circuit_ultimate): ItemStages.restrict(<tag:items:forge:circuit_ultimate>, "master_engineer");
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
ItemStages.restrict(<tag:items:forge:ingots/primordial>, "master_wizard");
ItemStages.restrict(<tag:items:forge:storage_blocks/primordial>, "master_wizard");
ItemStages.restrict(<tag:items:forge:nuggets/primordial>, "master_wizard");
ItemStages.restrict(<tag:items:forge:dusts/primordial>, "master_wizard");
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
// EMPTY_TAG (empty tag: forge:crystals/quartz_pure): ItemStages.restrict(<tag:items:forge:crystals/quartz_pure>, "nether");
// EMPTY_TAG (empty tag: forge:crystals/fluix_pure): ItemStages.restrict(<tag:items:forge:crystals/fluix_pure>, "nether");
// OMIT_MOD (mod missing: abyssalcraft): ItemStages.restrict(<item:abyssalcraft:eoa>, "nether");
// OMIT_MOD (mod missing: abyssalcraft): ItemStages.restrict(<item:abyssalcraft:oc>, "nether");
// OMIT_MOD (mod missing: abyssalcraft): ItemStages.restrict(<item:abyssalcraft:powerstonetracker>, "nether");
// OMIT_MOD (mod missing: abyssalcraft): ItemStages.restrict(<item:abyssalcraft:gatewaykey>, "nether");
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
ItemStages.restrict(<item:enderio:dark_steel_sword>, "nether");
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
ItemStages.restrict(<item:enderio:dark_steel_sword>, "novice_engineer");

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
// EMPTY_TAG (empty tag: forge:storage_blocks/gelid_gem): ItemStages.restrict(<tag:items:forge:storage_blocks/gelid_gem>, "skilled_engineer");
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
ItemStages.restrict(<item:minecraft:diamond_sword>, "wielder_of_infinity");
ItemStages.restrict(<item:minecraft:diamond_pickaxe>, "wielder_of_infinity");
ItemStages.restrict(<item:minecraft:diamond_helmet>, "wielder_of_infinity");
ItemStages.restrict(<item:minecraft:diamond_chestplate>, "wielder_of_infinity");
ItemStages.restrict(<item:minecraft:diamond_leggings>, "wielder_of_infinity");
ItemStages.restrict(<item:minecraft:diamond_boots>, "wielder_of_infinity");
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

// === wyvern ===
ItemStages.restrict(<tag:items:forge:ingots/wyvern_metal>, "wyvern");
ItemStages.restrict(<tag:items:forge:storage_blocks/wyvern_metal>, "wyvern");
ItemStages.restrict(<tag:items:forge:nuggets/wyvern_metal>, "wyvern");
ItemStages.restrict(<tag:items:forge:dusts/wyvern_metal>, "wyvern");
ItemStages.restrict(<item:soa_additions:solarium_star>, "wyvern");
ItemStages.restrict(<item:soa_additions:sun_totem>, "wyvern");
ItemStages.restrict(<item:soa_additions:solar_seed>, "wyvern");
ItemStages.restrict(<item:soa_additions:broken_solarium_star>, "wyvern");

