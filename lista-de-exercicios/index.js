/*  Analise os trechos de código em cada exercício e escreva o que ele faz, 
como faz e qual será o valor impresso no console.*/

/* 1) esta é uma função nomeada que converte dolar em real. Vai aparecer a mensagem para o usuário colocar o valor da 
cotação do dolar e depois vai retornar no console R$ e o valor em reais, neste caso o valor da cotação por 100

2) função nomeada que identifica o tipo de investimento e o valor de rendimento 
para cada tipo de investimento usando o switch case onde dentro dos parenteses vai a varável 
que está se comparando e os cases indicam as condições;
se a variável for igual ao que está no case, a função deve ser executada. A palavra break separa os blocos
no final o console log informa o resultado de cada aplicação e caso seja escolhida uma aplicação 
que não está descrita em case, aparece a frase: tipo de investimento informado incorreto.
novo montante é o resultado de aplicação de 150,00 em ações (1.1 vezes 150 que dá 165)

3) o array serve para guardar informações de forma ordenada.
usamos o lenght para descobrir o tamanho do array desta forma o console.log numeros.length irá retornar a 
quantidade de elementos daquele array, neste caso 14 elementos
o push adiciona elementos no final do array. 
na função se if elemento dividido por 2 for igual a true ou else que vai dar false
no console.log o array1 resulta em 6 elementos true e no array2 resulta 8 elementos false do array

4) nesta função queremos descobrir o elemento numero dentro do array numeros que seja o menor numero do array e o maior
neste caso foi realizado o for of e o maior que e menor que e as respostas são numero1 = -10 e numero2 = 1590 */

//Exercícios de Lógica de Programação]

//1. Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar.
//forEach - map e filter
/* 
2. Para este exercício considere as seguintes variáveis:

    const booleano1 = true
    const booleano2 = false
    const booleano3 = !booleano2 
    const booleano4 = !booleano3 

    Sem rodar nenhum código, diga quais são os valores das expressões lógicas abaixo:

    a) booleano1 && booleano2 && !booleano4 ------resposta: false

    b) (booleano1 && booleano2) || !booleano3 ------resposta:  true

    c)  (booleano2 || booleano3) && (booleano4 || booleano1) ------resposta:  true

    d) !(booleano2 && booleano3) || !(booleano1 && booleano3) ------resposta: true

    e) !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3) ------resposta:  true */
/* 
    3. Você tem que escrever um código que, dado um número **N**, ele imprima (no `console`) os **N** primeiros 
    números pares (por exemplo, se **N** for 3, você deve imprimir 0, 2 e 4; se **N** for 5, deve imprimir 0, 2, 4, 6 e 8).  Um colega seu disse que já começou esta tarefa, mas não conseguiu terminar. Dê uma olhada no código dele:

    const quantidadeDeNumerosPares
    let i = 0
    while(i <= quantidadeDeNumerosPares) {
      console.log(i*2)
    }

    Este código funciona? Por quê? Caso não funcione, corrija a implementação dele. */

   /*  4. Vocês lembram de trigonometria? ~~(Oh, não, trigonometria)~~. Relaxem. 
    O exercício é simples, mas mexe com isso. Veja bem: quando nos ensinam triângulos (uma figura de três lados), 
    nós aprendemos como classifica-los dependendo do tamanho de seus lados. Se um triângulo possuir os **três lados 
    iguais**, ele é chamado de "Equilátero". Se possuir, **dois (e somente 2) lados iguais**, 
    diz-se que ele é "Isósceles". Se os **três lados tiverem medidas diferentes**, ele é "Escaleno". 
    Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: `a, b, c`  
    e retorne se ele é equilátero, isósceles ou escaleno. */
/* 
     const valorA = Number(prompt("Informe o lado A do triângulo")); 
     const valorB = Number(prompt("Informe o lado B do triângulo"));
     const valorC = Number(prompt("Informe o lado C do triângulo"));

     function triangulo(a,b,c){    
            
        if (a === b && b === c ) {
            console.log("Equilatero");   
                   
        } else if (a === b || a === c || b === c) {
            console.log("Isosceles");  
                          
        } else if (a !== b || b !== c) {             
             console.log("Escaleno");
        } else {

        }
    }     
        triangulo(valorA, valorB, valorC)   */         


/*     5. Faça um programa que, dados dois números,

    i. indique qual é o maior,

    ii. determine se eles são divisíveis um pelo outro (use o operador `%`) e

    iii. determine a diferença entre eles (o resultado deve ser um número positivo sempre)
 */

/* const a = 80
const b = 40

const numeroMaior = a > b
const divisao = a % b
const diferenca = a - b

console.log("O maior é", numeroMaior);
console.log("são divisíveis", divisao);
console.log("A diferença entre eles é", diferenca); */




