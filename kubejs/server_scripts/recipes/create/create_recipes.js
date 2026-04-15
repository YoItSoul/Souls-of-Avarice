ServerEvents.recipes(event => {
    event.remove({id: 'create:crafting/materials/andesite_alloy'})
    event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
    event.remove({id: 'create:mixing/andesite_alloy'})
    event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})
    event.remove({id: 'create:mechanical_crafting/andesite_alloy'})
    event.remove({id: 'create:mechanical_crafting/andesite_alloy_from_zinc'})
})