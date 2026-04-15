# Souls of Avarice — GreedyCraft Gating Parity Proposal

Generated 2026-04-15 for review. **No edits have been applied yet.** Review, mark up,
then I'll implement the approved items in `soa_item_stages.zs`.

Sources:
- GreedyCraft gates: `D:\Minecraft\Instances\GreedyCraft\scripts\gamestages\items.zs` (767 lines)
- Current SoA gates: `D:\Minecraft\Instances\Souls of Avarice\scripts\soa_item_stages.zs` (537 lines)
- SoA installed items: `D:\Minecraft\Instances\Souls of Avarice\soa_exports\items.json` (19,846 items, 170 mods)

Every item ID in the PROPOSED sections was verified to exist in SoA's `items.json`.

---

## §1 Mod Mapping (GreedyCraft → SoA)

### Confirmed ported / same ID
| GC Mod | SoA Mod | Notes |
|---|---|---|
| avaritia | avaritia | Re:Avaritia — same namespace, keeps `infinity_*`, `neutron_*`, `eternal_singularity`, new `blaze_*`/`crystal_*` tiers |
| draconicevolution | draconicevolution | |
| draconicadditions | draconicadditions | |
| projecte | projecte | `item.pe_tome` → `tome`, `item.pe_time_watch` → `watch_of_flowing_time` |
| enderio | enderio | Largely ported; many 1.12 machine names gone |
| tconstruct | tconstruct | `tooltables:0-5` → `crafting_station`/`part_builder`/`part_chest`/`tinkers_anvil`/`tinkers_chest`/`tinkers_gadgetry` |
| mekanism | mekanism | |
| mekanismgenerators | mekanismgenerators | |
| bigreactors | bigreactors | Now uses ExtremeReactors2 code but keeps `bigreactors:` id; items renamed (`basic_*` prefix) |
| appliedenergistics2 | ae2 | Namespace changed |
| bloodmagic | bloodmagic | Present — 433 items. Altar/sigil lineup renamed |
| botania | botania | |
| inventorypets | inventorypets | `cloud_pet` → `pet_cloud`, `squid_pet` → `pet_squid`, etc. |
| tinymobfarm | tinymobfarm | |
| solarflux | solarflux | `solar_panel_X` → `sp_X` / `sp_avaritia.infinity` / `sp_de.chaotic` etc. |
| storagedrawers | storagedrawers | `upgrade_creative:1` → `creative_storage_upgrade` |
| treasure2 | treasure2 | |
| twilightforest | twilightforest | `shield_scepter` → `fortification_scepter` |
| chancecubes | chancecubes | |
| mysticalagriculture | mysticalagriculture | |
| mysticalagradditions | mysticalagradditions | |
| scalinghealth | scalinghealth | **`difficultychanger` item gone** — only heart/power crystals + medkit |
| quark | quark | |
| magicfeather | magicfeather | `magicfeather:magicfeather` → `magicfeather:magic_feather` |
| prefab | prefab | |

### Renamed / replaced
| GC Mod | SoA Replacement | Notes |
|---|---|---|
| appliedenergistics2 | ae2 | Same mod, namespace changed |
| cyclicmagic | cyclic | Same concept, renamed. `block_user` → `user`, `glowing_chorus` **gone** |
| projectex | projectextended | Only 6 items (matter trident/shield, interdiction lantern, alchemical barrel) |
| wct / wit / wft | ae2wtlib | Unified as `ae2wtlib:wireless_universal_terminal` (already gated) |
| thermalfoundation / thermalcultivation / thermalinnovation | thermal | Unified |
| eternalsingularity | avaritia | Merged — `avaritia:eternal_singularity` (already gated in `chaotic`) |
| astralsorcery | ars_nouveau + ars_elemental + ars_additions | Different magic family; distinct progression |
| extrautils2 | — | Most features absorbed by cyclic / supplementaries |
| botanicadds | mythicbotany | Norse-themed extension; `gaia_shard`/`gaia_plate` replaced by `alfsteel_*` progression |
| extrabotany | appbot | Creative mana handled by `appbot:creative_mana_cell` |
| rftools | rftoolsbase only | Shields, builder, etc. gone |
| actuallyadditions | — | No successor installed |
| thaumcraft + thaumadditions + thaumictinkerer + thaumicwonders | thaumon | Decorative only, no magic progression |

