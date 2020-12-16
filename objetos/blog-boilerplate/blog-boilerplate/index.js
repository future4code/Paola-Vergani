function criarPost() {
    const tituloPost = document.getElementById("titulo-post")
    const autorPost = document.getElementById("autor-post")
    const conteudoPost = document.getElementById("conteudo-post")

    let blog = {
        titulo: tituloPost.value,
        autor: autorPost.value,
        conteudo: conteudoPost.value,
    }

     if(criarPost.value !== "") {
         let arrayPost= [(blog)]
         console.log(arrayPost)  
      
         criarPost.value = ""
    } else {     

    }    
    
}         
function inserirContainer() {
    const container = document.getElementById("container-de-posts")
    container.innerHTML = ""
}



        

 