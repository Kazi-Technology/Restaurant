// Slide Menu

const carouSlide = document.querySelector('.slide');
const widthImage = 100;
const images = document.querySelectorAll('.slide-item');
let ctr = 0;
let ctrCloneImage = 0;

function changeCarousel(){

    carouSlide.style.transform = `translateX(-${widthImage * ctr}%)`;
    ctr++;

    if(ctr > images.length){
        const cloneImage = images[ctrCloneImage].cloneNode(true);
        carouSlide.appendChild(cloneImage);

        ctrCloneImage++;
        if(ctrCloneImage >= images.length){
            ctrCloneImage = 0;
        }
    }
}