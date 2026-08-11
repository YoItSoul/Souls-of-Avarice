console.info('[soa_scripts] frostmaw_ritual_recipe.js loading')

const FROSTMAW_HP = global.FROSTMAW_HP ?? 25000
const FROSTMAW_MINION_COUNT = global.FROSTMAW_MINION_COUNT ?? 6

ServerEvents.recipes(event => {
    console.info('[soa_scripts] frostmaw_ritual_recipe.js: registering recipes')

    event.recipes.summoningrituals.altar('soa_additions:beast_hand')
        .id('soa_ported:frostmaw_ritual')
        .mobOutput(
            SummoningOutput.mob('mowziesmobs:frostmaw')
                .count(1)
                .offset(0, 4, 0)
                .data(`{Health:${FROSTMAW_HP}f,Attributes:[{Name:"generic.max_health",Base:${FROSTMAW_HP}d}]}`)
        )
        .mobOutput(
            SummoningOutput.mob('twilightforest:yeti')
                .count(FROSTMAW_MINION_COUNT)
                .offset(0, 4, 0)
                .spread(7, 3, 7)
        )

        .sacrificeRegion(13, 13)
        .recipeTime(400)

        .blockBelow('minecraft:packed_ice')

        .weather('rain')
    console.info('[soa_scripts] frostmaw_ritual_recipe.js: DONE')
})
