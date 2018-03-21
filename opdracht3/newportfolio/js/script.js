//Dropdown item 1//

var body = document.querySelector('section.opdracht');
var button = document.querySelector('div.itemwerk');
var closeButton = document.querySelector('.back');
var openContact = document.querySelector('.contact');

function open() {
    body.classList.toggle('hidden');
    openContact.classList.toggle('contactOpen');
    
    
}

function close() {
    body.classList.toggle('hidden');    
    openContact.classList.toggle('contactOpen');
}


button.addEventListener('click', open);
closeButton.addEventListener('click', close);


//Dropdown item 2//

var body2 = document.querySelector('section.opdracht2');
var button2 = document.querySelector('div.itemwerk:nth-of-type(2)');
var closeButton2 = document.querySelector('.back2');

function open2() {
    body2.classList.toggle('hidden');
    openContact.classList.toggle('contactOpen');
    
}

function close2() {
    body2.classList.toggle('hidden');    
    openContact.classList.toggle('contactOpen');
}



button2.addEventListener('click', open2);
closeButton2.addEventListener('click', close2);


//Dropdown item 3//

var body3 = document.querySelector('section.opdracht3');
var button3 = document.querySelector('div.itemwerk:nth-of-type(3)');
var closeButton3 = document.querySelector('.back3');

function open3() {
    body3.classList.toggle('hidden');
    openContact.classList.toggle('contactOpen');
    
}

function close3() {
    body3.classList.toggle('hidden');    
    openContact.classList.toggle('contactOpen');
}



button3.addEventListener('click', open3);
closeButton3.addEventListener('click', close3);


//Dropdown item 4//

var body4 = document.querySelector('section.opdracht4');
var button4 = document.querySelector('div.itemwerk:nth-of-type(4)');
var closeButton4 = document.querySelector('.back4');

function open4() {
    body4.classList.toggle('hidden');
    openContact.classList.toggle('contactOpen');
    
}

function close4() {
    body4.classList.toggle('hidden');    
    openContact.classList.toggle('contactOpen');
}



button4.addEventListener('click', open4);
closeButton4.addEventListener('click', close4);