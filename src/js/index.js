//passo 1
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

//passo 2
btnAvancar.addEventListener("click", function (){
if (cartaoAtual === cartoes.length - 1) return;

//passo 4
const cartaoSelecionado = document.querySelector(".selecionado");
cartaoSelecionado.classList.remove("selecionado")


//passo 3
cartaoAtual++;
cartoes[cartaoAtual].classList.add("selecionado");

});

//passo 1  feito no começo

//passo 2
btnVoltar.addEventListener("click", function (){
    if (cartaoAtual === 0) return;
    
//passo 4
const cartaoSelecionado = document.querySelector(".selecionado");
cartaoSelecionado.classList.remove("selecionado")

//passo 3
cartaoAtual--;
cartoes[cartaoAtual].classList.add("selecionado");

    
    });

