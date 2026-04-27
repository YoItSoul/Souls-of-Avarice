// Ported from GreedyCraft: scripts/recipes/mods/botania.zs
// 1.12.2 CraftTweaker -> 1.20.1 KubeJS
// IDs verified via soa_exports/items.json + tags.json.
//
// Recipe types (FIXME: schemas best-guess -- KubeJS console will confirm):
//   ElvenTrade   -> botania:elven_trade
//   Apothecary   -> botania:petal_apothecary
//   PureDaisy    -> botania:pure_daisy
//   RuneAltar    -> botania:runic_altar
//   ManaInfusion -> botania:mana_infusion
//   GaiaPlate    -> NO 1.20 EQUIV (extrabotany/botanicadds absent)
//
// Key renames (verified):
//   botania:manaresource:1 -> botania:mana_pearl
//   botania:manaresource:9 -> botania:mana_diamond
//   botania:manaresource:14 -> botania:dragonstone
//   botania:manacookie -> botania:mana_cookie
//   botania:specialflower{puredaisy} -> botania:pure_daisy
//   botania:livingwood -> botania:livingwood_log
//   <ore:petalX> -> #botania:petals/<color>  (NOT forge namespace)
//
// DROPPED in 1.20:
//   quark:rune (Quark 1.20 has no runes)
//   twilightforest:castle_rune_brick (TF 1.20 has plain castle_brick only)
//
// actuallyadditions absent. twilightforest, quark, draconicevolution installed.

console.info('[soa_ported] botania.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] botania.js: registering recipes')

    // ---- ElvenTrade ----

    // ElvenTrade.addRecipe([<defiledlands:scarlite>], [<ore:slimeballBlood>, <ore:gemEmerald>, <ore:gemEmerald>]);
    event.custom({
        type: 'botania:elven_trade',
        ingredients: [
            { tag: 'forge:slimeballs' }, // FIXME: "Blood" slimeball subtag may not exist; using generic
            { tag: 'forge:gems/emerald' },
            { tag: 'forge:gems/emerald' }
        ],
        output: [{ item: 'soa_additions:scarlite' }]
    })

    // ElvenTrade.addRecipe([<actuallyadditions:item_misc:5>], ...);   // actuallyadditions absent -> NOT ported (x2)

    // ElvenTrade.addRecipe([<minecraft:gold_block>], [<ore:shardTime>]);
    event.custom({
        type: 'botania:elven_trade',
        ingredients: [{ item: 'soa_additions:time_shard' }], // ore:shardTime was GC custom; soa_additions:time_shard verified in items.json
        output: [{ item: 'minecraft:gold_block' }]
    })


    // ---- Apothecary ----

    // Apothecary.addRecipe(<additions:greedycraft-bag_of_dyes>,
    //   [<ore:petalGreen>, <ore:petalRed>, <ore:petalBlue>, <ore:petalYellow>, x2]);
    event.custom({
        type: 'botania:petal_apothecary',
        ingredients: [
            { tag: 'botania:petals/green' },  { tag: 'botania:petals/red' },
            { tag: 'botania:petals/blue' },   { tag: 'botania:petals/yellow' },
            { tag: 'botania:petals/green' },  { tag: 'botania:petals/red' },
            { tag: 'botania:petals/blue' },   { tag: 'botania:petals/yellow' }
        ],
        output: { item: 'soa_additions:bag_of_dyes' }
    })


    // ---- PureDaisy ----

    // PureDaisy.addRecipe(<minecraft:grass>, <minecraft:dirt>, 200);
    event.custom({
        type: 'botania:pure_daisy',
        input: { type: 'block', block: 'minecraft:dirt' },
        output: { name: 'minecraft:grass_block' }, // 1.13 flattening
        time: 200
    })

    // ---- Remaining transmutations from pure_daisy_transmutations.zs ----
    // Each is { input: source-block, output: target-block, time: 200 }.
    // Absent-mod entries (defiledlands/abyssalcraft/thaumcraft/biomesoplenty)
    // skipped; only vanilla + Botania entries portable.
    const PD = (inBlock, outItem) => event.custom({
        type: 'botania:pure_daisy',
        input: { type: 'block', block: inBlock },
        output: { name: outItem },
        time: 200
    })
    PD('minecraft:netherrack', 'minecraft:cobblestone')
    PD('minecraft:end_stone',  'minecraft:cobblestone')
    PD('minecraft:soul_sand',  'minecraft:gravel')
    PD('botania:blaze_block',  'minecraft:obsidian')   // 1.20 Botania renamed blazeblock → blaze_block
    PD('minecraft:gravel',     'minecraft:sand')
    PD('minecraft:mycelium',   'minecraft:grass_block')

    // PureDaisy.removeRecipe(<botania:livingwood>);
    event.remove({ type: 'botania:pure_daisy', output: 'botania:livingwood_log' })
    // PureDaisy.removeRecipe(<botania:livingrock>);
    event.remove({ type: 'botania:pure_daisy', output: 'botania:livingrock' })
    // PureDaisy.removeRecipe(<minecraft:cobblestone>);
    event.remove({ type: 'botania:pure_daisy', output: 'minecraft:cobblestone' })
    // PureDaisy.removeRecipe(<minecraft:sand>);
    event.remove({ type: 'botania:pure_daisy', output: 'minecraft:sand' })
    // PureDaisy.removeRecipe(<minecraft:packed_ice>);
    event.remove({ type: 'botania:pure_daisy', output: 'minecraft:packed_ice' })
    // PureDaisy.removeRecipe(<minecraft:obsidian>);
    event.remove({ type: 'botania:pure_daisy', output: 'minecraft:obsidian' })


    // ---- RuneAltar ----

    // RuneAltar.addRecipe(<twilightforest:aurora_block> * 32, [<ore:stone>, <quark:rune:*>], 50);
    // quark:rune DROPPED in Quark 1.20 -> FIXME: no rune ingredient available.
    // Skipping (cannot port without rune tier equivalent).

    // RuneAltar.addRecipe(<twilightforest:castle_rune_brick> * 32, [<ore:brickStone>, <quark:rune:*>, <ore:dye...>], 50);  (x4 colors)
    // castle_rune_brick DROPPED in TF 1.20 + quark:rune absent -> NOT ported.

    // RuneAltar.addRecipe(<botania:manacookie> * 4, [<ore:foodCookie> x4, <ore:manaPearl>, <ore:manaDiamond>], 3200);
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

    // RuneAltar.removeRecipe(<extrabotany:material:5>);
    // extrabotany absent; MythicBotany may have analog -> FIXME per-item verify.


    // ---- GaiaPlate (BotanicAdditions) ----
    // BotanicAdditions absent; MythicBotany has no direct gaia_plate multiblock.
    // GaiaSteel Ingot is registered as soa_additions:gaiasteel_ingot but no
    // recipe-type exists to produce it here. FIXME: port when MB replacement selected.


    // ---- ManaInfusion ----

    // ManaInfusion.removeRecipe(<botania:manacookie>);
    event.remove({ type: 'botania:mana_infusion', output: 'botania:mana_cookie' })


    // ---- pureDaisyTransmutations loop ----
    // Iterated GC's scripts/global/pure_daisy_transmutations.zs -- will be
    // ported separately as pure_daisy_transmutations.js.
    console.info('[soa_ported] botania.js: DONE')
})
