// Header
function toggleNavBar(){
    const navigation = document.querySelector('#navigation')
    navigation.classList.toggle('show')
    hamburgerMenu.classList.toggle('show')
}

const hamburgerMenu = document.querySelector('#hamburger-menu')
hamburgerMenu.addEventListener('click', toggleNavBar)

// footer
const today = new Date()

const currentYearElement = document.getElementById("currentyear")
currentYearElement.innerHTML = today.getFullYear()

const lastUpdatedElement = document.getElementById("lastupdated")
lastUpdatedElement.innerHTML = document.lastModified