// let listaDeNumerosSorteador = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextonaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextonaTela('h1', 'Jogo do Número Secreto:');
    exibirTextonaTela('p', 'Descubra o número secreto entre 1 e 10.');
}
function verificarChute() {
    let chute = document.querySelector('input').value;
exibirMensagemInicial();

    if (chute == numeroSecreto) {
        exibirTextonaTela('h1', 'Você acertou o número secreto!');
        let tentativasTexto = tentativas > 1 ? ' tentativas.' : ' tentativa.';
        exibirTextonaTela('p', 'Você acertou o número secreto ' + numeroSecreto + ' em ' + tentativas + tentativasTexto);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else if (chute < numeroSecreto) {
        exibirTextonaTela('h1', 'Você errou o número secreto.');
        exibirTextonaTela('p', 'O número secreto é maior que ' + chute + '. Tente novamente!');
    } else {
        exibirTextonaTela('h1', 'Você errou o número secreto.');
        exibirTextonaTela('p', 'O número secreto é menor que ' + chute + '. Tente novamente!');
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = Math.floor(Math.random() * 10) + 1;
    let quantidadeDeElementosNaLista = listaDeNumerosSorteador.length;
    if (quantidadeDeElementosNaLista >= 10) {
        exibirTextonaTela('h1', 'Todos os números já foram sorteados!');
        return;
    }
    if (listaDeNumerosSorteador.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }   else {
        listaDeNumerosSorteador.push(numeroEscolhido);
        console.log(listaDeNumerosSorteador)
        return numeroEscolhido;
    }
}
function limparcampo() {
    document.querySelector('input').value = '';
}
document.querySelector('button').addEventListener('click', function() {
    verificarChute();
    tentativas++;
    document.querySelector('input').value = '';
});
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();
    document.querySelector('input').value = '';
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

// Exibe a mensagem inicial ao carregar o script
// let listaDeNumerosSorteador = [];
// let numeroSecreto = gerarNumeroAleatorio();
// let tentativas = 1;

function exibirTextonaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextonaTela('h1', 'Jogo do Número Secreto:');
    exibirTextonaTela('p', 'Descubra o número secreto entre 1 e 10.');
}
function verificarChute() {
    let chute = document.querySelector('input').value;
exibirMensagemInicial();

    if (chute == numeroSecreto) {
        exibirTextonaTela('h1', 'Você acertou o número secreto!');
        let tentativasTexto = tentativas > 1 ? ' tentativas.' : ' tentativa.';
        exibirTextonaTela('p', 'Você acertou o número secreto ' + numeroSecreto + ' em ' + tentativas + tentativasTexto);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else if (chute < numeroSecreto) {
        exibirTextonaTela('h1', 'Você errou o número secreto.');
        exibirTextonaTela('p', 'O número secreto é maior que ' + chute + '. Tente novamente!');
    } else {
        exibirTextonaTela('h1', 'Você errou o número secreto.');
        exibirTextonaTela('p', 'O número secreto é menor que ' + chute + '. Tente novamente!');
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = Math.floor(Math.random() * 10) + 1;
    let quantidadeDeElementosNaLista = listaDeNumerosSorteador.length;
    if (quantidadeDeElementosNaLista >= 10) {
        exibirTextonaTela('h1', 'Todos os números já foram sorteados!');
        return;
    }
    if (listaDeNumerosSorteador.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }   else {
        listaDeNumerosSorteador.push(numeroEscolhido);
        console.log(listaDeNumerosSorteador)
        return numeroEscolhido;
    }
}
function limparcampo() {
    document.querySelector('input').value = '';
}
document.querySelector('button').addEventListener('click', function() {
    verificarChute();
    tentativas++;
    document.querySelector('input').value = '';
});
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();
    document.querySelector('input').value = '';
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

// Exibe a mensagem inicial ao carregar o script
exibirMensagemInicial();