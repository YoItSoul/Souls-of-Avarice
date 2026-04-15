ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('minecraft:emerald_block')
        .id('kubejs:frostmaw_ritual')
        .mobOutput(
            SummoningOutput.mob('mowziesmobs:frostmaw')
                .count(1)
                .offset(0, 1, 0)
                .data({ 
                    Health: 100, 
                    Attributes: [{ 
                        Name: 'generic.max_health', 
                        Base: 100 
                    }] 
                })
        )
        .input('4x minecraft:ice')
        .input('4x minecraft:packed_ice')
        .input('2x minecraft:blue_ice')
        .input('2x minecraft:diamond')
        .input('8x minecraft:snowball')
        .sacrificeRegion(13, 13)
        .recipeTime(300)
        .blockBelow('minecraft:packed_ice')
})