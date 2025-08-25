document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.testimonials-carousel');
    const container = carousel.querySelector('.carousel-container');
    const cards = carousel.querySelectorAll('.testimonial-card');
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');
    const indicatorsContainer = document.querySelector('.carousel-indicators');

    let currentIndex = 0;
    let cardWidth = 0;
    let cardsPerView = 3;
    let autoplayInterval = null;
    const autoplayDelay = 5000; // 5 segundos

    // Função para criar indicadores
    const createIndicators = () => {
        const totalSlides = Math.ceil(cards.length / cardsPerView);
        indicatorsContainer.innerHTML = '';
        
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('button');
            indicator.className = `indicator ${i === 0 ? 'active' : ''}`;
            indicator.setAttribute('aria-label', `Slide ${i + 1}`);
            indicator.addEventListener('click', () => goToSlide(i));
            indicatorsContainer.appendChild(indicator);
        }
    };

    // Função para atualizar variáveis responsivas
    const updateResponsiveVars = () => {
        cardWidth = cards[0].offsetWidth + 32; // 32px é o gap entre os cards
        if (window.innerWidth <= 768) {
            cardsPerView = 1;
        } else if (window.innerWidth <= 1024) {
            cardsPerView = 2;
        } else {
            cardsPerView = 3;
        }
        createIndicators();
    };

    // Inicializa as variáveis
    updateResponsiveVars();

    // Atualiza quando a janela é redimensionada
    window.addEventListener('resize', () => {
        updateResponsiveVars();
        updateCarousel();
    });

    // Função para atualizar a posição do carrossel
    const updateCarousel = () => {
        const translateX = -currentIndex * cardWidth;
        container.style.transform = `translateX(${translateX}px)`;

        // Atualiza estado dos botões
        btnPrev.disabled = currentIndex === 0;
        btnNext.disabled = currentIndex >= cards.length - cardsPerView;

        // Atualiza classes visuais dos botões
        btnPrev.classList.toggle('opacity-50', currentIndex === 0);
        btnNext.classList.toggle('opacity-50', currentIndex >= cards.length - cardsPerView);

        // Atualiza indicadores
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === Math.floor(currentIndex / cardsPerView));
        });
    };

    // Função para ir para um slide específico
    const goToSlide = (index) => {
        currentIndex = index * cardsPerView;
        if (currentIndex > cards.length - cardsPerView) {
            currentIndex = cards.length - cardsPerView;
        }
        updateCarousel();
        resetAutoplay();
    };

    // Handlers dos botões
    btnPrev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
            resetAutoplay();
        }
    });

    btnNext.addEventListener('click', () => {
        if (currentIndex < cards.length - cardsPerView) {
            currentIndex++;
            updateCarousel();
            resetAutoplay();
        }
    });

    // Adiciona navegação por touch para dispositivos móveis
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoplay();
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoplay();
    }, { passive: true });

    const handleSwipe = () => {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) >= swipeThreshold) {
            if (swipeDistance > 0 && currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            } else if (swipeDistance < 0 && currentIndex < cards.length - cardsPerView) {
                currentIndex++;
                updateCarousel();
            }
        }
    };

    // Funções de autoplay
    const startAutoplay = () => {
        stopAutoplay();
        autoplayInterval = setInterval(() => {
            if (currentIndex < cards.length - cardsPerView) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        }, autoplayDelay);
    };

    const stopAutoplay = () => {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    };

    const resetAutoplay = () => {
        stopAutoplay();
        startAutoplay();
    };

    // Pausa o autoplay quando o mouse está sobre o carrossel
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    // Função para gerar estrelas de avaliação
    const generateStars = (rating) => {
        const starsContainer = document.createElement('div');
        starsContainer.className = 'stars';
        
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('svg');
            star.className = 'star-icon';
            star.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            star.setAttribute('viewBox', '0 0 20 20');
            star.setAttribute('fill', 'currentColor');
            
            if (i < Math.floor(rating)) {
                // Estrela cheia
                star.innerHTML = '<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>';
            } else {
                // Estrela vazia
                star.innerHTML = '<path fill-rule="evenodd" d="M10 2a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L10 13.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L2.818 8.37a.75.75 0 01.416-1.28l4.21-.611L9.327 2.42A.75.75 0 0110 2zm0 2.445L8.615 7.11a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L10 4.445z" clip-rule="evenodd"/>';
            }
            
            starsContainer.appendChild(star);
        }
        
        return starsContainer;
    };

    // Atualiza as estrelas de avaliação para cada card
    cards.forEach(card => {
        const rating = parseFloat(card.dataset.rating || "0");
        const starsContainer = card.querySelector('.stars');
        if (starsContainer) {
            starsContainer.replaceWith(generateStars(rating));
        }
    });

    // Inicializa o carrossel e o autoplay
    updateCarousel();
    startAutoplay();
});
