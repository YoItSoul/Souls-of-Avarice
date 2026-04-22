// Ported from GreedyCraft: scripts/recipes/mods/avaritia.zs
// 1.12.2 CraftTweaker (mods.avaritia.ExtremeCrafting / Compressor) -> 1.20.1 KubeJS
//
// Re-Avaritia 1.20.1 recipe schemas (verified from mod jar data):
//   avaritia:shaped_table      — tier 1..4, pattern (array of strings), key map, result
//   avaritia:compressor        — ingredient, inputCount, result, timeCost
//   avaritia:eternal_singularity — ingredients array (all consumed)
//   avaritia:infinity_catalyst — ingredients array
//
// GC meta ID -> SoA ID rewrites applied:
//   additions:greedycraft-<X>         -> soa_additions:<X>
//   avaritia:resource:0               -> avaritia:diamond_lattice
//   avaritia:resource:1               -> avaritia:crystal_matrix_ingot
//   avaritia:resource:2/3             -> crystal_matrix / blaze_cube (verified in Re-Avaritia)
//   avaritia:resource:4               -> avaritia:neutron_ingot
//   avaritia:resource:5               -> avaritia:infinity_catalyst
//   avaritia:resource:6               -> avaritia:infinity_ingot
//   avaritia:resource:7               -> avaritia:refined_coal
//   avaritia:block_resource:1         -> avaritia:infinity (the infinity block)
//   avaritia:singularity:3            -> (Re-Avaritia uses NBT-driven singularity;
//                                         GC's ordinal tags don't carry across cleanly) SKIP
//   avaritia:singularity:12           -> soa_additions:flux_singularity
//   tconevo:metal:10                  -> SoA has no direct "ravaging" ingot equivalent — FIXME/skip
//   tconevo:metal:20                  -> soa_additions:fusion_matrix_ingot (assumed via GC mapping) FIXME
//   tconevo:metal_block:1             -> FIXME no soa_additions block item
//   <ore:ingotExperience>             -> #forge:ingots/experience (or soa_additions:experience_ingot)
//   <ore:blockElectrumFlux>           -> #forge:storage_blocks/electrum_flux (if tag exists)
//   <ore:coal>                        -> #forge:coals (but Re-Avaritia ships its own coal->diamond)
//
// ABSENT MODS — recipes SKIPPED wholesale (output items don't exist in SoA 1.20):
//   extrautils2:*                  (creativeenergy, passivegenerator, itemcreativedestructionwand,
//                                    itemcreativebuilderswand, creativeharvest, creativechest,
//                                    spike_creative, decorativesolid)
//   thermalfoundation:upgrade:256  (reforging kit)
//   chancecubes:creative_pendant
//   appliedenergistics2:creative_storage_cell
//   thermalcultivation:watering_can, thermalinnovation:injector/drill/saw, thermalexpansion:capacitor
//   draconicevolution:draconium_capacitor, creative_exchanger
//   scalinghealth:difficultychanger (used to build difficulty_changer output)
//   botania:pool:1  (eternal mana pool)
//   mysticalagradditions:stuff:69  — maps to mysticalagradditions:creative_essence (SoA has this,
//     but all corner ingredients use absent items) — SKIP
//   bloodmagic:sacrificial_dagger:1  (creative variant)
//   astralsorcery:*                 (itemcraftingcomponent — absent)
//   storagedrawers:upgrade_creative:1  (vending upgrade absent)
//   thaumicwonders:creative_essentia_jar + thaumadditions:jar_mithminite  (mods absent)
//   randomthings:creativeplayerinterface
//   wct:wct_creative / wit:wit_creative / wft:wft_creative + threng:material
//   thaumcraft:thaumonomicon:1  (cheat variant, thaumcraft absent)
//   danknull:dank_null_6  (mod absent)
//   projectex:final_star + colossal_star_omega + knowledge_sharing_book  (projectex absent)
//   projecte:item.pe_time_watch, projecte:item.pe_tome  — have SoA analogs
//     (projecte:time_watch, projecte:tome_of_knowledge) but recipes gate on absent ingredients
//
// Items CONFIRMED present in SoA that make a subset of recipes viable:
//   soa_additions:{creative_soul, creative_shard, pearl_of_knowledge, infinity_stone,
//                  experience_ingot, experience_nugget, experience_singularity,
//                  flux_singularity, mana_singularity, matter_singularity,
//                  ancient_tome, ancient_tome_page, ancient_tome_fragment,
//                  wither_soul, dragon_soul, aurora_heart, anti_entropy_matter,
//                  sand_of_time, time_shard, city_defender_medal, cosmilite_ingot,
//                  cryonic_artifact, bounty_hunter_medal*, medkit_*, raw_human_meat,
//                  bloody_sacrifice, blood_sigil, lucky_clover, poop, poopburger,
//                  fusion_matrix_ingot, electronium_ingot, protonium_ingot}
//   avaritia:{diamond_lattice, crystal_matrix, crystal_matrix_ingot, neutron_ingot,
//             infinity_ingot, infinity_catalyst, cosmic_meatballs, ultimate_stew,
//             endest_pearl, refined_coal, eternal_singularity, infinity}
//
// Items MISSING from SoA (FIXME — related recipes skipped):
//   soa_additions:compressed_experience_block  -> NOT registered
//   soa_additions:infinity_block_block         -> NOT registered
//   soa_additions:infinity_block_block_block   -> NOT registered
//   soa_additions:fusion_matrix_block          -> NOT registered
//   soa_additions:cosmilite_block              -> NOT registered
//   soa_additions:passport                     -> NOT registered
//   soa_additions:difficulty_changer           -> NOT registered
//   soa_additions:energy_matter_core           -> present (for future use)
//
// ------------------------------------------------------------------

