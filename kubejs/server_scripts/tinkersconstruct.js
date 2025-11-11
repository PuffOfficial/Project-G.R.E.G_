let SmelteryBlocks = [`drain`, `duct`, `chute`, `fuel_tank`, `fuel_gauge`, `faucet`, `table`, `basin`]

ServerEvents.recipes(tc_greg => {
    SmelteryBlocks.forEach(block => {
        tc_greg.remove({ output: `tconstruct:seared_${block}` })
        tc_greg.remove({ output: `tconstruct:scorched_${block}` })
    })
    tc_greg.remove({ output: `tconstruct:smeltery_controller` })
    tc_greg.remove({ output: `tconstruct:foundry_controller` })
    tc_greg.remove({ output: `tconstruct:grout` })
    tc_greg.remove({ id: `tconstruct:smeltery/seared/seared_brick` })
    tc_greg.remove({ id: `tconstruct:smeltery/seared/heater` })

    tc_greg.remove({ id: `tconstruct:smeltery/seared/seared_brick_kiln` })

    tc_greg.shapeless(`2x kubejs:unfired_seared_brick`, [
        `gtceu:brick_wooden_form`, `tconstruct:grout`
    ]).keepIngredient(`gtceu:brick_wooden_form`)
    tc_greg.shapeless(`2x tconstruct:grout`, [
        `gtceu:clay_dust`, `gtceu:coal_dust`, `minecraft:sand`, `minecraft:gravel`
    ])
    tc_greg.shapeless(`gtceu:concrete_bucket`, [
        `2x gtceu:stone_dust`, `gtceu:calcite_dust`, `gtceu:gypsum_dust`, `minecraft:water_bucket`
    ])
    tc_greg.shapeless(`2x tconstruct:seared_bricks`, [
        `gtceu:concrete_bucket`, `8x tconstruct:seared_brick`
    ])

    tc_greg.shaped(`tconstruct:seared_heater`, [
        `SSS`,
        `SFS`,
        `SSS`,    
    ], {
        S: `tconstruct:seared_brick`,
        F: `minecraft:furnace`,
    })

    tc_greg.recipes.gtceu.coke_oven(`project_greg:seared_brick`)
        .itemInputs([`kubejs:unfired_seared_brick`])
        .itemOutputs([`tconstruct:seared_brick`])
        .duration(300)
})