const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(container);


var request = new XMLHttpRequest();

var title = document.querySelector('h1');
var description = document.querySelector('p');
var image = document.querySelector('img');

request.open('GET', 'http://dennistel.nl/movies', true);
request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    data.forEach(movie => {

        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        
        const h1 = document.createElement('h1');
        h1.textContent = movie.title;
                
        const img = document.createElement('img');
        img.src = 'http://ia.media-imdb.com/images/M/MV5BNTQ3OTkwNTgyN15BMl5BanBnXkFtZTcwNTAzOTAzOQ@@._V1_SX214_.jpg';
    
        const button = document.createElement('button');
        button.setAttribute('class', 'button');
        
        const subcart = document.createElement('div');
        subcart.setAttribute('class', 'subcard');
        
        const p = document.createElement('p');
        p.textContent = movie.plot;
        
       
        
        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(img);
        card.appendChild(button);
        subcart.appendChild(p);
      



        console.log(movie.title);
        console.log(movie.plot);


    });
}

request.send();





var harmonica = document.getElementsByClassName("harmonica");

for (var i = 0; i < harmonica.length; i++) {
    harmonica[i].onclick = function () {
        
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            //harmonica is nu open, dicht maar!
            content.style.maxHeight = null;

        } else {
            //harmonica is dicht, openen!
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}