# SoA Ported GC Machines — Custom Machinery port

Ported from GreedyCraft's Modular Machinery recipes (`scripts/recipes/mods/machines/*.zs`
+ `config/modularmachinery/machinery/*.json`) into Custom Machinery Fork
(`arketec/Custom-Machinery` 1.20.1).

## File layout (KubeJS virtual datapack at `kubejs/data/soa_ported/`)

```
data/soa_ported/
  machine/<name>.json          # Machine controller definition
  recipe/<machine>/<recipe>.json
  upgrade/<upgrade>.json       # Speed tier modifiers (applied to all machines)
```

Plus: `kubejs/client_scripts/ponder/<machine>.js` for the Ponder scene.

## Structure design (per user)

Every machine is visually assembled from:

- `tconstruct:seared_bricks` — hull / floor / walls
- `tconstruct:seared_glass` — windows / wall corners
- A **unique accent block** per machine, placed atop the controller, to make
  each machine visually distinct at a glance.

The Custom Machinery controller itself is a single block whose appearance mirrors
a suggestive TC / mod block (e.g. `tconstruct:seared_melter` for alloy_decomposer).

The full multi-block "structure" is shown in the Ponder scene (layer-by-layer,
each block labeled), but is **not** enforced as a recipe requirement in v1 —
i.e. the controller alone can run recipes. If structure-match is wanted later,
we can add `custommachinery:structure_match` requirements referencing NBT templates.

## Accent blocks per machine

| Machine              | Controller appearance            | Accent (Ponder top) |
|----------------------|----------------------------------|----------------------|
| alloy_decomposer     | `tconstruct:seared_melter`       | `tconstruct:seared_drain` |
| blazing_furnace      | `tconstruct:scorched_bricks`     | TBD |
| exp_power_generator  | `minecraft:spawner`              | TBD |
| aeonsteel_forge      | `tconstruct:seared_melter`       | TBD |
| chromasteel_forge    | `tconstruct:seared_melter`       | TBD |
| cosmic_forge         | `tconstruct:seared_melter`       | TBD |
| durasteel_forge      | `tconstruct:seared_melter`       | TBD |
| liquid_centrifuge    | `tconstruct:seared_faucet` block | TBD |
| liquid_converter     | `tconstruct:seared_drain`        | TBD |
| loot_power_generator | `minecraft:chest`                | TBD |
| organic_infuser      | `minecraft:composter`            | TBD |
| organic_producer     | `minecraft:composter`            | TBD |
| solid_centrifuge     | `tconstruct:grout`               | TBD |
| soymilk_producer     | `minecraft:cauldron`             | TBD |

## Upgrade tiers (shared across all machines)

Ported from GC's `modifiers[].elements = modularmachinery:blockcasing@1..5`.
These are **global** — place them in the machine's Upgrade slot to apply.

| Tier  | Item                                 | Multiplier | MM source |
|-------|--------------------------------------|------------|-----------|
| t1    | `tconstruct:seared_bricks`           | 0.75 duration | `blockcasing@1` |
| t2    | `tconstruct:scorched_bricks`         | 0.66 duration | `blockcasing@2` |
| t3    | `soa_additions:modularium_ingot`     | 0.50 duration | `blockcasing@3` |
| t4    | `avaritia:crystal_matrix_ingot`      | 0.33 duration | `blockcasing@5` |

