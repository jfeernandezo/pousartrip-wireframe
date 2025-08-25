document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.destinations-carousel');
    const container = carousel.querySelector('.carousel-container');
    const cards = carousel.querySelectorAll('.destination-card');
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');

    let currentIndex = 0;
    let cardWidth = 0;
    let cardsPerView = 3;

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
    };

    // Handlers dos botões
    btnPrev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    btnNext.addEventListener('click', () => {
        if (currentIndex < cards.length - cardsPerView) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Adiciona navegação por touch para dispositivos móveis
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    const handleSwipe = () => {
        const swipeThreshold = 50; // Mínimo de pixels para considerar um swipe
        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) >= swipeThreshold) {
            if (swipeDistance > 0 && currentIndex > 0) {
                // Swipe para direita -> anterior
                currentIndex--;
                updateCarousel();
            } else if (swipeDistance < 0 && currentIndex < cards.length - cardsPerView) {
                // Swipe para esquerda -> próximo
                currentIndex++;
                updateCarousel();
            }
        }
    };

    // Adiciona animação suave aos cards quando passam o mouse
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const img = card.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.05)';
            }
        });

        card.addEventListener('mouseleave', () => {
            const img = card.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });

    // Inicializa o carrossel
    updateCarousel();
});
