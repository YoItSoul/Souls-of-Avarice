// ============================================================
// SoA Ravaging Catalyst Crafting Recipe
//
// Difficulty parity with GC's Idol of Sorrow: requires defeating the prior
// boss chain (Necromancer + Dryador) AND a rare Devil drop before crafting.
// This matches GC's "kill The Destroyer first, farm Scarlite Blocks, mine
// Defiled Lands materials" effective barrier.
//
// Shape preserves GC's 4-corner-essence + center-metal symmetry (mirrors
// defiledlands:ravaging_ingot recipe layout), but with cardinal slots also
// occupied to add the Dryador-gate ingredient.
//
//   [ Ethereal Shard ] [ Nature Gift   ] [ Ethereal Shard ]
//   [ Nature Gift   ] [ Devil Heart   ] [ Nature Gift   ]
//   [ Ethereal Shard ] [ Nature Gift   ] [ Ethereal Shard ]
//                                          → 1× ravaging_catalyst
//
// Multi-boss gate:
//   • Ethereal Shard ×4   — Necromancer (treasure_bag drops 2-5 per kill,
//                            so ~1 kill suffices)
//   • Nature Gift ×4      — Dryador (treasure_bag drops 1-12 per kill,
//                            so ~1 kill suffices). Forces clearing the 2nd boss.
//   • Devil Heart ×1      — Devil rare 5% drop (player-killed only, looting
//                            multiplier 0.01) — requires sustained Devil hunting
//
// soa_additions:ravaging_ingot stays decoupled — purely a Firron drop now,
// no longer in the circular "boss-drop summons boss" trap.
//
// Acquisition flow (mirrors GC Destroyer→Mourner pattern):
//   1. Kill Necromancer (lunatic_cultist 1st boss) → ethereal_shard
//   2. Kill Dryador (2nd boss) → nature_gift
//   3. Hunt Devils → devil_heart (rare drop)
//   4. Craft Ravaging Catalyst
//   5. Use catalyst on Summoning Altar → spawns Firron
//   6. Kill Firron → 1-3× ravaging_ingot per kill (post-unlock farming path)
// ============================================================

console.info('[soa_scripts] ravaging_catalyst_recipe.js loading')

ServerEvents.recipes(event => {
    event.shaped(
        'kubejs:ravaging_catalyst',
        [
            'ENE',
            'NHN',
            'ENE'
        ],
        {
            E: 'valoria:ethereal_shard',     // Necromancer
            N: 'valoria:nature_gift',        // Dryador (multi-drop)
            H: 'valoria:devil_heart'         // Devil rare 5% PK drop
        }
    ).id('soa_ported:ravaging_catalyst')

    console.info('[soa_scripts] ravaging_catalyst_recipe.js: DONE')
})
