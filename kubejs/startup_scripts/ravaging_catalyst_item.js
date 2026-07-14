// ============================================================
// SoA Ravaging Catalyst — Firron summoning token
//
// Registers kubejs:ravaging_catalyst — a consumable summoning token used
// in the Firron summoningrituals altar recipe. Reuses Valoria's
// samurai_belt texture as its icon (looks like a bound waist sash, fits
// the "duelist's pact" aesthetic).
//
// Design rationale:
//   GC's Idol of Sorrow was a craftable consumable that summoned The Mourner
//   when used on a Conjuring Altar. It used 2× ravaging_ingot as ingredients,
//   which were obtained from a PRIOR boss kill (The Destroyer). This avoided
//   the circular "boss drops material needed to summon boss" trap.
//
//   In SoA, soa_additions:ravaging_ingot has no native recipe and is the
//   intended Firron drop. Using it as a summon ingredient would loop. The
//   Ravaging Catalyst is the SoA equivalent of the Idol of Sorrow — a
//   craftable summon token built from PRIOR boss drops (Necromancer's
//   ethereal_shard + Devil's infernal_stone), mirroring GC's structural
//   approach: pre-Firron bosses gate Firron's summon via this craft.
//
// The catalyst is consumed when the Firron ritual fires (it's the altar
// catalyst — held on right-click).
// ============================================================

console.info('[soa_scripts] ravaging_catalyst_item.js loading')

StartupEvents.registry('item', event => {
    event.create('ravaging_catalyst')
        .displayName('Ravaging Catalyst')
        .texture('kubejs:item/ravaging_catalyst')    // grayscale samurai_belt — see kubejs/assets/kubejs/textures/item/ravaging_catalyst.png
        .glow(true)                                  // enchantment glint on top of grayscale = unmistakable
        .maxStackSize(16)
        .rarity('rare')
        .tooltip('§7Use on a Summoning Altar to call Firron, the Mobile Blade.')
        .tooltip('§8Forged from a Necromancer\'s shards and a Devil\'s heat.')

    console.info('[soa_scripts] ravaging_catalyst registered as kubejs:ravaging_catalyst')
})
