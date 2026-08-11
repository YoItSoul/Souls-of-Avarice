console.info('[soa_scripts] soa_omnipedia.js loading')

const OMNIPEDIA_BOOKS = [

    { key: 'quests', id: 'soa_additions:quest_book' },
    { key: 'greedycraft', id: 'patchouli:guide_book', book: 'soa_additions:greedycraft_guide_book' },
    { key: 'elysia', id: 'patchouli:guide_book', book: 'soa_additions:the_elysia_project' },
    { key: 'nyx', id: 'patchouli:guide_book', book: 'soa_additions:nyx_guide' },
    { key: 'taiga', id: 'patchouli:guide_book', book: 'soa_additions:taiga_guide' },

    { key: 'ae2', id: 'ae2:guide' },
    { key: 'aether', id: 'aether:book_of_lore' },
    { key: 'ars_nouveau', id: 'ars_nouveau:worn_notebook' },
    { key: 'botania', id: 'botania:lexicon' },
    { key: 'embers', id: 'embers:ancient_codex' },
    { key: 'malum', id: 'malum:encyclopedia_arcana' },
    { key: 'mekanism', id: 'mekanism:dictionary' },
    { key: 'rftoolsbase', id: 'rftoolsbase:manual' },
    { key: 'solapplepie', id: 'solapplepie:food_book' },
    { key: 'valoria', id: 'valoria:codex' },
    { key: 'cookingforblockheads', id: 'cookingforblockheads:recipe_book' },
    { key: 'cookingforblockheads1', id: 'cookingforblockheads:crafting_book' },
    { key: 'cookingforblockheads2', id: 'cookingforblockheads:no_filter_edition' },

    { key: 'bloodmagic', id: 'patchouli:guide_book', book: 'bloodmagic:guide' },
    { key: 'buildinggadgets2', id: 'patchouli:guide_book', book: 'buildinggadgets2:buildinggadgets2book' },
    { key: 'bigreactors', id: 'patchouli:guide_book', book: 'bigreactors:erguide' },
    { key: 'cyclic', id: 'patchouli:guide_book', book: 'cyclic:guide_book' },
    { key: 'enderio', id: 'patchouli:guide_book', book: 'enderio:guide' },
    { key: 'enigmaticlegacy', id: 'patchouli:guide_book', book: 'enigmaticlegacy:the_acknowledgment' },
    { key: 'extendedcrafting', id: 'patchouli:guide_book', book: 'extendedcrafting:guide' },
    { key: 'mysticalagriculture', id: 'patchouli:guide_book', book: 'mysticalagriculture:guide' },
    { key: 'packagedauto', id: 'patchouli:guide_book', book: 'packagedauto:guide' },
    { key: 'productivebees', id: 'patchouli:guide_book', book: 'productivebees:guide' },
    { key: 'sebastrnlib', id: 'patchouli:guide_book', book: 'sebastrnlib:sebastrn_mods_guide_book' },
    { key: 'smithery', id: 'patchouli:guide_book', book: 'smithery:smithery_book' },
    { key: 'treasure2', id: 'patchouli:guide_book', book: 'treasure2:treasure2_manual' },
    { key: 'twilightdelight', id: 'patchouli:guide_book', book: 'twilightdelight:twilight_guide' },

    { key: 'forbidden_arcanus', id: 'patchouli:guide_book', book: 'soa_additions:forbidden_arcanus_guide' },
]

function omnipediaEntrySnbt(b) {
    let tag = '"akashictome:definedMod":"' + b.key + '"'
    if (b.book) tag += ',"patchouli:book":"' + b.book + '"'
    return '"' + b.key + '":{id:"' + b.id + '",Count:1b,tag:{' + tag + '}}'
}

const OMNIPEDIA_NBT = '{'
    + '"akashictome:is_morphing":1b,'
    + 'display:{'
    + "Name:'" + '{"translate":"greedycraft.omnipedia.name","italic":false}' + "',"
    + "Lore:["
    + "'" + '{"translate":"greedycraft.omnipedia.version","with":["' + OMNIPEDIA_BOOKS.length + '"],"italic":false}' + "',"
    + "'" + '{"translate":"greedycraft.omnipedia.tooltip","color":"gray"}' + "'"
    + ']},'
    + '"akashictome:data":{' + OMNIPEDIA_BOOKS.map(omnipediaEntrySnbt).join(',') + '}'
    + '}'

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
        var tome = Item.of('akashictome:tome', OMNIPEDIA_NBT)
        if (!player.inventory.add(tome)) player.drop(tome, false)
        GameStageHelper.addStage(player, 'omnipedia_given')
        player.tell(Component.translatable('greedycraft.omnipedia.name').gold()
            .append(Component.literal(' has been added to your inventory.').green()))
    } catch (e) {
        console.warn('[soa_omnipedia] tome grant failed: ' + e)
    }
})

console.info('[soa_scripts] soa_omnipedia.js: registered')
