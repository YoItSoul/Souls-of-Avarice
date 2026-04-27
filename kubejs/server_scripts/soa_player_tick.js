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

// stage → advancement granted on next 40-tick poll. Removed twilight_forest /
// nether / hardmode / etc. that mapped to greedycraft:elysia advancements
// since those advancement files don't ship in SoA. Re-add when Elysia
// progression book is ported.
const ADVANCEMENT_MAP = {}

PlayerEvents.tick(event => {
    const player = event.player
    if (!player || player.level.isClientSide()) return
    const time = player.level.gameTime

    // (1) Strip dim Night Vision to prevent the screen-flash bug.
    const nv = player.getEffect('minecraft:night_vision')
    if (nv && nv.getDuration() <= 200) player.removeEffect('minecraft:night_vision')

    // (3) Cap Saturation duration at 1t (prevents food gauge max-out exploits).
    const sat = player.getEffect('minecraft:saturation')
    if (!player.creative && sat && sat.getDuration() > 1) {
        player.removeEffect('minecraft:saturation')
        player.potionEffects.add('minecraft:saturation', 1, sat.getAmplifier(), sat.isAmbient(), sat.isVisible())
    }

    // (7) Sub-5t potion sweep — every 4t, drop near-expired effects to clear visual carryover.
    if (!player.creative && time % 4 === 0) {
        const effects = []
        player.activeEffects.forEach(e => effects.push(e))
        for (const e of effects) {
            if (e.getDuration() < 5) player.removeEffect(e.getEffect())
        }
    }

    // (4) Portal-gating warning text (every 20t).
    if (GameStageHelper && time % 20 === 0) {
        const here = String(player.level.getBlockState(player.blockPosition()).block.id)
        if (here === 'minecraft:nether_portal' && !GameStageHelper.hasStage(player, 'twilight_shield')) {
            player.tell(Component.translatable('greedycraft.event.nether.reject.message').darkPurple())
        }
        if (here === 'minecraft:end_portal' && !GameStageHelper.hasStage(player, 'ender_charm')) {
            player.tell(Component.translatable('greedycraft.event.end.reject.message').darkPurple())
        }
    }

    // (5) Hot-spring water damage (BoP / Sakura). Both mods absent in pack — skip.
    // (6) Twilight Forest dark_leaves damage — TF is installed; rule active.
    if (!player.creative && time % 20 === 0) {
        const below = player.blockPosition().below()
        const blockBelow = String(player.level.getBlockState(below).block.id)
        if (blockBelow === 'twilightforest:dark_leaves' || blockBelow === 'twilightforest:dark_oak_leaves') {
            player.attack(player.damageSources.hotFloor(), 2.0)
        }
    }

    // (8) Deep-ocean drowning — disabled. Original required door+air-pocket
    // detection that's brittle in 1.20 (door geometry differs); re-enable with
    // a proper "is enclosed" check if needed. Most water-breathing access in SoA
    // comes from Soul Pendant / Sigil of Swimming which were ported, so the
    // exploit GC was guarding against (open-bottom doored ocean base) is less
    // common.

    // (2) Elysia advancement bridge — empty until advancements are ported.
    if (GameStageHelper && time % 40 === 0 && Object.keys(ADVANCEMENT_MAP).length > 0) {
        for (const stage in ADVANCEMENT_MAP) {
            if (GameStageHelper.hasStage(player, stage)) {
                player.runCommand('advancement grant ' + player.username + ' only ' + ADVANCEMENT_MAP[stage])
            }
        }
    }
})

console.info('[soa_scripts] soa_player_tick.js: registered')
