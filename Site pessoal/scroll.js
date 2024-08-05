window.sr = ScrollReveal({ reset: true });

sr.reveal('.Ala-Eu', {
    duration: 1000,
    distance: '100px',
    origin: 'top'
});

sr.reveal('.projetos', {
    duration: 1000,
    distance: '100px',
    origin: 'top'
});

var menuItem = document.querySelectorAll('.item-menu');

<div class="habilidades">
<div class="caixas">
    <div class="Imagem-habilidade" onclick="toggleText(this)">
        <img src="img/Css-icon.png" alt="Habilidade CSS">
        <p class="texto-habilidade">
            Usei minhas habilidades em CSS para criar layouts responsivos e estilizar diversos componentes em vários projetos.
        </p>
    </div>
    <div class="Imagem-habilidade" onclick="toggleText(this)">
        <img src="img\HTML.png" alt="Habilidade HTML">
        <p class="texto-habilidade">
            Usei minhas habilidades em HTML para estruturar conteúdo de maneira semântica e acessível em vários projetos.
        </p>
    </div>
    <div class="Imagem-habilidade" onclick="toggleText(this)">
        <img src="img\JS.png" alt="Habilidade JavaScript">
        <p class="texto-habilidade">
            Usei minhas habilidades em JavaScript para adicionar interatividade e dinamismo em diversas aplicações web.
        </p>
    </div>
    <div class="Imagem-habilidade" onclick="toggleText(this)">
        <img src="img\Python.png" alt="Habilidade Python">
        <p class="texto-habilidade">
            Usei minhas habilidades em Python para construir interfaces de usuário reutilizáveis e eficientes em projetos web.
        </p>
    </div>
</div>
</div>