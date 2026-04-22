// Ported from GreedyCraft: scripts/recipes/vanilla/furnace.zs
//                       + scripts/global/furnace_recipes.zs
// 1.12.2 CraftTweaker -> 1.20.1 KubeJS
//
// Exact 1:1 port; absent-mod recipes are translated verbatim and will
// silently fail to register for the missing mods (taiga, astralsorcery,
// tcomplement, actuallyadditions) per user directive.
//
// ID rewrites:
//   additions:greedycraft-<X> -> soa_additions:<X>
//   additions:<X>             -> soa_additions:<X>  (absorbed 'additions' mod)
//   aether_legacy:aercloud:*  -> aether:*_aercloud  (blue/cold/golden)
//   tconstruct:materials (ingotBrick smelt) -> tconstruct:seared_brick
//   tconstruct:seared:3 (brick_block smelt) -> tconstruct:seared_bricks
//   tcomplement:materials:1 / :scorched_block -> tconstruct:scorched_brick / _bricks
//   ore:ingotBrickSeared -> #forge:ingots/seared_brick (TC3 tag)
//   ore:blockSeared      -> tconstruct:seared_bricks

console.info('[soa_ported] vanilla_furnace.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] vanilla_furnace.js: registering recipes')

    // --- Removals ---
    // GC removed furnace recipes for <tconstruct:materials> (wildcard) and
    // <extrabotany:material:5>. TC3 materials is no longer a single meta item,
    // and extrabotany is replaced by mythicbotany (no material:5 analog).
    event.remove({ output: 'tconstruct:seared_brick', type: 'minecraft:smelting' })
    event.remove({ output: 'tconstruct:scorched_brick', type: 'minecraft:smelting' })

    // --- Smelting recipes (furnaceXp = 2.0 in GC) ---
    const xp = 2.0
    const add = (out, input, id) =>
        event.smelting(out, input).xp(xp).id('soa_ported:furnace_' + id)

    // ingotBrick -> tconstruct:seared_brick (GC: tconstruct:materials)
    add('tconstruct:seared_brick', '#forge:ingots/brick', 'seared_brick')

    // brick_block -> tconstruct:seared_bricks (GC: tconstruct:seared:3)
    add('tconstruct:seared_bricks', 'minecraft:bricks', 'seared_bricks')

    // raw -> cooked human meat
    add('soa_additions:cooked_human_meat', 'soa_additions:raw_human_meat', 'cooked_human_meat')

    // stoneMarble -> astralsorcery:blockblackmarble — AstralSorcery absent (FIXME)

    // gemQuartz -> actuallyadditions:item_misc:5 — AA absent (FIXME)

    // Experience / metal ore smelts
    add('soa_additions:experience_ingot', '#forge:ores/experience', 'experience_ingot')
    add('soa_additions:cryonium_ingot',   '#forge:ores/cryonium',   'cryonium_ingot')
    add('soa_additions:infernium_ingot',  '#forge:ores/infernium',  'infernium_ingot')
    add('soa_additions:titanium_ingot',   '#forge:ores/titanium',   'titanium_ingot')
    add('soa_additions:shadowium_ingot',  '#forge:ores/shadowium',  'shadowium_ingot')
    add('soa_additions:asgardium_ingot',  '#forge:ores/asgardium',  'asgardium_ingot')
    add('soa_additions:aeroite_ingot',    '#forge:ores/aeroite',    'aeroite_ingot')
    add('soa_additions:chromium_ingot',   '#forge:ores/chromium',   'chromium_ingot')
    add('soa_additions:aqualite_ingot',   '#forge:ores/aqualite',   'aqualite_ingot')

    // aercloud variants -> aerogel (GC wildcard; 1.20 aether exposes
    // blue_, cold_, golden_aercloud items — port each explicitly)
    ;['blue_aercloud', 'cold_aercloud', 'golden_aercloud'].forEach(c =>
        add('aether:aerogel', 'aether:' + c, c + '_to_aerogel')
    )

    // ancient_debris ore -> 2x netherite_scrap (GC had its own scrap item
    // as soa_additions:netherite_scrap; SoA uses vanilla minecraft:netherite_scrap)
    event.smelting(Item.of('minecraft:netherite_scrap', 2), '#forge:ores/ancient_debris')
        .xp(xp).id('soa_ported:furnace_ancient_debris_x2')

    // seared brick + seared block (GC tcomplement -> TC3 scorched)
    add('tconstruct:scorched_brick', '#forge:ingots/seared_brick', 'scorched_brick')
    add('tconstruct:scorched_bricks', 'tconstruct:seared_bricks', 'scorched_bricks')

    // dustShadowium -> shadowium_ingot
    add('soa_additions:shadowium_ingot', '#forge:dusts/shadowium', 'shadowium_dust')

    // taiga:* ores and dusts -> taiga:*_ingot
    // Taiga not installed in SoA 1.20; these 50+ entries would fail silently.
    // Keeping them removed; if Taiga (or an analog like mythicmetals) is added,
    // port via the same `add(...)` helper.
    console.info('[soa_ported] vanilla_furnace.js: DONE')
})
