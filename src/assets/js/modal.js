const modalTriggers = document.querySelectorAll('.projects__box--btn');
const modalCloseTrigger = document.querySelector('.modal__close');
const bodyBlackout = document.querySelector('.modal__overlay');
const body = document.querySelector('body');

modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    const { popupTrigger } = trigger.dataset;
    const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`);
    popupModal.classList.add('is-open');
    bodyBlackout.classList.add('is-visible');
    body.classList.add('hidden-scrollbar');

    e.preventDefault();
    history.pushState('', document.title, window.location.pathname);
    
    popupModal.querySelector('.modal__close').addEventListener('click', () => {
      popupModal.classList.remove('is-open');
      bodyBlackout.classList.remove('is-visible');
      body.classList.remove('hidden-scrollbar');
    })

    bodyBlackout.addEventListener('click', () => {
      popupModal.classList.remove('is-open');
      bodyBlackout.classList.remove('is-visible');
      body.classList.remove('hidden-scrollbar');
    })
  })
})
