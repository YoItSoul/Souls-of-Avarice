// ============================================================
// SoA Brewing — port of GreedyCraft scripts/recipes/vanilla/brewing.zs
//
// SoA's potion subsystem (com.soul.soa_additions.potion.*) registers
// 19 PotionCore-equivalent MobEffects + their Potion variants in the
// soa_additions namespace. This file wires the brewing-stand recipes
// using KubeJS's brewing helper.
//
// Reagent translation from GC 1.12:
//   golden_apple                       -> SoA health_boost
//   soa_additions:ancient_tome_page    -> SoA repair
//   minecraft:popped_chorus_fruit      -> SoA flight (was cyclicmagic:glowing_chorus)
//   #forge:ingots/iron                 -> SoA iron_skin
//   #forge:gems/diamond                -> SoA diamond_skin
//   minecraft:piston                   -> SoA reach
//   minecraft:clock                    -> SoA extension
//   botania:pure_daisy                 -> SoA purity
//   minecraft:dirt                     -> SoA step_up
//   tconstruct:manyullyn_ingot         -> SoA magic_shield (was forge:ingots/manyullyn)
//   minecraft:leather                  -> SoA archery
//   #forge:ingots/lead                 -> SoA solid_core
//   #forge:storage_blocks/lead         -> SoA weight
//   draconicevolution:draconium_ingot  -> SoA lightning
//   minecraft:fire_charge              -> SoA fire
//   minecraft:tnt                      -> SoA explode
//   minecraft:firework_rocket          -> SoA launch
//   soa_additions:ancient_tome         -> SoA revival
//   minecraft:popped_chorus_fruit      -> SoA teleport (overlaps flight; brewing
//                                                       picks one based on input
//                                                       potion type)
//
// Skipped from GC source:
//   - blindness/levitation/love (vanilla equivalents exist or trivial)
//   - vulnerable/drown/climb/burst (no clear 1.20.1 reagent or behavior)
//   - magic_focus (tconevo arcane_focus part absent in our port)
// ============================================================

// [SoA] DISABLED — KubeJS 6.5/1.20.1 has no event.recipes.minecraft.brewing
// schema (vanilla 1.20.1 brewing isn't recipe-driven). Brewing recipes have
// been moved to startup_scripts/soa_brewing.js, which uses Forge's
// BrewingRecipeRegistry directly. The reagent translation table above is
// preserved for documentation.
console.info('[soa_ported] vanilla_brewing.js: disabled — see startup_scripts/soa_brewing.js')
