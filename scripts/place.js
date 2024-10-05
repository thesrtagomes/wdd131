const today = new Date()

const currentYearElement = document.getElementById("currentyear")
currentYearElement.innerHTML = today.getFullYear()

const lastUpdatedElement = document.getElementById("lastupdated")
lastUpdatedElement.innerHTML = document.lastModified


const temperatureLabel = document.querySelector("#temperature-label")
const conditionsLabel = document.querySelector("#conditions-label")
const windLabel =  document.querySelector("#wind-label")
const windChillLabel = document.querySelector("#wind-chill-label")


const calculateWindChill = (temperature, windSpeed) => {
    return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
}

const temperature = 5
const windSpeed = 6

if (temperature <= 10 && windSpeed > 4.8) {
    windChillLabel.innerHTML = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
}
else {
    windChillLabel.innerHTML = "N/A"
}

temperatureLabel.innerHTML = temperature + " °C";
conditionsLabel.innerHTML = "Sunny";
windLabel.innerHTML = windSpeed + " km/h";

