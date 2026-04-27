// ============================================================
// SoA Omnipedia — port of GreedyCraft scripts/global/omnipedia.zs
//
// 1.12 GC pre-built a single AkashicTome containing ~14 documentation books
// (tconstruct, bloodarsenal, theoneprobe, astralsorcery, ftbquests, rftools,
// patchouli×2, embers, etc.) via a hardcoded NBT bundle. The 413-line
// source was almost entirely per-book NBT structure declarations.
//
// 1.20.1 port: AkashicTome IS installed (AkashicTome-1.7-27.jar). Rather
// than reproduce the giant pre-bundled NBT (most 1.12 books are from absent
// mods anyway), we give players a STOCK AkashicTome on first login and let
// them merge books in as they encounter them — that's the mod's intended
// 1.20.1 workflow. Functionally equivalent UX, much smaller surface.
//
// Triggered once per player via 'omnipedia_given' GameStage flag.
// ============================================================

console.info('[soa_scripts] soa_omnipedia.js loading')

let GameStageHelper = null
try {
    GameStageHelper = Java.loadClass('net.darkhax.gamestages.GameStageHelper')
} catch (e) {
    console.warn('[soa_omnipedia] GameStages absent: cannot gate one-shot grant — disabling first-login give')
}

PlayerEvents.loggedIn(event => {
    const player = event.player
    if (!player || player.level.isClientSide() || !GameStageHelper) return

    if (GameStageHelper.hasStage(player, 'omnipedia_given')) return

    try {
        const tome = Item.of('akashictome:tome').withNBT({
            'akashictome:is_morphing': 1,
            display: {
                Name: '{"translate":"greedycraft.omnipedia.name","color":"gold"}',
                Lore: ['{"translate":"greedycraft.omnipedia.tooltip","color":"gray","italic":true}'],
            },
        })
        if (!player.inventory.add(tome)) player.drop(tome, false)
        GameStageHelper.addStage(player, 'omnipedia_given')
        player.tell(Component.translatable('greedycraft.omnipedia.granted').gold())
    } catch (e) {
        console.warn('[soa_omnipedia] tome grant failed: ' + e)
    }
})

console.info('[soa_scripts] soa_omnipedia.js: registered')
