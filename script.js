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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
