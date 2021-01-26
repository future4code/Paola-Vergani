//a) Declare uma variável para armazenar um nome, sem atribuir um valor.
const nome = ""

//b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
let idade = 

//c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
console.log(typeof nome);
console.log(typeof idade);

//d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
// devido as aspas o js entende que se trata de um string
// como não foi atribuido nenhum numero real, o js entende que é undefined

//d) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
//const dados = prompt("Qual seu nome e sua idade?")
const name = "Ricardo"
let old = 13
console.log(typeof name);
console.log(typeof old);

//e) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
// devido as aspas o js permanece string
// como foi atribuido nenhum numero real, o js entende que é number

// f) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu
console.log("Olá ",name , "você tem ", 13, " anos")

//2) Faça um programa que faça 5 perguntas para o usuário (pode ser criativo aqui). 
//Imprima-as com as respostas no console da seguinte forma:

console.log("Em qual escola você estuda?")
const escola = "LABENU"
console.log("resposta: ", escola)

console.log("Em qual módulo?")
const modulo = 1
console.log("resposta: ", modulo)

console.log("Quais são seus professores?")
const array = ["Bruno", "Amanda", "Severo", "Thais", "Chijo"]
console.log("resposta: ", array)

console.log("Quais dos seus professores são mulheres?")
const arrayMulheres = ["Bruno", "Amanda", "Severo", "Thais", "Chijo"]
console.log("resposta: ", arrayMulheres[1], arrayMulheres[3], arrayMulheres[4])

console.log("O professor ", array[0] ,"tem 22 anos?")
let idadeDoBruno = (1)
console.log("resposta: ", idadeDoBruno)

//3) Faça um programa que contenha um array com 5 das suas comidas preferidas, 
//armazenado em uma variável. Em seguida, siga os passos:

//a) Imprima na tela o array completo
let arrayComidas = ["pão", "uva", "contra", "iogurte", "café"]
console.log(arrayComidas)

//b) Imprima na tela a 
//mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.
console.log("Essas são minhas comidas preferidas")
console.log(arrayComidas[0]) 
console.log(arrayComidas[1]) 
console.log(arrayComidas[2]) 
console.log(arrayComidas[3]) 
console.log(arrayComidas[4]) 

//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
//Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista
console.log("Ricardo, qual a sua comida preferida?")
let arrayComidaRicardo = ["pão", "uva", "chocolate", "iogurte", "café"]
console.log(arrayComidaRicardo)
console.log("resposta: Minha comida preferida é ", arrayComidaRicardo[2])

//4) Faça um programa que contenha um array com 3 perguntas de Sim ou Não, armazenado em uma variável. 
//Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

let arrayRicardoBrincadeiras = ["futebol", "PSP", "skate", "bike"]
console.log("O Ricardo gosta de ", arrayRicardoBrincadeiras[3], "?")
arrayRicardoBrincadeiras = (1)
console.log(arrayRicardoBrincadeiras[3]); 

//não consegui fazer o booleano