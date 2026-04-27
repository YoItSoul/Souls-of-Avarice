// ============================================================
// SoA Per-Packmode Events — port of GreedyCraft scripts/events_and_commands/packmode/
//   { casual,adventure,expert }/{ display,onjoin }.zs
//   plus expert/loot_tables.zs (small goodie_bag addition)
//
// 1.12 GC fired one of three packmode-specific event scripts based on the
// CrafTweaker `#packmode` directive (one mode active at a time). Each set:
//   • display.zs — sets a sidebar scoreboard with mode label + version + author
//                  + cheat/truehero badge.
//   • onjoin.zs  — strips conflicting mode stages (e.g. on casual login,
//                  remove expert+adventure stages), shows a mode-changed
//                  title splash, sets keepInventory gamerule.
//   • casual/onjoin also unlocks all stages.
//
// 1.20.1 KubeJS port: gates by `global.SOA_PACKMODE` (set in _packmode.js).
// keepInventory + force-Hard difficulty + per-mode hunger/regen/starve are
// already handled by PackModeEffects.java — NOT duplicated here.
//
// SKIPPED:
//   non_casual/sanity_checker.zs — anti-cheat that bans by mod-id presence
//     and grief-kills offending players via blindness/wither/clear/kill. Too
//     aggressive for SoA's distribution model; user can re-enable later.
//   non_casual/commands.zs — large file of custom CT command registrations.
//     Defer to a focused command-port task.
//   expert/tweaks.zs — entirely #norun in GC source. SKIPPED.
//   expert/events.zs — keepInventory=false logic; PackModeEffects.java
//     already enforces this on login + every gamerule reapply.
//   normal/events.zs — keepInventory=true tick-poll; same — PackModeEffects.
//
// JAVA PATCHES STILL NEEDED (out of scope for KubeJS port, will track sep.):
//   1. PackModeEffects.java#isBoss should blacklist mowziesmobs:umvuthi and
//      mowziesmobs:frostmaw — those have ritual-scaled HP already, +50%
//      double-stacks the scaling.
//   2. Tip 52 low-food drain skip RNG — subscribe to InsaneLib's
//      PlayerExhaustionEvent: chance = (20 - foodLevel) * 400 / 10000 to
//      cancel/zero the delta.
// ============================================================

console.info('[soa_scripts] soa_packmode_events.js loading')

let GameStageHelper = null
try {
    GameStageHelper = Java.loadClass('net.darkhax.gamestages.GameStageHelper')
} catch (e) {
    console.warn('[soa_packmode_events] GameStages absent: stage reconciliation disabled')
}

// ---- Mode → display label map ----
const MODE_LABEL = {
    casual:    'greedycraft.scoreboard.mode.casual',
    adventure: 'greedycraft.scoreboard.mode.adventure',
    expert:    'greedycraft.scoreboard.mode.expert',
}

// Stage to add for each mode. Other modes' stages get stripped.
const MODE_STAGE = { casual: 'casual', adventure: 'adventure', expert: 'expert' }

// ---- Per-mode login orchestration ----
PlayerEvents.loggedIn(event => {
    const player = event.player
    if (!player || player.level.isClientSide()) return

    let mode = 'adventure'
    try { mode = String(global.SOA_PACKMODE || 'adventure') } catch (e) { /* */ }
    if (!MODE_LABEL[mode]) mode = 'adventure'

    // (1) Stage reconciliation — strip non-matching mode stages, ensure the
    // current mode stage is present. Fires "mode changed" splash if any
    // foreign mode stage was actually present.
    if (GameStageHelper) {
        const all = ['casual', 'adventure', 'expert']
        let changed = false
        for (const s of all) {
            if (s !== MODE_STAGE[mode] && GameStageHelper.hasStage(player, s)) {
                GameStageHelper.removeStage(player, s)
                changed = true
            }
        }
        if (!GameStageHelper.hasStage(player, MODE_STAGE[mode])) {
            GameStageHelper.addStage(player, MODE_STAGE[mode])
        }

        // Casual mode unlocks all stages + adds 'iswuss' marker (mirrors
        // GC casual/onjoin.zs unlockallstages behavior).
        if (mode === 'casual') {
            const ALL_STAGES = [
                'getting_started','nether','wither_slayer','ender_charm','hardmode',
                'descendant_of_the_sun','novice_engineer','skilled_engineer','master_engineer',
                'novice_wizard','skilled_wizard','master_wizard','wyvern','awakened',
                'chaotic','fusion_matrix','chaotic_dominator','abyssal_conquerer',
                'wielder_of_infinity','graduated',
                'challenger_a','challenger_b','challenger_c','challenger_d',
                'challenger_e','challenger_f','challenger_g',
            ]
            for (const s of ALL_STAGES) GameStageHelper.addStage(player, s)
            GameStageHelper.addStage(player, 'iswuss')
            player.tell(Component.translatable('greedycraft.event.casual.unlock_all_stages').gold())
        }

        if (changed) {
            player.tell(Component.translatable('greedycraft.event.packmode_changed.chat'))
            try {
                player.runCommand('title ' + player.username + ' times 40 120 40')
                player.runCommand('title ' + player.username + ' subtitle {"translate":"greedycraft.event.packmode_changed.title"}')
                player.runCommand('title ' + player.username + ' title {"translate":"greedycraft.event.packmode_changed.subtitle"}')
            } catch (e) { /* */ }
        }
    }

    // (2) Sidebar scoreboard — packmode label + version + cheat badge
    setupSidebar(player, mode)
})

function setupSidebar(player, mode) {
    try {
        // Wipe any prior sidebar
        player.runCommand('scoreboard objectives remove title')
        player.runCommand('scoreboard objectives add title dummy {"translate":"greedycraft.scoreboard.title"}')

        // Lines (numeric value = vertical position; higher = further up)
        const modeKey  = MODE_LABEL[mode]
        const modeName = '[' + mode.toUpperCase() + ']'
        player.runCommand('scoreboard players set "' + modeName + '" title 2')
        player.runCommand('scoreboard players set "§b" title 3')
        player.runCommand('scoreboard players set "§7Souls of Avarice" title 4')

        // Cheat / truehero badge (line 1)
        if (GameStageHelper) {
            if (GameStageHelper.hasStage(player, 'iswuss')) {
                const lbl = player.creative ? '§e[CREATIVE]' : '§c[CHEAT]'
                player.runCommand('scoreboard players set "' + lbl + '" title 1')
            } else if (GameStageHelper.hasStage(player, 'truehero') &&
                       player.server.playerList.players.size() <= 1) {
                player.runCommand('scoreboard players set "§b★ ' + player.username + '" title 1')
            }
        }

        player.runCommand('scoreboard objectives setdisplay sidebar title')
    } catch (e) {
        console.warn('[soa_packmode_events] sidebar setup: ' + e)
    }
}

// Expert-mode goodie_bag chest addition lives in startup_scripts/loot_dungeon.js
// (LootJS.modifiers must run there, not in server_scripts).

console.info('[soa_scripts] soa_packmode_events.js: registered')
