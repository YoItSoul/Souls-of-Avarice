// Ported from GreedyCraft: scripts/recipes/packmode/normal/mods/draconicevolution.zs
// 1.12.2 CraftTweaker (moretweaker.FusionCrafting) -> 1.20.1 KubeJS.
//
// Gated by global.SOA_PACKMODE (see _packmode.js); the expert counterpart lives
// in packmode_expert_mods.js. Both files emit draconicevolution:fusion_crafting
// recipes; only one set registers per server load based on SOA_PACKMODE.
//
// draconicevolution:fusion_crafting schema (same as packmode_expert_mods.js):
//   { type, catalyst, ingredients[], result, tier, total_energy }
//   tier: BASIC | WYVERN | DRACONIC | CHAOTIC
//   GC tier integer mapping: 0=BASIC, 1=WYVERN, 2=DRACONIC, 3=CHAOTIC
//
// ID translations (consistent with packmode_expert_mods.js):
//   additions:greedycraft-<X>         -> soa_additions:<X>
//   additions:<X>                     -> soa_additions:<X>
//   draconicevolution:draconic_core   -> draconicevolution:draconium_core
//   draconicevolution:draconic_pick   -> draconicevolution:draconic_pickaxe
//   avaritia:resource:1               -> avaritia:crystal_matrix
//   avaritia:resource:4               -> avaritia:neutron_ingot
//   avaritia:block_resource:2         -> avaritia:crystal_matrix_block   (FIXME best-guess)
//   projecte:item.pe_matter           -> projecte:dark_matter            (FIXME best-guess)
//   projecte:item.pe_transmutation_tablet -> projecte:transmutation_tablet
//   projecte:matter_block:1           -> projecte:red_matter_block       (FIXME best-guess)
//   tconevo:metal                     -> #forge:ingots/wyvern
//   tconevo:metal:5                   -> #forge:ingots/draconium_awakened
//   tconevo:metal:1                   -> FIXME unknown meta -> skip with FIXME
//   tconevo:metal_block               -> #forge:storage_blocks/fusion_matrix (FIXME verify)
//   tconevo:metal_block:1             -> FIXME unknown -> skip
//
// Absent in SoA 1.20.1 (FIXME -> skipped):
//   projectex:* (arcane_tablet, matter:0/1/2)
//   thaumcraft:* (primordial_pearl, void_seed, ingot, ingot:1)
//   redstonearsenal:material:32, redstonerepository:material:1
//   draconicevolution:draconic_staff_of_power (not in DE 1.20)
//   solarflux:custom_solar_panel_cosmic_solar_panel (GC custom)

console.info('[soa_ported] packmode_normal_de.js loading')