console.info('[soa_ported] avaritia.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] avaritia.js: registering recipes')

    // Helper: Re-Avaritia tier-4 shaped_table recipe from a 9x9 grid.
    // grid is a 9-element array of 9-element arrays; null/undefined = empty.
    // Returns an auto-generated { pattern, key } pair.
    const mkExtreme = (out, grid, name, tier) => {
        if (tier === undefined) tier = 4
        const pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789'
        const keyMap = {}
        let idx = 0
        const pattern = []
        for (let r = 0; r < 9; r++) {
            let line = ''
            for (let c = 0; c < 9; c++) {
                const cell = (grid[r] && grid[r][c]) || null
                if (cell === null || cell === undefined) { line += ' '; continue }
                if (!(cell in keyMap)) { keyMap[cell] = pool.charAt(idx++) }
                line += keyMap[cell]
            }
            pattern.push(line)
        }
        const key = {}
        for (const [ing, k] of Object.entries(keyMap)) {
            key[k] = ing.charAt(0) === '#'
                ? { tag: ing.slice(1) }
                : { item: ing }
        }
        event.custom({
            type: 'avaritia:shaped_table',
            category: 'misc',
            tier: tier,
            pattern: pattern,
            key: key,
            result: { item: out }
        }).id('soa_ported:' + name)
    }

    // Helper: Re-Avaritia compressor recipe
    const mkCompressor = (ingredient, count, result, time, name) => {
        event.custom({
            type: 'avaritia:compressor',
            ingredient: ingredient.charAt(0) === '#'
                ? { tag: ingredient.slice(1) }
                : { item: ingredient },
            inputCount: count,
            result: { item: result },
            timeCost: time
        }).id('soa_ported:compressor_' + name)
    }

    // -----------------------------------------------------------------
    // Infinity Catalyst (custom_avaritia_recipe_catalyst_shaped)
    // GC rewrites the catalyst recipe. Re-Avaritia already registers its
    // own catalyst via `avaritia:infinity_catalyst` type. We REMOVE the
    // stock one and add GC's shapeless-equivalent via a shaped 9x9 of
    // the catalyst ingredient list.
    // -----------------------------------------------------------------
    console.info('[soa_ported] avaritia.js: section=infinity_catalyst')
    event.remove({ output: 'avaritia:infinity_catalyst' })

    // GC catalyst ingredients — 28 items. After rewrites, the ones
    // available in SoA:
    const catalystIngs = [
        'avaritia:diamond_lattice',           // resource:0
        'avaritia:crystal_matrix_ingot',       // resource:1
        'avaritia:crystal_matrix',             // resource:2
        'avaritia:blaze_cube',                 // resource:3
        'avaritia:neutron_ingot',              // resource:4
        'avaritia:cosmic_meatballs',
        'avaritia:ultimate_stew',
        'avaritia:endest_pearl',
        'avaritia:refined_coal',               // resource:7
        'soa_additions:pearl_of_knowledge',
        'soa_additions:wither_soul',
        'soa_additions:dragon_soul',
        'soa_additions:city_defender_medal',
        'soa_additions:ancient_tome',
        'soa_additions:creative_shard',
        'soa_additions:poop',
        'soa_additions:aurora_heart',
        'minecraft:nether_star',
        'draconicevolution:dragon_heart',
        'draconicevolution:chaotic_core',
        // projectex:matter:3 -> projecte:red_matter (rewrite per mapping)
        'projecte:red_matter',
        // cosmilite_block absent; substitute ingot per user's "exact 1:1" — but no block → use ingot
        'soa_additions:cosmilite_ingot',        // FIXME GC uses cosmilite_block
        'soa_additions:cryonic_artifact',
        'soa_additions:bounty_hunter_medal',
        // additions:perfectly_generic_item -> projecte's generic? No analog — SKIP
        'soa_additions:sand_of_time',
        'soa_additions:anti_entropy_matter',
        'avaritia:eternal_singularity'
    ]

    // 27 ingredients — lay them out in a 9x9 pattern (3 rows of 9)
    // GC uses 3 output + shapeless, but Re-Avaritia's shaped is the safe variant.
    // Build result with count=3 via a raw custom recipe (mkExtreme only
    // supports count=1).
    event.custom({
        type: 'avaritia:shaped_table',
        category: 'misc',
        tier: 4,
        pattern: (() => {
            const pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
            let p = []
            for (let r = 0; r < 9; r++) {
                let line = ''
                for (let c = 0; c < 9; c++) {
                    const i = r * 9 + c
                    line += i < catalystIngs.length ? pool.charAt(i) : ' '
                }
                p.push(line)
            }
            return p
        })(),
        key: (() => {
            const pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
            const k = {}
            catalystIngs.forEach((ing, i) => {
                k[pool.charAt(i)] = ing.charAt(0) === '#' ? { tag: ing.slice(1) } : { item: ing }
            })
            return k
        })(),
        result: { item: 'avaritia:infinity_catalyst', count: 3 }
    }).id('soa_ported:gc_infinity_catalyst_shaped')

    // -----------------------------------------------------------------
    // Eternal Singularity — GC lists 14 avaritia singularities (all absent
    // in Re-Avaritia's NBT model) + ~20 jaopca singularities (mod absent).
    // Skip: Re-Avaritia registers its own eternal_singularity already.
    // -----------------------------------------------------------------

    // -----------------------------------------------------------------
    // Infinity Sword (custom_avaritia_recipe_sword)
    // GC rewrites the stock 9x9 sword recipe to use tconevo:metal:10
    // (ravaging ingot) + resource:6 (infinity_ingot) + resource:5 + resource:4.
    // tconevo:metal:10 has no SoA analog; skip the replacement and let
    // Re-Avaritia's stock infinity_sword recipe stand.
    // -----------------------------------------------------------------
    // event.remove({ output: 'avaritia:infinity_sword' })  // leave stock

    // -----------------------------------------------------------------
    // Infinity Stone (custom_avaritia_recipe_38)
    // 81x infinity_block_block_block -> soa_additions:infinity_stone
    // FIXME: infinity_block_block_block NOT registered in SoA. Skip.
    // -----------------------------------------------------------------
    // event.remove({ output: 'soa_additions:infinity_stone' })

    // -----------------------------------------------------------------
    // Pearl of Knowledge (custom_avaritia_recipe_34)
    // 81x compressed_experience_block -> soa_additions:pearl_of_knowledge
    // FIXME: compressed_experience_block NOT registered in SoA.
    // Use the Compressor recipe below instead (6561 experience ingots).
    // -----------------------------------------------------------------

    // -----------------------------------------------------------------
    // Infinity Block Block / Infinity Block Block Block
    // 71x infinity_block -> infinity_block_block; 71x infinity_block_block
    // -> infinity_block_block_block. FIXME: neither output is registered
    // in soa_additions; skip.
    // -----------------------------------------------------------------

    // -----------------------------------------------------------------
    // Compressor recipes (GC: Compressor.add)
    // -----------------------------------------------------------------
    console.info('[soa_ported] avaritia.js: section=compressor')
    // GC: pearl_of_knowledge <- 7382x actuallyadditions:item_solidified_experience
    //   actuallyadditions absent in SoA — skip.
    // GC: pearl_of_knowledge <- 6561x <ore:ingotExperience>
    //   SoA has forge:ingots/experience tag presumably; use soa_additions:experience_ingot
    mkCompressor('soa_additions:experience_ingot', 6561,
        'soa_additions:pearl_of_knowledge', 600, 'pearl_from_xp_ingots')

    // GC: fluxed_singularity (<avaritia:singularity:12>) <- 128x blockElectrumFlux
    //   SoA has soa_additions:flux_singularity as the flux singularity analog.
    //   #forge:storage_blocks/electrum_flux — tag may not exist; use any source block.
    //   FIXME: verify electrum_flux block tag or item ID.
    // Skip until verified:
    // mkCompressor('#forge:storage_blocks/electrum_flux', 128,
    //     'soa_additions:flux_singularity', 240, 'flux_singularity')

    // GC: coal_to_diamond <- 64x <ore:coal> -> minecraft:diamond
    //   Re-Avaritia ships this recipe natively — skip to avoid duplicate ID.

    // -----------------------------------------------------------------
    // Thaumonomicon Cheat (custom_avaritia_recipe_37) — thaumcraft absent. SKIP
    // Creative Controller (custom_avaritia_recipe_24) — all corner ingredients
    //   exist but infinity_block_block_block absent. SKIP
    // -----------------------------------------------------------------

    // -----------------------------------------------------------------
    // All other GC avaritia recipes depend on absent-mod output items
    // (extrautils2/thermalfoundation/chancecubes/appliedenergistics2/
    //  thermalcultivation/thermalinnovation/thermalexpansion/
    //  draconicevolution capacitor & exchanger/ scalinghealth/botania pool/
    //  mysticalagradditions stuff:69/ bloodmagic/astralsorcery/
    //  storagedrawers/thaumicwonders/thaumadditions/randomthings/
    //  wct/wit/wft/threng/thaumcraft/danknull/projectex/projecte time_watch/tome).
    // Documented above in the header; not re-emitted here.
    // -----------------------------------------------------------------
    console.info('[soa_ported] avaritia.js: DONE')
})
