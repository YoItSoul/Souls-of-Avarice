// ============================================================
// SoA Dungeon Loot — port of GreedyCraft scripts/loot_tables/dungeon.zs
//
// 1.12 GC used LootTweaker to add a master item list to ~28 chest tables
// (vanilla + AbyssalCraft + CQR + Lost Cities + Aether Legacy + DefiledLands
// + Quark). Hardmode-gated additions appended a "hardmode" pool with a
// `required_stage: hardmode` condition + 50% random chance.
//
// 1.20.1 port uses LootJS (lootjs-forge mod). Target chest table list trimmed
// to mods actually installed in SoA:
//   - vanilla chests (12 tables)
//   - aether 1.20.1 (replaces aether_legacy; chest table IDs differ)
//   - quark pirate chest
//   - twilightforest hill / hedge_maze / aurora chests (NEW: GC didn't target
//     these; intentionally added since TF is a major loot source in SoA)
// Skipped tables (mods absent): aether_legacy, abyssalcraft, cqrepoured,
//   defiledlands, lostcities.
//
// Item ID translations (1.12 → 1.20.1, per project_gc_port_id_mapping memory):
//   additions:greedycraft-* → soa_additions:* (prefix stripped)
//   additions:tcsponsors-*  → soa_additions:* (prefix stripped)
//   thermalfoundation:material:N → various thermal:* by metadata
//   thaumcraft:* → SKIP (Thaumcraft absent in 1.20.1)
//   abyssalcraft:* → SKIP
//   bountifulbaubles:* → SKIP
//   touhou_little_maid:* → SKIP
//   pyramidplunder:* → SKIP
//   modularmachinery:* → SKIP (we use CM Fork; different blocks)
//   compactmachines3:* → compactmachines:* (1.20 namespace)
//   ceramics:unfired_clay:9 → SKIP (mod absent)
//   harvestcraft:* → SKIP (no 1:1 farmersdelight equivalents)
//   randomthings:* → SKIP
//   prefab:* → prefab:* (installed, but specific structure NBT items dropped
//     since 1.20 prefab uses different ItemHandler API)
//   redstonepaste:* → redstonepen:* (1.20 fork)
//   oeintegration:* → SKIP
//   sakura:* → SKIP (mod absent)
//   inventorypets:meta_pet → inventorypets:meta_pet (still installed)
//   draconicevolution:* → draconicevolution:* (installed)
//
// Hardmode gating: SDM GameStages provides `gamestages:has_stages` loot
// condition. Plus a 50% random chance per the GC source.
// ============================================================

console.info('[soa_scripts] loot_dungeon.js loading')

// Vanilla + present-mod chest tables that match GC's intent
const TABLES = [
    'minecraft:chests/simple_dungeon',
    'minecraft:chests/abandoned_mineshaft',
    'minecraft:chests/end_city_treasure',
    'minecraft:chests/igloo_chest',
    'minecraft:chests/jungle_temple',
    'minecraft:chests/nether_bridge',
    'minecraft:chests/stronghold_corridor',
    'minecraft:chests/stronghold_crossing',
    'minecraft:chests/stronghold_library',
    'minecraft:chests/desert_pyramid',
    'minecraft:chests/woodland_mansion',
    'minecraft:chests/village/village_weaponsmith',
    'minecraft:chests/village/village_armorer',
    'minecraft:chests/village/village_toolsmith',
    'minecraft:gameplay/fishing/treasure',
    'quark:chests/pirate_chest',
    // Twilight Forest extras
    'twilightforest:chests/hedge_maze',
    'twilightforest:chests/hill_1',
    'twilightforest:chests/hill_2',
    'twilightforest:chests/hill_3',
    'twilightforest:chests/aurora_cache',
    // Aether 1.20.1 (modern aether mod, NOT aether_legacy)
    'aether:chests/dungeon/bronze_dungeon',
    'aether:chests/dungeon/silver_dungeon',
    'aether:chests/dungeon/gold_dungeon',
]

