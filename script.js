const skills = {
  Web: {
    title: 'Interfaces web',
    text: 'Construo interfaces responsivas e claras, priorizando organização de componentes, experiência de uso e integração com APIs.',
    items: ['HTML e CSS', 'JavaScript', 'React', 'Vite', 'Material UI']
  },
  Dados: {
    title: 'Dados e dashboards',
    text: 'Uso Python e SQL para organizar, consultar e apresentar dados em dashboards e aplicações que apoiam decisões.',
    items: ['Python', 'SQL', 'PostgreSQL', 'MySQL', 'Streamlit']
  },
  Backend: {
    title: 'Serviços e APIs',
    text: 'Desenvolvo serviços e integrações para conectar aplicações, dados e regras de negócio.',
    items: ['Python', 'Flask', 'Node.js', 'APIs REST', 'SQLite']
  },
  Mobile: {
    title: 'Aplicações mobile',
    text: 'Exploro o desenvolvimento multiplataforma com Flutter e serviços do Firebase para autenticação e persistência.',
    items: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Firebase Hosting']
  },
  Práticas: {
    title: 'Forma de trabalhar',
    text: 'Busco entregas organizadas e colaborativas, usando ferramentas e rituais que tornam o desenvolvimento mais previsível.',
    items: ['Git e GitHub', 'Scrum', 'Kanban', 'Docker', 'Documentação']
  }
};

const projects = {
  failguard: {
    label: '01 / FailGuard',
    title: 'Monitoramento inteligente de sensores',
    description: 'Projeto voltado ao acompanhamento de máquinas industriais por meio de leituras de temperatura, corrente e vibração. A aplicação transforma os dados em gráficos e relatórios para facilitar a identificação de comportamentos fora do esperado.',
    highlights: [
      'Dashboard com filtros por período para analisar as leituras.',
      'Autenticação de usuários e área administrativa.',
      'Integração com Gemini para consultas e interpretação dos dados.',
      'Persistência local com SQLite e suporte a PostgreSQL em produção.'
    ],
    repository: 'https://github.com/gabsakura/FAILGUARD',
    demo: 'https://ia-challenge-update-test-main-1.onrender.com'
  },
  dashboard: {
    label: '02 / Dashboard financeiro',
    title: 'Gestão financeira e inventário',
    description: 'Interface em React para reunir indicadores financeiros, inventário, usuários e tarefas em um único ambiente. O projeto consome uma API configurada por variável de ambiente.',
    highlights: [
      'Visualização de dados financeiros com gráficos e indicadores.',
      'Fluxos para inventário, perfis de usuário e quadro Kanban.',
      'Rotas protegidas e autenticação por token.',
      'Componentes reutilizáveis com React e Material UI.'
    ],
    repository: 'https://github.com/gabsakura/Projeto_siteProfissional'
  },
  passabola: {
    label: '03 / Passa a Bola',
    title: 'Ecossistema para o futebol feminino',
    description: 'Aplicativo multiplataforma criado para aproximar atletas, clubes e torcedores. A proposta é centralizar informações, perfis, competições e recursos de gestão ligados ao futebol feminino.',
    highlights: [
      'Autenticação e persistência de dados com Firebase.',
      'Perfis de usuários, clubes e atletas.',
      'Estrutura para campeonatos, partidas e dados do ecossistema esportivo.',
      'Regras e índices do Firestore versionados no repositório.'
    ],
    repository: 'https://github.com/gabsakura/passabola-App',
    demo: 'https://flutter-app-f547b.web.app/'
  }
};

function renderSkill(name) {
  const panel = document.querySelector('#skill-panel');
  const skill = skills[name];
  panel.innerHTML = `
    <div class="skill-panel-copy">
      <p class="panel-kicker">${name}</p>
      <h3>${skill.title}</h3>
      <p>${skill.text}</p>
    </div>
    <ul class="skill-list">${skill.items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

document.querySelectorAll('.skill-tab').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.skill-tab').forEach((tab) => {
      tab.classList.remove('is-active');
      tab.setAttribute('aria-selected', 'false');
    });
    button.classList.add('is-active');
    button.setAttribute('aria-selected', 'true');
    renderSkill(button.dataset.skill);
  });
});

renderSkill('Web');

function addClickFeedback() {
  const interactiveElements = document.querySelectorAll(
    '.button, .skill-tab, .card-link, .text-link, .lab-card a'
  );

  interactiveElements.forEach((element) => {
    element.addEventListener('click', (event) => {
      const ripple = document.createElement('span');
      const rect = element.getBoundingClientRect();

      ripple.className = 'ripple';
      ripple.style.left = `${event.clientX - rect.left}px`;
      ripple.style.top = `${event.clientY - rect.top}px`;

      element.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });
}

addClickFeedback();

function initializeProjectModal() {
  const modal = document.querySelector('.project-modal');
  const content = document.querySelector('#modal-content');
  const closeButton = document.querySelector('.modal-close');

  if (!modal || !content || !closeButton) {
    return;
  }

  document.querySelectorAll('[data-project]').forEach((button) => {
    button.addEventListener('click', () => {
      const project = projects[button.dataset.project];

      if (!project) {
        return;
      }

      content.innerHTML = `
        <h2 id="modal-title">${project.title}</h2>
        <p class="modal-description">${project.description}</p>
        <h3>O que o projeto demonstra</h3>
        <ul class="modal-highlights">
          ${project.highlights.map((item) => `<li>${item}</li>`).join('')}
        </ul>
        <div class="modal-actions">
          ${project.demo ? `<a class="button button-primary" href="${project.demo}" target="_blank" rel="noopener noreferrer">Acessar projeto <i class="bi bi-box-arrow-up-right"></i></a>` : ''}
          <a class="button button-secondary" href="${project.repository}" target="_blank" rel="noopener noreferrer">Ver código <i class="bi bi-github"></i></a>
        </div>`;

      document.querySelector('#modal-label').textContent = project.label;
      modal.showModal();
    });
  });

  closeButton.addEventListener('click', () => modal.close());

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
}

initializeProjectModal();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
