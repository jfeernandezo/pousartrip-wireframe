// Função para carregar o conteúdo dos benefícios
function loadBenefits() {
    fetch('sections/benefits/benefits.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('benefits-container').innerHTML = html;
            initializeBenefitsAnimation();
        });
}

// Função para inicializar animações dos benefícios
function initializeBenefitsAnimation() {
    const benefitCards = document.querySelectorAll('.benefit-card');
    
    // Adiciona animação de entrada quando os cards entrarem na viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    benefitCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

// Carregar os benefícios quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', loadBenefits);
