/* ++++++++++++
Image Carousel
++++ ++++++++++*/

const arrows = document.querySelectorAll('.arrow');
const slideImages = document.querySelectorAll('.hero-section__left__slides')
const slideInfos = document.querySelectorAll('.hero-section__right__slides')

const slideImageCount = slideImages.length - 1;
let slideIndex = slideImageCount;

const slideObject = {
 next: '',
 current: ''
};

function slide(e) {
 let n = Number(e.currentTarget.dataset.slide);
 if (n > 0) {
  slideObject.current = "moveLeftCurrentSlide"
  slideObject.next = "moveLeftNextSlide"
 } else {
  slideObject.current = "moveRightCurrentSlide"
  slideObject.next = "moveRightPrevSlide"
 }
 slideImage(slideIndex + n)
}

function slideImage(n) {
 let currentImage = slideImages[slideIndex];
 let nextImage = slideImages[n];
 let currentInfo = slideInfos[slideIndex];
 let nextInfo = slideInfos[n];
 slideIndex = n;

 if (n > slideImageCount) {
  nextImage = slideImages[0];
  currentImage = slideImages[slideImageCount] 
  nextInfo = slideInfos[0];
  currentInfo = slideInfos[slideImageCount] 
  slideIndex = 0;
 }
 if (n < 0) {
  nextImage = slideImages[slideImageCount];
  currentImage = slideImages[0] 
  nextInfo= slideInfos[slideImageCount];
  currentInfo= slideInfos[0] 
  slideIndex = slideImageCount;
 }
 
 slideImages.forEach((slide, i) => {
  slide.className = `hero-section__left__slides slide-${i}`;
  slide.style.opacity = 0;
 })

 slideInfos.forEach((slide, i) => {
  slide.className = `hero-section__right__slides`;
  slide.style.opacity = 0;
 })

 currentImage.classList.add(slideObject.current)
 nextImage.classList.add(slideObject.next)
 currentInfo.classList.add(slideObject.current)
 nextInfo.classList.add(slideObject.next)
 nextImage.style.opacity = 1;
 nextInfo.style.opacity = 1;
}

arrows.forEach(arrow => arrow.addEventListener('click', slide))

/* ++++++++++++
Toggle nav mobile
++++ ++++++++++*/

const container = document.querySelector('.container');
const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.nav');

function toggleMenu() {
 menu.classList.toggle('toggle-nav');
 burgerMenu.classList.toggle('toggle-menu');
 container.classList.toggle('overlay');
 console.log("helo men")
}

burgerMenu.addEventListener('click', toggleMenu);