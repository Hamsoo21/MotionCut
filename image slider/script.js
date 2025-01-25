// JavaScript for Image Slider

const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentSlide = 0;

function showSlide(index) {
  // Ensure index wraps around
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  // Update slider's transform to show the current slide
  document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 100}%)`;

  // Add "active" class to the current slide
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlide);
  });
}

// Button Click Handlers
nextButton.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

prevButton.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

// Initialize the slider
showSlide(currentSlide);
