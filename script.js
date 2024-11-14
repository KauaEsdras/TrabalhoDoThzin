document.addEventListener('DOMContentLoaded', () => {
    const recipeCards = document.querySelectorAll('.recipe-card');
    
    recipeCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, 300 * index);
    });

    window.addEventListener('scroll', revealOnScroll);
    function revealOnScroll() {
        const revealElements = document.querySelectorAll('.recipe-card');
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight) {
                element.classList.add('reveal');
            } else {
                element.classList.remove('reveal');
            }
        });
    }
});

const images = document.querySelectorAll('.recipe-card img');
images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.classList.add('zoom-in');
    });

    image.addEventListener('mouseout', () => {
        image.classList.remove('zoom-in');
    });
});
