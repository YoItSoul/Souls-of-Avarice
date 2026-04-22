// Ported from GreedyCraft: scripts/recipes/mods/tconstruct.zs
// 1.12.2 CraftTweaker -> Tinker's Construct 3 (1.20.1) KubeJS
// IDs verified via soa_exports/{items,fluids,tags}.json.
//
// TC3 recipe types (schemas best-guess; KubeJS console will confirm):
//   tconstruct:melting         item/tag -> fluid
//   tconstruct:alloy           multiple fluids -> fluid
//   tconstruct:casting_table   fluid + cast -> item (ingot/nugget/etc.)
//   tconstruct:casting_basin   fluid + cast -> block
//   tconstruct:entity_melting  mob damage tick -> fluid
//   tconstruct:melting_fuel    smeltery fuel registration
//
// Verified molten fluid IDs (present in soa_exports/fluids.json):
//   tconstruct:molten_iron / gold / copper / tin / lead / silver / nickel /
//   obsidian / ender / netherite / debris / emerald / diamond / quartz /
//   enderium / signalum / lumium / electrum / invar / bronze / brass /
//   steel / manyullyn / cobalt / hepatizon / amethyst_bronze / slimesteel
//
// SoA-SPECIFIC MOLTEN FLUIDS NOT YET REGISTERED (all SoA-absorbed metals):
//   fusion_matrix, durasteel, aeonsteel, chromasteel, meteor, adaminite,
//   mithrillium, mithminite, stainless_steel, manganese_steel, modularium,
//   gaiasteel, cosmilite, crimsonite, electronium, protonium, experience,
//   terra_alloy, ethaxium, orichalcos, gaia, spectre, yellorium, astral_metal,
//   scorched, fierymetal, ravaging, adamant_fluid, yrdeen_fluid, uru_fluid,
//   valyrium_fluid, iox_fluid, nihilite_fluid, liquid_chocolate, chocolate_liquor,
//   gelid_enderium, meteorite_fluid
// -> Recipes referencing these fluids are marked // FIXME(fluid-pending)
//    and must wait for the JsonThings + Tinker-Things thingpack to register
//    the molten fluid. See memory/reference_jsonthings_for_tc3.md.
//
// DROPPED in 1.20 (fluids removed from Thermal/Aether/etc.):
//   pyrotheum, cryotheum, aerotheum, petrotheum, blood, cryonium,
//   fluxed_electrum, organic_fluid, sakura.food_oil
//
// ID mapping (see memory/project_gc_port_id_mapping.md):
//   additions:* / thaumadditions:* / tconevo:material / nyx:meteor_ingot
//      -> soa_additions:*
//   botanicadds:gaiasteel_* -> soa_additions:gaiasteel_*
//   abyssalcraft/extrabotany/tcomplement -> absent (recipes skipped)

const INGOT = 144;
const NUGGET = 16;
const BLOCK = 1296;

// Shorthand for TC3 cast items (from forge:casts/* tags in tags.json).
// 1.12 <tconstruct:cast_custom>   = ingot cast
//      <tconstruct:cast_custom:1> = nugget cast
//      <tconstruct:cast_custom:2> = gem/ball cast (context-dependent)
const CAST_INGOT  = { tag: 'forge:casts/ingot' };
const CAST_NUGGET = { tag: 'forge:casts/nugget' };
const CAST_GEM    = { tag: 'forge:casts/gem' }; // FIXME: GC cast_custom:2 usage varied

console.info('[soa_ported] tconstruct.js loading')

