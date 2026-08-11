console.info('[soa_ported] vanilla_furnace.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] vanilla_furnace.js: registering recipes')

    const xp = 2.0
    const add = (out, input, id) =>
        event.smelting(out, input).xp(xp).id('soa_ported:furnace_' + id)

    add('soa_additions:cooked_human_meat', 'soa_additions:raw_human_meat', 'cooked_human_meat')

    add('soa_additions:experience_ingot', '#forge:ores/experience', 'experience_ingot')
    add('soa_additions:cryonium_ingot',   '#forge:ores/cryonium',   'cryonium_ingot')
    add('soa_additions:infernium_ingot',  '#forge:ores/infernium',  'infernium_ingot')
    add('soa_additions:titanium_ingot',   '#forge:ores/titanium',   'titanium_ingot')
    add('soa_additions:shadowium_ingot',  '#forge:ores/shadowium',  'shadowium_ingot')
    add('soa_additions:asgardium_ingot',  '#forge:ores/asgardium',  'asgardium_ingot')
    add('soa_additions:aeroite_ingot',    '#forge:ores/aeroite',    'aeroite_ingot')
    add('soa_additions:chromium_ingot',   '#forge:ores/chromium',   'chromium_ingot')
    add('soa_additions:aqualite_ingot',   '#forge:ores/aqualite',   'aqualite_ingot')

    ;['blue_aercloud', 'cold_aercloud', 'golden_aercloud'].forEach(c =>
        add('aether:aerogel', 'aether:' + c, c + '_to_aerogel')
    )

    event.smelting(Item.of('minecraft:netherite_scrap', 2), '#forge:ores/ancient_debris')
        .xp(xp).id('soa_ported:furnace_ancient_debris_x2')

    add('soa_additions:shadowium_ingot', '#forge:dusts/shadowium', 'shadowium_dust')

    console.info('[soa_ported] vanilla_furnace.js: DONE')
})
