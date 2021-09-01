const hoursDisplay = new Date().getHours();
const introMessage = document.querySelectorAll('.intro__message');

introMessage.forEach((item) => {
  if (hoursDisplay >= 0 && hoursDisplay < 3) {
    item.innerHTML = 'night owl, ';
  } else if (hoursDisplay >= 3 && hoursDisplay < 7) {
    item.innerHTML = 'early bird, ';
  } else if (hoursDisplay >= 7 && hoursDisplay < 12) {
    item.innerHTML = 'commuters, ';
  } else if (hoursDisplay >= 12 && hoursDisplay < 14) {
    item.innerHTML = 'foodie, ';
  } else if (hoursDisplay >= 14 && hoursDisplay < 18) {
    item.innerHTML = 'youtubers, ';
  } else if (hoursDisplay >= 18 && hoursDisplay < 20) {
    item.innerHTML = 'fitness enthusiasts, ';
  } else if (hoursDisplay >= 20 && hoursDisplay < 22) {
    item.innerHTML = 'chef, ';
  } else if (hoursDisplay >= 22 && hoursDisplay < 24) {
    item.innerHTML = 'late stumbler, ';
  }
});
