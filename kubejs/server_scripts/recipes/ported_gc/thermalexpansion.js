console.info('[soa_ported] thermalexpansion.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] thermalexpansion.js: registering recipes')

    event.remove({ type: 'thermal:compactor', output: 'soa_additions:adaminite_ingot' })

    event.remove({ type: 'thermal:compactor', output: 'soa_additions:mithrillium_ingot' })

    event.remove({ type: 'thermal:compactor', output: 'soa_additions:mithminite_ingot' })

    event.custom({
        type: 'thermal:pulverizer',
        ingredient: { item: 'botania:pure_daisy' },
        result: [{ item: 'soa_additions:purifying_dust', count: 8 }],
        energy: 600
    })

    console.info('[soa_ported] thermalexpansion.js: DONE')
})
