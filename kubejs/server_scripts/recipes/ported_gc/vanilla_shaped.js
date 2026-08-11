console.info('[soa_ported] vanilla_shaped.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] vanilla_shaped.js: registering recipes')

    const _liveItem = v => {
        if (typeof v === 'string') {
            if (v.length === 0 || v.charAt(0) === '#') return true
            return !Item.of(v).isEmpty()
        }
        if (v && typeof v.isEmpty === 'function') return !v.isEmpty()
        return true
    }
    const shp = (out, grid, keys, name) => {
        if (!_liveItem(out)) return
        for (const k in keys) if (!_liveItem(keys[k])) return
        return event.shaped(out, grid, keys).id('soa_ported:shp_' + name)
    }

    const spawnEgg = (entityId, reagent, name) => {
        const shortName = entityId.indexOf(':') >= 0 ? entityId.split(':')[1] : entityId
        event.shaped(
            Item.of('minecraft:' + shortName + '_spawn_egg', 1),
            [' X ', 'XEX', ' X '],
            { X: reagent, E: 'minecraft:egg' }
        ).id('soa_ported:spawn_egg_' + name)
    }
    spawnEgg('minecraft:slime',    '#forge:slimeballs',         'slime')
    spawnEgg('minecraft:villager', 'minecraft:emerald',         'villager')
    spawnEgg('minecraft:blaze',    'minecraft:blaze_powder',    'blaze')
    spawnEgg('minecraft:cow',      'minecraft:leather',         'cow')
    spawnEgg('minecraft:enderman', 'minecraft:ender_pearl',     'enderman')
    spawnEgg('minecraft:ghast',    '#forge:glass',   'ghast_glass')

    shp('minecraft:dragon_egg',
        [' A ', 'ABA', 'AAA'],
        { A: '#forge:dragon_scales', B: '#forge:nether_stars' },
        'dragonegg')

    shp('soa_additions:creative_modifier',
        [' A ', ' B '],
        { A: '#forge:storage_blocks/draconic_metal', B: 'avaritia:singularity' },
        'creativehead')

    shp('soa_additions:difficulty_changer',
        [' A ', 'ABA', 'AAA'],
        { A: 'soa_additions:wither_bone', B: 'scalinghealth:heart_crystal' },
        'difficultychanger_up_2')

    shp('soa_additions:difficulty_changer',
        ['AAA', 'ABA', ' A '],
        { A: 'minecraft:gold_ingot', B: 'scalinghealth:heart_crystal' },
        'difficultychanger_down')

    shp('minecraft:totem_of_undying',
        ['ABA', 'CDC', ' E '],
        { A: 'minecraft:ender_eye', B: 'minecraft:golden_apple', C: 'minecraft:gold_ingot', D: 'minecraft:nether_star', E: 'minecraft:gold_block' },
        'totundying')

    shp('minecraft:elytra',
        ['ABA', 'ACA', 'A A'],
        { A: 'minecraft:paper', B: 'draconicevolution:wyvern_core', C: 'minecraft:nether_star' },
        'elytra')

    shp('soa_additions:pioneer_medal',
        ['AAA', 'AAA', 'AAA'],
        { A: 'soa_additions:ordinary_medal' },
        'auto_gen_-2096872370')

    shp('soa_additions:greedy_medal',
        ['AAA', 'AAA', 'AAA'],
        { A: 'soa_additions:pioneer_medal' },
        'auto_gen_-1484361380')

    shp('soa_additions:item_purger',
        ['  A', ' A ', 'B  '],
        { A: 'minecraft:stick', B: 'minecraft:wheat' },
        'auto_gen_11266081')

    shp('soa_additions:bloody_sacrifice',
        ['ABA', 'BCB', 'ABA'],
        { A: 'soa_additions:raw_human_meat', B: 'soa_additions:coagulated_blood', C: 'minecraft:bone' },
        'auto_gen_-1707222290')

    shp('soa_additions:bloody_sacrifice',
        ['ABA', 'BCB', 'ABA'],
        { A: 'soa_additions:coagulated_blood', B: 'soa_additions:raw_human_meat', C: 'minecraft:bone' },
        'auto_gen_-1352061026')

    shp('soa_additions:true_blood_sigil',
        ['ABA', 'BCB', 'ABA'],
        { A: 'soa_additions:bloody_sacrifice', B: 'soa_additions:blood_sigil', C: '#forge:shards/creative' },
        'auto_gen_1805774062')

    shp('minecraft:name_tag',
        ['  A', ' B ', 'C  '],
        { A: 'minecraft:string', B: 'minecraft:gold_ingot', C: 'minecraft:paper' },
        'auto_gen_826338285')

    shp('soa_additions:poopburger',
        ['AAA', 'BBB', 'AAA'],
        { A: 'minecraft:wheat', B: 'soa_additions:poop' },
        'auto_gen_-295393253')

    shp(Item.of('chancecubes:chance_cube', 4),
        ['ABA', 'BCB', 'ABA'],
        { A: 'minecraft:lapis_lazuli', B: 'minecraft:lapis_block', C: 'soa_additions:lucky_clover' },
        'auto_gen_-1533033400')

    shp('projecte:harvest_goddess_band',
        ['ABA', 'BCB', 'ABA'],
        { A: '#forge:soul_creative', B: 'minecraft:vine', C: 'projecte:iron_band' },
        'auto_gen_1124990531')

    shp('projecte:nova_catalyst',
        ['AAA', 'BCB', 'AAA'],
        { A: 'projecte:item.pe_fuel', B: 'projecte:item.pe_matter', C: 'minecraft:tnt' },
        'auto_gen_-132199471')

    shp('projecte:nova_cataclysm',
        ['AAA', 'AAA', 'AAA'],
        { A: 'projecte:nova_catalyst' },
        'auto_gen_1281372914')

    shp(Item.of('minecraft:coal', 4),
        [' A ', 'ABA', ' A '],
        { A: '#forge:coal', B: '#minecraft:logs' },
        'wood_to_charcoal')

    shp('soa_additions:medkit_small',
        [' A ', 'ABA', ' A '],
        { A: 'scalinghealth:heart_dust', B: 'minecraft:glass_bottle' },
        'auto_gen_-162477942')

    shp('soa_additions:medkit_big',
        [' A ', 'ABA', ' A '],
        { A: 'scalinghealth:heart_crystal_shard', B: 'soa_additions:medkit_small' },
        'auto_gen_-1175705809')

    shp('soa_additions:medkit_super',
        [' A ', 'ABA', ' A '],
        { A: 'scalinghealth:heart_crystal', B: 'soa_additions:medkit_big' },
        'auto_gen_-1873046907')

    shp('mekanism:digital_miner',
        ['ABA', 'CDE', 'FGF'],
        { A: 'mekanism:teleportation_core', B: 'mekanism:logistical_sorter', C: 'mekanism:robit', D: 'mekanism:steel_casing', E: 'mekanism:chemical_washer', F: '#forge:shards/creative', G: '#forge:storage_blocks/wyvern_metal' },
        'auto_gen_-1864302722')

    shp('mekanismgenerators:gas_burning_generator',
        [' A ', 'ABA', 'CDC'],
        { A: '#forge:alloys/ultimate', B: '#forge:ingots/aeonsteel', C: 'mekanism:energy_tablet', D: '#forge:circuits/ultimate' },
        'auto_gen_1084804943')

    shp('mekanismgenerators:advanced_solar_generator',
        ['AAA', 'ABA', 'CCC'],
        { A: 'mekanismgenerators:solar_generator', B: 'mekanism:alloy_atomic', C: 'mekanism:alloy_infused' },
        'auto_gen_685141373')

    shp('mekanismgenerators:solar_generator',
        ['AAA', 'BBB', 'BBB'],
        { A: 'mekanismgenerators:solar_panel', B: 'mekanism:alloy_infused' },
        'auto_gen_1109831349')

    shp('projecte:soul_stone',
        ['ABA', 'CDC', 'ABA'],
        { A: 'minecraft:gold_ingot', B: 'draconicevolution:awakened_core', C: 'botania:storage', D: '#forge:shards/creative' },
        'auto_gen_-1399323772')

    shp('projecte:body_stone',
        ['AAA', 'BCB', 'AAA'],
        { A: 'minecraft:gold_ingot', B: '#forge:shards/creative', C: 'draconicevolution:chaotic_core' },
        'auto_gen_-1815095390')

    shp('soa_additions:experience_ingot',
        ['AAA', 'AAA', 'AAA'],
        { A: 'soa_additions:experience_nugget' },
        'auto_gen_-1600085367')

    shp('soa_additions:experience_ingot',
        ['AAA', 'AAA', 'AAA'],
        { A: 'actuallyadditions:solidified_experience' },
        'experience_ingot_from_solidified')

    shp('soa_additions:experience_block',
        ['AAA', 'AAA', 'AAA'],
        { A: 'soa_additions:experience_ingot' },
        'auto_gen_1001889940')

    shp('soa_additions:compressed_experience_block',
        ['AAA', 'AAA', 'AAA'],
        { A: 'soa_additions:experience_block' },
        'auto_gen_-1190739388')

    shp('soa_additions:experience_ingot',
        ['AAA', 'AAA', 'AAA'],
        { A: 'mysticalagriculture:experience_droplet' },
        'auto_gen_235539040')

    shp('ironchest:iron_chest',
        ['AAA', 'BCB', 'AAA'],
        { A: 'minecraft:glass', B: 'minecraft:diamond', C: 'minecraft:gold_block' },
        'auto_gen_893026726')

    shp('soa_additions:aurora_heart',
        ['AAA', 'ABA', 'AAA'],
        { A: 'quark:rune', B: 'mowziesmobs:ice_crystal' },
        'auto_gen_-2024479741')

    shp('projecte:interdiction_torch',
        [' A ', 'BCB', 'DDD'],
        { A: '#forge:shards/creative', B: 'projecte:item.pe_matter', C: 'minecraft:torch', D: 'minecraft:glowstone_dust' },
        'auto_gen_-626897020')

    shp('draconicevolution:grinder',
        ['ABA', 'BCB', 'ABA'],
        { A: 'minecraft:iron_block', B: 'draconicevolution:awakened_core', C: 'tconevo:draconic_metal_block' },
        'auto_gen_-893381298')

    shp('cyclic:wireless_item',
        ['ABA', 'BCB', 'ABA'],
        { A: 'thermal:material', B: 'minecraft:ender_eye', C: 'minecraft:chest' },
        'auto_gen_-1542308372')

    shp('cyclic:wireless_energy',
        ['ABA', 'BCB', 'ABA'],
        { A: 'thermal:material', B: 'minecraft:ender_eye', C: 'minecraft:redstone_block' },
        'auto_gen_142121176')

    shp('cyclic:wireless_fluid',
        ['ABA', 'BCB', 'ABA'],
        { A: 'thermal:material', B: 'minecraft:ender_eye', C: 'minecraft:bucket' },
        'auto_gen_-1750189736')

    shp('waystones:warp_stone',
        ['ABA', 'BCB', 'ABA'],
        { A: '#forge:obsidian', B: '#forge:gems/diamond', C: '#forge:ender_pearls' },
        'auto_gen_918073950')

    shp('hammerlib:gears/stone',
        [' A ', 'A A', ' A '],
        { A: '#forge:cobblestone' },
        'auto_gen_2018337295')

    shp('projecte:repair_talisman',
        ['AAA', 'BCB', 'DDD'],
        { A: '#forge:shards/creative', B: 'tconstruct:materials', C: 'projecte:item.pe_matter', D: 'projecte:item.pe_covalence_dust' },
        'auto_gen_695406342')

    shp('soa_additions:bounty_hunter_medal_silver',
        ['AAA', 'AAA', 'AAA'],
        { A: 'soa_additions:bounty_hunter_medal_bronze' },
        'bh_medal_upgrade0')

    shp('soa_additions:bounty_hunter_medal',
        ['AAA', 'AAA', 'AAA'],
        { A: 'soa_additions:bounty_hunter_medal_silver' },
        'bh_medal_upgrade1')

    shp(Item.of('ae2:certus_quartz_crystal', 4),
        [' A ', 'ABA', ' A '],
        { A: '#forge:dusts/redstone', B: '#forge:gems/quartz' },
        'auto_gen_-555162558')

    shp('soa_additions:bravery_certificate',
        ['ABA', 'CDC'],
        { A: '#forge:ingots/asgardium', B: '#forge:nether_stars', C: '#forge:ingots/aeroite', D: 'aether:golden_amber' },
        'auto_gen_-696385933')

    shp('soa_additions:fusion_matrix_block',
        ['AAA', 'AAA', 'AAA'],
        { A: 'soa_additions:fusion_matrix_ingot' },
        'auto_gen_252415292')

    shp('soa_additions:death_coin',
        ['ABA', 'CDC', 'AEA'],
        { A: 'draconicevolution:awakened_core', B: 'soa_additions:ancient_tome_fragment', C: 'tconevo:draconic_metal_ingot', D: 'soa_additions:bounty_hunter_medal', E: '#forge:shards/creative' },
        'auto_gen_-1606461473')

    shp('soa_additions:infernium_ingot',
        ['AAA', 'AAA', 'AAA'],
        { A: 'soa_additions:infernium_nugget' },
        'auto_gen_-1300353737')

    shp('soa_additions:infernium_block',
        ['AAA', 'AAA', 'AAA'],
        { A: 'soa_additions:infernium_ingot' },
        'auto_gen_1001339440')

    shp('minecraft:vine',
        ['A A', 'AAA', 'A A'],
        { A: '#forge:plant_fibre' },
        'auto_gen_1077378325')

    shp('rehooked:wood_hook',
        ['AAB', ' CA', 'C A'],
        { A: '#forge:rods/wooden', B: 'minecraft:stone_pickaxe', C: '#forge:string' },
        'auto_gen_1397188541')

    shp('soa_additions:cryonium_block',
        ['AAA', 'AAA', 'AAA'],
        { A: '#forge:ingots/cryonium' },
        'auto_gen_-138403773')

    shp('soa_additions:beast_hand',
        ['ABA', 'CDC', ' C '],
        { A: '#forge:ingots/aeonsteel', B: '#forge:storage_blocks/snow', C: 'twilightforest:alpha_yeti_fur', D: '#forge:dusts/draconium' },
        'auto_gen_100207823')

    shp('soa_additions:sun_totem',
        [' A ', 'BCB', ' D '],
        { A: 'draconicevolution:wyvern_core', B: '#forge:ingots/solarium', C: 'minecraft:totem_of_undying', D: '#forge:nether_stars' },
        'auto_gen_1913024224')

    shp('cyclic:miner',
        [' A ', 'BCB', ' D '],
        { A: 'minecraft:iron_pickaxe', B: '#forge:circuits/ultimate', C: 'rftools:machine_frame', D: '#forge:shards/creative' },
        'auto_gen_-935233766')

    shp('cyclic:slingshot',
        ['ABA', ' A ', ' A '],
        { A: '#forge:rods/wooden', B: '#forge:string' },
        'auto_gen_-1848316431')

    shp('rftoolsbase:machine_frame',
        ['ABA', 'BCB', 'ABA'],
        { A: '#forge:glass', B: '#forge:ingots/iron', C: '#forge:gears/tin' },
        'frame_alt')

    shp('soa_additions:cytosinite_block',
        ['AAA', 'AAA', 'AAA'],
        { A: '#forge:ingots/cytosinite' },
        'cytosinite_block')

    shp('soa_additions:terra_alloy_block',
        ['AAA', 'AAA', 'AAA'],
        { A: '#forge:ingots/terra_alloy' },
        'terra_alloy_block')

    shp('soa_additions:astral_metal_block',
        ['AAA', 'AAA', 'AAA'],
        { A: '#forge:ingots/astral_metal' },
        'astral_metal_block')

    shp('soa_additions:cosmilite_block',
        ['AAA', 'AAA', 'AAA'],
        { A: '#forge:ingots/cosmilite' },
        'cosmilite_block')

    shp('soa_additions:awakened_eye',
        ['ABA', 'ABA'],
        { A: '#forge:eternal_life_essence', B: '#forge:ingots/liquified_coralium' },
        'awakened_eye')

    shp('soa_additions:titanium_ingot',
        ['AAA', 'AAA', 'AAA'],
        { A: '#forge:nuggets/titanium' },
        'titanium_ingot')

    shp('soa_additions:titanium_block',
        ['AAA', 'AAA', 'AAA'],
        { A: '#forge:ingots/titanium' },
        'titanium_block')

    shp('soa_additions:forbidden_bible',
        ['ABA', 'ABA'],
        { A: '#forge:ingots/void', B: '#forge:ingots/demonic_metal' },
        'forbidden_bible')

    shp('soa_additions:forbidden_bible',
        ['ABA', 'ABA'],
        { A: '#forge:ingots/void', B: '#forge:ingots/demonic_metal' },
        'forbidden_bible_1')

    shp('soa_additions:delivery_order',
        ['AAA', 'ABA', 'AAA'],
        { A: '#forge:shards/time', B: '#forge:paper' },
        'time_order')

    shp('minecraft:beacon',
        ['AAA', 'ABA', 'CCC'],
        { A: '#forge:glass_panes', B: '#forge:storage_blocks/terrasteel', C: '#forge:obsidian' },
        'beacon')

    shp('soa_additions:difficulty_syncer',
        ['AAA', 'ABA', 'AAA'],
        { A: '#forge:glass_panes', B: '#forge:bone' },
        'difficulty_syncer')

    shp('solarflux:sp_2',
        ['AAA', 'BCB', 'DDD'],
        { A: 'solarflux:mirror', B: 'solarflux:sp_1', C: '#forge:ingots/gold', D: '#forge:ingots/iron' },
        'sol_flux_panel_1')

    shp('solarflux:sp_3',
        ['AAA', 'BCB', 'BBB'],
        { A: 'solarflux:photovoltaic_cell_1', B: '#forge:ingots/invar', C: 'solarflux:sp_2' },
        'sol_flux_panel_2')

    shp('solarflux:sp_4',
        ['AAA', 'BCB', 'BBB'],
        { A: 'solarflux:photovoltaic_cell_2', B: '#forge:ingots/steel', C: 'solarflux:sp_3' },
        'sol_flux_panel_3')

    shp('solarflux:sp_5',
        ['AAA', 'BCB', 'BDB'],
        { A: 'solarflux:photovoltaic_cell_3', B: '#forge:ingots/stainless_steel', C: 'solarflux:sp_4', D: '#forge:ingots/energetic_alloy' },
        'sol_flux_panel_4')

    shp('solarflux:sp_6',
        ['AAA', 'BCB', 'BBB'],
        { A: 'solarflux:photovoltaic_cell_4', B: '#forge:ingots/durasteel', C: 'solarflux:sp_5' },
        'sol_flux_panel_5')

    shp('solarflux:sp_7',
        ['AAA', 'BCB', 'BBB'],
        { A: 'solarflux:photovoltaic_cell_5', B: '#forge:ingots/fusion_matrix', C: 'solarflux:sp_6' },
        'sol_flux_panel_6')

    shp('solarflux:sp_8',
        ['AAA', 'BCB', 'BBB'],
        { A: 'solarflux:photovoltaic_cell_6', B: '#forge:ingots/aeonsteel', C: 'solarflux:sp_7' },
        'sol_flux_panel_7')

    shp('minecraft:end_portal_frame',
        ['ABA', 'CCC', 'CCC'],
        { A: '#forge:pearl_ender_eye', B: '#forge:nether_stars', C: '#forge:end_stones' },
        'end_portal_frame')

    shp('soa_additions:experience_transporter',
        ['ABA', 'BCB', 'ABA'],
        { A: '#forge:pearl_ender_eye', B: '#forge:eternal_life_essence', C: 'soa_additions:pearl_of_knowledge' },
        'experience_transporter')

    shp('minecraft:netherite_block',
        ['AAA', 'AAA', 'AAA'],
        { A: '#forge:ingots/netherite' },
        'netherite_block')

    shp('soa_additions:stainless_steel_block',
        ['AAA', 'AAA', 'AAA'],
        { A: '#forge:ingots/stainless_steel' },
        'stainless_steel_block')

    shp('mekanism:steel_casing',
        ['ABA', 'BCB', 'ABA'],
        { A: '#forge:ingots/stainless_steel', B: '#enderio:fused_quartz', C: '#forge:ingots/osmium' },
        'mekanism_casing')

    shp('buildinggadgets2:gadget_building',
        ['ABA', 'CDC', 'ABA'],
        { A: '#forge:ingots/stainless_steel', B: '#forge:dusts/redstone', C: '#forge:ingots/bronze', D: '#forge:gems/diamond' },
        'auto_gen_2008269634')

    shp('buildinggadgets2:gadget_exchanging',
        ['ABA', 'CDC', 'ABA'],
        { A: '#forge:ingots/stainless_steel', B: '#forge:dusts/redstone', C: '#forge:pearl_ender_eye', D: '#forge:gems/diamond' },
        'auto_gen_352019415')

    shp('buildinggadgets2:gadget_copy_paste',
        ['ABA', 'CDC', 'ABA'],
        { A: '#forge:ingots/stainless_steel', B: '#forge:dusts/redstone', C: '#forge:slimeballs', D: '#forge:gems/diamond' },
        'auto_gen_-1071431898')

    shp('buildinggadgets2:gadget_destruction',
        ['ABA', 'CDC', 'ABA'],
        { A: '#forge:ingots/aeonsteel', B: 'minecraft:bedrock', C: '#forge:ingots/ravaging', D: '#forge:nether_stars' },
        'auto_gen_12241914')

    shp('soa_additions:nylon_string',
        ['AAA'],
        { A: 'thermal:tar' },
        'nylon_string')

    shp('soa_additions:nylon_cloth',
        ['AAA', 'AAA', 'AAA'],
        { A: '#forge:strings/nylon' },
        'nylon_cloth')

    shp('soa_additions:rubber_band',
        ['AAA'],
        { A: 'thermal:rosin' },
        'rubber_band')

    shp(Item.of('soa_additions:stainless_steel_ball', 24),
        [' A ', 'AAA', ' A '],
        { A: '#forge:ingots/stainless_steel' },
        'stainless_steel_ball')

    shp('soa_additions:plate_of_honor',
        [' A ', 'ABA', ' A '],
        { A: 'quark:rune', B: '#forge:casts' },
        'plate_of_honor')

    shp('projecte:collector_mk3',
        [' A ', 'ABA', ' A '],
        { A: 'projectextended:matter', B: '#forge:soul_creative' },
        'emc_collector_purple')

    shp('cyclic:harvester',
        [' A ', 'BCB', 'DBD'],
        { A: 'cyclic:tool_harvest_crops', B: '#forge:ingots/aeonsteel', C: 'minecraft:dispenser', D: '#forge:circuits/ultimate' },
        'harvester')

    shp(Item.of('mysticalagriculture:mystical_fertilizer', 2),
        ['ABA', 'BCB', 'ABA'],
        { A: 'mysticalagriculture:fertilized_essence', B: 'thermal:fertilizer', C: '#forge:essences/supremium' },
        'ma_mystical_fertilizer')

    shp('soa_additions:protonium_block',
        ['AAA', 'AAA', 'AAA'],
        { A: '#forge:ingots/protonium' },
        'protonium_block')

    shp('soa_additions:protonium_ingot',
        ['NPN', 'PCP', 'NPN'],
        { N: '#forge:nuggets/neutronium', P: 'projectexpansion:purple_matter',
          C: 'soa_additions:energy_matter_core' },
        'protonium_ingot')

    shp('soa_additions:electronium_block',
        ['AAA', 'AAA', 'AAA'],
        { A: '#forge:ingots/electronium' },
        'electronium_block')

    shp('soa_additions:respawn_anchor',
        ['ABA', 'CBC', 'ACA'],
        { A: '#forge:shards/time', B: '#forge:ingots/aeroite', C: '#forge:ingots/asgardium' },
        'respawn_anchor')

    shp('soa_additions:crimsonite_block',
        ['AAA', 'AAA', 'AAA'],
        { A: '#forge:ingots/crimsonite' },
        'crimsonite_block')

    shp('soa_additions:loli_lolipop',
        [' AB', ' CA', 'C  '],
        { A: '#forge:list_allsugar', B: '#forge:shards/time', C: '#forge:rods/wooden' },
        'loli_lolipop')

    shp('bloodmagic:soulforge',
        ['A A', 'BCB', 'BDB'],
        { A: '#forge:ingots/stainless_steel', B: '#forge:storage_blocks/nether_brick', C: '#forge:rods/blaze', D: '#forge:storage_blocks/iron' },
        'soul_forge')

    shp('cyclic:heart',
        ['AAA', 'ABA', 'AAA'],
        { A: 'scalinghealth:heart_crystal', B: '#forge:ingots/crimsonite' },
        'cyclic_heart_food')

    shp('enderio:empty_soul_vial',
        [' A ', 'B B', ' B '],
        { A: '#forge:ingots/soularium', B: '#forge:glass' },
        'soul_vial')

    shp('rehooked:ender_hook',
        ['ABC', ' DB', 'E A'],
        { A: '#forge:pearl_ender_eye', B: '#forge:rods/blaze', C: '#forge:end_stones', D: 'rehooked:iron_hook', E: '#forge:dusts/blaze' },
        'ender_hook')

    shp(Item.of('minecraft:iron_trapdoor', 2),
        ['AAA', 'ABA', 'AAA'],
        { A: '#forge:ingots/iron', B: '#forge:dusts/redstone' },
        'iron_trap_door')

    shp(Item.of('mekanismgenerators:turbine_casing', 16),
        ['ABA', 'BCB', 'ABA'],
        { A: '#forge:ingots/titanium', B: '#forge:ingots/aeonsteel', C: 'soa_additions:creative_shard' },
        'turbo_casing')

    shp('twilightforest:charm_of_keeping_2',
        ['ABA', 'BCB', 'ABA'],
        { A: '#forge:ingots/durasteel', B: 'twilightforest:charm_of_keeping_1', C: 'minecraft:enchanted_golden_apple' },
        'charm_of_keeping_2')

    shp('twilightforest:charm_of_keeping_3',
        ['ABA', 'BCB', 'ABA'],
        { A: '#forge:ingots/aeonsteel', B: 'twilightforest:charm_of_keeping_2', C: '#forge:nether_stars' },
        'charm_of_keeping_3')

    shp('mekanism:formulaic_assemblicator',
        [' A ', 'ABA', ' A '],
        { A: '#forge:ingots/aeonsteel', B: '#forge:ingots/stainless_steel' },
        'mek_casing_2')

    shp('mekanism:advanced_control_circuit',
        [' A ', 'BCB', ' A '],
        { A: '#forge:ingots/stainless_steel', B: '#forge:alloys/advanced', C: '#forge:circuits/basic' },
        'mek_circuit_1')

    shp('mekanism:elite_control_circuit',
        [' A ', 'BCB', ' A '],
        { A: '#forge:ingots/durasteel', B: '#forge:alloys/elite', C: '#forge:circuits/advanced' },
        'mek_circuit_2')

    shp('mekanism:ultimate_control_circuit',
        [' A ', 'BCB', ' A '],
        { A: '#forge:ingots/aeonsteel', B: '#forge:alloys/ultimate', C: '#forge:circuits/elite' },
        'mek_circuit_3')

    shp('cyclic:user',
        ['ABA', 'CDC', 'AEA'],
        { A: '#forge:storage_blocks/aeonsteel', B: 'minecraft:dispenser', C: '#forge:alloys/ultimate', D: '#forge:circuits/ultimate', E: 'cyclic:clock' },
        'cyclic_user')

    shp('torchmaster:megatorch',
        ['ABA', 'CDC', 'EDE'],
        { A: '#forge:slimeballs', B: '#forge:torch', C: '#forge:gems/diamond', D: '#minecraft:planks', E: '#forge:ingots/gold' },
        'mega_torch')

    shp('torchmaster:feral_flare_lantern',
        ['ABA', 'CDC', 'ADA'],
        { A: '#forge:glass', B: '#forge:dusts/blaze', C: '#forge:slimeballs', D: '#forge:rods/blaze' },
        'flare_lantern')

    shp('torchmaster:dreadlamp',
        ['ABA', 'CDC', 'ABA'],
        { A: '#forge:obsidian', B: '#forge:glass', C: '#forge:slimeballs', D: '#forge:rods/blaze' },
        'dread_lamp')

    shp('globalxp:xp_block',
        ['ABA', 'BCB', 'ABA'],
        { A: 'minecraft:iron_bars', B: '#forge:ingots/experience', C: 'minecraft:emerald' },
        'xp_block')

    shp('inventorypets:feed_bag',
        ['   ', 'ABA', ' A '],
        { A: '#forge:leather', B: 'minecraft:golden_apple' },
        'pet_feed_bag')

    shp('soa_additions:twilight_gem',
        [' A ', 'BCD', ' E '],
        { A: 'twilightforest:magic_map_focus', B: '#forge:ingots/steeleaf', C: '#forge:gems/diamond', D: 'twilightforest:naga_scale', E: '#forge:ingots/knightmetal' },
        'twilight_gem_alt')

    console.info('[soa_ported] vanilla_shaped.js: DONE')
})
