const burgerMenu = document.querySelector('.navigation__burger-menu');
const navbar = document.querySelector('.navigation__navbar'); 
const overlay = document.querySelector('.overlay'); 
const body = document.querySelector('body'); 

burgerMenu.onclick = function() {
  burgerMenu.classList.toggle('navigation__burger-menu--opened');
  navbar.classList.toggle('navigation__navbar--opened');
  overlay.classList.toggle('overlay__opened');
  body.classList.toggle('hidden-scrollbar');
}

overlay.onclick = function() {
  burgerMenu.classList.remove('navigation__burger-menu--opened');
  navbar.classList.remove('navigation__navbar--opened');
  overlay.classList.remove('overlay__opened');
  body.classList.remove('hidden-scrollbar');
}
