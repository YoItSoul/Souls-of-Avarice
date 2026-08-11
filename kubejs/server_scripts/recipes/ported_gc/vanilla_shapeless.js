console.info('[soa_ported] vanilla_shapeless.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] vanilla_shapeless.js: registering recipes')

    const _liveItem = v => {
        if (typeof v === 'string') {
            if (v.length === 0 || v.charAt(0) === '#') return true
            return !Item.of(v).isEmpty()
        }
        if (v && typeof v.isEmpty === 'function') return !v.isEmpty()
        return true
    }
    const shpl = (out, inputs, name) => {
        if (!_liveItem(out)) return
        for (const inp of inputs) if (!_liveItem(inp)) return
        return event.shapeless(out, inputs).id('soa_ported:shpl_' + name)
    }

    shpl(Item.of('minecraft:string', 2), ['minecraft:cobweb'], 'web_to_string')

    shpl('minecraft:string', ['supplementaries:flax', 'supplementaries:flax', 'supplementaries:flax'], 'string_from_flax_supp')
    shpl('minecraft:string', ['thermal:flax', 'thermal:flax', 'thermal:flax'], 'string_from_flax_thermal')

    shpl('thermal:basalz_powder', ['minecraft:blaze_powder', 'minecraft:blaze_powder', 'minecraft:stone'], 'thermal_shapeless_2')

    shpl('thermal:gold_gear', ['aether:golden_ring'], 'thermal_shapeless_3')

    shpl('thermal:iron_gear', ['aether:iron_ring'], 'thermal_shapeless_4')

    shpl('minecraft:leather', ['minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh'], 'rotleather')

    shpl(Item.of('avaritia:infinity', 64), ['soa_additions:infinity_block_block'], 'auto_gen_1334582590')

    shpl(Item.of('soa_additions:infinity_block_block', 64), ['soa_additions:infinity_block_block_block'], 'auto_gen_-702569552')

    shpl(Item.of('minecraft:crafting_table', 4), ['#minecraft:logs', '#minecraft:logs', '#minecraft:logs', '#minecraft:logs'], 'auto_gen_288981592')

    shpl('minecraft:dragon_breath', ['minecraft:glass_bottle', '#forge:skull_ender_dragon', 'minecraft:dragon_head'], 'auto_gen_-865558598')

    shpl(Item.of('scalinghealth:heart_dust', 9), ['scalinghealth:heart_crystal_shard'], 'auto_gen_1565439995')

    shpl('scalinghealth:heart_crystal_shard', ['scalinghealth:heart_dust', 'scalinghealth:heart_dust', 'scalinghealth:heart_dust', 'scalinghealth:heart_dust', 'scalinghealth:heart_dust', 'scalinghealth:heart_dust', 'scalinghealth:heart_dust', 'scalinghealth:heart_dust', 'scalinghealth:heart_dust'], 'auto_gen_522430280')

    shpl(Item.of('scalinghealth:heart_crystal_shard', 9), ['scalinghealth:heart_crystal'], 'auto_gen_-1180907112')

    shpl(Item.of('soa_additions:experience_block', 9), ['soa_additions:compressed_experience_block'], 'auto_gen_269849607')

    shpl(Item.of('soa_additions:experience_ingot', 9), ['soa_additions:experience_block'], 'auto_gen_680300395')

    shpl(Item.of('soa_additions:experience_nugget', 9), ['soa_additions:experience_ingot'], 'auto_gen_198647556')

    shpl('soa_additions:experience_nugget', ['mysticalagriculture:experience_droplet'], 'auto_gen_1353175347')

    shpl('soa_additions:death_counter', ['tconstruct:pattern', 'minecraft:bone'], 'auto_gen_1910785345')

    shpl('mysticalagradditions:insanium_essence', ['mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting'], 'ma_essence_4')

    shpl('mysticalagradditions:insanium_essence', ['mysticalagriculture:crafting', 'mysticalagradditions:insanium_essence', 'mysticalagradditions:insanium_essence', 'mysticalagradditions:insanium_essence', 'mysticalagradditions:insanium_essence'], 'auto_gen_-1248999641')

    shpl('quark:limestone', ['#forge:stone_marble'], 'auto_gen_303589427')

    shpl(Item.of('mysticalagradditions:insanium_essence', 9), ['#forge:storage_blocks/insanium_essence'], 'auto_gen_-60414065')

    shpl('ae2:cell_component_4k', ['ae2:cell_component_1k', 'ae2:cell_component_1k', 'ae2:cell_component_1k', 'ae2:cell_component_1k'], 'auto_gen_-1028255111')

    shpl('ae2:cell_component_16k', ['ae2:cell_component_4k', 'ae2:cell_component_4k', 'ae2:cell_component_4k', 'ae2:cell_component_4k'], 'auto_gen_-1168410344')

    shpl('ae2:cell_component_64k', ['ae2:cell_component_16k', 'ae2:cell_component_16k', 'ae2:cell_component_16k', 'ae2:cell_component_16k'], 'auto_gen_-1308565577')

    shpl(Item.of('soa_additions:fusion_matrix_ingot', 9), ['#forge:storage_blocks/fusion_matrix'], 'auto_gen_455125292')

    shpl(Item.of('soa_additions:infernium_ingot', 9), ['soa_additions:infernium_block'], 'auto_gen_330301095')

    shpl(Item.of('soa_additions:infernium_nugget', 9), ['soa_additions:infernium_ingot'], 'auto_gen_193347573')

    shpl('soa_additions:tower_chest_unlocked', ['soa_additions:tower_chest', 'soa_additions:tower_chest_key'], 'unlock_chest')

    shpl('soa_additions:pebble', ['#forge:rocks'], 'stone')

    shpl('minecraft:stick', ['#forge:twigs'], 'twig')

    shpl('soa_additions:grass_string', ['#forge:plant_fibre', '#forge:plant_fibre', '#forge:plant_fibre'], 'auto_gen_-1599197603')

    shpl('soa_additions:crude_hatchet', ['#forge:pebble', '#forge:string', '#forge:rods/wooden'], 'auto_gen_-689226972')

    shpl('twilightforest:magic_map_focus', ['twilightforest:raven_feather', 'twilightforest:torchberries'], 'auto_gen_-1342866062')

    shpl('minecraft:glass', ['#forge:sand', 'soa_additions:fake_philosopher_stone'], 'sand_to_glass')

    shpl('minecraft:stick', ['#forge:twigs'], 'stick')

    shpl('mowziesmobs:earthrend_gauntlet', ['#forge:dirt', '#forge:shards/creative', '#forge:shards/creative'], 'earth_talisman')

    shpl(Item.of('soa_additions:cryonium_ingot', 9), ['#forge:storage_blocks/cryonium'], 'auto_gen_-518845405')

    shpl('minecraft:stick', ['#minecraft:saplings'], 'sapling')

    shpl('soa_additions:plant_fibre', ['#forge:plants/cattail'], 'cattail')

    shpl('minecraft:firework_rocket', ['minecraft:fire_charge', '#forge:paper', '#forge:gunpowder'], 'firework')

    shpl('rftoolsbase:machine_frame', ['thermal:frame'], 'frame_alt_2')

    shpl('thermal:machine_frame', ['rftoolsbase:machine_frame'], 'frame_alt_2_reverse')

    shpl(Item.of('soa_additions:terra_alloy_ingot', 9), ['#forge:storage_blocks/terra_alloy'], 'terra_alloy_block_rev')

    shpl(Item.of('soa_additions:cytosinite_ingot', 9), ['#forge:storage_blocks/cytosinite'], 'cytosinite_block_rev')

    shpl(Item.of('soa_additions:astral_metal_ingot', 9), ['#forge:storage_blocks/astral_metal'], 'astral_metal_block_rev')

    shpl(Item.of('soa_additions:cosmilite_ingot', 9), ['#forge:storage_blocks/cosmilite'], 'cosmilite_block_rev')

    shpl(Item.of('soa_additions:titanium_nugget', 9), ['#forge:ingots/titanium'], 'titanium_ingot_rev')

    shpl(Item.of('soa_additions:titanium_ingot', 9), ['#forge:storage_blocks/titanium'], 'titanium_block_rev')

    shpl(Item.of('minecraft:netherite_ingot', 9), ['#forge:storage_blocks/netherite'], 'netherite_block_rev')

    shpl(Item.of('soa_additions:stainless_steel_ingot', 9), ['#forge:storage_blocks/stainless_steel'], 'stainless_steel_rev')

    shpl(Item.of('soa_additions:protonium_ingot', 9), ['#forge:storage_blocks/protonium'], 'protonium_rev')

    shpl(Item.of('soa_additions:electronium_ingot', 9), ['#forge:storage_blocks/electronium'], 'electronium_rev')

    shpl(Item.of('avaritia:infinity_ingot', 2), ['#forge:ingots/protonium', '#forge:ingots/electronium'], 'neutronium_combination')

    shpl(Item.of('avaritia:neutron', 2), ['#forge:storage_blocks/protonium', '#forge:storage_blocks/electronium'], 'neutronium_block_combination')

    shpl(Item.of('soa_additions:crimsonite_ingot', 9), ['#forge:storage_blocks/crimsonite'], 'crimsonite_rev')

    shpl('projecte:transmutation_tablet', ['projecte:transmutation_tablet'], 'emc_tablet_clear_nbt')

    shpl('soa_additions:solarium_star', ['soa_additions:broken_solarium_star', 'soa_additions:solar_seed'], 'solarium_star')

    shpl('minecraft:slime_ball', ['#forge:slimeballs'], 'slimeball_convert')

    shpl(Item.of('soa_additions:ordinary_medal', 9), ['soa_additions:pioneer_medal'], 'rev_medal_pioneer')

    shpl(Item.of('soa_additions:pioneer_medal', 9), ['soa_additions:greedy_medal'], 'rev_medal_greedy')

    shpl(Item.of('soa_additions:ancient_tome_page', 9), ['soa_additions:ancient_tome'], 'rev_tome_1')

    shpl(Item.of('soa_additions:ancient_tome_fragment', 9), ['soa_additions:ancient_tome_page'], 'rev_tome_0')

    shpl(Item.of('soa_additions:bounty_hunter_medal_silver', 9), ['soa_additions:bounty_hunter_medal'], 'gold_medal_rev')

    shpl(Item.of('soa_additions:bounty_hunter_medal_bronze', 9), ['soa_additions:bounty_hunter_medal_silver'], 'silver_medal_rev')

    shpl('mysticalagradditions:insanium_block', ['mysticalagriculture:master_infusion_crystal', 'mysticalagriculture:storage', 'mysticalagriculture:storage', 'mysticalagriculture:storage', 'mysticalagriculture:storage', 'mysticalagriculture:storage'], 'essence_super_4')

    shpl('inventorypets:pet_meta', ['#forge:pet_disabled'], 'pet_reroll')

    console.info('[soa_ported] vanilla_shapeless.js: DONE')
})
