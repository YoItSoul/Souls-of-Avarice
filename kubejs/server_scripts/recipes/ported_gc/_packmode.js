// Pack-mode selector for ported GreedyCraft recipes.
//
// GC gated its recipes via CraftTweaker's `#packmode expert` / `#packmode casual adventure`
// directives. On the 1.20.1 KubeJS side we emulate this with a single global flag
// that each packmode_*.js file checks at the top of its ServerEvents.recipes handler.
//
// Edit the line below to switch modes. Valid values: 'normal', 'expert'.
// This file must sort before every packmode_*.js (leading underscore guarantees that
// under KubeJS's lexicographic load order).
//
// Per GC patchouli (quick_start/packmodes): normal is the curated default difficulty,
// expert is the gated long-tail variant with harder recipes. Both are first-class.
global.SOA_PACKMODE = 'normal';

console.info(`[soa_ported] SOA_PACKMODE = ${global.SOA_PACKMODE}`)
