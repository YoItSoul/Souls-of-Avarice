// ============================================================
// SoA Mob Stages — port of GreedyCraft scripts/gamestages/mobs.zs
//
// 1.12 GC used the MobStages mod (Darkhax) to gate hostile-mob spawns
// behind gamestages. SoA 1.20.1 ships sdmmobstages which preserves the
// `mods.mobstages.MobStages.addStage(stage, entityId)` API.
//
// Translations from GC's mob list:
//   - enderiozoo:* mobs — GC gated 10 of them at hardmode. The standalone
//     EnderZoology mod (enderzoology: namespace) IS installed in SoA and
//     carries 7 of the 10 (no direslime/epicsquid/lovechild in 1.20);
//     gated below at hardmode like GC. (An earlier port pass wrongly
//     assumed the Zoo was gone entirely — 2026-07-14 audit fixed that.)
//   - touhou_little_maid — mod absent. SKIP.
//   - thaumcraft:eldritchguardian, cultistportallesser — mod absent. SKIP.
//   - mowziesmobs:umvuthi (1.20 rename of barako) / frostmaw — both installed; gated as in GC.
//   - vanilla minecraft:wither / blaze / wither_skeleton — gated as in GC.
//   - 1.20.1 additions: cataclysm bosses, deeperdarker mobs, etc., gated to
//     mid-late game stages so casual play doesn't get blindsided.
//
// Range: GC used MobStages.addRange(mob, 256). 1.20.1 sdmmobstages handles
// range internally; no explicit setting needed.
// ============================================================

import mods.mobstages.MobStages;
import crafttweaker.api.bracket.BracketHandlers;

val mobStageMap as string[string] = {
    // -- Vanilla (matches GC verbatim) --
    "minecraft:blaze":            "twilight_shield",
    "minecraft:wither_skeleton":  "twilight_shield",
    "minecraft:wither":           "abyssal_conquerer",

    // -- Mowzie's Mobs (matches GC) --
    "mowziesmobs:umvuthi":  "wyvern",
    "mowziesmobs:frostmaw": "hardmode",

    // -- L_Enders Cataclysm bosses (1.20.1 addition; gated to match power tier) --
    "cataclysm:netherite_monstrosity": "wither_slayer",
    "cataclysm:ender_guardian":        "ender_charm",
    "cataclysm:ignis":                 "wither_slayer",
    "cataclysm:the_leviathan":         "hardmode",
    "cataclysm:the_harbinger":         "wyvern",
    "cataclysm:ancient_remnant":       "ender_charm",

    // -- Deeper and Darker (1.20.1; only the Stalker boss needs gating —
    //    Deep Dark biome itself is gated by progression, so non-boss sculk
    //    mobs don't need extra MobStages cover) --
    "deeperdarker:stalker":            "hardmode",

    // -- Forbidden Arcanus bosses --
    "forbidden_arcanus:lost_soul":     "novice_wizard",

    // -- Twilight Forest mid-game bosses --
    "twilightforest:naga":         "twilight_shield",
    "twilightforest:hydra":        "twilight_shield",
    "twilightforest:lich":         "twilight_shield",
    "twilightforest:minoshroom":   "wither_slayer",
    "twilightforest:knight_phantom": "wither_slayer",
    "twilightforest:ur_ghast":     "ender_charm",
    "twilightforest:snow_queen":   "hardmode",
    "twilightforest:alpha_yeti":   "hardmode",

    // -- Aether 1.20.1 bosses --
    // Strict GC pacing (2026-07-17): aligned to the dimension's 'nether' gate —
    // GC opened the Aether at 'nether' with no boss gating inside it.
    "aether:slider":              "nether",
    "aether:valkyrie_queen":      "nether",
    "aether:sun_spirit":          "nether",

    // -- Sculk Horde (sculkhorde mod) --
    "sculkhorde:sculk_zombie":   "ender_charm",
    "sculkhorde:sculk_creeper":  "ender_charm",

    // -- EnderZoology (GC parity: enderiozoo mobs were hardmode in GC) --
    "enderzoology:concussion_creeper": "hardmode",
    "enderzoology:dire_wolf":          "hardmode",
    "enderzoology:enderminy":          "hardmode",
    "enderzoology:fallen_knight":      "hardmode",
    "enderzoology:fallen_mount":       "hardmode",
    "enderzoology:wither_cat":         "hardmode",
    "enderzoology:wither_witch":       "hardmode",
    "enderzoology:infested_zombie":    "hardmode", // no GC analog; same family

    // -- L_Enders Cataclysm 3.31 additions (tier-analogy vs the six above;
    //    REVIEW: tune stages to taste) --
    "cataclysm:maledictus":    "hardmode",      // Frosted Prison boss
    "cataclysm:scylla":        "hardmode",      // storm ocean boss (leviathan-tier)
    "cataclysm:aptrgangr":     "hardmode",      // Frosted Prison elite
    "cataclysm:wadjet":        "ender_charm",   // Cursed Pyramid (remnant-tier)
    "cataclysm:kobolediator":  "wither_slayer", // kobold arena boss
    "cataclysm:coralssus":     "wither_slayer", // Sunken City miniboss

    // -- Bosses of Mass Destruction (tier-analogy; REVIEW) --
    "bosses_of_mass_destruction:void_blossom": "nether",
    "bosses_of_mass_destruction:gauntlet":     "wither_slayer",
    "bosses_of_mass_destruction:lich":         "wither_slayer",
    "bosses_of_mass_destruction:obsidilith":   "ender_charm",

    // -- Aquamirae (Ice Maze; tier-analogy; REVIEW) --
    "aquamirae:captain_cornelia": "wither_slayer",
    "aquamirae:maze_mother":      "wither_slayer",

    // -- Valoria overworld bosses (AbyssalCraft-replacement tiers: AC keys
    //    were 'nether', Asorah granted lunatic_cultist in GC) --
    "valoria:necromancer":    "nether",
    "valoria:dryador":        "lunatic_cultist",
    "valoria:wicked_crystal": "hardmode", // in-dimension; dimension entry is post-dragon (Firron)
    // valoria:firron deliberately NOT mob-staged: it only exists via the
    // summoning ritual, which is already gated by its catalyst items —
    // a mob stage here could eat the ritual ingredients on a denied spawn.
} as string[string];

// sdmmobstages signature is addStage(String stage, EntityType<Entity> entity).
// BracketHandlers.getEntityType resolves the string id at runtime; it throws
// on unknown entities. ZenCode 14 has no try/catch and won't expose ModList
// for runtime mod-loaded checks, so the map must only contain entries for
// currently-loaded mods. Remove a row if you remove a mod.
var registered as int = 0;
for mob, stage in mobStageMap {
    MobStages.addStage(stage, BracketHandlers.getEntityType(mob));
    registered = registered + 1;
}

print("[soa_scripts] soa_mob_stages.zs: " + registered + " mobs gated");
