console.info('[soa_scripts] draconic_upgrade_items.js loading')

StartupEvents.registry('item', event => {
    event.create('draconic_sweep_module')
        .displayName('Draconic Sweep Module')
        .texture('draconicevolution:item/components/wyvern_core')
        .glow(true)
        .maxStackSize(16)
        .rarity('epic')
        .tooltip('§7Socket onto a Smithery tool at an anvil to widen its swing.')
        .tooltip('§8A repurposed Draconic AOE module, ground to a cutting edge.')

    console.info('[soa_scripts] draconic_sweep_module registered as kubejs:draconic_sweep_module')
})
