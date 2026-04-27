// ============================================================
// SoA Loot Compat — port of GreedyCraft scripts/compat/blockdrops/drops.zs
//
// 1.12 GC used the Dropt mod (now defunct) to add high-pick-tier drops for
// indestructible blocks (bedrock/end_portal_frame/barrier) and to inject
// rare drops into grass/plant blocks (lucky_clover).
//
// Dropt has no 1.20.1 port. Equivalent via LootJS modifying the block
// loot tables. Mining tier gating uses tool-tag predicates: each block
// must be broken with a pickaxe of the required harvest level. SoA's
// custom mining tier ladder (per memory project_mining_tier_ladder) lives
// in SoaTiers.java — tier 11 ~ "diamond+10" requirement.
//
// 1.20.1 mining-tier predicates use forge tool tags. We approximate the
// 1.12 "pickaxe;10;-1" (tier 10) check with a netherite-or-better filter
// since SoA's custom tiers extend past netherite.
//
// Vanilla seed addition (plant_fibre from tall grass) is handled by
// soa_block_drops.js or vanilla loot table merge (already present).
// ============================================================

console.info('[soa_scripts] loot_compat.js loading')

LootJS.modifiers((event) => {
    // ---- Lucky Clover from grass/plants (1/200 chance) ----
    // GC: weight 1 vs 199 in a Dropt selector → ~0.5% drop rate per break.
    const PLANT_BLOCKS = [
        'minecraft:short_grass',           // 1.20 renamed from tall_grass
        'minecraft:tall_grass',            // double-tall variant
        'minecraft:fern',
        'minecraft:large_fern',
        'minecraft:vine',
        // Mod plants from installed mods (skipping pvj/biomesoplenty/xlfoodmod
        // — first two absent, xlfoodmod absent in SoA).
    ]
    for (const block of PLANT_BLOCKS) {
        try {
            event.addLootTableModifier('minecraft:blocks/' + block.split(':')[1])
                .randomChance(0.005)
                .addLoot(Item.of('soa_additions:lucky_clover'))
        } catch (e) { /* table or item absent — skip */ }
    }

    // ---- Bedrock drop (requires netherite-tier+ pickaxe) ----
    // GC required 'pickaxe;10;-1' (mining level 10). Closest 1.20.1
    // equivalent is forge:tool_types/pickaxe + forge:needs_netherite_tool
    // tag. SoA's SoaTiers.java may add finer-grained tier filters; for now
    // use netherite as a stand-in. Requires the mining_master Tinker trait
    // or equivalent tier item to actually break bedrock.
    try {
        // Bedrock has no vanilla loot table (always drops nothing). We
        // can't override that via standard LootJS without a custom
        // bedrock-mining mod. Document and skip — players need a 1.20.1
        // 'bedrock breaker' mod (e.g. progressive automation, BuildingGadgets2)
        // to actually mine bedrock.
        // Skipped: bedrock drop requires a pick-up-event handler not loot table.
        console.info('[loot_compat] bedrock drop: skipped (LootJS cannot override empty vanilla bedrock table)')
    } catch (e) { /* */ }

    // ---- End Portal Frame drop (requires high-tier pick) ----
    try {
        // Same constraint as bedrock — no vanilla loot table. SKIPPED.
        console.info('[loot_compat] end_portal_frame drop: skipped (no vanilla loot table)')
    } catch (e) { /* */ }
})

console.info('[soa_scripts] loot_compat.js: registered')
