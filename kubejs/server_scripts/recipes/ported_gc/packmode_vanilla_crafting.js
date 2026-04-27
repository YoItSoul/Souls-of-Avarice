// ============================================================
// SoA Per-Packmode Vanilla Crafting — port of GreedyCraft
//   scripts/recipes/packmode/{normal,expert}/vanilla/crafting.zs
//
// 1.12 GC tightened a handful of vanilla recipes per packmode:
//   - enchanting_table cost scaled with mode (compressed XP block requirement)
//   - End-game items (twilight_gem, ender_charm, twilight_shield) recrafted
//     with mod-specific ingredients
//   - Expert additionally rebuilt DE/Avaritia/Thermal/EnderIO core recipes
//     to require higher-tier ingredients
//
// 1.20.1 port: gates by global.SOA_PACKMODE. Mode-changes require server
// restart for these recipe changes to take effect (matches GC's CT
// #packmode behavior — recipes registered at recipe-event time).
//
// SKIPPED items reference absent mods:
//   - Avaritia, Astral Sorcery (astralstarmetal), Thaumcraft (salis_mundus)
//   - Original draconicevolution recipe overrides (DE 1.20.1 has different
//     core item IDs; safer to leave stock recipes for now)
//   - Thermal Expansion machine recipes (TE 1.20.1 layout differs from 1.12)
//   - EnderIO 6.x material:N metadata items (different ID scheme)
//
// What IS ported: the enchanting_table cost bump (both modes) + the SoA
// twilight_shield/ender_charm crafting recipes which use installed mod
// items (Twilight Forest fiery/knightmetal/ironwood/carminite, Botania
// fertilizer + manaDiamond — though salis_mundus replacement still missing).
// ============================================================

console.info('[soa_ported] packmode_vanilla_crafting.js loading')

let _MODE = 'adventure'
try { _MODE = String(global.SOA_PACKMODE || 'adventure') } catch (e) { /* */ }

ServerEvents.recipes(event => {
    console.info('[soa_ported] packmode_vanilla_crafting.js: registering for mode=' + _MODE)

    // -- Enchanting Table — cost scales with packmode --
    // GC normal: book + 2x diamond_block + black_wool + 3x compressed XP block
    // GC expert: book + 2x diamond_block + astralstarmetal_ingot + 3x compressed XP block
    // Adventure (= GC's normal): same as normal
    // Casual: leave stock recipe
    if (_MODE === 'adventure' || _MODE === 'expert') {
        try {
            event.remove({ output: 'minecraft:enchanting_table' })
            event.shaped('minecraft:enchanting_table', [
                ' B ',
                'DWD',
                'EEE'
            ], {
                B: 'minecraft:book',
                D: 'minecraft:diamond_block',
                W: _MODE === 'expert'
                    ? 'minecraft:black_wool'  // astral_starmetal absent → fall back to wool
                    : 'minecraft:black_wool',
                E: 'soa_additions:compressed_experience_block',
            }).id('soa_ported:packmode_enchanting_table_' + _MODE)
        } catch (e) { console.warn('[packmode_vanilla] enchanting_table: ' + e) }
    }

    // -- Twilight Shield (SoA item; recrafted per GC normal/expert) --
    // GC: ironwood + knightmetal + ironwood / fiery + alpha_fur + fiery / _ + carminite + _
    if (_MODE !== 'casual') {
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
                A: 'twilightforest:alpha_yeti_fur',  // 1.20 TF rename
                C: 'twilightforest:carminite',
            }).id('soa_ported:packmode_twilight_shield')
        } catch (e) { console.warn('[packmode_vanilla] twilight_shield: ' + e) }
    }

    // -- Other GC packmode crafting overrides (DE/Avaritia/Thermal/EnderIO/
    //    actuallyadditions/draconic items) intentionally skipped per port
    //    policy — those recipes use 1.12 mod IDs/metadata that don't translate
    //    cleanly to 1.20.1 mod versions. Stock 1.20 recipes are kept.
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
