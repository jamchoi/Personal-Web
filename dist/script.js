function modulo(number, mod) {
  let result = number % mod;
  if (result < 0) {
    result += mod;
  }
  return result;
}

function setUpCarousel(carousel) {
  function handleNext() {
    currentSlide = modulo(currentSlide + 1, numSlides);
    changeSlide(currentSlide);
  }

  function handlePrevious() {
    currentSlide = modulo(currentSlide - 1, numSlides);
    changeSlide(currentSlide);
  }

  function changeSlide(slideNumber) {
    carousel.style.setProperty('--current-slide', slideNumber);
  }

  const buttonNext = carousel.querySelector('[data-carousel-button-next]');
  const buttonPrevious = carousel.querySelector('[data-carousel-button-previous]');
  const slidesContainer = carousel.querySelector('[data-carousel-slides-container]');

  let currentSlide = 0;
  const numSlides = slidesContainer.children.length;

  buttonNext.addEventListener('click', handleNext);
  buttonPrevious.addEventListener('click', handlePrevious);
}

const carousels = document.querySelectorAll('[data-carousel]');
carousels.forEach(setUpCarousel);