// ============================================================
// SoA Item Stages - Ported from GreedyCraft
// Generated: 2026-04-13 | Updated: 2026-04-15
// Only includes VERIFIED items and standard forge tags.
// Items from uninstalled mods are omitted. 1.20.1 mod ID
// equivalents used where GreedyCraft targeted 1.12 variants.
// Pickup interception handled by GreedyBag item (soa_additions).
//
// Note: GreedyCraft's addModId() blanket mod-gating doesn't exist
// in ItemStages for 1.20.1; equivalent coverage is achieved by
// gating the key items from each mod individually below.
// ============================================================

import mods.itemstages.ItemStages;

// === abyssal_conquerer ===
// SoA Additions mirion (no forge tag registered)
ItemStages.restrict(<item:soa_additions:mirion_ingot>, "abyssal_conquerer");
ItemStages.restrict(<tag:items:forge:nether_stars>, "abyssal_conquerer");
ItemStages.restrict(<item:soa_additions:north_star>, "abyssal_conquerer");

// === awakened ===
ItemStages.restrict(<item:avaritia:neutron_compressor>, "awakened");
ItemStages.restrict(<item:draconicevolution:chaos_shard>, "awakened");
ItemStages.restrict(<tag:items:forge:dusts/draconium_awakened>, "awakened");
ItemStages.restrict(<tag:items:forge:ingots/draconium_awakened>, "awakened");
ItemStages.restrict(<tag:items:forge:nuggets/draconium_awakened>, "awakened");
ItemStages.restrict(<tag:items:forge:storage_blocks/draconium_awakened>, "awakened");
// SoA Additions custom alloys (no forge item-tags registered — restrict items directly)
ItemStages.restrict(<item:soa_additions:chromasteel_ingot>, "awakened");
ItemStages.restrict(<item:soa_additions:protonium_ingot>, "awakened");
ItemStages.restrict(<item:soa_additions:terra_alloy_ingot>, "awakened");
ItemStages.restrict(<item:soa_additions:titanium_ingot>, "awakened");
ItemStages.restrict(<item:soa_additions:titanium_nugget>, "awakened");
ItemStages.restrict(<item:mysticalagriculture:titanium_essence>, "awakened");
ItemStages.restrict(<item:mysticalagriculture:titanium_seeds>, "awakened");
ItemStages.restrict(<item:inventorypets:pet_cloud>, "awakened");
ItemStages.restrict(<item:magicfeather:magic_feather>, "awakened");
// Draconic Evolution draconic tier tools/armor (uses awakened_draconium)
ItemStages.restrict(<item:draconicevolution:draconic_axe>, "awakened");
ItemStages.restrict(<item:draconicevolution:draconic_bow>, "awakened");
ItemStages.restrict(<item:draconicevolution:draconic_pickaxe>, "awakened");
ItemStages.restrict(<item:draconicevolution:draconic_shovel>, "awakened");
ItemStages.restrict(<item:draconicevolution:draconic_hoe>, "awakened");
ItemStages.restrict(<item:draconicevolution:draconic_sword>, "awakened");
ItemStages.restrict(<item:draconicevolution:draconic_chestpiece>, "awakened");
ItemStages.restrict(<item:draconicevolution:draconic_capacitor>, "awakened");
// Draconic Additions draconic harness/necklace
ItemStages.restrict(<item:draconicadditions:draconic_harness>, "awakened");
ItemStages.restrict(<item:draconicadditions:draconic_necklace>, "awakened");

// === challenger_a ===
ItemStages.restrict(<tag:items:forge:dusts/inferium>, "challenger_a");
ItemStages.restrict(<tag:items:forge:gems/inferium>, "challenger_a");
ItemStages.restrict(<tag:items:forge:ingots/inferium>, "challenger_a");
ItemStages.restrict(<tag:items:forge:nuggets/inferium>, "challenger_a");
ItemStages.restrict(<tag:items:forge:ores/inferium>, "challenger_a");
ItemStages.restrict(<tag:items:forge:storage_blocks/inferium>, "challenger_a");
ItemStages.restrict(<item:tinymobfarm:stone_farm>, "challenger_a");

// === challenger_b ===
ItemStages.restrict(<tag:items:forge:gems/prudentium>, "challenger_b");
ItemStages.restrict(<tag:items:forge:ingots/prudentium>, "challenger_b");
ItemStages.restrict(<tag:items:forge:nuggets/prudentium>, "challenger_b");
ItemStages.restrict(<tag:items:forge:storage_blocks/prudentium>, "challenger_b");
ItemStages.restrict(<item:tinymobfarm:iron_farm>, "challenger_b");

// === challenger_c ===
ItemStages.restrict(<item:tinymobfarm:gold_farm>, "challenger_c");

// === challenger_d ===
ItemStages.restrict(<item:tinymobfarm:diamond_farm>, "challenger_d");

// === challenger_e ===
ItemStages.restrict(<tag:items:forge:gems/awakened_supremium>, "challenger_e");
ItemStages.restrict(<tag:items:forge:gems/supremium>, "challenger_e");
ItemStages.restrict(<tag:items:forge:ingots/awakened_supremium>, "challenger_e");
ItemStages.restrict(<tag:items:forge:ingots/supremium>, "challenger_e");
ItemStages.restrict(<tag:items:forge:nuggets/awakened_supremium>, "challenger_e");
ItemStages.restrict(<tag:items:forge:nuggets/supremium>, "challenger_e");
ItemStages.restrict(<tag:items:forge:storage_blocks/awakened_supremium>, "challenger_e");
ItemStages.restrict(<tag:items:forge:storage_blocks/supremium>, "challenger_e");
ItemStages.restrict(<item:tinymobfarm:emerald_farm>, "challenger_e");

// === challenger_f ===
ItemStages.restrict(<tag:items:forge:gems/insanium>, "challenger_f");
ItemStages.restrict(<tag:items:forge:ingots/insanium>, "challenger_f");
ItemStages.restrict(<tag:items:forge:nuggets/insanium>, "challenger_f");
ItemStages.restrict(<tag:items:forge:storage_blocks/insanium>, "challenger_f");
ItemStages.restrict(<item:tinymobfarm:inferno_farm>, "challenger_f");

// === challenger_g ===
ItemStages.restrict(<item:tinymobfarm:ultimate_farm>, "challenger_g");

