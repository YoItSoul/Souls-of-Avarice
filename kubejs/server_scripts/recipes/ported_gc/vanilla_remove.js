// Ported from GreedyCraft: scripts/recipes/vanilla/crafting_table/remove.zs
// 1.12.2 CraftTweaker -> 1.20.1 KubeJS
//
// Bulk recipe removals. This is a straight 1:1 translation; KubeJS fails
// silent for absent-mod outputs, which is acceptable here (removals for
// ghost items are no-ops). IDs rewritten per soa_exports/items.json and
// memory/project_gc_port_id_mapping.md.
//
// Absent-mod removals intentionally kept as documentation -- if those mods
// are ever added back, the removals fire correctly.
//
// projecte:item.pe_<X> -> projecte:<X>  (standard 1.20 rename)

console.info('[soa_ported] vanilla_remove.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] vanilla_remove.js: registering recipes')

    const outputs = [
        // ProjectE
        'projecte:philosophers_stone',
        'projecte:transmutation_table',
        'projecte:rm_hoe','projecte:rm_pickaxe','projecte:rm_axe','projecte:rm_shovel',
        'projecte:rm_hammer','projecte:rm_sword','projecte:rm_shears','projecte:rm_katar',
        'projecte:rm_morning_star',
        'projecte:rm_helmet','projecte:rm_chestplate','projecte:rm_leggings','projecte:rm_boots',
        'projecte:gem_helmet','projecte:gem_chestplate','projecte:gem_leggings','projecte:gem_boots',
        'projecte:dm_helmet','projecte:dm_chestplate','projecte:dm_leggings','projecte:dm_boots',
        'projecte:harvest_goddess_band',
        'projecte:collector_mk1','projecte:collector_mk2','projecte:collector_mk3',
        'projecte:nova_catalyst','projecte:nova_cataclysm',
        'projecte:soul_stone','projecte:body_stone',
        'projecte:transmutation_tablet',
        'projecte:interdiction_torch',
        'projecte:relay_mk1','projecte:relay_mk2','projecte:relay_mk3',
        'projecte:condenser_mk1','projecte:condenser_mk2',
        'projecte:repair_talisman',
        'projecte:swiftwolf_rending_gale',
        'projecte:dm_hammer','projecte:dm_shears','projecte:dm_pickaxe','projecte:dm_axe',
        'projecte:dm_shovel','projecte:dm_sword','projecte:dm_hoe',
        'projecte:rm_furnace','projecte:dm_furnace',

        // DE / DA
        'draconicevolution:wyvern_axe','draconicevolution:wyvern_bow','draconicevolution:wyvern_pickaxe',
        'draconicevolution:wyvern_sword','draconicevolution:wyvern_shovel',
        'draconicevolution:wyvern_helm','draconicevolution:wyvern_chestpiece', // GC: wyvern_chest
        'draconicevolution:wyvern_leggings','draconicevolution:wyvern_boots',
        'draconicevolution:grinder',
        'draconicevolution:wyvern_core',
        'draconicevolution:generator',
        'draconicadditions:chaotic_harness',  // GC: chaotic_armor_generator (best-guess)
        'draconicadditions:draconic_harness', // GC: armor_generator (best-guess)

        // MysticalAgriculture (meta->named)
        'mysticalagriculture:inferium_essence','mysticalagriculture:prudentium_essence',
        'mysticalagriculture:tertium_essence','mysticalagriculture:imperium_essence',
        'mysticalagriculture:supremium_essence',
        'mysticalagradditions:insanium_essence',
        'mysticalagriculture:growth_accelerator',
        'mysticalagriculture:mystical_fertilizer',

        // Mekanism
        'mekanism:steel_casing',             // basicblock:6 best-guess
        'mekanism:factory',                  // machineblock:4 best-guess
        'mekanism:basic_control_circuit',    // controlcircuit:1
        'mekanism:advanced_control_circuit', // controlcircuit:2
        'mekanism:elite_control_circuit',    // controlcircuit:3

        // Thermal / TX (1.20 drops most)
        'thermal:pyrotheum_dust',
        'thermal:satchel_basic',

        // Avaritia
        'avaritia:extreme_crafting_table',

        // Vanilla crafting table override-removal (GC disabled default recipe)
        'minecraft:crafting_table',

        // Misc absent-mod cleanups (kept as no-ops in case mod re-added)
        'oeintegration:excavatemodifier','projectex:stone_table','projectex:arcane_tablet',
        'projectex:collector','projectex:compressed_collector','projectex:power_flower',
        'projectex:energy_link','projectex:relay',
        'chancecubes:chance_cube',
        'scalinghealth:heart_dust','extrautils2:crafter','actuallyadditions:greenhouse_glass',
        'mekanismgenerators:wind_generator','mekanismgenerators:solar_generator',
        'mekanismgenerators:heat_generator','mekanismgenerators:gas_generator',
        'simplesmelteryaccelerator:smeltery_accelerator',
        'extrautils2:rainbow_generator',
        'bountifulbaubles:ringiron',
        'extrautils2:chickenring','extrautils2:teleporter_item',
        'cyclicmagic:cable_wireless','cyclicmagic:cable_wireless_energy','cyclicmagic:cable_wireless_fluid',
        'cyclicmagic:item_pipe','cyclicmagic:energy_pipe','cyclicmagic:fluid_pipe',
        'cyclicmagic:battery','cyclicmagic:wand_hypno','cyclicmagic:heart_food','cyclicmagic:sleeping_mat',
        'cyclicmagic:exp_pylon','cyclicmagic:sprinkler','cyclicmagic:block_miner',
        'cyclicmagic:slingshot_weapon','cyclicmagic:tool_swap_match','cyclicmagic:tool_swap',
        'cyclicmagic:cyclic_wand_build','cyclicmagic:block_vacuum','cyclicmagic:bundled_pipe',
        'cyclicmagic:magic_net','cyclicmagic:magnet_anti_block','cyclicmagic:harvester_block',
        'cyclicmagic:tool_push','cyclicmagic:spikes_diamond',
        'waystones:warp_stone','openblocks:sleeping_bag','openblocks:sprinkler',
        'openblocks:sponge','openblocks:elevator','openblocks:elevator_rotating',
        'botania:black_hole_talisman','extrabotany:bottled_flame','extrabotany:bottled_star',
        'extrabotany:goblin_slayer_helmet','extrabotany:goblin_slayer_chestplate',
        'extrabotany:goblin_slayer_leggings','extrabotany:goblin_slayer_boots',
        'astralsorcery:black_marble','thermalfoundation:lumium_ingot',
        'cfm:item_log','actuallyadditions:wings_of_the_bats',
        'extracells:wireless_universal_terminal',
        'danknull:dank_null_panel_0','danknull:dank_null_panel_1','danknull:dank_null_panel_2',
        'danknull:dank_null_panel_3','danknull:dank_null_panel_4','danknull:dank_null_panel_5',
        'danknull:dank_null_0','danknull:dank_null_1','danknull:dank_null_2',
        'danknull:dank_null_3','danknull:dank_null_4','danknull:dank_null_5',
        'thermalexpansion:cache','appliedenergistics2:cell_housing',
        'extracells:storage_component_256k','extracells:storage_component_1024k',
        'extracells:storage_component_4096k','extracells:storage_component_16384k',
        'soa_additions:fusion_matrix_ingot', // tconevo:material
        'extrabotany:life_essence',          // material:6 best-guess
        'binniecore:storage',
        'randomthings:time_in_a_bottle',
        'enderio:soul_vial',
        'actuallyadditions:spawner_changer',
        'hooked:hook',
        'botania:enderhand',
        'twilightforest:magic_map_focus',
        'extrabitmanipulation:bodypart_template',
        'ambience:soundnizer','ambience:horn',
        'tconstruct:soil',
        'farmingforblockheads:fertilizer',
        'rftools:shape_card','rftools:environmental_controller','rftools:machine_frame',
        'rftools:spawner',
        'soa_additions:mithminite_plate','soa_additions:adaminite_plate','soa_additions:mithrillium_plate',
        'extrautils2:bedrockium_compressed',
        'extrautils2:generator_slime',
        'soa_additions:thaumium_helmet','soa_additions:thaumium_chestplate',
        'soa_additions:thaumium_leggings','soa_additions:thaumium_boots',
        // thaumcraft:void_armor_* absent; skipped
        'randomthings:spectre_sword','randomthings:spectre_shovel','randomthings:spectre_pickaxe',
        'tcomplement:manyullyn_helmet','tcomplement:manyullyn_chestplate',
        'tcomplement:manyullyn_leggings','tcomplement:manyullyn_boots',
        'minecraft:beacon',
        'bountifulbaubles:ring_flywheel_advanced','bountifulbaubles:ring_flywheel',
        'xnet:netcable',
        'solarflux:solar_panel_2','solarflux:solar_panel_3','solarflux:solar_panel_4',
        'solarflux:solar_panel_5','solarflux:solar_panel_6','solarflux:solar_panel_7',
        'solarflux:solar_panel_8','solarflux:solar_panel_wyvern','solarflux:solar_panel_draconic',
        'treasure2:ruby_key','treasure2:sapphire_key',
        'thaumictinkerer:black_quartz','botania:quartz',
        'extrabotany:shadowium',
        'tcomplement:slimesteel_ingot','sakura:iron_katana',
        'tofucraft:tofu_metal_machine_case',
        'natura:netherrack_furnace','betternether:netherrack_furnace',
        'forestry:wood_pile',
        'minecraft:enchanted_golden_apple',
        'modularmachinery:blockcasing_mm_t4','modularmachinery:blockcasing_mm_t2',
        'draconicevolution:draconic_spawner',
        'enderio:powered_spawner','botania:spawner_mover','extrautils2:watering_can',
        'soa_additions:modularium_ingot',   // modularmachinery:itemmodularium
        'extrabotany:material','extrautils2:compound_bow','mekanism:electric_bow',
        'sereneseasons:greenhouse_glass','actuallyadditions:player_interface',
        'tcomplement:high_oven_io','openblocks:sprinkler',
        // nyx meteor armor/tools: map to soa_additions:meteor_* but memory says only meteor_ingot exists -> FIXME
        'soa_additions:meteor_helmet','soa_additions:meteor_chestplate',
        'soa_additions:meteor_leggings','soa_additions:meteor_boots',
        'soa_additions:meteor_hammer','soa_additions:meteor_sword','soa_additions:meteor_bow',
        'soa_additions:meteor_pickaxe','soa_additions:meteor_hoe','soa_additions:meteor_shovel',
        'soa_additions:meteor_axe',
        // 'soa_additions:meteor_dust' -- not registered; skip
        'extrautils2:lawsword',
        'enderio:grains_of_infinity', // item_material:10 best-guess
        'cyclicmagic:bundled_pipe',
        'redstonearsenal:quiver_flux','redstonerepository:feeder','forestry:bronze_pickaxe',
        'mekanism:basic_universal_cable',
        'buildinggadgets:building_gadget','buildinggadgets:exchanging_gadget',
        'actuallyadditions:iron_casing','demagnetize:demagnetizer','demagnetize:demagnetizer_advanced',
        'biomesoplenty:terrestrial_artifact',
        'aether:valkyrie_pickaxe','aether:valkyrie_axe','aether:valkyrie_shovel',
        'aether:valkyrie_helmet','aether:valkyrie_chestplate','aether:valkyrie_leggings',
        'aether:valkyrie_boots','aether:valkyrie_lance',
        'extrautils2:drum',
        'randomthings:chunkanalyzer',
        'charm:rotten_flesh_block',
        'sakura:kodachi','sakura:sakura_kodachi','sakura:tachi',
        'animus:kama_wood','animus:kama_stone','animus:kama_iron',
        'animus:kama_gold','animus:kama_diamond','animus:kama_bound',
        'bloodmagic:soul_forge','thaumcraft:amber_brick',
        'bloodarsenal:vampire_ring','bloodarsenal:blood_infused_iron_axe',
        'bloodarsenal:blood_infused_wooden_axe',
        'bloodmagic:upgrade_trainer','bloodmagic:upgrade_tome',
        'prefab:bulldozer','bloodmagic:mimic',
        'enderio:endergy_conduit','enderio:fluid_conduit',
        'defiledlands:calling_stone','lootbags:loot_recycler','lootbags:loot_storage',
        'extrautils2:destruction_wand','extrautils2:builders_wand',
        'redstonerepository:ring_mining',
        'bloodmagic:soul_snare',
        'cyclicmagic:purple_helmet','cyclicmagic:purple_chestplate',
        'cyclicmagic:purple_leggings','cyclicmagic:purple_boots',
        'aeble:bubble_ring','aeble:ice_ring','aeble:zanite_ring',
        'aeble:obsidian_ring','aeble:regeneration_ring','aeble:air_ring',
        'minecraft:iron_trapdoor',
        'abyssalcraft:iron_plate',
        'extrautils2:spike_diamond',
        'extrautils2:quarry','extrautils2:quarry_proxy',
        'thaumadditions:thaumic_lectern',
        'mekanismgenerators:bio_generator',
        'twilightforest:charm_of_keeping_2','twilightforest:charm_of_keeping_3',
        'bloodmagic:altar',
        'mekanism:basic_chemical_tank',
        'actuallyadditions:crate_keeper',
        'actuallyadditions:phantom_face',
        'extrautils2:user','cyclicmagic:block_user',
        'openmodularturrets:turret_base',
        'torchmaster:mega_torch','torchmaster:feral_flare_lantern','torchmaster:dread_lamp',
        'globalxp:xp_block',
        'actuallyadditions:growth_ring',
        'tconstruct:throwball',
        'extrautils2:bag_of_holding',
        'forestry:forester_bag_t2','forestry:apiarist_bag','forestry:lepidopterist_bag',
        'forestry:miner_bag','forestry:miner_bag_t2','forestry:digger_bag',
        'forestry:forester_bag','forestry:digger_bag_t2','forestry:adventurer_bag',
        'forestry:builder_bag','forestry:hunter_bag',
        'forestry:adventurer_bag_t2','forestry:builder_bag_t2','forestry:hunter_bag_t2',
        'actuallyadditions:quartz_horse_saddle',
        'equivalentintegrations:conjuration_assembler'
    ]
    outputs.forEach(out => event.remove({ output: out }))

    // Remove by recipe name
    const byName = [
        'projecte:conversions/emerald_to_diamond',
        'projecte:conversions/diamond_to_emerald',
        'projecte:conversions/diamond_to_iron',
        'projecte:conversions/gold_to_diamond',
        'projecte:conversions/iron_to_gold',
        'projecte:conversions/gold_to_iron',
        'extrautils2:watering_can',
        'thaumcraft:ambertoblock',
        'prefab:ender_gateway',
        'botania:flighttiara_0','botania:flighttiara_1','botania:flighttiara_2',
        'botania:flighttiara_3','botania:flighttiara_4','botania:flighttiara_5',
        'botania:flighttiara_6','botania:flighttiara_7','botania:flighttiara_8',
        'extrabotany:recipe_coregod',
        'natura:common/string','harvestcraft:string_cropflax',
        'mysticalagriculture:core/compression/supremium_essence_block_to',
        'mysticalagriculture:core/compression/superium_essence_block_to',
        'mysticalagriculture:core/compression/prudentium_essence_block_to',
        'mysticalagriculture:core/compression/intermedium_essence_block_to',
        'mysticalagradditions:insanium_essence_block_to_infusion'
    ]
    byName.forEach(id => event.remove({ id: id }))
    console.info('[soa_ported] vanilla_remove.js: DONE')
})
