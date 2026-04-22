GreedyCraft Recipe Port (1.12.2 -> 1.20.1)
===========================================

Source: D:/Minecraft/Instances/GreedyCraft/scripts/recipes/**/*.zs
Each GC mod-recipe file is ported 1:1 into a matching <mod>.js here.
Per project rule: IDs are translated verbatim. If a referenced mod
or item is absent in SoA 1.20.1, the recipe is left as-is -- KubeJS
will log a harmless warning and skip it; user will fix unknown IDs.

Conventions:
 * Original ZenScript line preserved as a // comment above the JS.
 * <ore:fooBar>           -> '#forge:foo/bar'  (1.20.1 forge tag)
 * <item:mod:name>        -> 'mod:name'
 * <item:mod:name:meta>   -> 'mod:name'        (meta no longer exists
                                                in 1.20; user may
                                                need to rename)
 * mods.bloodmagic.X      -> event.custom({type:'bloodmagic:...', ...})
 * mods.botania.X         -> event.custom({type:'botania:...', ...})
 * mods.thermalexpansion  -> event.custom({type:'thermal:...', ...})
 * mods.enderio.X         -> event.custom({type:'enderio:...', ...})
 * mods.mekanism.X        -> event.custom({type:'mekanism:...', ...})

Files (phase 1 - simple mod recipe scripts):
  mekanism.js            - Mekanism infuser removals
  projecte.js            - ProjectE world transmutations
  botania.js             - Botania ElvenTrade / Apothecary / PureDaisy / RuneAltar
  bloodmagic.js          - Blood Magic Altar / Tartaric Forge / Alchemy Array
  mysticalagriculture.js - MA seed registrations
  enderio.js             - EIO SAG Mill / Alloy Smelter
  thermalexpansion.js    - Thermal machine recipes

Phase 2+ (not yet ported):
  vanilla (shaped/shapeless/changes/remove/compressing/dyes)
  brewing, furnace
  tconstruct, avaritia (huge), draconicevolution
  abyssalcraft/thaumcraft/forestry/astralsorcery/actuallyadditions/touhou_little_maid
    -- mods absent in SoA, will be skipped entirely
  machines/* (organic_producer, solid_centrifuge, etc.)
    -- GC-custom machine mods not present, will be skipped entirely
