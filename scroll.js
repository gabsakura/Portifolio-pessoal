window.sr = ScrollReveal({ reset: true });

ScrollReveal().reveal('.apresentação-grande', {
    delay: 300,
    duration: 1000,
    origin: 'left',
    distance: '50px'
});

ScrollReveal().reveal('.circle', {
    delay: 300,
    duration: 1000,
    origin: 'bottom',
    distance: '50px'
});

ScrollReveal().reveal('.imagens-redes', {
    delay: 500,
    duration: 1000,
    origin: 'right',
    distance: '50px'
});

ScrollReveal().reveal('.sobre-mim', {
    delay: 500,
    duration: 1000,
    origin: 'bottom',
    distance: '50px'
});

ScrollReveal().reveal('.habilidades', {
    delay: 500,
    duration: 1000,
    origin: 'top',
    distance: '50px'
});

ScrollReveal().reveal('.projetos', {
    delay: 500,
    duration: 1000,
    origin: 'bottom',
    distance: '50px'
});

var menuItem = document.querySelectorAll('.item-menu');

// Função para verificar qual seção está visível
function checkVisibleSection() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        const sectionTop = index * windowHeight;
        const sectionBottom = sectionTop + windowHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            section.classList.add('section-visible');
            
            // Ajusta a opacidade das seções baseado na posição do scroll
            const progress = (scrollPosition - sectionTop) / windowHeight;
            section.style.opacity = 1 - Math.abs(progress - 0.5);
            
            // Efeito parallax para elementos dentro da seção
            const elements = section.querySelectorAll('.parallax');
            elements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const yPos = (scrollPosition - sectionTop) * speed;
                element.style.transform = `translateY(${yPos}px)`;
            });
        } else {
            section.classList.remove('section-visible');
        }
    });
}

// Adiciona os event listeners
window.addEventListener('scroll', checkVisibleSection);
window.addEventListener('resize', checkVisibleSection);
document.addEventListener('DOMContentLoaded', checkVisibleSection);

// Função para scroll suave para as seções
function scrollToSection(index) {
    window.scrollTo({
        top: window.innerHeight * index,
        behavior: 'smooth'
    });
}
