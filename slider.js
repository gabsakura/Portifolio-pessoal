let currentSlide = 0;
const slidesPerView = 3; // Número de slides visíveis por vez

function initSlider() {
    const slideList = document.querySelector('.lista-slide');
    const slides = document.querySelectorAll('.conteudo-slide');
    
    // Configurar largura inicial
    slides.forEach(slide => {
        slide.style.flex = `0 0 ${100/slidesPerView}%`;
    });
    
    // Clonar slides para scroll infinito
    const slidesToClone = Array.from(slides);
    
    // Adiciona clones no final
    slidesToClone.forEach(slide => {
        const clone = slide.cloneNode(true);
        clone.classList.add('clone');
        slideList.appendChild(clone);
    });
    
    // Adiciona clones no início
    slidesToClone.reverse().forEach(slide => {
        const clone = slide.cloneNode(true);
        clone.classList.add('clone');
        slideList.insertBefore(clone, slideList.firstChild);
    });
    
    // Posiciona o slider na posição inicial (após os clones)
    currentSlide = slides.length;
    updateSlidePosition(false);
}

function updateSlidePosition(animate = true) {
    const slideList = document.querySelector('.lista-slide');
    const slides = document.querySelectorAll('.conteudo-slide');
    const slideWidth = slides[0].offsetWidth;
    
    if (animate) {
        slideList.style.transition = 'transform 0.5s ease-in-out';
    } else {
        slideList.style.transition = 'none';
    }
    
    slideList.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function moveSlide(direction) {
    const slides = document.querySelectorAll('.conteudo-slide');
    const originalSlidesCount = slides.length / 3; // Divide por 3 porque temos clones no início e fim
    
    currentSlide += direction;
    updateSlidePosition();
    
    // Verifica se precisa fazer o loop
    if (direction > 0 && currentSlide >= slides.length - slidesPerView) {
        setTimeout(() => {
            currentSlide = originalSlidesCount;
            updateSlidePosition(false);
        }, 500);
    } else if (direction < 0 && currentSlide <= slidesPerView - 1) {
        setTimeout(() => {
            currentSlide = originalSlidesCount * 2 - slidesPerView;
            updateSlidePosition(false);
        }, 500);
    }
}

// Adiciona navegação por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') moveSlide(-1);
    if (e.key === 'ArrowRight') moveSlide(1);
});

// Adiciona navegação por touch
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.slide').addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.querySelector('.slide').addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const minSwipeDistance = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0) {
            moveSlide(-1); // Swipe direita
        } else {
            moveSlide(1); // Swipe esquerda
        }
    }
}

// Atualiza CSS necessário
const style = document.createElement('style');
style.textContent = `
    .lista-slide {
        display: flex;
        transition: transform 0.5s ease-in-out;
    }

    .conteudo-slide {
        flex: 0 0 ${100/slidesPerView}%;
        padding: 10px;
        box-sizing: border-box;
    }

    .slide {
        overflow: hidden;
        position: relative;
    }

    .dentro-slide {
        overflow: hidden;
    }

    .clone {
        opacity: 1;
    }
`;
document.head.appendChild(style);

// Inicializa o slider quando a página carregar
document.addEventListener('DOMContentLoaded', initSlider);

// Atualiza o slider quando a janela é redimensionada
window.addEventListener('resize', () => {
    updateSlidePosition(false);
}); 