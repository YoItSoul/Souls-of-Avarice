# Souls of Avarice — Changelog

## 2026-08-04

### Balance & parity with GreedyCraft
- **Staged items are question marks again** — GreedyCraft showed content you hadn't unlocked as anonymous "Unknown Item" placeholders rather than hiding it outright, so you could tell something existed without learning what. That never worked here: the code meant to swap the model was silently doing nothing. Items now show a flat question-mark sprite and blocks a question-mark cube, in inventories, JEI, item frames and on the ground
- **Tooltips are tier-coloured** — a staged item's tooltip frame is tinted by the stage that gates it, using GreedyCraft's own colour table. As in GreedyCraft, the colour shows whether or not you've unlocked the stage, so a locked item reads as an anonymous but clearly-tiered mystery
- **Staged machines now look staged** — a placed machine you have no stage for renders as the Unknown Block instead of looking completely normal until you try to use it. Covers 218 machines across the eleven progression stages; ores keep their existing terrain-appropriate disguises, and decorative and natural blocks are deliberately left alone so landscapes don't fill up with question marks

## 2026-07-31

### Fixes
- **Combat rules were dead** — the on-hit script aborted before applying anything, so the thorns cap, burning-undead sunlight bonus, and explosion/projectile/boss damage scaling all did nothing; only spider slowness worked
- **Staged recipes in machine GUIs** — the mod-package whitelist that lets staged recipes craft inside Thermal, RFTools, XNet and Packaged automation was matching nothing (mod ids where Java package roots were required); Forestry was the only one that happened to work
- **Respawn boss cleanup** — the anti-respawn-cheese kill ran as an unprivileged command, so it printed "Unknown or incomplete command" into your chat once per boss type on every respawn and killed nothing; it now works, and Twilight Forest yetis are no longer part of it (they're ordinary spawns, not just the cave boss, so a server-wide sweep was far too blunt)
- **Staged custom recipes** — all 23 recipe-id gates in the stage script pointed at ids that don't exist, so they matched nothing; the Death Coin recipe was ungated as a result
- **Pack-mode change titles** — same problem: the on-screen title was rejected and spammed chat errors instead
- **Two Hephaestus Forge rituals were uncraftable** — Astral Metal and Mithrillium asked for more ingredient pedestals than the forge has (8), so they could never start and JEI dropped them; input counts rescaled (Astral Metal keeps its GreedyCraft cost per ingot)
- **Defiled Lands stairs and slabs** — corner stairs and double slabs had no models at all (missing from the mod); the pack now supplies them
- **Missing-model failures at load** — ModernFix dynamic resources is off again in the full pack; with it on, ~1,400 blockstates failed to bake and rendered as the purple missing-model (JAOPCA, Create Food, Ars Nouveau, Malum, TofuCraft, Blood Arsenal, Sculk Horde)
- **Quest rewards** — "Familiar Metal" handed out two sets of leather armor instead of one; the Fairy armor set, the sticky note, the haste potion and the enchanted pickaxe were all given with malformed item data, so they arrived undyed, unnamed, unenchanted and unbrewed
- **JEI info tooltips** — the extra sourcing notes for medals never loaded (wrong API call)

## 2026-07-27

### Mods
- **Removed:** C2ME (chunk-I/O deadlocks on fresh worlds), Better Foliage, last leftover Tinkers' Construct configs (the Smithery migration is complete)
- **Added:** Lost Cities and Defiled Lands are back (GreedyCraft parity), Actually Additions, TofuCraft, Forestry, Falling Leaves, Bagus Lib
- Chloride config migrated from JSON to the new TOML format

### Balance & parity with GreedyCraft
- **Difficulty system rework** — Scaling Health mechanics now driven by datapack overrides so difficulty factors match GreedyCraft; world events script rewritten to match
- **Boss HP parity** — flat boss health values ported (custom boss-health script + Progressive Bosses and Draconic Evolution tuning)
- **EMC overhaul** — custom EMC values now live in proper ProjectE conversion datapacks (the old KubeJS EMC files were silently dead); platinum EMC rounding exploit fixed
- **Deep-mining gate** — hardened stone seal (YUNG's Law port) generates in new chunks
- **Ore generation** — overworld ore ranges rescaled to 1.20 world depth (down to -64) with density preserved; Nether/End/Aether ranges intentionally left at 1.12 values

### Quality of life & fixes
- Quest overlay web server now binds to localhost only by default (was all interfaces)
- Automatic spark profiling default switched off; telemetry remains opt-in
- GreedyCraft guide book moved from KubeJS data into the standard `patchouli_books/` folder
- New JAOPCA materials (coralium, liquified coralium, golden amber, life essence) and Actually Additions modules
- Starmetal compound item texture; assorted JEI sort-order, Jade, tooltip and sound-physics tuning
- Client performance pass: entity/player shader shadows off by default, EMF/ETF and MCA tuning

### Repo
- `defaultconfigs/` (FTB and server config defaults) is now tracked
- Runtime caches, spark state, and local tooling are excluded from the repo
