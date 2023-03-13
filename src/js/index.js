const carrossel = document.querySelector('.carrossel');
const botoes = document.querySelectorAll('.botao');

botoes.forEach((botao, indice) => {
  botao.addEventListener('click', () => {
    desativarBotaoSelecionado();
    selecionarBotao(botao);
    mostrarImagem(indice);
  });
});

function selecionarBotao(botao) {
  botao.classList.add('selecionado');
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector('.selecionado');
  if (botaoSelecionado) {
    botaoSelecionado.classList.remove('selecionado');
  }
}

function mostrarImagem(indice) {
  const imagens = carrossel.querySelectorAll('.imagem');
  const imagemAtiva = carrossel.querySelector('.imagem.ativa');
  if (imagemAtiva) {
    imagemAtiva.classList.remove('ativa');
  }
  imagens[indice].classList.add('ativa');
}
