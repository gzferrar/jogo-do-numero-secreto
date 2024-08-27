let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;   
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p',`Escolha um número entra 1 e ${numeroLimite}`);}


function gerarNumeroAleatorio(){
    let numeroEscolido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
   
   
    //includes = testa se o número existe no Array
    if (listaDeNumerosSorteados.includes(numeroEscolido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolido);    
        console.log(listaDeNumerosSorteados);   
        return numeroEscolido;
    }
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1',"Acertou");
        let palavraTentaviva = tentativas > 1 ? "tentativas" : "tentavia";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentaviva}`;
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');

    }else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','Número secreto é menor!')
        }else{
            exibirTextoNaTela('p','Número secreto é maior!')
        }
        tentativas++;
        limparCampo();

    }
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}



exibirMensagemInicial();