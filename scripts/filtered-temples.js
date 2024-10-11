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

// adding temple objects
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    }, 
    // temples added
    {
        templeName: "Porto Alegre Brazil",
      location: "Porto Alegre, RS, Brazil",
      dedicated: "2000, December, 17",
      area: 13325,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/porto-alegre-brazil-temple/porto-alegre-brazil-temple-6696.jpg"
    },
      {
        templeName: "Portland Oregon",
        location: "Portland, Oregon, United States",
        dedicated: "1989, August, 19-21",
        area:80500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/portland-oregon-temple/portland-oregon-temple-13535.jpg"
      },
      {
      templeName: "Santiago Chile",
      location: "Santiago, Chile",
      dedicated: "1983, September, 15-17",
      area: 20831,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/santiago-chile-temple/santiago-chile-temple-7564-thumb.jpg"
    }
  ];

function displayTemples(temples) {
    const container = document.querySelector('.album-container');
    container.innerHTML = '';

    temples.forEach(temple => {
        const figure = document.createElement('figure');    
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = 'lazy';

        const caption = document.createElement('figcaption');
        caption.innerHTML = `
             <strong>${temple.templeName}</strong><br>
            ${temple.location}<br>
            Dedicated: ${temple.dedicated}<br>
            Area: ${temple.area} sq ft
        `;
        figure.appendChild(img);
        figure.appendChild(caption);

        container.appendChild(figure);
    });
}
displayTemples(temples);

// adding filter

document.querySelector('#home').addEventListener('click', (event) => {
    event.preventDefault();
    displayTemples(temples);
});

document.querySelector('#old').addEventListener('click', (event) => {
    event.preventDefault();
    const oldTemples = temples.filter(temple => parseInt(temple.dedicated.split(", ")[0]) < 1900);
    displayTemples(oldTemples);
});

document.querySelector('#new').addEventListener('click', (event) => {
    event.preventDefault();
    const newTemples = temples.filter(temple => parseInt(temple.dedicated.split(", ")[0]) >= 2000);
    displayTemples(newTemples);
});

document.querySelector('#large').addEventListener('click', (event) => {
    event.preventDefault();
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
});

document.querySelector('#small').addEventListener('click', (event) => {
    event.preventDefault();
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
});
