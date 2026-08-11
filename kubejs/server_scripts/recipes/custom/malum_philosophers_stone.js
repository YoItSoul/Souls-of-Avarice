console.info('[soa_scripts] malum_philosophers_stone.js loading')

ServerEvents.recipes(event => {
    const expert = global.SOA_PACKMODE === 'expert'
    console.info('[soa_scripts] malum_philosophers_stone.js: registering (packmode=' +
                 global.SOA_PACKMODE + ')')

    event.custom({
        type: 'malum:spirit_infusion',
        input: {
            count: 1,
            item: 'botania:mana_pearl'
        },
        extra_items: [
            { count: 4, item: 'malum:chunk_of_brilliance' },

            { count: 4, item: expert ? 'soa_additions:astral_metal_ingot'
                                     : 'soa_additions:starmetal_ingot' },
            { count: 8, item: 'minecraft:blaze_powder' }
        ],
        output: {
            item: 'projecte:philosophers_stone'
        },

        spirits: expert
            ? [
                { type: 'arcane',  count: 24 },
                { type: 'earthen', count: 12 },
                { type: 'sacred',  count: 8 }
              ]
            : [
                { type: 'arcane',  count: 16 },
                { type: 'earthen', count: 8 },
                { type: 'sacred',  count: 4 }
              ]
    }).id('soa_ported:malum_philosophers_stone')

    console.info('[soa_scripts] malum_philosophers_stone.js: DONE')
})