// === chaotic ===
// SoA Additions custom chaotic-tier material
ItemStages.restrict(<item:soa_additions:cosmilite_ingot>, "chaotic");
ItemStages.restrict(<item:avaritia:eternal_singularity>, "chaotic");
ItemStages.restrict(<item:soa_additions:flux_singularity>, "chaotic");
ItemStages.restrict(<item:soa_additions:mana_singularity>, "chaotic");
ItemStages.restrict(<item:soa_additions:experience_singularity>, "chaotic");
ItemStages.restrict(<item:soa_additions:matter_singularity>, "chaotic");
ItemStages.restrict(<item:soa_additions:anti_entropy_matter>, "chaotic");
// Draconic Evolution chaotic tier tools/armor/machines
ItemStages.restrict(<item:draconicevolution:chaotic_axe>, "chaotic");
ItemStages.restrict(<item:draconicevolution:chaotic_bow>, "chaotic");
ItemStages.restrict(<item:draconicevolution:chaotic_pickaxe>, "chaotic");
ItemStages.restrict(<item:draconicevolution:chaotic_shovel>, "chaotic");
ItemStages.restrict(<item:draconicevolution:chaotic_hoe>, "chaotic");
ItemStages.restrict(<item:draconicevolution:chaotic_staff>, "chaotic");
ItemStages.restrict(<item:draconicevolution:chaotic_sword>, "chaotic");
ItemStages.restrict(<item:draconicevolution:chaotic_chestpiece>, "chaotic");
ItemStages.restrict(<item:draconicevolution:chaotic_capacitor>, "chaotic");
ItemStages.restrict(<item:draconicevolution:chaotic_crafting_injector>, "chaotic");
// Draconic Additions chaos machinery & gear
ItemStages.restrict(<item:draconicadditions:chaos_heart>, "chaotic");
ItemStages.restrict(<item:draconicadditions:chaos_crystalizer>, "chaotic");
ItemStages.restrict(<item:draconicadditions:chaos_extractor>, "chaotic");
ItemStages.restrict(<item:draconicadditions:chaos_infuser>, "chaotic");
ItemStages.restrict(<item:draconicadditions:chaos_liquifier>, "chaotic");
ItemStages.restrict(<item:draconicadditions:chaos_container>, "chaotic");
ItemStages.restrict(<item:draconicadditions:chaotic_harness>, "chaotic");
ItemStages.restrict(<item:draconicadditions:chaotic_necklace>, "chaotic");
ItemStages.restrict(<item:draconicadditions:item_stable_chaos>, "chaotic");
ItemStages.restrict(<item:draconicadditions:item_semi_stable_chaos>, "chaotic");
ItemStages.restrict(<item:draconicadditions:item_unstable_chaos>, "chaotic");
ItemStages.restrict(<item:draconicadditions:item_chaos_injector>, "chaotic");
// Packaged Avaritia sculk-tier auto crafter
ItemStages.restrict(<item:packagedavaritia:sculk_crafter>, "chaotic");

// === chaotic_dominator ===
ItemStages.restrict(<item:draconicevolution:chaotic_core>, "chaotic_dominator");
ItemStages.restrict(<item:draconicevolution:chaotic_energy_core>, "chaotic_dominator");
// NOTE: these items require BOTH chaotic_dominator AND wielder_of_infinity
ItemStages.restrict(<item:soa_additions:death_coin>, "chaotic_dominator", "wielder_of_infinity");
ItemStages.restrict(<item:soa_additions:difficulty_changer>, "chaotic_dominator", "wielder_of_infinity");

// === descendant_of_the_sun ===
ItemStages.restrict(<item:soa_additions:infernium_ingot>, "descendant_of_the_sun");
ItemStages.restrict(<item:soa_additions:infernium_nugget>, "descendant_of_the_sun");
ItemStages.restrict(<item:soa_additions:infernium_ore_block>, "descendant_of_the_sun");
ItemStages.restrict(<item:draconicevolution:awakened_core>, "descendant_of_the_sun");

// === ender_charm ===
ItemStages.restrict(<tag:items:forge:end_stones>, "ender_charm");
ItemStages.restrict(<item:minecraft:end_portal_frame>, "ender_charm");
ItemStages.restrict(<item:minecraft:end_rod>, "ender_charm");
ItemStages.restrict(<item:minecraft:end_stone_bricks>, "ender_charm");
// End Remastered eyes & ancient portal frame (End access gating)
ItemStages.restrict(<item:endrem:wither_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:nether_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:witch_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:corrupted_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:cursed_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:undead_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:undead_soul>, "ender_charm");
ItemStages.restrict(<item:endrem:evil_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:cold_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:old_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:exotic_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:lost_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:guardian_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:rogue_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:black_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:magical_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:cryptic_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:ancient_portal_frame>, "ender_charm");
ItemStages.restrict(<item:endrem:witch_pupil>, "ender_charm");
// ReHooked top-tier hooks & chains (ender teleport / creative flight)
ItemStages.restrict(<item:rehooked:ender_hook>, "ender_charm");
ItemStages.restrict(<item:rehooked:ender_chain>, "ender_charm");
ItemStages.restrict(<item:rehooked:red_hook>, "ender_charm");
// RFTools Power endergenic chain (requires ender pearls / End-tier timing setup)
ItemStages.restrict(<item:rftoolspower:endergenic>, "ender_charm");
ItemStages.restrict(<item:rftoolspower:ender_monitor>, "ender_charm");
ItemStages.restrict(<item:rftoolspower:pearl_injector>, "ender_charm");

// === expert ===
ItemStages.restrict(<item:soa_additions:fake_philosopher_stone>, "expert");
ItemStages.restrict(<item:soa_additions:undead_medkit>, "expert");
ItemStages.restrict(<item:soa_additions:strange_lolipop>, "expert");
ItemStages.restrict(<item:soa_additions:adrenaline>, "expert");
ItemStages.restrict(<item:soa_additions:shield_gum>, "expert");
ItemStages.restrict(<item:soa_additions:goodie_bag>, "expert");

// === fusion_matrix ===
ItemStages.restrict(<tag:items:forge:dusts/draconium>, "fusion_matrix");
ItemStages.restrict(<tag:items:forge:ingots/draconium>, "fusion_matrix");
ItemStages.restrict(<tag:items:forge:nuggets/draconium>, "fusion_matrix");
ItemStages.restrict(<tag:items:forge:ores/draconium>, "fusion_matrix");
ItemStages.restrict(<tag:items:forge:storage_blocks/draconium>, "fusion_matrix");
// SoA Additions electronium (custom fusion-tier alloy)
ItemStages.restrict(<item:soa_additions:electronium_ingot>, "fusion_matrix");
ItemStages.restrict(<item:soa_additions:beast_hand>, "fusion_matrix");
// Draconic Evolution cores & crafting injector (fusion crafting gate)
ItemStages.restrict(<item:draconicevolution:draconic_energy_core>, "fusion_matrix");
ItemStages.restrict(<item:draconicevolution:wyvern_core>, "fusion_matrix");
ItemStages.restrict(<item:draconicevolution:awakened_crafting_injector>, "fusion_matrix");
// Mystical Agriculture draconium essence
ItemStages.restrict(<item:mysticalagriculture:draconium_essence>, "fusion_matrix");
ItemStages.restrict(<item:mysticalagriculture:awakened_draconium_essence>, "fusion_matrix");
// Packaged Draconic auto-crafter for fusion recipes
ItemStages.restrict(<item:packageddraconic:fusion_crafter>, "fusion_matrix");

