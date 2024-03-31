//Menu hamburguer
const menuCheckbox = document.getElementById('menu');
const menuLinks = document.querySelector('.menu__links ul');

menuCheckbox.addEventListener('change', function () {
    if (menuCheckbox.checked) {
        menuLinks.classList.add('active');
    } else {
        menuLinks.classList.remove('active');
    }
});

// aplicar o sintaxe highligth
const linguagem = document.getElementById('select-linguagem')
const areaDoCodigo = document.getElementById('codigo')
const btnVisualizar = document.querySelector(".botaoVisualizarHighlight")
const btnVisualizar2 = document.getElementById('btn_visualizar')

function aplicarHighlight() {
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

btnVisualizar.addEventListener('click', () => {
    aplicarHighlight()
})

btnVisualizar2.addEventListener('click', () => {
    aplicarHighlight()
})

const btnSalvarProjeto = document.getElementById('salvarProjeto')

//Salvar Projeto
btnSalvarProjeto.addEventListener('click', function salvarProjeto() {
    const divCodigo = document.getElementById('codigo')
    const inputCor = document.getElementById('inputCor').value
    divCodigo.style.backgroundColor = inputCor
    const nome = document.querySelector(".input-nome").value
    const descricaoProjeto = document.querySelector(".input-descricao").value
    const codigoProjeto = document.querySelector('code').innerHTML

    const informacoesCard = {
        codigo: codigoProjeto,
        tituloProjeto: nome,
        descricaoDoProjeto: descricaoProjeto,
        cor: inputCor
    };

    // Gerar uma chave única para cada card
    const timestamp = new Date().getTime();
    const chave = `Card_${timestamp}`;

    localStorage.setItem(chave, JSON.stringify(informacoesCard));

    // Chamar a função criarCard() para criar um novo card
    criarCard(informacoesCard);

})

//alerta de projeto salvo
const meuAlerta = document.getElementById('meuAlerta');
const fecharAlerta = document.getElementById('fecharAlerta');

btnSalvarProjeto.addEventListener('click', function () {
    meuAlerta.style.display = 'block';
});

fecharAlerta.addEventListener('click', function () {
    meuAlerta.style.display = 'none';
});
