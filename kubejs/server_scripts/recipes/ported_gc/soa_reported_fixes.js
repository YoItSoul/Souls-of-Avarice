console.info('[soa_ported] soa_reported_fixes.js loading')

ServerEvents.recipes(event => {

    event.shapeless(Item.of('mca:rose_gold_dust', 3),
        ['#forge:dusts/gold', '#forge:dusts/copper', '#forge:dusts/silver'])
        .id('soa_fix:rose_gold_dust')

    ;[
        'mysticalagriculture:prudentium_essence',
        'mysticalagriculture:tertium_essence',
        'mysticalagriculture:imperium_essence',
        'mysticalagriculture:supremium_essence',
        'mysticalagradditions:insanium_essence',
        'mysticalagradditions:insanium_essence_uncraft',
    ].forEach(id => event.remove({ id: id }))

    const MA_TIERS = [
        'mysticalagriculture:inferium_essence',
        'mysticalagriculture:prudentium_essence',
        'mysticalagriculture:tertium_essence',
        'mysticalagriculture:imperium_essence',
        'mysticalagriculture:supremium_essence',
        'mysticalagradditions:insanium_essence',
    ]
    const MA_NAME = ['inferium', 'prudentium', 'tertium', 'imperium', 'supremium', 'insanium']
    for (let i = 0; i < MA_TIERS.length - 1; i++) {

        event.shapeless(MA_TIERS[i + 1], Array(6).fill(MA_TIERS[i]))
            .id(`soa_fix:ma_up_${MA_NAME[i + 1]}`)

        event.shapeless(Item.of(MA_TIERS[i], 4), [MA_TIERS[i + 1]])
            .id(`soa_fix:ma_down_${MA_NAME[i + 1]}`)
    }

    event.shaped(Item.of('mysticalagriculture:supremium_growth_accelerator', 2),
        ['ABA', 'BCB', 'ABA'],
        { A: 'mysticalagriculture:imperium_block',
          B: 'mysticalagriculture:supremium_block',
          C: 'soa_additions:cytosinite_block' })
        .id('soa_fix:supremium_growth_accelerator')

    event.shaped(Item.of('xnet:netcable_blue', 32),
        [' R ', 'RCR', ' R '],
        { R: '#forge:dusts/redstone', C: '#forge:ingots/copper' })
        .id('soa_fix:xnet_netcable')

    event.shaped(Item.of('minecraft:torch', 16),
        ['G', 'S'],
        { G: '#forge:slimeballs', S: 'minecraft:stick' })
        .id('soa_fix:gel_torch')

    event.shapeless('ae2:cell_component_256k',
        ['ae2:cell_component_64k', 'ae2:cell_component_64k',
         'ae2:cell_component_64k', 'ae2:cell_component_64k'])
        .id('soa_fix:ae2_256k_component')

    event.shaped('actuallyadditions:ender_casing',
        ['ABA', 'CDC', 'ABA'],
        { A: '#forge:ingots/enderium', B: '#forge:ingots/fusion_matrix',
          C: '#forge:ingots/durasteel', D: 'actuallyadditions:black_quartz_block' })
        .id('soa_fix:ender_casing')

    event.shaped('tofucraft:tofustick',
        ['ABA', 'ACA', ' D '],
        { A: 'minecraft:gold_block', B: 'tofucraft:tofugem',
          C: 'tofucraft:blocktofumomen', D: 'minecraft:stick' })
        .id('soa_fix:tofustick')

    event.shaped('scalinghealth:enchanted_heart',
        ['AAA', 'ABA', ' A '],
        { A: '#forge:ingots/gold', B: 'scalinghealth:heart_crystal' })
        .id('soa_fix:enchanted_heart')

    event.shaped('scalinghealth:cursed_heart',
        [' A ', 'ABA', 'AAA'],
        { A: 'soa_additions:wither_bone', B: 'scalinghealth:heart_crystal' })
        .id('soa_fix:cursed_heart')

    event.shapeless('soa_additions:terrestrial_artifact',
        ['#forge:gems/ruby', '#forge:gems/topaz', '#forge:gems/amber',
         '#forge:gems/peridot', '#forge:gems/malachite', '#forge:gems/sapphire',
         '#forge:gems/tanzanite', '#forge:gems/amethyst', '#forge:gems/scarlite'])
        .id('soa_fix:terrestrial_artifact')

    event.shapeless('soa_additions:gaiasteel_ingot', ['soa_additions:gaia_steel_ingot'])
        .id('soa_fix:gaiasteel_from_gaia_steel')
    event.shapeless('soa_additions:gaia_steel_ingot', ['soa_additions:gaiasteel_ingot'])
        .id('soa_fix:gaia_steel_from_gaiasteel')

    event.shaped('actuallyadditions:ring_of_growth',
        ['ABA', 'BCB', 'ABA'],
        { A: 'soa_additions:creative_shard', B: 'minecraft:wheat_seeds', C: 'actuallyadditions:ring' })
        .id('soa_fix:ring_of_growth')

    event.remove({ output: 'cyclic:miner' })
    event.shaped('cyclic:miner',
        [' P ', 'CFC', ' S '],
        { P: 'minecraft:iron_pickaxe', C: '#forge:circuits/ultimate',
          F: 'rftoolsbase:machine_frame', S: 'soa_additions:creative_shard' })
        .id('soa_ported:block_miner_gc')

    event.remove({ output: 'cyclic:user' })
    event.shaped('cyclic:user',
        ['ADA', 'LCL', 'AKA'],
        { A: '#forge:storage_blocks/aeonsteel', D: 'minecraft:dispenser',
          L: '#forge:alloys/ultimate', C: '#forge:circuits/ultimate', K: 'cyclic:clock' })
        .id('soa_ported:block_user_gc')

    event.shaped(Item.of('soa_additions:stainless_steel_ball', 24),
        [' I ', 'III', ' I '],
        { I: '#forge:ingots/stainless_steel' })
        .id('soa_ported:stainless_steel_ball_gc')

    event.remove({ output: 'actuallyadditions:lens_of_the_killer' })
    event.shaped('actuallyadditions:lens_of_the_killer',
        ['ACA', 'CLC', 'ACA'],
        { A: '#forge:ingots/aeonsteel', C: '#forge:ingots/crimsonite',
          L: 'actuallyadditions:lens_of_certain_death' })
        .id('soa_ported:lens_of_the_killer_gc')

    event.shapeless('actuallyadditions:advanced_coil',
        ['actuallyadditions:basic_coil', '#forge:ingots/durasteel'])
        .id('soa_ported:advanced_coil_gc')

    event.remove({ output: 'actuallyadditions:lens_of_the_miner' })
    event.shaped('actuallyadditions:lens_of_the_miner',
        ['ACA', 'CLC', 'ACA'],
        { A: '#forge:ingots/aeonsteel', C: '#forge:ingots/chromium',
          L: 'actuallyadditions:lens' })
        .id('soa_ported:lens_of_the_miner_gc')

    event.remove({ output: 'defiled_lands_preborn:idol_sorrow' })
    event.shaped('defiled_lands_preborn:idol_sorrow',
        [' G ', 'RSR', ' U '],
        { G: 'botania:life_essence', R: '#forge:ingots/ravaging',
          S: 'defiled_lands_preborn:scarlite_block', U: 'defiled_lands_preborn:umbrium_ingot' })
        .id('soa_ported:idol_of_sorrow_gc')

    event.remove({ output: 'defiled_lands_preborn:conjuring_altar' })
    event.shaped('defiled_lands_preborn:conjuring_altar',
        ['USU', 'UUU'],
        { U: 'defiled_lands_preborn:umbrium_ingot', S: 'defiled_lands_preborn:scarlite_block' })
        .id('soa_ported:conjuring_altar_gc')

    event.remove({ output: 'defiled_lands_preborn:calling_stone' })
    event.shaped('defiled_lands_preborn:calling_stone',
        ['BSB', 'SHS', 'BSB'],
        { B: 'minecraft:blaze_powder', S: '#forge:gems/scarlite',
          H: 'defiled_lands_preborn:black_heart' })
        .id('soa_ported:calling_stone_gc')

    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'draconicevolution:draconic_energy_core' },
        ingredients: [
            { item: 'draconicevolution:large_chaos_frag' },
            { item: 'draconicevolution:large_chaos_frag' },
            { item: 'draconicevolution:large_chaos_frag' },
            { item: 'draconicevolution:large_chaos_frag' },
            { item: 'minecraft:redstone_block' },
            { item: 'minecraft:redstone_block' },
            { item: 'minecraft:redstone_block' },
            { item: 'minecraft:redstone_block' }
        ],
        result: { item: 'soa_additions:chaotic_energy_core' },
        tier: 'DRACONIC',
        total_energy: 1000000000
    })

    event.shaped('soa_additions:fusion_matrix_block',
        ['CCC', 'CCC', 'CCC'],
        { C: 'tconevo:coalescence_matrix' })
        .id('soa_ported:fusion_matrix_block_from_coalescence')

    event.shaped('forestry:log_pile',
        ['L L', ' L ', 'L L'],
        { L: '#minecraft:logs' })
        .id('soa_ported:wood_pile_gc')

    event.shapeless('projectexpansion:basic_emc_link',
        ['soa_additions:matter_block', 'rftoolsbase:machine_frame',
         '#forge:ingots/protonium', '#forge:ingots/electronium'])
        .id('soa_ported:energy_link_gc')

    event.shaped(Item.of('soa_additions:tf_machine_case', 8),
        ['MMM', 'M M', 'MMM'],
        { M: 'tofucraft:blocktofumetal' })
        .id('soa_ported:tofu_machine_case_gc')
})
