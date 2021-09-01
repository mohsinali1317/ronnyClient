const hoursDisplay = new Date().getHours();
const introImage = document.createElement('img');

if (hoursDisplay >= 0 && hoursDisplay < 3) {
  introImage.src = './assets/media/images/intro/blocks/night.png';
  introImage.alt = 'Image of two pillows';
  introImage.width = '1280';
  introImage.height = '1224';
} else if (hoursDisplay >= 3 && hoursDisplay < 7) {
  introImage.src = './assets/media/images/intro/blocks/early-morning.png';
  introImage.alt = 'Image of London skyline';
  introImage.width = '1279';
  introImage.height = '694';
} else if (hoursDisplay >= 7 && hoursDisplay < 12) {
  introImage.src = './assets/media/images/intro/blocks/morning.png';
  introImage.alt = 'Image of undeground station post';
  introImage.width = '1280';
  introImage.height = '1297';
} else if (hoursDisplay >= 12 && hoursDisplay < 14) {
  introImage.src = './assets/media/images/intro/blocks/lunch.png';
  introImage.alt = 'Image of table cloth and cutlery';
  introImage.width = '1022';
  introImage.height = '1232';
} else if (hoursDisplay >= 14 && hoursDisplay < 18) {
  introImage.src = './assets/media/images/intro/blocks/afternoon.png';
  introImage.alt = 'Image of headphones and mobile phone screen';
  introImage.width = '1280';
  introImage.height = '1280';
} else if (hoursDisplay >= 18 && hoursDisplay < 20) {
  introImage.src = './assets/media/images/intro/blocks/evening.png';
  introImage.alt = 'Image of sporting activities';
  introImage.width = '1280';
  introImage.height = '1122';
} else if (hoursDisplay >= 20 && hoursDisplay < 22) {
  introImage.src = './assets/media/images/intro/blocks/dinner.png';
  introImage.alt = 'Image of food basket';
  introImage.width = '1280';
  introImage.height = '770';
} else if (hoursDisplay >= 22 && hoursDisplay < 24) {
  introImage.src = './assets/media/images/intro/blocks/late-evening.png';
  introImage.alt = 'Image of laptop and tablet screen';
  introImage.width = '1280';
  introImage.height = '626';
}

const src = document.querySelector('.intro__left-column');
src.appendChild(introImage);
