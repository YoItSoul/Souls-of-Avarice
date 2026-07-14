// ============================================================
// SoA Per-Packmode Vanilla Crafting — port of GreedyCraft
//   scripts/recipes/packmode/{normal,expert}/vanilla/crafting.zs
//
// 1.12 GC tightened a handful of vanilla recipes per packmode. SoA's
// three modes are casual/adventure/expert (see _packmode.js); GC's
// "normal" tier maps to SoA's "adventure".
//
// Default recipes for these items live as datapack JSONs in
//   kubejs/data/soa_additions/recipes/
// and apply unconditionally (i.e., in casual mode). This file removes
// the JSON recipe and re-adds a stricter variant when adventure or
// expert mode is active.
//
// SKIPPED items reference absent mods:
//   - Avaritia, Astral Sorcery (astralstarmetal), Thaumcraft (salis_mundus)
//   - Thermal Expansion machine recipes (TE 1.20.1 layout differs from 1.12)
//   - EnderIO 6.x material:N metadata items (different ID scheme)
//   - GC custom OreDicts (alloyElite/alloyUltimate, dustBedrock)
//
// Mode-changes require server restart for these recipe changes to take
// effect (matches GC's CT #packmode behavior — recipes registered at
// recipe-event time).
// ============================================================

console.info('[soa_ported] packmode_vanilla_crafting.js loading')

let _MODE = 'adventure'
try { _MODE = String(global.SOA_PACKMODE || 'adventure') } catch (e) { /* */ }

ServerEvents.recipes(event => {
    console.info('[soa_ported] packmode_vanilla_crafting.js: registering for mode=' + _MODE)

    // --------------------------------------------------------
    //  Adventure + Expert overrides
    // --------------------------------------------------------
    if (_MODE === 'adventure' || _MODE === 'expert') {

        // -- Enchanting Table --
        // GC adventure: book + 2x diamond_block + black_wool + 3x compressed XP block
        // GC expert:    book + 2x diamond_block + astralstarmetal + 3x compressed XP block
        // (astral_starmetal absent → fall back to wool for both modes)
        try {
            event.remove({ output: 'minecraft:enchanting_table' })
            event.shaped('minecraft:enchanting_table', [
                ' B ',
                'DWD',
                'EEE'
            ], {
                B: 'minecraft:book',
                D: 'minecraft:diamond_block',
                W: 'minecraft:black_wool',
                E: 'soa_additions:compressed_experience_block',
            }).id('soa_ported:packmode_enchanting_table_' + _MODE)
        } catch (e) { console.warn('[packmode_vanilla] enchanting_table: ' + e) }

        // -- Twilight Shield --
        // GC adventure: ironwood + knightmetal + ironwood / fiery + alpha_yeti_fur + fiery / _ + carminite + _
        // (Expert had a different recipe involving steeleaf/hydra_chop/lamp_of_cinders/meef_stroganoff
        //  — most of those items are TF 1.12-only, so we use the adventure recipe for both modes.)
        try {
            event.remove({ output: 'soa_additions:twilight_shield' })
            event.shaped('soa_additions:twilight_shield', [
                'IKI',
                'FAF',
                ' C '
            ], {
                I: 'twilightforest:ironwood_ingot',
                K: 'twilightforest:knightmetal_ingot',
                F: 'twilightforest:fiery_ingot',
                A: 'twilightforest:alpha_yeti_fur',  // 1.20 TF rename (was alpha_fur in 1.12)
                C: 'twilightforest:carminite',
            }).id('soa_ported:packmode_twilight_shield')
        } catch (e) { console.warn('[packmode_vanilla] twilight_shield: ' + e) }
    }

    // --------------------------------------------------------
    //  Adventure-only overrides
    // --------------------------------------------------------
    if (_MODE === 'adventure') {

        // -- Blueprint -- 8x light_blue dye + paper (GC normal/adventure)
        try {
            event.remove({ output: 'soa_additions:blueprint' })
            event.shaped('soa_additions:blueprint', [
                'DDD', 'DPD', 'DDD'
            ], {
                D: '#forge:dyes/light_blue',
                P: 'minecraft:paper',
            }).id('soa_ported:packmode_blueprint_adventure')
        } catch (e) { console.warn('[packmode_vanilla] blueprint(adv): ' + e) }

        // -- Ender Charm -- 4x ender_eye + 2x durasteel + 2x dreadium + nether_star
        try {
            event.remove({ output: 'soa_additions:ender_charm' })
            event.shaped('soa_additions:ender_charm', [
                'EIE', 'GNG', 'EIE'
            ], {
                E: 'minecraft:ender_eye',
                I: '#forge:ingots/durasteel',
                G: '#forge:ingots/dreadium',
                N: 'minecraft:nether_star',
            }).id('soa_ported:packmode_ender_charm_adventure')
        } catch (e) { console.warn('[packmode_vanilla] ender_charm(adv): ' + e) }
    }

    // --------------------------------------------------------
    //  Expert-only overrides
    // --------------------------------------------------------
    if (_MODE === 'expert') {

        // -- Blueprint -- 8x lapis dust + paper (GC expert)
        try {
            event.remove({ output: 'soa_additions:blueprint' })
            event.shaped('soa_additions:blueprint', [
                'LLL', 'LPL', 'LLL'
            ], {
                L: '#forge:dusts/lapis',
                P: 'minecraft:paper',
            }).id('soa_ported:packmode_blueprint_expert')
        } catch (e) { console.warn('[packmode_vanilla] blueprint(exp): ' + e) }

        // (ender_charm expert recipe uses dreadkey from absent AbyssalCraft → JSON default applies)
        // (twilight_gem normal+expert both use salis_mundus → Thaumcraft absent → JSON default applies)
        // (blueprint_shuriken normal+expert use alloyElite/alloyUltimate → no SoA equivalent → JSON default)
    }

    console.info('[soa_ported] packmode_vanilla_crafting.js: registration complete')
})

// -- Per-mod per-packmode files (astralsorcery/draconicevolution/thaumcraft/
//    tconstruct) status:
//   - astralsorcery.zs (42×2 lines) → SKIP (mod absent in SoA 1.20.1)
//   - thaumcraft.zs (18×2 lines) → SKIP (mod absent)
//   - tconstruct.zs (14×2 lines) → SKIP (was #norun in GC source)
//   - draconicevolution.zs (204×2 lines) → DEFERRED — DE 1.20.1 fusion
//     crafting uses a JSON datapack format (not CT runtime API), and many
//     entries reference absent mods (projectex matter:1, tconevo, plustic,
//     additions:tcsponsors items). Per-recipe translation requires careful
//     per-item ID mapping; track as a focused future task if user wants
//     the GC fusion-tier recipe gating reproduced.
