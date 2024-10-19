const counter = document.querySelector("#counter");
const accessedTimes = localStorage.getItem("accessedTimes");
const newAccessedTimes = 1 + Number(accessedTimes);
localStorage.setItem("accessedTimes", newAccessedTimes);
counter.textContent = `Page accessed ${newAccessedTimes} time(s)!`;

// footer
const today = new Date();

const currentYearElement = document.getElementById("currentyear");
currentYearElement.innerHTML = today.getFullYear();

const lastUpdatedElement = document.getElementById("lastupdated");
lastUpdatedElement.innerHTML = document.lastModified;
