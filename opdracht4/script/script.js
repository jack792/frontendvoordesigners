/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//Giacomo Galizia   
//klas Herkansing Ivoor
//Student nummer: 500723369
//Pokemon trainer: Pokemon tamagochi


//Bron playlist Pokemon muziek: https://www.youtube.com/watch?v=axKDCZd4Mfc&t=616s

//Playlist array om een soundtrack afspelen tijdens het game
var audio = new Audio(),
    i = 0;
var musicPlaylist = new Array('audio/Soundtrack1.mp3',
    'audio/Soundtrack2.mp3',
    'audio/Soundtrack3.mp3',
    'audio/Soundtrack4.mp3');

audio.addEventListener('ended', function () {
    i = ++i < musicPlaylist.length ? i : 0;
    audio.src = musicPlaylist[i];
    audio.play();
}, true);
audio.volume = 0.5;
audio.loop = false;
audio.src = musicPlaylist[i];
audio.play();
console.log(i)


//Verschillende tamagochi afbeeldingen die veranderen op basis van de behoefte van het pokemon zelfde.
//Bron Imges Array:
//Pikachu-happy: http://swfanon.wikia.com/wiki/File:Pikachu.png;
//Pikachu-training : http://fantendo.wikia.com/wiki/File:Pikachu_render_by_animesennin-d5e3qko.png;
//Pikachu-tired: https://mistranslationsforthemoderngamer.wordpress.com/2012/10/14/pokemon-its-a-mad-mad-mad-mad-world-part-2/;
//Raichu: http://pokemonfanon.wikia.com/wiki/File:Raichu.png; 

//Icon afbeeldingen
//Gameboy logo: https://commons.wikimedia.org/wiki/File:Nintendo_Game_Boy_Logo.svg;
//Training icon: https://www.flaticon.com/free-icon/fist_189013#term=pokemon&page=1&position=41;
//Potion icon: https://www.flaticon.com/free-icon/super-potion_188959#term=pokemon&page=1&position=89;

var imgPikachu = ['images/pikachu-happy.png',
                  'images/pikachu-training.png',
                  'images/pikachu-tired.png',
                 'images/raichu.png'];




var button = document.querySelector('li:nth-of-type(1)');
var buttonB = document.querySelector('li:nth-of-type(2)');
var section = document.querySelector('section');
var pika = document.getElementById('pika');


//Counter om tellen het aantal keer dat een button wordt geklikt
//Counter2 is om de levels van het pokemon te tellen
var count = 0;
var count2 = 0;

//Function Training
var training = function () {
    count++;
    console.log(count);
    text.textContent = 'Pikachu is training';
    //if, else statements om het array afbeelding van het pokemon te veranderen wanneer het counter een bepaald nummer bereikt
    if (count == 3) {
        text.textContent = 'Pikachu is tired';
        console.log(imgPikachu[2]);
        pika.src = imgPikachu[2];
        count2++;
        levelCounter.classList.add('counterLevel');
        levelCounter.textContent = 'Level' + count2;
        count = 0;
        console.log(count2);


        //        TIMER FUNCTION
        //        setTimeout(function () {
        //        pika.src = imgPikachu[1];
        //        }, 1000);


    } else {
        pika.src = imgPikachu[1];
        console.log(imgPikachu[1]);
    }
    
    if (count2 == 5) {
        count = 0;
        count2 = 0;
        pika.src = imgPikachu[3];
        text.textContent = 'Pikachu evolved in Raichu';

    }

}


//Function Herstel
var herstel = function () {
    pika.src = imgPikachu[0];
    console.log(imgPikachu[0]);
    text.textContent = 'Pikachu reloaded his power';

}

//Html elementen die een verschillende class krijgen door middel van een DOM MANIPULATIE 

var on = document.querySelector('div > div:nth-of-type(1)');
var switchContainer = document.querySelector('h1 + div');
var color = document.querySelector('main');
var body = document.querySelector('body');
var titel = document.querySelector('h1');
var levelCounter = document.querySelector('section > div');
var text = document.querySelector('h2');



//Function om de kleur van het game by te kunnen veranderen
function open() {
    on.classList.toggle('switchOn');
    color.classList.toggle('mainOn');
    body.classList.toggle('bodyOn');
    titel.classList.toggle('titelOn');
    switchContainer.classList.toggle('containerSwitchOn');


}

//Alle de eventlistener om function te triggeren

button.addEventListener('click', training);
buttonB.addEventListener('click', herstel);
on.addEventListener('click', open);
window.addEventListener('keydown', keyboardCommands, false);
window.addEventListener('keydown', keyboardCommandA, false);
window.addEventListener('keydown', keyboardCommandB, false);

//Keydown event switcher kleur gameboy
function keyboardCommands(key) {
    if (key.keyCode == "32") {
        on.classList.toggle('switchOn');
        color.classList.toggle('mainOn');
        body.classList.toggle('bodyOn');
        titel.classList.toggle('titelOn');
        switchContainer.classList.toggle('containerSwitchOn');
    }
}


//Keydown event trainen knop, Klick op A om de pokemon te trainen
function keyboardCommandA(key) {
    if (key.keyCode == "65") {
        count++;
        console.log(count);
        text.textContent = 'Pikachu is training';
        if (count == 3) {
            text.textContent = 'Pikachu is tired';
            console.log(imgPikachu[2]);
            pika.src = imgPikachu[2];
            count2++;
            levelCounter.classList.add('counterLevel');
            levelCounter.textContent = 'Level' + count2;
            count = 0;
            console.log(count2);
        } else {
            (count => 0);
            pika.src = imgPikachu[1];
            console.log(imgPikachu[1]);
        }
    } {
    if (count2 === 5) {
        pika.src = imgPikachu[3];
        text.textContent = 'Pikachu evolved in Raichu';
        levelCounter.textContent = 'Level' + count2;
        count = 0;
        count2 = 0;
        

    } 
     
}
}

//Keydown event herstel knop, Klick op B om de pokemon te herstellen
function keyboardCommandB(key) {
    if (key.keyCode == "66") {
        pika.src = imgPikachu[0];
        console.log(imgPikachu[0]);
        text.textContent = 'Pikachu reloaded his power';
    }
}



//Externe vak bronnen: 
//Jon Duckett: JAVASCRIPT & JQUERY

//Voor het gebruikt van counters: //https://www.codementor.io/jamesezechukwu/how-to-create-a-simple-counter-using-javascript-html-css-bxcjgbbxa

//Voor het gebruikt van keyboard events:
//https://www.youtube.com/watch?v=VBVOXTgXX2U

//Voor het gebruikt van background muziek:
//https://stackoverflow.com/questions/30289217/how-do-i-loop-through-a-javascript-array-of-audio-files