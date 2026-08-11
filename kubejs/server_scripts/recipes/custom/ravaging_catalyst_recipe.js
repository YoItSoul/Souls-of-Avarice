console.info('[soa_scripts] ravaging_catalyst_recipe.js loading')

ServerEvents.recipes(event => {
    event.shaped(
        'kubejs:ravaging_catalyst',
        [
            'ENE',
            'NHN',
            'ENE'
        ],
        {
            E: 'valoria:ethereal_shard',
            N: 'valoria:nature_gift',
            H: 'valoria:devil_heart'
        }
    ).id('soa_ported:ravaging_catalyst')

    console.info('[soa_scripts] ravaging_catalyst_recipe.js: DONE')
})
