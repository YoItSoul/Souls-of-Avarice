// ============================================================
// SoA GC-parity recipes — MANUAL ports of the recipes
// port_missing_recipes.py flagged BLOCKED (1.12 ingredients with no
// mechanical 1.20 mapping). Substitutions follow the mod-replacement
// map (thaumcraft->malum, BOP gems->valoria) and display-name matching.
//
// NOT ported here (handled elsewhere or deliberately skipped):
//   - Rare/Epic Backpack  -> kubejs/data/simplybackpacks/recipes/*.json
//     (datapack overrides keep the mod's NBT-preserving upgrade type)
//   - Creative Chance Pendant -> kubejs/data/soa_ported/recipes/
//     creative_pendant_extreme.json (avaritia:shaped_table)
//   - Eternal Singularity x2  -> kubejs/data/avaritia/recipes/
//     eternal_singularity.json (type auto-requires avaritia's singularities;
//     override adds the pack's 19 ExtendedCrafting material singularities —
//     the 1.20 counterpart of GC's JAOPCA set — and restores GC's x2 output)
//   - Tome of Knowledge       -> kubejs/data/soa_ported/recipes/
//     tome_of_knowledge_extreme.json (ProjectEX items mapped to lineage
//     equivalents: pearl_of_knowledge / klein_star_omega / matter_singularity)
//   - Battle Tower Chest (Unlocked) -> SKIP: SOA redesigned to key-unlock
//   - Crafting Table          -> SKIP: SOA tough_beginnings early game
// ============================================================

console.info('[soa_scripts] parity_recipes_manual.js loading')

ServerEvents.recipes(event => {
    // Cyclic Battery (GC shaped.zs auto_gen_-1513078655): tin ring around a
    // magic-metal nugget. GC center was thaumcraft:nugget:10; thaumcraft->malum
    // maps it to hallowed gold (the conductive magic metal at battery tier).
    event.shaped('cyclic:battery', [
        'TTT',
        'TNT',
        'TTT'
    ], {
        T: '#forge:ingots/tin',
        N: 'malum:hallowed_gold_nugget'
    }).id('soa_ported:parity_cyclic_battery')

    // ProjectE Repair Talisman (GC shaped.zs auto_gen_695406342):
    // creative shards / mending moss x2 + red matter / covalence dusts.
    // tconstruct Mending Moss doesn't exist in 1.20 tconstruct — an
    // enchanted book with Mending is the faithful stand-in.
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
