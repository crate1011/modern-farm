//declare a empty array
const field = []

//create a function that accepts a seed as an input
//checks if seed is an array, if so it will return it to the empty field array
//if its an object it it pushes it to the field array
export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        field.push(seed[0])
        field.push(seed[1])
        return
    }
    field.push(seed)
}


//create a function that returns a copy of the array of plants
export const usePlants = () => {
    return field.map(row => ({ ...row }))
}