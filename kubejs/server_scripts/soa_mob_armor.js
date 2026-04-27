// ============================================================
// SoA Mob Armor — port of GreedyCraft scripts/misc/mob_armor.zs
//
// 1.12 GC used the armoreablemobs mod with three weighted-set groups
// (pre_nether / post_nether / post_hardmode) gated by gamestage. The
// nearest player's gamestages decide which group rolls when a hostile
// mob spawns; if the roll succeeds, the mob is dressed in a randomly
// picked armor + weapon set from that group.
//
// 1.20.1 has no armoreablemobs equivalent, so we reproduce the behavior
// with a KubeJS EntityEvents.spawned listener:
//   1. Filter to vanilla hostile mobs the GC script targeted
//   2. Find the nearest player and check their gamestages (mod present)
//   3. For each group the player has unlocked, roll group.chance
//   4. On success, pick a weighted random set and apply it
//
// Item-set translation:
//   - Vanilla armor + Tinker tools: kept where IDs translate cleanly
//   - actuallyadditions / cyclicmagic / abyssalcraft / pvj sets: dropped
//     (mods absent in SoA 1.20.1)
//   - thermalfoundation tool/armor families: collapsed to thermal: ids
//   - Tinker NBT tools: dropped from the table; would need Tinker tool
//     re-creation via TC3 ToolBuildHandler. Substituted plain vanilla
//     equivalents at the same effective tier
//
// Multipliers honored:
//   MOB_ARMOR_MULTIPLIER → from packmode (default 1.0; expert 1.5).
//   Effective chance per group = base_chance × MOB_ARMOR_MULTIPLIER.
// ============================================================

console.info('[soa_scripts] soa_mob_armor.js loading')

// Sourced from _packmode.js global table — values match GC verbatim:
//   casual    = 0.5x   adventure = 1.0x   expert = 1.5x
const MOB_ARMOR_MULTIPLIER = global.MOB_ARMOR_MULTIPLIER ?? 1.0

// Hostile mob entity types that GC dressed up. Original list also
// included headcrumbs:human and pvj:pvj_skeletal_knight (absent here).
const ARMORABLE_MOBS = [
    'minecraft:zombie',
    'minecraft:skeleton',
    'minecraft:zombified_piglin',  // 1.13 rename of zombie_pigman
    'minecraft:husk',
    'minecraft:stray',
    'minecraft:wither_skeleton',   // added — fits gating without extra GC scope
    'minecraft:drowned',           // 1.13+ — same gating as zombie family
]

// Armor slot mapping. KubeJS Living entities expose `setItemSlot()` taking
// a vanilla EquipmentSlot. We pass the ID strings here and resolve via
// the slot-name helper below.
const SLOT = { head: 'HEAD', chest: 'CHEST', legs: 'LEGS', feet: 'FEET',
               mainhand: 'MAINHAND', offhand: 'OFFHAND' }

