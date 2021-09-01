let Filtering = Array.from(document.querySelectorAll('.skillset__filter--btn'));

const handleClick = (e) => {
  e.preventDefault();

  const active = document.querySelector('.skillset__filter--btn-active');

  if(active) {
    active.classList.remove('skillset__filter--btn-active');
  }
    
  e.currentTarget.classList.add('skillset__filter--btn-active');
}

Filtering.forEach(filter => {
  filter.addEventListener('click', handleClick);

  filter.addEventListener('click', function() {
    let selectedFilter = filter.getAttribute('data-filter');
    let itemsToHide = document.querySelectorAll(`.skillset__grid .skillset__element:not([data-filter='${selectedFilter}'])`);
    let itemsToShow = document.querySelectorAll(`.skillset__grid [data-filter='${selectedFilter}']`);

    if (selectedFilter == 'all') {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll('.skillset__grid [data-filter]');
    }

    itemsToHide.forEach(el => {
      el.classList.add('skillset__element--hide');
      el.classList.remove('skillset__element--show');
    });

    itemsToShow.forEach(el => {
      el.classList.remove('skillset__element--hide');
      el.classList.add('skillset__element--show'); 
    });
  });
});
