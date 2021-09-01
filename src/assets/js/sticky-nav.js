const nav = document.querySelector('#navigation');
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('navigation-sticky');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('navigation-sticky');
  }
}

window.addEventListener('scroll', fixNav);
