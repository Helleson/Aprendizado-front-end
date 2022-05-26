function contar(){
    var inicio = window.document.getElementById('in')
    var fn = window.document.getElementById('fim')
    var passo = window.document.getElementById('pas')
    var res = window.document.getElementById('res')
    var n1 = Number(inicio.value)
    var n2 = Number(fn.value)
    var n3 = Number(passo.value)
    if(n1<=0 || n2<=0){
        res.innerHTML = 'Impossivel contar!'
    }else if(n3<=0){
        alert('Passo Inválido! Considerando passo 1')
                
    }
    else{
        res.innerHTML = "contando: "
        if(n1 < n2 ){
            //contagem crescente
    for(var c = n1; c <= n2; c+=n3){
        res.innerHTML+= `${c} \u{1F449} `
        }
    res.innerHTML+= `\u{1F3C1}`
    }else{
        //contagem regressiva
        for(var c = n1; c >= n2; c-=n3)
        res.innerHTML+= ` ${c} \u{1F449}`
    }
    res.innerHTML+= `\u{1F3C1}`
    }
}

        
    

    //

         
    
     
          
           
        
    
        
    


       
