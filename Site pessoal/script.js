
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

function toggleText(element, skill) {
    const img = element.querySelector('img');
    const text = element.querySelector('.texto-habilidade');
    const frameworksContainer = document.getElementById('frameworks-container');

    if (img.style.display === "none") {
        img.style.display = "block";
        text.style.display = "none";
        removeBlur();
        frameworksContainer.innerHTML = '';  // Limpa os frameworks exibidos
    } else {
        img.style.display = "none";
        text.style.display = "flex";
        applyBlur(element);
        showFramework(skill);
    }
}

function applyBlur(activeElement) {
    const allElements = document.querySelectorAll('.Imagem-habilidade');
    allElements.forEach(element => {
        if (element !== activeElement) {
            element.classList.add('blur');
        }
    });
}

function removeBlur() {
    const allElements = document.querySelectorAll('.Imagem-habilidade');
    allElements.forEach(element => {
        element.classList.remove('blur');
    });
}

function showFramework(skill) {
    const frameworks = {
        'CSS': [
            { src: 'img/Bootstrap.svg', text: 'Usei minhas habilidades em Bootstrap para criar layouts responsivos e consistentes rapidamente.' },
            { src:'img/Tailwindcss.svg', text: 'Uso meus conhecimentos em tailwindcss para a personalização e embelezamento do projeto.'}
        ],
        'JavaScript': [
            { src: 'img/React.png', text: 'Usei minhas habilidades em React para construir interfaces de usuário dinâmicas e componentes reutilizáveis.' },
            { src: 'img/JWT.svg', text:'Uso minhas habilidades em JWT para garantir a segurança e não vazamento de dados sigilosos.'}   ,      
            { src: 'img/Vite.svg', text:' Uso meus conhecimentos em vite para o teste de minhas aplicações web.'}
        ], 
        'Python': [
            { src: 'img/Django.svg', text: 'Usei minhas habilidades em Django para desenvolver backends robustos e eficientes.' },
            { src:'img/DjangoSQL.svg', text:'Uso minha habilidades em DjangoSQl para desenvolver banco de dados eficientes e faceis de se ler e acessar.'}
        ],
        '+':[
            {src:'img/SQL.svg', text:'Usei minhas habilidades em SQL para criar bancos de dados interativos e faceis para se interagir com as aplicações'},
            {src:'img/DevOps.png', text:'Uso meus conhecimentos em DevOps como o Git e o Docker para facilitar desenvolvimento e controle de versão do codigo e o docker para facilitação ao deploy'}
        ]
    };

    const frameworksContainer = document.getElementById('frameworks-container');
    frameworksContainer.innerHTML = '';  // Limpa os frameworks exibidos

    frameworks[skill].forEach(framework => {
        const frameworkElement = document.createElement('div');
        frameworkElement.className = 'Imagem-habilidade-extra';
        frameworkElement.innerHTML = `
            <img src="${framework.src}" alt="Framework ${skill}">
            <p class="texto-habilidade-extra">${framework.text}</p>
        `;
        frameworkElement.onclick = () => toggleExtraText(frameworkElement);
        frameworksContainer.appendChild(frameworkElement);
    });
}

function toggleExtraText(element) {
    const text = element.querySelector('.texto-habilidade-extra');
    text.style.display = text.style.display === "none" ? "flex" : "none";
}

document.addEventListener("DOMContentLoaded", function() {
    const habilidades = document.querySelectorAll(".Imagem-habilidade");

    habilidades.forEach(habilidade => {
        const img = habilidade.querySelector('img');
        const text = habilidade.querySelector('.texto-habilidade');

        img.style.display = "block";
        text.style.display = "none";
    });

    const habilidadesExtras = document.querySelectorAll(".Imagem-habilidade-extra");

    habilidadesExtras.forEach(habilidadeExtra => {
        const text = habilidadeExtra.querySelector('.texto-habilidade-extra');
        text.style.display = "none";
    });
});
document.querySelectorAll('.Imagem-habilidade-extra').forEach(item => {
    item.addEventListener('click', () => {
        const text = item.querySelector('.texto-habilidade-extra');
        if (text.style.display === 'flex') {
            text.style.display = 'none';
        } else {
            text.style.display = 'flex';
        }
    });
});
