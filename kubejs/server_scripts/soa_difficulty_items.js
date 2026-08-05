// ============================================================
// SoA Difficulty Items — port of GC Additions effect JSONs
//   greedycraft-event_increase_difficulty.json  (right-click: +10)
//   greedycraft-event_reduce_difficulty.json    (left-click:  -10)
//   greedycraft-sync_difficulty.json            (right-click: /syncdifficulty)
//
// 1.20.1 notes:
//   • KubeJS has no left-click-air item event, so "lower" is SNEAK +
//     right-click instead of left-click (Java tooltip still says left click;
//     acceptable drift until soa_additions ships a tooltip fix).
//   • GC's effect JSONs do NOT consume the item — neither do we.
//   • The real ScalingHealth 1.20.1 command is /sh_difficulty; it needs an
//     elevated command source, so we run it from the server.
//   • persistentData.soa_sh_difficulty mirrors the ScalingHealth value for
//     soa_additions DamageScalingHandler (GC read player.difficulty directly
//     in CrT; the KubeJS port of that handler couldn't set damage at all).
// ============================================================

const SOA_DIFF_MIN = 0
const SOA_DIFF_MAX = 2400  // ScalingHealth maxValue (sh_mechanics/difficulty.json)

function soaAdjustDifficulty(player, delta) {
    const pd = player.persistentData
    const cur = pd.contains('soa_sh_difficulty') ? pd.getInt('soa_sh_difficulty') : 0
    const next = Math.max(SOA_DIFF_MIN, Math.min(SOA_DIFF_MAX, cur + delta))
    pd.putInt('soa_sh_difficulty', next)
    try {
        player.server.runCommandSilent('sh_difficulty ' + player.username + ' add ' + delta)
    } catch (e) {
        console.warn('[soa_difficulty_items] sh_difficulty command failed: ' + e)
    }
    return next
}

ItemEvents.rightClicked('soa_additions:difficulty_changer', event => {
    const player = event.player
    if (!player || player.level.isClientSide()) return
    if (String(event.hand) !== 'MAIN_HAND') return
    const delta = player.crouching ? -10 : 10  // GC: ±10 per use
    const next = soaAdjustDifficulty(player, delta)
    player.tell(Component.literal('§dDifficulty ' + (delta > 0 ? '§c+' : '§a') + delta +
        '§d — now §6' + next))
})

ItemEvents.rightClicked('soa_additions:difficulty_syncer', event => {
    const player = event.player
    if (!player || player.level.isClientSide()) return
    if (String(event.hand) !== 'MAIN_HAND') return
    // GC /syncdifficulty: recompute difficulty from held gamestages
    let applied = 0
    try { applied = global.soaApplyStageDifficulty(player) } catch (e) {
        console.warn('[soa_difficulty_items] sync failed: ' + e)
        return
    }
    player.tell(Component.literal('§dDifficulty synced to your game stages: §6' + applied))
})

console.info('[soa_scripts] soa_difficulty_items.js: registered')
