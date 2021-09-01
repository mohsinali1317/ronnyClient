const contentBoxes = document.querySelectorAll('.timeline');

contentBoxes.forEach(contentBox => {
  const items = contentBox.querySelectorAll('.timeline__section');

  items.forEach(item => {
    const button = item.querySelector('.timeline__read-more');
    const buttonText = item.querySelector('.timeline__read-more--text');
    const body = item.querySelector('.timeline__hidden-body');

    button.addEventListener('click', (e) => {
      body.classList.toggle('is-open');

      e.preventDefault();
      history.pushState('', document.title, window.location.pathname);

      if (body.classList.contains('is-open')) {
        buttonText.innerHTML = 'read less...';
      } else {
        buttonText.innerHTML = 'read more...';
        body.classList.remove('is-open');
      }
    });
  });
});
