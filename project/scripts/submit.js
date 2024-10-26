// get info from url
const urlParams = new URLSearchParams(location.search)
const id = urlParams.get('id')


const newPlant = {
    name: urlParams.get('plant-name'),
    scientificName: urlParams.get('scientific-name'),
    origin: urlParams.get('origin'),
    curiosities: urlParams.get('curiosities'),
    fertilization: urlParams.get('fertilization'),
    environment: urlParams.get('environment-preference'),
    lighting: urlParams.get('lighting'),
    hydration: urlParams.get('hydration'),
    growingSeason: urlParams.get('growing-season'),
}
const loadedImage = localStorage.getItem('loadedImage')
if (loadedImage) {
    newPlant.image = loadedImage
    localStorage.removeItem('loadedImage')
}

// get localstorage data
let storedPlants = localStorage.getItem('plants')
if (storedPlants === null) {
    storedPlants = '[]'
}
const plants = JSON.parse(storedPlants)
const editedPlantIndex = plants.findIndex(plant => plant.id === id)

// add url data to localstorage data
if (editedPlantIndex >= 0) {
    newPlant.id = plants[editedPlantIndex].id
    if (!newPlant.image) {
        newPlant.image = plants[editedPlantIndex].image
    }
    plants[editedPlantIndex] = newPlant
} else {
    newPlant.id = Math.random().toString()
    plants.push(newPlant)
}

// update localstorage
localStorage.setItem('plants', JSON.stringify(plants))

// redirect
location.href = 'index.html'