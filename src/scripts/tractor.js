import { addPlant } from "./field.js"

//imported my seed functions so that the tractor function can access them
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

//The function must accept the year's planting plan as input
//create a function that iterates both parent and child arrays
//iterates though and adds plants with the addplant function
//the add plant funtion sends it into the empty field array in field.js
export const plantSeeds = (planArray) => {

    for (const plan of planArray) {
        for (const crop of plan) {
            if (crop === "Asparagus") {
                const asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            }
            else if (crop === "Corn") {
                const cornSeed = createCorn()
                addPlant(cornSeed)
            }
            else if (crop === "Potato") {
                const potatoSeed = createPotato()
                addPlant(potatoSeed)
            }
            else if (crop === "Soybean") {
                const soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            }
            else if (crop === "Sunflower") {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            }
            else if (crop === "Wheat") {
                const wheatSeed = createWheat()
                addPlant(wheatSeed)
            }

        }
    }

}