console.info('[soa_scripts] soa_player_tick.js loading')

let GameStageHelper = null
try {
    GameStageHelper = Java.loadClass('net.darkhax.gamestages.GameStageHelper')
} catch (e) {
    console.warn('[soa_player_tick] GameStages not loaded; portal-gating + advancement bridges disabled')
}

const ADVANCEMENT_MAP = {
    twilight_forest: 'soa_additions:elysia/log1',
    nether: 'soa_additions:elysia/log2',
    wither_slayer: 'soa_additions:elysia/log3',
    ender_charm: 'soa_additions:elysia/log4',
    hardmode: 'soa_additions:elysia/log5',
    wyvern: 'soa_additions:elysia/log6',
    awakened: 'soa_additions:elysia/log7',
    chaotic: 'soa_additions:elysia/log8',
}

const ELYSIA_BOOK = 'soa_additions:the_elysia_project'

const elysiaGranted = {}

function grantedThisSession(player) {
    const key = String(player.uuid)
    if (!elysiaGranted[key]) elysiaGranted[key] = {}
    return elysiaGranted[key]
}

let ResourceLocationClass = null
try {
    ResourceLocationClass = Java.loadClass('net.minecraft.resources.ResourceLocation')
} catch (e) {
    console.warn('[soa_player_tick] ResourceLocation unavailable; falling back to blind grants')
}

function resolveAdvancement(player, advancement) {
    if (!ResourceLocationClass) return null

    let server = player.server
    if (!server && typeof player.getServer === 'function') server = player.getServer()
    if (!server) server = Utils.server
    if (!server) return null
    return server.getAdvancements().getAdvancement(new ResourceLocationClass(advancement))
}

function awardAdvancement(player, advancement) {

    try {
        var adv = resolveAdvancement(player, advancement)
        if (!adv) return false
        var tracker = player.getAdvancements()
        var progress = tracker.getOrStartProgress(adv)
        if (progress.isDone()) return true
        var remaining = progress.getRemainingCriteria()
        if (!remaining) return false
        for (var i = 0; i < remaining.length; i++) tracker.award(adv, remaining[i])
        return true
    } catch (e) {
        console.warn('[soa_player_tick] could not award ' + advancement + ': ' + e)
        return false
    }
}

function grantOnce(player, seen, advancement) {
    if (seen[advancement]) return
    seen[advancement] = true
    awardAdvancement(player, advancement)
}

function syncElysia(player) {
    if (!GameStageHelper || !player || player.level.isClientSide()) return
    const seen = grantedThisSession(player)
    if (seen.complete) return

    grantOnce(player, seen, 'soa_additions:elysia/root')

    let missing = 0
    for (const stage in ADVANCEMENT_MAP) {
        if (GameStageHelper.hasStage(player, stage)) grantOnce(player, seen, ADVANCEMENT_MAP[stage])
        else missing++
    }
    if (missing === 0) seen.complete = true
}

PlayerEvents.loggedIn(event => syncElysia(event.player))
PlayerEvents.loggedOut(event => {
    if (event.player) delete elysiaGranted[String(event.player.uuid)]
})

ItemEvents.rightClicked('patchouli:guide_book', event => {
    const player = event.player
    if (!player || player.level.isClientSide()) return
    const nbt = event.item.nbt
    if (!nbt || String(nbt.getString('patchouli:book')) !== ELYSIA_BOOK) return
    grantOnce(player, grantedThisSession(player), 'soa_additions:elysia/book')
})

global.soaOnStageAddedElysia = (player, stage) => syncElysia(player)

console.info('[soa_scripts] soa_player_tick.js: registered')
