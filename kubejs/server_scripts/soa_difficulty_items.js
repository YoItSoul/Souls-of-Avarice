const SOA_DIFF_MIN = 0
const SOA_DIFF_MAX = 2400

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
    const delta = player.crouching ? -10 : 10
    const next = soaAdjustDifficulty(player, delta)
    player.tell(Component.literal('§dDifficulty ' + (delta > 0 ? '§c+' : '§a') + delta +
        '§d — now §6' + next))
})

ItemEvents.rightClicked('soa_additions:difficulty_syncer', event => {
    const player = event.player
    if (!player || player.level.isClientSide()) return
    if (String(event.hand) !== 'MAIN_HAND') return

    let applied = 0
    try { applied = global.soaApplyStageDifficulty(player) } catch (e) {
        console.warn('[soa_difficulty_items] sync failed: ' + e)
        return
    }
    player.tell(Component.literal('§dDifficulty synced to your game stages: §6' + applied))
})

console.info('[soa_scripts] soa_difficulty_items.js: registered')