// Each set is { items: { slot: itemId, ... }, weight: int }.
// Per GC: sets are weighted within a group; the picker rolls weighted
// random across the group's sets. Drop chance is fixed to 0 (-10000.0
// in GC's enchantmentChance arg → never drops).
const PRE_NETHER = {
    chance: 0.25,
    sets: [
        // Leather + wooden sword (GC %20 in each slot)
        { items: { head: 'minecraft:leather_helmet', chest: 'minecraft:leather_chestplate',
                   legs: 'minecraft:leather_leggings', feet: 'minecraft:leather_boots',
                   mainhand: 'minecraft:wooden_sword' }, weight: 20 },
        { items: { mainhand: 'minecraft:stone_sword' }, weight: 15 },
        { items: { mainhand: 'minecraft:iron_pickaxe', offhand: 'minecraft:torch' }, weight: 15 },
        { items: { mainhand: 'minecraft:diamond_pickaxe', offhand: 'minecraft:torch' }, weight: 10 },
        // Iron set (GC %15)
        { items: { head: 'minecraft:iron_helmet', chest: 'minecraft:iron_chestplate',
                   legs: 'minecraft:iron_leggings', feet: 'minecraft:iron_boots',
                   mainhand: 'minecraft:iron_sword' }, weight: 15 },
        // Chainmail set (GC %15)
        { items: { head: 'minecraft:chainmail_helmet', chest: 'minecraft:chainmail_chestplate',
                   legs: 'minecraft:chainmail_leggings', feet: 'minecraft:chainmail_boots' }, weight: 15 },
        // Gold set (GC %10)
        { items: { head: 'minecraft:golden_helmet', chest: 'minecraft:golden_chestplate',
                   legs: 'minecraft:golden_leggings', feet: 'minecraft:golden_boots',
                   mainhand: 'minecraft:golden_sword' }, weight: 10 },
        // Diamond set (GC %5)
        { items: { head: 'minecraft:diamond_helmet', chest: 'minecraft:diamond_chestplate',
                   legs: 'minecraft:diamond_leggings', feet: 'minecraft:diamond_boots',
                   mainhand: 'minecraft:diamond_sword' }, weight: 5 },
        // Vanilla shield offhand
        { items: { offhand: 'minecraft:shield' }, weight: 20 },
        // Diamond sword + Knockback I (GC %3)
        { items: { mainhand: Item.of('minecraft:diamond_sword').enchant('minecraft:knockback', 1) }, weight: 3 },
        // Substitutes for actuallyadditions crystal armor sets — closest 1.20 analog is dyed leather.
        { items: { head: Item.of('minecraft:leather_helmet').withNBT({ display: { color: 0xC62828 } }),
                   chest: Item.of('minecraft:leather_chestplate').withNBT({ display: { color: 0xC62828 } }),
                   legs: Item.of('minecraft:leather_leggings').withNBT({ display: { color: 0xC62828 } }),
                   feet: Item.of('minecraft:leather_boots').withNBT({ display: { color: 0xC62828 } }) }, weight: 3 },
    ]
}

const POST_NETHER = {
    chance: 0.20,
    sets: [
        // High-tier vanilla armor with enchants
        { items: { head: Item.of('minecraft:diamond_helmet').enchant('minecraft:protection', 2),
                   chest: Item.of('minecraft:diamond_chestplate').enchant('minecraft:protection', 2),
                   legs: Item.of('minecraft:diamond_leggings').enchant('minecraft:protection', 2),
                   feet: Item.of('minecraft:diamond_boots').enchant('minecraft:protection', 2),
                   mainhand: Item.of('minecraft:diamond_sword').enchant('minecraft:sharpness', 2) }, weight: 10 },
        // Netherite set (post-nether is when these become craftable)
        { items: { head: 'minecraft:netherite_helmet', chest: 'minecraft:netherite_chestplate',
                   legs: 'minecraft:netherite_leggings', feet: 'minecraft:netherite_boots',
                   mainhand: 'minecraft:netherite_sword' }, weight: 5 },
        // Bow + arrows
        { items: { mainhand: Item.of('minecraft:bow').enchant('minecraft:power', 3),
                   offhand: 'minecraft:arrow' }, weight: 8 },
        // Crossbow
        { items: { mainhand: 'minecraft:crossbow', offhand: 'minecraft:arrow' }, weight: 8 },
        // SoA-tier weapons (custom items from the absorbed mods)
        { items: { mainhand: 'soa_additions:meteor_sword' }, weight: 5 },
        { items: { mainhand: 'soa_additions:scythe' }, weight: 4 },
        // Shield offhand
        { items: { offhand: Item.of('minecraft:shield').enchant('minecraft:unbreaking', 2) }, weight: 12 },
    ]
}

