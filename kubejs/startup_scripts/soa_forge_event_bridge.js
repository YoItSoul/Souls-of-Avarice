// ============================================================
// Forge-event bridge — ForgeEvents.onEvent is a STARTUP-scope binding
// (server scripts get "ForgeEvents is not defined"), so raw Forge event
// subscriptions live here and forward to handlers that the server scripts
// publish on `global`. Server-script reloads just swap the global handler;
// the startup registration itself persists for the session.
// ============================================================

console.info('[soa_startup] soa_forge_event_bridge.js loading')

// GameStages: fires only on genuine stage ADDS (never on login sync) —
// replaces the old 20t polling in soa_world_events.js / soa_player_tick.js.
ForgeEvents.onEvent('net.darkhax.gamestages.event.GameStageEvent$Added', event => {
    const player = event.getEntity()
    // NOTE: property access (player.level), not method call — KubeJS beans
    // no-arg getters into properties; player.level() throws "not a function".
    if (!player || player.level.isClientSide()) return
    const stage = String(event.getStageName())
    if (global.soaOnStageAdded) global.soaOnStageAdded(player, stage)
    if (global.soaOnStageAddedElysia) global.soaOnStageAddedElysia(player, stage)
})

// GC parity: the iswuss brand is PERMANENT — GC cancelled every attempt to
// remove it (GameStagesEvents.zs onGameStageRemove). Remove is the cancelable
// pre-event; cancelling it keeps the stage.
ForgeEvents.onEvent('net.darkhax.gamestages.event.GameStageEvent$Remove', event => {
    if (String(event.getStageName()) === 'iswuss') event.setCanceled(true)
})

console.info('[soa_startup] soa_forge_event_bridge.js: registered')
