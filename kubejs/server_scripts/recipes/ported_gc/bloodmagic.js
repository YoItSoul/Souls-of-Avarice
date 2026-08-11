console.info('[soa_ported] bloodmagic.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] bloodmagic.js: registering recipes');

    ['iron_sword','iron_axe','iron_pickaxe','iron_shovel'].forEach(tool => {
        event.remove({ type: 'bloodmagic:soulforge', input: ['bloodmagic:soulgempetty', 'minecraft:' + tool] })
    })

    event.remove({ type: 'bloodmagic:soulforge', input: ['minecraft:bow', 'bloodmagic:soulgemlesser', '#forge:string', '#forge:string'] })

    event.remove({ type: 'bloodmagic:soulforge', input: ['bloodmagic:soulgempetty', 'soa_additions:fusion_matrix_ingot'] })

    event.custom({
        type: 'bloodmagic:soulforge',
        input0: { item: 'bloodmagic:soulgempetty' },
        input1: { item: 'soa_additions:stainless_steel_ingot' },
        input2: { item: 'soa_additions:stainless_steel_ingot' },
        input3: { item: 'soa_additions:stainless_steel_ingot' },
        output: { item: 'tconevo:sentient_metal_ingot', count: 1 },
        minimumDrain: 2.0,
        drain: 2.0
    })

    event.remove({ type: 'bloodmagic:altar', output: 'minecraft:redstone_block' })

    event.remove({ type: 'bloodmagic:altar', output: 'minecraft:diamond' })

    event.remove({ type: 'bloodmagic:altar', output: 'minecraft:gold_block' })

    event.remove({ type: 'bloodmagic:altar', output: 'soa_additions:fusion_matrix_ingot' })

    event.remove({ type: 'bloodmagic:altar', output: 'bloodmagic:largebloodstonebrick' })

    event.custom({
        type: 'bloodmagic:altar',
        input:  { item: 'minecraft:emerald' },
        output: { item: 'bloodmagic:weakbloodorb' },
        upgradeLevel: 0, altarSyphon: 2000, consumptionRate: 40, drainRate: 40
    })

    event.custom({
        type: 'bloodmagic:altar',
        input:  { item: 'soa_additions:compressed_experience_block' },
        output: { item: 'bloodmagic:magicianbloodorb' },
        upgradeLevel: 2, altarSyphon: 25000, consumptionRate: 100, drainRate: 100
    })

    event.custom({
        type: 'bloodmagic:altar',
        input:  { item: 'soa_additions:durasteel_ingot' },
        output: { item: 'tconevo:bound_metal_ingot' },
        upgradeLevel: 2, altarSyphon: 10000, consumptionRate: 200, drainRate: 200
    })

    event.custom({
        type: 'bloodmagic:altar',
        input:  { item: 'minecraft:glass_bottle' },
        output: { item: 'twilightforest:fiery_blood' },
        upgradeLevel: 3, altarSyphon: 7000, consumptionRate: 120, drainRate: 120
    })

    event.custom({
        type: 'bloodmagic:altar',
        input:  { item: 'avaritia:crystal_matrix' },
        output: { item: 'bloodmagic:largebloodstonebrick' },
        upgradeLevel: 4, altarSyphon: 15000, consumptionRate: 140, drainRate: 140
    })

    event.custom({
        type: 'bloodmagic:altar',
        input:  { item: 'draconicevolution:wyvern_core' },
        output: { item: 'bloodmagic:archmagebloodorb' },
        upgradeLevel: 5, altarSyphon: 300000, consumptionRate: 250, drainRate: 250
    })

    event.custom({
        type: 'bloodmagic:altar',
        input:  { item: 'soa_additions:blood_sigil' },
        output: { item: 'soa_additions:true_blood_sigil' },
        upgradeLevel: 5, altarSyphon: 150000, consumptionRate: 200, drainRate: 200
    })

    event.custom({
        type: 'bloodmagic:altar',
        input:  { item: 'botania:mana_pearl' },
        output: { item: 'soa_additions:pearl_of_knowledge' },
        upgradeLevel: 5, altarSyphon: 250000, consumptionRate: 250, drainRate: 250
    })

    event.custom({
        type: 'bloodmagic:altar',
        input:  { item: 'soa_additions:cosmilite_ingot' },
        output: { item: 'soa_additions:creative_shard' },
        upgradeLevel: 5, altarSyphon: 850000, consumptionRate: 700, drainRate: 700
    })

    const bindRemovals = [
        'bloodmagic:array/living_helmet',
        'bloodmagic:array/living_plate',
        'bloodmagic:array/living_leggings',
        'bloodmagic:array/living_boots'

    ]
    bindRemovals.forEach(id => {
        event.remove({ id: id })
    })

    event.custom({
        type: 'bloodmagic:array',
        baseinput:  { item: 'bloodmagic:reagentbinding' },
        addedinput: { item: 'bloodarsenal:blood_diamond_infused' },
        output:     { item: 'bloodarsenal:blood_diamond_bound' },
        texture:    'bloodmagic:textures/models/alchemyarrays/bindingarray.png'
    })

    console.info('[soa_ported] bloodmagic.js: DONE')
})
