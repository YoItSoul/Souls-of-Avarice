// Ported from GreedyCraft: scripts/recipes/vanilla/crafting_table/shaped.zs
// 1.12.2 CraftTweaker -> 1.20.1 KubeJS
//
// 1415-line GC source, 279 addShaped entries, 130 portable to SoA installed mods.
// Generator: tmp/port_shaped.py (re-runnable; preserves auto_gen_<hash> names).
//
// Tag substitutions (CT oredict -> 1.20.1 forge tags):
//   <ore:ingotX>      -> #forge:ingots/x       <ore:blockX>  -> #forge:blocks/x
//   <ore:nuggetX>     -> #forge:nuggets/x      <ore:dustX>   -> #forge:dusts/x
//   <ore:gearX>       -> #forge:gears/x        <ore:plateX>  -> #forge:plates/x
//   <ore:crystalX>    -> #forge:crystals/x     <ore:gemX>    -> #forge:gems/x
//   <ore:rodX>/<stickX> -> #forge:rods/x      <ore:petalX>  -> #botania:petals/x
//   <ore:stringX>     -> #forge:strings/x      <ore:fluidX>  -> #forge:fluids/x
//
// ID rewrites (CT 1.12.2 ID -> 1.20.1 ID):
//   additions:greedycraft-X  -> soa_additions:X      additions:X      -> soa_additions:X
//   aether_legacy:X          -> aether:X             thermalfoundation:X / thermalexpansion:X -> thermal:X
//   cyclicmagic:X            -> cyclic:X             hooked:X         -> rehooked:X
//   projectex:X              -> projectextended:X    buildinggadgets:X -> buildinggadgets2:X
//
// Per project policy: recipes whose IDs no longer resolve in 1.20.1 will silently
// fail-load (KubeJS warning). Manual ID fixups belong in a follow-up pass.

console.info('[soa_ported] vanilla_shaped.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] vanilla_shaped.js: registering recipes')

    // Pre-check to silently skip any recipe whose result or ingredient items
    // aren't in the current registry. Catches the long tail of dead 1.12 IDs
    // (absent mods, removed meta-items, deleted JAOPCA essences, etc.) that
    // would otherwise spam "ItemStack 'result' can't be empty!" or "Item array
    // cannot be empty" warnings during registration. Tags (#…) skip the check.
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
    const shp = (out, grid, keys, name) => {
        if (!_liveItem(out)) return
        for (const k in keys) if (!_liveItem(keys[k])) return
        return event.shaped(out, grid, keys).id('soa_ported:shp_' + name)
    }

    // Vanilla spawn-egg recipes from GC (NBT-driven, can't be auto-generated).
    // KubeJS' shaped() accepts an Item.of() result with EntityTag NBT.
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
    spawnEgg('minecraft:ghast',    '#minecraft:glass_blocks',   'ghast_glass')

    // shapeless death_counter (was in original file as a one-off shapeless)
    event.shapeless('soa_additions:death_counter',
        ['tconstruct:pattern', 'minecraft:bone']).id('soa_ported:death_counter')

    // ----------------------------------------------------------------
