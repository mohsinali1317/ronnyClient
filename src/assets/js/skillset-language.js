const skill = document.querySelectorAll('.skillset__element');

skill.forEach((element, key) => {
  element.addEventListener('click', function (e) {
    element.classList.toggle('skillset__element--active');

    e.preventDefault();
    history.pushState('', document.title, window.location.pathname);

    skill.forEach(function(language, other) {
      if(key !== other) {
        language.classList.remove('skillset__element--active');
      }
    });
  });
});