// === getting_started ===
ItemStages.restrict(<tag:items:forge:chests>, "getting_started");
ItemStages.restrict(<tag:items:forge:cobblestone>, "getting_started");
ItemStages.restrict(<tag:items:forge:dusts/gold>, "getting_started");
ItemStages.restrict(<tag:items:forge:dusts/iron>, "getting_started");
ItemStages.restrict(<tag:items:forge:ingots/gold>, "getting_started");
ItemStages.restrict(<tag:items:forge:ingots/iron>, "getting_started");
ItemStages.restrict(<tag:items:forge:nuggets/gold>, "getting_started");
ItemStages.restrict(<tag:items:forge:nuggets/iron>, "getting_started");
ItemStages.restrict(<tag:items:forge:storage_blocks/gold>, "getting_started");
ItemStages.restrict(<tag:items:forge:storage_blocks/iron>, "getting_started");
ItemStages.restrict(<tag:items:forge:workbenches>, "getting_started");
// Explicit vanilla fallbacks — forge:workbenches / forge:chests may not
// include vanilla items reliably on all packs; restrict them directly.
ItemStages.restrict(<item:minecraft:crafting_table>, "getting_started");
ItemStages.restrict(<item:minecraft:chest>, "getting_started");
ItemStages.restrict(<item:minecraft:trapped_chest>, "getting_started");
ItemStages.restrict(<tag:items:minecraft:planks>, "getting_started");
ItemStages.restrict(<item:minecraft:diamond_axe>, "getting_started");
ItemStages.restrict(<item:minecraft:diamond_pickaxe>, "getting_started");
ItemStages.restrict(<item:minecraft:golden_axe>, "getting_started");
ItemStages.restrict(<item:minecraft:golden_pickaxe>, "getting_started");
ItemStages.restrict(<item:minecraft:iron_axe>, "getting_started");
ItemStages.restrict(<item:minecraft:iron_pickaxe>, "getting_started");
ItemStages.restrict(<item:minecraft:stone_axe>, "getting_started");
ItemStages.restrict(<item:minecraft:stone_pickaxe>, "getting_started");
ItemStages.restrict(<item:minecraft:wooden_axe>, "getting_started");
ItemStages.restrict(<item:minecraft:wooden_pickaxe>, "getting_started");
// Tinkers' Construct tool tables/stations (was <tconstruct:tooltables:*> in GC)
ItemStages.restrict(<item:tconstruct:crafting_station>, "getting_started");
ItemStages.restrict(<item:tconstruct:part_builder>, "getting_started");
ItemStages.restrict(<item:tconstruct:part_chest>, "getting_started");
ItemStages.restrict(<item:tconstruct:tinkers_anvil>, "getting_started");
ItemStages.restrict(<item:tconstruct:tinkers_chest>, "getting_started");
ItemStages.restrict(<item:tconstruct:tinkers_gadgetry>, "getting_started");

// === graduated ===
ItemStages.restrict(<item:botania:creative_pool>, "graduated");
ItemStages.restrict(<item:chancecubes:creative_pendant>, "graduated");
ItemStages.restrict(<item:draconicevolution:creative_capacitor>, "graduated");
ItemStages.restrict(<item:draconicevolution:creative_op_capacitor>, "graduated");
ItemStages.restrict(<item:projecte:tome>, "graduated");
ItemStages.restrict(<item:projecte:watch_of_flowing_time>, "graduated");
ItemStages.restrict(<item:storagedrawers:creative_storage_upgrade>, "graduated");
ItemStages.restrict(<item:soa_additions:ocd_certificate>, "graduated");
ItemStages.restrict(<item:ae2wtlib:wireless_universal_terminal>, "graduated");
// AE2 creative cells
ItemStages.restrict(<item:ae2:creative_energy_cell>, "graduated");
ItemStages.restrict(<item:ae2:creative_fluid_cell>, "graduated");
ItemStages.restrict(<item:ae2:creative_item_cell>, "graduated");
// Mekanism creative storage
ItemStages.restrict(<item:mekanism:creative_bin>, "graduated");
ItemStages.restrict(<item:mekanism:creative_chemical_tank>, "graduated");
ItemStages.restrict(<item:mekanism:creative_energy_cube>, "graduated");
ItemStages.restrict(<item:mekanism:creative_fluid_tank>, "graduated");
// Create creative blocks
ItemStages.restrict(<item:create:creative_crate>, "graduated");
ItemStages.restrict(<item:create:creative_motor>, "graduated");
ItemStages.restrict(<item:create:creative_fluid_tank>, "graduated");
ItemStages.restrict(<item:create:creative_blaze_cake>, "graduated");
// Applied Flux high-capacity FE storage cells (top tiers)
ItemStages.restrict(<item:appflux:fe_16m_cell>, "graduated");
ItemStages.restrict(<item:appflux:fe_16m_portable_cell>, "graduated");
ItemStages.restrict(<item:appflux:fe_64m_cell>, "graduated");
ItemStages.restrict(<item:appflux:fe_64m_portable_cell>, "graduated");
ItemStages.restrict(<item:appflux:fe_256m_cell>, "graduated");
ItemStages.restrict(<item:appflux:fe_256m_portable_cell>, "graduated");
// NOTE: creative_controller requires BOTH graduated AND wielder_of_infinity
ItemStages.restrict(<item:soa_additions:creative_controller>, "graduated", "wielder_of_infinity");
// Dank Storage graduated tier (matches GC dank_null_6 gate)
ItemStages.restrict(<item:dankstorage:dank_6>, "graduated");
ItemStages.restrict(<item:dankstorage:5_to_6>, "graduated");
// RFTools Power creative dimensional cell
ItemStages.restrict(<item:rftoolspower:dimensionalcell_creative>, "graduated");

