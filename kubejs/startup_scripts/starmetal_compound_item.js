// Starmetal Compound — intermediate for the Astral-Sorcery-replacement starmetal path.
// Salis Mundus (thaumon:mutagen) + iron + aquamarine + clay is crafted into 4 compounds,
// then smelted into soa_additions:starmetal_ingot. Texture: grayscale raw-iron tinted to a
// celestial blue-silver (kubejs/assets/kubejs/textures/item/starmetal_compound.png).

StartupEvents.registry('item', event => {
    event.create('starmetal_compound')
        .displayName('Starmetal Compound')
        .texture('kubejs:item/starmetal_compound')
        .tooltip('§9Raw celestial alloy — smelt it to refine Starmetal')
})