ServerEvents.recipes(event => {
    console.info('[soa_ported] tconstruct.js: registering recipes')

    // ================================================================
    // ==== Alloy ======================================================
    // ================================================================

    // Alloy.removeRecipe(<liquid:yrdeen_fluid>);
    // FIXME(fluid-pending): yrdeen_fluid not registered.

    // yrdeen = uru*3 + valyrium*3 + signalum*1  -> all FIXME(fluid-pending)
    // adamant = nihilite*1 + iox*3              -> all FIXME(fluid-pending)

    // Alloy.addRecipe(<liquid:emerald>*2, [<liquid:experience>*3, <liquid:redstone>*2, <liquid:glowstone>*2]);
    event.custom({
        type: 'tconstruct:alloy',
        inputs: [
            { name: 'cofh_core:experience', amount: 3 },
            { name: 'thermal:redstone',     amount: 2 },
            { name: 'thermal:glowstone',    amount: 2 }
        ],
        result: { name: 'tconstruct:molten_emerald', amount: 2 },
        temperature: 500 // FIXME: GC didn't specify; TC3 requires temperature >= lowest fluid mp
    })

    // Alloy.addRecipe(<liquid:end_steel>*288, [<liquid:obsidian>*288, <liquid:dark_steel>*288, <liquid:ender>*250]);
    // FIXME: EnderIO 1.20 dropped molten_dark_steel + molten_end_steel fluids -> NOT portable

    // Alloy.addRecipe(<liquid:experience>*16, [<liquid:blood>*8, <liquid:emerald>*1, <liquid:gold>*1]);
    // FIXME(fluid-pending): blood fluid not registered in 1.20 (TF fiery_blood is an item)

    // Alloy.addRecipe(<liquid:fierymetal>*2, [<liquid:iron>*2, <liquid:pyrotheum>*1, <liquid:lava>*1]);
    // pyrotheum DROPPED in 1.20 Thermal, fierymetal FIXME(fluid-pending) -> NOT portable

    // Alloy.addRecipe(<liquid:fluxed_electrum>*288, [<liquid:electrum>*288, <liquid:redstone>*100]);
    // fluxed_electrum DROPPED in 1.20 Thermal -> NOT portable

    // Alloy.addRecipe(<liquid:fusion_matrix>*2, [<liquid:manyullyn>*2, <liquid:adamant_fluid>*1, <liquid:enderium>*2]);
    // FIXME(fluid-pending): fusion_matrix + adamant_fluid not registered

    // Alloy.addRecipe(<liquid:liquid_chocolate>*2, [<liquid:chocolate_liquor>*1, <liquid:milk>*1]);
    // FIXME(fluid-pending): chocolate fluids not registered (candymod absent)

    // Alloy.addRecipe(<liquid:modularium>*288, [<liquid:conductive_iron>*144, <liquid:bronze>*144]);
    // FIXME(fluid-pending): modularium + conductive_iron molten not registered

    // Alloy.addRecipe(<liquid:modularium>*288, [<liquid:iron>*144, <liquid:bronze>*144, <liquid:redstone>*100]);
    // FIXME(fluid-pending): modularium not registered

    // Alloy.addRecipe(<liquid:netherite>*144, [<liquid:gold>*576, <liquid:ancient_debris>*576]);
    event.custom({
        type: 'tconstruct:alloy',
        inputs: [
            { name: 'tconstruct:molten_gold',   amount: 576 },
            { name: 'tconstruct:molten_debris', amount: 576 }
        ],
        result: { name: 'tconstruct:molten_netherite', amount: 144 },
        temperature: 1000
    })

    // Alloy.addRecipe(<liquid:scorched>*144, [<liquid:lava>*144, <liquid:stone>*144]);
    // FIXME(fluid-pending): scorched + stone molten not registered (tcomplement absent)

    // Alloy.addRecipe(<liquid:stainless_steel>*576, [<liquid:manganese_steel>*576, <liquid:nickel>*144, <liquid:chromium>*144]);
    // FIXME(fluid-pending): stainless_steel + manganese_steel molten not registered

    // Alloy.addRecipe(<liquid:manganese_steel>*288, [<liquid:steel>*288, <liquid:manganese>*144]);
    // FIXME(fluid-pending): manganese_steel + manganese molten not registered

    // Alloy.addRecipe(<liquid:terra_alloy>*2, [<liquid:cytosinite>*1, <liquid:cryonium>*1, <liquid:infernium>*1, <liquid:titanium>*1]);
    // FIXME(fluid-pending): terra_alloy + cytosinite + cryonium + infernium + titanium molten not registered

    // Alloy.addRecipe(<liquid:gelid_enderium>*144, [<liquid:enderium>*144, <liquid:cryotheum>*1000]);
    // cryotheum DROPPED in 1.20, gelid_enderium FIXME(fluid-pending) -> NOT portable


    // ================================================================
    // ==== Casting (Basin) ===========================================
    // ================================================================

    // Casting.removeBasinRecipe(<tcomplement:scorched_block*>);       // tcomplement absent
    // Casting.removeTableRecipe(<tcomplement:materials:1>);           // tcomplement absent

    // All Basin recipes reference FIXME(fluid-pending) fluids. Porting none.
    // Preserved as documentation:
    //   astral_metal_block / cosmilite_block / crimsonite_block / electronium_block /
    //   experience_block / compressed_experience_block / fusion_matrix_block /
    //   protonium_block / stainless_steel_block / terra_alloy_block /
    //   manganese_steel_block / blockyellorium / chocolate_block / blockorichalcos /
    //   meteor_block / scorched_block / durasteel_block / aeonsteel_block /
    //   chromasteel_block / gaiasteel_block / modularium_block
    //   (additionally: additions:greedycraft-netherite_block maps to... wait,
    //    vanilla minecraft:netherite_block could be cast from molten_netherite)

    // Casting.addBasinRecipe(<additions:greedycraft-netherite_block>, null, <liquid:netherite>, VOLUME_BLOCK, false, 300);
    event.custom({
        type: 'tconstruct:casting_basin',
        cast: null, // no cast required
        cast_consumed: false,
        fluid: { name: 'tconstruct:molten_netherite', amount: BLOCK },
        result: 'minecraft:netherite_block',
        cooling_time: 300
    })


    // ================================================================
    // ==== Casting (Table) ===========================================
    // ================================================================

    // Casting.addTableRecipe(<additions:netherite_ingot>, <tconstruct:cast_custom>, <liquid:netherite>, VOLUME_INGOT, false, 200);
    event.custom({
        type: 'tconstruct:casting_table',
        cast: CAST_INGOT, cast_consumed: false,
        fluid: { name: 'tconstruct:molten_netherite', amount: INGOT },
        result: 'minecraft:netherite_ingot',
        cooling_time: 200
    })
    // Casting.addTableRecipe(<additions:netherite_scrap>, <tconstruct:cast_custom>, <liquid:ancient_debris>, 160, false, 200);
    event.custom({
        type: 'tconstruct:casting_table',
        cast: CAST_INGOT, cast_consumed: false,
        fluid: { name: 'tconstruct:molten_debris', amount: 160 },
        result: 'minecraft:netherite_scrap',
        cooling_time: 200
    })

    // All other Table recipes reference FIXME(fluid-pending) fluids:
    //   astral_metal_ingot / cosmilite_ingot / crimsonite_ingot / electronium_ingot /
    //   cryonic_artifact / experience_ingot / experience_nugget / pearl_of_knowledge /
    //   stainless_steel_ball / stainless_steel_ingot / protonium_ingot /
    //   terra_alloy_ingot / manganese_steel_ingot / ingotyellorium /
    //   botania:dragonstone(manaresource:14) / chocolate_bar / ravaging_ingot /
    //   orichalcos(extrabotany) / cheeseitem(harvestcraft) / minecraft:coal /
    //   modularium_ingot / meteor_ingot / scorched brick / fusion_matrix_ingot /
    //   adaminite_ingot / mithminite_ingot / mithrillium_ingot / durasteel_ingot /
    //   aeonsteel_ingot / chromasteel_ingot / spectre(randomthings) / gaiasteel_ingot


    // ================================================================
    // ==== Melting ===================================================
    // ================================================================

    // Melting.removeRecipe(<liquid:gold>, <minecraft:golden_rail>);
    event.remove({ type: 'tconstruct:melting', ingredient: 'minecraft:powered_rail' }) // 1.13: golden_rail -> powered_rail
    // Melting.removeRecipe(<liquid:iron>, <minecraft:activator_rail>);
    event.remove({ type: 'tconstruct:melting', ingredient: 'minecraft:activator_rail' })
    // Melting.removeRecipe(<liquid:iron>, <minecraft:bucket>);
    event.remove({ type: 'tconstruct:melting', ingredient: 'minecraft:bucket' })
    // Melting.removeRecipe(<liquid:iron>, <minecraft:detector_rail>);
    event.remove({ type: 'tconstruct:melting', ingredient: 'minecraft:detector_rail' })
    // Melting.removeRecipe(<liquid:iron>, <minecraft:rail>);
    event.remove({ type: 'tconstruct:melting', ingredient: 'minecraft:rail' })
    // Melting.removeRecipe(<liquid:osmium>, <minecraft:rail>);  // same input as above; duplicate removal no-op
    // Melting.removeRecipe(<liquid:meteorite_fluid>, <taiga:obsidiorite_block>);
    // taiga + meteorite_fluid absent -> no-op

    // Melting.addEntityMelting(cow, <liquid:milk>);
    event.custom({
        type: 'tconstruct:entity_melting',
        entity: { type: 'minecraft:cow' },
        result: { name: 'minecraft:milk', amount: 20 },
        damage: 2
    })
    // enderman -> ender
    event.custom({
        type: 'tconstruct:entity_melting',
        entity: { type: 'minecraft:enderman' },
        result: { name: 'tconstruct:molten_ender', amount: 20 },
        damage: 2
    })
    // snowman -> water
    event.custom({
        type: 'tconstruct:entity_melting',
        entity: { type: 'minecraft:snow_golem' }, // 1.13 rename
        result: { name: 'minecraft:water', amount: 20 },
        damage: 2
    })
    // villager_golem -> iron
    event.custom({
        type: 'tconstruct:entity_melting',
        entity: { type: 'minecraft:iron_golem' }, // 1.13 rename
        result: { name: 'tconstruct:molten_iron', amount: 20 },
        damage: 2
    })
    // zombie_pigman -> gold
    event.custom({
        type: 'tconstruct:entity_melting',
        entity: { type: 'minecraft:zombified_piglin' }, // 1.16 rename
        result: { name: 'tconstruct:molten_gold', amount: 20 },
        damage: 2
    })

    // --- Melting item->fluid ---
    // The majority of GC melt recipes target FIXME(fluid-pending) fluids:
    //   adaminite, aerotheum, astral_metal, blood, cosmilite, crimsonite, cryotheum,
    //   electronium, ethaxium, experience (for non-cofh paths), fusion_matrix,
    //   gaia, insanium, liquid_chocolate, meteor, mithminite, mithrillium,
    //   modularium, netherite (see note below), organic_fluid, orichalcos,
    //   petrotheum, protonium, pyrotheum, ravaging, sakura.food_oil, scorched,
    //   stainless_steel, terra_alloy, yellorium, manganese_steel, durasteel,
    //   aeonsteel, chromasteel, spectre, gaiasteel
    // Porting only the ones whose molten fluid is REGISTERED in fluids.json.

    // Melting.addRecipe(<liquid:ancient_debris>*160, <ore:gemAncientDebris>, 1320);
    event.custom({
        type: 'tconstruct:melting',
        ingredient: { tag: 'forge:storage_blocks/ancient_debris' }, // FIXME: GC used "gemAncientDebris"; tag best-guess
        result: { name: 'tconstruct:molten_debris', amount: 160 },
        temperature: 1320,
        time: 100
    })
    // Melting.addRecipe(<liquid:ancient_debris>*320, <ore:oreAncientDebris>, 1320);
    event.custom({
        type: 'tconstruct:melting',
        ingredient: { tag: 'forge:ores/ancient_debris' },
        result: { name: 'tconstruct:molten_debris', amount: 320 },
        temperature: 1320,
        time: 150
    })

    // Melting.addRecipe(<liquid:coal>*VOLUME_INGOT, <ore:coal>, 600);
    // tconstruct 1.20 doesn't ship molten_coal by default; jaopca registers one.
    event.custom({
        type: 'tconstruct:melting',
        ingredient: { tag: 'forge:coals' },
        result: { name: 'jaopca:molten.coal', amount: INGOT }, // verified in fluids.json
        temperature: 600,
        time: 60
    })

    // Melting.addRecipe(<liquid:netherite>*VOLUME_INGOT, <ore:ingotNetherite>, 1500);
    event.custom({
        type: 'tconstruct:melting',
        ingredient: { tag: 'forge:ingots/netherite' },
        result: { name: 'tconstruct:molten_netherite', amount: INGOT },
        temperature: 1500,
        time: 80
    })
    // Melting.addRecipe(<liquid:netherite>*VOLUME_BLOCK, <ore:blockNetherite>, 1500);
    event.custom({
        type: 'tconstruct:melting',
        ingredient: { tag: 'forge:storage_blocks/netherite' },
        result: { name: 'tconstruct:molten_netherite', amount: BLOCK },
        temperature: 1500,
        time: 200
    })

    // All remaining Melting.addRecipe entries use FIXME(fluid-pending) target
    // fluids and are NOT portable until the thingpack registers them.


    // ================================================================
    // ==== Fuel ======================================================
    // ================================================================

    // Fuel.registerFuel(<liquid:infernium>*1, 600);
    // All fuel registrations target FIXME(fluid-pending) fluids.
    // Preserved as documentation; port when thingpack lands.
    //   infernium, cosmilite, protonium, electronium, experience, ancient_debris,
    //   scorched, orichalcos, gaia, ravaging, mithminite, mithrillium, adaminite,
    //   netherite(*), terra_alloy, fierymetal, insanium, fusion_matrix, meteor,
    //   crimsonite
    // (*) netherite IS registered; including its fuel entry:
    event.custom({
        type: 'tconstruct:melting_fuel',
        fluid: { name: 'tconstruct:molten_netherite', amount: 1 },
        duration: 200,
        temperature: 1500
    })
    // ancient_debris (molten_debris) is registered; include its fuel entry:
    event.custom({
        type: 'tconstruct:melting_fuel',
        fluid: { name: 'tconstruct:molten_debris', amount: 1 },
        duration: 200,
        temperature: 1320
    })
    console.info('[soa_ported] tconstruct.js: DONE')
})
