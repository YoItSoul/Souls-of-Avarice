console.info('[soa_scripts] create_recipes.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_scripts] create_recipes.js: registering recipes')
    event.remove({id: 'create:crafting/materials/andesite_alloy'})
    event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
    event.remove({id: 'create:mixing/andesite_alloy'})
    event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})
    event.remove({id: 'create:mechanical_crafting/andesite_alloy'})
    event.remove({id: 'create:mechanical_crafting/andesite_alloy_from_zinc'})
    console.info('[soa_scripts] create_recipes.js: DONE')
})
