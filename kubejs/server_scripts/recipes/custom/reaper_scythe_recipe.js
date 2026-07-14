// ============================================================
// SoA Reaper Scythe — year-round recipe
//
// Valoria ships the Reaper Scythe only as a Haunted Merchant trade (candy
// corn currency, Halloween event vendor — MerchantTrades.class), which makes
// it unobtainable most of the year and left the chapter_valoria quest
// "I'm Not Doomed Yet" (val_reaper_scythe) uncompletable outside October.
//
// Craft: regular (iron) scythe + block of emerald + jack o'lantern.
// The merchant trade still exists as the event-time shortcut.
// ============================================================

console.info('[soa_scripts] reaper_scythe_recipe.js loading')

ServerEvents.recipes(event => {
    event.shapeless('valoria:reaper_scythe', [
        'valoria:iron_scythe',
        'minecraft:emerald_block',
        'minecraft:jack_o_lantern'
    ]).id('soa_ported:reaper_scythe_year_round')

    console.info('[soa_scripts] reaper_scythe_recipe.js: DONE')
})
