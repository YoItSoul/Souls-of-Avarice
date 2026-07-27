// ============================================================
// SoA Draconic Sweep Module — melee-AOE tool upgrade
//
// GC's TConEvo "Draconic Attack AOE" fusion upgrade has no DE 1.20 module
// analog (DE's aoe module family maps to dig AOE). This item fills the gap:
// crafted from a DE AOE module + a sword, applied to a Smithery tool in the
// anvil (see data/soa_additions/smithery/modifier_source/draconic_sweep_module.json).
//
// All other GC draconic tool/armor upgrades map straight onto DE 1.20 module
// items as anvil modifier sources — craft the module through DE's own
// progression, then socket it onto the tool at the anvil.
// ============================================================

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
