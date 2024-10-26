const urlParams = new URLSearchParams(location.search)
const id = urlParams.get('id')
const editedPlant = plantDetails.find(plant => plant.id === id)

if (id) {
    const form = document.querySelector('form')
    const idInput = document.createElement('input')
    idInput.type = 'hidden'
    idInput.name = 'id'
    idInput.value = id
    form.appendChild(idInput)

}

if (editedPlant) {
    const plantName = document.querySelector('[name="plant-name"]')
    plantName.value = editedPlant.name

    const scientificName  = document.querySelector('[name="scientific-name"]')
    scientificName.value = editedPlant.scientificName
    
    const origin = document.querySelector('[name="origin"]')
    origin.value = editedPlant.origin
    
    const curiosities = document.querySelector('[name="curiosities"]')
    curiosities.value = editedPlant.curiosities
    
    const fertilization = document.querySelector('[name="fertilization"]')
    fertilization.value = editedPlant.fertilization
    
    const environmentPreference = document.querySelector('[name="environment-preference"]')
    environmentPreference.value = editedPlant.environment
    
    const lighting = document.querySelector('[name="lighting"]')
    lighting.value = editedPlant.lighting
    
    const hydration = document.querySelector('[name="hydration"]')
    hydration.value = editedPlant.hydration
    
    const growingSeason = document.querySelector('[name="growing-season"]')
    growingSeason.value = editedPlant.growingSeason
}


const imageInput = document.querySelector('input[name="image"]');
imageInput.onchange = (event) => {
  const file = event.target.files[0];

  if (file.size > 1000000) {
    alert("File is too big!");
    event.target.value = "";
    return;
  }

  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    localStorage.setItem('loadedImage', reader.result)
  };
  reader.onerror = function (error) {
    console.error("Error: ", error);
  };
};
