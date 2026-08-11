console.info('[soa_scripts] malum_astral_metal.js loading')

ServerEvents.recipes(event => {
    const expert = global.SOA_PACKMODE === 'expert'
    console.info('[soa_scripts] malum_astral_metal.js: registering (packmode=' +
                 global.SOA_PACKMODE + ')')

    event.custom({
        type: 'malum:spirit_infusion',
        input: {
            count: 1,
            item: 'soa_additions:fusion_matrix_ingot'
        },
        extra_items: [
            { count: 4, item: 'soa_additions:starmetal_ingot' },
            { count: 4, item: 'malum:chunk_of_brilliance' },
            { count: 4, item: 'malum:cluster_of_brilliance' },
            { count: 4, item: 'nyx:meteor_ingot' },
            { count: 4, item: 'nyx:fallen_star' }
        ],
        output: {

            count: expert ? 2 : 4,
            item: 'soa_additions:astral_metal_ingot'
        },
        spirits: expert
            ? [
                { type: 'earthen', count: 40 },
                { type: 'sacred',  count: 24 },
                { type: 'arcane',  count: 21 }
              ]
            : [
                { type: 'earthen', count: 20 },
                { type: 'sacred',  count: 12 },
                { type: 'arcane',  count: 11 }
              ]
    }).id('soa_ported:malum_astral_metal')

    console.info('[soa_scripts] malum_astral_metal.js: DONE')
})
