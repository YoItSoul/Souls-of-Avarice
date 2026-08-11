console.info('[soa_scripts] the_forbidden_ritual_recipe.js loading')

const FORBIDDEN_HP = 1919810
const MINION_HP = 32767

ServerEvents.recipes(event => {
    console.info('[soa_scripts] the_forbidden_ritual_recipe.js: registering')

    event.recipes.summoningrituals.altar('soa_additions:forbidden_bible')
        .id('soa_ported:the_forbidden_ritual')
        .mobOutput(
            SummoningOutput.mob('minecraft:wither_skeleton')
                .count(1)
                .offset(0, 1, 0)
                .data(`{HandItems:[{id:"minecraft:netherite_sword",Count:1b,tag:{Damage:0,Enchantments:[{id:"minecraft:sharpness",lvl:5s},{id:"minecraft:fire_aspect",lvl:2s}]}},{id:"soa_additions:huaji",Count:64b}],HandDropChances:[0.0f,1.0f],CustomName:'{"text":"The Forbidden","color":"dark_purple","bold":true}',CustomNameVisible:1b,Health:${FORBIDDEN_HP}f,Attributes:[{Name:"generic.max_health",Base:${FORBIDDEN_HP}d},{Name:"generic.attack_damage",Base:32.0d},{Name:"generic.armor",Base:28.0d},{Name:"generic.knockback_resistance",Base:1.0d},{Name:"generic.movement_speed",Base:0.4d}]}`)
        )
        .mobOutput(
            SummoningOutput.mob('minecraft:wither_skeleton')
                .count(12)
                .offset(0, 1, 0)
                .spread(7, 3, 7)
                .data(`{CustomName:'{"text":"Forbidden Acolyte","color":"dark_purple"}',IsBaby:1b,Health:${MINION_HP}f,Attributes:[{Name:"generic.max_health",Base:${MINION_HP}d}]}`)
        )

        .sacrificeRegion(13, 13)
        .recipeTime(600)
        .blockBelow('minecraft:soul_sand')
    console.info('[soa_scripts] the_forbidden_ritual_recipe.js: DONE')
})
