// ============================================================
// SoA Barako Ritual — port of GreedyCraft scripts/compat/summoning/barako.zs
//
// 1.12 GC summoned the Sun-Chief Barako via ZenSummoning when a player
// shift-right-clicked a Summoning Altar with the Sun Totem catalyst:
//   - 1x Barako with Solar Seed in main hand
//   - BARAKO_MINION_COUNT Barakoaya minions
//   - BARAKO_HP scaled by packmode (15000/30000/100000 for casual/normal/expert)
//   - Required clear 15x15x7 area, day-only, not-raining, overworld-only
//
// 1.20.1 uses summoningrituals (Bagels Mods). Constraints translated:
//   - Catalyst: soa_additions:sun_totem (Sun Totem from Nyx port)
//   - Altar block: minecraft:gold_block (matches Barako's solar theming)
//   - Sacrifice region: 13x13 (the mod's max footprint)
//   - blockBelow: minecraft:packed_sand or sandstone (warm climate proxy)
//   - Day-only / no-rain / overworld constraints not directly representable
//     in summoningrituals; documented for future enhancement
// ============================================================

console.info('[soa_scripts] barako_ritual_recipe.js loading')

// Sourced from _packmode.js global table — values match GC verbatim:
//   casual=30000/2  adventure=60000/4  expert=100000/8
const BARAKO_HP = global.BARAKO_HP ?? 60000
const BARAKO_MINION_COUNT = global.BARAKO_MINION_COUNT ?? 4

ServerEvents.recipes(event => {
    console.info('[soa_scripts] barako_ritual_recipe.js: registering')
    // summoningrituals 1.20.1 API: .catalyst(held), .input(sacrifices),
    // .blockBelow(foundation), .recipeTime(ticks). Altar block is the fixed
    // summoningrituals:altar — not configurable.
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
        .input('1x soa_additions:solarium_star')
        .input('4x minecraft:gold_block')
        .input('4x minecraft:fire_charge')
        .input('1x minecraft:totem_of_undying')
        .sacrificeRegion(13, 13)
        .recipeTime(400)
        .blockBelow('minecraft:smooth_sandstone')
    console.info('[soa_scripts] barako_ritual_recipe.js: DONE')
})
