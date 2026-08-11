console.info('[soa_scripts] soa_player_events.js loading')

let GameStageHelper = null
try {
    GameStageHelper = Java.loadClass('net.darkhax.gamestages.GameStageHelper')
} catch (e) {
    console.warn('[soa_player_events] GameStages absent: stage-driven branches inert')
}

function isChristmas() { const n = new Date(); return n.getMonth() === 11 && n.getDate() >= 20 && n.getDate() <= 27 }
function isHalloween() { const n = new Date(); return n.getMonth() === 9 && n.getDate() >= 28 || (n.getMonth() === 10 && n.getDate() <= 1) }
function isNewYear()   { const n = new Date(); return (n.getMonth() === 11 && n.getDate() >= 30) || (n.getMonth() === 0 && n.getDate() <= 3) }
function isLunarNewYear() { const n = new Date(); return (n.getMonth() === 0 && n.getDate() >= 22) || (n.getMonth() === 1 && n.getDate() <= 12) }

EntityEvents.death(event => {
    const entity = event.entity
    if (!entity || !entity.player) return
    const player = entity
    const level = player.level
    if (level.isClientSide()) return

    var src = event.source
    var killerName = ''
    if (src && src.actual && src.actual.id !== player.id) {

        killerName = src.actual.hasCustomName() ? String(src.actual.customName.string)
                                                : String(src.actual.name.string)
    }

    var x = Math.floor(player.x), y = Math.floor(player.y), z = Math.floor(player.z)
    var baseMsg = src && src.localizedDeathMessage
        ? String(src.localizedDeathMessage.string)
        : (player.username + ' died')
    var augmented = ' §c☠ §7' + baseMsg.replace(/§r/g, '§7') +
                      ' §9@ §7(§3' + x + '§7, §3' + y + '§7, §3' + z + '§7)'

    player.server.tell(Component.literal(augmented))

})

PlayerEvents.loggedIn(event => {
    const player = event.player
    if (!player || player.level.isClientSide()) return

    if (GameStageHelper) {
        var isTrueHero = GameStageHelper.hasStage(player, 'truehero')
        var isWuss     = GameStageHelper.hasStage(player, 'iswuss')

        if (isTrueHero && !isWuss) {
            player.tell(Component.translatable('greedycraft.event.true_hero.join',
                Component.literal('§e' + player.username)))
        } else if (isWuss) {
            player.server.tell(Component.translatable('greedycraft.event.in_cheat.broadcast',
                Component.literal('§e' + player.username)))
            player.tell(Component.translatable('greedycraft.event.in_cheat.chat'))
            if (player.creative) GameStageHelper.addStage(player, 'creative')
        } else if (player.creative && !isTrueHero) {
            GameStageHelper.addStage(player, 'creative')
            player.server.tell(Component.translatable('greedycraft.event.in_cheat.broadcast',
                Component.literal(player.username)))
            GameStageHelper.addStage(player, 'iswuss')
            player.tell(Component.translatable('greedycraft.event.creative_cheat.chat'))

            var ALL_STAGES = ['getting_started','nether','wither_slayer','ender_charm',
                'hardmode','wyvern','awakened','chaotic','infinity','expert','graduated',
                'descendant_of_the_sun','novice_engineer','skilled_engineer','master_engineer',
                'novice_wizard','skilled_wizard','master_wizard','fusion_matrix',
                'chaotic_dominator','abyssal_conquerer','wielder_of_infinity',
                'challenger_a','challenger_b','challenger_c','challenger_d',
                'challenger_e','challenger_f','challenger_g']
            for (var si = 0; si < ALL_STAGES.length; si++) GameStageHelper.addStage(player, ALL_STAGES[si])
            player.tell(Component.translatable('greedycraft.event.creative_stage_unlocked'))
        }

        if (isTrueHero) {
            player.server.tell(Component.translatable('greedycraft.event.executor.welcome.0')
                .append(Component.literal(' ' + player.username))
                .append(Component.translatable('greedycraft.event.executor.welcome.1')))
        }
    }

    try {
        var pool = global.SOA_WELCOME_QUOTES
        if (pool && pool.length > 0) {
            var quote = pool[Math.floor(Math.random() * pool.length)]
            player.tell(Component.literal(quote))
        }
    } catch (e) {  }

    if (GameStageHelper && !GameStageHelper.hasStage(player, 'first_join_message_shown')) {

        player.tell(Component.translatable('greedycraft.event.first_join.message', player.name))
        GameStageHelper.addStage(player, 'first_join_message_shown')
    } else {

        var key = 'greedycraft.event.welcome.general0'
        var key1 = 'greedycraft.event.welcome.general1'
        if (isChristmas())          { key = 'greedycraft.event.welcome.christmas0';     key1 = 'greedycraft.event.welcome.christmas1' }
        else if (isHalloween())     { key = 'greedycraft.event.welcome.halloween0';     key1 = 'greedycraft.event.welcome.halloween1' }
        else if (isNewYear())       { key = 'greedycraft.event.welcome.new_year0';      key1 = 'greedycraft.event.welcome.new_year2' }
        else if (isLunarNewYear())  { key = 'greedycraft.event.welcome.lunar_new_year0'; key1 = 'greedycraft.event.welcome.lunar_new_year1' }
        player.tell(Component.translatable(key)
            .append(Component.literal(' ' + player.username + ' '))
            .append(Component.translatable(key1)))
    }

})

const RESPAWN_KILL_TYPES = new Set([
    'mowziesmobs:umvuthi',
    'mowziesmobs:umvuthana',
    'mowziesmobs:umvuthana_raptor',
    'mowziesmobs:umvuthana_follower_raptor',
    'mowziesmobs:frostmaw',
])

PlayerEvents.respawned(event => {
    const player = event.player
    if (!player || player.level.isClientSide()) return

    let mode = 'adventure'
    try { mode = String(global.SOA_PACKMODE || 'adventure') } catch (e) {  }
    if (mode === 'casual') return

    const entities = player.server.entities
    for (var i = 0; i < entities.size(); i++) {
        const e = entities.get(i)
        if (!e || !RESPAWN_KILL_TYPES.has(String(e.type))) continue
        try {
            e.kill()
        } catch (err) {
            console.warn('[soa_player_events] could not kill ' + e.type + ': ' + err)
        }
    }
})

console.info('[soa_scripts] soa_player_events.js: registered')
