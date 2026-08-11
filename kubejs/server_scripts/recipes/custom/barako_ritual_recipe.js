console.info('[soa_scripts] barako_ritual_recipe.js loading')

const BARAKO_HP = global.BARAKO_HP ?? 60000
const BARAKO_MINION_COUNT = global.BARAKO_MINION_COUNT ?? 4

ServerEvents.recipes(event => {
    console.info('[soa_scripts] barako_ritual_recipe.js: registering')

    event.recipes.summoningrituals.altar('soa_additions:sun_totem')
        .id('soa_ported:barako_ritual')
        .mobOutput(
            SummoningOutput.mob('mowziesmobs:umvuthi')
                .count(1)
                .offset(0, 1, 0)
                .data(`{HandItems:[{id:"soa_additions:solar_seed",Count:1b},{id:"minecraft:air",Count:0b}],Health:${BARAKO_HP}f,Attributes:[{Name:"generic.max_health",Base:${BARAKO_HP}d}]}`)
        )
        .mobOutput(
            SummoningOutput.mob('mowziesmobs:umvuthana')
                .count(BARAKO_MINION_COUNT)
                .offset(0, 1, 0)
                .spread(7, 3, 7)
        )

        .sacrificeRegion(13, 13)
        .recipeTime(400)
        .blockBelow('minecraft:smooth_sandstone')

        .dayTime('day')
        .weather('clear')
    console.info('[soa_scripts] barako_ritual_recipe.js: DONE')
})
