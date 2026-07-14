// Ported from GreedyCraft: scripts/recipes/packmode/expert/vanilla/crafting.zs
// 1.12.2 CraftTweaker -> 1.20.1 KubeJS
// IDs verified via soa_exports/{items,tags}.json.
//
// GC's expert-mode variants of crafting overrides for Draconic Evolution
// + Avaritia core recipes. The shared adventure/expert overrides
// (enchanting_table, twilight_shield, blueprint, ender_charm, etc.) live in
// packmode_vanilla_crafting.js — this file holds ONLY the Expert-only
// DE/Avaritia recipe rewrites.
//
// Verified 1.20 ID rewrites:
//   avaritia:resource             -> avaritia:infinity_catalyst
//   avaritia:resource:1           -> avaritia:crystal_matrix
//   draconicevolution:draconic_core         -> draconicevolution:draconium_core
//   draconicevolution:energy_storage_core   -> draconicevolution:energy_core
//   draconicevolution:crafting_injector     -> draconicevolution:wyvern_crafting_injector (FIXME)
//
// Absent mods / absent items (recipe parts NOT available -> FIXME):
//   thermalexpansion:machine:3       (TX frames reworked in Thermal 1.20)
//   enderio:item_material / :51      (EIO 1.20 uses named items)
//   actuallyadditions:block_misc:9   (AA absent)
//   <ore:dustBedrock>                (GC custom dust)

console.info('[soa_ported] packmode_expert_vanilla.js loading')

ServerEvents.recipes(event => {
    if (global.SOA_PACKMODE !== 'expert') {
        console.info('[soa_ported] packmode_expert_vanilla.js: skipped (SOA_PACKMODE is not expert)')
        return
    }
    console.info('[soa_ported] packmode_expert_vanilla.js: registering recipes')

    // --- Removals (expert-only DE/Avaritia) ---
    const removeList = [
        'draconicevolution:draconium_core',            // GC: draconic_core
        'draconicevolution:wyvern_crafting_injector',  // GC: crafting_injector (FIXME: confirm 1.20 ID)
        'avaritia:infinity_catalyst',                  // GC: avaritia:resource
        'avaritia:crystal_matrix',                     // GC: avaritia:resource:1
        'draconicevolution:energy_core',               // GC: energy_storage_core
        // 'thermalexpansion:machine:3',  // TX 1.20 has no direct analog -> skip
        // 'enderio:item_material',       // EIO 1.20 IDs FIXME -> skip
        // 'enderio:item_material:51',    // same
        // 'actuallyadditions:block_misc:9', // AA absent
    ]
    removeList.forEach(out => event.remove({ output: out }))

    // --- Shaped (expert-only DE/Avaritia) ---

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
    event.shaped(
        Item.of('draconicevolution:energy_core', 1),
        ['IGI', 'CAC', 'IGI'],
        {
            I: '#forge:ingots/wyvern',
            G: '#forge:gears/wyvern', // FIXME: gear tag not verified
            C: 'draconicevolution:draconic_energy_core',
            A: 'draconicevolution:awakened_core'
        }
    ).id('soa_ported:energy_core_expert')

    console.info('[soa_ported] packmode_expert_vanilla.js: DONE')
})
