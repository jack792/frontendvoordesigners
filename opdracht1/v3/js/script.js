
var body = document.body;


var buttonBlauw = document.querySelector('section button:nth-of-type(1)')
var buttonLichtBlauw = document.querySelector('section button:nth-of-type(2)')
var buttonGroen = document.querySelector('section button:nth-of-type(3)')
var buttonGeel = document.querySelector('section button:nth-of-type(4)')
var buttonOranje = document.querySelector('section button:nth-of-type(5)')
var buttonRood = document.querySelector('section button:nth-of-type(6)')


function blue (){
    body.classList.toggle('blue');
    resultaten.classList.toggle('hidden');

}

function lightBlue (){
    body.classList.toggle('lightBlue');
    resultaten.classList.toggle('hidden');
    
}

function green () {
    body.classList.toggle('green');
    resultaten.classList.toggle('hidden');
}

function yellow () {
    body.classList.toggle('yellow');
    resultaten.classList.toggle('hidden');
}

function orange () {
    body.classList.toggle('orange');
    resultaten.classList.toggle('hidden');
}

function red () {
    body.classList.toggle('red');
    resultaten.classList.toggle('hidden');
}



buttonBlauw.addEventListener('click', blue);
buttonLichtBlauw.addEventListener('click', lightBlue);
buttonGroen.addEventListener('click', green);
buttonGeel.addEventListener('click', yellow);
buttonOranje.addEventListener('click', orange);
buttonRood.addEventListener('click', red);





/* button animation */

var fadeIn = document.querySelector('section button:nth-of-type(1)')
var fadeIn = document.querySelector('section button:nth-of-type(2)')
var fadeIn = document.querySelector('section button:nth-of-type(3)')
var fadeIn = document.querySelector('section button:nth-of-type(4)')
var fadeIn = document.querySelector('section button:nth-of-type(5)')
var fadeIn = document.querySelector('section button:nth-of-type(6)')


function bluebutton () {
    buttonBlauw.classList.toggle('buttonMove');
    
}
function lightbluebutton () {
    buttonLichtBlauw.classList.toggle('buttonMove');
}
function greenbutton() {
    buttonGroen.classList.toggle('buttonMove');
}
function yellowbutton() {
    buttonGeel.classList.toggle('buttonMove');
}
function orangebutton() {
    buttonOranje.classList.toggle('buttonMove');
}
function redbutton() {
    buttonRood.classList.toggle('buttonMove');
}



buttonBlauw.addEventListener('click', bluebutton);
buttonLichtBlauw.addEventListener('click', lightbluebutton);
buttonGroen.addEventListener('click', greenbutton);
buttonGeel.addEventListener('click', yellowbutton);
buttonOranje.addEventListener('click', orangebutton);
buttonRood.addEventListener('click', redbutton);