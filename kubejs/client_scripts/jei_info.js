// JEI "info" tab entries for items whose sources aren't visible as recipes
// or loot tables — event-based drops (InControl) and native mob mechanics.
// The Loot Crate Contents + Quest Rewards JEI categories (soa_additions
// 3.58.18+) cover crate/quest sourcing; these fill the remaining gaps.

JEIEvents.information(event => {
    event.add('soa_additions:city_defender_medal', [
        '§65% drop§r from any hostile mob killed in the §9Lost City§r dimension.',
        'Get there with the bed portal: a bed on two diamond blocks, ringed by six skulls — right click the bed. (See the modpack guide book.)',
        'Turn one in for the §6City Protectors§r quest in the Challenges chapter.'
    ])
    event.add('aether:victory_medal', [
        'Dropped by §bValkyries§r in the Aether\'s Silver Dungeon.',
        'Present §b10§r to the §bValkyrie Queen§r to make her accept your challenge.'
    ])
    event.add('soa_additions:ordinary_medal', [
        'Earned from §6Milestone V§r quests, the repeatable §cCosmic Dominator§r quest, and §6Legendary Loot Crates§r.',
        '9 Ordinary → 1 Pioneer; 9 Pioneer → 1 Greedy Medal.'
    ])
})

console.info('[soa_client] jei_info.js loaded')
