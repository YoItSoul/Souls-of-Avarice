// ============================================================
// SoA Player Tick — port of GreedyCraft scripts/events_and_commands/events/onPlayerTick.zs
//
// 1.12 GC ran a per-player server-tick handler that:
//   1. Strips Night Vision when its duration drops below 200t (no flicker)
//   2. Grants Elysia-progression advancements based on the player's stages
//   3. Caps Saturation duration at 1t (prevents food OD on infinite-saturation potions)
//   4. Warns when entering an unauthorized portal (twilight/end gating)
//   5. Damages players standing in BoP/Sakura "hot spring water" (10 dmg/0.5s)
//   6. Damages players walking on twilightforest dark_leaves (2 dmg/1s)
//   7. Cleans up "sticky" sub-5t potion effects every 4t
//   8. Drowning damage when standing in deep ocean (y<40) without a door+air pocket
//      (boater-house griefing prevention)
//
// 1.20.1 KubeJS port preserves the actively-portable hooks. Mod-specific
// blocks (BoP hot springs, twilight dark_leaves) only fire if the relevant
// block id resolves; rules are no-ops otherwise.
// ============================================================

console.info('[soa_scripts] soa_player_tick.js loading')

let GameStageHelper = null
try {
    GameStageHelper = Java.loadClass('net.darkhax.gamestages.GameStageHelper')
} catch (e) {
    console.warn('[soa_player_tick] GameStages not loaded; portal-gating + advancement bridges disabled')
}

// stage → advancement granted on next 40-tick poll. 1:1 with GC's
// advancementMap in onPlayerTick.zs; these unlock the eight log entries in the
// the_elysia_project Patchouli book, whose advancements now ship in
// kubejs/data/soa_additions/advancements/elysia/.
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

// Book id the Elysia lore book is bound to, for the "hold it to unlock" grant.
const ELYSIA_BOOK = 'soa_additions:the_elysia_project'

// Stage→advancement state is near-static: a player earns these eight stages
// across an entire playthrough, so this must not be a per-tick cost. GC polled
// every 40t and re-issued /advancement grant forever; instead we sync on login,
// keep a per-session record, and latch `complete` so the slow safety-net poll
// degenerates to a single property read.
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
    // ServerPlayer exposes `server` as a field; Rhino may surface it as a getter
    // instead, and Utils.server is the last resort.
    let server = player.server
    if (!server && typeof player.getServer === 'function') server = player.getServer()
    if (!server) server = Utils.server
    if (!server) return null
    return server.getAdvancements().getAdvancement(new ResourceLocationClass(advancement))
}

/**
 * Award an advancement, silently and only if the player lacks it.
 *
 * Deliberately NOT `/advancement grant`: that command prints "Couldn't grant …
 * as they already have it" straight into chat for every advancement the player
 * has already earned. Since the session cache is cleared on logout, that fired
 * on every single login. Awarding through PlayerAdvancements is silent, skips
 * the command dispatch entirely, and checking isDone() first makes re-granting
 * a no-op rather than an error.
 *
 * @return true if the player ends up holding the advancement
 */
function awardAdvancement(player, advancement) {
    // var (not const/let) throughout: Rhino throws "redeclaration of var X"
    // when a const declaration inside a try block re-executes on later calls.
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

// GC checked the held item every 40t to grant elysia/book. Right-click is the
// same moment from the player's perspective (it's what opens the book) at zero
// idle cost.
ItemEvents.rightClicked('patchouli:guide_book', event => {
    const player = event.player
    if (!player || player.level.isClientSide()) return
    const nbt = event.item.nbt
    if (!nbt || String(nbt.getString('patchouli:book')) !== ELYSIA_BOOK) return
    grantOnce(player, grantedThisSession(player), 'soa_additions:elysia/book')
})

// Rules (1)(3)(4)(6)(7) — night-vision strip, saturation cap, effect sweep,
// portal gating, dark-leaves damage — moved to Java in soa_additions 3.58.3
// (SoaTickRules): per-player-per-tick JS was pure Rhino overhead.
// (5) hot-spring damage: source mods absent, never ported.
// (8) deep-ocean drowning: disabled pending a robust "is enclosed" check.
// (2) Elysia mid-session safety net: stages earned mid-session are picked up
// via the GameStageEvent$Added bridge (startup_scripts/soa_forge_event_bridge.js
// — ForgeEvents is startup-scope only); login sync covers everything else.
// No tick handler needed.
global.soaOnStageAddedElysia = (player, stage) => syncElysia(player)

console.info('[soa_scripts] soa_player_tick.js: registered')
