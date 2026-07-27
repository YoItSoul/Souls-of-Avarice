# Souls of Avarice — Changelog

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
