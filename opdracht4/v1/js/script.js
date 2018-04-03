const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

const subcontainer = document.createElement('div');
subcontainer.setAttribute('class', subcontainer);


app.appendChild(container);
app.appendChild(subcontainer);


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
        img.src = movie.cover;
    
        const button = document.createElement('button');
        button.setAttribute('class', 'button');
        
            
        const p = document.createElement('p');
        p.textContent = movie.plot;
        
    

    
        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
        card.appendChild(img);
        card.appendChild(button);
    


        console.log(movie.title);
        console.log(movie.plot);


    });
}

request.send();


var button = document.querySelector('button');
var description = document.querySelector('p');

function down() {
    description.classList.toggle('down');
    
}

button.addEventListener('click', down);


