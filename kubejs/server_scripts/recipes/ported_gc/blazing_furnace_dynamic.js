ServerEvents.recipes(event => {

    const seen = new Set();

    const staticCovered = new Set([
        "minecraft:acacia_log", "minecraft:ancient_debris", "minecraft:basalt",
        "minecraft:beef", "minecraft:birch_log", "minecraft:blackstone",
        "minecraft:cactus", "minecraft:chicken", "minecraft:chorus_fruit",
        "minecraft:clay", "minecraft:clay_ball", "minecraft:coal_ore",
        "minecraft:cobblestone", "minecraft:cod", "minecraft:copper_ore",
        "minecraft:dark_oak_log", "minecraft:deepslate_coal_ore",
        "minecraft:deepslate_copper_ore", "minecraft:deepslate_diamond_ore",
        "minecraft:deepslate_emerald_ore", "minecraft:deepslate_gold_ore",
        "minecraft:deepslate_iron_ore", "minecraft:deepslate_lapis_ore",
        "minecraft:deepslate_redstone_ore", "minecraft:diamond_ore",
        "minecraft:emerald_ore", "minecraft:gold_ore", "minecraft:golden_pickaxe",
        "minecraft:golden_sword", "minecraft:iron_ore", "minecraft:iron_pickaxe",
        "minecraft:iron_sword", "minecraft:jungle_log", "minecraft:kelp",
        "minecraft:lapis_ore", "minecraft:mangrove_log", "minecraft:mutton",
        "minecraft:nether_gold_ore", "minecraft:nether_quartz_ore",
        "minecraft:netherrack", "minecraft:oak_log", "minecraft:polished_blackstone",
        "minecraft:porkchop", "minecraft:potato", "minecraft:pumpkin",
        "minecraft:rabbit", "minecraft:raw_copper", "minecraft:raw_gold",
        "minecraft:raw_iron", "minecraft:redstone_ore", "minecraft:salmon",
        "minecraft:sand", "minecraft:sandstone", "minecraft:spruce_log",
        "minecraft:stone", "minecraft:tropical_fish", "minecraft:wet_sponge",
        "minecraft:cobbled_deepslate", "minecraft:raw_copper_block",
        "minecraft:raw_gold_block", "minecraft:raw_iron_block",
        "minecraft:stone_bricks", "minecraft:polished_blackstone_bricks"
    ]);

    const counter = { emitted: 0 };

    function _processSmeltingRecipe(r, ev, covered, seenSet, ctr) {
        try {
            var rj = r.json;
            if (!rj || !rj.has("result") || !rj.has("ingredient")) return;

            var outputId = null;
            var outputCount = 1;
            var resultEl = rj.get("result");
            if (resultEl.isJsonPrimitive()) {
                outputId = String(resultEl.getAsString());
            } else if (resultEl.isJsonObject()) {
                if (resultEl.has("item")) outputId = String(resultEl.get("item").getAsString());
                if (resultEl.has("count")) outputCount = resultEl.get("count").getAsInt();
            }
            if (!outputId) return;

            var ingredientEl = rj.get("ingredient");
            var inputIds = [];
            var collect = function (el) {
                if (!el || !el.isJsonObject()) return;
                if (el.has("item")) inputIds.push(String(el.get("item").getAsString()));
            };
            if (ingredientEl.isJsonArray()) {
                ingredientEl.forEach(function (el) { collect(el); });
            } else {
                collect(ingredientEl);
            }
            if (inputIds.length === 0) return;

            var xp = rj.has("experience") ? rj.get("experience").getAsDouble() : 0.1;

            var xpAmount = Math.max(1, Math.floor(xp * 16) | 0);

            for (var i = 0; i < inputIds.length; i++) {
                var inputId = inputIds[i];
                if (covered.has(inputId)) continue;
                if (seenSet.has(inputId)) continue;
                seenSet.add(inputId);

                var recipeId = "soa_additions:blazing_furnace_dyn_"
                    + String(inputId).replace(/:/g, "_").replace(/\//g, "_");

                ev.recipes.custommachinery.custom_machine("soa_ported:blazing_furnace", 1)
                    .requireItem(Item.of(inputId, 1), "in")
                    .requireEnergy(400)
                    .requireFluid(Fluid.of("smithery:molten_blaze", 2), "pyro")
                    .produceFluid(Fluid.of("cofh_core:experience", xpAmount), "xp")
                    .produceItem(Item.of(outputId, outputCount), "out")

                    .requireStructure(
                        [["III", "III", "III"], ["ImI", "G G", "IGI"], ["III", "ICI", "III"]],
                        { "I": "smithery:furnace_bricks", "G": "minecraft:glass", "C": "minecraft:blast_furnace" })
                    .id(recipeId);
                ctr.emitted++;
            }
        } catch (e) {

            if (ctr.errorsLogged === undefined) ctr.errorsLogged = 0;
            if (ctr.errorsLogged < 3) {
                console.warn("[blazing_furnace_dynamic] skipping recipe: " + e
                    + (e && e.javaException ? " | java: " + e.javaException : "")
                    + (e && e.stack ? "\n" + e.stack : ""));
                ctr.errorsLogged++;
            }
        }
    }

    event.forEachRecipe({ type: "minecraft:smelting" }, function (r) {
        _processSmeltingRecipe(r, event, staticCovered, seen, counter);
    });
    console.info("[blazing_furnace_dynamic] emitted " + counter.emitted + " dynamic recipes");
});
