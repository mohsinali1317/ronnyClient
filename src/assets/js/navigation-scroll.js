const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.navigation__list--link');

window.onscroll = function () {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 5) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('navigation__list--active');
  });

  current = current !== '' ? current : 'intro';

  document.querySelector(`.navigation a[href*=${current}]`).classList.add('navigation__list--active');
};
