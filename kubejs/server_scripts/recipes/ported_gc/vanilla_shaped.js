// Ported from GreedyCraft: scripts/recipes/vanilla/crafting_table/shaped.zs
// 1.12.2 CraftTweaker -> 1.20.1 KubeJS
//
// 1415-line GC file with ~250 shaped entries. The vast majority depend on
// absent mods (see shapeless counterpart for the same list).
//
// This port covers the subset where ALL ingredients + outputs exist in SoA.
// Tag substitutions applied throughout:
//   <ore:shardCreative>  -> avaritia:neutron_pile     (soa_additions custom; FIXME verify — may need replacement)
//   <ore:netherStar>     -> minecraft:nether_star
//   <ore:scaleDragonEnder> -> FIXME no SoA analog; skip dragonegg recipe
//   <ore:blockDraconic(Metal)> -> #forge:storage_blocks/draconic
//   <ore:ingotDraconium>  -> #forge:ingots/draconium
//   <ore:ingotAsgardium>  -> #forge:ingots/asgardium
//   <ore:ingotSolarium>   -> #forge:ingots/solarium
//   <ore:ingotAeonsteel>  -> #forge:ingots/aeonsteel
//   <ore:blockCryonium>/<ore:ingotCryonium> -> #forge:*/cryonium
//   <ore:ingotChromasteel>/blockChromasteel -> #forge:*/chromasteel
//   <ore:ingotFusionMatrix> -> soa_additions:fusion_matrix_ingot
//   <tconevo:material>   -> soa_additions:fusion_matrix_ingot

