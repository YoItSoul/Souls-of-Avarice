// Ported from GreedyCraft: scripts/recipes/vanilla/crafting_table/shapeless.zs
// 1.12.2 CraftTweaker -> 1.20.1 KubeJS
//
// 557-line GC source, 175 addShapeless entries, 105 portable to SoA installed mods.
// Generator: tmp/port_shapeless.py (re-runnable; preserves auto_gen_<hash> names).

console.info('[soa_ported] vanilla_shapeless.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] vanilla_shapeless.js: registering recipes')

    // See vanilla_shaped.js for rationale: pre-check live items, silent skip
    // on dead ingredients to avoid "Item array cannot be empty" parse warnings
    // for the long tail of absent-mod / removed-meta-item dead refs.
    // Item.exists() returns true for some dead 1.12 IDs that KubeJS still
    // resolves to an empty (air) stack — so the only reliable check is to
    // build the stack and ask if it's empty. Same goes for Item.of(...)
    // results passed in directly.
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

    // ----------------------------------------------------------------
// 105 portable recipes auto-generated from GC vanilla/crafting_table/shapeless.zs
// (out of 161 parsed)

    shpl(Item.of('minecraft:string', 2), ['minecraft:web'], 'web_to_string')

    shpl('thermal:material', ['minecraft:blaze_powder', 'thermal:material'], 'thermal_shapeless_1')

    shpl('thermal:material', ['minecraft:blaze_powder', 'minecraft:blaze_powder', 'minecraft:stone'], 'thermal_shapeless_2')

    shpl('thermal:material', ['aether:golden_ring'], 'thermal_shapeless_3')

    shpl('thermal:material', ['aether:iron_ring'], 'thermal_shapeless_4')

    shpl('minecraft:leather', ['minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh'], 'rotleather')

    shpl(Item.of('avaritia:block_resource', 64), ['soa_additions:infinity_block_block'], 'auto_gen_1334582590')

    shpl(Item.of('soa_additions:infinity_block_block', 64), ['soa_additions:infinity_block_block_block'], 'auto_gen_-702569552')

    shpl('thermal:material', ['projecte:item.pe_philosophers_stone', '#forge:ingots/iron', '#forge:ingots/iron', '#forge:ingots/iron', '#forge:ingots/iron', '#forge:ingots/iron'], 'auto_gen_747705352')

    shpl('thermal:material', ['#forge:ingots/copper', '#forge:ingots/copper', '#forge:ingots/copper', '#forge:ingots/copper', '#forge:ingots/copper', 'projecte:item.pe_philosophers_stone'], 'auto_gen_1647035237')

    shpl('thermal:material', ['projecte:item.pe_philosophers_stone', '#forge:ingots/gold', '#forge:ingots/gold', '#forge:ingots/gold', '#forge:ingots/gold', '#forge:ingots/gold'], 'auto_gen_104947165')

    shpl(Item.of('minecraft:crafting_table', 4), ['#forge:logs/wood', '#forge:logs/wood', '#forge:logs/wood', '#forge:logs/wood'], 'auto_gen_288981592')

    shpl('minecraft:dragon_breath', ['minecraft:glass_bottle', '#forge:skull_ender_dragon'], 'auto_gen_-865558598')

    shpl(Item.of('scalinghealth:heart_dust', 9), ['scalinghealth:heart_crystal_shard'], 'auto_gen_1565439995')

    shpl('scalinghealth:heart_crystal_shard', ['scalinghealth:heart_dust', 'scalinghealth:heart_dust', 'scalinghealth:heart_dust', 'scalinghealth:heart_dust', 'scalinghealth:heart_dust', 'scalinghealth:heart_dust', 'scalinghealth:heart_dust', 'scalinghealth:heart_dust', 'scalinghealth:heart_dust'], 'auto_gen_522430280')

    shpl(Item.of('scalinghealth:heart_crystal_shard', 9), ['scalinghealth:heartcontainer'], 'auto_gen_-1180907112')

    shpl(Item.of('soa_additions:experience_block', 9), ['soa_additions:compressed_experience_block'], 'auto_gen_269849607')

    shpl(Item.of('soa_additions:experience_ingot', 9), ['soa_additions:experience_block'], 'auto_gen_680300395')

    shpl(Item.of('soa_additions:experience_nugget', 9), ['soa_additions:experience_ingot'], 'auto_gen_198647556')

    shpl('soa_additions:experience_nugget', ['mysticalagriculture:experience_droplet'], 'auto_gen_1353175347')

    shpl('projecte:transmutation_table', ['projectextended:stone_table'], 'auto_gen_244244256')

    shpl('minecraft:crafting_table', ['tconstruct:tooltables'], 'auto_gen_-1011385798')

    shpl('thermal:material', ['projecte:item.pe_philosophers_stone', '#forge:ingots/platinum', '#forge:ingots/platinum', '#forge:ingots/platinum', '#forge:ingots/platinum'], 'auto_gen_741775353')

    shpl('soa_additions:death_counter', ['tconstruct:pattern', 'minecraft:bone'], 'auto_gen_1910785345')

    shpl('mysticalagriculture:crafting', ['mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting'], 'ma_essence_0')

    shpl('mysticalagriculture:crafting', ['mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting'], 'ma_essence_1')

    shpl('mysticalagriculture:crafting', ['mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting'], 'ma_essence_2')

    shpl('mysticalagriculture:crafting', ['mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting'], 'ma_essence_3')

    shpl('mysticalagradditions:insanium_essence', ['mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting'], 'ma_essence_4')

    shpl(Item.of('mysticalagriculture:crafting', 4), ['mysticalagriculture:crafting'], 'ma_essence_0_rev')

    shpl(Item.of('mysticalagriculture:crafting', 4), ['mysticalagriculture:crafting'], 'ma_essence_1_rev')

    shpl(Item.of('mysticalagriculture:crafting', 4), ['mysticalagriculture:crafting'], 'ma_essence_2_rev')

    shpl(Item.of('mysticalagriculture:crafting', 4), ['mysticalagriculture:crafting'], 'ma_essence_3_rev')

    shpl(Item.of('mysticalagriculture:crafting', 4), ['mysticalagradditions:insanium_essence'], 'ma_essence_4_rev')

    shpl('mysticalagriculture:crafting', ['mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting'], 'auto_gen_271729765')

    shpl('mysticalagriculture:crafting', ['mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting'], 'auto_gen_2055027330')

    shpl('mysticalagriculture:crafting', ['mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting'], 'auto_gen_1970110023')

    shpl('mysticalagriculture:crafting', ['mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting'], 'auto_gen_1885192716')

    shpl('mysticalagriculture:crafting', ['mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting', 'mysticalagriculture:crafting'], 'auto_gen_1800275409')

    shpl('mysticalagradditions:insanium_essence', ['mysticalagriculture:crafting', 'mysticalagradditions:insanium_essence', 'mysticalagradditions:insanium_essence', 'mysticalagradditions:insanium_essence', 'mysticalagradditions:insanium_essence'], 'auto_gen_-1248999641')

    shpl('quark:limestone', ['#forge:stone_marble'], 'auto_gen_303589427')

    shpl('forge:bucketfilled', ['forge:bucketfilled'], 'auto_gen_-880073734')

    shpl('forge:bucketfilled', ['forge:bucketfilled'], 'auto_gen_-983697411')

    shpl(Item.of('mysticalagradditions:insanium_essence', 9), ['#forge:blocks/insanium_essence'], 'auto_gen_-60414065')

    shpl(Item.of('mysticalagriculture:crafting', 9), ['#forge:blocks/supremium_essence'], 'auto_gen_1844726144')

    shpl(Item.of('mysticalagriculture:crafting', 9), ['#forge:blocks/superium_essence'], 'auto_gen_1323422212')

    shpl(Item.of('mysticalagriculture:crafting', 9), ['#forge:blocks/intermedium_essence'], 'auto_gen_662804194')

    shpl(Item.of('mysticalagriculture:crafting', 9), ['#forge:blocks/prudentium_essence'], 'auto_gen_1137610693')

    shpl(Item.of('mysticalagriculture:crafting', 9), ['#forge:blocks/inferium_essence'], 'auto_gen_-163727312')

    shpl('appliedenergistics2:material', ['appliedenergistics2:material', 'appliedenergistics2:material', 'appliedenergistics2:material', 'appliedenergistics2:material'], 'auto_gen_-1028255111')

    shpl('appliedenergistics2:material', ['appliedenergistics2:material', 'appliedenergistics2:material', 'appliedenergistics2:material', 'appliedenergistics2:material'], 'auto_gen_-1168410344')

    shpl('appliedenergistics2:material', ['appliedenergistics2:material', 'appliedenergistics2:material', 'appliedenergistics2:material', 'appliedenergistics2:material'], 'auto_gen_-1308565577')

    shpl('projectextended:energy_link', ['soa_additions:matter_block', 'rftoolsbase:machine_frame', '#forge:ingots/protonium', '#forge:ingots/electronium'], 'auto_gen_462958864')

    shpl('enderio:item_material', ['quark:black_ash'], 'auto_gen_2033568330')

    shpl('quark:black_ash', ['enderio:item_material'], 'auto_gen_254615916')

    shpl(Item.of('soa_additions:fusion_matrix_ingot', 9), ['#forge:blocks/fusion_matrix'], 'auto_gen_455125292')

    shpl(Item.of('soa_additions:infernium_ingot', 9), ['soa_additions:infernium_block'], 'auto_gen_330301095')

    shpl(Item.of('soa_additions:infernium_nugget', 9), ['soa_additions:infernium_ingot'], 'auto_gen_193347573')

    shpl('soa_additions:tower_chest_unlocked', ['soa_additions:tower_chest', 'soa_additions:tower_chest_key'], 'unlock_chest')

    shpl('soa_additions:pebble', ['#forge:rocks'], 'stone')

    shpl('minecraft:stick', ['#forge:twigs'], 'twig')

    shpl('soa_additions:grass_string', ['#forge:plant_fibre', '#forge:plant_fibre', '#forge:plant_fibre'], 'auto_gen_-1599197603')

    shpl('soa_additions:crude_hatchet', ['#forge:pebble', '#forge:string', '#forge:sticks/wood'], 'auto_gen_-689226972')

    shpl('twilightforest:magic_map_focus', ['twilightforest:raven_feather', 'twilightforest:torchberries'], 'auto_gen_-1342866062')

    shpl('minecraft:glass', ['#forge:sand', 'soa_additions:fake_philosopher_stone'], 'sand_to_glass')

    shpl('minecraft:stick', ['#forge:twigs'], 'stick')

    shpl('mowziesmobs:earthrend_gauntlet', ['#forge:dirt', '#forge:shards/creative', '#forge:shards/creative'], 'earth_talisman')

    shpl(Item.of('soa_additions:cryonium_ingot', 9), ['#forge:blocks/cryonium'], 'auto_gen_-518845405')

    shpl('minecraft:stick', ['#forge:tree_sapling'], 'sapling')

    shpl('soa_additions:plant_fibre', ['#forge:plant_cattail'], 'cattail')

    shpl('minecraft:firework_rocket', ['minecraft:fire_charge', '#forge:paper', '#forge:gunpowder'], 'firework')

    shpl('rftoolsbase:machine_frame', ['thermal:frame'], 'frame_alt_2')

    shpl('thermal:frame', ['rftoolsbase:machine_frame'], 'frame_alt_2_reverse')

    shpl('thaumadditions:adaminite_plate', ['#forge:ingots/adaminite', '#forge:ingots/adaminite', '#forge:ingots/adaminite', '#forge:ingots/adaminite', '#forge:ingots/adaminite', '#forge:ingots/adaminite'], 'plate_0')

    shpl('thaumadditions:mithminite_plate', ['#forge:ingots/mithminite', '#forge:ingots/mithminite', '#forge:ingots/mithminite', '#forge:ingots/mithminite', '#forge:ingots/mithminite', '#forge:ingots/mithminite'], 'plate_1')

    shpl('thaumadditions:mithrillium_plate', ['#forge:ingots/mithrillium', '#forge:ingots/mithrillium', '#forge:ingots/mithrillium', '#forge:ingots/mithrillium', '#forge:ingots/mithrillium', '#forge:ingots/mithrillium'], 'plate_2')

    shpl(Item.of('soa_additions:terra_alloy_ingot', 9), ['#forge:blocks/terra_alloy'], 'terra_alloy_block_rev')

    shpl(Item.of('soa_additions:cytosinite_ingot', 9), ['#forge:blocks/cytosinite'], 'cytosinite_block_rev')

    shpl(Item.of('soa_additions:astral_metal_ingot', 9), ['#forge:blocks/astral_metal'], 'astral_metal_block_rev')

    shpl(Item.of('soa_additions:cosmilite_ingot', 9), ['#forge:blocks/cosmilite'], 'cosmilite_block_rev')

    shpl(Item.of('soa_additions:titanium_nugget', 9), ['#forge:ingots/titanium'], 'titanium_ingot_rev')

    shpl(Item.of('soa_additions:titanium_ingot', 9), ['#forge:blocks/titanium'], 'titanium_block_rev')

    shpl(Item.of('minecraft:netherite_ingot', 9), ['#forge:blocks/netherite'], 'netherite_block_rev')

    shpl('projectextended:stone_table', ['projecte:transmutation_table', '#forge:stone'], 'stone_table')

    shpl(Item.of('soa_additions:stainless_steel_ingot', 9), ['#forge:blocks/stainless_steel'], 'stainless_steel_rev')

    shpl(Item.of('soa_additions:protonium_ingot', 9), ['#forge:blocks/protonium'], 'protonium_rev')

    shpl(Item.of('soa_additions:electronium_ingot', 9), ['#forge:blocks/electronium'], 'electronium_rev')

    shpl(Item.of('avaritia:infinity_ingot', 2), ['#forge:ingots/protonium', '#forge:ingots/electronium'], 'neutronium_combination')

    shpl(Item.of('avaritia:block_resource', 2), ['#forge:blocks/protonium', '#forge:blocks/electronium'], 'neutronium_block_combination')

    shpl(Item.of('soa_additions:crimsonite_ingot', 9), ['#forge:blocks/crimsonite'], 'crimsonite_rev')

    shpl('projecte:transmutation_tablet', ['projecte:transmutation_tablet'], 'emc_tablet_clear_nbt')

    shpl('soa_additions:solarium_star', ['soa_additions:broken_solarium_star', 'soa_additions:solar_seed'], 'solarium_star')

    shpl('minecraft:slime_ball', ['#forge:slimeball'], 'slimeball_convert')

    shpl(Item.of('soa_additions:ordinary_medal', 9), ['soa_additions:pioneer_medal'], 'rev_medal_pioneer')

    shpl(Item.of('soa_additions:pioneer_medal', 9), ['soa_additions:greedy_medal'], 'rev_medal_greedy')

    shpl(Item.of('soa_additions:ancient_tome_page', 9), ['soa_additions:ancient_tome'], 'rev_tome_1')

    shpl(Item.of('soa_additions:ancient_tome_fragment', 9), ['soa_additions:ancient_tome_page'], 'rev_tome_0')

    shpl(Item.of('soa_additions:bounty_hunter_medal_silver', 9), ['soa_additions:bounty_hunter_medal'], 'gold_medal_rev')

    shpl(Item.of('soa_additions:bounty_hunter_medal_bronze', 9), ['soa_additions:bounty_hunter_medal_silver'], 'silver_medal_rev')

    shpl('mysticalagriculture:storage', ['mysticalagriculture:master_infusion_crystal', 'mysticalagriculture:storage', 'mysticalagriculture:storage', 'mysticalagriculture:storage', 'mysticalagriculture:storage', 'mysticalagriculture:storage'], 'essence_super_0')

    shpl('mysticalagriculture:storage', ['mysticalagriculture:master_infusion_crystal', 'mysticalagriculture:storage', 'mysticalagriculture:storage', 'mysticalagriculture:storage', 'mysticalagriculture:storage', 'mysticalagriculture:storage'], 'essence_super_1')

    shpl('mysticalagriculture:storage', ['mysticalagriculture:master_infusion_crystal', 'mysticalagriculture:storage', 'mysticalagriculture:storage', 'mysticalagriculture:storage', 'mysticalagriculture:storage', 'mysticalagriculture:storage'], 'essence_super_2')

    shpl('mysticalagriculture:storage', ['mysticalagriculture:master_infusion_crystal', 'mysticalagriculture:storage', 'mysticalagriculture:storage', 'mysticalagriculture:storage', 'mysticalagriculture:storage', 'mysticalagriculture:storage'], 'essence_super_3')

    shpl('mysticalagradditions:insanium_block', ['mysticalagriculture:master_infusion_crystal', 'mysticalagriculture:storage', 'mysticalagriculture:storage', 'mysticalagriculture:storage', 'mysticalagriculture:storage', 'mysticalagriculture:storage'], 'essence_super_4')

    shpl('inventorypets:meta_pet', ['#forge:pet_disabled'], 'pet_reroll')

    console.info('[soa_ported] vanilla_shapeless.js: DONE')
})
