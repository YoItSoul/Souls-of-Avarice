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
//   - thaumcraft:eldritchguardian, cultistportallesser — Thaumcraft is absent;
//     Forbidden Arcanus replaces it, so forbidden_arcanus:lost_soul inherits
//     the novice_wizard gate.
//   - mowziesmobs:umvuthi (1.20 rename of barako) / frostmaw — both installed; gated as in GC.
//   - vanilla minecraft:wither / blaze / wither_skeleton — gated as in GC.
//   - abyssalcraft — Valoria replaces it. GC gated the AC *dimensions* (51/52);
//     Valoria's content is overworld, so the three valoria: entries below are
//     the only available equivalent lever.
//
// SCOPE RULE (2026-08-03): this file gates ONLY what GC gated, plus the two
// replacement-mod translations above. GC did its progression gating through
// dimensions.zs and items.zs — mob-stages was a narrow tool (19 entries, 10 of
// them one mod), never a general boss-gating system.
// An earlier port pass ignored this and gated new-mod bosses "so casual play
// doesn't get blindsided". That rationale produced the Twilight Forest deadlock
// documented below, plus 9 entries removed on 2026-08-03: three aether: bosses
// (unreachable dead code — soa_dimension_stages.zs already restricts
// aether:the_aether to 'nether'), deeperdarker:stalker, sculkhorde: x2,
// aquamirae: x2, and enderzoology:infested_zombie (no GC analog).
// Do not gate a mob here without a specific GC entry to point at.
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
    // OMIT_MOD (entity missing: cataclysm:netherite_monstrosity): "cataclysm:netherite_monstrosity": "wither_slayer",
    // OMIT_MOD (entity missing: cataclysm:ender_guardian): "cataclysm:ender_guardian":        "ender_charm",
    // OMIT_MOD (entity missing: cataclysm:ignis): "cataclysm:ignis":                 "wither_slayer",
    // OMIT_MOD (entity missing: cataclysm:the_leviathan): "cataclysm:the_leviathan":         "hardmode",
    // OMIT_MOD (entity missing: cataclysm:the_harbinger): "cataclysm:the_harbinger":         "wyvern",
    // OMIT_MOD (entity missing: cataclysm:ancient_remnant): "cataclysm:ancient_remnant":       "ender_charm",

    // -- Forbidden Arcanus (stands in for GC's Thaumcraft entries) --
    "forbidden_arcanus:lost_soul":     "novice_wizard",

    // -- Twilight Forest bosses: DELIBERATELY NOT MOB-STAGED --
    // GC's scripts/gamestages/mobs.zs gates ZERO twilightforest entities; TF
    // progression is self-gating (each boss unlocks the next via TF's own
    // advancement/progression rules). An earlier port pass invented a
    // twilight_shield/wither_slayer/ender_charm gate here and it DEADLOCKED
    // the pack (2026-08-03):
    //   naga/hydra/lich were gated behind `twilight_shield`, but the Twilight
    //   Shield recipe needs naga_scale (expert) + alpha_yeti_fur + carminite —
    //   all drops/loot from TF bosses that the gate itself suppressed. The
    //   boss spawners sat inert in their arenas, and since
    //   soa_dimension_stages.zs restricts minecraft:the_nether to
    //   twilight_shield, the Nether was unreachable too.
    // Do NOT re-add TF entries here.

    // -- Aether: NOT mob-staged. GC opened the Aether at 'nether' with no boss
    //    gating inside it, and soa_dimension_stages.zs already restricts
    //    aether:the_aether to 'nether' — per-boss gates were unreachable.

    // -- EnderZoology (GC parity: enderiozoo mobs were hardmode in GC) --
    "enderzoology:concussion_creeper": "hardmode",
    "enderzoology:dire_wolf":          "hardmode",
    "enderzoology:enderminy":          "hardmode",
    "enderzoology:fallen_knight":      "hardmode",
    "enderzoology:fallen_mount":       "hardmode",
    "enderzoology:wither_cat":         "hardmode",
    "enderzoology:wither_witch":       "hardmode",
    // enderzoology:infested_zombie NOT gated — GC's 3 remaining enderiozoo mobs
    // (direslime/epicsquid/lovechild) have no 1.20 equivalent; substituting an
    // unrelated mob to reach the same count is not parity.

    // -- L_Enders Cataclysm 3.31 additions (tier-analogy vs the six above;
    //    REVIEW: tune stages to taste) --
    // OMIT_MOD (entity missing: cataclysm:maledictus): "cataclysm:maledictus":    "hardmode",      // Frosted Prison boss
    // OMIT_MOD (entity missing: cataclysm:scylla): "cataclysm:scylla":        "hardmode",      // storm ocean boss (leviathan-tier)
    // OMIT_MOD (entity missing: cataclysm:aptrgangr): "cataclysm:aptrgangr":     "hardmode",      // Frosted Prison elite
    // OMIT_MOD (entity missing: cataclysm:wadjet): "cataclysm:wadjet":        "ender_charm",   // Cursed Pyramid (remnant-tier)
    // OMIT_MOD (entity missing: cataclysm:kobolediator): "cataclysm:kobolediator":  "wither_slayer", // kobold arena boss
    // OMIT_MOD (entity missing: cataclysm:coralssus): "cataclysm:coralssus":     "wither_slayer", // Sunken City miniboss

    // -- Bosses of Mass Destruction (tier-analogy; REVIEW) --
    // OMIT_MOD (entity missing: bosses_of_mass_destruction:void_blossom): "bosses_of_mass_destruction:void_blossom": "nether",
    // OMIT_MOD (entity missing: bosses_of_mass_destruction:gauntlet): "bosses_of_mass_destruction:gauntlet":     "wither_slayer",
    // OMIT_MOD (entity missing: bosses_of_mass_destruction:lich): "bosses_of_mass_destruction:lich":         "wither_slayer",
    // OMIT_MOD (entity missing: bosses_of_mass_destruction:obsidilith): "bosses_of_mass_destruction:obsidilith":   "ender_charm",

    // -- Aquamirae: NOT mob-staged. No GC analog (mod is 1.20.1-only). --

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
