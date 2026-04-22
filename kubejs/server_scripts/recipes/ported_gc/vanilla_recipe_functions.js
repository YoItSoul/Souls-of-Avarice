// Ported from GreedyCraft: scripts/recipes/vanilla/crafting_table/recipe_functions.zs
// 1.12.2 CraftTweaker -> 1.20.1 KubeJS
//
// This file holds CT `recipes.addShaped(..., function(out, ins, cInfo) {...})`
// recipes — i.e., NBT-transforming crafting callbacks. 1.20 KubeJS analog is
// `.modifyResult(grid => ...)`, but EVERY recipe in this file depends on
// absent mods:
//
//   - nametag_to_human_spawn_egg, head_to_human_spawn_egg, nametag_to_head:
//       require <headcrumbs:human> entity ID. Headcrumbs NOT installed.
//   - dank_null_1..5: danknull mod NOT installed.
//   - exp_transport_tool / exp_transport_armor:
//       manipulate tconstruct 1.12 `Modifiers`/`toolleveling`/`leveling_armor`
//       NBT — TC3 1.20 uses a completely different tool data schema, and
//       `additions:greedycraft-experience_transporter` has no direct analog
//       in soa_additions (no exp_transporter item registered).
//   - etablet_dupe: contenttweaker is 1.12-only; <contenttweaker:tablet_of_enlightenment>
//       has no 1.20 port.
//
// Commented-out recipes in GC source (simplybackpacks tier chain) are also
// not ported — simplybackpacks 1.20 dropped the tier-chain crafting model.

console.info('[soa_ported] vanilla_recipe_functions.js loading (no-op; absent-mod deps)')

ServerEvents.recipes(event => {
    console.info('[soa_ported] vanilla_recipe_functions.js: DONE (no recipes)')
    // No-op: all recipes in recipe_functions.zs depend on absent mods.
})
