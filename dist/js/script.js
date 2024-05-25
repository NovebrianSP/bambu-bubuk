// Nav Ham
const ham = document.querySelector('#ham');
const nav = document.querySelector('#nav-menu');

ham.addEventListener('click', function () {
  ham.classList.toggle('ham-active');
  nav.classList.toggle('hidden');
});

// Fixed NavBar
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const top = document.querySelector('#top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    top.classList.remove('hidden');
    top.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    top.classList.remove('flex');
    top.classList.add('hidden');
  }
};

// Outside Ham
window.addEventListener('click', function(e){
  if(e.target !=ham && e.target != nav){
      ham.classList.remove('ham-active');
      nav.classList.add('hidden');
  }
})

// Carousel
document.addEventListener("DOMContentLoaded", function() {
  // Select elements
  const carousel = document.querySelector('#carousel');
  const carouselItems = carousel.querySelectorAll('.carousel-item');
  const prevButton = document.querySelector('#prevSlide');
  const nextButton = document.querySelector('#nextSlide');

  let currentSlide = 0;
  const visibleSlides = 3; // Number of slides to show at once
  const totalItems = carouselItems.length;

  function moveToSlide(index) {
    // Hide all slides
    carouselItems.forEach(item => item.classList.remove('active'));
    // Show the slides within the visible window
    for (let i = 0; i < visibleSlides; i++) {
      const slideIndex = (index + i) % totalItems;
      carouselItems[slideIndex].classList.add('active');
    }
    currentSlide = index;
  }

  prevButton.addEventListener('click', () => {
    const newSlide = (currentSlide - visibleSlides + totalItems) % totalItems;
    moveToSlide(newSlide);
  });

  nextButton.addEventListener('click', () => {
    const newSlide = (currentSlide + visibleSlides) % totalItems;
    moveToSlide(newSlide);
  });

  // Initial setup: Show the first 4 slides as active
  moveToSlide(currentSlide);
});