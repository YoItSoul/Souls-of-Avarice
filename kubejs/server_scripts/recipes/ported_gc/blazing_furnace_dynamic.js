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

ServerEvents.recipes(event => {
    const STRUCT_PATTERN = [
        ["III", "III", "III"],
        ["I$I", "G G", "IGI"],
        ["III", "ICI", "III"]
    ];
    const STRUCT_KEYS = {
        I: "tconstruct:seared_bricks",
        G: "minecraft:glass",
        C: "tconstruct:seared_melter"
    };

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

    let emitted = 0;
    event.forEachRecipe({ type: "minecraft:smelting" }, r => {
        try {
            const json = r.json;
            if (!json || !json.has("result") || !json.has("ingredient")) return;

            // Result: "minecraft:x" string OR {item, count?}
            let outputId = null;
            let outputCount = 1;
            const resultEl = json.get("result");
            if (resultEl.isJsonPrimitive()) {
                outputId = resultEl.getAsString();
            } else if (resultEl.isJsonObject()) {
                if (resultEl.has("item")) outputId = resultEl.get("item").getAsString();
                if (resultEl.has("count")) outputCount = resultEl.get("count").getAsInt();
            }
            if (!outputId) return;

            // Ingredient: {item} | {tag} | array of those. Collect all items
            // from {item}; skip pure {tag} entries (would need tag resolution).
            const ingredientEl = json.get("ingredient");
            const inputIds = [];
            const collect = el => {
                if (!el || !el.isJsonObject()) return;
                if (el.has("item")) inputIds.push(el.get("item").getAsString());
            };
            if (ingredientEl.isJsonArray()) {
                ingredientEl.forEach(el => collect(el));
            } else {
                collect(ingredientEl);
            }
            if (inputIds.length === 0) return;

            const xp = json.has("experience") ? json.get("experience").getAsDouble() : 0.1;
            const xpAmount = Math.max(1, Math.floor(xp * 16));

            inputIds.forEach(inputId => {
                if (staticCovered.has(inputId)) return;
                if (seen.has(inputId)) return;
                seen.add(inputId);

                const recipeId = `soa_additions:blazing_furnace_dyn_${inputId.replace(":", "_").replace(/\//g, "_")}`;

                event.custom({
                    type: "custommachinery:machine",
                    machine: "soa_ported:blazing_furnace",
                    time: 1,
                    requirements: [
                        { type: "custommachinery:item", mode: "input",  item: inputId, amount: 1, slot: "in" },
                        { type: "custommachinery:energy", mode: "input", amount: 400 },
                        { type: "custommachinery:fluid", mode: "output", fluid: "cofh_core:experience", amount: xpAmount, tank: "xp" },
                        { type: "custommachinery:fluid", mode: "input",  fluid: "thermal:pyrotheum", amount: 2, tank: "pyro" },
                        { type: "custommachinery:item",  mode: "output", item: outputId, amount: outputCount, slot: "out" },
                        { type: "custommachinery:speed", mode: "input" },
                        { type: "custommachinery:structure", mode: "input", action: "CHECK",
                          pattern: STRUCT_PATTERN, keys: STRUCT_KEYS }
                    ]
                }).id(recipeId);
                emitted++;
            });
        } catch (e) {
            console.warn(`[blazing_furnace_dynamic] skipping recipe: ${e}`);
        }
    });
    console.info(`[blazing_furnace_dynamic] emitted ${emitted} dynamic recipes`);
});
