// Ported from GreedyCraft: scripts/recipes/mods/bloodmagic.zs
// 1.12.2 CraftTweaker -> 1.20.1 KubeJS
// IDs verified via soa_exports/items.json.
//
// BloodMagic 1.20.1 recipe types (confirmed in data/bloodmagic/recipes/):
//   TartaricForge -> bloodmagic:soulforge
//     schema: { input0..3, output, minimumDrain, drain }
//   BloodAltar    -> bloodmagic:altar
//     schema: { input, output, upgradeLevel, altarSyphon, consumptionRate, drainRate }
//   AlchemyArray  -> bloodmagic:array
//     schema: { baseinput, addedinput, output, texture }
//
// BM 1.20 identity rewrites (from items.json):
//   soul_gem:0/1/2/3  -> soulgempetty/lesser/common/greater (no grand/etheral tier exists)
//   blood_orb NBT tiers -> weakbloodorb/apprenticebloodorb/magicianbloodorb/
//                          masterbloodorb/archmagebloodorb  (NO transcendent)
//   blood_shard:0     -> weakbloodshard; blood_shard:1 does NOT exist
//   slate:0/1/2/3     -> blankslate/reinforcedslate/infusedslate/demonslate
//   component:8       -> reagentbinding
//   decorative_brick:2 -> largebloodstonebrick (FIXME: best-guess)
//
// tconevo metals use forge tags (authoritative per
// data/soa_additions/recipes/tools/materials/<name>/melting_ingot.json):
//   metal:30 -> #forge:ingots/sentient_metal
//   metal:25 -> #forge:ingots/bound_metal

