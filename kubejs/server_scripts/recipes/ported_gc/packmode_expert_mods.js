// Ported from GreedyCraft: scripts/recipes/packmode/expert/mods/{draconicevolution,tconstruct,astralsorcery,thaumcraft}.zs
// 1.12.2 CraftTweaker -> 1.20.1 KubeJS. Gated by global.SOA_PACKMODE
// (see _packmode.js); normal-mode DE counterpart is packmode_normal_de.js.
// IDs verified via soa_exports/items.json.
//
// DUPLICATION CHECK (user-flagged concern):
//   SoA's packmode-style fusion content lives in
//   src/main/resources/data/soa_additions/recipes/components/
//     - wyvern_ingot_fusion.json      (-> soa_additions:wyvern_ingot)
//     - chaotic_ingot_fusion.json     (-> soa_additions:chaotic_ingot)
//     - primal_metal_ingot_fusion.json (-> soa_additions:primal_metal_ingot)
//   NONE of those outputs overlap with GC's expert DE fusion recipes.
//
// draconicevolution:fusion_crafting schema (confirmed in DE decompiled JSONs):
//   { type, catalyst, ingredients[], result, tier, total_energy }
//   tier: BASIC | WYVERN | DRACONIUM | DRACONIC | CHAOTIC
//   GC tier integer mapping:  0=BASIC, 1=WYVERN, 2=DRACONIC, 3=CHAOTIC
//
// Absent in SoA 1.20.1 (recipes NOT portable):
//   projectex:*, solarflux:*, thaumcraft:*, astralsorcery:*, abyssalcraft:*,
//   redstonearsenal:*, redstonerepository:*, biomesoplenty:terrestrial_artifact,
//   draconicevolution:draconic_staff_of_power, appliedenergistics2:material:47
//
// GC overrode some DE stock fusion recipes (wyvern_core / awakened_core /
// chaotic_core) with harder expert formulas. Those DE stock recipes are
// REMOVED first so the expert variant is canonical.

console.info('[soa_ported] packmode_expert_mods.js loading')

