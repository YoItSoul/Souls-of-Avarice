console.info('[soa_scripts] soa_world_events.js loading')

let GameStageHelper = null
try {
    GameStageHelper = Java.loadClass('net.darkhax.gamestages.GameStageHelper')
} catch (e) {
    console.warn('[soa_world_events] GameStages absent: stage-transition lore disabled')
}

const $Vec3 = Java.loadClass('net.minecraft.world.phys.Vec3')

const HP_OVERFLOW_THRESHOLD = 1048576.0

EntityEvents.spawned(event => {
    const e = event.entity
    if (!e || !e.living) return
    try {
        const max = e.getMaxHealth()
        if (max >= HP_OVERFLOW_THRESHOLD) event.cancel()
    } catch (err) {  }
})

const MOTION_LIMIT = 8.0
const MAX_BOSS_Y = 255.0
const BOSS_RESET_Y = 252.0

const BOSS_TYPE_FRAGMENTS = ['wither', 'ender_dragon', 'frostmaw', 'umvuthi', 'alpha_yeti', 'snow_queen']

const SPAWNER_BREAK_CHANCE = 0.5
const FATIGUE_DURATION = 200
const MAX_FATIGUE_LEVEL = 5

BlockEvents.broken(event => {
    const block = event.block
    const player = event.player
    if (!block || !player || player.creative) return
    if (player.level.isClientSide()) return
    if (String(block.id) !== 'minecraft:spawner') return

    if (Math.random() < SPAWNER_BREAK_CHANCE) {

        const bonusXP = 4 + Math.floor(Math.random() * 12)

        const shDiff = player.persistentData.contains('soa_sh_difficulty')
            ? player.persistentData.getInt('soa_sh_difficulty') : 0
        const diffMult = 1.0 + shDiff * 0.02
        const totalXP = Math.ceil(bonusXP * diffMult)
        try { player.giveExperiencePoints(totalXP) } catch (e) {  }

        try {
            block.popItem(Item.of('soa_additions:time_fragment'))
            if (Math.random() < (1.0 / 33.0)) {
                block.popItem(Item.of('soa_additions:time_fragment'))
            }
        } catch (e) {  }

        try {
            const pool = global.SOA_SPAWNER_SUCCESS_QUOTES
            if (pool && pool.length > 0) {
                const q = pool[Math.floor(Math.random() * pool.length)]
                player.tell(Component.literal('§9[Spawner] §a' + q))
            }
        } catch (e) {  }
        player.tell(Component.translatable('greedycraft.event.mob_spawner.kill_bonus')
            .append(Component.literal(' §e+' + totalXP + 'XP')))
    } else {

        event.cancel()
        const cur = player.getEffect('minecraft:mining_fatigue')
        const lvl = cur ? Math.min(cur.getAmplifier() + 1, MAX_FATIGUE_LEVEL) : 1
        player.potionEffects.add('minecraft:mining_fatigue', FATIGUE_DURATION, lvl, false, false)

        try {
            const pool = global.SOA_SPAWNER_QUOTES
            if (pool && pool.length > 0) {
                const q = pool[Math.floor(Math.random() * pool.length)]
                player.tell(Component.literal('§9[Spawner] §f' + q))
            }
        } catch (e) {  }
        player.tell(Component.translatable('greedycraft.event.mob_spawner.chance')
            .append(Component.literal(' ' + Math.floor(SPAWNER_BREAK_CHANCE * 100) + '%')))
    }
})

