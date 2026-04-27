// Ported from GC scripts/recipes/mods/machines/blazing_furnace.zs
// Dynamic expansion of `for recipe in furnace.all { ... }` — GC fed every vanilla
// smelting recipe into the blazing_furnace machine. On 1.20.1 CM Fork, we
// iterate smelting recipes at ServerEvents.recipes time and emit a
// custommachinery:machine JSON per smelt input.
//
// Uses event.forEachRecipe (walks the current recipe map from the datapack)
// rather than Utils.server.recipeManager — the server isn't up during the
// recipes event, so Utils.server is null.
//
// The 85 static blazing_furnace recipes in data/soa_ported/recipes/blazing_furnace/
// handle the common cases; this script covers the long tail, skipping any
// inputs that already have a static blazing_furnace recipe (by item id).

// KubeJS 6.5 note: `event.custom({type: "custommachinery:machine", ...})`
// fails with "Unknown recipe type" because CM only exposes its recipes
// through the registered RecipeSchema (event.recipes.custommachinery.machine),
// not the vanilla-serializer JSON pipeline. We therefore build each recipe
// via the schema's typed builder. The custommachinery:speed requirement is
// dropped (no JS builder is shipped for it; with `time:1` it's purely
// cosmetic JEI metadata).

ServerEvents.recipes(event => {
    // KubeJS 6 path notes for this script:
    //   - bare `java.x.y` namespace was removed ("java() is no longer
    //     supported")
    //   - class filter bans java.lang.reflect.*
    //   - Java global has no .to() conversion helper
    // So we can't pre-build a Java String[][] / HashMap<String,String> for
    // requireStructure(...). The dynamic recipes therefore omit the
    // structure requirement; the static blazing_furnace recipes in
    // data/soa_ported/recipes/blazing_furnace/ retain it, and the machine
    // block itself enforces the seared-brick housing — so dynamic recipes
    // still only fire when the player is at a properly-built machine.

    const seen = new Set();
    // Inputs already covered by the static 85 recipes — skip them to avoid
    // "duplicate id" reloads from the datapack.
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

    // NB: KubeJS 6.5 + Rhino mod throws 'redeclaration of var X' on EVERY
    // const declaration inside an arrow callback passed to forEachRecipe.
    // The fix is to move the body into a real named function — each call
    // gets its own activation record, no scope-tracking confusion.
    const counter = { emitted: 0 };

    function _processSmeltingRecipe(r, ev, covered, seenSet, ctr) {
        try {
            var rj = r.json;
            if (!rj || !rj.has("result") || !rj.has("ingredient")) return;

            var outputId = null;
            var outputCount = 1;
            var resultEl = rj.get("result");
            if (resultEl.isJsonPrimitive()) {
                outputId = resultEl.getAsString();
            } else if (resultEl.isJsonObject()) {
                if (resultEl.has("item")) outputId = resultEl.get("item").getAsString();
                if (resultEl.has("count")) outputCount = resultEl.get("count").getAsInt();
            }
            if (!outputId) return;

            var ingredientEl = rj.get("ingredient");
            var inputIds = [];
            var collect = function (el) {
                if (!el || !el.isJsonObject()) return;
                if (el.has("item")) inputIds.push(el.get("item").getAsString());
            };
            if (ingredientEl.isJsonArray()) {
                ingredientEl.forEach(function (el) { collect(el); });
            } else {
                collect(ingredientEl);
            }
            if (inputIds.length === 0) return;

            var xp = rj.has("experience") ? rj.get("experience").getAsDouble() : 0.1;
            // |0 forces a 32-bit int. Math.floor returns a JS Number that
            // Rhino sometimes hands to int-typed Java params as a boxed
            // Double; the explicit truncation avoids surprises.
            var xpAmount = Math.max(1, Math.floor(xp * 16) | 0);

            for (var i = 0; i < inputIds.length; i++) {
                var inputId = inputIds[i];
                if (covered.has(inputId)) continue;
                if (seenSet.has(inputId)) continue;
                seenSet.add(inputId);

                var recipeId = "soa_additions:blazing_furnace_dyn_" + inputId.replace(":", "_").replace(/\//g, "_");

                ev.recipes.custommachinery.machine("soa_ported:blazing_furnace")
                    .time(1)
                    .requireItem(Item.of(inputId, 1), "in")
                    .requireEnergy(400)
                    .requireFluid(Fluid.of("thermal:pyrotheum", 2), "pyro")
                    .produceFluid(Fluid.of("cofh_core:experience", xpAmount), "xp")
                    .produceItem(Item.of(outputId, outputCount), "out")
                    .id(recipeId);
                ctr.emitted++;
            }
        } catch (e) {
            // Surface the real cause (Rhino's e.toString often hides the
            // inner Java exception). The first few are enough; throttle
            // the spam if every iteration fails.
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