(GC's `@4` was unused.)

## Fluid mapping (GC 1.12 `liquid:*` → SoA 1.20)

### Mapped (ports cleanly)

| GC                       | SoA 1.20                               |
|--------------------------|----------------------------------------|
| iron/gold/copper/tin/... | `tconstruct:molten_<metal>`            |
| bronze/invar/electrum/...| `tconstruct:molten_<alloy>`            |
| signalum/lumium/enderium | `tconstruct:molten_<alloy>`            |
| constantan/manyullyn     | `tconstruct:molten_<alloy>`            |
| platinum/osmium/cobalt   | `tconstruct:molten_<metal>`            |
| pigiron                  | `tconstruct:molten_pig_iron`           |
| netherite                | `tconstruct:molten_netherite`          |
| ancient_debris           | `tconstruct:molten_debris`             |
| refined_obsidian         | `tconstruct:molten_refined_obsidian`   |
| refinedglowstone         | `tconstruct:molten_refined_glowstone`  |
| obsidian/clay/emerald    | `tconstruct:molten_<X>`                |
| chromium                 | `tconstruct:molten_chromium`           |
| stone                    | `tconstruct:seared_stone`              |
| scorched                 | `tconstruct:scorched_stone`            |
| water/lava/milk          | `minecraft:water/lava/milk`            |
| redstone                 | `thermal:redstone`                     |
| glowstone                | `thermal:glowstone`                    |
| ender                    | `thermal:ender`                        |
| creosote/crude_oil/resin | `thermal:creosote/crude_oil/resin`     |
| experience               | `cofh_core:experience`                 |
| xpjuice                  | `enderio:xp_juice`                     |
| blood                    | `bloodmagic:life_essence_fluid`        |
| honey                    | `create:honey`                         |
| liquid_chocolate         | `create:chocolate`                     |
| seed_oil                 | `createaddition:seed_oil`              |
| uru_fluid                | `soa_additions:molten_uru`             |

### Missing (recipe skipped with FIXME — documented per-file)

- **Taiga metals (~34)**: all `*_fluid` from Taiga (astrium, aurorium, duranite, eezo, iox, karmesine, lumix, meteorite, niob, nucleum, obsidiorite, osram, ovium, palladium, prometheum, proxii, seismum, solarium, terrax, tiberium, triberium, tritonite, uru (fluid variant), valyrium, vibranium, violium, yrdeen, dilithium, dyonite, fractum, ignitz, imperomite, jauxum, abyssum, astrium). Taiga is not installed.
- **EnderIO 1.12 molten alloys**: conductive_iron, dark_steel, end_steel, energetic_alloy, pulsating_iron, vibrant_alloy, vivid_alloy, energetic_silver. EIO 1.20 dropped molten-alloy fluids.
- **Thermal Foundation thermals**: aerotheum, pyrotheum, petrotheum. Not present in SoA's Thermal build.
- **GC custom alloys**: fierymetal, fluxed_electrum, terra_alloy, adamant_fluid, nihilite_fluid, cytosinite, osgloglas, osmiridium, alumite, alubrass, fusion_matrix. Not registered.
- **SoA metals with no molten fluid**: modularium, cryonium, infernium, titanium, manganese, manganese_steel, stainless_steel. The ingot items exist but no molten fluid is registered; could be added later via JsonThings.
- **Other**: refined_oil, soymilk, organic_fluid, ardite (TC3 replaced with cobalt+debris).

## Per-machine port progress

- [x] **alloy_decomposer** — 13/~55 recipes ported (rest rely on missing fluids)
- [ ] blazing_furnace
- [ ] exp_power_generator
- [ ] forge (aeonsteel/chromasteel/cosmic/durasteel share forge.zs)
- [ ] liquid_centrifuge
- [ ] liquid_converter
- [ ] loot_power_generator
- [ ] organic_infuser
- [ ] organic_producer
- [ ] solid_centrifuge
- [ ] soymilk_producer

## Ponder scenes

Each machine has a scene at `kubejs/client_scripts/ponder/<name>.js` that
reveals the structure **layer by layer**, labelling each block type as it
appears. Triggered via Ponder UI on the machine's controller item, or when the
player looks up one of the component blocks.

## Recipe timing

GC's formula (preserved): `time_ticks = ceil(amount / 10)`, `energy_per_tick = 20 FE`.
In CM we express total energy as `time × 20` since CM's energy requirement is
not per-tick.
