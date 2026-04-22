// Ported from GreedyCraft: scripts/recipes/vanilla/crafting_table/shapeless.zs
// 1.12.2 CraftTweaker -> 1.20.1 KubeJS
//
// 557-line GC file with ~140 shapeless entries. Many depend on absent mods:
//   openblocks, extrautils2, extracells, appliedenergistics2:material:*
//   (metadata scheme), darkutils, netherex, cyclicmagic, akashictome, abyssalcraft,
//   scalinghealth, bountifulbaubles, storagedrawers, actuallyadditions, rftools,
//   oeintegration, aether_legacy, astralsorcery, magicfeather, touhou_little_maid,
//   projectex, charm, tofucraft, treasure2, inventorypets, ae2wtlib/wit/wct/wft,
//   thermalfoundation:material:* (metadata scheme), tconevo, mekanism, thaumadditions,
//   birdsfoods, eternalsingularity, randomthings, lavawaderbauble, danknull, mca,
//   prefab, biomesoplenty, mowziesmobs, ftbquests, patchouli, chancecubes, contenttweaker.
//
// This port covers the subset where ALL ingredients + outputs exist in SoA.
// Absent-mod lines are preserved as comments for future re-enablement.

console.info('[soa_ported] vanilla_shapeless.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] vanilla_shapeless.js: registering recipes')

    const shl = (out, ins, name) =>
        event.shapeless(out, ins).id('soa_ported:shl_' + name)

    // web -> 2x string
    shl(Item.of('minecraft:string', 2), ['minecraft:cobweb'], 'web_to_string')

    // rotten_flesh x4 -> leather  (charm's rotten_flesh_block recipe variant
    // is skipped; but this base conversion is portable)
    shl('minecraft:leather',
        ['minecraft:rotten_flesh','minecraft:rotten_flesh','minecraft:rotten_flesh','minecraft:rotten_flesh'],
        'rotten_flesh_to_leather')

    // logWood x4 -> 4x crafting_table (mirrors base recipe intent)
    shl(Item.of('minecraft:crafting_table', 4),
        ['#minecraft:logs','#minecraft:logs','#minecraft:logs','#minecraft:logs'],
        'crafting_table_from_logs')

    // glass_bottle + lucky_clover -> potion:luck
    // GC uses <minecraft:potion>.withTag({Potion:"minecraft:luck"})
    shl(Item.of('minecraft:potion').withNBT({Potion: 'minecraft:luck'}),
        ['minecraft:glass_bottle','soa_additions:lucky_clover'],
        'luck_potion')

    // glass_bottle + water_bucket -> potion:water
    shl(Item.of('minecraft:potion').withNBT({Potion: 'minecraft:water'}),
        ['minecraft:glass_bottle','minecraft:water_bucket'],
        'water_potion')

    // experience compression: block(9) -> compressed_block, ingot(9) -> block,
    // nugget(9) -> ingot, ma:experience_droplet -> nugget
    // FIXME: experience_block AND compressed_experience_block NOT registered in SoA — skip both.
    // shl(Item.of('soa_additions:experience_block', 9), ['soa_additions:compressed_experience_block'], 'xp_decompress_block')
    // shl(Item.of('soa_additions:experience_ingot', 9), ['soa_additions:experience_block'], 'xp_decompress_ingot')
    shl(Item.of('soa_additions:experience_nugget', 9), ['soa_additions:experience_ingot'], 'xp_decompress_nugget')
    shl('soa_additions:experience_nugget', ['mysticalagriculture:experience_droplet'], 'xp_droplet_to_nugget')

    // tconstruct:tooltables -> crafting_table (downgrade)
    // TC3 1.20 has no tooltables item; skip.
    // shl('minecraft:crafting_table', ['tconstruct:tooltables'], 'tools_to_bench')

    // twig / sapling -> stick
    shl('minecraft:stick', ['#forge:rods/wooden'], 'twig_to_stick')
    // Note: forge:rods/wooden = sticks; GC's <ore:twigs> maps to the
    // forge:rods/wooden tag in 1.20.

    // medals chain (bronze -> silver -> gold, via 9x shapeless)
    shl(Item.of('soa_additions:ordinary_medal', 9), ['soa_additions:pioneer_medal'], 'rev_pioneer_medal')
    shl(Item.of('soa_additions:pioneer_medal', 9), ['soa_additions:greedy_medal'], 'rev_greedy_medal')
    shl(Item.of('soa_additions:bounty_hunter_medal_silver', 9), ['soa_additions:bounty_hunter_medal'], 'rev_bh_gold_medal')
    shl(Item.of('soa_additions:bounty_hunter_medal_bronze', 9), ['soa_additions:bounty_hunter_medal_silver'], 'rev_bh_silver_medal')

    // ancient tome chain (revs)
    shl(Item.of('soa_additions:ancient_tome_page', 9),     ['soa_additions:ancient_tome'], 'rev_ancient_tome')
    shl(Item.of('soa_additions:ancient_tome_fragment', 9), ['soa_additions:ancient_tome_page'], 'rev_ancient_tome_page')

    // Metal ingot block-reverses (uncraft block -> 9 ingots). Only enable where
    // soa_additions has both the ingot AND a #forge:storage_blocks/<metal> tag.
    // #forge:storage_blocks/modularium exists (per tags.json); others unverified.
    // Guarded skip:
    // shl(Item.of('soa_additions:modularium_ingot', 9), [Ingredient.of('#forge:storage_blocks/modularium')], 'rev_modularium')

    // AE2 material tier compressions (35->36->37->38): AE2 1.20 uses named
    // items (fluix_crystal/fluix_dust/sky_dust/etc.) — NOT portable via the
    // 1.12 metadata scheme. Skipped.

    // Mysticalagriculture crafting tier chain (inferium->prudentium->tertium
    // ->imperium->supremium->insanium). In 1.20 these have named items
    // (mysticalagriculture:inferium_essence, prudentium_essence, etc.) and
    // recipes are already registered by MA itself. GC's 6x compression is
    // the same stock recipe. Skip to avoid duplicate registration.

    // mysticalagriculture:crafting:32 = soulium_essence in 1.20. Hybrid
    // recipes (soulium + inferium = soulstone_essence etc.) — MA registers
    // these natively; skip.

    // Mystical Agriculture storage tier upgrades (storage:1..4 -> storage:2..5
    // with master_infusion_crystal). MA 1.20 registers these; skip duplicate.

    // Thaumadditions plate compressions (adaminite/mithminite/mithrillium
    // plate <- 6x ingot). GC uses <thaumadditions:*_plate> outputs absorbed
    // into soa_additions; plate items may not be registered. FIXME.
    // shl(Item.of('soa_additions:adaminite_plate', 1), Array(6).fill('soa_additions:adaminite_ingot'), 'plate_adaminite')
    // shl(Item.of('soa_additions:mithminite_plate', 1), Array(6).fill('soa_additions:mithminite_ingot'), 'plate_mithminite')
    // shl(Item.of('soa_additions:mithrillium_plate', 1), Array(6).fill('soa_additions:mithrillium_ingot'), 'plate_mithrillium')

    // projecte:transmutation_table <- projectex:stone_table: projectex absent.
    // emc_tablet_clear_nbt: 1.20 projecte exposes transmutation_tablet; the
    // tag-clearing recipe is out-of-scope for shapeless port (would need
    // modifyResult). Skip.

    // extracells/ae2wtlib/simplesmeltery accelerator/slimeball_convert:
    // slimeball_convert is portable — #forge:slimeballs -> minecraft:slime_ball
    shl('minecraft:slime_ball', ['#forge:slimeballs'], 'slimeball_convert')

    // pebble/plant_fibre/grass_string/crude_hatchet primitives
    shl('soa_additions:pebble', ['#forge:pebble'], 'pebble')  // FIXME: tag name if different
    shl('soa_additions:grass_string',
        ['#forge:plant_fibres','#forge:plant_fibres','#forge:plant_fibres'],
        'grass_string')   // FIXME: tag verify
    shl('soa_additions:crude_hatchet',
        ['soa_additions:pebble','#forge:string','#forge:rods/wooden'],
        'crude_hatchet')

    // neutronium_combination: protonium + electronium -> 2x avaritia:neutron_ingot
    shl(Item.of('avaritia:neutron_ingot', 2),
        ['#forge:ingots/protonium','#forge:ingots/electronium'],
        'neutronium_combination')

    // neutronium_block_combination: protonium_block + electronium_block -> 2x avaritia:neutron
    // (Re-Avaritia 1.20 names the block item `avaritia:neutron`; the `_block` suffix is 1.12-only.)
    shl(Item.of('avaritia:neutron', 2),
        ['#forge:storage_blocks/protonium','#forge:storage_blocks/electronium'],
        'neutron_block_combination')

    // fusionmatrix block <- fusion_matrix_ingot x9 (GC: tconevo:material * 9 <- ore:blockFusionMatrix)
    // FIXME: fusion_matrix_block not in items.json; skip uncompress.

    // Skipped absent-mod recipes (documented):
    // thermal_shapeless_1..4, compressed_stone_convert*, oebook, auto_gen_1334582590
    //   (avaritia:block_resource:1 * 64 <- infinity_block_block), ftbquests:lootcrate*,
    //   auto_gen_747705352 (philosopher_stone iron transmute), scalinghealth:heartdust,
    //   auto_gen_1296047035 (draconic_potion), auto_gen_-2147158797 (blight_potion),
    //   storagedrawers:upgrade_creative, projectex:energy_link, patchouli:guide_book,
    //   quark:black_ash cycles, astralsorcery:blockmarble, chisel, quark:marble,
    //   forge:bucketfilled resin/binnie variants, actuallyadditions:item_misc*,
    //   enderio:item_broken_spawner, biomesoplenty:plant_0, tconstruct:cast/arrow_shaft,
    //   treasure2:*_key, bountifulbaubles:trinketbrokenheart, inventorypets,
    //   mca:rose_gold_dust, randomthings:obsidianwaterwalkingboots, lavawaderbauble:*,
    //   openblocks:elevator_rotating, harvestcraft:flaxitem, birdsfoods:*,
    //   thaumcraft:primordial_pearl_fix, charm/thaumcraft flesh_block swaps,
    //   touhou_little_maid:gashapon_coin, mowziesmobs:earth_talisman,
    //   ambience:ocarina/horn, hooked:hook, pvj:goon_bile, cfm:item_log,
    //   ae2wtlib:wut_creative.
    console.info('[soa_ported] vanilla_shapeless.js: DONE')
})
