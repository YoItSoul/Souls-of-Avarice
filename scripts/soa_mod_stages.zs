// ============================================================
// SoA Mod-Wide Item Stages - 1:1 port of GreedyCraft items.zs:761-765
//
// GreedyCraft gates five whole mod namespaces in five lines:
//     stageSkilledEngineer.addModId(["mekanism", "mekanismgenerators"]);
//     stageHardmode.addModId(["avaritia","draconicevolution","extrabotany",
//                             "projecte","projectex","taiga"]);
//     stageNether.addModId(["aether_legacy","cyclicmagic","touhou_little_maid","aeble"]);
//     stageNoviceWizard.addModId(["bloodmagic","bloodarsenal","animus"]);
//     stageNoviceEngineer.addModId(["enderio"]);
//
// The earlier port expanded these into ~1600 hand-listed items in
// soa_item_stages.zs and inevitably missed many (EnderIO alone: 958 items in
// 1.20, ~175 listed). ItemStages 8.0.3 exposes the direct equivalent, so the
// gates are expressed here as mod restrictions instead.
//
// !! PREDICATE SEMANTICS - READ BEFORE EDITING !!
// Decompiled from ZenItemStages.lambda$createModRestriction$1, the restriction
// applies when:
//     modid matches namespace  AND  (predicate == null || !predicate.test(stack))
// so the predicate marks items to EXEMPT from the gate. It returns TRUE for
// items that should NOT be gated. Do not negate it.
//
// What belongs in an exemption list: any item of that namespace whose FINAL
// GreedyCraft stage is not this gate - i.e. items restage.zs moves to another
// stage, and items it un-stages entirely (removeItemStages). Items GC gates in
// BOTH the mod stage and another stage (ItemStages ANDs across stages) must NOT
// be exempted - they keep an explicit restrict in soa_item_stages.zs and take
// this gate on top. Currently that is: enderio:enchanter (+nether),
// draconicevolution:draconic_staff (+wielder_of_infinity), projecte:tome and
// projecte:watch_of_flowing_time (+graduated), cyclic:workbench
// (+getting_started).
//
// Namespaces from GC's lists with no SoA counterpart, deliberately omitted:
//   projectex, animus, touhou_little_maid, aeble  - not in the pack
//   extrabotany  - merged into `mythicbotany` in 1.20 together with botanicadds,
//                  which GreedyCraft never gated. A namespace-wide gate would
//                  over-restrict, so mythicbotany keeps per-item restricts.
// ============================================================

import mods.itemstages.ItemStages;
import crafttweaker.api.ingredient.IIngredient;

// ------------------------------------------------------------
// enderio -> novice_engineer
// ------------------------------------------------------------
val exemptEnderIO as IIngredient =
    <item:enderio:reinforced_obsidian_block> |   // -> wither_slayer (restage.zs:77)
    <item:enderio:broken_spawner> |              // -> disabled
    <item:enderio:powered_spawner> |             // -> disabled
    <item:enderio:stone_gear> |                  // -> disabled
    <item:enderio:wood_gear> |                   // -> disabled
    <item:enderio:dark_steel_sword>;             // "The Ender" -> disabled

ItemStages.createModRestriction("enderio", (stack) => exemptEnderIO.matches(stack), "novice_engineer");

// ------------------------------------------------------------
// mekanism + mekanismgenerators -> skilled_engineer
// ------------------------------------------------------------
val exemptMekanism as IIngredient =
    <item:mekanism:laser_amplifier> |            // -> chaotic (restage.zs:66)
    <item:mekanism:alloy_atomic> |               // -> master_engineer (restage.zs:73)
    <item:mekanism:ultimate_control_circuit> |   // -> master_engineer (restage.zs:74)
    <item:mekanism:jetpack> |                    // -> disabled
    <item:mekanism:jetpack_armored> |            // -> disabled
    <item:mekanism:cardboard_box> |              // -> disabled
    <item:mekanism:salt> |                       // un-staged (restage.zs:27-28)
    <item:mekanism:block_salt> |                 // un-staged (restage.zs:30)
    <item:mekanism:block_charcoal> |             // un-staged (restage.zs:42)
    <item:mekanism:dust_diamond>;                // un-staged (restage.zs:24, <ore:dustDiamond>)

ItemStages.createModRestriction(["mekanism", "mekanismgenerators"] as string[],
    (stack) => exemptMekanism.matches(stack), "skilled_engineer");

