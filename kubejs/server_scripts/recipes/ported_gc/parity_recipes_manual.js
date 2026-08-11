console.info('[soa_scripts] parity_recipes_manual.js loading')

ServerEvents.recipes(event => {

    event.shaped('cyclic:battery', [
        'TTT',
        'TNT',
        'TTT'
    ], {
        T: '#forge:ingots/tin',
        N: 'malum:hallowed_gold_nugget'
    }).id('soa_ported:parity_cyclic_battery')

    const MENDING_BOOK = Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:mending",lvl:1s}]}').strongNBT()
    event.shaped('projecte:repair_talisman', [
        'SSS',
        'MRM',
        'LHC'
    ], {
        S: 'soa_additions:creative_shard',
        M: MENDING_BOOK,
        R: 'projecte:red_matter',
        L: 'projecte:low_covalence_dust',
        H: 'projecte:high_covalence_dust',
        C: 'projecte:medium_covalence_dust'
    }).id('soa_ported:parity_repair_talisman')

    console.info('[soa_scripts] parity_recipes_manual.js: DONE')
})
