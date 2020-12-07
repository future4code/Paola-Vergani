function adicionarTarefa() {
    const minhaTarefa = document.getElementById("tarefa")
    const diaSemana = document.getElementById("dias-semana")
    const apagarTarefa = document.getElementById("limpar-tarefa")
    
    if (minhaTarefa.value !== "") {
      const dia = document.getElementById(diaSemana.value)
      dia.innerHTML += `<li>${minhaTarefa.value}</li>`       
      
      minhaTarefa.value = "" 
            
   }  else {
      alert("Digite uma tarefa!")
   }   
}
