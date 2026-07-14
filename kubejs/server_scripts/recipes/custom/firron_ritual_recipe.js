// ============================================================
// SoA Firron Summoning Ritual
//
// Firron is a Valoria boss (HP 1500, attack 15, armor 20, 4 attack patterns:
// PiercingDash / Rush / Sweep / TripleSweep) that ships in Valoria 1.0.2.10
// but is registered with setNoSummon — meaning the world spawn engine ignores
// it. The mod author shipped Firron as WIP boss content.
//
// Recipe mirrors GC's "Idol of Sorrow" pattern: a one-time craftable consumable
// summon token (the Ravaging Catalyst — see ravaging_catalyst_item.js) that
// players craft from prior-boss drops, then sacrifice on the altar to call
// Firron. This avoids the circular trap where the boss's own drop would be
// required to summon it.
//
// GC Idol of Sorrow → SoA Firron summon mapping (post-catalyst design):
//   Idol of Sorrow item   (DL) -> kubejs:ravaging_catalyst    (consumable token, replaces 2× ravaging_ingot)
//   Eternal Life Essence  (DL) -> valoria:ethereal_shard      (Necromancer treasure bag drop)
//   Scarlite Block        (DL) -> valoria:devil_heart         (Devil rare 5% drop, used as altar catalyst)
//   Umbrium Ingot         (DL) -> valoria:infernal_stone      (Devil 50% drop)
//
// The Ravaging Catalyst itself is crafted from 4× ethereal_shard + 1× infernal_stone
// (1:1 with GC's defiledlands:ravaging_ingot crafting recipe shape).
//
// Catalyst (held on right-click): valoria:devil_heart (rare drop = "dark heart"
// trigger, mirroring GC's Black Heart-tier centerpiece role).
//
// Difficulty placement: between Dryador (1000 HP) and Wicked Crystal (2000 HP).
// Progression placement (user decision 2026-07-14): POST-DRAGON, like every
// summoning-altar boss — the altar is ItemStaged 'fusion_matrix' and the
// ravaging_catalyst 'hardmode', so Valoria dimension entry follows the dragon.
//
// Drops: see kubejs/data/valoria/loot_tables/entities/firron.json
// ============================================================

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
        // Base block must be obtainable BEFORE the dimension this ritual
        // unlocks. valoria:tombstone is the overworld necromancer-crypt stone
        // (mined where the Necromancer chain already sends you). The previous
        // 'valoria:ambane_stone_brick' was doubly broken: not a real block id
        // (only ambane_stone_bricks exists), and ambane generates only inside
        // The Valoria — a circular lock on the portal boss.
        .blockBelow('valoria:tombstone')

    console.info('[soa_scripts] firron_ritual_recipe.js: DONE')
})
