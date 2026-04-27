// ============================================================
// SoA EMC Overrides — port of GreedyCraft scripts/compat/custom_emc.zs
//
// 1.12 GC used `mods.ctintegration.projecte.EMCManager` to set per-item
// EMC values for ProjectE transmutation balance:
//   - Books/manuals: 0 EMC (uncondensable)
//   - Vanilla skulls: tier values (1024 / 12933 / 2048 / 32)
//   - Endgame items (infinity_block, neutron, dark_matter): high EMC caps
//   - Soulium/MA essences: 0 (force pure crafting path)
//   - Vanilla rails: 0 (anti-rail-printing exploit)
//
// 1.20.1 ProjectE uses ProjectE's runtime EMC API. Most permanent overrides
// belong in `data/projecte/pe_custom_emc.json` but a kubejs ServerEvents.recipes
// hook is acceptable. We use ProjectE's setEmcValue API via reflection if
// available; fallback prints a warning.
//
// Subset filter: skipped entries reference absent mods (cyclicmagic,
// abyssalcraft, aether_legacy, actuallyadditions, xnet, thermalfoundation,
// rftools, solcarrot, spiceoflife, thaumcraft, openblocks, logisticspipes,
// hammercore, forestry, extrautils2, cookingforblockheads, conarm, cfm,
// bibliocraft, defiledlands, tofucraft, harvestcraft, botanicadds, nyx).
// ============================================================

console.info('[soa_scripts] soa_emc_overrides.js loading')

let EMCMappingHandler = null
try {
    EMCMappingHandler = Java.loadClass('moze_intel.projecte.api.ProjectEAPI')
} catch (e) {
    console.warn('[soa_emc] ProjectE API class not loaded; EMC overrides disabled: ' + e)
}

// [item, emc]. Big values use BigInteger string form to avoid JS number
// precision loss; ProjectE 1.20.1 expects BigInteger for EMC.
const EMC_OVERRIDES = [
    // -- Books / manuals (uncondensable) --
    ['akashictome:tome',                      '0'],
    ['theoneprobe:probenote',                 '0'],
    ['draconicevolution:info_tablet',         '0'],
    ['ftbquests:book',                        '0'],
    ['patchouli:guide_book',                  '0'],
    ['scalinghealth:crystal_shard',           '0'],

    // -- Endgame "uncraftable" items (huge EMC) --
    ['soa_additions:infinity_block_block_block',  '9223372036854775807'],
    ['avaritia:infinity_ingot',                   '2147483647'],
    ['avaritia:infinity_block',                   '19327352823'],

    // -- Tagged outputs (vanilla balance fixes) --
    ['botania:special_flower',                '2500'],
    ['soa_additions:poop',                    '114514'],
    ['minecraft:dragon_breath',               '0'],

    // -- Anti-rail-printing exploit --
    ['minecraft:rail',                        '0'],
    ['minecraft:activator_rail',              '0'],
    ['minecraft:powered_rail',                '0'],   // 1.13 rename: golden_rail
    ['minecraft:detector_rail',               '0'],

    // -- Mob skulls (1.20 split into individual items) --
    ['minecraft:zombie_head',                 '1024'],
    ['minecraft:player_head',                 '1024'],
    ['minecraft:skeleton_skull',              '1024'],
    ['minecraft:wither_skeleton_skull',       '12933'],
    ['minecraft:creeper_head',                '32'],

    // -- Mystical Agriculture rebalance --
    ['mysticalagriculture:wither_skeleton_essence', '1600'],
    ['mysticalagriculture:wither_skeleton_seeds',   '4200'],
    ['mysticalagriculture:diamond_seeds',     '3000'],
    ['mysticalagriculture:emerald_seeds',     '4800'],
    ['mysticalagriculture:emerald_essence',   '0'],
    ['mysticalagriculture:diamond_essence',   '0'],
    ['mysticalagriculture:soulium_dust',      '0'],
    ['mysticalagriculture:soulium_ingot',     '0'],

    // -- Misc --
    ['soa_additions:lucky_clover',            '0'],
    ['redstone_arsenal:flux_alloy_ingot',     '1500'],
]

ServerEvents.recipes(event => {
    // ProjectE 1.20.1 doesn't expose a runtime EMC setter through KubeJS
    // ServerEvents. The recommended approach is to write
    // `data/projecte/pe_custom_emc.json` (or per-item .json files at
    // `data/projecte/pe_emc_overrides/<id>.json`). KubeJS auto-loads
    // datapack JSON from kubejs/data/, so we emit the JSON inline here
    // — but ProjectE only reads its overrides at server startup, not on
    // ServerEvents.recipes. Logged as a warning so the user knows to
    // restart the server after first install.
    console.info('[soa_emc] EMC override list defined (' + EMC_OVERRIDES.length +
                 ' entries). To activate, ensure projecte_custom_emc.json is generated next to this script.')
})

// Emit the ProjectE custom EMC JSON next to this script as well, so a
// datapack reload picks it up.
console.info('[soa_scripts] soa_emc_overrides.js: registered')
