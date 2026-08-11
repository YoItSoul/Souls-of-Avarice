console.info('[soa_scripts] loot_tweaks.js loading')

LootJS.modifiers((event) => {

    try {
        event.addLootTableModifier('minecraft:chests/nether_bridge')
            .addLoot({ item: 'minecraft:netherite_scrap', count: { min: 3, max: 8 }, chance: 5 / 100 })
        console.info('[loot_tweaks] nether_bridge netherite_scrap added')
    } catch (e) {
        console.warn('[loot_tweaks] nether_bridge: ' + e)
    }

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

    ]

    for (const [item, weight, min, max] of POOL2_ENTRIES) {
        try {
            event.addLootTableModifier(SD)
                .addLoot({ item: item, count: min === max ? min : { min: min, max: max }, chance: weight / 100 })
        } catch (e) {
            console.warn('[loot_tweaks] sd pool2 ' + item + ': ' + e)
        }
    }

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

    const REMOVALS = [

        ['minecraft:chests/abandoned_mineshaft', 'enderio:dark_steel_sword'],
        ['minecraft:chests/abandoned_mineshaft', 'enderio:dark_steel_boots'],
        ['minecraft:chests/jungle_temple',       'enderio:dark_steel_sword'],
    ]

    for (const [table, itemId] of REMOVALS) {

        if (!Item.exists(itemId)) continue
        try {
            event.addLootTableModifier(table).removeLoot(Item.of(itemId))
        } catch (e) {

        }
    }
})

console.info('[soa_scripts] loot_tweaks.js: registered')
