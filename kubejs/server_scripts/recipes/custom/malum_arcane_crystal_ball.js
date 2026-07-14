// ============================================================
// SoA Malum Spirit Infusion — Arcane Crystal Ball
//
// 1:1 port of GreedyCraft's normal-mode AS Trait Altar recipe (4500 starlight,
// 400 ticks, evorsio constellation). With Thaumcraft and Astral Sorcery both
// dropped in 1.20.1 SoA, the Malum Spirit Altar replaces both pillars; this
// infusion mirrors GC's ingredient counts ingredient-for-ingredient.
//
// GC ingredient -> SoA substitute (with reasoning):
//   4x ingotThaumium                  -> 4x malum:soul_stained_steel_ingot
//                                        (closest "iron + magic" Malum metal)
//   4x netherStar                     -> 4x minecraft:nether_star
//                                        (already gated to abyssal_conquerer
//                                        in soa_item_stages.zs — matches GC)
//   1x thaumcraft:salis_mundus        -> 1x malum:complete_design
//                                        (Malum's "all-spirit" knowledge
//                                        artifact — closest 1:1 to "essence
//                                        of the world")
//   4x astralsorcery:itemusabledust   -> 4x malum:chunk_of_brilliance
//                                        (raw magical material, pre-cluster)
//   12x astralsorcery:itemcraftingcomponent:4 (Resonating Gemstone, gated to
//        skilled_wizard in GC) -> 12x malum:cluster_of_brilliance
//                                  (gate added in soa_item_stages.zs and
//                                   soa_block_stages.js to match GC behavior)
//   6x ingotAstralMetal (skilled_wizard) -> 6x soa_additions:astral_metal_ingot
//                                           (already gated to skilled_wizard)
//
// Total: 31 ingredients, exactly matching GC normal mode count.
//
// Effective gate: skilled_wizard (from cluster_of_brilliance, astral_metal,
// and the arcane_crystal_ball item itself) plus abyssal_conquerer (from
// nether_star). Mirrors GC's effective gating.
//
// Right-clicking the produced ball grants master_wizard via the item's Java
// code (already implemented in soa_additions). The chapter_malum quest
// 'mal_arcane_crystal_ball' also grants master_wizard on submit, providing
// a redundant grant path.
// ============================================================

console.info('[soa_scripts] malum_arcane_crystal_ball.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_scripts] malum_arcane_crystal_ball.js: registering')

    event.custom({
        type: 'malum:spirit_infusion',
        input: {
            count: 1,
            item: 'malum:complete_design'
        },
        extra_items: [
            { count: 4,  item: 'malum:soul_stained_steel_ingot' },
            { count: 4,  item: 'minecraft:nether_star' },
            { count: 4,  item: 'malum:chunk_of_brilliance' },
            { count: 12, item: 'malum:cluster_of_brilliance' },
            { count: 6,  item: 'soa_additions:astral_metal_ingot' }
        ],
        output: {
            item: 'soa_additions:arcane_crystal_ball'
        },
        spirits: [
            { type: 'arcane',   count: 32 },
            { type: 'eldritch', count: 16 },
            { type: 'sacred',   count: 16 }
        ]
    }).id('soa_ported:malum_arcane_crystal_ball')

    console.info('[soa_scripts] malum_arcane_crystal_ball.js: DONE')
})
