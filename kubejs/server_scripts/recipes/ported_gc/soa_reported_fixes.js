// Faithful re-ports of GreedyCraft recipes that were missing or broken in the
// original SoA port. Generated + verified by tools/audit/recipes; every item id
// checked against soa_exports. Shapeless where GC used shapeless (grid layout
// irrelevant). See PARITY_REPORT.md for provenance.

console.info('[soa_ported] soa_reported_fixes.js loading')

ServerEvents.recipes(event => {

    // ---- Rose Gold Dust (mca) ----
    // GC: RecipeUtil.addShapeless("rose_gold_dust", <mca:rose_gold_dust>*3,
    //     [<ore:dustGold>, <ore:dustCopper>, <ore:dustSilver>])
    event.shapeless(Item.of('mca:rose_gold_dust', 3),
        ['#forge:dusts/gold', '#forge:dusts/copper', '#forge:dusts/silver'])
        .id('soa_fix:rose_gold_dust')

    // =====================================================================
    // Mystical Agriculture essence tiers — GreedyCraft economy (NOT native).
    //
    // Native MA 1.20 tier-up = 4 lower essence + 1 (reusable) infusion crystal
    // in a plus shape, one-way only. GreedyCraft instead uses 6 lower essence
    // (shapeless, no crystal) AND adds a downgrade (1 higher -> 4 lower).
    // For 1:1 parity we remove the 4 native core tier recipes and add GC's.
    // (Insanium tier already has both directions natively; we replace it too.)
    //
    // 1.12 meta -> 1.20 id:  crafting:0=inferium, :1=prudentium,
    //   :2=tertium (GC "Intermedium"), :3=imperium (GC "Superium"),
    //   :4=supremium, mysticalagradditions:insanium_essence = insanium.
    // =====================================================================
    ;[
        'mysticalagriculture:prudentium_essence',
        'mysticalagriculture:tertium_essence',
        'mysticalagriculture:imperium_essence',
        'mysticalagriculture:supremium_essence',
        'mysticalagradditions:insanium_essence',
        'mysticalagradditions:insanium_essence_uncraft',
    ].forEach(id => event.remove({ id: id }))

    const MA_TIERS = [
        'mysticalagriculture:inferium_essence',    // crafting:0
        'mysticalagriculture:prudentium_essence',  // crafting:1
        'mysticalagriculture:tertium_essence',     // crafting:2
        'mysticalagriculture:imperium_essence',    // crafting:3
        'mysticalagriculture:supremium_essence',   // crafting:4
        'mysticalagradditions:insanium_essence',   // insanium
    ]
    const MA_NAME = ['inferium', 'prudentium', 'tertium', 'imperium', 'supremium', 'insanium']
    for (let i = 0; i < MA_TIERS.length - 1; i++) {
        // GC ma_essence_i : 6x lower -> 1 higher  (shapeless, no crystal)
        event.shapeless(MA_TIERS[i + 1], Array(6).fill(MA_TIERS[i]))
            .id(`soa_fix:ma_up_${MA_NAME[i + 1]}`)
        // GC ma_essence_i_rev : 1 higher -> 4 lower
        event.shapeless(Item.of(MA_TIERS[i], 4), [MA_TIERS[i + 1]])
            .id(`soa_fix:ma_down_${MA_NAME[i + 1]}`)
    }

    // ---- Growth Accelerator ----
    // GC had a SINGLE 'mysticalagriculture:growth_accelerator'; MA 1.20 split it
    // into 5 tiers. GC's recipe used imperium+supremium essence blocks, so we
    // map it to the SUPREMIUM tier (matches the cost). GC grid (storage:3 =
    // imperium essence block, storage:4 = supremium essence block, center =
    // cytosinite block):  ABA / BCB / ABA.
    event.shaped(Item.of('mysticalagriculture:supremium_growth_accelerator', 2),
        ['ABA', 'BCB', 'ABA'],
        { A: 'mysticalagriculture:imperium_block',
          B: 'mysticalagriculture:supremium_block',
          C: 'soa_additions:cytosinite_block' })
        .id('soa_fix:supremium_growth_accelerator')

    // ---- NOT_PORTED gaps re-authored from GreedyCraft source ----

    // GC "xnet_cable": 32 network cables from redstone + copper (1.12 NBT colour
    // became per-colour items in 1.20 — blue is XNet's own default recipe colour)
    event.shaped(Item.of('xnet:netcable_blue', 32),
        [' R ', 'RCR', ' R '],
        { R: '#forge:dusts/redstone', C: '#forge:ingots/copper' })
        .id('soa_fix:xnet_netcable')

    // GC "gel_torch": 16 torches from a slimeball + stick
    event.shaped(Item.of('minecraft:torch', 16),
        ['G', 'S'],
        { G: '#forge:slimeballs', S: 'minecraft:stick' })
        .id('soa_fix:gel_torch')

    // GC "auto_gen_-326012325" (extracells): 256k ME storage component from 4x 64k
    event.shapeless('ae2:cell_component_256k',
        ['ae2:cell_component_64k', 'ae2:cell_component_64k',
         'ae2:cell_component_64k', 'ae2:cell_component_64k'])
        .id('soa_fix:ae2_256k_component')

    // GC "ender_casing": Actually Additions Ender Casing
    event.shaped('actuallyadditions:ender_casing',
        ['ABA', 'CDC', 'ABA'],
        { A: '#forge:ingots/enderium', B: '#forge:ingots/fusion_matrix',
          C: '#forge:ingots/durasteel', D: 'actuallyadditions:black_quartz_block' })
        .id('soa_fix:ender_casing')

    // GC "tofustick": Tofu Staff
    event.shaped('tofucraft:tofustick',
        ['ABA', 'ACA', ' D '],
        { A: 'minecraft:gold_block', B: 'tofucraft:tofugem',
          C: 'tofucraft:blocktofumomen', D: 'minecraft:stick' })
        .id('soa_fix:tofustick')

    // GC "difficultychanger_down": ScalingHealth Enchanted Heart
    // (1.12 scalinghealth:heartcontainer -> 1.20 scalinghealth:heart_crystal)
    event.shaped('scalinghealth:enchanted_heart',
        ['AAA', 'ABA', ' A '],
        { A: '#forge:ingots/gold', B: 'scalinghealth:heart_crystal' })
        .id('soa_fix:enchanted_heart')

    // GC "difficultychanger_up": ScalingHealth Cursed Heart. GC used netherex
    // Wither Bone / tconstruct Necrotic Bone (both absent); ported as the new
    // soa_additions:wither_bone (wither-skeleton drop). Requires a mod rebuild.
    event.shaped('scalinghealth:cursed_heart',
        [' A ', 'ABA', 'AAA'],
        { A: 'soa_additions:wither_bone', B: 'scalinghealth:heart_crystal' })
        .id('soa_fix:cursed_heart')

    // GC "terrestrial_artifact": 9 gems -> Terrestrial Artifact.
    // (forge:gems/{topaz,amber,peridot,malachite,tanzanite} tags added in
    //  kubejs/data/forge/tags/items/gems/.)
    event.shapeless('soa_additions:terrestrial_artifact',
        ['#forge:gems/ruby', '#forge:gems/topaz', '#forge:gems/amber',
         '#forge:gems/peridot', '#forge:gems/malachite', '#forge:gems/sapphire',
         '#forge:gems/tanzanite', '#forge:gems/amethyst', '#forge:gems/scarlite'])
        .id('soa_fix:terrestrial_artifact')

    // Gaiasteel cleanup: the Smithery material ingot (gaiasteel_ingot) had no
    // recipe. Bridge it 1:1 with the terra-plate output (gaia_steel_ingot) so
    // both are obtainable and feed the tool material.
    event.shapeless('soa_additions:gaiasteel_ingot', ['soa_additions:gaia_steel_ingot'])
        .id('soa_fix:gaiasteel_from_gaia_steel')
    event.shapeless('soa_additions:gaia_steel_ingot', ['soa_additions:gaiasteel_ingot'])
        .id('soa_fix:gaia_steel_from_gaiasteel')

    // GC "growth_ring": Actually Additions Ring of Growth (item_misc:6 = "Ring").
    event.shaped('actuallyadditions:ring_of_growth',
        ['ABA', 'BCB', 'ABA'],
        { A: 'soa_additions:creative_shard', B: 'minecraft:wheat_seeds', C: 'actuallyadditions:ring' })
        .id('soa_fix:ring_of_growth')

    // GC "black_quartz_block": 4 Black Quartz -> Block of Black Quartz (cheaper than AA's native 9).
    event.shapeless('actuallyadditions:black_quartz_block',
        ['actuallyadditions:black_quartz', 'actuallyadditions:black_quartz',
         'actuallyadditions:black_quartz', 'actuallyadditions:black_quartz'])
        .id('soa_fix:black_quartz_block')

    // GC cyclicmagic:block_miner -> cyclic:miner. GC gates it behind a creative
    // shard (endgame), replacing Cyclic's cheap native recipe. removeAndAdd.
    // iron pickaxe (top) + ultimate circuits + machine frame + creative shard.
    event.remove({ output: 'cyclic:miner' })
    event.shaped('cyclic:miner',
        [' P ', 'CFC', ' S '],
        { P: 'minecraft:iron_pickaxe', C: '#forge:circuits/ultimate',
          F: 'rftoolsbase:machine_frame', S: 'soa_additions:creative_shard' })
        .id('soa_ported:block_miner_gc')

    // GC cyclicmagic:block_user -> cyclic:user ("Item User"). removeAndAdd.
    // aeonsteel blocks frame + dispenser + ultimate alloys/circuit + redstone clock.
    event.remove({ output: 'cyclic:user' })
    event.shaped('cyclic:user',
        ['ADA', 'LCL', 'AKA'],
        { A: '#forge:storage_blocks/aeonsteel', D: 'minecraft:dispenser',
          L: '#forge:alloys/ultimate', C: '#forge:circuits/ultimate', K: 'cyclic:clock' })
        .id('soa_ported:block_user_gc')

    // GC additions:greedycraft-stainless_steel_ball -> soa_additions:stainless_steel_ball.
    // Item exists (was wrongly called absent). GC has two recipes; this is the
    // crafting one (5 stainless steel ingots in a plus -> 24 balls), fully 1:1.
    // (The GC casting variant uses smithery:molten_stainless_steel, auto-gen via Smithery.)
    event.shaped(Item.of('soa_additions:stainless_steel_ball', 24),
        [' I ', 'III', ' I '],
        { I: '#forge:ingots/stainless_steel' })
        .id('soa_ported:stainless_steel_ball_gc')

    // GC actuallyadditions:item_more_damage_lens (Lens of the Killer). removeAndAdd:
    // aeonsteel + crimsonite frame around a Lens of Certain Death.
    event.remove({ output: 'actuallyadditions:lens_of_the_killer' })
    event.shaped('actuallyadditions:lens_of_the_killer',
        ['ACA', 'CLC', 'ACA'],
        { A: '#forge:ingots/aeonsteel', C: '#forge:ingots/crimsonite',
          L: 'actuallyadditions:lens_of_certain_death' })
        .id('soa_ported:lens_of_the_killer_gc')

    // GC actuallyadditions:item_misc:8 (Advanced Coil): Basic Coil + durasteel ingot.
    event.shapeless('actuallyadditions:advanced_coil',
        ['actuallyadditions:basic_coil', '#forge:ingots/durasteel'])
        .id('soa_ported:advanced_coil_gc')

    // GC actuallyadditions:item_mining_lens (Lens of the Miner). removeAndAdd:
    // aeonsteel + chromium frame around a plain Lens.
    event.remove({ output: 'actuallyadditions:lens_of_the_miner' })
    event.shaped('actuallyadditions:lens_of_the_miner',
        ['ACA', 'CLC', 'ACA'],
        { A: '#forge:ingots/aeonsteel', C: '#forge:ingots/chromium',
          L: 'actuallyadditions:lens' })
        .id('soa_ported:lens_of_the_miner_gc')

    // ==== Defiled Lands Reforged ports (mod added 2026-07-23) ====
    // GC scripts/recipes referencing defiledlands, now unblocked by the 1.20.1 backport.

    // GC "idol_of_sorrow" removeAndAdd: Gaia Spirit (ore:eternalLifeEssence) top,
    // ravaging ingots + scarlite block middle, umbrium ingot bottom.
    event.remove({ output: 'defiledlands:idol_sorrow' })
    event.shaped('defiledlands:idol_sorrow',
        [' G ', 'RSR', ' U '],
        { G: 'botania:life_essence', R: '#forge:ingots/ravaging',
          S: 'defiledlands:scarlite_block', U: 'defiledlands:umbrium_ingot' })
        .id('soa_ported:idol_of_sorrow_gc')

    // GC "conjuring_altar" addShaped: umbrium frame + scarlite block core.
    event.remove({ output: 'defiledlands:conjuring_altar' })
    event.shaped('defiledlands:conjuring_altar',
        ['USU', 'UUU'],
        { U: 'defiledlands:umbrium_ingot', S: 'defiledlands:scarlite_block' })
        .id('soa_ported:conjuring_altar_gc')

    // GC "calling_stone" addShaped: blaze powder corners + scarlite edges + Black Heart.
    event.remove({ output: 'defiledlands:calling_stone' })
    event.shaped('defiledlands:calling_stone',
        ['BSB', 'SHS', 'BSB'],
        { B: 'minecraft:blaze_powder', S: '#forge:gems/scarlite',
          H: 'defiledlands:black_heart' })
        .id('soa_ported:calling_stone_gc')

    // Draconic Additions "Chaotic Energy Core" — DA 1.20 dropped the item, so it's
    // minted as soa_additions:chaotic_energy_core (GC texture). Recipe verbatim from
    // DA 1.12 source DARecipes.java, NORMAL variant (GC shipped no DA config -> mod
    // default): catalyst Draconic Energy Core, tier 2 = DRACONIC, E=1,000,000,000,
    // 4x Large Chaos Fragment + 4x Block of Redstone.
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: { item: 'draconicevolution:draconic_energy_core' },
        ingredients: [
            { item: 'draconicevolution:large_chaos_frag' },
            { item: 'draconicevolution:large_chaos_frag' },
            { item: 'draconicevolution:large_chaos_frag' },
            { item: 'draconicevolution:large_chaos_frag' },
            { item: 'minecraft:redstone_block' },
            { item: 'minecraft:redstone_block' },
            { item: 'minecraft:redstone_block' },
            { item: 'minecraft:redstone_block' }
        ],
        result: { item: 'soa_additions:chaotic_energy_core' },
        tier: 'DRACONIC',
        total_energy: 1000000000
    })

    // GC "Coalescence Matrix Block" (additions:greedycraft-fusion_matrix_block):
    // 9x Coalescence Matrix (tconevo:material) -> block. SOA's native ingot<->block
    // pair stays; this restores GC's actual crafting path.
    event.shaped('soa_additions:fusion_matrix_block',
        ['CCC', 'CCC', 'CCC'],
        { C: 'tconevo:coalescence_matrix' })
        .id('soa_ported:fusion_matrix_block_from_coalescence')

    // ==== Forestry: Community Edition + Project: Vibrant Journeys (installed 2026-07-24) ====

    // GC "wood_pile": X-shape of 5 logs -> Wood Pile (1.20 CE id: forestry:log_pile)
    event.shaped('forestry:log_pile',
        ['L L', ' L ', 'L L'],
        { L: '#minecraft:logs' })
        .id('soa_ported:wood_pile_gc')

    // [SoA-removed: PVJ pulled back out (rendering issues, user call 2026-07-24);
    //  pinecone + short-grass conversions went with it. Forestry log_pile stays.]

    // GC "auto_gen_462958864": Basic Energy EMC Link (projectex:energy_link ->
    // projectexpansion:basic_emc_link). Unblocked by Project Expansion + the
    // minted Block of Matter (world-transmuted from valoria awakened void block).
    event.shapeless('projectexpansion:basic_emc_link',
        ['soa_additions:matter_block', 'rftoolsbase:machine_frame',
         '#forge:ingots/protonium', '#forge:ingots/electronium'])
        .id('soa_ported:energy_link_gc')

    // GC "tofu_machine_case": ring of 8 Metal Tofu Blocks -> 8x Tofu Machine Case
    // (1.12 tofucraft:tf_machine_case; Reload 1.20 dropped the item -> minted in soa_additions).
    event.shaped(Item.of('soa_additions:tf_machine_case', 8),
        ['MMM', 'M M', 'MMM'],
        { M: 'tofucraft:blocktofumetal' })
        .id('soa_ported:tofu_machine_case_gc')
})
