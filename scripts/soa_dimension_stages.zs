// ============================================================
// SoA Dimension Stages - Ported from GreedyCraft
// Uses ReDimensionStages mod to gate dimensions behind gamestages.
// Players must obtain the required gamestage before entering
// the dimension. Stages are granted via quest rewards or items.
// ============================================================

import mods.redimstages.ReDimensionStages;

// === Twilight Forest ===
// Requires Twilight Gem quest completion
ReDimensionStages.restrict("twilightforest:twilight_forest", "twilight_forest");

// === Nether ===
// Requires Twilight Shield (same as GreedyCraft)
ReDimensionStages.restrict("minecraft:the_nether", "twilight_shield");

// === The End ===
// Requires Ender Charm (same as GreedyCraft)
ReDimensionStages.restrict("minecraft:the_end", "ender_charm");

// === The Aether ===
// Requires hardmode stage (same as GreedyCraft)
ReDimensionStages.restrict("aether:the_aether", "hardmode");

// === Mythic Botany: Alfheim ===
// Requires gaia stage (Botania progression - defeat Gaia Guardian first)
ReDimensionStages.restrict("mythicbotany:alfheim", "gaia");

// === Blood Magic: Dungeon ===
// Requires zealot stage (Blood Magic progression)
ReDimensionStages.restrict("bloodmagic:dungeon", "zealot");
