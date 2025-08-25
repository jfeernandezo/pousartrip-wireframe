// Função para carregar o conteúdo do hero
function loadHero() {
    fetch('sections/hero/hero.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('hero-container').innerHTML = html;
            initializeHeroParallax();
        });
}

// Função para adicionar efeito parallax no banner
function initializeHeroParallax() {
    const heroBackground = document.querySelector('.hero-background img');
    if (heroBackground) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }
}

// Carregar o hero quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', loadHero);
