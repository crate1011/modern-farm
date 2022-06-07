//imported functions
import { createPlan } from './plan.js'
import { plantSeeds } from './tractor.js'
import { usePlants } from './field.js'
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'

const yearlyPlan = createPlan()

plantSeeds(yearlyPlan)

const plantedSeeds = usePlants()

const harvestedPlants = harvestPlants(plantedSeeds)

const plantHTMLElement = document.querySelector(".container")

plantHTMLElement.innerHTML = catalog(harvestedPlants)