// Ponder scene for the Alloy Decomposer machine.
// Shows the intended 3x3x3 regular-tier structure layer-by-layer, labeling
// each block type as it appears. The controller alone can run recipes in v1;
// the structure here is visual/documentation only.
// Regular-tier palette: iron_block hull + glass windows + copper_block accent.
//
// CM Fork 1.20.1 registers ONE generic controller block for all machines:
//   block: custommachinery:custom_machine_block
//   item:  custommachinery:custom_machine_item  (machine is selected via NBT)
// So every machine's Ponder scene attaches to the generic item — players
// scroll to find the scene that matches the machine they placed.

Ponder.registry((event) => {
    event.create(Item.of('custommachinery:custom_machine_item', '{machine:"soa_ported:alloy_decomposer"}'))
        .scene('alloy_decomposer_structure',
               'Alloy Decomposer — Structure',
               (scene, util) => {

            scene.showBasePlate()
            scene.idle(10)

            // ---- Selections ----
            const floor       = util.select.fromTo(1, 1, 1, 3, 1, 3)
            const wallCorners = util.select.position(1, 2, 1)
                .add(util.select.position(3, 2, 1))
                .add(util.select.position(1, 2, 3))
                .add(util.select.position(3, 2, 3))
            // Controller takes the front-middle wall slot so it's reachable from
            // outside. Glass occupies the other three middle wall slots.
            const wallGlass   = util.select.position(1, 2, 2)
                .add(util.select.position(3, 2, 2))
                .add(util.select.position(2, 2, 3))
            const controller  = util.select.position(2, 2, 1)
            const roof        = util.select.fromTo(1, 3, 1, 3, 3, 3)
                .substract(util.select.position(2, 3, 2))   // exclude accent slot
            const accent      = util.select.position(2, 3, 2)

            // ---- Pre-place structure (hidden until showSection reveals each layer) ----
            // Note: setBlock takes a raw [x,y,z] array; setBlocks takes a Selection.
            //       CM's block renders appearance from BlockEntity NBT key "machineID"
            //       (the item-stack NBT key is "machine"; the tile persists it as "machineID").
            scene.world.setBlocks(floor,       'minecraft:iron_block', false)
            scene.world.setBlocks(wallCorners, 'minecraft:iron_block', false)
            scene.world.setBlocks(wallGlass,   'minecraft:glass',      false)
            scene.world.setBlock ([2, 2, 1],   'custommachinery:custom_machine_block', false)
            scene.world.modifyBlockEntityNBT(controller, (nbt) => {
                nbt.putString('machineID', 'soa_ported:alloy_decomposer')
            })
            scene.world.setBlocks(roof,        'minecraft:iron_block',  false)
            scene.world.setBlock ([2, 3, 2],   'minecraft:copper_block', false)

            // setBlocks(..., false) keeps blocks hidden until showSection reveals them
            scene.idle(10)

            // ---- Layer 1: floor ----
            scene.world.showSection(floor, Facing.DOWN)
            scene.idle(10)
            scene.addKeyframe()
            scene.text(80,
                'Layer 1 — Iron Block floor (3x3)',
                util.vector.centerOf(2, 1, 2))
                .colored(PonderPalette.BLUE)
                .attachKeyFrame()
            scene.idle(90)

            // ---- Layer 2a: corners ----
            scene.world.showSection(wallCorners, Facing.DOWN)
            scene.idle(10)
            scene.text(70,
                'Layer 2 corners — Iron Block (x4)',
                util.vector.topOf(1, 2, 1))
                .colored(PonderPalette.BLUE)
                .attachKeyFrame()
            scene.idle(80)

            // ---- Layer 2b: glass windows ----
            scene.world.showSection(wallGlass, Facing.DOWN)
            scene.idle(10)
            scene.text(70,
                'Layer 2 sides — Glass windows (x3)',
                util.vector.topOf(2, 2, 3))
                .colored(PonderPalette.GREEN)
                .attachKeyFrame()
            scene.idle(80)

            // ---- Layer 2c: controller ----
            scene.world.showSection(controller, Facing.DOWN)
            scene.idle(10)
            scene.text(90,
                'Alloy Decomposer controller (front face — right-click here)',
                util.vector.topOf(2, 2, 1))
                .colored(PonderPalette.WHITE)
                .attachKeyFrame()
            scene.idle(100)

            // ---- Layer 3: roof ----
            scene.world.showSection(roof, Facing.DOWN)
            scene.idle(10)
            scene.text(70,
                'Layer 3 — Iron Block roof (8 of 9)',
                util.vector.topOf(1, 3, 1))
                .colored(PonderPalette.BLUE)
                .attachKeyFrame()
            scene.idle(80)

            // ---- Accent ----
            scene.world.showSection(accent, Facing.DOWN)
            scene.idle(10)
            scene.text(100,
                'Copper Block — accent (identifies this machine)',
                util.vector.topOf(2, 3, 2))
                .colored(PonderPalette.RED)
                .attachKeyFrame()
            scene.idle(110)
        })
})