ServerEvents.recipes(event => {
    if (global.SOA_PACKMODE !== 'normal') {
        console.info('[soa_ported] packmode_normal_de.js: skipped (SOA_PACKMODE is not normal)')
        return
    }
    console.info('[soa_ported] packmode_normal_de.js: registering recipes')

    // --- Removals (normal) ---
    event.remove({ type: 'draconicevolution:fusion_crafting', output: 'draconicevolution:chaos_shard' })
    event.remove({ type: 'draconicevolution:fusion_crafting', output: 'minecraft:nether_star' })
    // draconic_pick -> draconic_pickaxe; DE 1.20 doesn't ship it as a fusion output -> no-op
    // event.remove({ type: 'draconicevolution:fusion_crafting', output: 'draconicevolution:draconic_pickaxe' })

    // Remove DE stock recipes the normal-mode overrides replace:
    event.remove({ type: 'draconicevolution:fusion_crafting', output: 'draconicevolution:wyvern_core' })
    event.remove({ type: 'draconicevolution:fusion_crafting', output: 'draconicevolution:awakened_core' })
    event.remove({ type: 'draconicevolution:fusion_crafting', output: 'draconicevolution:chaotic_core' })

    // --- projecte:transmutation_table (catalyst: energy_matter_core, tier 1, E=2_147_483_647) ---
    // 1x extreme_crafting_table + 1x projectex:matter:1 + 1x tconevo:metal_block (wyvern block) +
    // 1x dragon_heart + 1x ancient_tome_page + 1x pearl_of_knowledge +
    // 1x bounty_hunter_medal + 1x city_defender_medal
    // projectex:matter:1 ABSENT -> FIXME skip entire recipe
    // event.custom({ ... })

    // --- projecte:transmutation_tablet (catalyst: transmutation_table, tier 2, E=400_000_000) ---
    // 4x wyvern_core + 4x awakened_core
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'projecte:transmutation_table' },
        ingredients: [
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:awakened_core' },
            { item: 'draconicevolution:awakened_core' },
            { item: 'draconicevolution:awakened_core' },
            { item: 'draconicevolution:awakened_core' }
        ],
        result: { item: 'projecte:transmutation_tablet' },
        tier: 'DRACONIC',
        total_energy: 400000000
    })

    // --- soa_additions:creative_soul (catalyst: chaotic_core, tier 3, E=8_589_934_592) ---
    // 8x creative_shard
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'draconicevolution:chaotic_core' },
        ingredients: Array(8).fill({ item: 'soa_additions:creative_shard' }),
        result: { item: 'soa_additions:creative_soul' },
        tier: 'CHAOTIC',
        total_energy: 8589934592
    })

    // --- draconic_staff_of_power (catalyst: avaritia:resource:5, tier 2, E=17_179_869_184) ---
    // draconic_staff_of_power is NOT in DE 1.20; GC used it as staff-of-power output. FIXME skip.

    // --- avaritia:extreme_crafting_table (catalyst: minecraft:crafting_table, tier 1, E=800_000_000) ---
    // 2x block_resource:2 + 2x resource:1 + 2x wyvern_core + 2x ancient_tome_fragment
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'minecraft:crafting_table' },
        ingredients: [
            { item: 'avaritia:crystal_matrix_block' }, // FIXME: GC block_resource:2 best-guess
            { item: 'avaritia:crystal_matrix_block' },
            { item: 'avaritia:crystal_matrix' },        // resource:1
            { item: 'avaritia:crystal_matrix' },
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:wyvern_core' },
            { item: 'soa_additions:ancient_tome_fragment' },
            { item: 'soa_additions:ancient_tome_fragment' }
        ],
        result: { item: 'avaritia:extreme_crafting_table' },
        tier: 'WYVERN',
        total_energy: 800000000
    })

    // --- projectex:arcane_tablet (catalyst: transmutation_tablet, tier 3, E=17_179_869_184) ---
    // projectex ABSENT -> FIXME skip

    // --- projecte:condenser_mk2 (catalyst: condenser_mk1, tier 1, E=640_000_000) ---
    // 4x matter_block:1 + wyvern_core + energy_matter_core + city_defender_medal + ancient_tome_fragment
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
        total_energy: 640000000
    })

    // --- projecte:condenser_mk1 (catalyst: alchemical_chest, tier 0, E=80_000_000) ---
    // 4x item.pe_matter + 2x draconic_core + wyvern_core + energy_matter_core
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
        total_energy: 80000000
    })

    // --- draconicevolution:awakened_core (catalyst: nether_star, tier 1, E=128_000_000) ---
    // 2x wyvern_core + 2x draconic_ingot + 2x aeonsteel_ingot + 2x infernium_ingot
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
        total_energy: 128000000
    })

    // --- soa_additions:blueprint_tactic (catalyst: blueprint, tier 0, E=4_000_000) ---
    // 4x draconium_ingot
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'soa_additions:blueprint' },
        ingredients: Array(4).fill({ item: 'draconicevolution:draconium_ingot' }),
        result: { item: 'soa_additions:blueprint_tactic' },
        tier: 'BASIC',
        total_energy: 4000000
    })

    // --- draconicevolution:chaotic_core (catalyst: chaos_shard, tier 2, E=1_024_000_000) ---
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
            { item: 'avaritia:neutron_ingot' },
            { item: 'avaritia:neutron_ingot' },
            { item: 'soa_additions:chromasteel_ingot' },
            { item: 'soa_additions:chromasteel_ingot' }
        ],
        result: { item: 'draconicevolution:chaotic_core' },
        tier: 'DRACONIC',
        total_energy: 1024000000
    })

    // --- draconicevolution:wyvern_core (catalyst: nether_star, tier 0, E=1_600_000) ---
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
        total_energy: 1600000
    })

    // --- solarflux:sp_de.wyvern (catalyst: sp_8, tier 1, E=12_800_000) ---
    // 4x tconevo:metal (wyvern) + 4x wyvern_energy_core
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'solarflux:sp_8' }, // GC solar_panel_8 -> SolarFlux 1.20 sp_8 (Solar Panel VIII)
        ingredients: [
            { tag: 'forge:ingots/wyvern' },
            { tag: 'forge:ingots/wyvern' },
            { tag: 'forge:ingots/wyvern' },
            { tag: 'forge:ingots/wyvern' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:wyvern_energy_core' },
            { item: 'draconicevolution:wyvern_energy_core' }
        ],
        result: { item: 'solarflux:sp_de.wyvern' },
        tier: 'WYVERN',
        total_energy: 12800000
    })

    // --- solarflux:sp_de.draconic (catalyst: sp_de.wyvern, tier 2, E=102_400_000) ---
    // 4x tconevo:metal:5 (awakened draconium) + 4x draconic_energy_core
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'solarflux:sp_de.wyvern' },
        ingredients: [
            { tag: 'forge:ingots/draconium_awakened' },
            { tag: 'forge:ingots/draconium_awakened' },
            { tag: 'forge:ingots/draconium_awakened' },
            { tag: 'forge:ingots/draconium_awakened' },
            { item: 'draconicevolution:draconic_energy_core' },
            { item: 'draconicevolution:draconic_energy_core' },
            { item: 'draconicevolution:draconic_energy_core' },
            { item: 'draconicevolution:draconic_energy_core' }
        ],
        result: { item: 'solarflux:sp_de.draconic' },
        tier: 'DRACONIC',
        total_energy: 102400000
    })

    // --- cosmic_solar_panel (catalyst: solar_panel_chaotic, tier 3, E=1_638_400_000) ---
    // GC: custom_solar_panel_cosmic_solar_panel is a GC ContentTweaker-registered custom panel.
    // Not in SoA. FIXME skip.

    // --- draconicevolution:reactor_core (catalyst: chaos_shard, tier 3, E=3_276_800_000) ---
    // 2x cosmilite_ingot + 2x tconevo:metal:5 (awakened draconium) +
    // 2x draconicadditions:chaotic_energy_core + 2x terra_alloy_ingot
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'draconicevolution:chaos_shard' },
        ingredients: [
            { item: 'soa_additions:cosmilite_ingot' },
            { item: 'soa_additions:cosmilite_ingot' },
            { tag: 'forge:ingots/draconium_awakened' },
            { tag: 'forge:ingots/draconium_awakened' },
            { item: 'draconicadditions:chaotic_energy_core' },
            { item: 'draconicadditions:chaotic_energy_core' },
            { item: 'soa_additions:terra_alloy_ingot' },
            { item: 'soa_additions:terra_alloy_ingot' }
        ],
        result: { item: 'draconicevolution:reactor_core' },
        tier: 'CHAOTIC',
        total_energy: 3276800000
    })

    // --- soa_additions:electronium_ingot (catalyst: tconevo:material, tier 0, E=100_000_000) ---
    // 4x redstonearsenal:material:32 + 4x redstonerepository:material:1 (interleaved)
    // RSA + RSR absent in SoA 1.20 -> FIXME skip

    // --- soa_additions:creative_shard (catalyst: chaotic_core, tier 3, E=2_147_483_648) ---
    // 4x cosmilite_ingot + bounty_hunter_medal + sand_of_time + 2x ancient_tome_page
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'draconicevolution:chaotic_core' },
        ingredients: [
            { tag: 'forge:ingots/cosmilite' },
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
        total_energy: 2147483648
    })

    // --- thaumcraft:primordial_pearl (catalyst: void_seed, tier 0, E=2_048_000) ---
    // Thaumcraft ABSENT in SoA 1.20 -> FIXME skip

    console.info('[soa_ported] packmode_normal_de.js: DONE')
})
