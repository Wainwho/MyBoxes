const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

prevButton.addEventListener('click', () => {
    slider.scrollBy({ left: -200, behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
    slider.scrollBy({ left: 200, behavior: 'smooth' });
});

/* aboutus */

document.addEventListener('DOMContentLoaded', () => {
    const creators = document.querySelectorAll('.creator');

    creators.forEach((creator, index) => {
        creator.querySelector('.creator-image').src = `images/creator${index + 1}.jpg`;
    });

    console.log('Images set for all creators.');
});

/* wait abt*/

document.addEventListener('DOMContentLoaded', () => {
    const creators = document.querySelectorAll('.creator');

    creators.forEach((creator, index) => {
        creator.querySelector('.creator-image').src = `images/creator${index + 1}.jpg`;
    });

    const companyInfo = document.querySelector('.company-info');
    companyInfo.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    companyInfo.style.opacity = '0';
    companyInfo.style.transform = 'translateY(20px)';

    window.addEventListener('scroll', () => {
        const companyInfoTop = companyInfo.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (companyInfoTop < windowHeight - 100) {
            companyInfo.style.opacity = '1';
            companyInfo.style.transform = 'translateY(0)';
        }
    });

    console.log('Scripts initialized.');
});
