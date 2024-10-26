const urlParams = new URLSearchParams(location.search)
const id = urlParams.get('id')

const pageDetails = plantDetails.find(plant => plant.id === id)

const plantNameElement = document.querySelector("#plant-name")
plantNameElement.textContent = pageDetails.name

const plantOriginElement = document.querySelector("#origin")
plantOriginElement.textContent = pageDetails.origin

const plantScientificNameElement = document.querySelector("#scientific-name")
plantScientificNameElement.textContent = pageDetails.scientificName

const curiositiesElement = document.querySelector('#curiosities')
curiositiesElement.textContent = pageDetails.curiosities

const fertilizationElement = document.querySelector('#fertilization')
fertilizationElement.textContent = pageDetails.fertilization

const environmentElement = document.querySelector("#environment")
environmentElement.textContent = pageDetails.environment

const lightingElement = document.querySelector ("#lighting")
lightingElement.textContent = pageDetails.lighting

const hydrationElement = document.querySelector("#hydration")
hydrationElement.textContent = pageDetails.hydration

const growingSeasonElement = document.querySelector("#growing-season")
growingSeasonElement.textContent = pageDetails.growingSeason

const imageElement = document.querySelector("#details-image img")
imageElement.src = pageDetails.image

const editButtonElement = document.querySelector('#edit-button')
editButtonElement.href = `form.html?id=${id}`