console.info('[soa_ported] vanilla_shaped.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] vanilla_shaped.js: registering recipes')

    const shp = (out, grid, keys, name) =>
        event.shaped(out, grid, keys).id('soa_ported:shp_' + name)

    // totem_of_undying
    shp('minecraft:totem_of_undying',
        ['EGE', 'INI', ' B '],
        {
            E: 'minecraft:ender_eye',
            G: 'minecraft:golden_apple',
            I: '#forge:ingots/gold',
            N: 'minecraft:nether_star',
            B: '#forge:storage_blocks/gold'
        },
        'totem_of_undying')

    // elytra (wyvern_core + nether_star)
    shp('minecraft:elytra',
        ['PCP', 'PNP', 'P P'],
        {
            P: 'minecraft:paper',
            C: 'draconicevolution:wyvern_core',
            N: 'minecraft:nether_star'
        },
        'elytra')

    // Spawn eggs with EntityTag NBT. KubeJS accepts result with SpawnEgg NBT.
    const spawnEgg = (entityId, reagent, name) => {
        const shortName = entityId.indexOf(':') >= 0 ? entityId.split(':')[1] : entityId
        event.shaped(
            Item.of('minecraft:' + shortName + '_spawn_egg', 1),
            [' X ', 'XEX', ' X '],
            { X: reagent, E: 'minecraft:egg' }
        ).id('soa_ported:spawn_egg_' + name)
    }

    spawnEgg('minecraft:slime',    '#forge:slimeballs',  'slime')
    spawnEgg('minecraft:villager', 'minecraft:emerald',  'villager')
    spawnEgg('minecraft:blaze',    'minecraft:blaze_powder', 'blaze')
    spawnEgg('minecraft:cow',      'minecraft:leather',  'cow')
    spawnEgg('minecraft:enderman', 'minecraft:ender_pearl','enderman')
    spawnEgg('minecraft:ghast',    '#minecraft:glass_blocks', 'ghast_glass')

    // medal upgrades (bronze->silver->gold->pioneer->greedy)
    const medalUpgrade = (out, mat, name) =>
        event.shaped(out, ['XXX','XXX','XXX'], { X: mat }).id('soa_ported:' + name)
    medalUpgrade('soa_additions:pioneer_medal',              'soa_additions:ordinary_medal',              'pioneer_medal')
    medalUpgrade('soa_additions:greedy_medal',               'soa_additions:pioneer_medal',               'greedy_medal')
    medalUpgrade('soa_additions:bounty_hunter_medal_silver', 'soa_additions:bounty_hunter_medal_bronze',  'bh_silver_medal')
    medalUpgrade('soa_additions:bounty_hunter_medal',        'soa_additions:bounty_hunter_medal_silver',  'bh_gold_medal')

    // ancient tome chain
    medalUpgrade('soa_additions:ancient_tome_page', 'soa_additions:ancient_tome_fragment', 'tome_page')
    medalUpgrade('soa_additions:ancient_tome',      'soa_additions:ancient_tome_page',     'ancient_tome')

    // experience: ingot<-9 nugget, block<-9 ingot, compressed_block<-9 block
    medalUpgrade('soa_additions:experience_ingot', 'soa_additions:experience_nugget', 'xp_ingot')
    // experience_block output NOT registered in SoA — skip.
    // medalUpgrade('soa_additions:experience_block', 'soa_additions:experience_ingot',  'xp_block')
    // compressed_experience_block output NOT registered — skip.
    // medalUpgrade('soa_additions:compressed_experience_block', 'soa_additions:experience_block', 'xp_compressed_block')

    // experience_ingot <- 9x mysticalagriculture:experience_droplet (GC's xp_droplet renamed)
    medalUpgrade('soa_additions:experience_ingot', 'mysticalagriculture:experience_droplet', 'xp_ingot_from_droplets')

    // infernium_ingot <- 9x nugget; infernium_block <- 9x ingot
    medalUpgrade('soa_additions:infernium_ingot', 'soa_additions:infernium_nugget', 'infernium_ingot_from_nuggets')
    // soa_additions:infernium_block not in items.json (only infernium_ingot); skip block.
    // medalUpgrade('soa_additions:infernium_block', 'soa_additions:infernium_ingot', 'infernium_block')

    // cryonium_block <- 9x cryonium_ingot: FIXME block not registered, skip.

    // bloody sacrifice: raw_human_meat corners + tconstruct:edible (bacon/meef) edges + bone center
    // Two alternate layouts in GC. Port one using raw human meat + bone + kept secondary ingredient.
    // GC uses <tconstruct:edible:3> — TC3 1.20 drops edibles; substitute beef as the meat chunk.
    shp('soa_additions:bloody_sacrifice',
        ['RMR', 'MBM', 'RMR'],
        {
            R: 'soa_additions:raw_human_meat',
            M: 'minecraft:beef',              // FIXME: GC used tconstruct:edible:3 (bacon); no TC3 1.20 analog
            B: 'minecraft:bone'
        },
        'bloody_sacrifice_beef')

    // poopburger: wheat top/bottom, poop middle
    shp('soa_additions:poopburger',
        ['WWW', 'PPP', 'WWW'],
        { W: 'minecraft:wheat', P: 'soa_additions:poop' },
        'poopburger')

    // wood -> 4 charcoal (coal + log surround)
    shp(Item.of('minecraft:charcoal', 4),
        [' C ', 'CLC', ' C '],
        {
            C: '#forge:coals',
            L: '#minecraft:logs'
        },
        'wood_to_charcoal')

    // wither_bone (netherex absent; skip)

    // death_counter: tconstruct:pattern + bone  (TC3 1.20 has tconstruct:pattern)
    event.shapeless('soa_additions:death_counter',
        ['tconstruct:pattern', 'minecraft:bone']).id('soa_ported:death_counter')

    // nametag: string+gold_ingot+paper diagonal
    shp('minecraft:name_tag',
        ['  S', ' I ', 'P  '],
        { S: 'minecraft:string', I: '#forge:ingots/gold', P: 'minecraft:paper' },
        'name_tag')

    // fusion_matrix_block: 9x fusion_matrix_ingot  (soa_additions has ingot but NOT block; FIXME skip)
    // medalUpgrade('soa_additions:fusion_matrix_block', 'soa_additions:fusion_matrix_ingot', 'fusion_matrix_block')

    // SoA has forge:storage_blocks/modularium tag — 9x modularium_ingot -> block
    // Block item ID uncertain; skip.

    // aurora_heart: 8x rainbow_rune (quark) + mowzie ice_crystal center — quark
    // runes and mowziesmobs absent; skip.

    // bravery_certificate: uses asgardium/valkyrie/boundmetal/aeroite etc.
    // Partially portable: uses #forge:ingots/asgardium + nether_star + #forge:ingots/aeroite
    // + abyssalcraft:cingot (ABSENT) + valkyrie/boundmetal (draconicevolution tags);
    // skip due to cingot dependency.

    // death_coin: tconevo:metal:5 (soa_additions:* — which metal?) + awakened_core +
    // tome_fragment + bh_medal + neutron_pile. Too many unknowns; skip.

    // Skipped absent-mod shaped recipes (documented):
    //   tofustick, thaumcraft_nugget, dragonegg, creativehead, witherskull,
    //   difficultychanger_up*/down, oemod1/2, villager_vial (enderio),
    //   auto_gen ftbquests lootcrate tiers, splash_potion:lightspeed/flying/
    //   badluck/knockback_wand (custom NBT potions), mekanismgenerators:generator*,
    //   actuallyadditions:block_giant_chest*, simplesmelteryaccelerator,
    //   mekanism:machineblock:4 (teleporter), chancecubes:chance_cube,
    //   projecte:item.pe_harvest_god/soul_stone/body_stone/swrg/repair_talisman/
    //   interdiction_torch/nova_catalyst/nova_cataclysm, extrautils2:rainbowgenerator,
    //   appliedenergistics2:material (metadata), draconicevolution:grinder,
    //   randomthings:timeinabottle, ambience:ocarina/horn, hooked:hook,
    //   extrabotany:material (absent), thaumcraft:creative_flux_sponge,
    //   toolprogression:magic_mushroom, cyclicmagic:cable_wireless/battery,
    //   waystones:warp_stone, thermalfoundation:material:23/167,
    //   cfm:item_log, ae2wtlib/wit/wct/wft tiers, pvj:goon_bile,
    //   danknull:dank_null_panel tiers.
    console.info('[soa_ported] vanilla_shaped.js: DONE')
})
