// ============================================================
// SoA Loot Tweaks — port of GreedyCraft scripts/loot_tables/tweaks.zs
//
// 1.12 GC modified vanilla chest pools by:
//   1. Reweighting simple_dungeon main/pool1/pool2 rolls
//   2. Adding random_chance conditions to absorbed-mod injection pools
//   3. Removing specific items injected by other mods (cyclicmagic wands,
//      bountifulbaubles trinkets, etc.) — most mods absent in 1.20.1, those
//      removals become no-ops automatically.
//   4. Adding netherite_scrap to nether_bridge main pool
//   5. Adding GC-specific items to simple_dungeon pool2 (medkits, reward
//      tickets, scaling health items)
//   6. Adding the Elysia Project Patchouli book to simple_dungeon pool2
//
// 1.20.1 port: LootJS doesn't have a direct "modify pool rolls" API; the
// closest is `removeLoot` for entry deletion and `addLoot` for additions.
// Pool reweighting is dropped because LootJS modifies at the table level,
// not per-pool. The vanilla pool weights in 1.20.1 are already balanced
// fairly close to GC's reweighted values.
//
// Removals: most reference absent mods (cyclicmagic, abyssalcraft, charm,
// bountifulbaubles, forestry, openmods); we skip those entirely. The
// remaining removals (enderio dark_steel_sword/boots from chests) targets
// EnderIO 6.x which has different IDs — also skipped per memory note that
// removals from absent or renamed sources are no-ops.
// ============================================================

console.info('[soa_scripts] loot_tweaks.js loading')

LootJS.modifiers((event) => {
    // ---- Add netherite_scrap to nether_bridge ----
    try {
        event.addLootTableModifier('minecraft:chests/nether_bridge')
            .addLoot({ item: 'minecraft:netherite_scrap', count: { min: 3, max: 8 }, chance: 5 / 100 })
        console.info('[loot_tweaks] nether_bridge netherite_scrap added')
    } catch (e) {
        console.warn('[loot_tweaks] nether_bridge: ' + e)
    }

    // ---- simple_dungeon "pool2" (GC's secondary GC-rewards pool) — added
    // as additional simple_dungeon entries in 1.20.1. These were the GC
    // rewards that complemented the main loot.
    const SD = 'minecraft:chests/simple_dungeon'

    const POOL2_ENTRIES = [
        ['soa_additions:reward_ticket_common',     4, 1, 2],
        ['soa_additions:reward_ticket_rare',       1, 1, 1],
        ['soa_additions:medkit_super',             1, 1, 1],
        ['soa_additions:medkit_big',               3, 1, 3],
        ['soa_additions:medkit_small',            10, 1, 6],
        ['soa_additions:experience_ingot',        12, 4, 20],
        ['scalinghealth:crystal_shard',            1, 1, 1],
        ['scalinghealth:heart_dust',               6, 2, 8],
        ['soa_additions:delivery_order',           1, 1, 1],
        ['soa_additions:tower_chest_key',          2, 1, 1],
        ['soa_additions:sunny_doll',               2, 1, 1],
        ['soa_additions:bag_of_dyes',              6, 1, 3],
        ['soa_additions:sponsor_chest_fragment',   2, 1, 3],
        ['soa_additions:huaji',                    1, 1, 1],
        // bountifulbaubles items SKIP (absent)
    ]

    for (const [item, weight, min, max] of POOL2_ENTRIES) {
        try {
            event.addLootTableModifier(SD)
                .addLoot({ item: item, count: min === max ? min : { min: min, max: max }, chance: weight / 100 })
        } catch (e) {
            console.warn('[loot_tweaks] sd pool2 ' + item + ': ' + e)
        }
    }

    // ---- Patchouli "Elysia Project" book — drops in simple_dungeon ----
    // Book namespace must be soa_additions per project memory
    // (reference_patchouli_book_namespace).
    // NB: inlined to avoid the 'redeclaration of var X' Rhino quirk that
    // bites const declarations inside LootJS modifier callbacks.
    try {
        event.addLootTableModifier(SD)
            .addLoot(
                Item.of('patchouli:guide')
                    .withNBT({ 'patchouli:book': 'soa_additions:the_elysia_project' })
                    .withChance(0.01)
            )
        console.info('[loot_tweaks] Elysia Project book drop registered')
    } catch (e) {
        console.warn('[loot_tweaks] elysia book: ' + e)
    }

    // ---- Removals (per GC tweaks.zs) ----
    // Most target absent mods → no-op. Kept here as a record of intent so
    // future mod additions can reactivate. Wrapped in try/catch to silently
    // skip when the entry doesn't exist.
    const REMOVALS = [
        // Vanilla chests + cyclicmagic wand_build — cyclicmagic absent
        // Vanilla chests + cyclicmagic tool_push — cyclicmagic absent
        // Vanilla chests + cyclicmagic heart_food — absent
        // abyssalcraft tin/copper from mineshaft/stronghold — absent
        // bountifulbaubles trinkets from nether_bridge — absent
        // forestry broken bronze tools from mineshaft — absent
        // EnderIO 6.x 1.20: dark_steel_sword/boots auto-removed below if present
        ['minecraft:chests/abandoned_mineshaft', 'enderio:dark_steel_sword'],
        ['minecraft:chests/abandoned_mineshaft', 'enderio:dark_steel_boots'],
        ['minecraft:chests/jungle_temple',       'enderio:dark_steel_sword'],
    ]

    for (const [table, itemId] of REMOVALS) {
        // Item.exists guard: when EnderIO 6.x dropped dark_steel_sword,
        // Item.of(dead_id) collapses to air and LootJS' filter logs
        // "Invalid ingredient for filter: 0 air" before our try/catch
        // can swallow it. Skip up-front when the item isn't registered.
        if (!Item.exists(itemId)) continue
        try {
            event.addLootTableModifier(table).removeLoot(Item.of(itemId))
        } catch (e) {
            // Silently skip — entry didn't exist in target table
        }
    }
})

console.info('[soa_scripts] loot_tweaks.js: registered')
