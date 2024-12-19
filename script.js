document.addEventListener('DOMContentLoaded', function() {
    initializeSwiper();
    initializeSkills();
});

function initializeSwiper() {
    const swiper = new Swiper('.swiper', {
        loop: true,
        speed: 800,
        slidesPerView: 'auto',
        centeredSlides: true,
        effect: 'coverflow',
        observer: true,
        observeParents: true,
        coverflowEffect: {
            rotate: 0,
            stretch: -50,
            depth: 100,
            modifier: 2,
            slideShadows: false,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 'auto',
                spaceBetween: 60
            }
        },
        on: {
            init: function () {
                setTimeout(() => {
                    this.update();
                }, 500);
            }
        }
    });
}

function initializeSkills() {
    const habilidades = document.querySelectorAll(".Imagem-habilidade");
    const frameworksContainer = document.getElementById('frameworks-container');
    
    if (!frameworksContainer) {
        const container = document.createElement('div');
        container.id = 'frameworks-container';
        container.className = 'frameworks-container';
        document.querySelector('.skills-section').appendChild(container);
    }

    habilidades.forEach(habilidade => {
        const img = habilidade.querySelector('img');
        const text = habilidade.querySelector('.texto-habilidade');
        if (img && text) {
            img.style.display = "block";
            text.style.display = "none";
        }
    });
}

function toggleText(element, skill) {
    if (!element) return;
    
    const img = element.querySelector('img');
    const text = element.querySelector('.texto-habilidade');
    const frameworksContainer = document.getElementById('frameworks-container');
    
    if (!img || !text || !frameworksContainer) return;

    const isHidden = img.style.display === "none";
    
    // Reset all elements first
    document.querySelectorAll('.Imagem-habilidade').forEach(el => {
        const elImg = el.querySelector('img');
        const elText = el.querySelector('.texto-habilidade');
        if (elImg && elText) {
            elImg.style.display = "block";
            elText.style.display = "none";
        }
        el.classList.remove('active');
    });

    if (!isHidden) {
        img.style.display = "none";
        text.style.display = "flex";
        element.classList.add('active');
        applyBlur(element);
        showFramework(skill);
    } else {
        removeBlur();
        frameworksContainer.innerHTML = '';
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
            { src: './img/Bootstrap.svg', text: 'Usei minhas habilidades em Bootstrap para criar layouts responsivos e consistentes rapidamente.' },
            { src: './img/Tailwindcss.svg', text: 'Uso meus conhecimentos em Tailwind CSS para personalização e estilização eficiente de projetos.' },
            { src: './img/Semantic.svg', text: 'Aplico princípios de HTML semântico para melhor acessibilidade e SEO.' },
            { src: './img/Sass.svg', text: 'Utilizo Sass para criar estilos mais organizados e manuteníveis.' }
        ],
        'JavaScript': [
            { src: './img/React.png', text: 'Desenvolvo interfaces dinâmicas e componentes reutilizáveis com React.' },
            { src: './img/JWT.svg', text: 'Implemento autenticação segura usando JWT.' },
            { src: './img/Vite.svg', text: 'Utilizo Vite para desenvolvimento rápido e eficiente.' },
            { src: './img/Node.svg', text: 'Desenvolvo aplicações backend com Node.js.' },
            { src: './img/TypeScript.svg', text: 'Uso TypeScript para código mais seguro e manutenível.' },
            { src: './img/WebComponents.svg', text: 'Crio componentes web reutilizáveis e encapsulados.' }
        ],
        'Python': [
            { src: 'img/Django.svg', text: 'Desenvolvo backends robustos com Django.' },
            { src: 'img/Flask.svg', text: 'Crio APIs leves e flexíveis com Flask.' },
            { src: 'img/DjangoSQL.svg', text: 'Trabalho com bancos de dados usando Django ORM.' }
        ],
        'DevOps': [
            { src: 'img/Git.svg', text: 'Controle de versão e colaboração com Git.' },
            { src: 'img/GitFlow.svg', text: 'Gerenciamento de branches com GitFlow.' },
            { src: 'img/Docker.svg', text: 'Containerização de aplicações com Docker.' },
            { src: 'img/Kubernetes.svg', text: 'Orquestração de containers com Kubernetes.' },
            { src: 'img/Terraform.svg', text: 'Infraestrutura como código com Terraform.' },
            { src: 'img/Monitoring.svg', text: 'Monitoramento de aplicações e infraestrutura.' }
        ],
        'Soft Skills': [
            { src: 'img/ProblemSolving.svg', text: 'Resolução eficiente de problemas complexos.' },
            { src: 'img/Teamwork.svg', text: 'Colaboração efetiva em equipes multidisciplinares.' },
            { src: 'img/Kanban.svg', text: 'Gestão de projetos ágeis com Kanban.' }
        ],
        'Database': [
            { src: 'img/SQL.svg', text: 'Desenvolvimento e otimização de bancos de dados relacionais.' },
            { src: 'img/MySQL.svg', text: 'Experiência com MySQL para aplicações escaláveis.' },
            { src: 'img/PostgreSQL.svg', text: 'Trabalho com PostgreSQL para sistemas robustos.' },
            { src: 'img/SQLite.svg', text: 'Utilização de SQLite para aplicações locais e protótipos.' }
        ]
    };

    const frameworksContainer = document.getElementById('frameworks-container');
    if (!frameworksContainer) return;

    frameworksContainer.innerHTML = '';
    frameworksContainer.classList.remove('show');

    if (frameworks[skill]) {
        const gridContainer = document.createElement('div');
        gridContainer.className = 'frameworks-grid';
        
        frameworks[skill].forEach(framework => {
            const frameworkElement = document.createElement('div');
            frameworkElement.className = 'Imagem-habilidade-extra';
            frameworkElement.innerHTML = `
                <img src="${framework.src}" alt="Framework ${skill}">
                <p class="texto-habilidade-extra">${framework.text}</p>
            `;
            frameworkElement.onclick = () => toggleExtraText(frameworkElement);
            gridContainer.appendChild(frameworkElement);
        });

        frameworksContainer.appendChild(gridContainer);

        setTimeout(() => {
            frameworksContainer.classList.add('show');
        }, 50);
    }
}

function toggleExtraText(element) {
    const text = element.querySelector('.texto-habilidade-extra');
    text.style.display = text.style.display === "none" ? "flex" : "none";
}