const STAGE_MAP_NORMAL = {

    getting_started: 0,
    twilight_forest: 20,
    nether: 64,
    abyssal_conquerer: 128,
    wither_slayer: 256,
    ender_charm: 320,
    hardmode: 640,
    wyvern: 750,
    awakened: 900,
    chaotic_dominator: 1200,
    chaotic: 1400,
    wielder_of_infinity: 1600,
    super_hardmode: 1600,

    expert: 0,
    novice_engineer: 50,   novice_wizard: 50,
    skilled_engineer: 250, skilled_wizard: 250,
    master_engineer: 500,  master_wizard: 500,
    descendant_of_the_sun: 600,
    graduated: 600,
    challenger_a: 600, challenger_b: 750, challenger_c: 900,
    challenger_d: 1050, challenger_e: 1200, challenger_f: 1400, challenger_g: 1600,
    fusion_matrix: 1500,
}
const STAGE_MAP_EXPERT = {

    getting_started: 25,
    twilight_forest: 50,
    nether: 100,
    abyssal_conquerer: 225,
    wither_slayer: 400,
    ender_charm: 480,
    hardmode: 900,
    wyvern: 1050,
    awakened: 1250,
    chaotic_dominator: 1600,
    chaotic: 2000,
    wielder_of_infinity: 2400,
    super_hardmode: 2400,

    expert: 0,
    novice_engineer: 75,   novice_wizard: 75,
    skilled_engineer: 375, skilled_wizard: 375,
    master_engineer: 700,  master_wizard: 700,
    descendant_of_the_sun: 850,
    graduated: 850,
    challenger_a: 900, challenger_b: 1050, challenger_c: 1250,
    challenger_d: 1450, challenger_e: 1700, challenger_f: 2000, challenger_g: 2400,
    fusion_matrix: 2200,
}

function soaStageMap() {
    let mode = 'adventure'
    try { mode = String(global.SOA_PACKMODE || 'adventure') } catch (e) {  }
    return mode === 'expert' ? STAGE_MAP_EXPERT : STAGE_MAP_NORMAL
}

function soaApplyStageDifficulty(player) {
    if (!GameStageHelper) return 0
    const map = soaStageMap()
    let maxDiff = 0
    for (const s in map) {
        if (GameStageHelper.hasStage(player, s) && map[s] > maxDiff) maxDiff = map[s]
    }
    player.persistentData.putInt('soa_sh_difficulty', maxDiff)
    try {
        player.server.runCommandSilent('sh_difficulty ' + player.username + ' set ' + maxDiff)
    } catch (e) {
        console.warn('[soa_world_events] sh_difficulty command failed: ' + e)
    }
    return maxDiff
}
global.soaApplyStageDifficulty = soaApplyStageDifficulty

global.soaOnStageAdded = (player, stage) => onStageAdded(player, stage)

function onStageAdded(player, stage) {

    let mode = 'adventure'
    try { mode = String(global.SOA_PACKMODE || 'adventure') } catch (e) {  }
    if (mode === 'casual' || player.creative) return

    player.tell(Component.literal('§9' + '='.repeat(50)))
    player.tell(Component.translatable('greedycraft.event.stage.lore.title')
        .append(Component.literal(' ').append(Component.literal(stage).gold())))
    player.tell(Component.translatable('greedycraft.event.stage.lore.unlocked'))

    try {
        player.playNotifySound('minecraft:ui.toast.challenge_complete', 'players', 1.0, 1.0)
    } catch (e) {  }

    try {
        const tablet = Item.of('soa_additions:tablet_of_enlightenment').withNBT({
            stage: stage,
            playerName: player.username,
            playerUUID: String(player.uuid),
        })
        if (!player.inventory.add(tablet)) player.drop(tablet, false)
    } catch (e) {  }

    soaApplyStageDifficulty(player)

    player.tell(Component.literal('§9' + '='.repeat(50)))
}

PlayerEvents.loggedIn(event => {
    const player = event.player
    if (!player || player.level.isClientSide()) return
    let mode = 'adventure'
    try { mode = String(global.SOA_PACKMODE || 'adventure') } catch (e) {  }
    if (mode === 'casual') return
    if (player.persistentData.getBoolean('soa_diff_synced_v1')) return
    const applied = soaApplyStageDifficulty(player)
    player.persistentData.putBoolean('soa_diff_synced_v1', true)
    console.info('[soa_world_events] difficulty repair: ' + player.username + ' -> ' + applied)
})

console.info('[soa_scripts] soa_world_events.js: registered (' +
             Object.keys(STAGE_MAP_NORMAL).length + ' stages tracked)')
