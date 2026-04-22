// Ported from GreedyCraft: scripts/recipes/vanilla/brewing.zs
// 1.12.2 CraftTweaker -> 1.20.1 KubeJS
//
// GC brewing.zs registers ~40 potioncore brews via `brewing.addBrew(input,
// reagent, output)`. The entire file is NOT portable to SoA 1.20:
//
//   - potioncore mod is NOT installed in SoA 1.20 (checked mods/ and
//     items.json — only potionofbees and potionsmaster are present, neither
//     provides the `potioncore:*` potion IDs).
//   - 1.20 KubeJS brewing uses event.recipes.minecraft.brewing(in, reagent, out)
//     with namespaced potion IDs, but with no potioncore potions registered
//     there's nothing to brew.
//
// If a potion-mod analog (e.g., potions_plus, a potioncore port) gets added
// later, the GC brew table to port is:
//
//   awkward + dye:0            -> blindness   (+ glowstone/redstone upgrades)
//   awkward + shulker_shell    -> levitation
//   awkward + golden_apple     -> health_boost
//   awkward + heartdust        -> love        (scalinghealth absent)
//   awkward + ancient_tome_page-> repair
//   awkward + glowing_chorus   -> flight      (cyclicmagic absent)
//   awkward + clock            -> extension
//   awkward + ingotIron        -> iron_skin
//   awkward + pure_daisy       -> purity
//   awkward + piston           -> reach
//   awkward + gemDiamond       -> diamond_skin
//   awkward + popped_chorus    -> teleport
//   awkward + arcane_focus     -> magic_focus (tconevo absent; use soa_additions if exposed)
//   awkward + dirt             -> step_up
//   awkward + raw_salmon       -> drown
//   awkward + string           -> climb
//   awkward + glass            -> vulnerable
//   awkward + tnt              -> explode
//   awkward + ingotLead        -> solid_core
//   awkward + fire_charge      -> fire
//   awkward + ingotDraconium   -> lightning
//   awkward + blockLead        -> weight
//   awkward + fireworks        -> launch
//   awkward + ancient_tome     -> revival
//   awkward + ingotManyullyn   -> magic_shield
//   awkward + leather          -> archery
//   awkward + ender_tnt_1      -> burst       (cyclicmagic absent)
//
// (File intentionally registers NO recipes.)

console.info('[soa_ported] vanilla_brewing.js loading (no-op; potion mod absent)')

ServerEvents.recipes(event => {
    console.info('[soa_ported] vanilla_brewing.js: DONE (no recipes)')
    // No-op: target potion mod not present.
})
