const hoursDisplay = new Date().getHours();
const background = document.querySelectorAll('.intro__bg');

background.forEach((item) => {
  if (hoursDisplay >= 0 && hoursDisplay < 3) {
    item.classList.add('intro__bg--night');
  } else if (hoursDisplay >= 3 && hoursDisplay < 7) {
    item.classList.add('intro__bg--early-morning');
  } else if (hoursDisplay >= 7 && hoursDisplay < 12) {
    item.classList.add('intro__bg--morning');
  } else if (hoursDisplay >= 12 && hoursDisplay < 14) {
    item.classList.add('intro__bg--lunch');
  } else if (hoursDisplay >= 14 && hoursDisplay < 18) {
    item.classList.add('intro__bg--afternoon');
  } else if (hoursDisplay >= 18 && hoursDisplay < 20) {
    item.classList.add('intro__bg--evening');
  } else if (hoursDisplay >= 20 && hoursDisplay < 22) {
    item.classList.add('intro__bg--dinner');
  } else if (hoursDisplay >= 22 && hoursDisplay < 24) {
    item.classList.add('intro__bg--late-evening');
  }
});
