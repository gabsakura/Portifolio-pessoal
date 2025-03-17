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
        // Mostrando detalhes
        img.style.display = "none";
        text.style.display = "flex";
        text.textContent = "Clique novamente para voltar";
        element.classList.add('active');
        applyBlur(element);
        showFramework(skill);
    } else {
        // Voltando ao estado inicial
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
            { src: 'img/Bootstrap.svg', text: 'Usei minhas habilidades em Bootstrap para criar layouts responsivos e consistentes rapidamente.' },
            { src: 'img/Tailwindcss.svg', text: 'Uso meus conhecimentos em Tailwind CSS para personalização e estilização eficiente de projetos.' },
            { src: 'img/Semantic.jpg', text: 'Aplico princípios de HTML semântico para melhor acessibilidade e SEO.' },
            { src: 'img/Sass.jpg', text: 'Utilizo Sass para criar estilos mais organizados e manuteníveis.' }
        ],
        'JavaScript': [
            { src: './img/React.png', text: 'Desenvolvo interfaces dinâmicas e componentes reutilizáveis com React.' },
            { src: './img/JWT.svg', text: 'Implemento autenticação segura usando JWT.' },
            { src: './img/Vite.svg', text: 'Utilizo Vite para desenvolvimento rápido e eficiente.' },
            { src: './img/Node.jpg', text: 'Desenvolvo aplicações backend com Node.js.' },
            { src: './img/webcomponent.png', text: 'Crio componentes web reutilizáveis e encapsulados.' }
        ],
        'Python': [
            { src: 'img/Django.svg', text: 'Desenvolvo backends robustos com Django.' },
            { src: 'img/Flask.svg', text: 'Crio APIs leves e flexíveis com Flask.' },
            { src: 'img/DjangoSQL.svg', text: 'Trabalho com bancos de dados usando Django ORM.' }
        ],
        'DevOps': [
            { src: 'img/git.png', text: 'Controle de versão e colaboração com Git.' },
            { src: 'img/gitFlow.png', text: 'Gerenciamento de branches com GitFlow.' },
            { src: 'img/docker.svg', text: 'Containerização de aplicações com Docker.' },
            { src: 'img/kubernet.png', text: 'Orquestração de containers com Kubernetes.' },
            { src: 'img/Terraform.jpg', text: 'Infraestrutura como código com Terraform.' },
            { src: 'img/monitoring.jpeg', text: 'Monitoramento de aplicações e infraestrutura.' }
        ],
        'Soft Skills': [
            { src: 'img/problem.jpg', text: 'Resolução eficiente de problemas complexos.' },
            { src: 'img/teamwork.jpg', text: 'Colaboração efetiva em equipes multidisciplinares.' },
            { src: 'img/kanban.jpg', text: 'Gestão de projetos ágeis com Kanban.' }
        ],
        'Database': [
            { src: 'img/SQL.svg', text: 'Desenvolvimento e otimização de bancos de dados relacionais.' },
            { src: 'img/mysql.png', text: 'Experiência com MySQL para aplicações escaláveis.' },
            { src: 'img/postgree.png', text: 'Trabalho com PostgreSQL para sistemas robustos.' },
            { src: 'img/sqlite.svg', text: 'Utilização de SQLite para aplicações locais e protótipos.' }
        ]
    };

    const frameworksContainer = document.getElementById('frameworks-container');
    if (!frameworksContainer) {
        console.error('Container de frameworks não encontrado');
        return;
    }

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
        
        // Força um reflow antes de adicionar a classe show
        frameworksContainer.offsetHeight;
        frameworksContainer.classList.add('show');
    }
}

function toggleExtraText(element) {
    const text = element.querySelector('.texto-habilidade-extra');
    text.style.display = text.style.display === "none" ? "flex" : "none";
}
