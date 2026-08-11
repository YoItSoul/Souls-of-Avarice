console.info('[soa_scripts] soa_packmode_events.js loading')

let GameStageHelper = null
try {
    GameStageHelper = Java.loadClass('net.darkhax.gamestages.GameStageHelper')
} catch (e) {
    console.warn('[soa_packmode_events] GameStages absent: stage reconciliation disabled')
}

const MODE_LABEL = {
    casual:    'greedycraft.scoreboard.mode.casual',
    adventure: 'greedycraft.scoreboard.mode.adventure',
    expert:    'greedycraft.scoreboard.mode.expert',
}

const MODE_STAGE = { casual: 'casual', adventure: 'adventure', expert: 'expert' }

PlayerEvents.loggedIn(event => {
    const player = event.player
    if (!player || player.level.isClientSide()) return

    let mode = 'adventure'
    try {
        const $PackModeData = Java.loadClass('com.soul.soa_additions.quest.PackModeData')
        mode = String($PackModeData.get(player.server).mode().lower())
    } catch (e) {
        try { mode = String(global.SOA_PACKMODE || 'adventure') } catch (e2) {  }
    }
    if (!MODE_LABEL[mode]) mode = 'adventure'

    if (GameStageHelper) {
        var all = ['casual', 'adventure', 'expert']
        var changed = false
        for (var ai = 0; ai < all.length; ai++) {
            var s = all[ai]
            if (s !== MODE_STAGE[mode] && GameStageHelper.hasStage(player, s)) {
                GameStageHelper.removeStage(player, s)
                changed = true
            }
        }
        if (!GameStageHelper.hasStage(player, MODE_STAGE[mode])) {
            GameStageHelper.addStage(player, MODE_STAGE[mode])
        }

        if (mode === 'casual') {
            var ALL_STAGES = [
                'getting_started','nether','wither_slayer','ender_charm','hardmode',
                'descendant_of_the_sun','novice_engineer','skilled_engineer','master_engineer',
                'novice_wizard','skilled_wizard','master_wizard','wyvern','awakened',
                'chaotic','fusion_matrix','chaotic_dominator','abyssal_conquerer',
                'wielder_of_infinity','graduated',
                'challenger_a','challenger_b','challenger_c','challenger_d',
                'challenger_e','challenger_f','challenger_g',
            ]
            for (var asi = 0; asi < ALL_STAGES.length; asi++) GameStageHelper.addStage(player, ALL_STAGES[asi])
            GameStageHelper.addStage(player, 'iswuss')
            player.tell(Component.translatable('greedycraft.event.casual.unlock_all_stages').gold())
        }

        if (changed) {
            player.tell(Component.translatable('greedycraft.event.packmode_changed.chat'))

            try {
                const server = player.server
                server.runCommandSilent('title ' + player.username + ' times 40 120 40')
                server.runCommandSilent('title ' + player.username + ' subtitle {"translate":"greedycraft.event.packmode_changed.title"}')
                server.runCommandSilent('title ' + player.username + ' title {"translate":"greedycraft.event.packmode_changed.subtitle"}')
            } catch (e) {  }
        }
    }

})

console.info('[soa_scripts] soa_packmode_events.js: registered')