// 130 portable recipes auto-generated from GC vanilla/crafting_table/shaped.zs
// (out of 249 parsed) — generator: tmp/port_shaped.py

    shp('minecraft:dragon_egg',
        [' A ', 'ABA', 'AAA'],
        { A: '#forge:scale_dragon_ender', B: '#forge:nether_star' },
        'dragonegg')

    // [SoA] GC 'tconstruct:materials:50' = Creative Modifier
    // (verified GC shaped.zs:37). 1.20.1 TCon has 'tconstruct:creative_slot'
    // (the creative-mode modifier-slot item).
    shp('tconstruct:creative_slot',
        [' A ', ' B '],
        { A: '#forge:blocks/draconic_metal', B: 'avaritia:singularity' },
        'creativehead')

    // [SoA] Disabled — result rename works (skull:1 → wither_skeleton_skull),
    // but ingredients are both dead in 1.20.1: 'quark:black_ash' was removed
    // from Quark, and 'mysticalagriculture:crafting' (1.12 meta-item; :15
    // was Wither Essence per GC shaped.zs:42) split per-essence with no
    // 'wither_essence' equivalent in this MA build.
    /*
    shp('minecraft:wither_skeleton_skull',
        ['AAA', 'ABA', 'AAA'],
        { A: 'quark:black_ash', B: 'mysticalagriculture:crafting' },
        'witherskull')
    */

    // [SoA] 'scalinghealth:difficultychanger' was dropped in the 1.20.1
    // rewrite; SoA reimplemented it as 'soa_additions:difficulty_changer'.
    // Note ingredient 'tconstruct:materials' is dead (1.12 meta-item); first
    // recipe will register but be uncraftable until that ingredient is
    // remapped. 'scalinghealth:heart_crystal' may also need a successor.
    shp('soa_additions:difficulty_changer',
        [' A ', 'ABA', 'AAA'],
        { A: 'tconstruct:materials', B: 'scalinghealth:heart_crystal' },
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
        { A: 'soa_additions:raw_human_meat', B: 'tconstruct:edible', C: 'minecraft:bone' },
        'auto_gen_-1707222290')

    shp('soa_additions:bloody_sacrifice',
        ['ABA', 'BCB', 'ABA'],
        { A: 'tconstruct:edible', B: 'soa_additions:raw_human_meat', C: 'minecraft:bone' },
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
        { A: 'minecraft:dye', B: 'minecraft:lapis_block', C: 'soa_additions:lucky_clover' },
        'auto_gen_-1533033400')

    shp('projecte:harvest_goddess_band',
        ['ABA', 'BCB', 'ABA'],
        { A: '#forge:soul_creative', B: 'minecraft:vine', C: 'projecte:item.pe_ring_iron_band' },
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
        { A: '#forge:coal', B: '#forge:logs/wood' },
        'wood_to_charcoal')

    shp('soa_additions:medkit_small',
        [' A ', 'ABA', ' A '],
        { A: 'scalinghealth:heartdust', B: 'minecraft:glass_bottle' },
        'auto_gen_-162477942')

    shp('soa_additions:medkit_big',
        [' A ', 'ABA', ' A '],
        { A: 'scalinghealth:crystalshard', B: 'soa_additions:medkit_small' },
        'auto_gen_-1175705809')

    shp('soa_additions:medkit_super',
        [' A ', 'ABA', ' A '],
        { A: 'scalinghealth:heart_crystal', B: 'soa_additions:medkit_big' },
        'auto_gen_-1873046907')

    shp(Item.of('mysticalagriculture:growth_accelerator', 2),
        ['AAA', 'ABA', 'AAA'],
        { A: 'mysticalagriculture:storage', B: '#forge:blocks/cytosinite' },
        'auto_gen_1179581625')

    // [SoA] Mekanism Generators 'generator' meta-item resolved from GC source
    // metadata (verified GC shaped.zs:252,267,292,297,302):
    //   :1  = Solar Generator           → mekanismgenerators:solar_generator
    //   :5  = Advanced Solar Generator  → mekanismgenerators:advanced_solar_generator
    //   :6  = Gas-Burning Generator     → mekanismgenerators:gas_burning_generator
    //   :12 = Reactor Port (creative wrap) — left disabled, ambiguous between
    //         fission_reactor_port and fusion_reactor_port without further
    //         GC context; design-clarification needed.
    // 'mekanism:machineblock:4' = Digital Miner → mekanism:digital_miner.
    /*
    shp('mekanismgenerators:generator',
        [' A ', 'ABA', ' A '],
        { A: 'mekanismgenerators:generator', B: '#forge:soul_creative' },
        'auto_gen_-1186141268')
    */

    // Original GC ingredients resolved (shaped.zs:267-271):
    //   machineblock:15 = Logistical Sorter → mekanism:logistical_sorter
    //   basicblock:8    = Steel Casing      → mekanism:steel_casing
    //   machineblock2:6 = Chemical Washer   → mekanism:chemical_washer
    shp('mekanism:digital_miner',
        ['ABA', 'CDE', 'FGF'],
        { A: 'mekanism:teleportation_core', B: 'mekanism:logistical_sorter', C: 'mekanism:robit', D: 'mekanism:steel_casing', E: 'mekanism:chemical_washer', F: '#forge:shards/creative', G: '#forge:blocks/wyvern_metal' },
        'auto_gen_-1864302722')

    shp('mekanismgenerators:gas_burning_generator',
        [' A ', 'ABA', 'CDC'],
        { A: '#forge:alloy_ultimate', B: '#forge:ingots/aeonsteel', C: 'mekanism:energy_tablet', D: '#forge:circuit_ultimate' },
        'auto_gen_1084804943')

    // Mekanism 1.20.1 alloy renames: atomicalloy → alloy_atomic,
    // enrichedalloy → alloy_infused.
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
        { A: 'minecraft:iron_block', B: 'draconicevolution:awakened_core', C: 'tconevo:metal_block' },
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
        { A: '#forge:obsidian', B: '#forge:gems/diamond', C: '#forge:enderpearl' },
        'auto_gen_918073950')

    // [SoA] GC source: 'thermalfoundation:material:23' = Saw Blade
    // (verified GC shaped.zs:422). Thermal 1.20.1 keeps this as
    // 'thermal:saw_blade'.
    shp('thermal:saw_blade',
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

    shp(Item.of('appliedenergistics2:material', 4),
        [' A ', 'ABA', ' A '],
        { A: '#forge:dusts/redstone', B: '#forge:gems/quartz' },
        'auto_gen_-555162558')

    shp('soa_additions:bravery_certificate',
        ['ABA', 'CDC'],
        { A: '#forge:ingots/asgardium', B: '#forge:nether_star', C: '#forge:ingots/aeroite', D: 'aether:golden_amber' },
        'auto_gen_-696385933')

    shp('soa_additions:fusion_matrix_block',
        ['AAA', 'AAA', 'AAA'],
        { A: 'soa_additions:fusion_matrix_ingot' },
        'auto_gen_252415292')

    shp('soa_additions:death_coin',
        ['ABA', 'CDC', 'AEA'],
        { A: 'draconicevolution:awakened_core', B: 'soa_additions:ancient_tome_fragment', C: 'tconevo:metal', D: 'soa_additions:bounty_hunter_medal', E: '#forge:shards/creative' },
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

    // [SoA] 'rehooked:hook' meta-item split per material in 1.20.1; this
    // recipe (sticks/wood + stone_pickaxe + string) is the wooden hook.
    shp('rehooked:wood_hook',
        ['AAB', ' CA', 'C A'],
        { A: '#forge:sticks/wood', B: 'minecraft:stone_pickaxe', C: '#forge:string' },
        'auto_gen_1397188541')

    shp('soa_additions:cryonium_block',
        ['AAA', 'AAA', 'AAA'],
        { A: '#forge:ingots/cryonium' },
        'auto_gen_-138403773')

    shp('soa_additions:beast_hand',
        ['ABA', 'CDC', ' C '],
        { A: '#forge:ingots/aeonsteel', B: '#forge:blocks/snow', C: 'twilightforest:alpha_fur', D: '#forge:dusts/draconium' },
        'auto_gen_100207823')

    shp('soa_additions:sun_totem',
        [' A ', 'BCB', ' D '],
        { A: 'draconicevolution:wyvern_core', B: '#forge:ingots/solarium', C: 'minecraft:totem_of_undying', D: '#forge:nether_star' },
        'auto_gen_1913024224')

    shp('cyclic:miner',
        [' A ', 'BCB', ' D '],
        { A: 'minecraft:iron_pickaxe', B: '#forge:circuit_ultimate', C: 'rftools:machine_frame', D: '#forge:shards/creative' },
        'auto_gen_-935233766')

    shp('cyclic:slingshot',
        ['ABA', ' A ', ' A '],
        { A: '#forge:sticks/wood', B: '#forge:string' },
        'auto_gen_-1848316431')

    // [SoA] RFTools split into rftoolsbase/rftoolsutility/etc. in 1.20.1.
    // 'machine_frame' moved to rftoolsbase. 'shape_card' and
    // 'environmental_controller' (RFTools Builder/RFTools Control parts)
    // aren't present in this pack's RFTools subset — left disabled.
    shp('rftoolsbase:machine_frame',
        ['ABA', 'BCB', 'ABA'],
        { A: '#forge:blocks/glass', B: '#forge:ingots/iron', C: '#forge:gears/tin' },
        'frame_alt')

    /*
    shp('rftools:shape_card',
        ['ABA', 'BCB', 'ABA'],
        { A: '#forge:paper', B: '#forge:ingots/brick', C: '#forge:shards/creative' },
        'card_0')

    shp('rftools:shape_card',
        ['ABA', 'BCB', 'ABA'],
        { A: '#forge:paper', B: '#forge:ingots/void', C: 'rftools:shape_card' },
        'card_1')

    shp('rftools:environmental_controller',
        ['ABA', 'CDC', 'ABA'],
        { A: '#forge:pearl_ender_eye', B: '#forge:nether_star', C: '#forge:shards/creative', D: 'rftools:machine_frame' },
        'environmental_controller')
    */

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
        { A: '#forge:pane_glass', B: '#forge:blocks/terrasteel', C: '#forge:obsidian' },
        'beacon')

    shp('soa_additions:difficulty_syncer',
        ['AAA', 'ABA', 'AAA'],
        { A: '#forge:pane_glass', B: '#forge:bone' },
        'difficulty_syncer')

    // [SoA] Solar Flux 1.20.1 renamed panels to sp_N (solar_panel_1 → sp_1,
    // ..., solar_panel_8 → sp_8). Ingredient solar_panel_1 also rewritten.
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
        { A: '#forge:pearl_ender_eye', B: '#forge:nether_star', C: '#forge:endstone' },
        'end_portal_frame')

    shp('soa_additions:experience_transporter',
        ['ABA', 'BCB', 'ABA'],
        { A: '#forge:pearl_ender_eye', B: '#forge:eternal_life_essence', C: 'soa_additions:pearl_of_knowledge' },
        'experience_transporter')

    // [SoA] 'soa_additions:netherite_block' was a port artifact; SoA didn't
    // ship its own — vanilla 'minecraft:netherite_block' is the target.
    shp('minecraft:netherite_block',
        ['AAA', 'AAA', 'AAA'],
        { A: '#forge:ingots/netherite' },
        'netherite_block')

    shp('soa_additions:stainless_steel_block',
        ['AAA', 'AAA', 'AAA'],
        { A: '#forge:ingots/stainless_steel' },
        'stainless_steel_block')

    // [SoA] Mekanism 1.20.1 split 'basicblock' meta-item; recipe pattern
    // (stainless_steel + glass_hardened + osmium) matches the basic machine
    // casing → 'mekanism:steel_casing'.
    shp('mekanism:steel_casing',
        ['ABA', 'BCB', 'ABA'],
        { A: '#forge:ingots/stainless_steel', B: '#forge:blocks/glass_hardened', C: '#forge:ingots/osmium' },
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
        { A: '#forge:ingots/stainless_steel', B: '#forge:dusts/redstone', C: '#forge:slimeball', D: '#forge:gems/diamond' },
        'auto_gen_-1071431898')

    shp('buildinggadgets2:gadget_destruction',
        ['ABA', 'CDC', 'ABA'],
        { A: '#forge:ingots/aeonsteel', B: 'minecraft:bedrock', C: '#forge:ingots/ravaging', D: '#forge:nether_star' },
        'auto_gen_12241914')

    // [SoA] Disabled — GC ingredient was 'thermalfoundation:material:833'
    // = Cryotheum Dust (verified GC shaped.zs). Thermal 1.20.1 dropped the
    // dust forms (only fluid 'thermal:cryotheum' remains), so no clean
    // item-form successor for the recipe.
    /*
    shp('soa_additions:nylon_string',
        ['AAA'],
        { A: 'thermal:material' },
        'nylon_string')
    */

    shp('soa_additions:nylon_cloth',
        ['AAA', 'AAA', 'AAA'],
        { A: '#forge:strings/nylon' },
        'nylon_cloth')

    // [SoA] Disabled — GC ingredient was 'thermalfoundation:material:832'
    // = Pyrotheum Dust (verified GC shaped.zs). Same rationale as nylon_string
    // above: Thermal 1.20.1 has no dust item form, only the fluid.
    /*
    shp('soa_additions:rubber_band',
        ['AAA'],
        { A: 'thermal:material' },
        'rubber_band')
    */

    shp(Item.of('soa_additions:stainless_steel_ball', 24),
        [' A ', 'AAA', ' A '],
        { A: '#forge:ingots/stainless_steel' },
        'stainless_steel_ball')

    shp('soa_additions:plate_of_honor',
        [' A ', 'ABA', ' A '],
        { A: 'quark:rune', B: '#forge:cast' },
        'plate_of_honor')

    // [SoA] GC source 'projectex:collector:5' = top-tier collector
    // (verified GC shaped.zs:1050). Project Extended in 1.20.1 doesn't ship
    // a 'collector' item, so the top-tier ProjectE replacement is
    // collector_mk3. Note ingredient 'projectextended:matter' is also dead
    // (a 1.12 ProjectEx meta-item, not present in this pack); recipe will
    // register but be uncraftable until that ingredient is also remapped
    // (closest substitute: 'projecte:red_matter' once you decide the tier).
    shp('projecte:collector_mk3',
        [' A ', 'ABA', ' A '],
        { A: 'projectextended:matter', B: '#forge:soul_creative' },
        'emc_collector_purple')

    shp('cyclic:harvester',
        [' A ', 'BCB', 'DBD'],
        { A: 'cyclic:tool_harvest_crops', B: '#forge:ingots/aeonsteel', C: 'minecraft:dispenser', D: '#forge:circuit_ultimate' },
        'harvester')

    shp(Item.of('mysticalagriculture:mystical_fertilizer', 2),
        ['ABA', 'BCB', 'ABA'],
        { A: 'mysticalagriculture:fertilized_essence', B: 'thermal:fertilizer', C: '#forge:essence_supremium' },
        'ma_mystical_fertilizer')

    shp('soa_additions:protonium_block',
        ['AAA', 'AAA', 'AAA'],
        { A: '#forge:ingots/protonium' },
        'protonium_block')

    shp('soa_additions:protonium_ingot',
        ['ABA', 'ABA'],
        { A: '#forge:nuggets/cosmic_neutronium', B: 'projectextended:matter' },
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
        { A: '#forge:list_allsugar', B: '#forge:shards/time', C: '#forge:sticks/wood' },
        'loli_lolipop')

    shp('bloodmagic:soulforge',
        ['A A', 'BCB', 'BDB'],
        { A: '#forge:ingots/stainless_steel', B: '#forge:blocks/nether_brick', C: '#forge:rods/blaze', D: '#forge:blocks/iron' },
        'soul_forge')

    shp(Item.of('enderio:item_endergy_conduit', 8),
        ['ABA', 'CDC', 'ABA'],
        { A: '#forge:item_conduit_binder', B: '#forge:ingots/stellar_alloy', C: '#forge:item_infinity_goop', D: '#forge:ingots/titanium' },
        'stellar_alloy_conduit_energy')

    shp(Item.of('enderio:item_fluid_conduit', 8),
        ['ABA', 'CDC', 'ABA'],
        { A: '#forge:item_conduit_binder', B: '#forge:ingots/stellar_alloy', C: '#forge:blocks/glass_hardened', D: '#forge:ingots/titanium' },
        'stellar_alloy_conduit_fluid')

    shp('cyclic:heart',
        ['AAA', 'ABA', 'AAA'],
        { A: 'scalinghealth:heart_crystal', B: '#forge:ingots/crimsonite' },
        'cyclic_heart_food')

    // [SoA] Ender IO renamed item_soul_vial → empty_soul_vial in 1.20.1.
    shp('enderio:empty_soul_vial',
        [' A ', 'B B', ' B '],
        { A: '#forge:ingots/soularium', B: '#forge:blocks/glass' },
        'soul_vial')

    // [SoA] 'rehooked:hook' meta-item → ender_hook for the result; ingredient
    // 'rehooked:hook' upgrades from iron_hook (mid-tier base hook).
    shp('rehooked:ender_hook',
        ['ABC', ' DB', 'E A'],
        { A: '#forge:pearl_ender_eye', B: '#forge:rods/blaze', C: '#forge:endstone', D: 'rehooked:iron_hook', E: '#forge:dusts/blaze' },
        'ender_hook')

    shp(Item.of('bloodmagic:soul_snare', 8),
        ['  A', ' B ', 'C  '],
        { A: 'minecraft:web', B: '#forge:strings/nylon', C: '#forge:ingots/thaumium' },
        'soul_snare')

    shp(Item.of('minecraft:iron_trapdoor', 2),
        ['AAA', 'ABA', 'AAA'],
        { A: '#forge:ingots/iron', B: '#forge:dusts/redstone' },
        'iron_trap_door')

    shp(Item.of('mekanismgenerators:generator', 16),
        ['ABA', 'BCB', 'ABA'],
        { A: '#forge:ingots/titanium', B: '#forge:ingots/aeonsteel', C: 'soa_additions:creative_shard' },
        'turbo_casing')

    shp('twilightforest:charm_of_keeping_2',
        ['ABA', 'BCB', 'ABA'],
        { A: '#forge:ingots/durasteel', B: 'twilightforest:charm_of_keeping_1', C: 'minecraft:golden_apple' },
        'charm_of_keeping_2')

    shp('twilightforest:charm_of_keeping_3',
        ['ABA', 'BCB', 'ABA'],
        { A: '#forge:ingots/aeonsteel', B: 'twilightforest:charm_of_keeping_2', C: '#forge:nether_star' },
        'charm_of_keeping_3')

    // [SoA] 'mekanism:basicblock2:7' = Formulaic Assemblicator (verified GC
    // shaped.zs:1253) → mekanism:formulaic_assemblicator in 1.20.1.
    shp('mekanism:formulaic_assemblicator',
        [' A ', 'ABA', ' A '],
        { A: '#forge:ingots/aeonsteel', B: '#forge:ingots/stainless_steel' },
        'mek_casing_2')

    // [SoA] GC source has controlcircuit:1/2/3 (verified in
    // GreedyCraft/scripts/recipes/vanilla/crafting_table/shaped.zs:1258-1268).
    // 1.12 controlcircuit metadata: 0=basic, 1=advanced, 2=elite, 3=ultimate.
    shp('mekanism:advanced_control_circuit',
        [' A ', 'BCB', ' A '],
        { A: '#forge:ingots/stainless_steel', B: '#forge:alloy_advanced', C: '#forge:circuit_basic' },
        'mek_circuit_1')

    shp('mekanism:elite_control_circuit',
        [' A ', 'BCB', ' A '],
        { A: '#forge:ingots/durasteel', B: '#forge:alloy_elite', C: '#forge:circuit_advanced' },
        'mek_circuit_2')

    shp('mekanism:ultimate_control_circuit',
        [' A ', 'BCB', ' A '],
        { A: '#forge:ingots/aeonsteel', B: '#forge:alloy_ultimate', C: '#forge:circuit_elite' },
        'mek_circuit_3')

    shp('cyclic:user',
        ['ABA', 'CDC', 'AEA'],
        { A: '#forge:blocks/aeonsteel', B: 'minecraft:dispenser', C: '#forge:alloy_ultimate', D: '#forge:circuit_ultimate', E: 'cyclic:clock' },
        'cyclic_user')

    shp('torchmaster:megatorch',
        ['ABA', 'CDC', 'EDE'],
        { A: '#forge:gel', B: '#forge:torch', C: '#forge:gems/diamond', D: '#forge:plank_wood', E: '#forge:ingots/gold' },
        'mega_torch')

    shp('torchmaster:feral_flare_lantern',
        ['ABA', 'CDC', 'ADA'],
        { A: '#forge:blocks/glass', B: '#forge:dusts/blaze', C: '#forge:gel', D: '#forge:rods/blaze' },
        'flare_lantern')

    shp('torchmaster:dreadlamp',
        ['ABA', 'CDC', 'ABA'],
        { A: '#forge:obsidian', B: '#forge:blocks/glass', C: '#forge:gel', D: '#forge:rods/blaze' },
        'dread_lamp')

    shp('globalxp:xp_block',
        ['ABA', 'BCB', 'ABA'],
        { A: 'minecraft:iron_bars', B: '#forge:ingots/experience', C: 'minecraft:emerald' },
        'xp_block')

    shp(Item.of('tconstruct:throwball', 4),
        ['ABA', 'BCB', 'ABA'],
        { A: '#forge:gunpowder', B: '#forge:dusts/sulfur', C: '#forge:ingots/meteor' },
        'efln')

    // [SoA] Disabled — 'jaopca:item_essenceshadowium' was a JAOPCA-generated
    // 1.12 essence item; JAOPCA 1.20.1 doesn't generate this for shadowium.
    // SoA ships 'soa_additions:shadowium_ore' (block) which already smelts
    // to the ingot, so this compression recipe is functionally redundant.
    /*
    shp('soa_additions:shadowium_ingot',
        ['AAA', 'A A', 'AAA'],
        { A: 'jaopca:item_essenceshadowium' },
        'shadowium_essence')
    */

    shp('inventorypets:feed_bag',
        ['   ', 'ABA', ' A '],
        { A: '#forge:item_leather', B: 'minecraft:golden_apple' },
        'pet_feed_bag')

    shp('soa_additions:twilight_gem',
        [' A ', 'BCD', ' E '],
        { A: 'twilightforest:magic_map_focus', B: '#forge:ingots/steeleaf', C: '#forge:gems/diamond', D: 'twilightforest:naga_scale', E: '#forge:ingots/knightmetal' },
        'twilight_gem_alt')

    console.info('[soa_ported] vanilla_shaped.js: DONE')
})
