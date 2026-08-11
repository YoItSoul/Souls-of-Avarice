ServerEvents.recipes(event => {
    const ring4 = (out, mat) => event.shaped(out, [' A ', 'AEA', ' A '], { A: mat, E: 'minecraft:ender_eye' })
        .id('soa_additions:endrem/' + out.replace('endrem:', ''))
    const ring8 = (out, mat) => event.shaped(out, ['AAA', 'AEA', 'AAA'], { A: mat, E: 'minecraft:ender_eye' })
        .id('soa_additions:endrem/' + out.replace('endrem:', ''))

    ring4('endrem:old_eye',       'valoria:ancient_ingot')
    ring8('endrem:black_eye',     'minecraft:echo_shard')
    ring4('endrem:corrupted_eye', 'malum:malignant_pewter_ingot')
    ring4('endrem:cursed_eye',    'forbidden_arcanus:stellarite_piece')
    ring4('endrem:evil_eye',      'bloodmagic:defaultcrystal')
    ring4('endrem:exotic_eye',    'aether:enchanted_gravitite')
    ring8('endrem:guardian_eye',  'minecraft:prismarine_shard')
    ring4('endrem:lost_eye',      'twilightforest:magic_map_focus')
    ring4('endrem:wither_eye',    'cataclysm:witherite_ingot')

    event.shaped('endrem:cold_eye', [' F ', 'FEF', ' T '], {
        F: 'twilightforest:alpha_yeti_fur',
        T: 'twilightforest:snow_queen_trophy',
        E: 'minecraft:ender_eye'
    }).id('soa_additions:endrem/cold_eye')

    event.shapeless('endrem:cryptic_eye', ['tconevo:coalescence_matrix', 'minecraft:ender_eye'])
        .id('soa_additions:endrem/cryptic_eye')

    event.shaped('endrem:magical_eye', [' T ', 'PEP', ' T '], {
        T: 'botania:terrasteel_ingot',
        P: 'botania:mana_pearl',
        E: 'minecraft:ender_eye'
    }).id('soa_additions:endrem/magical_eye')

    event.shaped('endrem:nether_eye', [' Q ', 'QEQ', ' N '], {
        Q: 'malum:blazing_quartz',
        N: 'minecraft:netherite_ingot',
        E: 'minecraft:ender_eye'
    }).id('soa_additions:endrem/nether_eye')

    event.shapeless('endrem:rogue_eye', ['soa_additions:bounty_hunter_medal', 'minecraft:ender_eye'])
        .id('soa_additions:endrem/rogue_eye')

    console.info('[soa_scripts] soa_endrem_eyes.js: 14 eye recipes registered')
})
