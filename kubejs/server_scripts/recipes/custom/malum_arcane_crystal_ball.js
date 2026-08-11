console.info('[soa_scripts] malum_arcane_crystal_ball.js loading')

ServerEvents.recipes(event => {
    const expert = global.SOA_PACKMODE === 'expert'
    console.info('[soa_scripts] malum_arcane_crystal_ball.js: registering (packmode=' +
                 global.SOA_PACKMODE + ')')

    event.custom({
        type: 'malum:spirit_infusion',
        input: {
            count: 1,
            item: 'malum:complete_design'
        },
        extra_items: [

            { count: 4,  item: expert ? 'malum:fused_consciousness'
                                      : 'malum:soul_stained_steel_ingot' },
            { count: 4,  item: expert ? 'draconicevolution:dragon_heart'
                                      : 'minecraft:nether_star' },
            { count: 4,  item: 'malum:chunk_of_brilliance' },
            { count: 12, item: 'malum:cluster_of_brilliance' },
            { count: 6,  item: 'soa_additions:astral_metal_ingot' }
        ],
        output: {
            item: 'soa_additions:arcane_crystal_ball'
        },

        spirits: expert
            ? [
                { type: 'arcane',   count: 39 },
                { type: 'eldritch', count: 20 },
                { type: 'sacred',   count: 19 }
              ]
            : [
                { type: 'arcane',   count: 32 },
                { type: 'eldritch', count: 16 },
                { type: 'sacred',   count: 16 }
              ]
    }).id('soa_ported:malum_arcane_crystal_ball')

    console.info('[soa_scripts] malum_arcane_crystal_ball.js: DONE')
})
