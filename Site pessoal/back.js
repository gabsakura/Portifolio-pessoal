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

let currentIndex = 0;

function moveSlide(direction) {
    const slideWidth = document.querySelector('.conteudo-slide').clientWidth;
    const listaSlide = document.querySelector('.lista-slide');
    const slides = document.querySelectorAll('.conteudo-slide');
    const totalSlides = slides.length;

    currentIndex += direction;

    // Handle infinite loop logic
    if (currentIndex >= totalSlides - 2) {
        listaSlide.style.transition = 'none';
        currentIndex = 3;
        listaSlide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        setTimeout(() => {
            listaSlide.style.transition = 'transform 0.5s ease-in-out';
            currentIndex += direction;
            listaSlide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }, 0);
    } else if (currentIndex < 0) {
        listaSlide.style.transition = 'none';
        currentIndex = totalSlides - 6;
        listaSlide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        setTimeout(() => {
            listaSlide.style.transition = 'transform 0.5s ease-in-out';
            currentIndex += direction;
            listaSlide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }, 0);
    } else {
        listaSlide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
}

// To set the initial position correctly
moveSlide(0);

