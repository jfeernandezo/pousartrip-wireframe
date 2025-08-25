// Função para carregar o conteúdo das ofertas
function loadOffers() {
    fetch('sections/offers/offers.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('offers-container').innerHTML = html;
            initializeOffersAnimations();
        });
}

// Função para inicializar animações das ofertas
function initializeOffersAnimations() {
    // Animação para os cards flutuantes
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach(card => {
        let isHovering = false;
        
        // Animação contínua suave
        function animate() {
            if (!isHovering) {
                const time = Date.now() * 0.001;
                const offset = Math.sin(time) * 5;
                card.style.transform = `translateY(${offset}px)`;
            }
            requestAnimationFrame(animate);
        }
        
        animate();
        
        // Parar animação no hover
        card.addEventListener('mouseenter', () => {
            isHovering = true;
            card.style.transform = 'translateY(0) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            isHovering = false;
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animação de entrada dos elementos
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    // Observar elementos para animação
    document.querySelectorAll('.feature-item, .offers-title, .offers-description, .offers-buttons')
        .forEach(el => observer.observe(el));
}

// Carregar as ofertas quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', loadOffers);

// Adicionar classes CSS necessárias para as animações
const style = document.createElement('style');
style.textContent = `
    .feature-item, .offers-title, .offers-description, .offers-buttons {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }

    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .floating-card {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);
