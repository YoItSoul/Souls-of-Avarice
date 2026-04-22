// Ported from GreedyCraft: scripts/recipes/packmode/normal/vanilla/crafting.zs
// 1.12.2 CraftTweaker -> 1.20.1 KubeJS
//
// GC's normal-mode (casual/adventure) variants of the vanilla crafting overrides.
// Gated by global.SOA_PACKMODE (see _packmode.js); expert-mode counterpart lives
// in packmode_expert_vanilla.js.
//
// ID translations applied:
//   additions:greedycraft-<X>     -> soa_additions:<X>
//
// FIXMEs (absent / unknown IDs):
//   additions:greedycraft-compressed_experience_block   (not registered in SoA)
//   botania:fertilizer                                  (verify Botania 1.20 item id)
//   thaumcraft:salis_mundus                             (Thaumcraft absent)
//   <ore:ingotDreadium>                                 (AbyssalCraft absent; no dreadium)
//   <ore:manaDiamond>                                   (verify Botania 1.20 tag)
//   <ore:alloyElite>                                    (GC custom OreDict; no SoA equivalent)
//   twilightforest:ironwood/knightmetal/fiery_ingot     (verify TF 1.20 ids)
//   twilightforest:carminite / alpha_fur                (verify TF 1.20 ids)

console.info('[soa_ported] packmode_normal_vanilla.js loading')

ServerEvents.recipes(event => {
    if (global.SOA_PACKMODE !== 'normal') {
        console.info('[soa_ported] packmode_normal_vanilla.js: skipped (SOA_PACKMODE is not normal)')
        return
    }
    console.info('[soa_ported] packmode_normal_vanilla.js: registering recipes')

    // --- Removals (normal) ---
    const removeList = [
        'minecraft:enchanting_table',
        'soa_additions:blueprint',
        'soa_additions:twilight_gem',
        'soa_additions:ender_charm',
        'soa_additions:twilight_shield',
        'soa_additions:blueprint_shuriken'
    ]
    removeList.forEach(out => event.remove({ output: out }))

    // --- Shaped (normal) ---

    // enchanting_table: book + 2x diamond_block + red wool + 3x compressed_experience_block
    // GC: [[null, book, null], [diamond_block, wool:14, diamond_block], [cxb, cxb, cxb]]
    // wool:14 (1.12 meta) -> minecraft:red_wool
    // compressed_experience_block NOT registered in SoA -> FIXME, substitute experience_bottle as placeholder
    event.shaped(
        'minecraft:enchanting_table',
        [' B ', 'DWD', 'CCC'],
        {
            B: 'minecraft:book',
            D: '#forge:storage_blocks/diamond',
            W: 'minecraft:red_wool',
            C: 'minecraft:experience_bottle' // FIXME: GC used compressed_experience_block (not in SoA)
        }
    ).id('soa_ported:enchanting_table_normal')

    // blueprint: 8x light_blue_dye + pattern
    // <ore:dyeLightBlue> -> #forge:dyes/light_blue
    // <ore:pattern> was an OreDict covering paper/pattern items; use paper as canonical normal-mode pattern.
    event.shaped(
        'soa_additions:blueprint',
        ['DDD', 'DPD', 'DDD'],
        {
            D: '#forge:dyes/light_blue',
            P: 'minecraft:paper' // GC <ore:pattern>, paper is the closest stable 1.20 analog
        }
    ).id('soa_ported:blueprint_normal')

    // twilight_gem: 4x tree sapling + 2x fertilizer + 2x salis_mundus + mana_diamond (center)
    // Thaumcraft absent -> salis_mundus FIXME (skip).
    // event.shaped('soa_additions:twilight_gem', ['SBS','TMT','SBS'], {
    //     S: '#minecraft:saplings', B: 'botania:fertilizer',
    //     T: 'thaumcraft:salis_mundus',                 // FIXME absent
    //     M: '#forge:gems/mana_diamond'                 // FIXME verify Botania 1.20 tag
    // }).id('soa_ported:twilight_gem_normal')

    // ender_charm: 4x ender_eye + 2x durasteel_ingot + 2x dreadium_ingot + nether_star
    // GC: [[EE, I, EE], [IG, NS, IG], [EE, I, EE]] where I=Durasteel, IG=Dreadium, NS=nether_star
    // dreadium_ingot now registered in SoA per project memory.
    event.shaped(
        'soa_additions:ender_charm',
        ['EIE', 'GNG', 'EIE'],
        {
            E: 'minecraft:ender_eye',
            I: '#forge:ingots/durasteel',
            G: '#forge:ingots/dreadium',
            N: 'minecraft:nether_star'
        }
    ).id('soa_ported:ender_charm_normal')

    // twilight_shield: ironwood + knightmetal + fiery_ingot + alpha_fur + carminite
    // GC: [[IW, KM, IW], [FI, AF, FI], [null, CM, null]]
    event.shaped(
        'soa_additions:twilight_shield',
        ['IKI', 'FAF', ' C '],
        {
            I: 'twilightforest:ironwood_ingot',   // FIXME verify TF 1.20 id
            K: 'twilightforest:knightmetal_ingot',// FIXME verify
            F: 'twilightforest:fiery_ingot',       // FIXME verify
            A: 'twilightforest:alpha_fur',         // FIXME verify
            C: 'twilightforest:carminite'          // FIXME verify
        }
    ).id('soa_ported:twilight_shield_normal')

    // --- Shapeless (normal) ---

    // blueprint_shuriken: blueprint + ingotElite
    // <ore:alloyElite> is a GC-custom OreDict entry (mid-tier alloy). No SoA equivalent. FIXME skip.
    // event.shapeless('soa_additions:blueprint_shuriken', ['soa_additions:blueprint', '#forge:ingots/elite_alloy'])

    console.info('[soa_ported] packmode_normal_vanilla.js: DONE')
})
