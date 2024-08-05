var menuItem = document.querySelectorAll('.item-menu')

function selectlink(){
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click',selectlink)
)
//menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

//slider

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.lista-slide');
    const slides = Array.from(document.querySelectorAll('.conteudo-slide'));
    const totalSlides = slides.length;
    let currentIndex = 0;

    // Clone first and last slides
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[totalSlides - 1].cloneNode(true);

    // Add clones to the slider
    slider.appendChild(firstClone);
    slider.insertBefore(lastClone, slides[0]);

    const slideWidth = slides[0].clientWidth + 50; // Adjust width for gap

    // Set initial position
    slider.style.transform = `translateX(-${slideWidth}px)`;

    function moveSlide(direction) {
        if (direction === 1) {
            currentIndex++;
            if (currentIndex >= totalSlides + 1) {
                currentIndex = 1;
                slider.style.transition = 'none';
                slider.style.transform = `translateX(-${slideWidth}px)`;
                setTimeout(() => {
                    slider.style.transition = 'transform 0.5s ease-in-out';
                    slider.style.transform = `translateX(-${slideWidth * (currentIndex + 1)}px)`;
                }, 50);
                return;
            }
        } else if (direction === -1) {
            currentIndex--;
            if (currentIndex <= -1) {
                currentIndex = totalSlides - 1;
                slider.style.transition = 'none';
                slider.style.transform = `translateX(-${slideWidth * (totalSlides + 1)}px)`;
                setTimeout(() => {
                    slider.style.transition = 'transform 0.5s ease-in-out';
                    slider.style.transform = `translateX(-${slideWidth * (totalSlides)}px)`;
                }, 50);
                return;
            }
        }

        slider.style.transform = `translateX(-${slideWidth * (currentIndex + 1)}px)`;
    }

    document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.next').addEventListener('click', () => moveSlide(1));

    // Auto slide
    setInterval(() => moveSlide(1), 3000); // Adjust the interval as needed
});

function toggleText(element) {
    const img = element.querySelector('img');
    const text = element.querySelector('.texto-habilidade');

    if (img.style.display === "none") {
        img.style.display = "block";
        text.style.display = "none";
    } else {
        img.style.display = "none";
        text.style.display = "flex";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const habilidades = document.querySelectorAll(".Imagem-habilidade");

    habilidades.forEach(habilidade => {
        const img = habilidade.querySelector('img');
        const text = habilidade.querySelector('.texto-habilidade');

        // Garantir que a imagem seja exibida inicialmente e o texto esteja oculto
        img.style.display = "block";
        text.style.display = "none";
    });
});
