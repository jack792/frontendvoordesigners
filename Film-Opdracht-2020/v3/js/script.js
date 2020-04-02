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

request.open('GET', 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json', true);
request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    data.forEach(movie => {

        var card = document.createElement('div');
        card.setAttribute('class', 'card');
        
        var subcard = document.createElement('div');
        subcard.setAttribute('class', 'subcard');
    
        var img = document.createElement('img');
        img.src = movie.cover;

        var button = document.createElement('button');
        button.setAttribute('class', 'button');
        button.querySelector('button');
        button.textContent = 'MORE INFO';
    
    
        var p = document.createElement('p');
        p.textContent = '' + movie.simple_plot;
        p.setAttribute('class', 'description');
        
        
        var genres = document.createElement('h3');
        genres.textContent = 'Genre: ' + movie.genres;
        genres.querySelector('h3');
        genres.getElementsByClassName('genres');
        
        var date = document.createElement('p');
        date.textContent = 'Release date: ' + movie.release_date;
        date.querySelector('date');
        
        var actor = document.createElement('p');
        //console.log("ACTORS ",movie.actors)
        
        var myactors = "";
        var i;
        for (i = 0; i < movie.actors.length; i++) {
            myactors += movie.actors[i].actor_name + ", ";
            console.log("ACTORS " + movie.actors[i].actor_name)
        }
        actor.textContent = myactors;
        actor.setAttribute('class', 'actor');
        
        function down() {
//            h1.classList.toggle('titeldown');
            p.classList.toggle('down');
            img.classList.toggle('blurimage');
            img.classList.toggle('imgshadow');
            button.textContent = 'LESS INFO';
            date.classList.toggle('datedown');
            genres.classList.toggle('genredown');
            subcard.classList.toggle('subcarddown');

        }
        
//        function myFunction () {
//            var x = document.querySelector('button');
//            console.log(myFunction.innerHTML);
//            if (x.innerHTML === 'More Info')
//        {
//        
//        x.innerHTML = 'Less Info';
//        
//        } else {
//            x.innerHTML = 'More Info';
//        }
//        }
//        
        
        
        button.addEventListener('click', down);
    
    

        container.appendChild(card);
        card.appendChild(img);
        container.appendChild(subcard);
        card.appendChild(subcard);
        subcard.appendChild(p);
        subcard.appendChild(genres);
        subcard.appendChild(date);
        subcard.appendChild(actor);
        card.appendChild(button); 

        
    
        



        console.log(movie.title);
        console.log(movie.simple_plot);
        console.log(movie.genres);
        console.log(movie.release_date);
        console.log(movie.actors);
    


    });
}




//     var harmonica = document.querySelector('button');
//
//for (var i = 0; i < harmonica.length; i++) {
//    harmonica[i].onclick = function () {
//        
//        var content = this.nextElementSibling;
//        if (content.style.maxHeight) {
//            //harmonica is nu open, dicht maar!
//            contentontent.style.maxHeight = null;
//
//        } else {
//            //harmonica is dicht, openen!
//            content.style.maxHeight = content.scrollHeight + "px";
//        }
//    }
//}








