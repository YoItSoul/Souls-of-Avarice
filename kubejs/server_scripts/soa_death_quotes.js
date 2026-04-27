// ============================================================
// SoA Death Quotes — port of GreedyCraft scripts/global/deathquotes.zs
//
// 1.12 GC tracked a localized array of flavor death messages and
// broadcast a random one to chat each time a player died. The 1.12
// script declared en_us and zh_cn variants; here we ship only the
// English set since the SoA pack ships en_us.
//
// 1.20.1 KubeJS implementation: PlayerEvents.died → broadcast a
// random quote to all players. %playername% placeholder substituted
// with the deceased player's username.
// ============================================================

console.info('[soa_scripts] soa_death_quotes.js loading')

const QUOTES_EN_US = [
    '§bˉ\\_(ツ)_/ˉ',
    '§e:) §aHave a nice day!',
    '§cThere is 1 impostor among us.',
    '§c%playername%§b was not the impostor.',
    '§bTry not to die... forget it.',
    '§e...To be continued...',
    '§cjava.lang.PlayerTooNoobException: The game caught an error because §6%playername%§c was a nooby.',
    '§c[TRANSMISSION TERMINATED]',
    '§b§oIn that moment, you stopped thinking.',
    '§6%playername%§c, keep your resolve!',
    '§aPlease descend back into this world.',
    '§bHope your stuff didn\'t fall in lava. Wait — you have a grave? Never mind.',
    '§aThere were too many of them!',
    '§b#@%...&*$*)! How did I die again?!',
    '§dGoodbye, cruel world.',
    '§9§oDo not go gentle into that good night.',
    '§eYou were §c[REDACTED]§ed by §c[REDACTED]§e.',
    '§aBlame mojang.',
    '§bI\'m not bad, really.',
    '§6§o%playername%§c§o\'s appeal to death has been answered.',
    '§eYou\'ve been removed from the gene pool.',
    '§bLook on the bright side: at least you got a free fast-travel.',
    '§7Press F to pay respects.',
    '§dEvery hero needs a comeback story.',
    '§7"Death is just the next great adventure." — Albus Dumbledore',
]

// KubeJS 2001 has no PlayerEvents.died — filter EntityEvents.death to players.
EntityEvents.death(event => {
    const entity = event.entity
    if (!entity || !entity.player) return
    const player = entity
    if (player.level.isClientSide()) return
    const quote = QUOTES_EN_US[Math.floor(Math.random() * QUOTES_EN_US.length)]
    const message = quote.split('%playername%').join(player.username)
    player.server.tell(Component.literal(message))
})

console.info('[soa_scripts] soa_death_quotes.js: registered (' + QUOTES_EN_US.length + ' quotes)')
