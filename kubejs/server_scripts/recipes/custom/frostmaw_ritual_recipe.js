// ============================================================
// SoA Frostmaw Ritual — port of GC scripts/compat/summoning/frostmaw.zs
//
// GC summoned Frostmaw via ZenSummoning when a player shift-right-clicked
// a Summoning Altar with the Beast Hand catalyst:
//   - 1x Frostmaw with packmode-scaled HP
//   - FROSTMAW_MINION_COUNT twilightforest:yeti minions
//   - Required snowy biome OR winter season + raining + overworld + clear 15x15x7
//
// Sourced from _packmode.js global table:
//   casual=12500/3 minions   adventure=25000/6   expert=45000/10
// ============================================================

console.info('[soa_scripts] frostmaw_ritual_recipe.js loading')

const FROSTMAW_HP = global.FROSTMAW_HP ?? 25000
const FROSTMAW_MINION_COUNT = global.FROSTMAW_MINION_COUNT ?? 6

ServerEvents.recipes(event => {
    console.info('[soa_scripts] frostmaw_ritual_recipe.js: registering recipes')
    // summoningrituals 1.20.1 (Bagel's Mods) API:
    //   .catalyst(item) — held item that triggers the ritual on right-click
    //   .input(...)     — sacrifice items dropped on the altar before ignition
    //   .blockBelow(b)  — required foundation block under the summoningrituals:altar
    //   .recipeTime(t)  — duration in ticks
    //   .mobOutput / .itemOutput take SummoningOutput builders
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
        .input('4x minecraft:ice')
        .input('4x minecraft:packed_ice')
        .input('2x minecraft:blue_ice')
        .input('2x minecraft:diamond')
        .input('8x minecraft:snowball')
        .sacrificeRegion(13, 13)
        .recipeTime(400)
        .blockBelow('minecraft:packed_ice')
    console.info('[soa_scripts] frostmaw_ritual_recipe.js: DONE')
})
