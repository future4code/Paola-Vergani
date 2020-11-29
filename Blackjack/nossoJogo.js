 console.log("Bem vindo ao jogo de Blackjack!")

 if (confirm ("Quer iniciar uma nova rodada?")) {
       } else {
         prompt("O jogo acabou!") 
      }
          
const cartaUsuario1 = comprarCarta();
const cartaUsuario2 = comprarCarta();
const cartaComputador1 = comprarCarta();
const cartaComputador2 = comprarCarta();

const pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor;
const pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor;

console.log("Usuário -", cartaUsuario1.texto, cartaUsuario2.texto, "- pontuação", pontuacaoUsuario)

console.log("Computador -", cartaComputador1.texto, cartaComputador2.texto, "- pontuação", pontuacaoComputador)

let computador = pontuacaoComputador > pontuacaoUsuario
let usuario = pontuacaoComputador < pontuacaoUsuario
let empate = pontuacaoComputador === pontuacaoUsuario 

if (computador) {
    console.log("O Computador ganhou!")
   } else if (usuario) {
      console.log("O Usuario ganhou!")
   } else if (empate) {
      console.log("Empatou!")
   } 

   //DESAFIO