const POST_HARDMODE = {
    chance: 0.20,
    sets: [
        // Top-tier vanilla netherite with high enchants
        { items: { head: Item.of('minecraft:netherite_helmet').enchant('minecraft:protection', 4),
                   chest: Item.of('minecraft:netherite_chestplate').enchant('minecraft:protection', 4),
                   legs: Item.of('minecraft:netherite_leggings').enchant('minecraft:protection', 4),
                   feet: Item.of('minecraft:netherite_boots').enchant('minecraft:protection', 4),
                   mainhand: Item.of('minecraft:netherite_sword').enchant('minecraft:sharpness', 5) }, weight: 10 },
        // Meteor armor set (Nyx port)
        { items: { head: 'soa_additions:meteor_helm', chest: 'soa_additions:meteor_chest',
                   legs: 'soa_additions:meteor_pants', feet: 'soa_additions:meteor_boots',
                   mainhand: 'soa_additions:meteor_sword' }, weight: 5 },
        // Bow with sharpness-equivalent
        { items: { mainhand: Item.of('minecraft:bow').enchant('minecraft:power', 5).enchant('minecraft:flame', 1),
                   offhand: 'minecraft:arrow' }, weight: 5 },
        // Stronger crossbow
        { items: { mainhand: Item.of('minecraft:crossbow').enchant('minecraft:quick_charge', 3),
                   offhand: 'minecraft:firework_rocket' }, weight: 5 },
        // Custom soa_additions hammers/scythes
        { items: { mainhand: 'soa_additions:meteor_hammer' }, weight: 4 },
        { items: { mainhand: 'soa_additions:meteor_axe' }, weight: 4 },
    ]
}

const GROUPS = [
    { name: 'pre_nether',     stage: 'getting_started', config: PRE_NETHER },
    { name: 'post_nether',    stage: 'nether',          config: POST_NETHER },
    { name: 'post_hardmode',  stage: 'hardmode',        config: POST_HARDMODE },
]

let GameStageHelper = null
try {
    GameStageHelper = Java.loadClass('net.darkhax.gamestages.GameStageHelper')
} catch (e) {
    console.error('[soa_mob_armor] GameStages not loaded; mob armor gating disabled: ' + e)
}

// Pick a weighted random set from {sets:[{items, weight}]}.
function pickWeightedSet(group) {
    let total = 0
    for (const s of group.sets) total += s.weight
    if (total <= 0) return null
    let roll = Math.random() * total
    for (const s of group.sets) {
        roll -= s.weight
        if (roll <= 0) return s
    }
    return group.sets[group.sets.length - 1]
}

// Apply equipment to a Minecraft LivingEntity. KubeJS Living wraps it as
// `entity` with helpers like `setItemSlot(slotName, itemstack)`.
function equip(entity, items) {
    for (const k in items) {
        const slotName = SLOT[k]
        if (!slotName) continue
        try {
            entity.setItemSlot(slotName, Item.of(items[k]))
            entity.setDropChance(slotName, 0.0)  // never drop, matches GC -10000 chance
        } catch (e) {
            console.warn('[soa_mob_armor] setItemSlot failed for ' + slotName + ': ' + e)
        }
    }
}

EntityEvents.spawned(event => {
    const entity = event.entity
    if (!entity || !entity.living) return
    if (ARMORABLE_MOBS.indexOf(String(entity.type)) < 0) return
    if (!GameStageHelper) return

    // Find nearest player; pick their stages. Group order matters: rolls
    // start from highest tier (post_hardmode) and fall through, so a
    // hardmode-staged player gets the strongest gear on average.
    const player = entity.level.getNearestPlayer(entity, 64.0)
    if (!player) return

    for (let i = GROUPS.length - 1; i >= 0; i--) {
        const g = GROUPS[i]
        if (!GameStageHelper.hasStage(player, g.stage)) continue
        const chance = g.config.chance * MOB_ARMOR_MULTIPLIER
        if (Math.random() >= chance) continue
        const set = pickWeightedSet(g.config)
        if (!set) continue
        equip(entity, set.items)
        break  // only one group's gear per spawn
    }
})

console.info('[soa_scripts] soa_mob_armor.js: registered (' + GROUPS.length +
             ' groups, multiplier=' + MOB_ARMOR_MULTIPLIER + ')')
