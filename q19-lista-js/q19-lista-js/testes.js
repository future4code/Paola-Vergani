
const isObject = (obj) => typeof obj === 'object' && obj !== null && !Array.isArray(obj)

const objectCompare = (obj1, obj2) => {
  if(!obj1 || !obj2 ){
    return false
  }
  if(Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false
  }
  for(let property in obj1) {
    if(Array.isArray(obj1[property])) {
      return arrayCompare(obj1[property], obj2[property])
    } else if (obj1[property] !== obj2[property]) {
      return false
    }
  }
  return true
}

const arrayCompare = (arr1, arr2) => {
  if(!arr1 || !arr2 ){
    return false
  }
  if(arr1.length !== arr2.length) {
    return false
  }
  for(let i = 0; i < arr1.length; i++) {
    if (isObject(arr1[i])) {
      return objectCompare(arr1[i], arr2[i])
    } else if (arr1[i] !== arr2[i]) {
        return false
      }
    }
  return true
}




// Teste exercício 19 - A

function testEx19A() {
  const output = [
    { nome: "João", dataDaConsulta: "01/10/2021" },
    { nome: "Márcia", dataDaConsulta: "04/05/2021" },
    { nome: "Paula", dataDaConsulta: "03/11/2021" },
    { nome: "Pedro", dataDaConsulta: "02/07/2021" }
  ]

  if(arrayCompare(ordenaPorNome(), output)) {
    console.log('%c Você acertou a questão número 19A', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 19A', 'color: #CD0000')
  }
}

testEx19A();

// Teste exercício 19 - B

function testEx19B() {
  const output = [
    { nome: "Márcia", dataDaConsulta: "04/05/2021" },
    { nome: "Pedro", dataDaConsulta: "02/07/2021" },
    { nome: "João",  dataDaConsulta: "01/10/2021" },
    { nome: "Paula", dataDaConsulta: "03/11/2021" }
  ];

  if(arrayCompare(ordenaPorData(), output)) {
    console.log('%c Você acertou a questão número 19B', 'color: #00FF00')
  } else {
    console.log('%c Você errou a questão número 19B', 'color: #CD0000')
  }
}

testEx19B();