function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `

    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)


    container.appendChild(cartao)

}
criaCartao(
    'Programação',
    'O que é Python?',
    'O Python é uma linguagem de programação'
)

criaCartao(
    'Geografia',
    'Qual a capital da França?',
    'A capital da França é Paris'
)

criaCartao(
    'Programação',
    'O que é uma função?',
    'Uma função é um bloco de código que executa alguma tarefa'
)

criaCartao(
    'Lingua inglesa',
    'Como se diz oi em Inglês?',
    'Oi em ingles é HI (RAI)'
)