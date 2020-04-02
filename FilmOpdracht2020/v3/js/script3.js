
const app = document.getElementById('root');
const carouselInfo = document.getElementById('carouselInfo');
// const carousel = document.createElement('div');
// carousel.setAttribute('class', 'carousel');

// app.appendChild(carousel);

// const infoCard = document.createElement('div');
// infoCard.setAttribute('class', 'infoCard');

// carouselInfo.appendChild(infoCard);


var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);

var image = document.querySelector('img');
// var cover = document.querySelector('div');
var title = document.querySelector('h2');
var genre = document.querySelector('h3');
var date = document.querySelector('p');
var actor = document.querySelector('p');
var description = document.querySelector('p');
var button = document.querySelector('button');

request.responseType = 'json';
request.send();

request.onload = function () {
    var variousMovies = request.response;
    console.log(request.response);
    // populateHeader(variousMovies);
    showMovies(variousMovies);
    showCarouselMovies(variousMovies)
    console.log(variousMovies[3].plot)
};

const showCarouselMovies = (jsonObj) => {
    console.log("jsonObj", jsonObj)
    jsonObj.map(movie => {
        const markup = 
        `
            <div class="card">
                <img class="cover"></img>
            </div>
        
        `
        document.getElementById("carousel").insertAdjacentHTML("beforeend", markup)
    })
}

const showMovies = (jsonObj) => {
    jsonObj.map(movie => {
       const markup =
            `
            <div class="infoCard">
                <h1 class="title">${movie.title}</h1>
                <p class="genre">${movie.genres}</p>
                <p class="directors">${movie.directors[0].name}</p>
                <p class="actors">${movie.actors[0].actor_name} ${movie.actors[1].actor_name}</p>
                <p class="description">${movie.plot}</p>
            </div>
        `
        document.getElementById("carouselInfo").insertAdjacentHTML("beforeend", markup)
    })
}

// document.getElementById("clickTitle").addEventListener('click', piemel)
// const piemel = () => {
//     alert('you clicked the piemel')
// }

// function showMovies(jsonObj) {
//     jsonObj.map(movie => {

//     }
// }
    // )


    // for (var obj of jsonObj) { //ipv van for loop
    //     console.log(obj);
    //     var card = document.createElement('div');
    //     card.setAttribute('class', 'card');
        
    //     var subcard = document.createElement('div');
    //     subcard.setAttribute('class', 'subcard');
    //     // subcard.setAttribute('class', 'down');


    //     var img = document.createElement('img');
    //     img.setAttribute('class', 'cover');
    //     img.src = obj.cover;

    //     var cover = document.createElement('div');
    //     cover.setAttribute('class', 'cover');

    //     var infoCard = document.createElement('div');
    //     infoCard.setAttribute('class', 'infoCard');
        
    //     var title = document.createElement('h2');
    //     title.textContent = '' + obj.title;
    //     title.setAttribute('class', 'title');

    //     var button = document.createElement('button');
    //     button.setAttribute('class', 'button');
    //     button.textContent = 'FILM KOPEN';
    
    
    //     var description = document.createElement('p');
    //     description.textContent = '' + obj.plot;
    //     description.setAttribute('class', 'description');
    //     console.log(obj.plot);
        
        
    //     var genres = document.createElement('h3');
    //     genres.setAttribute('class', 'genre');
    //     genres.textContent = obj.genres;
    //     genres.querySelector('h3');
        
    //     var date = document.createElement('p');
    //     date.textContent = '' + obj.release_date;
    //     date.querySelector('date');
    //     date.setAttribute('class', 'release');
    //     console.log(obj.release_date);

    //     // var button = document.createElement('img');
    //     // button.src = 'images/Arrow.svg';
    //     // button.setAttribute('class', 'button2');

        
    //     var actor = document.createElement('p');
    //     //console.log("ACTORS ",movie.actors)

    //     // var infoCard = document.createElement('div');
    //     // infoCard.setAttribute('class', 'infoCard');


    //     carousel.appendChild(card);
    //     // card.appendChild(img);
    //     card.appendChild(cover);
    //     card.appendChild(button);
    //     carousel.appendChild(subcard);
    //     card.appendChild(subcard);
    //     // card.appendChild(infoCard);
    //     // card.appendChild(p);
    //     // subcard.appendChild(title);
    //     // subcard.appendChild(genres);
    //     // subcard.appendChild(date);
    //     // subcard.appendChild(description);
    //     // subcard.appendChild(actor);
    //     carouselInfo.appendChild(infoCard);
    //     // infoCard.appendChild(cover);
    //     infoCard.appendChild(title);
    //     infoCard.appendChild(button);
    //     infoCard.appendChild(genres);
    //     infoCard.appendChild(date);
    //     infoCard.appendChild(description);
    //     infoCard.appendChild(actor);


    //     function test() {
    //         infoCard.classList.toggle('down');
    //     }

    //     card.addEventListener('click', test());

    // }

// }




