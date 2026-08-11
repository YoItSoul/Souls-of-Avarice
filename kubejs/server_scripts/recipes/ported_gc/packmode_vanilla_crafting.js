console.info('[soa_ported] packmode_vanilla_crafting.js loading')

ServerEvents.recipes(event => {

    let _MODE = 'adventure'
    try { _MODE = String(global.SOA_PACKMODE || 'adventure') } catch (e) {  }
    console.info('[soa_ported] packmode_vanilla_crafting.js: registering for mode=' + _MODE)

    try {
        if (_MODE === 'casual') {
            event.shaped('soa_additions:twilight_gem', ['SFS', 'FDF', 'SFS'], {
                S: '#minecraft:saplings', F: 'botania:fertilizer', D: 'botania:mana_diamond',
            }).id('soa_ported:twilight_gem_enter_casual')
        } else if (_MODE === 'adventure') {
            event.shaped('soa_additions:twilight_gem', ['SFS', 'MDM', 'SFS'], {
                S: '#minecraft:saplings', F: 'botania:fertilizer', M: 'thaumon:mutagen', D: 'botania:mana_diamond',
            }).id('soa_ported:twilight_gem_enter_adventure')
        } else if (_MODE === 'expert') {
            event.shaped('soa_additions:twilight_gem', ['UAU', 'MDM', 'UAU'], {
                U: 'thermal:diamond_dust', A: 'soa_additions:aquamarine', M: 'thaumon:mutagen', D: 'botania:mana_diamond',
            }).id('soa_ported:twilight_gem_enter_expert')
        }
    } catch (e) { console.warn('[packmode_vanilla] twilight_gem enter: ' + e) }

    if (_MODE === 'adventure' || _MODE === 'expert') {

        try {
            event.remove({ output: 'minecraft:enchanting_table' })
            event.shaped('minecraft:enchanting_table', [
                ' B ',
                'DWD',
                'EEE'
            ], {
                B: 'minecraft:book',
                D: 'minecraft:diamond_block',
                W: (_MODE === 'expert' ? 'soa_additions:starmetal_ingot' : 'minecraft:black_wool'),
                E: 'soa_additions:compressed_experience_block',
            }).id('soa_ported:packmode_enchanting_table_' + _MODE)
        } catch (e) { console.warn('[packmode_vanilla] enchanting_table: ' + e) }

        try {
            event.remove({ output: 'soa_additions:twilight_shield' })
            if (_MODE === 'expert') {
                event.shaped('soa_additions:twilight_shield', [
                    'SHI',
                    'FLN',
                    'MCA'
                ], {
                    S: 'twilightforest:steeleaf_ingot',
                    H: 'twilightforest:hydra_chop',
                    I: 'twilightforest:ironwood_ingot',
                    F: 'twilightforest:fiery_ingot',
                    L: 'twilightforest:lamp_of_cinders',
                    N: 'twilightforest:naga_scale',
                    M: 'twilightforest:meef_stroganoff',
                    C: 'twilightforest:carminite',
                    A: 'twilightforest:alpha_yeti_fur',
                }).id('soa_ported:packmode_twilight_shield_expert')
            } else {
                event.shaped('soa_additions:twilight_shield', [
                    'IKI',
                    'FAF',
                    ' C '
                ], {
                    I: 'twilightforest:ironwood_ingot',
                    K: 'twilightforest:knightmetal_ingot',
                    F: 'twilightforest:fiery_ingot',
                    A: 'twilightforest:alpha_yeti_fur',
                    C: 'twilightforest:carminite',
                }).id('soa_ported:packmode_twilight_shield_adventure')
            }
        } catch (e) { console.warn('[packmode_vanilla] twilight_shield: ' + e) }
    }

    if (_MODE === 'adventure') {

        try {
            event.remove({ output: 'soa_additions:blueprint' })
            event.shaped('soa_additions:blueprint', [
                'DDD', 'DPD', 'DDD'
            ], {
                D: '#forge:dyes/light_blue',
                P: 'minecraft:paper',
            }).id('soa_ported:packmode_blueprint_adventure')
        } catch (e) { console.warn('[packmode_vanilla] blueprint(adv): ' + e) }

        try {
            event.remove({ output: 'soa_additions:ender_charm' })
            event.shaped('soa_additions:ender_charm', [
                'EIE', 'GNG', 'EIE'
            ], {
                E: 'minecraft:ender_eye',
                I: '#forge:ingots/durasteel',
                G: '#forge:ingots/dreadium',
                N: 'minecraft:nether_star',
            }).id('soa_ported:packmode_ender_charm_adventure')
        } catch (e) { console.warn('[packmode_vanilla] ender_charm(adv): ' + e) }

        try {
            event.remove({ output: 'soa_additions:blueprint_shuriken' })
            event.shapeless('soa_additions:blueprint_shuriken', [
                'soa_additions:blueprint', '#forge:alloys/elite',
            ]).id('soa_ported:packmode_blueprint_shuriken_adventure')
        } catch (e) { console.warn('[packmode_vanilla] blueprint_shuriken(adv): ' + e) }
    }

    if (_MODE === 'expert') {

        try {
            event.remove({ output: 'soa_additions:blueprint' })
            event.shaped('soa_additions:blueprint', [
                'LLL', 'LPL', 'LLL'
            ], {
                L: '#forge:dusts/lapis',
                P: 'minecraft:paper',
            }).id('soa_ported:packmode_blueprint_expert')
        } catch (e) { console.warn('[packmode_vanilla] blueprint(exp): ' + e) }

        try {
            event.remove({ output: 'soa_additions:blueprint_shuriken' })
            event.shapeless('soa_additions:blueprint_shuriken', [
                'soa_additions:blueprint', '#forge:alloys/ultimate',
            ]).id('soa_ported:packmode_blueprint_shuriken_expert')
        } catch (e) { console.warn('[packmode_vanilla] blueprint_shuriken(exp): ' + e) }

        try {
            event.remove({ output: 'soa_additions:ender_charm' })
            event.shaped('soa_additions:ender_charm', [
                'UGU',
                'NKN',
                'TBT'
            ], {
                U: '#forge:dusts/enderium',
                G: 'botania:gaia_ingot',
                N: 'minecraft:nether_star',
                K: 'valoria:crystal_shard',
                T: 'minecraft:netherite_ingot',
                B: 'soa_additions:durasteel_block',
            }).id('soa_ported:packmode_ender_charm_expert')
        } catch (e) { console.warn('[packmode_vanilla] ender_charm(exp): ' + e) }

    }

    console.info('[soa_ported] packmode_vanilla_crafting.js: registration complete')
})
