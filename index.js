const slideDiv = document.querySelector('.slide-holder');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');
let currentImg = 0;

const oneImg = document.querySelector('.one');
const twoImg = document.querySelector('.two');
const threeImg = document.querySelector('.three');
const fourImg = document.querySelector('.four');
const fiveImg = document.querySelector('.five');

const oneDot = document.querySelector('.one-dot');
const twoDot = document.querySelector('.two-dot');
const threeDot = document.querySelector('.three-dot');
const fourDot = document.querySelector('.four-dot');
const fiveDot = document.querySelector('.five-dot');

const imgArr = [oneImg, twoImg, threeImg, fourImg, fiveImg];
const dotArr = [oneDot, twoDot, threeDot, fourDot, fiveDot];

const slideTimeout = setInterval(advanceSlide, 2000);

for (let i = 0; i < dotArr.length; i++) {
    dotArr[i].addEventListener ('click', () => {
        imgArr[currentImg].classList.toggle('visible');
        imgArr[i].classList.toggle('visible');
        dotArr[currentImg].classList.toggle('dot-selected');
        dotArr[i].classList.toggle('dot-selected');
        currentImg = i;
    })
}

nextBtn.addEventListener('click', () => {
    advanceSlide();
})

previousBtn.addEventListener('click', () => {
    notAdvanceSlide();
})

function advanceSlide() {
    if (currentImg < 4) {
        imgArr[currentImg].classList.toggle('visible');
        imgArr[currentImg + 1].classList.toggle('visible');
        dotArr[currentImg].classList.toggle('dot-selected');
        dotArr[currentImg + 1].classList.toggle('dot-selected');
        currentImg++;
    } else if (currentImg == 4) {
        imgArr[currentImg].classList.toggle('visible');
        imgArr[0].classList.toggle('visible');
        dotArr[currentImg].classList.toggle('dot-selected');
        dotArr[0].classList.toggle('dot-selected');
        currentImg++;
    } else {
        currentImg = 0;
        advanceSlide();
    }
}

function notAdvanceSlide() {
    if (currentImg == 0) {
        imgArr[currentImg].classList.toggle('visible');
        imgArr[4].classList.toggle('visible');
        dotArr[currentImg].classList.toggle('dot-selected');
        dotArr[4].classList.toggle('dot-selected');
        currentImg--;
    } else if (currentImg <= 4 && currentImg > 0) {
        imgArr[currentImg].classList.toggle('visible');
        imgArr[currentImg - 1].classList.toggle('visible');
        dotArr[currentImg].classList.toggle('dot-selected');
        dotArr[currentImg - 1].classList.toggle('dot-selected');
        currentImg--;
    } else {
        currentImg = 4;
        notAdvanceSlide();
    }
}