// Each row: [item, weight, min, max]. Quality and conditions handled separately.
// 'quality' from GC source is dropped — LootJS quality semantics differ;
// the weight value is what actually controls roll likelihood.
const NORMAL_ENTRIES = [
    // ---- vanilla survival staples (kept as-is from GC dungeon.zs) ----
    ['minecraft:bone',                  50, 1, 2],
    ['minecraft:cobweb',                40, 1, 2],   // 1.13 rename: web → cobweb
    ['minecraft:string',                10, 1, 2],
    ['minecraft:gunpowder',             20, 1, 4],
    ['minecraft:leather',                6, 1, 5],
    ['minecraft:rotten_flesh',          60, 1, 2],
    ['minecraft:black_dye',             25, 1, 2],   // GC dye:15 → black
    ['minecraft:paper',                 15, 1, 2],
    ['minecraft:clay_ball',             10, 1, 12],
    ['minecraft:redstone',              10, 1, 16],
    ['minecraft:lapis_lazuli',          10, 1, 16],  // GC dye:4 → lapis
    ['minecraft:wheat',                 10, 1, 4],
    ['minecraft:wheat_seeds',            4, 1, 4],
    ['minecraft:melon_seeds',            4, 1, 4],
    ['minecraft:pumpkin_seeds',          4, 1, 4],
    ['minecraft:book',                  15, 1, 1],
    ['minecraft:compass',                3, 1, 1],
    ['minecraft:map',                    3, 1, 1],
    ['minecraft:clock',                  3, 1, 1],
    ['minecraft:glass_bottle',           6, 1, 1],
    ['minecraft:experience_bottle',     12, 1, 3],
    ['minecraft:emerald',               10, 1, 2],
    ['minecraft:diamond',               12, 1, 8],
    ['minecraft:coal',                  10, 1, 3],
    // ---- second clay drop (GC has it twice, keeping verbatim) ----
    ['minecraft:clay_ball',             12, 1, 16],
    ['minecraft:glowstone_dust',         8, 1, 12],
    ['minecraft:quartz',                10, 1, 16],
    // ---- AE2 (still installed) ----
    ['appliedenergistics2:certus_quartz_dust',     12, 1, 14],
    ['appliedenergistics2:fluix_dust',              5, 1, 14],
    ['appliedenergistics2:certus_quartz_crystal',  10, 1, 12],
    ['appliedenergistics2:logic_processor',         3, 1, 3],
    ['appliedenergistics2:engineering_processor',   1, 1, 2],
    // ---- soa_additions absorbed greedycraft items ----
    ['soa_additions:blood_sigil',                   2, 1, 1],
    ['soa_additions:chromium_ingot',                5, 1, 4],
    ['soa_additions:time_fragment',                18, 1, 1],
    ['soa_additions:time_shard',                    3, 1, 1],
    ['soa_additions:experience_ingot',             18, 1, 2],
    ['soa_additions:reward_ticket_common',         25, 1, 1],
    ['soa_additions:reward_ticket_rare',            8, 1, 1],
    ['soa_additions:reward_ticket_epic',            2, 1, 1],
    ['soa_additions:medkit_super',                  1, 1, 1],
    ['soa_additions:medkit_big',                    4, 1, 1],
    ['soa_additions:medkit_small',                 16, 1, 1],
    ['soa_additions:delivery_order',                3, 1, 1],
    ['soa_additions:tower_chest_key',               2, 1, 1],
    ['soa_additions:sunny_doll',                    4, 1, 1],
    ['soa_additions:bag_of_dyes',                   6, 1, 1],
    ['soa_additions:huaji',                         3, 1, 1],
    ['soa_additions:poop',                          8, 1, 1],
    ['soa_additions:experience_transporter',        1, 1, 1],
    ['soa_additions:blueprint_laser_gun',           1, 1, 1],
    ['soa_additions:skill_reset_scroll',            1, 1, 1],
    ['soa_additions:plate_of_honor',                1, 1, 1],
    ['soa_additions:purifying_dust',                3, 1, 10],
    ['soa_additions:respawn_anchor',                1, 1, 1],
    ['soa_additions:loli_lolipop',                  3, 1, 1],
    ['soa_additions:food_bag',                      4, 1, 1],
    ['soa_additions:furniture_crate',               3, 1, 1],
    ['soa_additions:catalyst_star',                 2, 1, 1],
    ['soa_additions:slime_crown',                   2, 1, 1],
    ['soa_additions:shining_star',                  2, 1, 1],
    ['soa_additions:strange_matter',                1, 1, 1],
    ['soa_additions:perfectly_generic_item',        2, 1, 1],
    ['soa_additions:netherite_scrap',               2, 1, 3],
    ['soa_additions:true_eye_of_ender',             1, 1, 1],
    ['soa_additions:sponsor_chest_fragment',        6, 1, 1],
    ['soa_additions:sponsors_chest',                1, 1, 1],
    ['soa_additions:forbidden_bible',               1, 1, 1],
    // ---- ProjectE ----
    ['projecte:low_covalence_dust',                 3, 1, 2],
    // ---- ae2wtlib ----
    ['ae2wtlib:infinity_booster_card',             12, 1, 1],
    // ---- ProgressiveBosses ----
    ['progressivebosses:nether_star_shard',         2, 1, 4],
    // ---- ScalingHealth ----
    ['scalinghealth:crystal_shard',                 3, 1, 1],
    ['scalinghealth:heart_dust',                   10, 1, 3],
    // ---- LootBags (still installed) ----
    ['lootbags:itemlootbag',                        5, 1, 1],
    // ---- MysticalAgriculture ----
    ['mysticalagriculture:inferium_essence',        8, 1, 16],
    ['mysticalagriculture:prudentium_essence',      4, 1, 6],
    ['mysticalagriculture:tertium_essence',         3, 1, 5],
    // ---- FluxNetworks ----
    ['fluxnetworks:flux_core',                      3, 1, 5],
    // ---- Cataclysm replacement for cyclicmagic:ender_tnt_6 ----
    ['minecraft:tnt',                              12, 1, 1],
    // ---- Thermal (1.20.1 namespace; collapsed from thermalfoundation:material:N) ----
    ['thermal:copper_ingot',                       10, 1, 2],
    ['thermal:tin_ingot',                          10, 1, 2],
    ['thermal:silver_ingot',                       18, 1, 2],
    ['thermal:lead_ingot',                          6, 1, 2],
    ['thermal:nickel_ingot',                        8, 1, 2],
    ['thermal:bronze_ingot',                        8, 1, 2],
    ['thermal:electrum_ingot',                      7, 1, 3],
    ['thermal:invar_ingot',                         6, 1, 3],
    ['thermal:steel_ingot',                         4, 1, 2],
    ['thermal:constantan_ingot',                    6, 1, 2],
    // ---- InventoryPets ----
    ['inventorypets:meta_pet',                      3, 1, 1],
    // ---- EnderIO 6.x (1.20.1) ----
    ['enderio:energetic_alloy_ingot',               8, 1, 4],
    ['enderio:vibrant_alloy_ingot',                 6, 1, 4],
    ['enderio:dark_steel_ingot',                    4, 1, 4],
    // ---- ExtraUtilities2 absent → SKIP extrautils2:ingredients:12 ----
    // ---- Charm absent → SKIP suspicious_soup, lanterns ----
    // ---- TouhouLittleMaid absent → SKIP gashapon_coin ----
    // ---- ActuallyAdditions absent → SKIP block_treasure_chest ----
    // ---- AbyssalCraft absent → SKIP shadow gems ----
    // ---- Thaumcraft absent → SKIP curio, sanity_soap, ingot:2 ----
    // ---- HarvestCraft absent → SKIP bambooshootitem, hamandpineapple pizza ----
    // ---- BountifulBaubles absent → SKIP potion recall/wormhole ----
    // ---- Avaritia placement (resource:1) deferred to hardmode pool ----
    // ---- Torchmaster (installed) ----
    ['torchmaster:megatorch',                       2, 1, 1],
    ['torchmaster:dread_lamp',                      2, 1, 1],
    ['torchmaster:feral_flare_lantern',             2, 1, 1],
    // ---- Vanilla potions ----
    // (kept structured below; LootJS .withNBT() is needed)
]

