const imagesElement = document.querySelector("#images")

plantDetails.forEach(plant => {
    const plantLink = document.createElement("a")
    const plantImage = document.createElement("img")

    plantLink.href = `details.html?id=${plant.id}`
    plantImage.src= plant.image
    plantImage.loading = "lazy"
    plantImage.alt = plant.name 
    
    plantLink.appendChild(plantImage)
    imagesElement.appendChild(plantLink)
})

