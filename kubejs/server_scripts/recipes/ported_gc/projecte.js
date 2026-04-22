// Ported from GreedyCraft: scripts/recipes/mods/projecte.zs
// 1.12.2 CraftTweaker -> 1.20.1 KubeJS
//
// Original:
//   WorldTransmutation.add(
//     <blockstate:additions:greedycraft-matter_block>,
//     <blockstate:abyssalcraft:antiwater>
//   );
//
// - `additions:greedycraft-matter_block` → `soa_additions:matter_block`
//   (FIXME: matter_block not yet confirmed registered in SoA)
// - `abyssalcraft:antiwater` -> abyssalcraft is NOT installed in SoA 1.20.1.
//
// ProjectE 1.20.1 world-transmutations live in a datapack JSON at
// data/projecte/pe_custom_conversions/*.json (NOT a KubeJS binding).
//
// Because one side of the transmutation targets an absent mod
// (abyssalcraft), the recipe is not ported. If/when abyssalcraft (or a
// replacement antiwater block) is added, create:
//   data/projecte/pe_custom_conversions/soa_ported.json
// with the transmutation entry.

// No runtime recipes (absent-mod block prevents porting).

console.info('[soa_ported] projecte.js loaded (no-op; see header for rationale)')
