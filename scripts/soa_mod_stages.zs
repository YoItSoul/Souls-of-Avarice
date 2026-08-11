import mods.itemstages.ItemStages;
import crafttweaker.api.ingredient.IIngredient;

val exemptEnderIO as IIngredient =
    <item:enderio:reinforced_obsidian_block> |
    <item:enderio:broken_spawner> |
    <item:enderio:powered_spawner> |
    <item:enderio:stone_gear> |
    <item:enderio:wood_gear> |
    <item:enderio:dark_steel_sword>;

ItemStages.createModRestriction("enderio", (stack) => exemptEnderIO.matches(stack), "novice_engineer");

val exemptMekanism as IIngredient =
    <item:mekanism:laser_amplifier> |
    <item:mekanism:alloy_atomic> |
    <item:mekanism:ultimate_control_circuit> |
    <item:mekanism:jetpack> |
    <item:mekanism:jetpack_armored> |
    <item:mekanism:cardboard_box> |
    <item:mekanism:salt> |
    <item:mekanism:block_salt> |
    <item:mekanism:block_charcoal> |
    <item:mekanism:dust_diamond>;

ItemStages.createModRestriction(["mekanism", "mekanismgenerators"] as string[],
    (stack) => exemptMekanism.matches(stack), "skilled_engineer");

val exemptHardmode as IIngredient =

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

    <item:avaritia:neutron> |
    <item:avaritia:neutron_ingot> |
    <item:avaritia:neutron_nugget> |
    <item:avaritia:neutron_pile> |
    <item:avaritia:neutron_collector> |
    <item:avaritia:neutron_compressor> |
    <item:avaritia:infinity_catalyst> |
    <item:avaritia:eternal_singularity> |

    <item:draconicevolution:draconium_core> |
    <item:draconicevolution:wyvern_core> |
    <item:draconicevolution:draconium_chest> |
    <item:draconicevolution:draconium_nugget> |
    <item:draconicevolution:awakened_draconium_block> |
    <item:draconicevolution:awakened_draconium_ingot> |
    <item:draconicevolution:awakened_draconium_nugget> |
    <item:draconicevolution:awakened_core> |
    <item:draconicevolution:chaos_shard> |
    <item:draconicevolution:chaotic_core> |
    <item:draconicevolution:chaotic_energy_core> |
    <item:draconicevolution:reactor_stabilizer> |
    <item:draconicevolution:creative_capacitor> |
    <item:draconicevolution:draconic_sword> |
    <item:draconicevolution:draconic_pickaxe> |
    <item:draconicevolution:draconic_shovel> |
    <item:draconicevolution:draconic_axe> |
    <item:draconicevolution:draconic_bow> |
    <item:draconicevolution:stabilized_spawner> |

    <item:projecte:transmutation_table> |
    <item:projecte:transmutation_tablet> |
    <item:projecte:condenser_mk1> |
    <item:projecte:condenser_mk2> |
    <item:projecte:harvest_goddess_band> |
    <item:projecte:void_ring> |

    <item:taiga:basalt_block>;

ItemStages.createModRestriction(["avaritia", "draconicevolution", "projecte", "taiga"] as string[],
    (stack) => exemptHardmode.matches(stack), "hardmode");

val exemptNether as IIngredient =

    <item:aether:ambrosium_shard> |
    <item:aether:blue_aercloud> |
    <item:aether:cold_aercloud> |
    <item:aether:golden_aercloud> |

    <item:cyclic:sandstone_pickaxe> |
    <item:cyclic:sandstone_axe> |
    <item:cyclic:sandstone_shovel> |

    <item:cyclic:lightning_scepter> |
    <item:cyclic:battery_infinite> |
    <item:cyclic:harvester> |
    <item:cyclic:user> |
    <item:cyclic:disenchanter> |
    <item:cyclic:slingshot> |

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

val exemptNoviceWizard as IIngredient =
    <item:bloodmagic:livinghelmet> |
    <item:bloodmagic:livingplate> |
    <item:bloodmagic:livingleggings> |
    <item:bloodmagic:livingboots> |
    <item:bloodmagic:basemonstersoul_vengeful> |
    <item:bloodarsenal:bound_sickle> |
    <item:bloodarsenal:stasis_axe> |
    <item:bloodarsenal:stasis_pickaxe> |
    <item:bloodarsenal:stasis_shovel>;

ItemStages.createModRestriction(["bloodmagic", "bloodarsenal"] as string[],
    (stack) => exemptNoviceWizard.matches(stack), "novice_wizard");

ItemStages.restrict(<item:cyclic:disenchanter>, "hardmode");
