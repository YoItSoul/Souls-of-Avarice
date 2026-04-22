// Ported from GreedyCraft: scripts/recipes/packmode/expert/vanilla/crafting.zs
// 1.12.2 CraftTweaker -> 1.20.1 KubeJS
// IDs verified via soa_exports/{items,tags}.json.
//
// GC's expert-mode variants of vanilla crafting overrides. Gated by
// global.SOA_PACKMODE (see _packmode.js); normal-mode counterpart lives in
// packmode_normal_vanilla.js.
//
// Verified 1.20 ID rewrites:
//   avaritia:resource             -> avaritia:infinity_catalyst
//   avaritia:resource:1           -> avaritia:crystal_matrix
//   draconicevolution:draconic_core         -> draconicevolution:draconium_core
//   draconicevolution:energy_storage_core   -> draconicevolution:energy_core
//   draconicevolution:crafting_injector     -> draconicevolution:wyvern_crafting_injector (FIXME)
//   additions:greedycraft-<X>     -> soa_additions:<X>
//
// Absent mods / absent items (recipe parts NOT available -> FIXME):
//   thermalexpansion:machine:3       (TX frames reworked in Thermal 1.20)
//   enderio:item_material / :51      (EIO 1.20 uses named items; FIXME)
//   actuallyadditions:block_misc:9   (AA absent)
//   thaumcraft:salis_mundus          (Thaumcraft absent)
//   abyssalcraft:dreadkey            (AbyssalCraft absent)
//   <ore:blockCompressedExperience>  (soa_additions has no compressed_experience_block)
//   <ore:alloyUltimate>              (GC custom; soa_additions:ultimate_alloy not registered)
//   <ore:ingotAstralStarmetal>       (AstralSorcery absent -> FIXME)
//   <ore:dustBedrock>                (GC custom dust; FIXME)

console.info('[soa_ported] packmode_expert_vanilla.js loading')

