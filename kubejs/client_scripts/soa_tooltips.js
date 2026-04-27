// ============================================================
// SoA Item Tooltips — port of GreedyCraft scripts/tweaks/tooltip.zs
//
// 1.12 GC declared a 160-entry { item: [tooltip_lines...] } map and
// applied them to every NEI/JEI hover via CraftTweaker addTooltip().
// 1.20.1 KubeJS uses the client-side ItemEvents.tooltip() listener —
// runs every render frame, so we keep the fast-path explicit.
//
// Original 21 reusable phrases preserved as constants. Items from
// absent mods (projectex, draconicadditions, eternalsingularity,
// solarflux 1.12 ids, etc.) silently fall through.
// ============================================================

console.info('[soa_scripts] soa_tooltips.js loading')

// Reusable tooltip phrases. GC pulled these from a lang file
// (greedycraft.tooltip.constant.*); inlined here for portability.
const T = {
    disabled:               '§cDisabled in Souls of Avarice.',
    flight_disabled:        '§cCreative flight is disabled in this pack.',
    dont_place:             '§cDo not place this block — it can soft-lock the world.',
    de_disabled_wyvern:     '§cWyvern-tier DE gear is gated; advance to the §dwyvern§r§c stage to unlock.',
    de_disabled_awakened:   '§cAwakened-tier DE gear is gated; advance to the §dawakened§r§c stage to unlock.',
    dont_put_into_ae:       '§cDo not put into AE2 storage (causes desync).',
    ae_lag:                 '§eMay cause server lag in large quantities.',
    refer_to_guide:         '§eRefer to the §6quest book§r§e for full usage notes.',
    blueprint_required:     '§eRequires a Tinker§7\'§es §6Blueprint§r§e to be unlocked first.',
    shadow_mob_1:           '§5The shadow grows.',
    shadow_mob_2:           '§5Beware its hollow gaze.',
    hardmode_tinkers:       '§cAdvance to §dhardmode§r§c stage to use this Tinker§7\'§es part.',
    dont_eat_twice:         '§cDo not eat repeatedly — provides no extra benefit.',
    bow_speed:              '§7Higher draw speed = faster shots.',
    tc_book_incorrect:      '§eThaumcraft notes are out of date — refer to the §6Souls of Avarice Guide§r§e instead.',
    sentient_disabled:      '§cSentient-tier gear is gated.',
    bound_disabled:         '§cBound-tier gear is gated.',
    how_to_repair:          '§eRepair via the §6Tinker§7\'§es Anvil§r§e using the same material.',
    cant_set_spawn:         '§cCannot set spawn here.',
    machinery_upgrade_guide:'§eRight-click an upgrade slot in the controller GUI to install.',
    machinery_upgrade_warning:'§cInstalled upgrades are §cnot recoverable§r§c. Plan ahead.',
}