// Hardmode entries — only roll if the player has the 'hardmode' stage,
// plus a 50% random chance per the GC source.
const HARDMODE_ENTRIES = [
    // ---- Vanilla bulk staples ----
    ['minecraft:bone',                  24, 1, 22],
    ['minecraft:cobweb',                20, 1, 12],
    ['minecraft:string',                10, 1, 12],
    ['minecraft:gunpowder',             14, 1, 8],
    ['minecraft:leather',                6, 1, 5],
    ['minecraft:rotten_flesh',          36, 1, 16],
    ['minecraft:black_dye',             12, 1, 3],
    ['minecraft:paper',                  7, 1, 4],
    ['minecraft:clay_ball',              5, 1, 32],
    ['minecraft:redstone',               6, 1, 32],
    ['minecraft:lapis_lazuli',          10, 1, 32],
    ['minecraft:book',                  12, 1, 3],
    ['minecraft:emerald',                7, 1, 8],
    ['minecraft:diamond',               10, 1, 10],
    ['minecraft:gold_ingot',            16, 1, 12],
    ['minecraft:end_rod',                3, 1, 8],
    ['minecraft:chorus_fruit_popped',    4, 1, 4],
    ['minecraft:chorus_fruit',           4, 1, 4],
    // ---- TAIGA materials (installed via soa_taiga thingpack) ----
    ['taiga:iox_ingot',                  1, 1, 1],
    ['taiga:solarium_ingot',             1, 1, 1],
    ['taiga:imperomite_ingot',           1, 1, 1],
    ['taiga:violium_ingot',              1, 1, 1],
    ['taiga:proxii_ingot',               1, 1, 1],
    ['taiga:lumix_ingot',                1, 1, 1],
    ['taiga:seismum_ingot',              1, 1, 1],
    ['taiga:nucleum_ingot',              1, 1, 1],
    ['taiga:dyonite_ingot',              1, 1, 1],
    ['taiga:niob_ingot',                 1, 1, 1],
    ['taiga:ignitz_ingot',               1, 1, 1],
    ['taiga:tritonite_ingot',            1, 1, 1],
    ['taiga:tiberium_ingot',             2, 1, 3],
    ['taiga:aurorium_ingot',             2, 1, 3],
    ['taiga:prometheum_ingot',           2, 1, 3],
    ['taiga:duranite_ingot',             2, 1, 3],
    ['taiga:valyrium_ingot',             2, 1, 3],
    ['taiga:vibranium_ingot',            2, 1, 3],
    ['taiga:karmesine_ingot',            2, 1, 3],
    ['taiga:ovium_ingot',                2, 1, 3],
    ['taiga:jauxum_ingot',               2, 1, 3],
    ['taiga:terrax_ingot',               2, 1, 3],
    ['taiga:palladium_ingot',            2, 1, 3],
    ['taiga:osram_ingot',                2, 1, 3],
    ['taiga:abyssum_ingot',              2, 1, 3],
    ['taiga:eezo_ingot',                 2, 1, 3],
    ['taiga:triberium_ingot',            2, 1, 3],
    ['taiga:fractum_ingot',              2, 1, 3],
    ['taiga:dilithium_ingot',            2, 1, 3],
    // taiga:uru_ingot intentionally skipped — soa_additions provides URU
    ['soa_additions:uru_ingot',          2, 1, 3],
    // ---- EnderIO 6.x ----
    ['enderio:end_steel_ingot',          2, 1, 2],
    ['enderio:dark_steel_ingot',         2, 1, 2],
    ['enderio:vivid_alloy_ingot',        2, 1, 2],
    // ---- Draconic Evolution ----
    ['draconicevolution:draconium_ingot',   3, 1, 8],
    ['draconicevolution:draconic_core',     3, 1, 4],
    // ---- ProjectE ----
    ['projecte:medium_covalence_dust',   2, 1, 4],
    ['projecte:high_covalence_dust',     2, 1, 3],
    ['projecte:dark_matter',             2, 1, 1],
    ['projecte:nova_cataclysm',          2, 1, 1],
    // ---- soa_additions endgame ----
    ['soa_additions:catalyst_star',      3, 1, 1],
    ['soa_additions:stainless_steel_ingot',  3, 1, 8],
    ['soa_additions:time_shard',         1, 1, 1],
    ['soa_additions:time_fragment',      4, 1, 2],
    ['soa_additions:compressed_experience_block',  2, 1, 2],
    ['soa_additions:pearl_of_knowledge', 1, 1, 1],
    ['soa_additions:reward_ticket_common',  10, 1, 1],
    ['soa_additions:reward_ticket_rare',  5, 1, 1],
    ['soa_additions:reward_ticket_epic',  2, 1, 1],
    ['soa_additions:reward_ticket_legendary',  1, 1, 1],
    ['soa_additions:perfectly_generic_item',  2, 1, 1],
    // ---- MysticalAgriculture (high-tier) ----
    ['mysticalagriculture:imperium_essence',     4, 1, 10],
    ['mysticalagriculture:supremium_essence',    3, 1, 4],
    ['mysticalagriculture:soulium_dust',         2, 1, 1],
    ['mysticalagriculture:fertilized_essence',   4, 1, 8],
    ['mysticalagriculture:mystical_fertilizer',  3, 1, 4],
    // ---- Avaritia (Re-Avaritia) ----
    ['avaritia:neutron_pile',                    3, 1, 6],
    ['avaritia:neutron_nugget',                  2, 1, 1],
    ['avaritia:neutron_ingot',                   1, 1, 1],
    // ---- Botania ----
    ['botania:mana_diamond',                     2, 1, 2],
    ['botania:terrasteel_ingot',                 2, 1, 4],
    // ---- Thermal endgame ----
    ['thermal:enderium_ingot',                   2, 1, 2],
    // ---- AE2 high-tier ----
    ['appliedenergistics2:logic_processor_press',     2, 1, 1],
    ['appliedenergistics2:engineering_processor_press', 2, 1, 1],
    ['appliedenergistics2:fluix_crystal',             2, 1, 20],
    ['minecraft:gold_ingot',                          16, 1, 12],
    // ---- Compact Machines (1.20 namespace renamed) ----
    ['compactmachines:wall_breakable',                2, 1, 32],
    ['compactmachines:machine_advanced',              1, 1, 1],
    ['compactmachines:machine_giant',                 1, 1, 1],
    // ---- Prefab (still installed; specific structure NBT items dropped) ----
    ['prefab:item_advanced_warehouse',                1, 1, 1],
    ['prefab:item_moderate_house',                    1, 1, 1],
]

