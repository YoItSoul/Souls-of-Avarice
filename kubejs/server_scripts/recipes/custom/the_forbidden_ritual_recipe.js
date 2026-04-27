// ============================================================
// SoA The Forbidden Ritual — port of GC scripts/compat/summoning/the_forbidden.zs
//
// 1.12 GC summoned a custom "TCreopargh" boss (a Headcrumbs human player-
// shaped entity) with maxHP 1,919,810 and a Huaji-stack offhand. Required
// the Forbidden Bible catalyst, Nether dimension, clear 15x15x7 area.
// Plus 12 baby-skin Headcrumbs minions with maxHP 32,767.
//
// 1.20.1: Headcrumbs is absent. We substitute with a Wither-skeleton-king
// boss + 12 wither skeleton minions, scaled to comparable HP. Players
// recognize this as "the dread fight" rather than a cosmetic name swap.
//
// Catalyst Forbidden Bible (soa_additions:forbidden_bible) preserved.
// Sacrifice region 13x13 (mod cap). Nether-dimension restriction NOT
// representable in summoningrituals; recommend gating via ItemStages
// 'nether' on the bible (already in soa_item_stages.zs).
// ============================================================

console.info('[soa_scripts] the_forbidden_ritual_recipe.js loading')

// Scale HP per packmode (GC was always 1,919,810; we scale down for casual,
// GC value is a constant 1,919,810 across all packmodes (the literal value
// in the_forbidden.zs HandItems data tag). Preserved verbatim per
// "true port" directive — the boss is supposed to require endgame tools.
const FORBIDDEN_HP = 1919810
const MINION_HP = 32767  // matches GC

ServerEvents.recipes(event => {
    console.info('[soa_scripts] the_forbidden_ritual_recipe.js: registering')
    // summoningrituals 1.20.1 API: .catalyst(held), .input(sacrifices),
    // .blockBelow(foundation), .recipeTime(ticks). Altar block is fixed
    // (summoningrituals:altar) — not configurable.
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
        .input('1x minecraft:nether_star')
        .input('1x minecraft:wither_skeleton_skull')
        .input('1x minecraft:wither_skeleton_skull')
        .input('1x minecraft:wither_skeleton_skull')
        .input('4x minecraft:soul_sand')
        .input('1x soa_additions:dragon_soul')
        .sacrificeRegion(13, 13)
        .recipeTime(600)
        .blockBelow('minecraft:soul_sand')
    console.info('[soa_scripts] the_forbidden_ritual_recipe.js: DONE')
})
