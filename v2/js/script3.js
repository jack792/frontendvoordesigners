
const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);


var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);

var description = document.querySelector('p');
var image = document.querySelector('img');
var genre = document.querySelector('h3');
var date = document.querySelector('p');
var actor = document.querySelector('p');

request.responseType = 'json';
request.send();

request.onload = function () {
    var variousMovies = request.response;
    // populateHeader(variousMovies);
    showMovies(variousMovies);
};


function showMovies(jsonObj) {
    // console.log(jsonObj);

    for (var obj of jsonObj) { //ipv van for loop
        
        var card = document.createElement('div');
        card.setAttribute('class', 'card');
        
        // var subcard = document.createElement('div');
        // subcard.setAttribute('class', 'subcard');
    
        var img = document.createElement('img');
        img.setAttribute('class', 'cover');
        img.src = obj.cover;

        var button = document.createElement('button');
        button.setAttribute('class', 'button');
        button.querySelector('button');
        button.textContent = 'MORE INFO';
    
    
        var p = document.createElement('p');
        p.textContent = '' + obj.simple_plot;
        p.setAttribute('class', 'description');
        console.log(obj.simple_plot);
        
        
        var genres = document.createElement('h3');
        genres.textContent = 'Genre: ' + obj.genres;
        genres.querySelector('h3');
        genres.getElementsByClassName('genres');
        
        var date = document.createElement('p');
        date.textContent = 'Release date: ' + obj.release_date;
        date.querySelector('date');
        console.log(obj.release_date);
        
        var actor = document.createElement('p');
        //console.log("ACTORS ",movie.actors)

    }

    container.appendChild(card);
        card.appendChild(img);
        // container.appendChild(subcard);
        // card.appendChild(subcard);
        card.appendChild(p);
        // subcard.appendChild(genres);
        // subcard.appendChild(date);
        // subcard.appendChild(actor);
        // card.appendChild(button); 

}