### Sunset — not in SoA, **please confirm** these are intentional drops
These mods are present in GC's gating but absent from SoA's installed mods:

- abyssalcraft (and `fearless_man` stage — already noted sunset)
- actuallyadditions
- ambience
- astralsorcery (replaced by ars_*)
- avaritiatweaks (the `infinitato`, `eternal_singularity` were absorbed into avaritia)
- botanicadds (gaia plate/shard/catalyst — replaced by mythicbotany alfsteel path)
- biomesoplenty (gems + terrestrial_artifact)
- colytra (elytra layering)
- conarm (Construct's Armory)
- cqrepoured (Chocolate Quest Repoured — huge weapon list)
- danknull (the dank storage item)
- darkutils
- defiledlands
- eternalsingularity (merged into avaritia)
- extrabotany
- extrautils2
- hooked
- modularmachinery
- mysticalcreations
- netherex
- openblocks
- openmodularturrets
- plustic
- projectex (replaced by projectextended — limited)
- randomthings
- rftools (only rftoolsbase remains)
- scalinghealth:difficultychanger (specific item gone even though mod stays)
- tconevo
- thaumcraft + addons (thaumon only gives decorative blocks)
- thermalfoundation:upgrade:256 (thermal 1.20.1 augment system differs)
- threng (AE2 addon)
- tofucraft
- toolprogression
- twilightforest:shield_scepter → exists as `fortification_scepter`
- wct / wit / wft
- zensummoning

No gating action possible for sunset mods — that content simply does not exist in SoA.

### Mods NEW in SoA (no GC predecessor, need gating decision)
These were never in GC but carry meaningful progression:

- ars_nouveau / ars_elemental / ars_additions — magic system replacing astralsorcery + thaumcraft
- forbidden_arcanus — dark magic (darkstone → stellarite)
- theurgy — alchemy (calcination/reformation pedestals)
- cataclysm (Ice & Fire: Cataclysm) — boss gear: witherite, ignitium, monstrous_*, black_steel, infernal_forge
- endrem (End Remastered) — End portal frame eyes scattered across dimensions
- mythicbotany — Norse-themed botania extension (alfsteel → mjoellnir → gjallar_horn)
- packagedavaritia, packageddraconic — auto-crafting blocks for Avaritia/DE recipes
- fluxnetworks — wireless energy (flux_controller, flux_plug/point, storage tiers)
- appflux (partial — top cells already at `graduated`) / appbot / appmek — AE2 integration addons
- extendedcrafting — progressive crafting tables (basic→ultimate) + crafting materials
- bosses_of_mass_destruction, meetyourfight, mowziesmobs, sculkhorde, cataclysm — boss mobs
- artifacts — trinkets
- productivebees, friendsandfoes, savage_and_ravage — creature/farm mods (mostly benign)

---

## §2 Proposed Additions — by Stage

Every ID below was verified present in `soa_exports/items.json`.
**Every `ItemStages.restrict` line listed is NOT currently in `soa_item_stages.zs`.**

### getting_started  *(no changes)*
Already covers iron/gold, cobblestone, planks, crafting table, wood+stone+iron+diamond pick/axe, tinker tables. Full parity.

### novice_engineer — add mid-tier automation (currently only `enderio:dark_steel_sword`)
GC put all `enderio` + ActuallyAdditions + basic automation here. SoA kept it thin.
**Proposed additions** (representing GC's first industrial tier):
```
ItemStages.restrict(<item:extendedcrafting:basic_table>, "novice_engineer");
ItemStages.restrict(<item:extendedcrafting:basic_auto_table>, "novice_engineer");
ItemStages.restrict(<item:extendedcrafting:advanced_table>, "novice_engineer");
ItemStages.restrict(<item:extendedcrafting:advanced_auto_table>, "novice_engineer");
ItemStages.restrict(<item:extendedcrafting:handheld_table>, "novice_engineer");
ItemStages.restrict(<item:extendedcrafting:black_iron_ingot>, "novice_engineer");
// enderio vibrant tier (mid-game, was hardmode-adjacent in GC)
ItemStages.restrict(<item:enderio:vibrant_alloy_ingot>, "novice_engineer");
ItemStages.restrict(<item:enderio:vibrant_alloy_block>, "novice_engineer");
ItemStages.restrict(<item:enderio:vibrant_capacitor_bank>, "novice_engineer");
ItemStages.restrict(<item:enderio:vibrant_photovoltaic_module>, "novice_engineer");
// mekanism basic progression (was `addModId("mekanism")` at skilled_engineer in GC;
// moving entry machines earlier matches "novice" tier better — see §3 DECISION)
```

### skilled_engineer — add basic Big Reactors + flux + extended crafting elite
GC blanket-gated all of `mekanism`/`mekanismgenerators` here. SoA currently only gates
high-tier mekanism at `master_engineer` and leaves the rest open.
```
// Big Reactors entry tier (basic_ prefix in 1.20.1)
ItemStages.restrict(<item:bigreactors:basic_reactorcasing>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:basic_reactorcontroller>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:basic_reactorcontrolrod>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:basic_reactorfuelrod>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:basic_reactorglass>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:basic_reactorpowertapfe_active>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:basic_reactorpowertapfe_passive>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:basic_reactorredstoneport>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:basic_reactorsolidaccessport>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:basic_reactorchargingportfe>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:blutonium_ingot>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:blutonium_block>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:blutonium_dust>, "skilled_engineer");
ItemStages.restrict(<item:bigreactors:blutonium_nugget>, "skilled_engineer");
// Extended Crafting elite/epic — matches GC putting crystaltine at mid-tier engineer
ItemStages.restrict(<item:extendedcrafting:elite_table>, "skilled_engineer");
ItemStages.restrict(<item:extendedcrafting:elite_auto_table>, "skilled_engineer");
ItemStages.restrict(<item:extendedcrafting:epic_table>, "skilled_engineer");
ItemStages.restrict(<item:extendedcrafting:epic_auto_table>, "skilled_engineer");
ItemStages.restrict(<item:extendedcrafting:redstone_ingot>, "skilled_engineer");
ItemStages.restrict(<item:extendedcrafting:redstone_ingot_block>, "skilled_engineer");
ItemStages.restrict(<item:extendedcrafting:enhanced_redstone_ingot>, "skilled_engineer");
ItemStages.restrict(<item:extendedcrafting:enhanced_redstone_ingot_block>, "skilled_engineer");
// Flux Networks — wireless energy, was AE2-tier in GC
ItemStages.restrict(<item:fluxnetworks:flux_controller>, "skilled_engineer");
ItemStages.restrict(<item:fluxnetworks:flux_plug>, "skilled_engineer");
ItemStages.restrict(<item:fluxnetworks:flux_point>, "skilled_engineer");
ItemStages.restrict(<item:fluxnetworks:basic_flux_storage>, "skilled_engineer");
// Mekanism core progression (GC had blanket mod-id gate here)
ItemStages.restrict(<item:mekanism:flamethrower>, "skilled_engineer");
ItemStages.restrict(<item:mekanism:seismic_reader>, "skilled_engineer");
ItemStages.restrict(<item:mekanism:seismic_vibrator>, "skilled_engineer");
ItemStages.restrict(<item:mekanism:robit>, "skilled_engineer");
ItemStages.restrict(<item:mekanism:teleporter_frame>, "skilled_engineer");
ItemStages.restrict(<item:mekanism:teleporter>, "skilled_engineer");
ItemStages.restrict(<item:mekanism:portable_teleporter>, "skilled_engineer");
ItemStages.restrict(<item:mekanism:boiler_casing>, "skilled_engineer");
ItemStages.restrict(<item:mekanism:boiler_valve>, "skilled_engineer");
```

### master_engineer — add Big Reactors turbine/energizer + flux networks top + extended crafting ultimate
```
ItemStages.restrict(<item:bigreactors:basic_turbinecasing>, "master_engineer");
ItemStages.restrict(<item:bigreactors:basic_turbinecontroller>, "master_engineer");
ItemStages.restrict(<item:bigreactors:basic_turbinerotorbearing>, "master_engineer");
ItemStages.restrict(<item:bigreactors:basic_turbinerotorshaft>, "master_engineer");
ItemStages.restrict(<item:bigreactors:basic_turbinerotorblade>, "master_engineer");
ItemStages.restrict(<item:bigreactors:basic_turbinepowertapfe_active>, "master_engineer");
ItemStages.restrict(<item:bigreactors:basic_turbinepowertapfe_passive>, "master_engineer");
ItemStages.restrict(<item:bigreactors:basic_turbinefluidport_forge_active>, "master_engineer");
ItemStages.restrict(<item:bigreactors:basic_turbinefluidport_forge_passive>, "master_engineer");
ItemStages.restrict(<item:bigreactors:basic_turbinechargingportfe>, "master_engineer");
ItemStages.restrict(<item:bigreactors:basic_turbineredstoneport>, "master_engineer");
ItemStages.restrict(<item:bigreactors:basic_turbineglass>, "master_engineer");
ItemStages.restrict(<item:bigreactors:energycore>, "master_engineer");
ItemStages.restrict(<item:bigreactors:energizercontroller>, "master_engineer");
ItemStages.restrict(<item:bigreactors:energizercasing>, "master_engineer");
ItemStages.restrict(<item:bigreactors:energizercell>, "master_engineer");
ItemStages.restrict(<item:bigreactors:ludicrite_block>, "master_engineer");
ItemStages.restrict(<item:fluxnetworks:gargantuan_flux_storage>, "master_engineer");
ItemStages.restrict(<item:fluxnetworks:herculean_flux_storage>, "master_engineer");
ItemStages.restrict(<item:extendedcrafting:ultimate_table>, "master_engineer");
ItemStages.restrict(<item:extendedcrafting:ultimate_auto_table>, "master_engineer");
ItemStages.restrict(<item:extendedcrafting:crystaltine_ingot>, "master_engineer");
ItemStages.restrict(<item:extendedcrafting:ender_star>, "master_engineer");
ItemStages.restrict(<item:extendedcrafting:ender_star_block>, "master_engineer");
ItemStages.restrict(<item:extendedcrafting:enhanced_ender_ingot>, "master_engineer");
ItemStages.restrict(<item:extendedcrafting:enhanced_ender_ingot_block>, "master_engineer");
ItemStages.restrict(<item:extendedcrafting:flux_star>, "master_engineer");
ItemStages.restrict(<item:extendedcrafting:flux_star_block>, "master_engineer");
ItemStages.restrict(<item:extendedcrafting:flux_crafter>, "master_engineer");
ItemStages.restrict(<item:extendedcrafting:auto_flux_crafter>, "master_engineer");
// Mekanism digital miner / quantum entangloporter (top-tier automation)
ItemStages.restrict(<item:mekanism:digital_miner>, "master_engineer");
ItemStages.restrict(<item:mekanism:quantum_entangloporter>, "master_engineer");
ItemStages.restrict(<item:mekanism:atomic_disassembler>, "master_engineer");
// EnderIO high-tier soul machinery
ItemStages.restrict(<item:enderio:soul_binder>, "master_engineer");
ItemStages.restrict(<item:enderio:ender_resonator>, "master_engineer");
```
(`mekanism:atomic_disassembler` is already gated; keeping it for doc clarity — I'll skip duplicates on apply.)

### ender_charm — add End Remastered eyes + Avaritia end crafters + packaged end
GC's gate here was minimal (end stone, end_rod, end_portal_frame, chorus). End Remastered
introduces scattered eyes that are genuinely required to complete the end portal and should
be locked until the wither is down.
```
ItemStages.restrict(<item:endrem:wither_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:nether_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:witch_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:corrupted_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:cursed_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:undead_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:undead_soul>, "ender_charm");
ItemStages.restrict(<item:endrem:evil_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:cold_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:old_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:exotic_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:lost_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:guardian_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:rogue_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:black_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:magical_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:cryptic_eye>, "ender_charm");
ItemStages.restrict(<item:endrem:ancient_portal_frame>, "ender_charm");
ItemStages.restrict(<item:endrem:witch_pupil>, "ender_charm");
// Avaritia end crafter (tier between compressed and double-compressed)
ItemStages.restrict(<item:avaritia:end_crafting_table>, "ender_charm");
ItemStages.restrict(<item:avaritia:nether_crafting_table>, "ender_charm");
ItemStages.restrict(<item:packagedavaritia:nether_crafter>, "ender_charm");
ItemStages.restrict(<item:packagedavaritia:end_crafter>, "ender_charm");
```
(**DECISION NEEDED:** End Remastered eyes could alternatively be gated at `wither_slayer`
since most drop from boss/dimension content. I've placed them at `ender_charm` to match GC's
"end is locked behind progression" theme; flip if you'd prefer.)

### wither_slayer — add Cataclysm witherite + ignitium gear
Cataclysm's Leviathan / Ender Guardian / Netherite Monstrosity bosses drop this progression.
Witherite is a post-wither upgrade.
```
ItemStages.restrict(<item:cataclysm:witherite_ingot>, "wither_slayer");
ItemStages.restrict(<item:cataclysm:witherite_block>, "wither_slayer");
ItemStages.restrict(<item:cataclysm:monstrous_horn>, "wither_slayer");
ItemStages.restrict(<item:cataclysm:monstrous_eye>, "wither_slayer");
ItemStages.restrict(<item:cataclysm:monstrous_helm>, "wither_slayer");
```

### nether — add Cataclysm black_steel + ignitium + infernal forge + TF fiery tier
```
// Cataclysm Nether progression
ItemStages.restrict(<item:cataclysm:ignitium_ingot>, "nether");
ItemStages.restrict(<item:cataclysm:ignitium_block>, "nether");
ItemStages.restrict(<item:cataclysm:ignitium_helmet>, "nether");
ItemStages.restrict(<item:cataclysm:ignitium_chestplate>, "nether");
ItemStages.restrict(<item:cataclysm:ignitium_leggings>, "nether");
ItemStages.restrict(<item:cataclysm:ignitium_boots>, "nether");
ItemStages.restrict(<item:cataclysm:ignitium_elytra_chestplate>, "nether");
ItemStages.restrict(<item:cataclysm:ignitium_upgrade_smithing_template>, "nether");
ItemStages.restrict(<item:cataclysm:infernal_forge>, "nether");
ItemStages.restrict(<item:cataclysm:black_steel_ingot>, "nether");
ItemStages.restrict(<item:cataclysm:black_steel_block>, "nether");
ItemStages.restrict(<item:cataclysm:black_steel_sword>, "nether");
ItemStages.restrict(<item:cataclysm:black_steel_pickaxe>, "nether");
ItemStages.restrict(<item:cataclysm:black_steel_axe>, "nether");
ItemStages.restrict(<item:cataclysm:black_steel_shovel>, "nether");
ItemStages.restrict(<item:cataclysm:black_steel_hoe>, "nether");
ItemStages.restrict(<item:cataclysm:black_steel_targe>, "nether");
// Twilight Forest fiery tier (molten-core progression — GC gated this)
ItemStages.restrict(<item:twilightforest:fiery_ingot>, "nether");
ItemStages.restrict(<item:twilightforest:fiery_blood>, "nether");
ItemStages.restrict(<item:twilightforest:fiery_tears>, "nether");
ItemStages.restrict(<item:twilightforest:fiery_sword>, "nether");
ItemStages.restrict(<item:twilightforest:fiery_pickaxe>, "nether");
ItemStages.restrict(<item:twilightforest:fiery_helmet>, "nether");
ItemStages.restrict(<item:twilightforest:fiery_chestplate>, "nether");
ItemStages.restrict(<item:twilightforest:fiery_leggings>, "nether");
ItemStages.restrict(<item:twilightforest:fiery_boots>, "nether");
ItemStages.restrict(<item:twilightforest:lamp_of_cinders>, "nether");
// Forbidden Arcanus darkstone + dark rune (nether-adjacent tier)
ItemStages.restrict(<item:forbidden_arcanus:darkstone>, "nether");
ItemStages.restrict(<item:forbidden_arcanus:dark_rune>, "nether");
ItemStages.restrict(<item:forbidden_arcanus:dark_rune_block>, "nether");
ItemStages.restrict(<item:forbidden_arcanus:eternal_obsidian_skull>, "nether");
```

### hardmode — add TF knightmetal + dungeon gear + forbidden_arcanus high + cataclysm templates
```
// Twilight Forest Dark Tower / Stronghold / Highlands tier (post-Wyvern/dark-forest bosses)
ItemStages.restrict(<item:twilightforest:knightmetal_ingot>, "hardmode");
ItemStages.restrict(<item:twilightforest:knightmetal_block>, "hardmode");
ItemStages.restrict(<item:twilightforest:knightmetal_axe>, "hardmode");
ItemStages.restrict(<item:twilightforest:knightmetal_sword>, "hardmode");
ItemStages.restrict(<item:twilightforest:knightmetal_pickaxe>, "hardmode");
ItemStages.restrict(<item:twilightforest:knightmetal_shield>, "hardmode");
ItemStages.restrict(<item:twilightforest:glass_sword>, "hardmode");
ItemStages.restrict(<item:twilightforest:mazebreaker_pickaxe>, "hardmode");
ItemStages.restrict(<item:twilightforest:diamond_minotaur_axe>, "hardmode");
ItemStages.restrict(<item:twilightforest:block_and_chain>, "hardmode");
ItemStages.restrict(<item:twilightforest:giant_pickaxe>, "hardmode");
ItemStages.restrict(<item:twilightforest:giant_sword>, "hardmode");
ItemStages.restrict(<item:twilightforest:hydra_chop>, "hardmode");
ItemStages.restrict(<item:twilightforest:moonworm_queen>, "hardmode");
ItemStages.restrict(<item:twilightforest:fortification_scepter>, "hardmode");
ItemStages.restrict(<item:twilightforest:lifedrain_scepter>, "hardmode");
ItemStages.restrict(<item:twilightforest:twilight_scepter>, "hardmode");
ItemStages.restrict(<item:twilightforest:zombie_scepter>, "hardmode");
// TF ironwood — mid-tier, but GC put this at hardmode (dungeon loot)
ItemStages.restrict(<item:twilightforest:ironwood_ingot>, "hardmode");
// TF alpha yeti set (Snowy Forest miniboss drops)
ItemStages.restrict(<item:twilightforest:alpha_yeti_fur>, "hardmode");
ItemStages.restrict(<item:twilightforest:yeti_helmet>, "hardmode");
ItemStages.restrict(<item:twilightforest:yeti_chestplate>, "hardmode");
ItemStages.restrict(<item:twilightforest:yeti_leggings>, "hardmode");
ItemStages.restrict(<item:twilightforest:yeti_boots>, "hardmode");
// TF boss spawners (allow boss re-fights only after hardmode clear)
ItemStages.restrict(<item:twilightforest:alpha_yeti_boss_spawner>, "hardmode");
ItemStages.restrict(<item:twilightforest:knight_phantom_boss_spawner>, "hardmode");
// Forbidden Arcanus stellarite (endgame dark material)
ItemStages.restrict(<item:forbidden_arcanus:stellarite_piece>, "hardmode");
ItemStages.restrict(<item:forbidden_arcanus:stellarite_block>, "hardmode");
```

### fusion_matrix — add Packaged Draconic fusion crafter + draconic injector
```
ItemStages.restrict(<item:packageddraconic:fusion_crafter>, "fusion_matrix");
ItemStages.restrict(<item:packageddraconic:marked_draconium_injector>, "fusion_matrix");
```

### wyvern — add packaged wyvern injector
```
ItemStages.restrict(<item:packageddraconic:marked_wyvern_injector>, "wyvern");
```

### awakened — add packaged draconic injector
```
ItemStages.restrict(<item:packageddraconic:marked_draconic_injector>, "awakened");
```

### chaotic — add packaged chaotic injector
```
ItemStages.restrict(<item:packageddraconic:marked_chaotic_injector>, "chaotic");
ItemStages.restrict(<item:packagedavaritia:sculk_crafter>, "chaotic");
```

### wielder_of_infinity — add Avaritia extreme + the_ultimate_ingot + Mjollnir + Gjallarhorn + appbot creative + forbidden_arcanus eternal_stella
GC's `stageInfinity` covered all this; SoA missed the new-mod equivalents.
```
ItemStages.restrict(<item:avaritia:extreme_crafting_table>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:extreme_smithing_table>, "wielder_of_infinity");
ItemStages.restrict(<item:avaritia:extreme_anvil>, "wielder_of_infinity");
ItemStages.restrict(<item:packagedavaritia:extreme_crafter>, "wielder_of_infinity");
ItemStages.restrict(<item:extendedcrafting:the_ultimate_ingot>, "wielder_of_infinity");
ItemStages.restrict(<item:appbot:creative_mana_cell>, "wielder_of_infinity");
// Mythic Botany endgame (Thor's hammer, Gjallarhorn)
ItemStages.restrict(<item:mythicbotany:mjoellnir>, "wielder_of_infinity");
ItemStages.restrict(<item:mythicbotany:gjallar_horn_full>, "wielder_of_infinity");
ItemStages.restrict(<item:mythicbotany:faded_nether_star>, "wielder_of_infinity");
ItemStages.restrict(<item:mythicbotany:fimbultyr_tablet>, "wielder_of_infinity");
// Forbidden Arcanus endgame
ItemStages.restrict(<item:forbidden_arcanus:eternal_stella>, "wielder_of_infinity");
```

### novice_wizard — introduce bloodmagic entry tier  *(DECISION)*
GC gated `bloodmagic` via `addModId` at `novice_wizard`. SoA has bloodmagic (433 items)
but currently gates nothing. Proposed entry-tier gate (matches GC's blanket approach by
hitting the key altars/sigils):
```
ItemStages.restrict(<item:bloodmagic:incensealtar>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:soulforge>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:divinationsigil>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:demonslate>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:ritualstone>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:masterritualstone>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:ritualdiviner>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:demoncrucible>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:demonpylon>, "novice_wizard");
ItemStages.restrict(<item:bloodmagic:demoncrystallizer>, "novice_wizard");
```
(**DECISION NEEDED:** Stage this at `novice_wizard` to match GC? Or lift to `skilled_wizard`
given SoA's wizard progression tunes differently? If you want the full blanket lockdown of
all 433 BM items, that requires a forge item tag or modid-level gate — the SoA stages file
doesn't currently do modid gates, so we'd add individual lines or introduce a new helper.)

### skilled_wizard — add ars charms/mark of mastery + mythicbotany alfsteel
The ars_* family replaces astralsorcery. Mastery-tier items should be gated behind wizard
progression.
```
// Ars Elemental mastery
ItemStages.restrict(<item:ars_elemental:mark_of_mastery>, "skilled_wizard");
ItemStages.restrict(<item:ars_elemental:firenando_charm>, "skilled_wizard");
ItemStages.restrict(<item:ars_elemental:firenando_familiar>, "skilled_wizard");
ItemStages.restrict(<item:ars_elemental:siren_charm>, "skilled_wizard");
ItemStages.restrict(<item:ars_elemental:siren_familiar>, "skilled_wizard");
// Ars Nouveau summoning charms (late-tier automation familiars)
ItemStages.restrict(<item:ars_nouveau:wixie_charm>, "skilled_wizard");
ItemStages.restrict(<item:ars_nouveau:drygmy_charm>, "skilled_wizard");
// Mythic Botany alfsteel tier (elementium equivalent)
ItemStages.restrict(<item:mythicbotany:alfsteel_ingot>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:alfsteel_block>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:alfsteel_nugget>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:alfsteel_pylon>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:alfsteel_template>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:alfsteel_axe>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:alfsteel_pick>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:alfsteel_sword>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:alfsteel_helmet>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:alfsteel_chestplate>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:alfsteel_leggings>, "skilled_wizard");
ItemStages.restrict(<item:mythicbotany:alfsteel_boots>, "skilled_wizard");
```

### master_wizard — add ars rituals top-tier + mythicbotany god-tier trinkets
```
// Ars Nouveau high-tier rituals (gate the rituals themselves, not all items)
ItemStages.restrict(<item:ars_nouveau:ritual_flight>, "master_wizard");
ItemStages.restrict(<item:ars_nouveau:ritual_awakening>, "master_wizard");
ItemStages.restrict(<item:ars_nouveau:ritual_moonfall>, "master_wizard");
ItemStages.restrict(<item:ars_additions:warp_nexus>, "master_wizard");
ItemStages.restrict(<item:ars_additions:ritual_chunk_loading>, "master_wizard");
ItemStages.restrict(<item:ars_additions:unstable_reliquary>, "master_wizard");
// Mythic Botany ring trinkets
ItemStages.restrict(<item:mythicbotany:andwari_ring>, "master_wizard");
ItemStages.restrict(<item:mythicbotany:cursed_andwari_ring>, "master_wizard");
ItemStages.restrict(<item:mythicbotany:aura_ring_greatest>, "master_wizard");
ItemStages.restrict(<item:mythicbotany:mana_ring_greatest>, "master_wizard");
ItemStages.restrict(<item:mythicbotany:central_rune_holder>, "master_wizard");
ItemStages.restrict(<item:mythicbotany:mana_collector>, "master_wizard");
ItemStages.restrict(<item:mythicbotany:mana_infuser>, "master_wizard");
ItemStages.restrict(<item:mythicbotany:gjallar_horn_empty>, "master_wizard");
ItemStages.restrict(<item:mythicbotany:kvasir_blood>, "master_wizard");
ItemStages.restrict(<item:mythicbotany:kvasir_mead>, "master_wizard");
```

### abyssal_conquerer, expert, descendant_of_the_sun, chaotic_dominator, graduated, challenger_a–g  *(no new additions)*
These stages already have full parity with GC. `chaotic_dominator` cannot get
`scalinghealth:difficultychanger` — item was removed from scalinghealth in 1.20.1.

### fearless_man  *(stage retired)*
GC's `fearless_man` gated AbyssalCraft dreadium/dreadkey. AbyssalCraft isn't ported to
1.20.1 — no action possible.

---

## §3 Decisions You Need To Make

1. **End Remastered eyes placement** — `ender_charm` (matches GC's "lock end progression") or
   `wither_slayer` (matches the Wither-post gate used for end crystals)? Defaulted to
   `ender_charm` in §2.

2. **Bloodmagic blanket gate** — GC used `addModId("bloodmagic")` at `novice_wizard`. SoA's
   format requires per-item lines (no mod-id helper). Two options:
   - (a) Gate the 10 key altar/sigil/ritual items as proposed in §2 and let ancillary
     materials (soulgems, etc.) flow free.
   - (b) Full 50+ item lockdown by enumerating every bloodmagic item in `items.json`.
   Recommended (a) — cleaner, still blocks progression paths.

3. **Novice-engineer repositioning** — Should Mekanism core machines shift from
   `skilled_engineer` to `novice_engineer`? GC's `addModId("mekanism")` sat at
   `skilled_engineer`; I kept them there but added `flamethrower`/`robit`/`seismic` there
   as well. If you want Mekanism basics earlier (novice_engineer), say so.

4. **EnderIO vibrant tier placement** — GC blanket-gated EnderIO at `novice_engineer`.
   I placed `vibrant_alloy_*` at `novice_engineer` (matches GC) but `soul_binder` / 
   `ender_resonator` at `master_engineer` (their recipes use ender pearls/soul vials =
   nether-plus progression). Confirm or push back.

5. **Thermal mod late-tier** — Thermal 1.20.1 ditches the `upgrade:256` augment system
   GC gated. The equivalent items (`signalum_ingot`, `lumium_ingot`, `enderium_ingot`)
   are already tag-gated at `nether`/`skilled_engineer`. No new Thermal gates needed
   unless you want specific machines (dynamo, machine frame) gated — flag if so.

6. **Ars family top-tier** — The proposed Ars restrictions touch charms/rituals. Full
   lockdown of all 402 ars_nouveau items would block decorative sourcestone blocks; the
   proposal deliberately keeps sourcestone free for building.

7. **Forbidden Arcanus smithing** — `eternal_stella` gated at `wielder_of_infinity`.
   `stellarite_piece` at `hardmode`. Reasonable? GC never saw this mod so there's no
   precedent — this is my tier assignment.

8. **Thaumon gating** — Thaumon in SoA is purely decorative blocks (137 items, no magic
   items). GC's thaumcraft content (wand, thaumonomicon, matrix, primal_charm) simply
   doesn't exist. Recommend: no gates for thaumon. Confirm.

---

## §4 Summary of Counts

- **Proposed new `ItemStages.restrict` lines:** ~235 across 13 stages
- **Sunset mods (no action possible):** 30+
- **Renamed/replaced ID mappings applied implicitly:** 15+

Current file is 537 lines; after approved additions it'll be roughly 750–800 lines.

---

## §5 Next Step

Mark up §2 (strike lines you disagree with, add notes) and answer §3 decisions. Once
approved, I apply edits to `soa_item_stages.zs`, re-run a verification pass to ensure every
added restrict targets an existing item, and report results. No changes until you say go.
