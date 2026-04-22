// Ported from GreedyCraft: scripts/recipes/mods/thermalexpansion.zs
// 1.12.2 CraftTweaker -> 1.20.1 KubeJS
// IDs verified via soa_exports/items.json.
//
// Thermal 1.20.1 recipe types (FIXME: schemas best-guess):
//   Transposer (fill) -> thermal:crucible / thermal:transposer_fill  (FIXME)
//   Compactor         -> thermal:compactor (mode=storage)
//   InductionSmelter  -> thermal:smelter
//   Insolator         -> thermal:insolator
//   Pulverizer        -> thermal:pulverizer
//   Infuser           -> REMOVED in Thermal 1.20 (RF Infuser dropped)
//   Coolant           -> datapack-only; no KubeJS binding
//
// Verified id rewrites (soa_exports/items.json):
//   thermalfoundation:fertilizer:0/1 -> thermal:phytogro (both tiers merged)
//   thaumadditions:adaminite_ingot / mithrillium_ingot / mithminite_ingot
//                                    -> soa_additions:<same>
//   nyx:meteor_* (dust/shard/block)  -> NOT REGISTERED in SoA as items
//                                       (only soa_additions:meteor_ingot exists)
//
// DROPPED in 1.20 (recipes cannot port):
//   thermal:pyrotheum_dust           (pyrotheum no longer an InductionSmelter input)
//   appliedenergistics2:crystal_seed (AE2 1.20 rewrote crystal growth; no seed item)
//
// Thaumcraft primordial_pearl Infuser tier-up chain NOT ported:
//   - Thaumcraft not installed in SoA
//   - Thermal 1.20 removed the RF Infuser recipe type entirely

console.info('[soa_ported] thermalexpansion.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] thermalexpansion.js: registering recipes')

    // Transposer.addFillRecipe(<thermalfoundation:fertilizer:1>, <thermalfoundation:fertilizer:0>, <liquid:resin>*200, 20);
    // 1.20 Thermal merged both fertilizer tiers to a single item (thermal:phytogro),
    // so the upgrade-by-fill recipe no longer has distinct input/output.
    // FIXME: left commented — no 1:1 port target exists.
    // event.custom({ type: 'thermal:crucible', ... })

    // Compactor.removeStorageRecipe(<thaumadditions:adaminite_ingot>);
    event.remove({ type: 'thermal:compactor', output: 'soa_additions:adaminite_ingot' })
    // Compactor.removeStorageRecipe(<thaumadditions:mithrillium_ingot>);
    event.remove({ type: 'thermal:compactor', output: 'soa_additions:mithrillium_ingot' })
    // Compactor.removeStorageRecipe(<thaumadditions:mithminite_ingot>);
    event.remove({ type: 'thermal:compactor', output: 'soa_additions:mithminite_ingot' })

    // InductionSmelter.removeRecipe(<thermalfoundation:material:768|769|802>, <thermalfoundation:material>);  // *_ore + pyrotheum_dust
    // thermal:pyrotheum_dust DROPPED in Thermal 1.20 -> these smelter recipes
    // no longer exist and cannot be removed. Preserved as documentation.
    // InductionSmelter.removeRecipe(<thermalfoundation:material:768|769|802>, <minecraft:iron_ingot>);
    // Iron/gold/copper ore + iron ingot (sand fluxed) doubling recipes likewise
    // don't exist in 1.20 Thermal's default recipe set.

    // Insolator.removeRecipe(<appliedenergistics2:crystal_seed>, <minecraft:glowstone_dust>);
    // Insolator.removeRecipe(<appliedenergistics2:crystal_seed:600>, <minecraft:glowstone_dust>);
    // Insolator.removeRecipe(<appliedenergistics2:crystal_seed:1200>, <minecraft:glowstone_dust>);
    // AE2 1.20.1 rewrote crystal growth -- crystal_seed items DROPPED; NOT portable.

    // Pulverizer.addRecipe(<nyx:meteor_dust>, <nyx:meteor_ingot>, 600);
    // Pulverizer.addRecipe(<nyx:meteor_dust>*9, <nyx:meteor_block>, 600);
    // Pulverizer.addRecipe(<nyx:meteor_dust>, <nyx:meteor_shard>, 600);
    // FIXME: soa_additions:meteor_dust / meteor_shard / meteor_block are NOT
    // registered in items.json (only meteor_ingot exists). These recipes
    // cannot produce a valid output and are left out pending block/item
    // registration in soa_additions.

    // Pulverizer.addRecipe(<additions:greedycraft-purifying_dust>*8, <botania:specialflower>.withTag({type:"puredaisy"}), 600);
    event.custom({
        type: 'thermal:pulverizer',
        ingredient: { item: 'botania:pure_daisy' }, // 1.20 botania: specialflower{puredaisy} -> pure_daisy item
        result: [{ item: 'soa_additions:purifying_dust', count: 8 }],
        energy: 600
    })

    // Infuser.addRecipe(<thaumcraft:primordial_pearl>, <thaumcraft:primordial_pearl:N>, energy);
    // Thaumcraft absent; Thermal 1.20 dropped the RF Infuser recipe type.
    // (8-step tier chain: meta 1..8 -> energy 200000..1600000, step 200000)
    // Preserved as documentation only.

    // Coolant.addCoolant(<liquid:cryonium>, 6000000, 75);
    // Thermal 1.20 coolants are datapack-only (data/thermal/coolants/*.json),
    // no KubeJS binding. Would target soa_additions:cryonium (FIXME verify
    // fluid registration).
    console.info('[soa_ported] thermalexpansion.js: DONE')
})
