// ============================================================
// SoA Mob Stages — port of GreedyCraft scripts/gamestages/mobs.zs
//
// 1.12 GC used the MobStages mod (Darkhax) to gate hostile-mob spawns
// behind gamestages. SoA 1.20.1 ships sdmmobstages which preserves the
// `mods.mobstages.MobStages.addStage(stage, entityId)` API.
//
// Translations from GC's mob list:
//   - enderiozoo:* mobs (concussioncreeper, direslime, direwolf, enderminy,
//     epicsquid, fallenknight, fallenmount, lovechild, withercat,
//     witherwitch) — EnderIO 6.x in 1.20.1 dropped the Zoo addon entirely.
//     SKIP those entries.
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
    "aether:slider":              "hardmode",
    "aether:valkyrie_queen":      "hardmode",
    "aether:sun_spirit":          "hardmode",

    // -- Sculk Horde (sculkhorde mod) --
    "sculkhorde:sculk_zombie":   "ender_charm",
    "sculkhorde:sculk_creeper":  "ender_charm",
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
