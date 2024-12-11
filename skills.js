const skillsData = {
    'CSS': {
        title: 'CSS',
        subSkills: [
            { 
                name: 'Bootstrap', 
                icon: 'img/bootstrap.png',
                description: 'Framework CSS para desenvolvimento web responsivo'
            },
            { 
                name: 'Tailwind', 
                icon: 'img/tailwind.png',
                description: 'Framework CSS utilitário para design moderno'
            },
            { 
                name: 'SASS', 
                icon: 'img/sass.png',
                description: 'Pré-processador CSS para estilização avançada'
            }
        ]
    },
    'HTML': {
        title: 'HTML',
        subSkills: [
            { 
                name: 'Semantic HTML', 
                icon: 'img/semantic.png',
                description: 'Estruturação semântica para melhor SEO e acessibilidade'
            },
            { 
                name: 'Web Components', 
                icon: 'img/components.png',
                description: 'Criação de componentes web reutilizáveis'
            },
            { 
                name: 'Forms & Validation', 
                icon: 'img/forms.png',
                description: 'Formulários avançados com validação'
            }
        ]
    },
    'JavaScript': {
        title: 'JavaScript',
        subSkills: [
            { 
                name: 'React', 
                icon: 'img/react.png',
                description: 'Desenvolvimento de interfaces modernas com React'
            },
            { 
                name: 'Node.js', 
                icon: 'img/nodejs.png',
                description: 'Desenvolvimento backend com Node.js'
            },
            { 
                name: 'TypeScript', 
                icon: 'img/typescript.png',
                description: 'JavaScript tipado para projetos escaláveis'
            }
        ]
    },
    'Python': {
        title: 'Python',
        subSkills: [
            { 
                name: 'Django', 
                icon: 'img/django.png',
                description: 'Framework web Python de alto nível'
            },
            { 
                name: 'FastAPI', 
                icon: 'img/fastapi.png',
                description: 'Framework moderno para APIs'
            },
            { 
                name: 'Data Analysis', 
                icon: 'img/pandas.png',
                description: 'Análise de dados com Python'
            }
        ]
    },
    'DevOps': {
        title: 'DevOps & Cloud',
        subSkills: [
            { 
                name: 'Docker', 
                icon: 'img/docker.png',
                description: 'Containerização e orquestração de aplicações'
            },
            { 
                name: 'AWS', 
                icon: 'img/aws.png',
                description: 'Amazon Web Services - Serviços em nuvem'
            },
            { 
                name: 'CI/CD', 
                icon: 'img/cicd.png',
                description: 'Integração e Entrega Contínua com Jenkins/GitHub Actions'
            },
            { 
                name: 'Kubernetes', 
                icon: 'img/kubernetes.png',
                description: 'Orquestração de containers em escala'
            },
            { 
                name: 'Terraform', 
                icon: 'img/terraform.png',
                description: 'Infraestrutura como Código (IaC)'
            },
            { 
                name: 'Monitoring', 
                icon: 'img/monitoring.png',
                description: 'Monitoramento com Prometheus/Grafana'
            }
        ]
    },
    'Soft Skills': {
        title: 'Soft Skills & Metodologias',
        subSkills: [
            { 
                name: 'Agile & Scrum', 
                icon: 'img/agile.png',
                description: 'Experiência com metodologias ágeis e Scrum'
            },
            { 
                name: 'Kanban', 
                icon: 'img/kanban.png',
                description: 'Gestão de fluxo de trabalho com Kanban'
            },
            { 
                name: 'Team Work', 
                icon: 'img/team.png',
                description: 'Colaboração efetiva e comunicação em equipe'
            },
            { 
                name: 'Problem Solving', 
                icon: 'img/problem-solving.png',
                description: 'Resolução criativa de problemas e pensamento analítico'
            },
            { 
                name: 'Git Flow', 
                icon: 'img/git-flow.png',
                description: 'Controle de versão e colaboração com Git'
            },
            { 
                name: 'Code Review', 
                icon: 'img/code-review.png',
                description: 'Revisão de código e melhores práticas'
            }
        ]
    }
};

function toggleText(element, skillType) {
    const skillsSection = document.querySelector('.skills-section');
    let subSkillsContainer = document.getElementById('sub-skills-container');
    
    // Remove o container existente se houver
    if (subSkillsContainer) {
        subSkillsContainer.remove();
    }

    // Se clicar na mesma habilidade, apenas remove o container
    if (element.classList.contains('active')) {
        element.classList.remove('active');
        return;
    }

    // Remove active de todas as habilidades
    document.querySelectorAll('.Imagem-habilidade').forEach(el => {
        el.classList.remove('active');
    });

    // Adiciona active na habilidade clicada
    element.classList.add('active');

    // Cria novo container para sub-habilidades
    if (skillsData[skillType]) {
        subSkillsContainer = document.createElement('div');
        subSkillsContainer.id = 'sub-skills-container';
        subSkillsContainer.className = 'sub-skills-container';
        
        const subSkillsHTML = skillsData[skillType].subSkills.map(skill => `
            <div class="sub-skill">
                <div class="sub-skill-icon">
                    <img src="${skill.icon}" alt="${skill.name}">
                </div>
                <div class="sub-skill-info">
                    <h4>${skill.name}</h4>
                    <p>${skill.description}</p>
                </div>
            </div>
        `).join('');

        subSkillsContainer.innerHTML = subSkillsHTML;
        
        // Insere após o container das habilidades principais
        const mainContainer = document.querySelector('.caixas');
        mainContainer.parentNode.insertBefore(subSkillsContainer, mainContainer.nextSibling);

        // Adiciona animação
        setTimeout(() => {
            subSkillsContainer.classList.add('show');
        }, 10);
    }
} 