// === hardmode ===
// Ethaxium (soa_additions) — only ingot & storage_block tags register
ItemStages.restrict(<tag:items:forge:ingots/ethaxium>, "hardmode");
ItemStages.restrict(<tag:items:forge:storage_blocks/ethaxium>, "hardmode");
// SoA Additions custom hardmode alloys (no forge tags registered)
ItemStages.restrict(<item:soa_additions:cryonium_ingot>, "hardmode");
ItemStages.restrict(<item:soa_additions:cytosinite_ingot>, "hardmode");
ItemStages.restrict(<item:soa_additions:shadowium_ingot>, "hardmode");
// SoA Additions gems (amber, malachite, peridot, tanzanite, topaz — no forge tags)
ItemStages.restrict(<item:soa_additions:amber>, "hardmode");
ItemStages.restrict(<item:soa_additions:malachite>, "hardmode");
ItemStages.restrict(<item:soa_additions:peridot>, "hardmode");
ItemStages.restrict(<item:soa_additions:tanzanite>, "hardmode");
ItemStages.restrict(<item:soa_additions:topaz>, "hardmode");
// Gem ores that exist as item tags in SoA
ItemStages.restrict(<tag:items:forge:ores/ruby>, "hardmode");
ItemStages.restrict(<tag:items:forge:ores/sapphire>, "hardmode");
// Mystical Agriculture peridot essences/seeds
ItemStages.restrict(<item:mysticalagriculture:peridot_essence>, "hardmode");
ItemStages.restrict(<item:mysticalagriculture:peridot_seeds>, "hardmode");
ItemStages.restrict(<item:minecraft:dragon_egg>, "hardmode");
ItemStages.restrict(<item:minecraft:elytra>, "hardmode");
ItemStages.restrict(<item:minecraft:popped_chorus_fruit>, "hardmode");
ItemStages.restrict(<item:soa_additions:forbidden_bible>, "hardmode");
ItemStages.restrict(<item:soa_additions:true_blood_sigil>, "hardmode");
ItemStages.restrict(<item:soa_additions:ordinary_medal>, "hardmode");
ItemStages.restrict(<item:soa_additions:medkit_super>, "hardmode");
ItemStages.restrict(<item:soa_additions:wither_soul>, "hardmode");
ItemStages.restrict(<item:soa_additions:dragon_soul>, "hardmode");
ItemStages.restrict(<item:soa_additions:creative_shard>, "hardmode");
ItemStages.restrict(<item:soa_additions:glider>, "hardmode");
// SoA Additions osgloglas (plustic material successor)
ItemStages.restrict(<item:soa_additions:osgloglas_ingot>, "hardmode");
// Cataclysm ignitium set (blaze-king / late-nether boss gear)
ItemStages.restrict(<item:cataclysm:ignitium_ingot>, "hardmode");
ItemStages.restrict(<item:cataclysm:ignitium_block>, "hardmode");
ItemStages.restrict(<item:cataclysm:ignitium_helmet>, "hardmode");
ItemStages.restrict(<item:cataclysm:ignitium_chestplate>, "hardmode");
ItemStages.restrict(<item:cataclysm:ignitium_leggings>, "hardmode");
ItemStages.restrict(<item:cataclysm:ignitium_boots>, "hardmode");
ItemStages.restrict(<item:cataclysm:ignitium_elytra_chestplate>, "hardmode");
ItemStages.restrict(<item:cataclysm:ignitium_upgrade_smithing_template>, "hardmode");
ItemStages.restrict(<item:cataclysm:monstrous_horn>, "hardmode");
ItemStages.restrict(<item:cataclysm:monstrous_eye>, "hardmode");
ItemStages.restrict(<item:cataclysm:monstrous_helm>, "hardmode");
ItemStages.restrict(<item:cataclysm:infernal_forge>, "hardmode");
// Twilight Forest post-boss gear (knightmetal, yeti, scepters, fiery top tier)
ItemStages.restrict(<item:twilightforest:knightmetal_ingot>, "hardmode");
ItemStages.restrict(<item:twilightforest:knightmetal_block>, "hardmode");
ItemStages.restrict(<item:twilightforest:knightmetal_axe>, "hardmode");
ItemStages.restrict(<item:twilightforest:knightmetal_sword>, "hardmode");
ItemStages.restrict(<item:twilightforest:knightmetal_pickaxe>, "hardmode");
ItemStages.restrict(<item:twilightforest:knightmetal_shield>, "hardmode");
ItemStages.restrict(<item:twilightforest:alpha_yeti_fur>, "hardmode");
ItemStages.restrict(<item:twilightforest:yeti_helmet>, "hardmode");
ItemStages.restrict(<item:twilightforest:yeti_chestplate>, "hardmode");
ItemStages.restrict(<item:twilightforest:yeti_leggings>, "hardmode");
ItemStages.restrict(<item:twilightforest:yeti_boots>, "hardmode");
ItemStages.restrict(<item:twilightforest:alpha_yeti_boss_spawner>, "hardmode");
ItemStages.restrict(<item:twilightforest:knight_phantom_boss_spawner>, "hardmode");
ItemStages.restrict(<item:twilightforest:fortification_scepter>, "hardmode");
ItemStages.restrict(<item:twilightforest:lifedrain_scepter>, "hardmode");
ItemStages.restrict(<item:twilightforest:twilight_scepter>, "hardmode");
ItemStages.restrict(<item:twilightforest:zombie_scepter>, "hardmode");
ItemStages.restrict(<item:twilightforest:mazebreaker_pickaxe>, "hardmode");
ItemStages.restrict(<item:twilightforest:diamond_minotaur_axe>, "hardmode");
ItemStages.restrict(<item:twilightforest:giant_pickaxe>, "hardmode");
ItemStages.restrict(<item:twilightforest:giant_sword>, "hardmode");
ItemStages.restrict(<item:twilightforest:hydra_chop>, "hardmode");
ItemStages.restrict(<item:twilightforest:lamp_of_cinders>, "hardmode");
ItemStages.restrict(<item:twilightforest:moonworm_queen>, "hardmode");
ItemStages.restrict(<item:twilightforest:block_and_chain>, "hardmode");
ItemStages.restrict(<item:twilightforest:glass_sword>, "hardmode");

// === master_engineer ===
ItemStages.restrict(<item:cyclic:user>, "master_engineer");
ItemStages.restrict(<item:cyclic:miner>, "master_engineer");
ItemStages.restrict(<item:solarflux:sp_8>, "master_engineer");
ItemStages.restrict(<item:solarflux:sp_avaritia.neutronium>, "master_engineer");
ItemStages.restrict(<item:solarflux:sp_de.chaotic>, "master_engineer");
ItemStages.restrict(<item:solarflux:sp_de.draconic>, "master_engineer");
ItemStages.restrict(<item:solarflux:sp_de.wyvern>, "master_engineer");
// Mekanism late-game automation / generation
ItemStages.restrict(<item:mekanism:antiprotonic_nucleosynthesizer>, "master_engineer");
ItemStages.restrict(<item:mekanism:dimensional_stabilizer>, "master_engineer");
ItemStages.restrict(<item:mekanism:atomic_disassembler>, "master_engineer");
ItemStages.restrict(<item:mekanismgenerators:fusion_reactor_controller>, "master_engineer");
ItemStages.restrict(<item:mekanismgenerators:fusion_reactor_frame>, "master_engineer");
ItemStages.restrict(<item:mekanismgenerators:fusion_reactor_logic_adapter>, "master_engineer");
ItemStages.restrict(<item:mekanismgenerators:fusion_reactor_port>, "master_engineer");
// Packaged Avaritia nether-tier auto crafter (late-game automation)
ItemStages.restrict(<item:packagedavaritia:nether_crafter>, "master_engineer");

// === master_wizard ===
ItemStages.restrict(<item:soa_additions:purifying_pill>, "master_wizard");
ItemStages.restrict(<item:soa_additions:energy_matter_core>, "master_wizard");
// Mythic Botany greatest rings (top-tier rings)
ItemStages.restrict(<item:mythicbotany:andwari_ring>, "master_wizard");
ItemStages.restrict(<item:mythicbotany:cursed_andwari_ring>, "master_wizard");
ItemStages.restrict(<item:mythicbotany:aura_ring_greatest>, "master_wizard");
ItemStages.restrict(<item:mythicbotany:mana_ring_greatest>, "master_wizard");

