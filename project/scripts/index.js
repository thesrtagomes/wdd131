const imagesElement = document.querySelector("#images")

defaultPlantDetails.forEach(plant => {
    if (!document.querySelector(`a[href="details.html?id=${plant.id}"]`)) {
        const plantLink = document.createElement("a")
        const plantImage = document.createElement("img")

        plantLink.href = `details.html?id=${plant.id}`
        plantImage.src= plant.image
        
        plantLink.appendChild(plantImage)
        imagesElement.appendChild(plantLink)
    }
})

