console.info('[soa_scripts] firron_ritual_recipe.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_scripts] firron_ritual_recipe.js: registering')

    event.recipes.summoningrituals.altar('valoria:devil_heart')
        .id('soa_ported:firron_ritual')
        .mobOutput(
            SummoningOutput.mob('valoria:firron')
                .count(1)
                .offset(0, 1, 0)
        )
        .input('1x kubejs:ravaging_catalyst')
        .input('1x valoria:ethereal_shard')
        .input('1x valoria:infernal_stone')
        .sacrificeRegion(13, 13)
        .recipeTime(400)

        .blockBelow('valoria:tombstone')

    console.info('[soa_scripts] firron_ritual_recipe.js: DONE')
})
