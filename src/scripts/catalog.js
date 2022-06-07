//Define and export a Catalog function.
//The Catalog function should accept the harvested food array as input.
//The Catalog function should iterate the array of food objects.


//iterates through plant array and interpolates into html
export const catalog = (plantArray) => {

    let plantHTML = ``

    for (const plant of plantArray) {
        plantHTML += `<section class="plant">${plant.type}</section>`
    }
    return plantHTML
}