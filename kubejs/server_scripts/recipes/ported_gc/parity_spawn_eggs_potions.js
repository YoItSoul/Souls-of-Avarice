// ============================================================
// SoA parity — GC spawn-egg + custom-potion crafting recipes
//
// Port of the recipes GreedyCraft defined in
// scripts/recipes/vanilla/crafting_table/shaped.zs. These are the entries the
// guide book's "Misc Recipes" page advertised; their outputs all exist in 1.20
// (or are vanilla items differentiated only by NBT), so no new mod is needed.
//
// 1.12 -> 1.20 translation notes:
//   * spawn eggs were ONE item + EntityTag NBT (<minecraft:spawn_egg>.withTag(
//     {EntityTag:{id:"minecraft:blaze"}})); 1.20 has a discrete item per mob.
//   * thermalfoundation:material metas 2049/2051/2053 are dustBlizz/dustBlitz/
//     dustBasalz (odd metas are the powders, even are the rods) -> thermal:
//     <x>_powder. Consistent with the blaze egg using blaze powder.
//   * <ore:wool> -> #minecraft:wool, <ore:bone> -> minecraft:bone,
//     <ore:listAllegg> -> minecraft:egg, <ore:dyeBlack> -> #forge:dyes/black.
//   * GC's potions pulled their name/lore from greedycraft.misc.* lang keys
//     which SoA doesn't ship, so the components are inlined with the same
//     text and colours (§b§o -> aqua+italic, §6 -> gold, §8 -> dark_gray).
//   * Effect ids are unchanged between versions: 1 speed, 8 jump_boost,
//     25 levitation, 27 unluck.
//
// Every recipe carries an explicit id so the Patchouli guide can reference it.
// ============================================================

console.info('[soa_scripts] parity_spawn_eggs_potions.js loading')

// Mob spawn eggs: ring of a themed reagent around a vanilla egg.
//
// Only the ones vanilla_shaped.js does NOT already cover. Its spawnEgg() helper
// already ships slime/villager/blaze/cow/enderman/ghast with these exact
// ingredients — duplicating them here would register two identical recipes for
// the same output. The Thermal elemental mobs and stray were the real gaps.
const SPAWN_EGGS = [
    { egg: 'thermal:blizz_spawn_egg', ring: 'thermal:blizz_powder', id: 'soa_ported:spawn_blizz' },
    { egg: 'thermal:blitz_spawn_egg', ring: 'thermal:blitz_powder', id: 'soa_ported:spawn_blitz' },
    { egg: 'thermal:basalz_spawn_egg', ring: 'thermal:basalz_powder', id: 'soa_ported:spawn_basalz' },
]

// GC's potions: splash potions carrying CustomPotionEffects + a display name
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
    // --- spawn eggs: ring around a plain egg ---
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

    // --- stray: wool above/below, bone either side (GC used ore dicts) ---
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

    // --- Totem of Undying ---
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

    // --- custom splash potions: full ring of reagent around a glass bottle ---
    // nbt declared OUTSIDE the loop: Rhino treats a per-iteration const/let in
    // this position as a redeclaration and errors every iteration after the first.
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