console.info('[soa_ported] bloodmagic.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] bloodmagic.js: registering recipes');

    // ---- TartaricForge / Soulforge ----

    // TartaricForge.removeRecipe([<bloodmagic:soul_gem>, <minecraft:iron_X>]);
    ['iron_sword','iron_axe','iron_pickaxe','iron_shovel'].forEach(tool => {
        event.remove({ type: 'bloodmagic:soulforge', input: ['bloodmagic:soulgempetty', 'minecraft:' + tool] })
    })

    // for item in <ore:string>.items { TartaricForge.removeRecipe([<minecraft:bow>, <bloodmagic:soul_gem:1>, item, item]); }
    event.remove({ type: 'bloodmagic:soulforge', input: ['minecraft:bow', 'bloodmagic:soulgemlesser', '#forge:string', '#forge:string'] })

    // TartaricForge.removeRecipe([<bloodmagic:soul_gem>, <tconevo:material>]);
    event.remove({ type: 'bloodmagic:soulforge', input: ['bloodmagic:soulgempetty', 'soa_additions:fusion_matrix_ingot'] })

    // TartaricForge.addRecipe(<tconevo:metal:30>, [<bloodmagic:soul_gem>, <additions:stainless_steel_ingot>], 2.0, 2.0);
    // tconevo:metal:30 = Sentient Ingot -> forge tag #forge:ingots/sentient_metal
    event.custom({
        type: 'bloodmagic:soulforge',
        input0: { item: 'bloodmagic:soulgempetty' },
        input1: { item: 'soa_additions:stainless_steel_ingot' },
        input2: { item: 'minecraft:air' },
        input3: { item: 'minecraft:air' },
        output: { tag: 'forge:ingots/sentient_metal', count: 1 }, // FIXME: output may need item, not tag; check BM soulforge JSON
        minimumDrain: 2.0,
        drain: 2.0
    })


    // ---- BloodAltar ----

    // BloodAltar.removeRecipe(<minecraft:redstone_block>);
    event.remove({ type: 'bloodmagic:altar', output: 'minecraft:redstone_block' })
    // BloodAltar.removeRecipe(<minecraft:diamond>);
    event.remove({ type: 'bloodmagic:altar', output: 'minecraft:diamond' })
    // BloodAltar.removeRecipe(<minecraft:gold_block>);
    event.remove({ type: 'bloodmagic:altar', output: 'minecraft:gold_block' })
    // BloodAltar.removeRecipe(<tconevo:material>);
    event.remove({ type: 'bloodmagic:altar', output: 'soa_additions:fusion_matrix_ingot' })
    // BloodAltar.removeRecipe(<bloodmagic:decorative_brick:2>);
    event.remove({ type: 'bloodmagic:altar', output: 'bloodmagic:largebloodstonebrick' }) // FIXME: verify 1.12 meta=2 target

    // BloodAltar.addRecipe(<bloodmagic:blood_orb>.withTag({orb: "bloodmagic:weak"}), <minecraft:emerald>, 0, 2000, 40, 40);
    event.custom({
        type: 'bloodmagic:altar',
        input:  { item: 'minecraft:emerald' },
        output: { item: 'bloodmagic:weakbloodorb' },
        upgradeLevel: 0, altarSyphon: 2000, consumptionRate: 40, drainRate: 40
    })
    // BloodAltar.addRecipe(<bloodmagic:blood_orb>.withTag({orb: "bloodmagic:apprentice"}), <astralsorcery:itemcraftingcomponent:1>, 1, 5000, 80, 80);
    // astralsorcery absent -> recipe NOT ported.
    // BloodAltar.addRecipe(<bloodmagic:blood_orb>.withTag({orb: "bloodmagic:magician"}), <additions:greedycraft-compressed_experience_block>, 2, 25000, 100, 100);
    // FIXME: compressed_experience_block not registered in SoA -> recipe NOT ported.
    // BloodAltar.addRecipe(<tconevo:metal:25>, <additions:durasteel_ingot>, 2, 10000, 200, 200);
    // tconevo:metal:25 = Bound Ingot -> tag #forge:ingots/bound_metal
    event.custom({
        type: 'bloodmagic:altar',
        input:  { item: 'soa_additions:durasteel_ingot' },
        output: { tag: 'forge:ingots/bound_metal' }, // FIXME: output may need item form
        upgradeLevel: 2, altarSyphon: 10000, consumptionRate: 200, drainRate: 200
    })
    // BloodAltar.addRecipe(<twilightforest:fiery_blood>, <minecraft:glass_bottle>, 3, 7000, 120, 120);
    event.custom({
        type: 'bloodmagic:altar',
        input:  { item: 'minecraft:glass_bottle' },
        output: { item: 'twilightforest:fiery_blood' },
        upgradeLevel: 3, altarSyphon: 7000, consumptionRate: 120, drainRate: 120
    })
    // BloodAltar.addRecipe(<bloodmagic:decorative_brick:2>, <avaritia:block_resource:2>, 4, 15000, 140, 140);
    event.custom({
        type: 'bloodmagic:altar',
        input:  { item: 'avaritia:crystal_matrix' }, // FIXME: block_resource:2 best-guess
        output: { item: 'bloodmagic:largebloodstonebrick' },
        upgradeLevel: 4, altarSyphon: 15000, consumptionRate: 140, drainRate: 140
    })
    // BloodAltar.addRecipe(<bloodmagic:blood_orb>.withTag({orb: "bloodmagic:transcendent"}), <draconicevolution:wyvern_core>, 5, 300000, 250, 250);
    // transcendent orb tier DOES NOT EXIST in BM 1.20.1 -> use archmage (closest highest tier).
    event.custom({
        type: 'bloodmagic:altar',
        input:  { item: 'draconicevolution:wyvern_core' },
        output: { item: 'bloodmagic:archmagebloodorb' }, // FIXME: transcendent -> archmage substitution
        upgradeLevel: 5, altarSyphon: 300000, consumptionRate: 250, drainRate: 250
    })
    // BloodAltar.addRecipe(<additions:greedycraft-true_blood_sigil>, <additions:greedycraft-blood_sigil>, 5, 150000, 200, 200);
    event.custom({
        type: 'bloodmagic:altar',
        input:  { item: 'soa_additions:blood_sigil' },
        output: { item: 'soa_additions:true_blood_sigil' },
        upgradeLevel: 5, altarSyphon: 150000, consumptionRate: 200, drainRate: 200
    })
    // BloodAltar.addRecipe(<thaumcraft:curio:3>, <abyssalcraft:shadowgem>, 5, 80000, 150, 150);
    // thaumcraft + abyssalcraft absent -> NOT ported.
    // BloodAltar.addRecipe(<thaumcraft:curio:4>, <aether_legacy:ambrosium_shard>, 5, 80000, 150, 150);
    // thaumcraft absent -> NOT ported.
    // BloodAltar.addRecipe(<additions:greedycraft-pearl_of_knowledge>, <botania:manaresource:1>, 5, 250000, 250, 250);
    event.custom({
        type: 'bloodmagic:altar',
        input:  { item: 'botania:mana_pearl' }, // manaresource:1 -> mana_pearl
        output: { item: 'soa_additions:pearl_of_knowledge' },
        upgradeLevel: 5, altarSyphon: 250000, consumptionRate: 250, drainRate: 250
    })
    // BloodAltar.addRecipe(<additions:greedycraft-creative_shard>, <additions:greedycraft-cosmilite_block>, 5, 850000, 700, 700);
    // FIXME: cosmilite_block not registered (only cosmilite_ingot). Temporarily use ingot x9 equivalent.
    event.custom({
        type: 'bloodmagic:altar',
        input:  { item: 'soa_additions:cosmilite_ingot' }, // FIXME: GC expected a cosmilite_block; substitute pending block registration
        output: { item: 'soa_additions:creative_shard' },
        upgradeLevel: 5, altarSyphon: 850000, consumptionRate: 700, drainRate: 700
    })


    // ---- AlchemyArray / Array ----

    // AlchemyArray.removeRecipe(<bloodmagic:component:8>, <minecraft:iron_helmet>) etc.
    const bindRemovals = [
        'minecraft:iron_helmet', 'minecraft:iron_chestplate', 'minecraft:iron_leggings', 'minecraft:iron_boots',
        'minecraft:diamond_sword', 'minecraft:diamond_pickaxe', 'minecraft:diamond_axe',
        'minecraft:diamond_shovel', 'minecraft:diamond_hoe'
        // 'animus:kama_bound' -> animus absent; skipped
    ]
    bindRemovals.forEach(base => {
        event.remove({ type: 'bloodmagic:array', baseinput: base, addedinput: 'bloodmagic:reagentbinding' })
    })

    // AlchemyArray.addRecipe(<bloodarsenal:blood_diamond:3>, <bloodmagic:component:8>, <bloodarsenal:blood_diamond:2>, ".../bindingarray.png");
    event.custom({
        type: 'bloodmagic:array',
        baseinput:  { item: 'bloodmagic:reagentbinding' },
        addedinput: { item: 'soa_additions:ba_blood_diamond_infused' },
        output:     { item: 'soa_additions:ba_blood_diamond_bound' },
        texture:    'bloodmagic:textures/models/AlchemyArrays/bindingarray.png'
    })
    // AlchemyArray.addRecipe(<bloodmagic:blood_shard:1>, <bloodmagic:slate:3>, <bloodmagic:blood_shard>, ".../bindingarray.png");
    // blood_shard:1 (demonic) DOES NOT EXIST in BM 1.20.1 -> recipe NOT portable; preserved as documentation.
    console.info('[soa_ported] bloodmagic.js: DONE')
})
