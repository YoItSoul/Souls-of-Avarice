// Ported from GreedyCraft: scripts/recipes/mods/avaritia.zs
// 1.12.2 CraftTweaker (mods.avaritia.ExtremeCrafting / Compressor) -> 1.20.1 KubeJS
//
// Re-Avaritia 1.20.1 schemas:
//   avaritia:shaped_table   — 9x9 grid; pattern (array of 9 strings), key map, result
//   avaritia:compressor     — ingredient + inputCount + result + timeCost (separate file)
//   avaritia:eternal_singularity / infinity_catalyst — separate (custom recipe types)
//
// 43 ExtremeCrafting recipes in GC source, 20 portable (rest depend on absent
// extrautils2/scalinghealth-removed/chancecubes-removed items per per-recipe
// audit; let unknown IDs fail-load per project policy).
//
// Generator: tmp/port_avaritia.py — re-runnable.

console.info('[soa_ported] avaritia.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] avaritia.js: registering recipes')

    // ----------------------------------------------------------------
// 20 portable Avaritia recipes auto-generated from GC mods/avaritia.zs
// (out of 43 ExtremeCrafting entries)

    // [SoA] Disabled — result 'thermal:upgrade' has no 1.20.1 equivalent
    // (Thermal moved to upgrade_augment_1/2/3, semantically different).
    /*
    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['AAAAAAAAA', 'ABBBBBBBA', 'ABAAAAABA', 'ABBBBBBBA', 'ABBBABBBA', 'ABBABABBA', 'ABABBBABA', 'ABBBBBBBA', 'AAAAAAAAA'],
        key: {"A": {"item": "soa_additions:creative_soul"}, "B": {"item": "avaritia:resource"}},
        result: { item: 'thermal:upgrade', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_0')
    */

    // [SoA] Disabled — result 'tconstruct:materials' is a 1.12 meta-item;
    // only 'tconstruct:materials_and_you' (the guide book) exists in 1.20.1.
    /*
    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['         ', '         ', '  AAAAA  ', '  ABABA  ', '  AAAAA  ', '  ACCCA  ', '  AAAAA  ', '         ', '         '],
        key: {"A": {"item": "minecraft:gold_block"}, "B": {"item": "soa_additions:creative_shard"}, "C": {"item": "minecraft:skull"}},
        result: { item: 'tconstruct:materials', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_4')
    */

    // [SoA] Disabled — 'draconicevolution:draconium_capacitor' renamed to
    // draconic_capacitor in 1.20.1, but ingredients 'tconevo:metal_block' and
    // 'avaritia:resource' are dead 1.12 meta-items with no clean successor.
    /*
    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['A   B   A', ' CCCBCCC ', ' CDCBCDC ', ' CCDBDCC ', 'BBBBEBBBB', ' CCDBDCC ', ' CDCBCDC ', ' CCCBCCC ', 'A   B   A'],
        key: {"A": {"item": "tconevo:metal_block"}, "B": {"item": "draconicevolution:awakened_core"}, "C": {"item": "soa_additions:creative_soul"}, "D": {"item": "avaritia:resource"}, "E": {"item": "draconicevolution:draconium_capacitor"}},
        result: { item: 'draconicevolution:draconium_capacitor', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_12')
    */

    // [SoA] Disabled — 'appliedenergistics2:creative_storage_cell' not present
    // in this AE2 build.
    /*
    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['    A    ', '   AAA   ', '  ABBBA  ', ' AABCBAA ', ' CABBBAC ', ' CCAAACC ', '  CCACC  ', '   CCC   ', '    C    '],
        key: {"A": {"item": "avaritia:resource"}, "B": {"item": "avaritia:block_resource"}, "C": {"item": "soa_additions:creative_soul"}},
        result: { item: 'appliedenergistics2:creative_storage_cell', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_14')
    */

    // [SoA] Disabled — Thermal Cultivation mod not loaded in this pack.
    /*
    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['         ', '         ', '         ', ' A BCBB  ', '  ABDB B ', '   BBBB  ', '   BBB   ', '         ', '         '],
        key: {"A": {"item": "soa_additions:creative_soul"}, "B": {"item": "minecraft:iron_ingot"}, "C": {"item": "minecraft:water_bucket"}, "D": {"item": "thermal:reservoir"}},
        result: { item: 'thermalcultivation:watering_can', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_17')
    */

    // [SoA] Disabled — Thermal Innovation mod not loaded in this pack.
    /*
    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['         ', '      AA ', '     BAA ', '    BCBA ', '   BCB A ', '   ABAA  ', '  A      ', ' A       ', '         '],
        key: {"A": {"item": "minecraft:iron_ingot"}, "B": {"item": "soa_additions:creative_soul"}, "C": {"item": "minecraft:potion"}},
        result: { item: 'thermalinnovation:injector', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_18')
    */

    // [SoA] Disabled — ingredient 'avaritia:block_resource' has no 1.20.1
    // successor (Re-Avaritia removed the infinity-ingot block; only blaze_cube,
    // diamond_lattice, refined_coal, star_fuel block variants exist now).
    // Result 'soa_additions:infinity_block_block' becomes unobtainable via this
    // path — provide an alternate craft elsewhere if needed.
    /*
    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['AAAAAAAA ', 'AAAAAAAA ', 'AAAAAAAA ', 'AAAAAAAA ', 'AAAAAAAA ', 'AAAAAAAA ', 'AAAAAAAA ', 'AAAAAAAA ', '         '],
        key: {"A": {"item": "avaritia:block_resource"}},
        result: { item: 'soa_additions:infinity_block_block', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_19')
    */

    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['AAAAAAAA ', 'AAAAAAAA ', 'AAAAAAAA ', 'AAAAAAAA ', 'AAAAAAAA ', 'AAAAAAAA ', 'AAAAAAAA ', 'AAAAAAAA ', '         '],
        key: {"A": {"item": "soa_additions:infinity_block_block"}},
        result: { item: 'soa_additions:infinity_block_block_block', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_20')

    // [SoA] Disabled — ingredient 'scalinghealth:difficultychanger' was removed
    // in the 1.20.1 Scaling Health rewrite (mod now ships only heart crystal
    // items, no difficulty token). Result 'soa_additions:difficulty_changer'
    // becomes unobtainable via this path.
    /*
    event.custom({
        type: 'avaritia:shaped_table',
        pattern: [' AA   AA ', 'AAAA AAAA', 'AAAABAAAA', 'AAAABAAAA', ' AAABAAA ', '  AABAA  ', '   ABA   ', '    B    ', '         '],
        key: {"A": {"item": "scalinghealth:difficultychanger"}, "B": {"item": "soa_additions:creative_shard"}},
        result: { item: 'soa_additions:difficulty_changer', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_21')
    */

    // [SoA] Disabled — 'botania:pool' renamed to mana_pool, but ingredient
    // 'botania:manaresource' is the 1.12 meta-item; in 1.20.1 it split into
    // mana_diamond/mana_pearl/mana_powder and there's no metadata-less ID.
    /*
    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['         ', '         ', '         ', '         ', 'ABCCCCCBA', 'ABCCCCCBA', 'ABCCCCCBA', 'ABBBBBBBA', 'AAAAAAAAA'],
        key: {"A": {"item": "botania:livingrock"}, "B": {"item": "botania:manaresource"}, "C": {"item": "soa_additions:creative_soul"}},
        result: { item: 'botania:pool', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_22')
    */

    // [SoA] Disabled — Mystical Agriculture: Tinkering / Insanium addon not
    // present (no insanium item, no 'stuff' result item in 1.20.1 registry).
    /*
    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['         ', ' A    A  ', '    A    ', '   AAA   ', '  AABAA  ', '  AAAAA  ', '   AAA   ', '         ', '         '],
        key: {"A": {"item": "soa_additions:creative_shard"}, "B": {"item": "mysticalagradditions:insanium"}},
        result: { item: 'mysticalagradditions:stuff', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_23')
    */

    // [SoA] Disabled — ingredient 'thermal:upgrade' has no 1.20.1 equivalent
    // (Thermal moved to upgrade_augment_1/2/3, semantically different).
    // 'avaritia:resource' would rename to infinity_ingot, but the recipe is
    // unsalvageable while thermal:upgrade is dead. Result
    // 'soa_additions:creative_controller' becomes unobtainable via this path.
    /*
    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['AAAAAABAA', 'AAAAAACAA', 'AACCCCCAA', 'AACDDDCAA', 'AACEEDCAA', 'AACEEDCAA', 'AACDDDCAA', 'AACCCCCAA', 'AAAAAAAAA'],
        key: {"A": {"item": "soa_additions:creative_soul"}, "B": {"item": "soa_additions:infinity_block_block_block"}, "C": {"item": "avaritia:resource"}, "D": {"item": "thermal:upgrade"}, "E": {"item": "minecraft:redstone_block"}},
        result: { item: 'soa_additions:creative_controller', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_24')
    */

    // [SoA] Disabled — Project Extended mod not loaded; no final_star_shard
    // ingredient and no final_star result available.
    /*
    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['         ', '   AAA   ', '  ABBBA  ', ' ABBBBBA ', ' ABBCBBA ', ' ABBBBBA ', '  ABBBA  ', '   AAA   ', '         '],
        key: {"A": {"item": "projectextended:final_star_shard"}, "B": {"item": "soa_additions:creative_soul"}, "C": {"item": "avaritia:block_resource"}},
        result: { item: 'projectextended:final_star', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_26')
    */

    // [SoA] Disabled — result renames to 'projecte:watch_of_flowing_time',
    // but ingredient 'projectextended:colossal_star_omega' isn't in the loaded
    // Project Extended build (it ships only matter shields/tridents/etc.).
    /*
    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['         ', '         ', '   ABA   ', '  ABBBA  ', '  BCDCB  ', '  ABBBA  ', '   ABA   ', '         ', '         '],
        key: {"A": {"item": "projectextended:colossal_star_omega"}, "B": {"item": "soa_additions:creative_soul"}, "C": {"item": "soa_additions:infinity_block_block"}, "D": {"item": "minecraft:clock"}},
        result: { item: 'projecte:item.pe_time_watch', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_27')
    */

    // [SoA] Disabled — result renames to 'projecte:tome', but three of the
    // ingredients (knowledge_sharing_book, colossal_star_omega,
    // final_star_shard) aren't in the loaded Project Extended build.
    /*
    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['         ', ' AAABAAA ', ' ACDDDCA ', ' ADEEEDA ', ' BDEFEDB ', ' ADEEEDA ', ' ACDDDCA ', ' AAABAAA ', '         '],
        key: {"A": {"item": "soa_additions:creative_shard"}, "B": {"item": "soa_additions:creative_soul"}, "C": {"item": "projectextended:knowledge_sharing_book"}, "D": {"item": "projectextended:colossal_star_omega"}, "E": {"item": "projectextended:final_star_shard"}, "F": {"item": "minecraft:book"}},
        result: { item: 'projecte:item.pe_tome', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_29')
    */

    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA'],
        key: {"A": {"item": "soa_additions:compressed_experience_block"}},
        result: { item: 'soa_additions:pearl_of_knowledge', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_34')

    // [SoA] Disabled — ingredient 'tconevo:metal' is a 1.12 meta-item with no
    // 1.20.1 successor (TConEvo 1.20.1 ships only coalescence_matrix and
    // sceptre). 'avaritia:resource' would rename to infinity_ingot, but the
    // recipe is unsalvageable while tconevo:metal is dead. NB: Re-Avaritia
    // 1.20.1 likely registers its own infinity_sword craft natively.
    /*
    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['       AA', '      AAA', '     AAA ', '    AAA  ', ' B AAA   ', '  BAA    ', '  AB     ', ' A  B    ', 'C        '],
        key: {"A": {"item": "avaritia:resource"}, "B": {"item": "tconevo:metal"}, "C": {"item": "soa_additions:creative_soul"}},
        result: { item: 'avaritia:infinity_sword', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_sword')
    */

    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA'],
        key: {"A": {"item": "soa_additions:infinity_block_block_block"}},
        result: { item: 'soa_additions:infinity_stone', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_38')

    // [SoA] 'avaritia:resource' renamed to 'avaritia:infinity_ingot' (1.12
    // meta-item resource:0 is the infinity ingot in Re-Avaritia 1.20.1).
    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['   AAA   ', '  ABBBA  ', ' ABBBBBA ', ' ABBABBA ', ' ABABABA ', ' ABBBBBA ', ' ABAAABA ', ' AA   AA ', '         '],
        key: {"A": {"item": "avaritia:infinity_ingot"}, "B": {"item": "soa_additions:creative_soul"}},
        result: { item: 'soa_additions:passport', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_40')

    // [SoA] Disabled — 'draconicevolution:creative_exchanger' not present in
    // this Draconic Evolution build.
    /*
    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['A B      ', ' CB      ', 'BBABB    ', '  BAAB   ', '  BAAB   ', '   BBBA  ', '     ABBB', '      BB ', '      B A'],
        key: {"A": {"item": "soa_additions:creative_soul"}, "B": {"item": "tconevo:metal_block"}, "C": {"item": "soa_additions:infinity_block_block"}},
        result: { item: 'draconicevolution:creative_exchanger', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_45')
    */

    console.info('[soa_ported] avaritia.js: DONE')
})
