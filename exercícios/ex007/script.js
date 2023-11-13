// Botao e elemento
const Botao = document.getElementById('Botao');
const mensagemElement = document.getElementById('mensagem')

Botao.addEventListener('click', function () {

mensagemElement.textContent= 'O botão foi clicado, verme!';

});