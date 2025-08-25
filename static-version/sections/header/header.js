// Função para carregar o conteúdo do header
function loadHeader() {
    fetch('sections/header/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-container').innerHTML = html;
            initializeMobileMenu();
        });
}

// Função para inicializar o menu mobile
function initializeMobileMenu() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const mainNav = document.querySelector('.main-nav');
    const headerRight = document.querySelector('.header-right');

    if (menuButton) {
        menuButton.addEventListener('click', () => {
            menuButton.classList.toggle('active');
            mainNav.classList.toggle('active');
            headerRight.classList.toggle('active');
        });
    }
}

// Carregar o header quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', loadHeader);
