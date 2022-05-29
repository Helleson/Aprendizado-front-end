  let lis = document.getElementById('lista')
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
    //lis.sorte()
    n = Number(lis.length.value)
    let res = document.getElementById('res')
    let kel = document.getElementById('kel')
    res.innerHTML = `Ao todo temos ${lis.length} números cadastrados.`
    kel.innerHTML+= lis[n-1]


}
   