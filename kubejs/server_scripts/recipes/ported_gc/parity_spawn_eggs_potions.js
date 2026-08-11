console.info('[soa_scripts] parity_spawn_eggs_potions.js loading')

const SPAWN_EGGS = [
    { egg: 'thermal:blizz_spawn_egg', ring: 'thermal:blizz_powder', id: 'soa_ported:spawn_blizz' },
    { egg: 'thermal:blitz_spawn_egg', ring: 'thermal:blitz_powder', id: 'soa_ported:spawn_blitz' },
    { egg: 'thermal:basalz_spawn_egg', ring: 'thermal:basalz_powder', id: 'soa_ported:spawn_basalz' },
]

const POTIONS = [
    {
        id: 'soa_ported:lightspeed_potion',
        ring: 'minecraft:chorus_fruit',
        color: 720859,
        effects: [
            { Id: 1, Amplifier: 126, Duration: 2400 },
            { Id: 8, Amplifier: 126, Duration: 2400 },
        ],
        name: '{"text":"Lightspeed Potion","color":"aqua","italic":true}',
        lore: '{"text":"Feel the speed!","color":"green","italic":false}',
    },
    {
        id: 'soa_ported:potion_to_the_heaven',
        ring: 'minecraft:feather',
        color: 16722379,
        effects: [{ Id: 25, Amplifier: 126, Duration: 1200 }],
        name: '{"text":"Potion to the Heaven","color":"gold","italic":false}',
        lore: '{"text":"Why don\'t you fly?","color":"aqua","italic":false}',
    },
    {
        id: 'soa_ported:rng_god_potion',
        ring: '#forge:dyes/black',
        color: 0,
        effects: [{ Id: 27, Amplifier: 126, Duration: 6000 }],
        name: '{"text":"RNG God Potion","color":"dark_gray","italic":false}',
        lore: '{"text":"Reaaally nice RNG today!","color":"blue","italic":false}',
    },
]

function effectsSnbt(list) {
    return list.map(e =>
        '{Id:' + e.Id + 'b,Amplifier:126b,Duration:' + e.Duration + ',ShowParticles:0b}'
    ).join(',')
}

ServerEvents.recipes(event => {

    for (const s of SPAWN_EGGS) {
        try {
            event.shaped(s.egg, [
                ' R ',
                'RER',
                ' R ',
            ], { R: s.ring, E: 'minecraft:egg' }).id(s.id)
        } catch (e) {
            console.warn('[parity_eggs] ' + s.id + ': ' + e)
        }
    }

    try {
        event.shaped('minecraft:stray_spawn_egg', [
            ' W ',
            'BEB',
            ' W ',
        ], {
            W: '#minecraft:wool',
            B: 'minecraft:bone',
            E: 'minecraft:egg',
        }).id('soa_ported:spawn_stray')
    } catch (e) {
        console.warn('[parity_eggs] spawn_stray: ' + e)
    }

    try {
        event.shaped('minecraft:totem_of_undying', [
            'EGE',
            'INI',
            ' B ',
        ], {
            E: 'minecraft:ender_eye',
            G: 'minecraft:golden_apple',
            I: 'minecraft:gold_ingot',
            N: 'minecraft:nether_star',
            B: 'minecraft:gold_block',
        }).id('soa_ported:totem_of_undying')
    } catch (e) {
        console.warn('[parity_eggs] totem_of_undying: ' + e)
    }

    let nbt
    for (const p of POTIONS) {
        try {
            nbt = '{CustomPotionEffects:[' + effectsSnbt(p.effects) + ']'
                + ',CustomPotionColor:' + p.color
                + ",display:{Name:'" + p.name + "',Lore:['" + p.lore + "']}}"
            event.shaped(Item.of('minecraft:splash_potion', nbt), [
                'RRR',
                'RBR',
                'RRR',
            ], { R: p.ring, B: 'minecraft:glass_bottle' }).id(p.id)
        } catch (e) {
            console.warn('[parity_potions] ' + p.id + ': ' + e)
        }
    }
})

console.info('[soa_scripts] parity_spawn_eggs_potions.js: registered')