ServerEvents.recipes(event => {
    if (global.SOA_PACKMODE !== 'expert') {
        console.info('[soa_ported] packmode_expert_mods.js: skipped (SOA_PACKMODE is not expert)')
        return
    }
    console.info('[soa_ported] packmode_expert_mods.js: registering recipes')

    // =================================================================
    // ==== DE Fusion (expert) =========================================
    // =================================================================

    // FusionCrafting.remove(<draconicevolution:chaos_shard>);
    event.remove({ type: 'draconicevolution:fusion_crafting', output: 'draconicevolution:chaos_shard' })
    // FusionCrafting.remove(<minecraft:nether_star>);
    event.remove({ type: 'draconicevolution:fusion_crafting', output: 'minecraft:nether_star' })
    // FusionCrafting.remove(<draconicevolution:draconic_pick>);
    // DE 1.20 doesn't ship draconic_pick as a fusion output -> no-op
    // event.remove({ type: 'draconicevolution:fusion_crafting', output: 'draconicevolution:draconic_pickaxe' })

    // Remove DE stock recipes that GC-expert overrides:
    event.remove({ type: 'draconicevolution:fusion_crafting', output: 'draconicevolution:wyvern_core' })
    event.remove({ type: 'draconicevolution:fusion_crafting', output: 'draconicevolution:awakened_core' })
    event.remove({ type: 'draconicevolution:fusion_crafting', output: 'draconicevolution:chaotic_core' })

    // --- projecte:transmutation_table (catalyst: energy_matter_core, tier 3) ---
    // Ingredients: extreme_crafting_table, projectex:matter:4, tconevo:metal_block:2,
    //              cosmilite_ingot, ancient_tome, pearl_of_knowledge, bounty_hunter_medal, city_defender_medal
    // projectex ABSENT + metal_block:2 not a registered SoA block -> FIXME skip.

    // --- projecte:transmutation_tablet (catalyst: transmutation_table, tier 3) ---
    // 4x cosmilite_ingot + 4x chaotic_core
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'projecte:transmutation_table' },
        ingredients: [
            { item: 'soa_additions:cosmilite_ingot' },
            { item: 'soa_additions:cosmilite_ingot' },
            { item: 'soa_additions:cosmilite_ingot' },
            { item: 'soa_additions:cosmilite_ingot' },
            { item: 'draconicevolution:chaotic_core' },
            { item: 'draconicevolution:chaotic_core' },
            { item: 'draconicevolution:chaotic_core' },
            { item: 'draconicevolution:chaotic_core' }
        ],
        result: { item: 'projecte:transmutation_tablet' },
        tier: 'CHAOTIC',
        total_energy: 1600000000
    })

    // --- soa_additions:creative_soul (catalyst: chaotic_core, tier 3) ---
    // 8x creative_shard
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'draconicevolution:chaotic_core' },
        ingredients: Array(8).fill({ item: 'soa_additions:creative_shard' }),
        result: { item: 'soa_additions:creative_soul' },
        tier: 'CHAOTIC',
        total_energy: 34359738368
    })

    // --- draconic_staff_of_power ---  NOT in DE 1.20. FIXME skip.

    // --- avaritia:extreme_crafting_table (catalyst: minecraft:crafting_table, tier 1) ---
    // 2x block_resource:2 + 2x resource:1 + 2x wyvern_core + 2x ancient_tome_fragment
    // block_resource:2 = crystal_matrix_block? not confirmed; use crystal_matrix_ingot FIXME
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'minecraft:crafting_table' },
        ingredients: [
            { item: 'avaritia:crystal_matrix_ingot' }, // FIXME: GC block_resource:2 best-guess
            { item: 'avaritia:crystal_matrix_ingot' },
            { item: 'avaritia:crystal_matrix' },       // resource:1
            { item: 'avaritia:crystal_matrix' },
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_core' },
            { item: 'soa_additions:ancient_tome_fragment' },
            { item: 'soa_additions:ancient_tome_fragment' }
        ],
        result: { item: 'avaritia:extreme_crafting_table' },
        tier: 'WYVERN',
        total_energy: 2400000000
    })

    // --- projectex:arcane_tablet --- projectex ABSENT. Skip.

    // --- projecte:condenser_mk2 (catalyst: condenser_mk1, tier 1) ---
    // 4x projecte:matter_block:1 + wyvern_core + energy_matter_core +
    // city_defender_medal + ancient_tome_fragment
    // projecte:matter_block:1 best-guess -> projecte:red_matter_block
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'projecte:condenser_mk1' },
        ingredients: [
            { item: 'projecte:red_matter_block' }, // FIXME: matter_block:1 best-guess
            { item: 'projecte:red_matter_block' },
            { item: 'projecte:red_matter_block' },
            { item: 'projecte:red_matter_block' },
            { item: 'draconicevolution:wyvern_core' },
            { item: 'soa_additions:energy_matter_core' },
            { item: 'soa_additions:city_defender_medal' },
            { item: 'soa_additions:ancient_tome_fragment' }
        ],
        result: { item: 'projecte:condenser_mk2' },
        tier: 'WYVERN',
        total_energy: 4800000000
    })

    // --- projecte:condenser_mk1 (catalyst: alchemical_chest, tier 0) ---
    // 4x projecte:item.pe_matter + 2x draconic_core + wyvern_core + energy_matter_core
    // projecte:item.pe_matter best-guess -> projecte:dark_matter
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'projecte:alchemical_chest' },
        ingredients: [
            { item: 'projecte:dark_matter' }, // FIXME: item.pe_matter best-guess
            { item: 'projecte:dark_matter' },
            { item: 'projecte:dark_matter' },
            { item: 'projecte:dark_matter' },
            { item: 'draconicevolution:draconium_core' }, // GC: draconic_core
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:wyvern_core' },
            { item: 'soa_additions:energy_matter_core' }
        ],
        result: { item: 'projecte:condenser_mk1' },
        tier: 'BASIC',
        total_energy: 320000000
    })

    // --- draconicevolution:awakened_core (catalyst: nether_star, tier 1) ---
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'minecraft:nether_star' },
        ingredients: [
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_core' },
            { tag: 'forge:ingots/draconium_awakened' }, // draconic_ingot -> awakened_draconium_ingot tag
            { tag: 'forge:ingots/draconium_awakened' },
            { item: 'soa_additions:aeonsteel_ingot' },
            { item: 'soa_additions:infernium_ingot' },
            { item: 'soa_additions:aeonsteel_ingot' },
            { item: 'soa_additions:infernium_ingot' }
        ],
        result: { item: 'draconicevolution:awakened_core' },
        tier: 'WYVERN',
        total_energy: 512000000
    })

    // --- soa_additions:blueprint_tactic (catalyst: blueprint, tier 0) ---
    // 4x draconium_ingot
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'soa_additions:blueprint' },
        ingredients: Array(4).fill({ item: 'draconicevolution:draconium_ingot' }),
        result: { item: 'soa_additions:blueprint_tactic' },
        tier: 'BASIC',
        total_energy: 16000000
    })

    // --- draconicevolution:chaotic_core (catalyst: chaos_shard, tier 2) ---
    // 2x tconevo:metal (wyvern) + 2x tconevo:metal:5 (awakened draconium) +
    // 2x avaritia:resource:4 (neutron_ingot) + 2x chromasteel_ingot
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'draconicevolution:chaos_shard' },
        ingredients: [
            { tag: 'forge:ingots/wyvern' },
            { tag: 'forge:ingots/wyvern' },
            { tag: 'forge:ingots/draconium_awakened' },
            { tag: 'forge:ingots/draconium_awakened' },
            { item: 'avaritia:neutron_ingot' }, // resource:4
            { item: 'avaritia:neutron_ingot' },
            { item: 'soa_additions:chromasteel_ingot' },
            { item: 'soa_additions:chromasteel_ingot' }
        ],
        result: { item: 'draconicevolution:chaotic_core' },
        tier: 'DRACONIC',
        total_energy: 4096000000
    })

    // --- draconicevolution:wyvern_core (catalyst: nether_star, tier 0) ---
    // 4x draconic_core + 2x draconium_ingot + 2x cryonium_ingot
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'minecraft:nether_star' },
        ingredients: [
            { item: 'draconicevolution:draconium_core' }, // GC: draconic_core
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'draconicevolution:draconium_ingot' },
            { item: 'soa_additions:cryonium_ingot' },
            { item: 'soa_additions:cryonium_ingot' }
        ],
        result: { item: 'draconicevolution:wyvern_core' },
        tier: 'BASIC',
        total_energy: 6400000
    })

    // --- solarflux:* ---  mod ABSENT. Skip.

    // --- draconicevolution:reactor_core (catalyst: chaos_shard, tier 3) ---
    // 2x cosmilite_ingot + 2x tconevo:metal:5 + 2x draconicadditions:chaotic_energy_core + 2x terra_alloy_ingot
    // Note: draconicadditions:chaotic_energy_core doesn't exist; DE's own
    // draconicevolution:chaotic_energy_core does.
    // Removing DE stock first (DE 1.20 provides its own reactor_core recipe).
    event.remove({ type: 'draconicevolution:fusion_crafting', output: 'draconicevolution:reactor_core' })
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'draconicevolution:chaos_shard' },
        ingredients: [
            { item: 'soa_additions:cosmilite_ingot' },
            { item: 'soa_additions:cosmilite_ingot' },
            { tag: 'forge:ingots/draconium_awakened' },
            { tag: 'forge:ingots/draconium_awakened' },
            { item: 'draconicevolution:chaotic_energy_core' },
            { item: 'draconicevolution:chaotic_energy_core' },
            { item: 'soa_additions:terra_alloy_ingot' },
            { item: 'soa_additions:terra_alloy_ingot' }
        ],
        result: { item: 'draconicevolution:reactor_core' },
        tier: 'CHAOTIC',
        total_energy: 13107200000
    })

    // --- soa_additions:electronium_ingot (catalyst: fusion_matrix_ingot, tier 0) ---
    // 4x redstonearsenal:material:32 + 4x redstonerepository:material:1
    // both mods ABSENT -> FIXME skip.

    // --- soa_additions:creative_shard (catalyst: chaotic_core, tier 3) ---
    // 4x cosmilite_ingot + bounty_hunter_medal + sand_of_time + 2x ancient_tome_page
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'draconicevolution:chaotic_core' },
        ingredients: [
            { tag: 'forge:ingots/cosmilite' }, // FIXME: ore:ingotCosmilite -> tag best-guess
            { tag: 'forge:ingots/cosmilite' },
            { tag: 'forge:ingots/cosmilite' },
            { tag: 'forge:ingots/cosmilite' },
            { item: 'soa_additions:bounty_hunter_medal' },
            { item: 'soa_additions:sand_of_time' },
            { item: 'soa_additions:ancient_tome_page' },
            { item: 'soa_additions:ancient_tome_page' }
        ],
        result: { item: 'soa_additions:creative_shard' },
        tier: 'CHAOTIC',
        total_energy: 8589934592
    })

    // --- thaumcraft:primordial_pearl ---  Thaumcraft ABSENT. Skip.

    // =================================================================
    // ==== tconstruct (expert) ========================================
    // =================================================================
    // GC packmode expert tconstruct.zs had a single cosmilite alloy recipe
    // annotated `#norun` (disabled in GC). Not portable; many referenced
    // fluids aren't registered in SoA either.

    // =================================================================
    // ==== astralsorcery (expert) =====================================
    // =================================================================
    // AstralSorcery NOT installed in SoA 1.20.1.
    // GC Altar recipes (philosophers_stone, arcane_crystal_ball,
    // astral_metal, tool_exchange removal) -> not portable.

    // =================================================================
    // ==== thaumcraft (expert) ========================================
    // =================================================================
    // Thaumcraft NOT installed in SoA 1.20.1.
    // GC Infusion recipes (energy_matter_core, blueprint_wand,
    // crimsonite_block) -> not portable.
    console.info('[soa_ported] packmode_expert_mods.js: DONE')
})
