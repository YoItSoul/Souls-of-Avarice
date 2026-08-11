import mods.mobstages.MobStages;
import crafttweaker.api.bracket.BracketHandlers;

val mobStageMap as string[string] = {

    "minecraft:blaze":            "twilight_shield",
    "minecraft:wither_skeleton":  "twilight_shield",
    "minecraft:wither":           "abyssal_conquerer",

    "mowziesmobs:umvuthi":  "wyvern",
    "mowziesmobs:frostmaw": "hardmode",

    "forbidden_arcanus:lost_soul":     "novice_wizard",

    "enderzoology:concussion_creeper": "hardmode",
    "enderzoology:dire_wolf":          "hardmode",
    "enderzoology:enderminy":          "hardmode",
    "enderzoology:fallen_knight":      "hardmode",
    "enderzoology:fallen_mount":       "hardmode",
    "enderzoology:wither_cat":         "hardmode",
    "enderzoology:wither_witch":       "hardmode",

    "valoria:necromancer":    "nether",
    "valoria:dryador":        "lunatic_cultist",
    "valoria:wicked_crystal": "hardmode",

} as string[string];

var registered as int = 0;
for mob, stage in mobStageMap {
    MobStages.addStage(stage, BracketHandlers.getEntityType(mob));
    registered = registered + 1;
}

print("[soa_scripts] soa_mob_stages.zs: " + registered + " mobs gated");
