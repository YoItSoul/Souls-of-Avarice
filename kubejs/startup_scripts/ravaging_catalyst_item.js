console.info('[soa_scripts] ravaging_catalyst_item.js loading')

StartupEvents.registry('item', event => {
    event.create('ravaging_catalyst')
        .displayName('Ravaging Catalyst')
        .texture('kubejs:item/ravaging_catalyst')
        .glow(true)
        .maxStackSize(16)
        .rarity('rare')
        .tooltip('§7Use on a Summoning Altar to call Firron, the Mobile Blade.')
        .tooltip('§8Forged from a Necromancer\'s shards and a Devil\'s heat.')

    console.info('[soa_scripts] ravaging_catalyst registered as kubejs:ravaging_catalyst')
})