// item-id → array of lines. Wildcards ('*') in GC IDs are converted to
// `startsWith` matches so all variants share the tooltip.
const TOOLTIPS = {
    // Mystical Agriculture supremium gear loses creative flight in this pack
    'mysticalagriculture:supremium_helmet':     [T.flight_disabled],
    'mysticalagriculture:supremium_chestplate': [T.flight_disabled],
    'mysticalagriculture:supremium_leggings':   [T.flight_disabled],
    'mysticalagriculture:supremium_boots':      [T.flight_disabled],

    // Don't place
    'minecraft:bedrock': [T.dont_place],
    'minecraft:barrier': [T.dont_place],

    // ProjectE collectors disabled (use ProjectExtended collectors instead)
    'projecte:collector_mk1': [T.disabled, '§7Use the ProjectExtended collector chain.'],
    'projecte:collector_mk2': [T.disabled, '§7Use the ProjectExtended collector chain.'],
    'projecte:collector_mk3': [T.disabled, '§7Use the ProjectExtended collector chain.'],

    // DE wyvern gear (gated by `wyvern` stage in soa_item_stages.zs already)
    'draconicevolution:wyvern_helm':       [T.de_disabled_wyvern],
    'draconicevolution:wyvern_chestpiece': [T.de_disabled_wyvern],  // 1.20 rename of wyvern_chest
    'draconicevolution:wyvern_leggings':   [T.de_disabled_wyvern],
    'draconicevolution:wyvern_boots':      [T.de_disabled_wyvern],
    'draconicevolution:wyvern_axe':        [T.de_disabled_wyvern],
    'draconicevolution:wyvern_bow':        [T.de_disabled_wyvern],
    'draconicevolution:wyvern_pickaxe':    [T.de_disabled_wyvern],
    'draconicevolution:wyvern_shovel':     [T.de_disabled_wyvern],
    'draconicevolution:wyvern_sword':      [T.de_disabled_wyvern],
    'draconicevolution:wyvern_capacitor':  [T.de_disabled_wyvern],

    // DE awakened gear (gated by `awakened` stage)
    'draconicevolution:draconic_helm':       [T.de_disabled_awakened],
    'draconicevolution:draconic_chestpiece': [T.de_disabled_awakened],
    'draconicevolution:draconic_leggings':   [T.de_disabled_awakened],
    'draconicevolution:draconic_boots':      [T.de_disabled_awakened],
    'draconicevolution:draconic_axe':        [T.de_disabled_awakened],
    'draconicevolution:draconic_bow':        [T.de_disabled_awakened],
    'draconicevolution:draconic_pickaxe':    [T.de_disabled_awakened],
    'draconicevolution:draconic_shovel':     [T.de_disabled_awakened],
    'draconicevolution:draconic_sword':      [T.de_disabled_awakened],
    'draconicevolution:draconic_capacitor':  [T.de_disabled_awakened],

    // SoA quest items
    'soa_additions:quest_book':           [T.refer_to_guide],
    'soa_additions:blueprint':            [T.blueprint_required],
    'soa_additions:blueprint_laser_gun':  [T.blueprint_required],
    'soa_additions:blueprint_shuriken':   [T.blueprint_required],
    'soa_additions:blueprint_tactic':     [T.blueprint_required],
    'soa_additions:blueprint_wand':       [T.blueprint_required],
    'soa_additions:experience_ingot':     [T.dont_put_into_ae],
    'soa_additions:experience_nugget':    [T.dont_put_into_ae],
    'soa_additions:respawn_anchor':       [T.cant_set_spawn],

    // Mowzie's drops — narrative hints
    'mowziesmobs:ice_crystal':            ['§3Combine with §dRainbow Runes§r§3 to forge an §bAurorian Heart§r§3.'],

    // SoA forbidden bible — already has tooltip in StageItem; warn anyway
    'soa_additions:forbidden_bible':      [T.shadow_mob_1, T.shadow_mob_2],

    // Tinker tools — generic repair hint
    'tconstruct:pickaxe':    [T.how_to_repair],
    'tconstruct:hammer':     [T.how_to_repair],
    'tconstruct:hand_axe':   [T.how_to_repair],
    'tconstruct:broad_axe':  [T.how_to_repair],
    'tconstruct:mattock':    [T.how_to_repair],
    'tconstruct:cleaver':    [T.how_to_repair],
    'tconstruct:dagger':     [T.how_to_repair],
    'tconstruct:longsword':  [T.how_to_repair],
    'tconstruct:sword':      [T.how_to_repair],
    'tconstruct:flint_and_brick': [T.how_to_repair],

    // Custom Machinery (CM Fork) controller blocks
    'custommachinery:custom_machine_block': [T.machinery_upgrade_guide, T.machinery_upgrade_warning],

    // Bow tweaks
    'minecraft:bow':         [T.bow_speed],
    'minecraft:crossbow':    [T.bow_speed],
}

// Wildcard prefix table (e.g. all `projectex:relay:*` variants)
const TOOLTIPS_PREFIX = {
    'projectex:collector':           [T.disabled],
    'projectex:relay':               [T.disabled],
    'projectex:compressed_collector':[T.disabled],
    'projectex:power_flower':        [T.disabled],
    'soa_additions:bounty_hunter_medal': [T.refer_to_guide],
}

ItemEvents.tooltip(tooltip => {
    tooltip.add(undefined, item => {
        const id = String(item.id)
        const lines = TOOLTIPS[id]
        if (lines) return lines
        for (const prefix in TOOLTIPS_PREFIX) {
            if (id.startsWith(prefix)) return TOOLTIPS_PREFIX[prefix]
        }
        return undefined
    })
})

console.info('[soa_scripts] soa_tooltips.js: registered (' +
             (Object.keys(TOOLTIPS).length + Object.keys(TOOLTIPS_PREFIX).length) + ' rules)')
