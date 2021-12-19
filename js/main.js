console.log('CONNECTED')
let sliderImages = document.querySelectorAll('.slide');
let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');
let current_img = 0

// This function will clear all images
function reset(){
    for(let i = 0; i< sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}


// This fuction will start the slider
function startSlide(){
    reset(); //First clears all images 
    sliderImages[0].style.display = 'block';
}

function slideLeft() {
    reset();
    sliderImages[current_img - 1].style.display = 'block';
    current_img--;
}

function slideRight() {
    reset();
    sliderImages[current_img + 1].style.display = 'block';
    current_img++;
}


leftArrow.addEventListener('click', function(){
    if(current_img === 0){
        current_img = sliderImages.length;
    }
    slideLeft();
})

rightArrow.addEventListener('click', function(){
    if (current_img === sliderImages.length){
        current_img = -1;
    }
    slideRight();
})

startSlide();
