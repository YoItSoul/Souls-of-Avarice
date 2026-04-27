// ============================================================
// SoA Quote Pools — port of GreedyCraft scripts/global/{welcome_quotes,
//   mob_spawner_quotes}.zs
//
// 1.12 GC kept these as global IData[]/string[] tables (zh_cn + en_us)
// consumed by other event scripts. 1.20.1 KubeJS port: just declare the
// en_us pools as global arrays here, and let existing handlers
// (soa_player_events.js for welcome, soa_world_events.js for spawner)
// reference them via global.SOA_WELCOME_QUOTES / SOA_SPAWNER_QUOTES /
// SOA_SPAWNER_SUCCESS_QUOTES.
//
// Quote text translated from the original GC en_us blocks (Chinese block
// dropped — SoA ships en_us only). Phrasing kept close to the source so
// returning GC players recognize the lines.
// ============================================================

console.info('[soa_scripts] soa_quote_pools.js loading')

// ---- Welcome quotes (login chat tips) ----
global.SOA_WELCOME_QUOTES = [
    '§eThe game is laggy? Press §6R§e to open a menu where you can free up memory!',
    '§eThank you for playing this modpack! If you encounter problems, make sure to read the modpack guide book.',
    '§eIf you have questions about mods, you can try to look up in the §6Omnipedia§e!',
    '§eIf the background music stops for a long time, use - key on numpad to reload it.',
    '§ePress §6F3 + A§e to reload chunks, §6F3 + S§e to reload sound system, use this if you can\'t hear any sound.',
    '§eYou can switch packmodes via the quest book in the inventory screen.',
    '§eYou can hide the right-side scoreboard with §6/hidescoreboard§e — re-enable with §6/showscoreboard§e.',
    '§eYou can hide death messages with §6/hidedeathquotes§e — re-enable with §6/showdeathquotes§e.',
    '§ePress §6B§e to drop a waypoint at your position; on the world map screen press §6B§e to drop one at the cursor.',
    '§eVanilla food is nerfed; cook better food with a kitchen for proper saturation.',
    '§eEat a varied diet — eating the same food repeatedly gives diminishing returns.',
    '§eMobs are tougher underground (y<50) and weaker on the surface (y≥50). Plan accordingly.',
    '§eThe lower your hunger, the slower it drains. Don\'t panic at low food.',
    '§eDifficulty increases when you defeat a vanilla boss for the first time.',
    '§eDiamond pickaxes can\'t mine obsidian — set up a Tinker\'s Construct workshop early.',
    '§eMost mobs don\'t break blocks, but bosses do. Don\'t summon a Wither at home.',
    '§eEat different kinds of food to increase your max health! A multiblock kitchen makes that easier.',
]

// ---- Mob spawner break quotes (failure to break) ----
global.SOA_SPAWNER_QUOTES = [
    'Leave me alone!',
    'Nope.',
    'Hey, I\'m still working!',
    'Just stop!',
    'Wait until you kill more mobs!',
    'You are too weak to destroy me!',
    'Go play with other spawners!',
    'No, you don\'t get lucky today.',
    'Sorry, don\'t feel like breaking today.',
    'You shall not pass!',
    'I don\'t even know you!',
    'Do not disturb!',
    'Will you do me a favor?',
    'What a terrible day of being a mob spawner!',
    'I\'m the best mob spawner of the month, don\'t disturb while I\'m working!',
    'Hey, I\'m busy!',
    'Break me after slaying some mobs I create!',
    'I\'m cursed!',
    'Nah.',
    'ZZZZZZ',
    'That\'s not gonna work.',
    'I refuse to die when I have jobs to do!',
]

// ---- Mob spawner success quotes (broke successfully) ----
global.SOA_SPAWNER_SUCCESS_QUOTES = [
    'Fine, you win this time.',
    'Alright, you\'ve earned it.',
    'OK, fair fight.',
    'Take it and leave!',
    'You\'re strong enough — go ahead.',
    'I yield to your might.',
    'Well-fought, traveler.',
    'You\'ve killed enough — break me already.',
    'A worthy opponent. Take the loot.',
    'I\'ve had enough. Break me.',
]

console.info('[soa_scripts] soa_quote_pools.js: registered (' +
             global.SOA_WELCOME_QUOTES.length + ' welcome / ' +
             global.SOA_SPAWNER_QUOTES.length + ' spawner-deny / ' +
             global.SOA_SPAWNER_SUCCESS_QUOTES.length + ' spawner-success)')
