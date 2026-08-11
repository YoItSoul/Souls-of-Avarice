console.info('[soa_ported] mekanism.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] mekanism.js: registering recipes')
    event.remove({ type: 'mekanism:metallurgic_infusing', output: 'mekanism:dust_refined_obsidian' })
    console.info('[soa_ported] mekanism.js: DONE')
})
