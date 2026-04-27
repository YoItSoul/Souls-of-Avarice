// ============================================================
// SoA Player Events — port of GreedyCraft scripts/events_and_commands/events/
//   { onEntityLivingDeath.zs, onPlayerLoggedIn.zs, onPlayerRespawn.zs }
//
// 1.12 GC drove a chunk of player-flow polish through these three handlers:
//
//   onEntityLivingDeath:
//     • Augments vanilla death message with kill location (x,y,z), colored
//       killer name, and patreon color codes for the deceased.
//     • Sends a random death quote to chat (already ported in
//       soa_death_quotes.js — not duplicated here).
//     • Spawns a Headcrumbs human at death location with the player's name.
//       Headcrumbs absent in 1.20.1 → SKIPPED.
//
//   onPlayerLoggedIn:
//     • truehero / iswuss / creative auto-staging (cheat-detector).
//     • Patreon welcome broadcast (patreons system not yet ported — task #69
//       — patreon-specific branches stubbed; baseline message active).
//     • Per-season welcome message (Christmas, Halloween, NewYear,
//       LunarNewYear, general).
//     • /difficulty hard, /sendwelcomequote, advancement revoke — partly
//       handled by PackModeEffects.java (difficulty); welcome quote stub-
//       broadcasts here, advancement revoke is no-op since elysia adv tree
//       isn't ported yet.
//
//   onPlayerRespawn:
//     • Anti-respawn-cheese: kills nearby Mowzie bosses + TF yetis when a
//       player respawns, gated by `PACKMODE != casual`. Prevents reset-via-
//       respawn boss exploits.
//     • /difficulty hard — covered by PackModeEffects.java; not duplicated.
// ============================================================

console.info('[soa_scripts] soa_player_events.js loading')

let GameStageHelper = null
try {
    GameStageHelper = Java.loadClass('net.darkhax.gamestages.GameStageHelper')
} catch (e) {
    console.warn('[soa_player_events] GameStages absent: stage-driven branches inert')
}

// ---- Calendar helpers (shared with loot_mobs.js seasonal drops) ----
function isChristmas() { const n = new Date(); return n.getMonth() === 11 && n.getDate() >= 20 && n.getDate() <= 27 }
function isHalloween() { const n = new Date(); return n.getMonth() === 9 && n.getDate() >= 28 || (n.getMonth() === 10 && n.getDate() <= 1) }
function isNewYear()   { const n = new Date(); return (n.getMonth() === 11 && n.getDate() >= 30) || (n.getMonth() === 0 && n.getDate() <= 3) }
function isLunarNewYear() { const n = new Date(); return (n.getMonth() === 0 && n.getDate() >= 22) || (n.getMonth() === 1 && n.getDate() <= 12) }

// ============================================================
// EntityEvents.death — augmented player-death broadcast with coords
// ============================================================
EntityEvents.death(event => {
    const entity = event.entity
    if (!entity || !entity.player) return
    const player = entity
    const level = player.level
    if (level.isClientSide()) return

    const src = event.source
    let killerName = ''
    if (src && src.actual && src.actual.id !== player.id) {
        // Killer present and not the player themselves
        killerName = src.actual.hasCustomName() ? String(src.actual.customName.string)
                                                : String(src.actual.name.string)
    }

    // Build augmented msg: "§c☠ §7<vanilla msg> §9@ §7(§3X§7, §3Y§7, §3Z§7)"
    const x = Math.floor(player.x), y = Math.floor(player.y), z = Math.floor(player.z)
    const baseMsg = src && src.localizedDeathMessage
        ? String(src.localizedDeathMessage.string)
        : (player.username + ' died')
    const augmented = ' §c☠ §7' + baseMsg.replace(/§r/g, '§7') +
                      ' §9@ §7(§3' + x + '§7, §3' + y + '§7, §3' + z + '§7)'

    player.server.tell(Component.literal(augmented))

    // (Headcrumbs human spawn skipped — mod absent in 1.20.1)
})

