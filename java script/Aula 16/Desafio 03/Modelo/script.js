   let num = document.querySelector('input#num')
   let lista = document.querySelector('select#lista')
   let res = document.querySelector('div#res')
   let valores = []
   

   function isNumero(n){
       if(Number(n)>= 1 && Number(n)<=100){
           return true
       }else{
           return false
       }

   }

   function inLista(n, l){
       if(l.indexOf(Number(n)) != -1){
           return true
       }else{
           return false
       }

   }

   function adicionar(){
       if(isNumero(num.value) && !inLista(num.value, valores)){
       valores.push(Number(num.value))
       let n = Number(num.value)
       let item = document.createElement('option')
       item.text = `Valor ${n} adicionado `
       item.value = `lis${n}`
       lista.appendChild(item)
      

       }else{
           window.alert('Valor inválido ou ja encontrado na lista.')
       }
   }
   function final(){
       let num = document.getElementById('num')
       let n = Number(num.value)
       let res = document.getElementById('res')  
       let kel = document.getElementById('kel')  
       res.innerHTML = `Ao todo temos ${valores.length} números cadastrados.`
       
 
        kel.innerHTML = `O maior valor informado foi ${max.valores}`
`
       
        
        
        
        

   }

    






   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   /*let lis = document.getElementById('lista')
    
    function analise(){
   let num = document.getElementById('num')
     let n = Number(num.value)
    
    if(n<1 || n>100 ){
        alert('Valor invalido ou já encontrado na lista!')
    }else{
      
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado `
         
         item.value = `lis${n}`
       
        lis.appendChild(item)
         

    }
    
}
function final(){
    let num = document.getElementById('num')
     let n = Number(num.value)
    
    let res = document.getElementById('res')
    let kel = document.getElementById('kel')
    res.innerHTML = `Ao todo temos ${lis.length} números cadastrados.`
    
    kel.innerHTML += analise(n)


}*/
   