console.info('[soa_ported] packmode_vanilla.js loading')

ServerEvents.recipes(event => {
    const expert = global.SOA_PACKMODE === 'expert'
    console.info('[soa_ported] packmode_vanilla.js: registering recipes (packmode=' + global.SOA_PACKMODE + ')')

    event.shaped(
        Item.of('bloodmagic:altar', 1),
        ['P P', 'BSB', 'ITI'],
        {
            P: 'soa_additions:bloodwood_log',
            B: expert ? '#forge:storage_blocks/manyullyn' : 'soa_additions:bloodwood_log',
            S: 'soa_additions:bloody_sacrifice',
            I: '#forge:ingots/stainless_steel',
            T: 'bloodmagic:basemonstersoul'
        }
    ).id('soa_ported:blood_altar')

    console.info('[soa_ported] packmode_vanilla.js: DONE')
})
