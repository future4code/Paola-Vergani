let continuar = true

while (continuar) { 
    const vitrine = prompt("Qual tipo de produto deseja ver: alimentos ou brinquedos?").toLowerCase ()    
      
        let alimentos = ["arroz, feijão, batata"]
        let brinquedos = ["bola, boneca, pipa"]       

        switch(vitrine){
            case "alimentos":
                console.log(alimentos)
                break
            case "brinquedos":
                console.log(brinquedos)
                break
            default :
                console.log("Produto não encontrado")       
            };  
     
    const comprar = prompt("Qual item da lista deseja comprar?").toLowerCase () 

        switch(comprar){
            case "arroz":
            console.log("Compra efetuada com sucesso")
            break
            case "feijão":
            console.log("Compra efetuada com sucesso")
            break
            case "batata":
            console.log("Compra efetuada com sucesso")
            break               
            case "bola":
            console.log("Compra efetuada com sucesso")
            break 
            case "boneca":
            console.log("Compra efetuada com sucesso")
            break 
            case "pipa":
            console.log("Compra efetuada com sucesso")
            break 
            default :
                console.log("Produto não encontrado")   
            };  
                                         
    continuar = confirm("Deseja continuar?")             
}   
                  
    