// LootJS modifier registration. Runs in startup_scripts; the
// LootJS plugin emits ItemStacks with weight/count/condition support.
LootJS.modifiers((event) => {
    const stages = Java.loadClass('net.darkhax.gamestages.GameStageHelper')

    // ---- Normal-tier additions (unconditional) ----
    for (const [item, weight, min, max] of NORMAL_ENTRIES) {
        try {
            event.addLootTableModifier(TABLES)
                .addLoot({ item: item, count: min === max ? min : { min: min, max: max }, chance: weight / 100 })
        } catch (e) {
            // Item ID didn't resolve — silently drop. Per project memory
            // 'Exact 1:1 recipe ports': we let absent IDs fail and the user
            // can fix once-and-done if a target mod gets added later.
            console.warn('[loot_dungeon] skip normal ' + item + ': ' + e)
        }
    }

    // ---- Hardmode-tier additions (gated on `hardmode` GameStage + 50% RNG) ----
    for (const [item, weight, min, max] of HARDMODE_ENTRIES) {
        try {
            event.addLootTableModifier(TABLES)
                .randomChance(0.5)
                .playerPredicate((p) => p && stages.hasStage(p, 'hardmode'))
                .addLoot({ item: item, count: min === max ? min : { min: min, max: max }, chance: weight / 100 })
        } catch (e) {
            console.warn('[loot_dungeon] skip hardmode ' + item + ': ' + e)
        }
    }

    console.info('[soa_scripts] loot_dungeon.js: registered ' +
                 NORMAL_ENTRIES.length + ' normal + ' +
                 HARDMODE_ENTRIES.length + ' hardmode entries across ' +
                 TABLES.length + ' tables')
})

// Note: GC seasonal additions (Christmas gift, LunarNewYear red_packet) are
// handled in loot_mobs.js and loot_chests_seasonal.js when those land.

// ---- Expert-mode goodie_bag (port of expert/loot_tables.zs) ----
// Mode evaluated once at startup; mode change requires server restart for
// this entry to take effect (matches GC CT #packmode behavior).
let _SOA_MODE = 'adventure'
try { _SOA_MODE = String(global.SOA_PACKMODE || 'adventure') } catch (e) { /* */ }
if (_SOA_MODE === 'expert') {
    LootJS.modifiers((event) => {
        try {
            event.addLootTableModifier('minecraft:chests/simple_dungeon')
                .addLoot(Item.of('soa_additions:goodie_bag').withChance(4 / 100))
            console.info('[loot_dungeon] expert mode: goodie_bag added to simple_dungeon')
        } catch (e) {
            console.warn('[loot_dungeon] goodie_bag: ' + e)
        }
    })
}
