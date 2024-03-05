
let listaDeNumeroSortedo = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
function exibiNumeroNaTela(){
exibirTextoNaTela('h1', 'jogo do número secreto');
exibirTextoNaTela('p', 'escolha um número entre 1 e 10');
}

exibiNumeroNaTela();

function verificarChute(){
let chute = document.querySelector('input').value;
if (chute == numeroSecreto){
exibirTextoNaTela('h1', 'Acertou!');
let palavrasTentativas = tentativas > 1 ? 'tentativas': 'tentativa';
let mostraTentativas = (`Você descobriu o número secreto com ${tentativas}
${palavrasTentativas} `)
exibirTextoNaTela('p', mostraTentativas);
document.getElementById('reiniciar').removeAttribute('disabled');
} else {
if (chute > numeroSecreto){
exibirTextoNaTela('p','O numero é menor');
}
else {
exibirTextoNaTela('p','O numero é maior' );
}
tentativas++
limparCampo();

}
}
function gerarNumeroAleatorio(){
let numeroSortedo = parseInt(Math.random() * 10 + 1);
let quantidadeDeNumerosNaLista = listaDeNumeroSortedo.length;
if (quantidadeDeNumerosNaLista == 10){
listaDeNumeroSortedo = [];
}
if (listaDeNumeroSortedo.includes(numeroSortedo)) {
return gerarNumeroAleatorio();
} else {
listaDeNumeroSortedo.push(numeroSortedo);
console.log(numeroSortedo)
return numeroSortedo;
}
}
function limparCampo(){
chute = document.querySelector('input');
chute.value = '';
}
function reiniciarJogo(){
numeroSecreto = gerarNumeroAleatorio();
limparCampo();
tentativas = 1;
exibiNumeroNaTela();
}