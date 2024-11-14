// Função para adicionar a animação de fade-in
document.addEventListener('DOMContentLoaded', () => {
    const recipeCards = document.querySelectorAll('.recipe-card');
    
    // Função de Fade In
    recipeCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, 300 * index); // Atraso para cada card aparecer
    });

    // Scroll Reveal para cards
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

// Função de Animação de Zoom nas Imagens
const images = document.querySelectorAll('.recipe-card img');
images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.classList.add('zoom-in');
    });

    image.addEventListener('mouseout', () => {
        image.classList.remove('zoom-in');
    });
});
