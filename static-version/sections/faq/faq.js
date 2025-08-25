document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');
    let activeItem = null;

    const closeAccordion = (item) => {
        const content = item.querySelector('.accordion-content');
        item.classList.remove('active');
        content.style.maxHeight = null;
    };

    const openAccordion = (item) => {
        const content = item.querySelector('.accordion-content');
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
    };

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Fecha o item ativo anterior
            if (activeItem && activeItem !== item) {
                closeAccordion(activeItem);
            }

            // Alterna o estado do item clicado
            if (isActive) {
                closeAccordion(item);
                activeItem = null;
            } else {
                openAccordion(item);
                activeItem = item;
            }
        });

        // Adiciona interação por teclado para acessibilidade
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                header.click();
            }
        });
    });

    // Abre o primeiro item por padrão
    if (accordionItems.length > 0) {
        openAccordion(accordionItems[0]);
        activeItem = accordionItems[0];
    }

    // Atualiza altura máxima ao redimensionar a janela
    window.addEventListener('resize', () => {
        const activeItems = document.querySelectorAll('.accordion-item.active');
        activeItems.forEach(item => {
            const content = item.querySelector('.accordion-content');
            content.style.maxHeight = content.scrollHeight + 'px';
        });
    });
});
