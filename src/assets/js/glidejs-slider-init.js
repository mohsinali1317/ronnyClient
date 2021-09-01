import Glide, { Controls } from '@glidejs/glide/dist/glide.modular.esm';

new Glide('.testimonials__carousel').mount({ Controls });

const educationBG = document.querySelector('.education-slider');
const numberOfSlides = document.querySelector('.glide__slides').childNodes.length;
let currentSlide = 0;

var educationSlider = new Glide('.education-slider__carousel', {  
  type: 'carousel',
  perView: 1
});

const slideColours = ['#eb62a8', '#4c9373', '#4c9373', '#4cbbea'];

educationSlider.on(['swipe.end', 'run'], function (e) {
  switch (e.direction) {
    case '=':
    currentSlide = e.steps;
      break;
    case '>':
    if (currentSlide + 1 < numberOfSlides) currentSlide++;
    else currentSlide = 0;
      break;
    case '<':
    if (currentSlide - 1 > 0) currentSlide--;
    else currentSlide = 0;
      break;
  }

  educationBG.style.backgroundColor = slideColours[currentSlide];
});

educationSlider.on('build.after', function () {
  glideHandleHeight();
});

educationSlider.on('run.after', function () {
  glideHandleHeight();
});

educationSlider.mount({ Controls });

function glideHandleHeight() {
  const activeSlide = document.querySelector('.glide__slide--active');
  const activeSlideHeight = activeSlide ? activeSlide.offsetHeight : 0;

  const glideTrack = document.querySelector('.glide__track');
  const glideTrackHeight = glideTrack ? glideTrack.offsetHeight : 0;

  if (activeSlideHeight !== glideTrackHeight) {
    glideTrack.style.height = `${activeSlideHeight}px`;
  }
}
