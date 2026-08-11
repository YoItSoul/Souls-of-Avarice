console.info('[soa_ported] packmode_expert_mods.js loading')

ServerEvents.recipes(event => {
    if (global.SOA_PACKMODE !== 'expert') {
        console.info('[soa_ported] packmode_expert_mods.js: skipped (SOA_PACKMODE is not expert)')
        return
    }
    console.info('[soa_ported] packmode_expert_mods.js: registering recipes')

    event.remove({ type: 'draconicevolution:fusion_crafting', output: 'draconicevolution:chaos_shard' })

    event.remove({ type: 'draconicevolution:fusion_crafting', output: 'minecraft:nether_star' })

    event.remove({ id: 'draconicevolution:components/wyvern_core' })
    event.remove({ id: 'draconicevolution:components/awakened_core' })
    event.remove({ id: 'draconicevolution:components/chaotic_core' })

    event.remove({ output: 'projecte:transmutation_tablet' })
    event.remove({ output: 'avaritia:extreme_crafting_table' })
    event.remove({ output: 'projecte:condenser_mk1' })
    event.remove({ output: 'projecte:condenser_mk2' })

    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'soa_additions:energy_matter_core' },
        ingredients: [
            { item: 'avaritia:extreme_crafting_table' },
            { item: 'projectexpansion:blue_matter' },
            { item: 'tconevo:chaotic_block' },
            { item: 'soa_additions:cosmilite_ingot' },
            { item: 'soa_additions:ancient_tome' },
            { item: 'soa_additions:pearl_of_knowledge' },
            { item: 'soa_additions:bounty_hunter_medal' },
            { item: 'soa_additions:city_defender_medal' }
        ],
        result: { item: 'projecte:transmutation_table' },
        tier: 'CHAOTIC',
        total_energy: 20000000000
    })

    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'projecte:transmutation_table' },
        ingredients: [
            { item: 'soa_additions:cosmilite_ingot' },
            { item: 'soa_additions:cosmilite_ingot' },
            { item: 'soa_additions:cosmilite_ingot' },
            { item: 'soa_additions:cosmilite_ingot' },
            { item: 'draconicevolution:chaotic_core' },
            { item: 'draconicevolution:chaotic_core' },
            { item: 'draconicevolution:chaotic_core' },
            { item: 'draconicevolution:chaotic_core' }
        ],
        result: { item: 'projecte:transmutation_tablet' },
        tier: 'CHAOTIC',
        total_energy: 1600000000
    })

    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'draconicevolution:chaotic_core' },
        ingredients: Array(8).fill({ item: 'soa_additions:creative_shard' }),
        result: { item: 'soa_additions:creative_soul' },
        tier: 'CHAOTIC',
        total_energy: 34359738368
    })

    event.remove({ type: 'draconicevolution:fusion_crafting', output: 'draconicevolution:draconic_staff' })
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'avaritia:infinity_catalyst' },
        ingredients: [
            { item: 'tconevo:draconic_metal_block' },
            { item: 'tconevo:draconic_metal_block' },
            { item: 'tconevo:draconic_metal_block' },
            { item: 'tconevo:draconic_metal_block' },
            { item: 'soa_additions:cosmilite_ingot' },
            { item: 'soa_additions:cosmilite_ingot' },
            { item: 'soa_additions:creative_soul' },
            { item: 'soa_additions:ancient_tome' }
        ],
        result: { item: 'draconicevolution:draconic_staff' },
        tier: 'CHAOTIC',
        total_energy: 68719476736
    })

    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'solarflux:sp_de.chaotic' },
        ingredients: [
            { item: 'soa_additions:cosmilite_ingot' },
            { item: 'soa_additions:cosmilite_ingot' },
            { item: 'soa_additions:cosmilite_ingot' },
            { item: 'soa_additions:cosmilite_ingot' },
            { item: 'soa_additions:chaotic_energy_core' },
            { item: 'soa_additions:chaotic_energy_core' },
            { item: 'soa_additions:chaotic_energy_core' },
            { item: 'soa_additions:chaotic_energy_core' }
        ],
        result: { item: 'solarflux:sp_custom_cosmic_solar_panel' },
        tier: 'CHAOTIC',
        total_energy: 6553600000
    })

    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'minecraft:crafting_table' },
        ingredients: [
            { item: 'avaritia:crystal_matrix_ingot' },
            { item: 'avaritia:crystal_matrix_ingot' },
            { item: 'avaritia:crystal_matrix' },
            { item: 'avaritia:crystal_matrix' },
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_core' },
            { item: 'soa_additions:ancient_tome_fragment' },
            { item: 'soa_additions:ancient_tome_fragment' }
        ],
        result: { item: 'avaritia:extreme_crafting_table' },
        tier: 'WYVERN',
        total_energy: 2400000000
    })

    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'projecte:transmutation_tablet' },
        ingredients: [
            { item: 'projectexpansion:magenta_matter' },
            { item: 'projectexpansion:magenta_matter' },
            { item: 'projectexpansion:pink_matter' },
            { item: 'projectexpansion:pink_matter' },
            { item: 'draconicevolution:chaotic_core' },
            { item: 'draconicevolution:chaotic_core' },
            { item: 'soa_additions:ancient_tome' },
            { item: 'projectexpansion:purple_matter' }
        ],
        result: { item: 'projectexpansion:arcane_tablet' },
        tier: 'CHAOTIC',
        total_energy: 68719476736
    })

    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'projecte:condenser_mk1' },
        ingredients: [
            { item: 'projecte:red_matter_block' },
            { item: 'projecte:red_matter_block' },
            { item: 'projecte:red_matter_block' },
            { item: 'projecte:red_matter_block' },
            { item: 'draconicevolution:wyvern_core' },
            { item: 'soa_additions:energy_matter_core' },
            { item: 'soa_additions:city_defender_medal' },
            { item: 'soa_additions:ancient_tome_fragment' }
        ],
        result: { item: 'projecte:condenser_mk2' },
        tier: 'WYVERN',
        total_energy: 4800000000
    })

    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'projecte:alchemical_chest' },
        ingredients: [
            { item: 'projecte:dark_matter' },
            { item: 'projecte:dark_matter' },
            { item: 'projecte:dark_matter' },
            { item: 'projecte:dark_matter' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:wyvern_core' },
            { item: 'soa_additions:energy_matter_core' }
        ],
        result: { item: 'projecte:condenser_mk1' },
        tier: 'DRACONIUM',
        total_energy: 320000000
    })

    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'minecraft:nether_star' },
        ingredients: [
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_core' },
            { tag: 'forge:ingots/draconium_awakened' },
            { tag: 'forge:ingots/draconium_awakened' },
            { item: 'soa_additions:aeonsteel_ingot' },
            { item: 'soa_additions:infernium_ingot' },
            { item: 'soa_additions:aeonsteel_ingot' },
            { item: 'soa_additions:infernium_ingot' }
        ],
        result: { item: 'draconicevolution:awakened_core' },
        tier: 'WYVERN',
        total_energy: 512000000
    })

    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'soa_additions:blueprint' },
        ingredients: Array(4).fill({ item: 'draconicevolution:draconium_ingot' }),
        result: { item: 'soa_additions:blueprint_tactic' },
        tier: 'DRACONIUM',
        total_energy: 16000000
    })

    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'draconicevolution:chaos_shard' },
        ingredients: [
            { tag: 'forge:ingots/wyvern' },
            { tag: 'forge:ingots/wyvern' },
            { tag: 'forge:ingots/draconium_awakened' },
            { tag: 'forge:ingots/draconium_awakened' },
            { item: 'avaritia:neutron_ingot' },
            { item: 'avaritia:neutron_ingot' },
            { item: 'soa_additions:chromasteel_ingot' },
            { item: 'soa_additions:chromasteel_ingot' }
        ],
        result: { item: 'draconicevolution:chaotic_core' },
        tier: 'DRACONIC',
        total_energy: 4096000000
    })

    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'minecraft:nether_star' },
        ingredients: [
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'soa_additions:cryonium_ingot' },
            { item: 'soa_additions:cryonium_ingot' }
        ],
        result: { item: 'draconicevolution:wyvern_core' },
        tier: 'DRACONIUM',
        total_energy: 6400000
    })

    event.remove({ id: 'draconicevolution:machines/reactor_core' })
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'draconicevolution:chaos_shard' },
        ingredients: [
            { item: 'soa_additions:cosmilite_ingot' },
            { item: 'soa_additions:cosmilite_ingot' },
            { tag: 'forge:ingots/draconium_awakened' },
            { tag: 'forge:ingots/draconium_awakened' },
            { item: 'soa_additions:chaotic_energy_core' },
            { item: 'soa_additions:chaotic_energy_core' },
            { item: 'soa_additions:terra_alloy_ingot' },
            { item: 'soa_additions:terra_alloy_ingot' }
        ],
        result: { item: 'draconicevolution:reactor_core' },
        tier: 'CHAOTIC',
        total_energy: 13107200000
    })

    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'draconicevolution:chaotic_core' },
        ingredients: [
            { tag: 'forge:ingots/cosmilite' },
            { tag: 'forge:ingots/cosmilite' },
            { tag: 'forge:ingots/cosmilite' },
            { tag: 'forge:ingots/cosmilite' },
            { item: 'soa_additions:bounty_hunter_medal' },
            { item: 'soa_additions:sand_of_time' },
            { item: 'soa_additions:ancient_tome_page' },
            { item: 'soa_additions:ancient_tome_page' }
        ],
        result: { item: 'soa_additions:creative_shard' },
        tier: 'CHAOTIC',
        total_energy: 8589934592
    })

    console.info('[soa_ported] packmode_expert_mods.js: DONE')
})