ServerEvents.recipes(event => {
    if (global.SOA_PACKMODE !== 'expert') {
        console.info('[soa_ported] packmode_expert_vanilla.js: skipped (SOA_PACKMODE is not expert)')
        return
    }
    console.info('[soa_ported] packmode_expert_vanilla.js: registering recipes')

    // --- Removals (expert) ---
    const removeList = [
        'minecraft:enchanting_table',
        'draconicevolution:draconium_core',            // GC: draconic_core
        'draconicevolution:wyvern_crafting_injector',  // GC: crafting_injector (FIXME: confirm 1.20 ID)
        'avaritia:infinity_catalyst',                  // GC: avaritia:resource
        'avaritia:crystal_matrix',                     // GC: avaritia:resource:1
        'draconicevolution:energy_core',               // GC: energy_storage_core
        // 'thermalexpansion:machine:3',  // TX 1.20 has no direct analog -> skip
        // 'enderio:item_material',       // EIO 1.20 IDs FIXME -> skip
        // 'enderio:item_material:51',    // same
        'soa_additions:blueprint',
        'soa_additions:twilight_gem',
        'soa_additions:ender_charm',
        // 'actuallyadditions:block_misc:9', // AA absent
        'soa_additions:twilight_shield',
        'soa_additions:blueprint_shuriken'
    ]
    removeList.forEach(out => event.remove({ output: out }))

    // --- Shaped (expert) ---

    // enchanting_table: diamond_block + astral_starmetal_ingot + compressed_experience_block
    // FIXME: AstralStarmetal ingot + compressed_experience_block NOT available.
    // event.shaped('minecraft:enchanting_table', [' B ', 'DIA', 'CCC'], { B:'minecraft:book', D:'#forge:storage_blocks/diamond', I:'#forge:ingots/astral_starmetal', A:'#forge:storage_blocks/diamond', C:'soa_additions:compressed_experience_block' })

    // draconium_core x4: ingotDraconium + blockGold + blockDraconium + blockDiamond
    event.shaped(
        Item.of('draconicevolution:draconium_core', 4),
        ['DGD', 'BIB', 'DGD'],
        {
            D: '#forge:ingots/draconium',
            G: '#forge:storage_blocks/gold',
            B: '#forge:storage_blocks/draconium',
            I: '#forge:storage_blocks/diamond'
        }
    ).id('soa_ported:draconium_core_expert')

    // wyvern_crafting_injector: 3x draconic_core + blockDiamond + blockDraconium + blockSteel
    event.shaped(
        Item.of('draconicevolution:wyvern_crafting_injector', 1), // FIXME: confirm 1.20 injector ID
        ['CCC', 'DBD', 'SSS'],
        {
            C: 'draconicevolution:draconium_core',
            D: '#forge:storage_blocks/diamond',
            B: '#forge:storage_blocks/draconium',
            S: '#forge:storage_blocks/steel'
        }
    ).id('soa_ported:crafting_injector_expert')

    // infinity_catalyst: blockDiamond + nether_star
    event.shaped(
        Item.of('avaritia:infinity_catalyst', 1),
        ['D D', ' N ', 'D D'],
        {
            D: '#forge:storage_blocks/diamond',
            N: 'minecraft:nether_star'
        }
    ).id('soa_ported:infinity_catalyst_expert')

    // crystal_matrix: 4x infinity_catalyst + 2x nether_star
    event.shaped(
        Item.of('avaritia:crystal_matrix', 1),
        ['   ', 'INI', 'INI'],
        {
            I: 'avaritia:infinity_catalyst',
            N: 'minecraft:nether_star'
        }
    ).id('soa_ported:crystal_matrix_expert')

    // energy_core: ingotWyvernMetal + gearWyvernMetal + draconic_energy_core + awakened_core
    // Wyvern metal = forge tag #forge:ingots/wyvern (per memory); gear FIXME
    event.shaped(
        Item.of('draconicevolution:energy_core', 1),
        ['IGI', 'CAC', 'IGI'],
        {
            I: '#forge:ingots/wyvern',
            G: '#forge:gears/wyvern', // FIXME: gear tag not verified; may be draconicevolution:wyvern_gear or jaopca-registered
            C: 'draconicevolution:draconic_energy_core',
            A: 'draconicevolution:awakened_core'
        }
    ).id('soa_ported:energy_core_expert')

    // thermalexpansion:machine:3 (redstone furnace) — Thermal 1.20 machine frames reworked; NOT portable.

    // enderio:item_material / :51 — EIO 1.20 renamed to grains_of_infinity / pulsating_iron etc. FIXME.

    // blueprint: dustLapis x8 + paper
    event.shaped(
        Item.of('soa_additions:blueprint', 1),
        ['LLL', 'LPL', 'LLL'],
        {
            L: '#forge:dusts/lapis',
            P: 'minecraft:paper'
        }
    ).id('soa_ported:blueprint_expert')

    // twilight_gem: dustDiamond + gemAquamarine + salis_mundus + manaDiamond
    // Thaumcraft absent -> salis_mundus FIXME
    // event.shaped(Item.of('soa_additions:twilight_gem',1), ['DAD','SMS','DAD'], ... )

    // ender_charm: dustEnderium + ingotGaia + netherStar + dreadkey + ingotNetherite + blockDurasteel
    // abyssalcraft:dreadkey absent -> FIXME
    // event.shaped(Item.of('soa_additions:ender_charm',1), ['EGE','NKN','IBI'], ... )

    // actuallyadditions:block_misc:9 — AA absent; skip.

    // twilight_shield: ingotSteeleaf + hydra_chop + ingotIronwood + ingotFiery +
    //                  lamp_of_cinders + naga_scale + meef_stroganoff + carminite + alpha_fur
    event.shaped(
        Item.of('soa_additions:twilight_shield', 1),
        ['SHI', 'FLN', 'MCA'],
        {
            S: '#forge:ingots/steeleaf',
            H: 'twilightforest:hydra_chop',           // FIXME: verify TF 1.20 item ID
            I: '#forge:ingots/ironwood',
            F: '#forge:ingots/fiery',
            L: 'twilightforest:lamp_of_cinders',      // FIXME: verify
            N: 'twilightforest:naga_scale',
            M: 'twilightforest:meef_stroganoff',      // FIXME: verify
            C: '#forge:carminite',                    // FIXME: verify tag name
            A: 'twilightforest:alpha_fur'
        }
    ).id('soa_ported:twilight_shield_expert')

    // --- Shapeless (expert) ---

    // blueprint_shuriken: blueprint + alloyUltimate
    // alloyUltimate is a GC custom ore dict; no SoA equivalent. FIXME.
    // event.shapeless('soa_additions:blueprint_shuriken', ['soa_additions:blueprint', '#forge:ingots/ultimate_alloy'])
    console.info('[soa_ported] packmode_expert_vanilla.js: DONE')
})
