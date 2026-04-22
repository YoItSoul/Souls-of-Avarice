// Ported from GreedyCraft: scripts/recipes/mods/mekanism.zs
// 1.12.2 CraftTweaker -> 1.20.1 KubeJS
// IDs verified via soa_exports/items.json.
//
// Original:
//   infuser.removeRecipe(<mekanism:otherdust:1>);
// 1.12  mekanism:otherdust:1 = refined obsidian dust
// 1.20  -> mekanism:dust_refined_obsidian (confirmed in items.json:145924)

console.info('[soa_ported] mekanism.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] mekanism.js: registering recipes')
    event.remove({ type: 'mekanism:metallurgic_infusing', output: 'mekanism:dust_refined_obsidian' })
    console.info('[soa_ported] mekanism.js: DONE')
})
