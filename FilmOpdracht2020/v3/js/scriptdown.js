
const app = document.getElementById('root');
const carouselInfo = document.getElementById('carouselInfo');

var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

var image = document.querySelector('img');
var cover = document.querySelector('div');
var title = document.querySelector('h2');
var genre = document.querySelector('h3');
var date = document.querySelector('p');
var actor = document.querySelector('p');
var description = document.querySelector('p');
var button = document.querySelector('button');

let movies = {};

request.responseType = 'json';
request.send();

request.onload = function () {
    var variousMovies = request.response;
    console.log(request.response);
    movies = request.response;
    // populateHeader(variousMovies);
    // showMovies(variousMovies);
    showCarouselMovies(variousMovies)
    console.log(variousMovies[3].plot)
};

const showCarouselMovies = (jsonObj) => {
    jsonObj.map(movie => {
        const markup =
            `
            <div class="card" data-id=${movie.id}>
                <img class="cover"></img>
            </div>
        `
        document.getElementById("carousel").insertAdjacentHTML("beforeend", markup)
    });

    addEventListener();
}

function addEventListener() {
    const cardButtons = document.querySelectorAll('.card');

    cardButtons.forEach(function (elem, index) {
        elem.addEventListener('click', () => {
            setData(elem.dataset.id);
        });
    });
};

function setData(id) {
    movies.forEach(function (movie, index) {
        i = index + 1;
        if (i === parseFloat(id)) {
            const markup =
            `<div class="infoCard" style="background-image: url(${movie.cover})">
                <h1 class="title">${movie.title}</h1>
                <p class="directors">Director ${movie.directors[0].name}</p>
                <p class="actors">Starring ${movie.actors[0].actor_name}, ${movie.actors[1].actor_name}, ${movie.actors[3].actor_name}</p>
                    <section class="infoDown">
                        <div class="buttonSectie">
                            <button class="button">
                                <h5>Buy € 9,99</h5>
                            </button>
                            <button class="button">
                                <h5>Rent € 4,99</h5>
                            </button>
                            <button class="button">
                                <h5>Add to favourite</h5>
                                <img src="./images/Heart-Black.png" alt="">
                            </button>
                        </div>
                        <div class="textSectie">
                            <p class="description">${movie.plot}</p>
                            <p class="genre">${movie.genres}</p>
                        </div>
                    </section>
            </div>
            <div class="backgroundImg"></div>
            `
            console.log(movie);
            document.getElementById("carouselInfo").innerHTML = markup;
        }
    });
};

const showMovies = (jsonObj) => {
    jsonObj.map(movie => {
       const markup =
        `
            <h1 class="title">${movie.title}</h1>
            <p class="genre">${movie.genres}</p>
            <p class="directors">${movie.directors[0].name}</p>
            <p class="actors">${movie.actors[0].actor_name} ${movie.actors[1].actor_name}</p>
            <p class="description">${movie.plot}</p>
        `
        // document.getElementById("carouselInfo").insertAdjacentHTML("beforeend", markup)
    })
}