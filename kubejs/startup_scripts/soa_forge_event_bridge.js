console.info('[soa_startup] soa_forge_event_bridge.js loading')

ForgeEvents.onEvent('net.darkhax.gamestages.event.GameStageEvent$Added', event => {
    const player = event.getEntity()

    if (!player || player.level.isClientSide()) return
    const stage = String(event.getStageName())
    if (global.soaOnStageAdded) global.soaOnStageAdded(player, stage)
    if (global.soaOnStageAddedElysia) global.soaOnStageAddedElysia(player, stage)
})

ForgeEvents.onEvent('net.darkhax.gamestages.event.GameStageEvent$Remove', event => {
    if (String(event.getStageName()) === 'iswuss') event.setCanceled(true)
})

console.info('[soa_startup] soa_forge_event_bridge.js: registered')