// === nether ===
// Meteor & Ravaging (item tags present)
ItemStages.restrict(<tag:items:forge:ingots/meteor>, "nether");
ItemStages.restrict(<tag:items:forge:storage_blocks/meteor>, "nether");
ItemStages.restrict(<tag:items:forge:ingots/ravaging>, "nether");
ItemStages.restrict(<tag:items:forge:storage_blocks/ravaging>, "nether");
// SoA Additions custom nether-tier alloys (no forge tags registered)
ItemStages.restrict(<item:soa_additions:aeroite_ingot>, "nether");
ItemStages.restrict(<item:soa_additions:aqualite_ingot>, "nether");
ItemStages.restrict(<item:soa_additions:asgardium_ingot>, "nether");
ItemStages.restrict(<item:soa_additions:durasteel_ingot>, "nether");
ItemStages.restrict(<item:soa_additions:gaiasteel_ingot>, "nether");
// Active tags
ItemStages.restrict(<tag:items:forge:bones/wither>, "nether");
ItemStages.restrict(<tag:items:forge:wither_bones>, "nether");
ItemStages.restrict(<tag:items:forge:dusts/cobalt>, "nether");
ItemStages.restrict(<tag:items:forge:dusts/fluix>, "nether");
ItemStages.restrict(<tag:items:forge:dusts/glowstone>, "nether");
ItemStages.restrict(<tag:items:forge:dusts/lumium>, "nether");
ItemStages.restrict(<tag:items:forge:dusts/netherite>, "nether");
ItemStages.restrict(<tag:items:forge:dusts/quartz>, "nether");
ItemStages.restrict(<tag:items:forge:gears/lumium>, "nether");
ItemStages.restrict(<tag:items:forge:gems/fluix>, "nether");
ItemStages.restrict(<tag:items:forge:gems/quartz>, "nether");
ItemStages.restrict(<tag:items:forge:ingots/cobalt>, "nether");
ItemStages.restrict(<tag:items:forge:ingots/lumium>, "nether");
ItemStages.restrict(<tag:items:forge:ingots/netherite>, "nether");
ItemStages.restrict(<tag:items:forge:ingots/netherite_scrap>, "nether");
ItemStages.restrict(<tag:items:forge:nuggets/cobalt>, "nether");
ItemStages.restrict(<tag:items:forge:nuggets/lumium>, "nether");
ItemStages.restrict(<tag:items:forge:nuggets/netherite>, "nether");
ItemStages.restrict(<tag:items:forge:ores/cobalt>, "nether");
ItemStages.restrict(<tag:items:forge:ores/netherite_scrap>, "nether");
ItemStages.restrict(<tag:items:forge:ores/quartz>, "nether");
ItemStages.restrict(<tag:items:forge:plates/lumium>, "nether");
ItemStages.restrict(<tag:items:forge:raw_materials/cobalt>, "nether");
ItemStages.restrict(<tag:items:forge:storage_blocks/cobalt>, "nether");
ItemStages.restrict(<tag:items:forge:storage_blocks/fluix>, "nether");
ItemStages.restrict(<tag:items:forge:storage_blocks/glowstone>, "nether");
ItemStages.restrict(<tag:items:forge:storage_blocks/lumium>, "nether");
ItemStages.restrict(<tag:items:forge:storage_blocks/netherite>, "nether");
ItemStages.restrict(<tag:items:forge:storage_blocks/quartz>, "nether");
ItemStages.restrict(<item:botania:enchanter>, "nether");
ItemStages.restrict(<item:inventorypets:pet_nether_portal>, "nether");
ItemStages.restrict(<item:inventorypets:pet_squid>, "nether");
ItemStages.restrict(<item:minecraft:anvil>, "nether");
ItemStages.restrict(<item:minecraft:beacon>, "nether");
ItemStages.restrict(<item:minecraft:blaze_powder>, "nether");
ItemStages.restrict(<item:minecraft:blaze_rod>, "nether");
ItemStages.restrict(<item:minecraft:brewing_stand>, "nether");
ItemStages.restrict(<item:minecraft:enchanted_book>, "nether");
ItemStages.restrict(<item:minecraft:enchanting_table>, "nether");
ItemStages.restrict(<item:minecraft:ender_eye>, "nether");
ItemStages.restrict(<item:minecraft:ghast_tear>, "nether");
ItemStages.restrict(<item:minecraft:magma_cream>, "nether");
ItemStages.restrict(<item:quark:blaze_lantern>, "nether");
ItemStages.restrict(<item:treasure2:skull_sword>, "nether");
ItemStages.restrict(<item:soa_additions:shining_star>, "nether");
ItemStages.restrict(<item:soa_additions:medkit_big>, "nether");
ItemStages.restrict(<item:soa_additions:blood_sigil>, "nether");
ItemStages.restrict(<item:soa_additions:bloody_sacrifice>, "nether");
ItemStages.restrict(<item:soa_additions:awakened_eye>, "nether");
ItemStages.restrict(<item:soa_additions:overflux_capacitor>, "nether");
// Cataclysm black steel tier (overworld mid-nether progression)
ItemStages.restrict(<item:cataclysm:black_steel_ingot>, "nether");
ItemStages.restrict(<item:cataclysm:black_steel_block>, "nether");
ItemStages.restrict(<item:cataclysm:black_steel_axe>, "nether");
ItemStages.restrict(<item:cataclysm:black_steel_sword>, "nether");
ItemStages.restrict(<item:cataclysm:black_steel_pickaxe>, "nether");
ItemStages.restrict(<item:cataclysm:black_steel_shovel>, "nether");
ItemStages.restrict(<item:cataclysm:black_steel_hoe>, "nether");
ItemStages.restrict(<item:cataclysm:black_steel_targe>, "nether");
// Twilight Forest fiery set (requires nether ingredients)
ItemStages.restrict(<item:twilightforest:fiery_ingot>, "nether");
ItemStages.restrict(<item:twilightforest:fiery_blood>, "nether");
ItemStages.restrict(<item:twilightforest:fiery_tears>, "nether");
ItemStages.restrict(<item:twilightforest:fiery_sword>, "nether");
ItemStages.restrict(<item:twilightforest:fiery_pickaxe>, "nether");
ItemStages.restrict(<item:twilightforest:fiery_helmet>, "nether");
ItemStages.restrict(<item:twilightforest:fiery_chestplate>, "nether");
ItemStages.restrict(<item:twilightforest:fiery_leggings>, "nether");
ItemStages.restrict(<item:twilightforest:fiery_boots>, "nether");
// Twilight Forest ironwood set (mid-tier)
ItemStages.restrict(<item:twilightforest:ironwood_ingot>, "nether");
ItemStages.restrict(<item:twilightforest:ironwood_pickaxe>, "nether");
ItemStages.restrict(<item:twilightforest:ironwood_sword>, "nether");
ItemStages.restrict(<item:twilightforest:ironwood_axe>, "nether");
ItemStages.restrict(<item:twilightforest:ironwood_helmet>, "nether");
ItemStages.restrict(<item:twilightforest:ironwood_chestplate>, "nether");
ItemStages.restrict(<item:twilightforest:ironwood_leggings>, "nether");
ItemStages.restrict(<item:twilightforest:ironwood_boots>, "nether");
// Mekanism mid/late teleporter + digital miner + boiler / reactor chassis (reactor mid-tier)
ItemStages.restrict(<item:mekanism:digital_miner>, "nether");
ItemStages.restrict(<item:mekanism:quantum_entangloporter>, "nether");
ItemStages.restrict(<item:mekanism:teleporter>, "nether");
ItemStages.restrict(<item:mekanism:portable_teleporter>, "nether");
ItemStages.restrict(<item:mekanism:teleporter_frame>, "nether");
ItemStages.restrict(<item:mekanism:seismic_vibrator>, "nether");
ItemStages.restrict(<item:mekanism:seismic_reader>, "nether");
ItemStages.restrict(<item:mekanism:flamethrower>, "nether");
ItemStages.restrict(<item:mekanism:robit>, "nether");
ItemStages.restrict(<item:mekanism:boiler_casing>, "nether");
ItemStages.restrict(<item:mekanism:boiler_valve>, "nether");
// ReHooked mid/late hooks & chains (diamond, blaze — nether-material tier)
ItemStages.restrict(<item:rehooked:diamond_hook>, "nether");
ItemStages.restrict(<item:rehooked:blaze_hook>, "nether");
ItemStages.restrict(<item:rehooked:diamond_chain>, "nether");
ItemStages.restrict(<item:rehooked:blaze_chain>, "nether");
// Dank Storage mid tier
ItemStages.restrict(<item:dankstorage:dank_5>, "nether");
ItemStages.restrict(<item:dankstorage:4_to_5>, "nether");
// RFTools Power blazing generator chain (requires nether blaze rods)
ItemStages.restrict(<item:rftoolspower:blazing_rod>, "nether");
ItemStages.restrict(<item:rftoolspower:blazing_generator>, "nether");
ItemStages.restrict(<item:rftoolspower:blazing_agitator>, "nether");
ItemStages.restrict(<item:rftoolspower:blazing_infuser>, "nether");

// === novice_engineer ===
ItemStages.restrict(<item:enderio:dark_steel_sword>, "novice_engineer");
// Dank Storage early tier
ItemStages.restrict(<item:dankstorage:dank_3>, "novice_engineer");
ItemStages.restrict(<item:dankstorage:2_to_3>, "novice_engineer");

