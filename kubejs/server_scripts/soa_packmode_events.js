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

    // Source of truth is the per-world Java PackModeData (players pick the
    // mode per world; quests can lock it) — NOT the static global from
    // _packmode.js, which is a build-time recipe switch. Reading the global
    // here caused false "packmode changed" splashes on every join in any
    // world whose mode differs from the global (e.g. expert worlds while the
    // global says adventure): the handler stripped the world's real mode
    // stage, Java re-granted it, and the next login "changed" it again.
    let mode = 'adventure'
    try {
        const $PackModeData = Java.loadClass('com.soul.soa_additions.quest.PackModeData')
        mode = String($PackModeData.get(player.server).mode().lower())
    } catch (e) {
        try { mode = String(global.SOA_PACKMODE || 'adventure') } catch (e2) { /* */ }
    }
    if (!MODE_LABEL[mode]) mode = 'adventure'

    // (1) Stage reconciliation — strip non-matching mode stages, ensure the
    // current mode stage is present. Fires "mode changed" splash if any
    // foreign mode stage was actually present.
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

        // Casual mode unlocks all stages + adds 'iswuss' marker (mirrors
        // GC casual/onjoin.zs unlockallstages behavior).
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
            // /title is permission level 2, so these must NOT go through
            // player.runCommand (player source = level 0): that got rejected
            // with "Unknown or incomplete command" straight into the player's
            // chat and showed no title. GC ran them off the server source
            // (server.commandManager.executeCommand(server, …)) — mirrored here.
            // The .title/.subtitle keys look swapped because GC swapped them.
            try {
                const server = player.server
                server.runCommandSilent('title ' + player.username + ' times 40 120 40')
                server.runCommandSilent('title ' + player.username + ' subtitle {"translate":"greedycraft.event.packmode_changed.title"}')
                server.runCommandSilent('title ' + player.username + ' title {"translate":"greedycraft.event.packmode_changed.subtitle"}')
            } catch (e) { /* */ }
        }
    }

})

// Expert-mode goodie_bag chest addition lives in startup_scripts/loot_dungeon.js
// (LootJS.modifiers must run there, not in server_scripts).

console.info('[soa_scripts] soa_packmode_events.js: registered')
