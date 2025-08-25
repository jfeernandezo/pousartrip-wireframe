document.addEventListener('DOMContentLoaded', async () => {
    // Carrega todas as seções
    const sections = [
        { id: 'header-container', path: '/sections/header/header.html' },
        { id: 'hero-container', path: '/sections/hero/hero.html' },
        { id: 'benefits-container', path: '/sections/benefits/benefits.html' },
        { id: 'search-form-container', path: '/sections/search-form/search-form.html' },
        { id: 'offers-container', path: '/sections/offers/offers.html' },
        { id: 'destinations-container', path: '/sections/destinations/destinations.html' },
        { id: 'package-highlights-container', path: '/sections/package-highlights/package-highlights.html' },
        { id: 'testimonials-container', path: '/sections/testimonials/testimonials.html' },
        { id: 'faq-container', path: '/sections/faq/faq.html' },
        { id: 'blog-container', path: '/sections/blog/blog.html' },
        { id: 'footer-container', path: '/sections/footer/footer.html' }
    ];

    // Carrega todas as seções em paralelo
    await Promise.all(sections.map(section => 
        window.pousarUtils.loadSection(section.id, section.path)
    ));

    // Inicializa componentes interativos após o carregamento
    initializeComponents();
});

function initializeComponents() {
    // Detecta se é mobile para ajustes específicos
    const isMobile = window.pousarUtils.isMobile();

    // Scroll suave para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Detecta scroll para efeitos no header
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', window.pousarUtils.throttle(() => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                header.classList.remove('scroll-up', 'scroll-down');
                return;
            }
            
            if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
                header.classList.remove('scroll-up');
                header.classList.add('scroll-down');
            } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
                header.classList.remove('scroll-down');
                header.classList.add('scroll-up');
            }
            
            lastScroll = currentScroll;
        }, 100));
    }

    // Inicializa animações de entrada
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                intersectionObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        intersectionObserver.observe(el);
    });

    // Inicializa validação de formulários
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const formData = new FormData(form);
            
            // Valida campos obrigatórios
            form.querySelectorAll('[required]').forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            // Valida e-mails
            form.querySelectorAll('input[type="email"]').forEach(email => {
                if (email.value && !window.pousarUtils.validateEmail(email.value)) {
                    isValid = false;
                    email.classList.add('error');
                }
            });

            if (isValid) {
                // Aqui você pode adicionar a lógica de envio do formulário
                console.log('Formulário válido', Object.fromEntries(formData));
            }
        });
    });

    // Inicializa máscaras de input
    document.querySelectorAll('input[data-mask="phone"]').forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = window.pousarUtils.maskPhone(e.target.value);
        });
    });

    document.querySelectorAll('input[data-mask="cpf"]').forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = window.pousarUtils.maskCPF(e.target.value);
        });
    });

    // Inicializa lazy loading de imagens
    if ('loading' in HTMLImageElement.prototype) {
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback para browsers que não suportam lazy loading nativo
        const lazyLoadScript = document.createElement('script');
        lazyLoadScript.src = '/js/lazysizes.min.js';
        document.body.appendChild(lazyLoadScript);
    }
}