// === novice_wizard ===
// Blood Magic progression (altars, sigils, rituals, soul-forge)
ItemStages.restrict(<item:bloodmagic:incensealtar>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:demoncrucible>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:demonpylon>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:demoncrystallizer>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:soulforge>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:masterritualstone>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:ritualstone>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:ritualdiviner>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:ritualdivinerdusk>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:ritualtinkerer>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:divinationsigil>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:airsigil>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:lavasigil>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:watersigil>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:voidsigil>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:growthsigil>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:icesigil>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:miningsigil>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:telepositionsigil>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:bloodlightsigil>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:seersigil>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:sigilofholding>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:sigilofmagnetism>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:sigilofsuppression>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:soulgempetty>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:soulgemlesser>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:soulgemcommon>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:soulgemgreater>, "novice_wizard");
// Blood Magic materials & crystals
ItemStages.restrict(<item:bloodmagic:demonslate>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:rawdemonite>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:demonitefragment>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:demonitegravel>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:rawdemoniteblock>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:rawdemoncrystal>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:corrosivedemoncrystal>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:destructivedemoncrystal>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:vengefuldemoncrystal>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:steadfastdemoncrystal>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:basemonstersoul>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:demonwillgauge>, "novice_wizard");
// Blood Magic sentient/soul weapons
ItemStages.restrict(<item:bloodmagic:soulaxe>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:soulpickaxe>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:soulsword>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:soulshovel>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:soulscythe>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:soulsnare>, "novice_wizard");
// Blood Magic elemental ritual stones
ItemStages.restrict(<item:bloodmagic:waterritualstone>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:fireritualstone>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:earthritualstone>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:airritualstone>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:duskritualstone>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:lightritualstone>, "novice_wizard");

// === skilled_engineer ===
// Active tags
ItemStages.restrict(<tag:items:forge:dusts/cyanite>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:dusts/enderium>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:dusts/yellorium>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:gears/enderium>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:ingots/cyanite>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:ingots/enderium>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:ingots/yellorium>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:nuggets/enderium>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:nuggets/yellorium>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:plates/enderium>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:raw_materials/yellorium>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:storage_blocks/cyanite>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:storage_blocks/enderium>, "skilled_engineer");
ItemStages.restrict(<tag:items:forge:storage_blocks/yellorium>, "skilled_engineer");
// SoA Additions osmiridium (replaces GC "iridium")
ItemStages.restrict(<item:soa_additions:osmiridium_ingot>, "skilled_engineer");
// Platinum items from various mods (no unified forge tag in this pack)
ItemStages.restrict(<item:create:crushed_raw_platinum>, "skilled_engineer");
ItemStages.restrict(<item:embers:platinum_crystal_seed>, "skilled_engineer");
ItemStages.restrict(<item:potionsmaster:platinum_powder>, "skilled_engineer");
ItemStages.restrict(<item:potionsmaster:calcinatedplatinum_powder>, "skilled_engineer");
// Mystical Agriculture iridium & platinum essences/seeds
ItemStages.restrict(<item:mysticalagriculture:iridium_essence>, "skilled_engineer");
ItemStages.restrict(<item:mysticalagriculture:iridium_seeds>, "skilled_engineer");
ItemStages.restrict(<item:mysticalagriculture:platinum_essence>, "skilled_engineer");
ItemStages.restrict(<item:mysticalagriculture:platinum_seeds>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:anglesite_ore>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:benitoite_ore>, "skilled_engineer");
ItemStages.restrict(<item:solarflux:sp_5>, "skilled_engineer");
ItemStages.restrict(<item:solarflux:sp_6>, "skilled_engineer");
ItemStages.restrict(<item:solarflux:sp_7>, "skilled_engineer");
// Redstone Arsenal flux-powered tools/weapons
ItemStages.restrict(<item:redstone_arsenal:flux_sword>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_axe>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_pickaxe>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_shovel>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_bow>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_crossbow>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_hammer>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_excavator>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_fishing_rod>, "skilled_engineer");
// Redstone Arsenal flux armor
ItemStages.restrict(<item:redstone_arsenal:flux_helmet>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_chestplate>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_leggings>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_boots>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_elytra>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_shield>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_quiver>, "skilled_engineer");
// Redstone Arsenal flux materials/components
ItemStages.restrict(<item:redstone_arsenal:flux_ingot>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_nugget>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_gear>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_plating>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_gem>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_gem_block>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_metal_block>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_dust>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_obsidian_rod>, "skilled_engineer");
ItemStages.restrict(<item:redstone_arsenal:flux_controller>, "skilled_engineer");
// Big Reactors basic reactor & turbine components + top-tier energy core (GC reactor gate)
ItemStages.restrict(<item:bigreactors:basic_reactorcasing>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:basic_reactorcontroller>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:basic_reactorfuelrod>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:basic_reactorcontrolrod>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:basic_turbinecasing>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:basic_turbinecontroller>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:basic_turbinerotorbearing>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:basic_turbinerotorshaft>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:basic_turbinerotorblade>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:blutonium_ingot>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:blutonium_block>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:ludicrite_block>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:energycore>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:energizercontroller>, "skilled_engineer");
// Flux Networks wireless power network (GC had mod installed; gate matches tier)
ItemStages.restrict(<item:fluxnetworks:basic_flux_storage>, "skilled_engineer");
ItemStages.restrict(<item:fluxnetworks:flux_controller>, "skilled_engineer");
ItemStages.restrict(<item:fluxnetworks:flux_plug>, "skilled_engineer");
ItemStages.restrict(<item:fluxnetworks:flux_point>, "skilled_engineer");
ItemStages.restrict(<item:fluxnetworks:gargantuan_flux_storage>, "skilled_engineer");
ItemStages.restrict(<item:fluxnetworks:herculean_flux_storage>, "skilled_engineer");
// Extended Crafting tables (table-tier progression; ultimate handled in wielder_of_infinity)
ItemStages.restrict(<item:extendedcrafting:basic_table>, "skilled_engineer");
ItemStages.restrict(<item:extendedcrafting:advanced_table>, "skilled_engineer");
ItemStages.restrict(<item:extendedcrafting:elite_table>, "skilled_engineer");
ItemStages.restrict(<item:extendedcrafting:epic_table>, "skilled_engineer");
ItemStages.restrict(<item:extendedcrafting:basic_auto_table>, "skilled_engineer");
ItemStages.restrict(<item:extendedcrafting:advanced_auto_table>, "skilled_engineer");
ItemStages.restrict(<item:extendedcrafting:elite_auto_table>, "skilled_engineer");
ItemStages.restrict(<item:extendedcrafting:epic_auto_table>, "skilled_engineer");
ItemStages.restrict(<item:extendedcrafting:handheld_table>, "skilled_engineer");
ItemStages.restrict(<item:extendedcrafting:ender_crafter>, "skilled_engineer");
ItemStages.restrict(<item:extendedcrafting:flux_crafter>, "skilled_engineer");
ItemStages.restrict(<item:extendedcrafting:auto_ender_crafter>, "skilled_engineer");
ItemStages.restrict(<item:extendedcrafting:auto_flux_crafter>, "skilled_engineer");
// Dank Storage engineer tier
ItemStages.restrict(<item:dankstorage:dank_4>, "skilled_engineer");
ItemStages.restrict(<item:dankstorage:3_to_4>, "skilled_engineer");
// RFTools Base — machine-frame tier materials, security, and infuser
ItemStages.restrict(<item:rftoolsbase:machine_frame>, "skilled_engineer");
ItemStages.restrict(<item:rftoolsbase:machine_base>, "skilled_engineer");
ItemStages.restrict(<item:rftoolsbase:machine_infuser>, "skilled_engineer");
ItemStages.restrict(<item:rftoolsbase:dimensionalshard>, "skilled_engineer");
ItemStages.restrict(<item:rftoolsbase:dimensionalshard_overworld>, "skilled_engineer");
ItemStages.restrict(<item:rftoolsbase:dimensionalshard_nether>, "skilled_engineer");
ItemStages.restrict(<item:rftoolsbase:dimensionalshard_end>, "skilled_engineer");
ItemStages.restrict(<item:rftoolsbase:infused_diamond>, "skilled_engineer");
ItemStages.restrict(<item:rftoolsbase:infused_enderpearl>, "skilled_engineer");
ItemStages.restrict(<item:rftoolsbase:information_screen>, "skilled_engineer");
// RFTools Control — programmable automation (processor / program cards / modules)
ItemStages.restrict(<item:rftoolscontrol:programmer>, "skilled_engineer");
ItemStages.restrict(<item:rftoolscontrol:processor>, "skilled_engineer");
ItemStages.restrict(<item:rftoolscontrol:craftingstation>, "skilled_engineer");
ItemStages.restrict(<item:rftoolscontrol:node>, "skilled_engineer");
ItemStages.restrict(<item:rftoolscontrol:workbench>, "skilled_engineer");
ItemStages.restrict(<item:rftoolscontrol:tank>, "skilled_engineer");
ItemStages.restrict(<item:rftoolscontrol:program_card>, "skilled_engineer");
ItemStages.restrict(<item:rftoolscontrol:card_base>, "skilled_engineer");
ItemStages.restrict(<item:rftoolscontrol:cpu_core_500>, "skilled_engineer");
ItemStages.restrict(<item:rftoolscontrol:cpu_core_1000>, "skilled_engineer");
ItemStages.restrict(<item:rftoolscontrol:cpu_core_2000>, "skilled_engineer");
ItemStages.restrict(<item:rftoolscontrol:ram_chip>, "skilled_engineer");
ItemStages.restrict(<item:rftoolscontrol:network_card>, "skilled_engineer");
ItemStages.restrict(<item:rftoolscontrol:advanced_network_card>, "skilled_engineer");
ItemStages.restrict(<item:rftoolscontrol:network_identifier>, "skilled_engineer");
ItemStages.restrict(<item:rftoolscontrol:graphics_card>, "skilled_engineer");
ItemStages.restrict(<item:rftoolscontrol:variable_module>, "skilled_engineer");
ItemStages.restrict(<item:rftoolscontrol:interaction_module>, "skilled_engineer");
ItemStages.restrict(<item:rftoolscontrol:console_module>, "skilled_engineer");
ItemStages.restrict(<item:rftoolscontrol:vectorart_module>, "skilled_engineer");
ItemStages.restrict(<item:rftoolscontrol:tablet_processor>, "skilled_engineer");
ItemStages.restrict(<item:rftoolscontrol:token>, "skilled_engineer");
// RFTools Power — power cells, cores, coal/dimensional gens, monitors
ItemStages.restrict(<item:rftoolspower:power_core1>, "skilled_engineer");
ItemStages.restrict(<item:rftoolspower:power_core2>, "skilled_engineer");
ItemStages.restrict(<item:rftoolspower:power_core3>, "skilled_engineer");
ItemStages.restrict(<item:rftoolspower:powercell_card>, "skilled_engineer");
ItemStages.restrict(<item:rftoolspower:cell1>, "skilled_engineer");
ItemStages.restrict(<item:rftoolspower:cell2>, "skilled_engineer");
ItemStages.restrict(<item:rftoolspower:cell3>, "skilled_engineer");
ItemStages.restrict(<item:rftoolspower:dimensionalcell>, "skilled_engineer");
ItemStages.restrict(<item:rftoolspower:dimensionalcell_simple>, "skilled_engineer");
ItemStages.restrict(<item:rftoolspower:dimensionalcell_advanced>, "skilled_engineer");
ItemStages.restrict(<item:rftoolspower:coalgenerator>, "skilled_engineer");
ItemStages.restrict(<item:rftoolspower:power_monitor>, "skilled_engineer");
ItemStages.restrict(<item:rftoolspower:power_level>, "skilled_engineer");

