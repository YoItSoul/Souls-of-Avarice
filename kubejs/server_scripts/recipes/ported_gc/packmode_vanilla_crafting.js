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
    //  Twilight Gem — ENTER recipe scales with packmode (1:1 GC).
    //  GC used thaumcraft:salis_mundus; SoA's equivalent is thaumon:mutagen
    //  ("Also known as salis mundus"). The always-on RETURN recipe (Twilight
    //  loot) stays as the datapack JSON kubejs/data/soa_additions/recipes/
    //  twilight_gem.json, so every mode still has an escape recipe.
    //    casual    : Saplings + Botania Fertilizer + Mana Diamond (loosest)
    //    adventure : GC normal — Saplings + Fertilizer + Mutagen + Mana Diamond
    //    expert    : GC expert — Diamond Dust + Aquamarine + Mutagen + Mana Diamond
    // --------------------------------------------------------
    try {
        if (_MODE === 'casual') {
            event.shaped('soa_additions:twilight_gem', ['SFS', 'FDF', 'SFS'], {
                S: '#minecraft:saplings', F: 'botania:fertilizer', D: 'botania:mana_diamond',
            }).id('soa_ported:twilight_gem_enter_casual')
        } else if (_MODE === 'adventure') {
            event.shaped('soa_additions:twilight_gem', ['SFS', 'MDM', 'SFS'], {
                S: '#minecraft:saplings', F: 'botania:fertilizer', M: 'thaumon:mutagen', D: 'botania:mana_diamond',
            }).id('soa_ported:twilight_gem_enter_adventure')
        } else if (_MODE === 'expert') {
            event.shaped('soa_additions:twilight_gem', ['UAU', 'MDM', 'UAU'], {
                U: 'thermal:diamond_dust', A: 'soa_additions:aquamarine', M: 'thaumon:mutagen', D: 'botania:mana_diamond',
            }).id('soa_ported:twilight_gem_enter_expert')
        }
    } catch (e) { console.warn('[packmode_vanilla] twilight_gem enter: ' + e) }

    // --------------------------------------------------------
    //  Adventure + Expert overrides
    // --------------------------------------------------------
    if (_MODE === 'adventure' || _MODE === 'expert') {

        // -- Enchanting Table --
        // GC adventure: book + 2x diamond_block + wool + 3x compressed XP block
        // GC expert:    book + 2x diamond_block + astral starmetal + 3x compressed XP block
        // Astral Sorcery is absent, but SoA ships Starmetal (soa_additions:starmetal_ingot,
        // #forge:ingots/starmetal) — so expert now uses starmetal 1:1; adventure keeps wool.
        try {
            event.remove({ output: 'minecraft:enchanting_table' })
            event.shaped('minecraft:enchanting_table', [
                ' B ',
                'DWD',
                'EEE'
            ], {
                B: 'minecraft:book',
                D: 'minecraft:diamond_block',
                W: (_MODE === 'expert' ? 'soa_additions:starmetal_ingot' : 'minecraft:black_wool'),
                E: 'soa_additions:compressed_experience_block',
            }).id('soa_ported:packmode_enchanting_table_' + _MODE)
        } catch (e) { console.warn('[packmode_vanilla] enchanting_table: ' + e) }

        // -- Twilight Shield --
        // GC adventure: ironwood/knightmetal + fiery/alpha_yeti_fur + carminite
        // GC expert:    steeleaf/hydra_chop/ironwood · fiery/lamp_of_cinders/naga_scale ·
        //               meef_stroganoff/carminite/alpha_yeti_fur. The two 1.12-only TF foods
        //               map to Twilight Delight: hydra_chop → hydra_piece,
        //               meef_stroganoff → mushgloom_meef_pasta.
        try {
            event.remove({ output: 'soa_additions:twilight_shield' })
            if (_MODE === 'expert') {
                event.shaped('soa_additions:twilight_shield', [
                    'SHI',
                    'FLN',
                    'MCA'
                ], {
                    S: 'twilightforest:steeleaf_ingot',
                    H: 'twilightforest:hydra_chop',  // TF 1.20 has the original
                    I: 'twilightforest:ironwood_ingot',
                    F: 'twilightforest:fiery_ingot',
                    L: 'twilightforest:lamp_of_cinders',
                    N: 'twilightforest:naga_scale',
                    M: 'twilightforest:meef_stroganoff',
                    C: 'twilightforest:carminite',
                    A: 'twilightforest:alpha_yeti_fur',
                }).id('soa_ported:packmode_twilight_shield_expert')
            } else {
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
                }).id('soa_ported:packmode_twilight_shield_adventure')
            }
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

        // -- Blueprint Shuriken -- GC normal: blueprint + Elite Alloy (shapeless)
        // (alloyElite → #forge:alloys/elite = mekanism:alloy_reinforced)
        try {
            event.remove({ output: 'soa_additions:blueprint_shuriken' })
            event.shapeless('soa_additions:blueprint_shuriken', [
                'soa_additions:blueprint', '#forge:alloys/elite',
            ]).id('soa_ported:packmode_blueprint_shuriken_adventure')
        } catch (e) { console.warn('[packmode_vanilla] blueprint_shuriken(adv): ' + e) }
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

        // -- Blueprint Shuriken -- GC expert: blueprint + Ultimate Alloy (shapeless)
        // (alloyUltimate → #forge:alloys/ultimate = mekanism:alloy_atomic)
        try {
            event.remove({ output: 'soa_additions:blueprint_shuriken' })
            event.shapeless('soa_additions:blueprint_shuriken', [
                'soa_additions:blueprint', '#forge:alloys/ultimate',
            ]).id('soa_ported:packmode_blueprint_shuriken_expert')
        } catch (e) { console.warn('[packmode_vanilla] blueprint_shuriken(exp): ' + e) }

        // -- Ender Charm -- GC expert: enderium dust + gaia ingot / nether star + DREADKEY + nether star /
        //   netherite + durasteel block. GC's dreadkey was the final AbyssalCraft boss drop; SoA's
        //   equivalent is valoria:crystal_shard — an exclusive drop of the Valoria crystal boss
        //   (valoria:wicked_crystal) that spawns nowhere else, so it's a true trophy gate.
        try {
            event.remove({ output: 'soa_additions:ender_charm' })
            event.shaped('soa_additions:ender_charm', [
                'UGU',
                'NKN',
                'TBT'
            ], {
                U: '#forge:dusts/enderium',
                G: 'botania:gaia_ingot',
                N: 'minecraft:nether_star',
                K: 'valoria:crystal_shard',
                T: 'minecraft:netherite_ingot',
                B: 'soa_additions:durasteel_block',
            }).id('soa_ported:packmode_ender_charm_expert')
        } catch (e) { console.warn('[packmode_vanilla] ender_charm(exp): ' + e) }

        // (twilight_gem: IMPLEMENTED above — salis_mundus → thaumon:mutagen)
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
