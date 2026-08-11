const $BossAttributes = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes')

const BOSS_BASE_HP = {
    'twilightforest:naga': 550,
    'twilightforest:lich': 600,
    'twilightforest:minoshroom': 600,
    'twilightforest:hydra': 840,
    'twilightforest:knight_phantom': 500,
    'twilightforest:ur_ghast': 750,
    'twilightforest:alpha_yeti': 800,
    'twilightforest:snow_queen': 700,
    'twilightforest:giant_miner': 700,
    'twilightforest:armored_giant': 700,
    'mowziesmobs:ferrous_wroughtnaut': 400,
    'defiled_lands_preborn:the_destroyer': 2400,
    'defiled_lands_preborn:the_mourner': 4600,
}

Object.keys(BOSS_BASE_HP).forEach(id => {
    const hp = BOSS_BASE_HP[id]
    EntityEvents.spawned(id, event => {
        const e = event.entity
        if (!e || !e.living || e.level.isClientSide()) return
        const inst = e.getAttribute($BossAttributes.MAX_HEALTH)
        if (!inst) return

        if (Math.abs(inst.baseValue - hp) > 0.5) {
            inst.baseValue = hp
            e.health = e.maxHealth
        }
    })
})

console.info('[soa_scripts] soa_boss_health.js: registered (' +
             Object.keys(BOSS_BASE_HP).length + ' boss overrides)')
