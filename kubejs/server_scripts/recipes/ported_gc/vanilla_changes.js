console.info('[soa_ported] vanilla_changes.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] vanilla_changes.js: registering recipes')

    event.remove({ output: 'draconicevolution:crafting_core' })
    event.shaped(
        'draconicevolution:crafting_core',
        ['FDF', 'DCD', 'FDF'],
        {
            F: '#forge:ingots/fusion_matrix',
            D: '#forge:ingots/durasteel',
            C: 'draconicevolution:draconium_core'
        }
    ).id('soa_ported:fusion_crafting_core_gc')

    event.remove({ output: 'mekanism:laser_amplifier' })
    event.shaped(
        'mekanism:laser_amplifier',
        ['ODO', 'SES', 'OCO'],
        {
            O: '#forge:ingots/osmium',
            D: '#forge:gems/diamond',
            S: 'soa_additions:creative_shard',
            E: 'mekanism:basic_energy_cube',
            C: 'draconicevolution:chaotic_core'
        }
    ).id('soa_ported:laser_amplifier_gc')

    event.remove({ output: 'mysticalagriculture:master_infusion_crystal' })
    event.shaped(
        'mysticalagriculture:master_infusion_crystal',
        ['DBD', 'BNB', 'DBD'],
        {
            D: '#forge:ingots/durasteel',
            B: 'mysticalagriculture:supremium_block',
            N: 'minecraft:nether_star'
        }
    ).id('soa_ported:master_infusion_crystal_gc')

    const horseArmor = (out, mat, name) => {
        event.remove({ output: out })
        event.shaped(out, ['MMM', 'LWL', 'MMM'], {
            M: mat, L: 'minecraft:leather', W: '#minecraft:wool'
        }).id('soa_ported:' + name)
    }
    horseArmor('minecraft:diamond_horse_armor', '#forge:gems/diamond', 'diamond_horse_armor')
    horseArmor('minecraft:golden_horse_armor',  '#forge:ingots/gold',  'gold_horse_armor')
    horseArmor('minecraft:iron_horse_armor',    '#forge:ingots/iron',  'iron_horse_armor')

    console.info('[soa_ported] vanilla_changes.js: DONE')
})
