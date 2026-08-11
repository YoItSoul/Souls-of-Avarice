console.info('[soa_ported] packmode_expert_vanilla.js loading')

ServerEvents.recipes(event => {
    if (global.SOA_PACKMODE !== 'expert') {
        console.info('[soa_ported] packmode_expert_vanilla.js: skipped (SOA_PACKMODE is not expert)')
        return
    }
    console.info('[soa_ported] packmode_expert_vanilla.js: registering recipes')

    const removeList = [
        'draconicevolution:draconium_core',
        'draconicevolution:wyvern_crafting_injector',

        'avaritia:diamond_lattice',
        'avaritia:crystal_matrix_ingot',
        'draconicevolution:energy_core',
        'thermal:machine_smelter',

    ]
    removeList.forEach(out => event.remove({ output: out }))

    event.shaped(
        Item.of('draconicevolution:draconium_core', 4),
        ['DGD', 'BIB', 'DGD'],
        {
            D: '#forge:ingots/draconium',
            G: '#forge:storage_blocks/gold',
            B: '#forge:storage_blocks/draconium',
            I: '#forge:storage_blocks/diamond'
        }
    ).id('soa_ported:draconium_core_expert')

    event.shaped(
        Item.of('draconicevolution:wyvern_crafting_injector', 1),
        ['CCC', 'DBD', 'SSS'],
        {
            C: 'draconicevolution:draconium_core',
            D: '#forge:storage_blocks/diamond',
            B: '#forge:storage_blocks/draconium',
            S: '#forge:storage_blocks/steel'
        }
    ).id('soa_ported:crafting_injector_expert')

    event.shaped(
        Item.of('avaritia:diamond_lattice', 1),
        ['D D', ' N ', 'D D'],
        {
            D: '#forge:storage_blocks/diamond',
            N: '#forge:nether_stars'
        }
    ).id('soa_ported:diamond_lattice_expert')

    event.shaped(
        Item.of('avaritia:crystal_matrix_ingot', 1),
        ['   ', 'LNL', 'LNL'],
        {
            L: 'avaritia:diamond_lattice',
            N: 'minecraft:nether_star'
        }
    ).id('soa_ported:crystal_matrix_ingot_expert')

    event.shaped(
        Item.of('actuallyadditions:iron_casing', 1),
        ['SQS', 'QBQ', 'SQS'],
        {
            S: '#forge:ingots/steel',
            Q: '#forge:dusts/quartz',
            B: '#forge:gems/black_quartz'
        }
    ).id('soa_ported:iron_casing_expert')

    event.shaped(
        Item.of('draconicevolution:energy_core', 1),
        ['IGI', 'CAC', 'IGI'],
        {
            I: '#forge:ingots/wyvern',
            G: '#forge:gears/wyvern',
            C: 'draconicevolution:draconic_energy_core',
            A: 'draconicevolution:awakened_core'
        }
    ).id('soa_ported:energy_core_expert')

    event.shaped(
        Item.of('thermal:machine_smelter', 1),
        ['IGI', 'IFI', 'ISI'],
        {
            I: '#forge:ingots/invar',
            G: '#forge:gears/lumium',
            F: 'thermal:machine_frame',
            S: 'thermal:signalum_gear'
        }
    ).id('soa_ported:machine_smelter_expert')

    console.info('[soa_ported] packmode_expert_vanilla.js: DONE')
})
