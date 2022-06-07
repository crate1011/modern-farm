const types = ["Soybean", "Corn", "Asparagus", "Wheat", "Potato", "Sunflower"]

export const createPlan = () => {
    const plan = []
    //this for loop creates the row and the for loop nested within 
    //creates the plants within the row, loop restarts until index equals 3
    //pushes row to plan array
    for (let index = 0; index < 3; index++) {
        const row = []
        for (let j = 0; j < 6; j++) {
            row.push(crop.next().value)
        }
        plan.push(row)
    }

    return plan
}




/*
    This is a generator function used to randomly
    generate crop types to plants in each plot. It
    is not relevant for you implementing your code
    for this project.
*/
const crop = function* () {
    while (true) {
        const typeIdx = Math.floor(Math.random() * types.length)
        yield types[typeIdx]
    }
}()