// === skilled_wizard ===
// SoA Additions custom wizard-tier alloys (no forge tags registered)
ItemStages.restrict(<item:soa_additions:astral_metal_ingot>, "skilled_wizard");
ItemStages.restrict(<item:soa_additions:crimsonite_ingot>, "skilled_wizard");
ItemStages.restrict(<item:soa_additions:arcane_crystal_ball>, "skilled_wizard");
// Mythic Botany alfsteel (successor to extrabotany / botanicadds)
ItemStages.restrict(<item:mythicbotany:alfsteel_ingot>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:alfsteel_block>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:alfsteel_nugget>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:alfsteel_pylon>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:alfsteel_axe>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:alfsteel_pick>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:alfsteel_sword>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:alfsteel_helmet>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:alfsteel_chestplate>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:alfsteel_leggings>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:alfsteel_boots>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:alfsteel_template>, "skilled_wizard");
// Mythic Botany Norse-saga items (excludes mjoellnir + gjallar_horn_full per balance)
ItemStages.restrict(<item:mythicbotany:gjallar_horn_empty>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:faded_nether_star>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:kvasir_blood>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:kvasir_mead>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:fimbultyr_tablet>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:central_rune_holder>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:mana_collector>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:mana_infuser>, "skilled_wizard");

// === wielder_of_infinity ===
ItemStages.restrict(<item:draconicevolution:draconic_staff>, "wielder_of_infinity");
ItemStages.restrict(<item:solarflux:sp_avaritia.infinity>, "wielder_of_infinity");
ItemStages.restrict(<item:soa_additions:pioneer_medal>, "wielder_of_infinity");
ItemStages.restrict(<item:soa_additions:greedy_medal>, "wielder_of_infinity");
ItemStages.restrict(<item:soa_additions:creative_soul>, "wielder_of_infinity");
ItemStages.restrict(<item:soa_additions:infinity_stone>, "wielder_of_infinity");
// Avaritia infinity tools/weapons
ItemStages.restrict(<item:avaritia:infinity_sword>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:infinity_bow>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:infinity_crossbow>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:infinity_pickaxe>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:infinity_shovel>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:infinity_axe>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:infinity_hoe>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:infinity_trident>, "wielder_of_infinity");
// Avaritia infinity armor
ItemStages.restrict(<item:avaritia:infinity_helmet>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:infinity_chestplate>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:infinity_pants>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:infinity_boots>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:infinity_elytra>, "wielder_of_infinity");
// Avaritia infinity curios / utility / resources
ItemStages.restrict(<item:avaritia:infinity_ingot>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:infinity_nugget>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:infinity_catalyst>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:infinity_upgrade>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:infinity_ring>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:infinity_shield>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:infinity_totem>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:infinity_bucket>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:infinity_chest>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:infinity_clock>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:infinity_umbrella>, "wielder_of_infinity");
// Avaritia compressed crafting tables
ItemStages.restrict(<item:avaritia:compressed_crafting_table>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:double_compressed_crafting_table>, "wielder_of_infinity");
// Avaritia extreme crafting station, anvil, smithing table (top-tier crafting)
ItemStages.restrict(<item:avaritia:extreme_crafting_table>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:extreme_smithing_table>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:extreme_anvil>, "wielder_of_infinity");
// Extended Crafting ultimate ingot (final material of EC progression)
ItemStages.restrict(<item:extendedcrafting:the_ultimate_ingot>, "wielder_of_infinity");
ItemStages.restrict(<item:extendedcrafting:ultimate_table>, "wielder_of_infinity");
ItemStages.restrict(<item:extendedcrafting:ultimate_auto_table>, "wielder_of_infinity");
// Packaged Avaritia top-tier auto crafters
ItemStages.restrict(<item:packagedavaritia:end_crafter>, "wielder_of_infinity");
ItemStages.restrict(<item:packagedavaritia:extreme_crafter>, "wielder_of_infinity");
// Packaged Draconic top-tier injectors
ItemStages.restrict(<item:packageddraconic:marked_chaotic_injector>, "wielder_of_infinity");
ItemStages.restrict(<item:packageddraconic:marked_draconic_injector>, "wielder_of_infinity");
ItemStages.restrict(<item:packageddraconic:marked_draconium_injector>, "wielder_of_infinity");
// Applied Botanics creative mana cell (infinite mana, top-tier magic)
ItemStages.restrict(<item:appbot:creative_mana_cell>, "wielder_of_infinity");
// Dank Storage top tier
ItemStages.restrict(<item:dankstorage:dank_7>, "wielder_of_infinity");
ItemStages.restrict(<item:dankstorage:6_to_7>, "wielder_of_infinity");

