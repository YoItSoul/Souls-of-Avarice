// Halve the hunger restored by every vanilla food.
//
// Why: GreedyCraft (1.12) ran squeek's original Spice of Life with
// affect.food.hunger.values=true, which scaled vanilla foods down via the
// diminishing-returns formula. Our 1.20.1 pack ships Spice of Life: Apple Pie
// Edition instead — a fork that kept the diversity-buffs side and dropped the
// hunger-multiplier side. Result: a steak in our pack restores its full 8
// hunger every bite where in GC it was effectively halved or worse.
//
// This script flat-halves the FoodProperties.hunger of every vanilla food at
// registry time so the baseline matches GC's effective values. Saturation
// modifier is left untouched, but total saturation added drops by half as a
// side effect (saturation_added = 2 * hunger * modifier).
//
// Items with hunger == 1 are kept at 1 (can't go below without disabling the
// food entirely). Halving uses Math.round so 5 -> 3, 3 -> 2, 8 -> 4.
//
// Modded foods (Farmer's Delight, Apple Pie complex meals, etc.) are NOT
// touched — they're the "complex" tier the pack rewards via Apple Pie's
// diversity benefits.

const HALVED = {
    // Plain crops / harvested
    'minecraft:apple':                  2,  // 4 -> 2
    'minecraft:beetroot':               1,  // 1 -> 1 (floor)
    'minecraft:carrot':                 2,  // 3 -> 2
    'minecraft:chorus_fruit':           2,  // 4 -> 2
    'minecraft:dried_kelp':             1,  // 1 -> 1 (floor)
    'minecraft:glow_berries':           1,  // 2 -> 1
    'minecraft:melon_slice':            1,  // 2 -> 1
    'minecraft:potato':                 1,  // 1 -> 1 (floor)
    'minecraft:sweet_berries':          1,  // 2 -> 1

    // Raw meat
    'minecraft:beef':                   2,  // 3 -> 2
    'minecraft:chicken':                1,  // 2 -> 1
    'minecraft:cod':                    1,  // 2 -> 1
    'minecraft:mutton':                 1,  // 2 -> 1
    'minecraft:porkchop':               2,  // 3 -> 2
    'minecraft:rabbit':                 2,  // 3 -> 2
    'minecraft:salmon':                 1,  // 2 -> 1
    'minecraft:tropical_fish':          1,  // 1 -> 1 (floor)
    'minecraft:pufferfish':             1,  // 1 -> 1 (floor)

    // Cooked meat
    'minecraft:cooked_beef':            4,  // 8 -> 4
    'minecraft:cooked_chicken':         3,  // 6 -> 3
    'minecraft:cooked_cod':             3,  // 5 -> 3
    'minecraft:cooked_mutton':          3,  // 6 -> 3
    'minecraft:cooked_porkchop':        4,  // 8 -> 4
    'minecraft:cooked_rabbit':          3,  // 5 -> 3
    'minecraft:cooked_salmon':          3,  // 6 -> 3

    // Baked / processed
    'minecraft:baked_potato':           3,  // 5 -> 3
    'minecraft:bread':                  3,  // 5 -> 3
    'minecraft:cookie':                 1,  // 2 -> 1
    'minecraft:pumpkin_pie':            4,  // 8 -> 4

    // Stews / soups
    'minecraft:beetroot_soup':          3,  // 6 -> 3
    'minecraft:mushroom_stew':          3,  // 6 -> 3
    'minecraft:rabbit_stew':            5,  // 10 -> 5
    'minecraft:suspicious_stew':        3,  // 6 -> 3

    // Special / rare
    'minecraft:enchanted_golden_apple': 2,  // 4 -> 2
    'minecraft:golden_apple':           2,  // 4 -> 2
    'minecraft:golden_carrot':          3,  // 6 -> 3
    'minecraft:honey_bottle':           3,  // 6 -> 3

    // Hostile / "junk" food — halved too for consistency
    'minecraft:poisonous_potato':       1,  // 2 -> 1
    'minecraft:rotten_flesh':           2,  // 4 -> 2
    'minecraft:spider_eye':             1,  // 2 -> 1
}

ItemEvents.modification(event => {
    for (const id in HALVED) {
        const hunger = HALVED[id]
        event.modify(id, item => {
            item.foodProperties = food => food.hunger(hunger)
        })
    }
})
