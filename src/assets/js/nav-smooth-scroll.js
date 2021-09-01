const navigationLink = document.querySelectorAll('.navigation__list--link[href^="#"]');
const burgerMenu = document.querySelector('.navigation__burger-menu');
const navbar = document.querySelector('.navigation__navbar');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const nav = document.querySelector('#navigation');

navigationLink.forEach((trigger) => {
  trigger.onclick = function (e) {
    e.preventDefault();

    let hash = this.getAttribute('href');
    let target = document.querySelector(hash);
    let elementPosition = target.offsetTop;
    let offsetPosition = elementPosition;

    burgerMenu.classList.remove('navigation__burger-menu--opened');
    navbar.classList.remove('navigation__navbar--opened');
    overlay.classList.remove('overlay__opened');
    body.classList.remove('hidden-scrollbar');

    window.scrollTo({
      top: offsetPosition - nav.offsetHeight,
      behavior: 'smooth',
      alignToTop: true,
    });
  };
});
