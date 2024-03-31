//função de criar card
function criarCard(informacoesCard) {
    const listaDeProjetos = document.querySelector(".listaDeProjetos");

    const card = document.createElement('section');
    card.classList.add("sessaoCodigoProjeto");
    card.innerHTML = `
        <div class="div_codigoProjeto">
            <pre class="pre-code">
                <code class="code-codigo">${informacoesCard.codigo}</code>
            </pre>
        </div>
        <div class="informacoesProjeto">
            <h2>${informacoesCard.tituloProjeto}</h2>
            <p>${informacoesCard.descricaoDoProjeto}</p>
        </div>
        <div class="icones-usuario">
            <div class="icones">
                <span><img src="./imagens/Vector (1).png" alt="icone de curtidas"> 9</span>
                <span><img src="./imagens/Vector.png" alt="icone de comentarios"> 9</span>
            </div>
            <div class="icone-usuario">
                <span><img src="./imagens/Photo.png" alt="foto de usuario"></span>
                <p>@Harry</p>
            </div>
        </div>`;

    listaDeProjetos.appendChild(card);

    const areaCor = card.querySelector(".div_codigoProjeto")
    areaCor.style.backgroundColor = informacoesCard.cor
}

// Recuperar todos os cards salvos no localStorage e criar cards para cada um deles
for (let i = 0; i < localStorage.length; i++) {
    const chave = localStorage.key(i);
    if (chave.startsWith('Card_')) {
        const informacoesCard = JSON.parse(localStorage.getItem(chave));
        criarCard(informacoesCard);
    }
}
