console.info('[soa_ported] avaritia.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] avaritia.js: registering recipes')

    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['AAAAAAAA ', 'AAAAAAAA ', 'AAAAAAAA ', 'AAAAAAAA ', 'AAAAAAAA ', 'AAAAAAAA ', 'AAAAAAAA ', 'AAAAAAAA ', '         '],
        key: {"A": {"item": "soa_additions:infinity_block_block"}},
        result: { item: 'soa_additions:infinity_block_block_block', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_20')

    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA'],
        key: {"A": {"item": "soa_additions:compressed_experience_block"}},
        result: { item: 'soa_additions:pearl_of_knowledge', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_34')

    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA'],
        key: {"A": {"item": "soa_additions:infinity_block_block_block"}},
        result: { item: 'soa_additions:infinity_stone', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_38')

    event.custom({
        type: 'avaritia:shaped_table',
        pattern: ['   AAA   ', '  ABBBA  ', ' ABBBBBA ', ' ABBABBA ', ' ABABABA ', ' ABBBBBA ', ' ABAAABA ', ' AA   AA ', '         '],
        key: {"A": {"item": "avaritia:infinity_ingot"}, "B": {"item": "soa_additions:creative_soul"}},
        result: { item: 'soa_additions:passport', count: 1 }
    }).id('soa_ported:avaritia_' + 'custom_avaritia_recipe_40')

    console.info('[soa_ported] avaritia.js: DONE')
})