// ------------------------------------------------------------
// avaritia + draconicevolution + projecte + taiga -> hardmode
// ------------------------------------------------------------
val exemptHardmode as IIngredient =
    // Avaritia - Infinity gear restaged to wielder_of_infinity (restage.zs:45-57)
    <item:avaritia:infinity> |
    <item:avaritia:infinity_ingot> |
    <item:avaritia:infinity_helmet> |
    <item:avaritia:infinity_chestplate> |
    <item:avaritia:infinity_pants> |
    <item:avaritia:infinity_boots> |
    <item:avaritia:infinity_sword> |
    <item:avaritia:infinity_pickaxe> |
    <item:avaritia:infinity_shovel> |
    <item:avaritia:infinity_axe> |
    <item:avaritia:infinity_hoe> |
    <item:avaritia:infinity_bow> |
    // Avaritia - Neutronium chain restaged to wyvern (restage.zs:105-111)
    <item:avaritia:neutron> |
    <item:avaritia:neutron_ingot> |
    <item:avaritia:neutron_nugget> |
    <item:avaritia:neutron_pile> |
    <item:avaritia:neutron_collector> |
    <item:avaritia:neutron_compressor> |         // -> awakened (restage.zs:112)
    <item:avaritia:infinity_catalyst> |          // -> chaotic (restage.zs:67)
    <item:avaritia:eternal_singularity> |        // GC: separate `eternalsingularity` mod, chaotic
    // Draconic Evolution - cores/blocks restaged to fusion_matrix (restage.zs:88-104)
    <item:draconicevolution:draconium_core> |
    <item:draconicevolution:wyvern_core> |
    <item:draconicevolution:draconium_chest> |
    <item:draconicevolution:draconium_nugget> |
    <item:draconicevolution:awakened_draconium_block> |
    <item:draconicevolution:awakened_draconium_ingot> |
    <item:draconicevolution:awakened_draconium_nugget> |
    <item:draconicevolution:awakened_core> |     // -> descendant_of_the_sun (restage.zs:64)
    <item:draconicevolution:chaos_shard> |       // -> awakened (restage.zs:62)
    <item:draconicevolution:chaotic_core> |      // -> chaotic_dominator (restage.zs:63)
    <item:draconicevolution:chaotic_energy_core> |
    <item:draconicevolution:reactor_stabilizer> |// -> chaotic (restage.zs:68)
    <item:draconicevolution:creative_capacitor> |// -> graduated (restage.zs:118)
    <item:draconicevolution:draconic_sword> |    // -> disabled
    <item:draconicevolution:draconic_pickaxe> |
    <item:draconicevolution:draconic_shovel> |
    <item:draconicevolution:draconic_axe> |
    <item:draconicevolution:draconic_bow> |
    <item:draconicevolution:stabilized_spawner> |
    // ProjectE - transmutation gear restaged to energy_matter_core (restage.zs:123-132)
    <item:projecte:transmutation_table> |
    <item:projecte:transmutation_tablet> |
    <item:projecte:condenser_mk1> |
    <item:projecte:condenser_mk2> |
    <item:projecte:harvest_goddess_band> |       // -> graduated (restage.zs:117)
    <item:projecte:void_ring> |                  // -> disabled
    // TAIGA
    <item:taiga:basalt_block>;                   // un-staged (restage.zs:23)

ItemStages.createModRestriction(["avaritia", "draconicevolution", "projecte", "taiga"] as string[],
    (stack) => exemptHardmode.matches(stack), "hardmode");

// ------------------------------------------------------------
// aether (aether_legacy) + cyclic (cyclicmagic) -> nether
// ------------------------------------------------------------
val exemptNether as IIngredient =
    // Aether - un-staged outright (restage.zs:26,31)
    <item:aether:ambrosium_shard> |
    <item:aether:blue_aercloud> |
    <item:aether:cold_aercloud> |
    <item:aether:golden_aercloud> |
    // Cyclic - restaged down to getting_started (restage.zs:84-86)
    <item:cyclic:sandstone_pickaxe> |
    <item:cyclic:sandstone_axe> |
    <item:cyclic:sandstone_shovel> |
    // Cyclic - restaged elsewhere
    <item:cyclic:lightning_scepter> |            // -> fusion_matrix (restage.zs:114)
    <item:cyclic:battery_infinite> |             // -> graduated (restage.zs:116)
    <item:cyclic:harvester> |                    // -> skilled_engineer (restage.zs:122)
    <item:cyclic:user> |                         // -> master_engineer (restage.zs:72)
    <item:cyclic:disenchanter> |                 // "Unchant Pylon" -> hardmode (restage.zs:113)
    <item:cyclic:slingshot> |                    // un-staged (restage.zs:25)
    // Cyclic - disabled
    <item:cyclic:placer> |
    <item:cyclic:packager> |
    <item:cyclic:sprinkler> |
    <item:cyclic:spikes_diamond> |
    <item:cyclic:crystal_axe> |
    <item:cyclic:crystal_hoe> |
    <item:cyclic:crystal_sword> |
    <item:cyclic:sandstone_hoe> |
    <item:cyclic:sandstone_sword> |
    <item:cyclic:netherbrick_hoe> |
    <item:cyclic:energy_pipe> |
    <item:cyclic:fluid_pipe> |
    <item:cyclic:item_pipe>;

ItemStages.createModRestriction(["aether", "cyclic"] as string[],
    (stack) => exemptNether.matches(stack), "nether");

// ------------------------------------------------------------
// bloodmagic + bloodarsenal -> novice_wizard
// ------------------------------------------------------------
val exemptNoviceWizard as IIngredient =
    <item:bloodmagic:livinghelmet> |             // Living armour -> disabled
    <item:bloodmagic:livingplate> |
    <item:bloodmagic:livingleggings> |
    <item:bloodmagic:livingboots> |
    <item:bloodmagic:basemonstersoul_vengeful> | // un-staged (restage.zs:29, monster_soul:3)
    <item:bloodarsenal:bound_sickle> |           // -> disabled
    <item:bloodarsenal:stasis_axe> |
    <item:bloodarsenal:stasis_pickaxe> |
    <item:bloodarsenal:stasis_shovel>;

ItemStages.createModRestriction(["bloodmagic", "bloodarsenal"] as string[],
    (stack) => exemptNoviceWizard.matches(stack), "novice_wizard");

// Cyclic's Unchant Pylon: GC restages it to hardmode (restage.zs:113). The 1.20
// item is `cyclic:disenchanter` ("Disenchanter"), exempted from the nether gate
// above and gated here instead.
ItemStages.restrict(<item:cyclic:disenchanter>, "hardmode");
