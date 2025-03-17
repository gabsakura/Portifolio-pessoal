

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
    if (skills[skillType]) {
        subSkillsContainer = document.createElement('div');
        subSkillsContainer.id = 'sub-skills-container';
        subSkillsContainer.className = 'sub-skills-container';
        
        const subSkillsHTML = skills[skillType].subSkills.map(skill => `
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