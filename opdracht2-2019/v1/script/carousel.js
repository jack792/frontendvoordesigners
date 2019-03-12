// const carouselSlide = document.querySelector('.carousel-slide');
// const carouselImages = document.querySelectorAll('.carousel-slide img');

// //Buttons
// const prevBtn = document.querySelector('button:nth-of-type(1)');
// const nextBtn = document.querySelector('button:nth-of-type(2)');


// //Counter
//  let counter = 1;

//  const size = carouselImages[0].clientWidth;

//  carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
 

//  //Buttons listeners

//  nextBtn.addEventListener('click',()=>{
//      if (counter <=0) return; 
//       carouselSlide.style.transition = "transform 0.4s ease-in-out";
//       counter++;
//       carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
//       console.log(counter);
//  });

//  prevBtn.addEventListener('click',()=>{
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter--;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
//     console.log(counter);
// });


// carouselSlide.addEventListener('transitionend', ()=>{
//     if (carouselImages[counter].id === 'lastClone') {
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length - 2;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
//     }
//     if (carouselImages[counter].id === 'firstClone') {
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length - counter;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
//     }
// });






const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('button:nth-of-type(1)');
const nextBtn = document.querySelector('button:nth-of-type(2)');


//Counter
 let counter = 1;

 const size = carouselImages[0].clientWidth;

 carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
 

 //Buttons listeners


 function next(){
    if (counter <=0) return; 
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    console.log(counter);
    nextBtn.classList.toggle('buttonAnimation');
};

function prev(){
    if (counter <=0) return; 
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    console.log(counter);
    prevBtn.classList.toggle('buttonAnimation');
};


function loop() {
    if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
}

function prevKey(key) {
    if (key.keyCode == "37") {
        
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
        console.log(counter);
        prevBtn.classList.toggle('buttonAnimation');
    }
}

function nextKey(key) {
    if (key.keyCode == "39") {
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
        console.log(counter);
        nextBtn.classList.toggle('buttonAnimation');
    }
}





nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);
window.addEventListener('transitionend', loop);
window.addEventListener('keydown', prevKey, false);
window.addEventListener('keydown', nextKey, false);