// ============================================================
// PlayerEvents.loggedIn — staging, welcome msg, season greeting
// ============================================================
PlayerEvents.loggedIn(event => {
    const player = event.player
    if (!player || player.level.isClientSide()) return

    // -- Cheat detection: creative-mode auto-staging --
    if (GameStageHelper) {
        const isTrueHero = GameStageHelper.hasStage(player, 'truehero')
        const isWuss     = GameStageHelper.hasStage(player, 'iswuss')

        if (isTrueHero && !isWuss) {
            player.tell(Component.translatable('greedycraft.event.true_hero.join',
                Component.literal('§e' + player.username)))
        } else if (isWuss) {
            player.server.tell(Component.translatable('greedycraft.event.in_cheat.broadcast',
                Component.literal('§e' + player.username)))
            player.tell(Component.translatable('greedycraft.event.in_cheat.chat'))
            if (player.creative) GameStageHelper.addStage(player, 'creative')
        } else if (player.creative && !isTrueHero) {
            GameStageHelper.addStage(player, 'creative')
            player.server.tell(Component.translatable('greedycraft.event.in_cheat.broadcast',
                Component.literal(player.username)))
            GameStageHelper.addStage(player, 'iswuss')
            player.tell(Component.translatable('greedycraft.event.creative_cheat.chat'))
            // GC ran /unlockallstages here — SDM GameStages doesn't ship that
            // command. Iterate known stages and add each:
            const ALL_STAGES = ['getting_started','nether','wither_slayer','ender_charm',
                'hardmode','wyvern','awakened','chaotic','infinity','expert','graduated',
                'descendant_of_the_sun','novice_engineer','skilled_engineer','master_engineer',
                'novice_wizard','skilled_wizard','master_wizard','fusion_matrix',
                'chaotic_dominator','abyssal_conquerer','wielder_of_infinity',
                'challenger_a','challenger_b','challenger_c','challenger_d',
                'challenger_e','challenger_f','challenger_g']
            for (const s of ALL_STAGES) GameStageHelper.addStage(player, s)
            player.tell(Component.translatable('greedycraft.event.creative_stage_unlocked'))
        }
    }

    // -- Welcome quote broadcast (random tip from soa_quote_pools.js) --
    try {
        const pool = global.SOA_WELCOME_QUOTES
        if (pool && pool.length > 0) {
            const quote = pool[Math.floor(Math.random() * pool.length)]
            player.tell(Component.literal(quote))
        }
    } catch (e) { /* pool not loaded yet */ }

    // -- First-join one-time message --
    if (GameStageHelper && !GameStageHelper.hasStage(player, 'first_join_message_shown')) {
        // GC ran /sendfirstjoinmessage; we just translation-key broadcast.
        player.tell(Component.translatable('greedycraft.event.first_join.message').gold())
        GameStageHelper.addStage(player, 'first_join_message_shown')
    } else {
        // -- Per-season greeting (only on subsequent logins) --
        let key = 'greedycraft.event.welcome.general0'
        let key1 = 'greedycraft.event.welcome.general1'
        if (isChristmas())          { key = 'greedycraft.event.welcome.christmas0';     key1 = 'greedycraft.event.welcome.christmas1' }
        else if (isHalloween())     { key = 'greedycraft.event.welcome.halloween0';     key1 = 'greedycraft.event.welcome.halloween1' }
        else if (isNewYear())       { key = 'greedycraft.event.welcome.new_year0';      key1 = 'greedycraft.event.welcome.new_year2' }
        else if (isLunarNewYear())  { key = 'greedycraft.event.welcome.lunar_new_year0'; key1 = 'greedycraft.event.welcome.lunar_new_year1' }
        player.tell(Component.translatable(key)
            .append(Component.literal(' ' + player.username + ' '))
            .append(Component.translatable(key1)))
    }

    // -- /advancement revoke for elysia/root (no-op until advancements ported) --
    try {
        player.runCommand('advancement revoke ' + player.username + ' through soa_additions:elysia/root')
    } catch (e) { /* advancement tree not present yet */ }
})

// ============================================================
// PlayerEvents.respawned — anti-respawn-cheese boss kill
// ============================================================
//
// GC killed all instances of these entity IDs across the server when ANY
// player respawned. That nukes the boss state — preventing the player
// from cheesing a near-kill via death-and-respawn. Casual mode skipped.
const RESPAWN_KILL_TYPES = [
    'mowziesmobs:umvuthi',
    'mowziesmobs:umvuthana',
    'mowziesmobs:umvuthana_raptor',
    'mowziesmobs:umvuthana_follower_raptor',
    'mowziesmobs:frostmaw',
    'twilightforest:yeti',
    'twilightforest:alpha_yeti',  // 1.20.1 TF yeti boss variant
]

PlayerEvents.respawned(event => {
    const player = event.player
    if (!player || player.level.isClientSide()) return

    // Skip in casual; PackMode is read from soa_additions config (mirrors
    // _packmode.js global).
    let mode = 'adventure'
    try { mode = String(global.SOA_PACKMODE || 'adventure') } catch (e) { /* default */ }
    if (mode === 'casual') return

    for (const type of RESPAWN_KILL_TYPES) {
        try {
            player.runCommand('execute as @e[type=' + type + '] run kill @s')
        } catch (e) { /* type not registered (mod absent) — silently skip */ }
    }
})

console.info('[soa_scripts] soa_player_events.js: registered')
