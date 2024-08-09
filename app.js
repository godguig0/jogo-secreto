let listaDeNumerosSorteados = []
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', "Parabéns! Você acertou. Muito bom! ");
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `você descobriu o número com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'o número é menor');
    } else {
      exibirTextoNaTela('p', 'o número é maior');
    }
    tentativas++;
    limparCampo();
  }
}


function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Male', {rate:1.2});
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Bem-vindo ao jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número de 1 a 100');
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  }
  else {
    listaDeNumerosSorteados.push(numeroEscolhido)
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}
