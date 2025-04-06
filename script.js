const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', function () {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');

    const filterValue = this.getAttribute('data-filter');

    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');

      if (filterValue === 'all' || cardCategory === filterValue) {
        card.style.display = 'block';
      } else { 
        card.style.display = 'none';
      }
    });
  });
});
