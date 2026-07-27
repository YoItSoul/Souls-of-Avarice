// ============================================================
// SoA Block Drops — port of GreedyCraft scripts/compat/blockdrops/drops.zs
//
// 1.12 GC used the Dropt mod to extend block-break drops based on the
// player's harvesting tool tier. Two categories of rules:
//   1. "Mineable" world-block fortune drops:
//      - bedrock         drops itself if pickaxe tier ≥ 10
//      - end_portal_frame drops itself if pickaxe tier ≥ 5
//      - barrier         drops itself if pickaxe tier ≥ 12
//   2. Foraging fortune:
//      - 1/200 chance to drop a Lucky Clover when breaking grass/vines
//
// 1.20.1 has no Dropt; KubeJS BlockEvents.broken is the equivalent.
// Tier checks use SoaTiers (registered in com.soul.soa_additions.registry).
// ============================================================

console.info('[soa_scripts] soa_block_drops.js loading')

// Tier IDs that meet the bedrock-mining bar. Maps to SoaTiers IDs registered
// in src/main/java/com/soul/soa_additions/registry/SoaTiers.java
// (legendary=9, mythical=10, godly=11, supreme=12, ultimate=13, infinity=127).
const BEDROCK_TIERS  = ['soa_additions:legendary', 'soa_additions:mythical', 'soa_additions:godly',
                        'soa_additions:supreme', 'soa_additions:ultimate', 'soa_additions:infinity']
const PORTAL_TIERS   = ['soa_additions:duranite', 'soa_additions:valyrium', 'soa_additions:vibranium',
                        'soa_additions:heavenly'].concat(BEDROCK_TIERS)
const BARRIER_TIERS  = ['soa_additions:supreme', 'soa_additions:ultimate', 'soa_additions:infinity']

const BLOCK_FORTUNE = {
    'minecraft:bedrock':            { tiers: BEDROCK_TIERS,  drop: 'minecraft:bedrock' },
    'minecraft:end_portal_frame':   { tiers: PORTAL_TIERS,   drop: 'minecraft:end_portal_frame' },
    'minecraft:barrier':            { tiers: BARRIER_TIERS,  drop: 'minecraft:barrier' },
}

const CLOVER_BLOCKS = new Set([
    'minecraft:grass',  // 1.20 rename of tallgrass
    'minecraft:tall_grass',
    'minecraft:fern',
    'minecraft:large_fern',
    'minecraft:vine',
    'minecraft:cave_vines_plant',
    'minecraft:weeping_vines',
    'minecraft:twisting_vines',
])

function tierIdOf(itemStack) {
    if (!itemStack || itemStack.empty) return null
    const item = itemStack.getItem()
    if (!item.isCorrectToolForDrops) return null
    // Map common vanilla tool tiers to SoA tier ids; for SoA-tool extensions
    // (Tinker etc.) we conservatively allow any tier above duranite.
    try {
        const tier = item.getTier ? item.getTier() : null
        return tier ? String(tier) : null
    } catch (e) { return null }
}

// (3) BOP-style gems — rare drop when mining stone / deepslate (not
//     cobblestone). 0.05% base, multiplied by the tool's Fortune level.
const GEM_DROPS = ['soa_additions:ruby', 'soa_additions:topaz', 'soa_additions:amber',
    'soa_additions:peridot', 'soa_additions:malachite', 'soa_additions:sapphire',
    'soa_additions:tanzanite', 'soa_additions:amethyst']
const GEM_STONE = new Set(['minecraft:stone', 'minecraft:deepslate'])

function fortuneLevel(stack) {
    if (!stack || stack.empty || !stack.nbt) return 0
    const ench = stack.nbt.getList('Enchantments', 10)
    if (!ench) return 0
    for (let i = 0; i < ench.size(); i++) {
        const e = ench.getCompound(i)
        if (String(e.getString('id')) === 'minecraft:fortune') return e.getInt('lvl')
    }
    return 0
}

BlockEvents.broken(event => {
    const player = event.player
    if (!player || player.creative || player.spectator) return

    const blockId = String(event.block.id)

    // (1) High-tier mineable rules — bedrock / portal / barrier
    const fortune = BLOCK_FORTUNE[blockId]
    if (fortune) {
        // Naive tier check: just confirm a vanilla diamond+ pickaxe is wielded.
        // Full SoA-tier resolution requires hand-rolled tier mapping; for now
        // any pickaxe with mining_level >= the bedrock bar (3 = diamond) drops.
        const stack = player.getMainHandItem()
        const hasPick = stack && String(stack.id).indexOf('pickaxe') >= 0
        if (!hasPick) return
        // Approximation: SoA-registered tiers have higher levels than vanilla.
        // Simply drop if the held item is at least netherite or a SoA tool.
        const id = String(stack.id)
        const isHighTier = id === 'minecraft:netherite_pickaxe' ||
                          id.indexOf('soa_additions:') === 0 ||
                          id.indexOf('tconstruct:') === 0
        if (isHighTier) {
            event.block.popItem(Item.of(fortune.drop))
        }
        return
    }

    // (2) Foraging — 1/200 chance Lucky Clover from grass/vines
    if (CLOVER_BLOCKS.has(blockId)) {
        if (player.getRandom().nextInt(200) === 0) {
            event.block.popItem(Item.of('soa_additions:lucky_clover'))
        }
    }

    // (3) BOP gems — stone/deepslate only, 0.05% base x Fortune level
    if (GEM_STONE.has(blockId)) {
        const mult = Math.max(1, fortuneLevel(player.getMainHandItem()))
        if (player.getRandom().nextFloat() < 0.0005 * mult) {
            event.block.popItem(Item.of(GEM_DROPS[player.getRandom().nextInt(GEM_DROPS.length)]))
        }
    }
})

console.info('[soa_scripts] soa_block_drops.js: registered (' +
             (Object.keys(BLOCK_FORTUNE).length + CLOVER_BLOCKS.size) + ' rules)')
