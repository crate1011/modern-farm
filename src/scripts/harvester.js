//The harvestPlants function must accept the plants array as input.
//The function will return an array of seed objects.
//Iterate the array of growing plants. On each plant, get the value of the output property.
//Add that many of the plant objects to the array that the function returns. For example, if the current plant is a peanut object with an output of 2...
//Then the array that the function returns should have two identical objects added to it.

export const harvestPlants = (plantArray) => {
    const harvestedPlants = []
    //first for of loop iterates through our plantarray to give us acces to each plant
    //then created a output var and made a ternary operator 
    //the ternary operator asks if plant type is equal to corn
    //if so, it plant output is cut in half to sell to a farmer
    //if its not corn its just plant output
    for (const plant of plantArray) {
        const output = plant.type === "Corn" ? plant.output * .5 : plant.output
        //the nested for loop sets i equal to 1, if i is less than or eqaul to output
        //the i++ increment will add 1 plant until eqaul to plant.output
        for (let i = 1; i <= output; i++) {
            harvestedPlants.push(plant)
        }//pushes to harvested plants empty array
    }
    return harvestedPlants
}