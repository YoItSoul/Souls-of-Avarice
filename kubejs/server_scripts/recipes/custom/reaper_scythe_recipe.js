console.info('[soa_scripts] reaper_scythe_recipe.js loading')

ServerEvents.recipes(event => {
    event.shapeless('valoria:reaper_scythe', [
        'valoria:iron_scythe',
        'minecraft:emerald_block',
        'minecraft:jack_o_lantern'
    ]).id('soa_ported:reaper_scythe_year_round')

    console.info('[soa_scripts] reaper_scythe_recipe.js: DONE')
})
