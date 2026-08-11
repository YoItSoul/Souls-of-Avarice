console.info('[soa_ported] botania.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] botania.js: registering recipes')

    event.custom({
        type: 'botania:elven_trade',
        ingredients: [
            { tag: 'forge:slimeballs' },
            { tag: 'forge:gems/emerald' },
            { tag: 'forge:gems/emerald' }
        ],
        output: [{ item: 'soa_additions:scarlite' }]
    })

    event.custom({
        type: 'botania:elven_trade',
        ingredients: [{ item: 'soa_additions:time_shard' }],
        output: [{ item: 'minecraft:gold_block' }]
    })

    event.custom({
        type: 'botania:petal_apothecary',
        ingredients: [
            { tag: 'botania:petals/green' },  { tag: 'botania:petals/red' },
            { tag: 'botania:petals/blue' },   { tag: 'botania:petals/yellow' },
            { tag: 'botania:petals/green' },  { tag: 'botania:petals/red' },
            { tag: 'botania:petals/blue' },   { tag: 'botania:petals/yellow' }
        ],
        output:  { item: 'soa_additions:bag_of_dyes' },
        reagent: { tag: 'botania:seed_apothecary_reagent' }
    })

    event.custom({
        type: 'botania:pure_daisy',
        input: { type: 'block', block: 'minecraft:dirt' },
        output: { name: 'minecraft:grass_block' },
        time: 200
    })

    const PD = (inBlock, outItem) => event.custom({
        type: 'botania:pure_daisy',
        input: { type: 'block', block: inBlock },
        output: { name: outItem },
        time: 200
    })
    PD('minecraft:netherrack', 'minecraft:cobblestone')
    PD('minecraft:end_stone',  'minecraft:cobblestone')
    PD('minecraft:soul_sand',  'minecraft:gravel')
    PD('botania:blaze_block',  'minecraft:obsidian')
    PD('minecraft:gravel',     'minecraft:sand')
    PD('minecraft:mycelium',   'minecraft:grass_block')

    event.remove({ type: 'botania:pure_daisy', output: 'botania:livingwood_log' })

    event.remove({ type: 'botania:pure_daisy', output: 'botania:livingrock' })

    event.remove({ type: 'botania:pure_daisy', output: 'minecraft:cobblestone' })

    event.remove({ type: 'botania:pure_daisy', output: 'minecraft:sand' })

    event.remove({ type: 'botania:pure_daisy', output: 'minecraft:packed_ice' })

    event.remove({ type: 'botania:pure_daisy', output: 'minecraft:obsidian' })

    event.custom({
        type: 'botania:runic_altar',
        ingredients: [
            { item: 'minecraft:cookie' }, { item: 'minecraft:cookie' },
            { item: 'minecraft:cookie' }, { item: 'minecraft:cookie' },
            { item: 'botania:mana_pearl' },
            { item: 'botania:mana_diamond' }
        ],
        output: { item: 'botania:mana_cookie', count: 4 },
        mana: 3200
    })

    event.remove({ type: 'botania:mana_infusion', output: 'botania:mana_cookie' })

    console.info('[soa_ported] botania.js: DONE')
})
