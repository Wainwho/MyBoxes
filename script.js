const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

prevButton.addEventListener('click', () => {
    slider.scrollBy({ left: -200, behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
    slider.scrollBy({ left: 200, behavior: 'smooth' });
});