// === wither_slayer ===
// Cataclysm witherite (Wither-derived metal, unlocked by beating the Wither)
ItemStages.restrict(<item:cataclysm:witherite_ingot>, "wither_slayer");
ItemStages.restrict(<item:cataclysm:witherite_block>, "wither_slayer");
ItemStages.restrict(<item:enderio:reinforced_obsidian_block>, "wither_slayer");
ItemStages.restrict(<item:minecraft:end_crystal>, "wither_slayer");
ItemStages.restrict(<item:mysticalagriculture:witherproof_block>, "wither_slayer");
ItemStages.restrict(<item:mysticalagriculture:witherproof_glass>, "wither_slayer");
ItemStages.restrict(<item:soa_additions:bravery_certificate>, "wither_slayer");
ItemStages.restrict(<item:soa_additions:ender_charm>, "wither_slayer");

// === wyvern ===
ItemStages.restrict(<item:soa_additions:solarium_star>, "wyvern");
ItemStages.restrict(<item:soa_additions:sun_totem>, "wyvern");
ItemStages.restrict(<item:soa_additions:solar_seed>, "wyvern");
ItemStages.restrict(<item:soa_additions:broken_solarium_star>, "wyvern");
// Avaritia neutron collector (cosmic neutronium progression)
ItemStages.restrict(<item:avaritia:neutron_collector>, "wyvern");
// Draconic Evolution wyvern tier tools/armor
ItemStages.restrict(<item:draconicevolution:wyvern_axe>, "wyvern");
ItemStages.restrict(<item:draconicevolution:wyvern_bow>, "wyvern");
ItemStages.restrict(<item:draconicevolution:wyvern_pickaxe>, "wyvern");
ItemStages.restrict(<item:draconicevolution:wyvern_shovel>, "wyvern");
ItemStages.restrict(<item:draconicevolution:wyvern_hoe>, "wyvern");
ItemStages.restrict(<item:draconicevolution:wyvern_sword>, "wyvern");
ItemStages.restrict(<item:draconicevolution:wyvern_chestpiece>, "wyvern");
ItemStages.restrict(<item:draconicevolution:wyvern_capacitor>, "wyvern");
ItemStages.restrict(<item:draconicevolution:wyvern_crafting_injector>, "wyvern");
// Draconic Additions wyvern harness/necklace
ItemStages.restrict(<item:draconicadditions:wyvern_harness>, "wyvern");
ItemStages.restrict(<item:draconicadditions:wyvern_necklace>, "wyvern");
// Packaged Draconic wyvern auto-injector
ItemStages.restrict(<item:packageddraconic:marked_wyvern_injector>, "wyvern");

// ============================================================
// Pickup interception handled by GreedyBag item (soa_additions)
// Multi-stage items:
//   death_coin, difficulty_changer (chaotic_dominator + wielder_of_infinity)
//   creative_controller (graduated + wielder_of_infinity)
//
// 1.20.1 MOD ID MAPPINGS FROM GREEDYCRAFT (1.12):
//   cyclicmagic:* → cyclic:*
//   projecte:item.pe_tome → projecte:tome
//   projecte:item.pe_time_watch → projecte:watch_of_flowing_time
//   tconstruct:tooltables:0-5 → tconstruct:crafting_station / part_builder
//                               / part_chest / tinkers_anvil / tinkers_chest
//                               / tinkers_gadgetry
//   additions:greedycraft-* → soa_additions:*
//   eternalsingularity:eternal_singularity → avaritia:eternal_singularity
//   draconicevolution:draconic_staff_of_power → draconicevolution:draconic_staff
//   draconicevolution:wyvern_core / draconic_core → same name in 1.20.1
//   solarflux:solar_panel_infinity → solarflux:sp_avaritia.infinity
//   extrabotany / botanicadds → mythicbotany (alfsteel tier, Norse items, rings)
//   hook:3 / hook:4 → rehooked:diamond_hook / rehooked:ender_hook tiers
//   dank_null_6 → dankstorage:dank_6 (full tier ladder 1-7 applied)
//   plustic materials → soa_additions:osgloglas_ingot (hardmode)
//   endrem (End Remastered) → endrem:*_eye gated to ender_charm (dimension access)
//   packagedavaritia / packageddraconic → tiered auto-crafters for avaritia/DE
//   twilightforest:shield_scepter → twilightforest:fortification_scepter
//
// OMITTED (mod not in SoA):
//   fearless_man stage (abyssalcraft entirely removed)
//   thaumcraft/thaumadditions/thaumictinkerer/thaumicwonders content
//     (thaumon provides blocks only, no magic progression)
//   astralsorcery (replaced by ars_nouveau; intentionally LEFT UNGATED)
//   ars_nouveau / ars_elemental / ars_additions (progression intentionally
//     left ungated — handled via in-mod research mechanics)
//   forbidden_arcanus (intentionally LEFT UNGATED — self-contained research)
//   cqrepoured, defiledlands, netherex, darkutils
//   extrautils2, actuallyadditions, randomthings
//   rftools main (builder/shield_* blocks) — replaced by split modules
//     rftoolsbase + rftoolscontrol + rftoolspower (all gated skilled_engineer+)
//   extrabotany, projectex (replaced by projectextended)
//   cyclicmagic (replaced by cyclic)
//   ambience, hooked (replaced by rehooked), openblocks
//   openmodularturrets, modularmachinery
//   plustic (materials → soa_additions), tofucraft, toolprogression
//   conarm, colytra, tconevo
//   wct/wit/wft (replaced by ae2wtlib:wireless_universal_terminal)
// DELIBERATELY UNGATED (per user balance decision):
//   mythicbotany:mjoellnir, mythicbotany:gjallar_horn_full
//   forbidden_arcanus:eternal_stella (plus all other forbidden_arcanus)
//
// SoA Additions registers most custom materials as direct items
// (soa_additions:*_ingot) rather than via forge item tags, so they're
// restricted individually above. Materials with NO item in SoA have
// been dropped entirely:
//   novice_wizard: bound_metal, sentient_metal (no items)
//   master_wizard: primordial (no items)
//   nether: ardite, demonic_metal, valkyrie (only aether gear,
//           already dimension-gated)
//   wither_slayer: evil_metal, stellar_alloy (no items)
//   wyvern: wyvern_metal (wyvern tools already restricted directly)
// ============================================================
