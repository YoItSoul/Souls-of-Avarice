console.info('[soa_ported] mysticalagriculture.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] mysticalagriculture.js: registering recipes')

    event.shaped(
        Item.of('soa_additions:titanium_nugget', 1),
        ['EEE', 'E E', 'EEE'],
        { E: 'mysticalagriculture:titanium_essence' }
    ).id('soa_ported:titanium_seeds_essence')

    event.shaped(
        Item.of('soa_additions:chromium_ingot', 1),
        ['EEE', 'E E', 'EEE'],
        { E: 'mysticalagriculture:chrome_essence' }
    ).id('soa_ported:chromium_seeds_essence')

    console.info('[soa_ported] mysticalagriculture.js: DONE')
})
