console.info('[soa_scripts] soa_mob_armor.js loading')

const MOB_ARMOR_MULTIPLIER = global.MOB_ARMOR_MULTIPLIER ?? 1.0

const ARMORABLE_MOBS = [
    'minecraft:zombie',
    'minecraft:skeleton',
    'minecraft:zombified_piglin',
    'minecraft:husk',
    'minecraft:stray',
    'minecraft:wither_skeleton',
    'minecraft:drowned',
]

const SLOT = { head: 'HEAD', chest: 'CHEST', legs: 'LEGS', feet: 'FEET',
               mainhand: 'MAINHAND', offhand: 'OFFHAND' }

const PRE_NETHER = {
    chance: 0.25,
    sets: [

        { items: { head: 'minecraft:leather_helmet', chest: 'minecraft:leather_chestplate',
                   legs: 'minecraft:leather_leggings', feet: 'minecraft:leather_boots',
                   mainhand: 'minecraft:wooden_sword' }, weight: 20 },
        { items: { mainhand: 'minecraft:stone_sword' }, weight: 15 },
        { items: { mainhand: 'minecraft:iron_pickaxe', offhand: 'minecraft:torch' }, weight: 15 },
        { items: { mainhand: 'minecraft:diamond_pickaxe', offhand: 'minecraft:torch' }, weight: 10 },

        { items: { head: 'minecraft:iron_helmet', chest: 'minecraft:iron_chestplate',
                   legs: 'minecraft:iron_leggings', feet: 'minecraft:iron_boots',
                   mainhand: 'minecraft:iron_sword' }, weight: 15 },

        { items: { head: 'minecraft:chainmail_helmet', chest: 'minecraft:chainmail_chestplate',
                   legs: 'minecraft:chainmail_leggings', feet: 'minecraft:chainmail_boots' }, weight: 15 },

        { items: { head: 'minecraft:golden_helmet', chest: 'minecraft:golden_chestplate',
                   legs: 'minecraft:golden_leggings', feet: 'minecraft:golden_boots',
                   mainhand: 'minecraft:golden_sword' }, weight: 10 },

        { items: { head: 'minecraft:diamond_helmet', chest: 'minecraft:diamond_chestplate',
                   legs: 'minecraft:diamond_leggings', feet: 'minecraft:diamond_boots',
                   mainhand: 'minecraft:diamond_sword' }, weight: 5 },

        { items: { offhand: 'minecraft:shield' }, weight: 20 },

        { items: { mainhand: Item.of('minecraft:diamond_sword').enchant('minecraft:knockback', 1) }, weight: 3 },

        { items: { head: Item.of('minecraft:leather_helmet').withNBT({ display: { color: 0xC62828 } }),
                   chest: Item.of('minecraft:leather_chestplate').withNBT({ display: { color: 0xC62828 } }),
                   legs: Item.of('minecraft:leather_leggings').withNBT({ display: { color: 0xC62828 } }),
                   feet: Item.of('minecraft:leather_boots').withNBT({ display: { color: 0xC62828 } }) }, weight: 3 },
    ]
}

const POST_NETHER = {
    chance: 0.20,
    sets: [

        { items: { head: Item.of('minecraft:diamond_helmet').enchant('minecraft:protection', 2),
                   chest: Item.of('minecraft:diamond_chestplate').enchant('minecraft:protection', 2),
                   legs: Item.of('minecraft:diamond_leggings').enchant('minecraft:protection', 2),
                   feet: Item.of('minecraft:diamond_boots').enchant('minecraft:protection', 2),
                   mainhand: Item.of('minecraft:diamond_sword').enchant('minecraft:sharpness', 2) }, weight: 10 },

        { items: { head: 'minecraft:netherite_helmet', chest: 'minecraft:netherite_chestplate',
                   legs: 'minecraft:netherite_leggings', feet: 'minecraft:netherite_boots',
                   mainhand: 'minecraft:netherite_sword' }, weight: 5 },

        { items: { mainhand: Item.of('minecraft:bow').enchant('minecraft:power', 3),
                   offhand: 'minecraft:arrow' }, weight: 8 },

        { items: { mainhand: 'minecraft:crossbow', offhand: 'minecraft:arrow' }, weight: 8 },

        { items: { mainhand: 'nyx:meteor_sword' }, weight: 5 },
        { items: { mainhand: 'nyx:scythe' }, weight: 4 },

        { items: { offhand: Item.of('minecraft:shield').enchant('minecraft:unbreaking', 2) }, weight: 12 },
    ]
}

const POST_HARDMODE = {
    chance: 0.20,
    sets: [

        { items: { head: Item.of('minecraft:netherite_helmet').enchant('minecraft:protection', 4),
                   chest: Item.of('minecraft:netherite_chestplate').enchant('minecraft:protection', 4),
                   legs: Item.of('minecraft:netherite_leggings').enchant('minecraft:protection', 4),
                   feet: Item.of('minecraft:netherite_boots').enchant('minecraft:protection', 4),
                   mainhand: Item.of('minecraft:netherite_sword').enchant('minecraft:sharpness', 5) }, weight: 10 },

        { items: { head: 'nyx:meteor_helm', chest: 'nyx:meteor_chest',
                   legs: 'nyx:meteor_pants', feet: 'nyx:meteor_boots',
                   mainhand: 'nyx:meteor_sword' }, weight: 5 },

        { items: { mainhand: Item.of('minecraft:bow').enchant('minecraft:power', 5).enchant('minecraft:flame', 1),
                   offhand: 'minecraft:arrow' }, weight: 5 },

        { items: { mainhand: Item.of('minecraft:crossbow').enchant('minecraft:quick_charge', 3),
                   offhand: 'minecraft:firework_rocket' }, weight: 5 },

        { items: { mainhand: 'nyx:meteor_hammer' }, weight: 4 },
        { items: { mainhand: 'nyx:meteor_axe' }, weight: 4 },
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

function equip(entity, items) {
    for (const k in items) {
        const slotName = SLOT[k]
        if (!slotName) continue
        try {
            entity.setItemSlot(slotName, Item.of(items[k]))
            entity.setDropChance(slotName, 0.0)
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
        break
    }
})

console.info('[soa_scripts] soa_mob_armor.js: registered (' + GROUPS.length +
             ' groups, multiplier=' + MOB_ARMOR_MULTIPLIER + ')')
