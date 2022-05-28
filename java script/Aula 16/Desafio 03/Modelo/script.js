function analise(){
    let num = document.getElementById('num')
    let lis = document.getElementById('lista')
    let n = Number(num.value)
    if(n<1 || n>100){
        alert('Não pode')
    }else{
        
        let item = document.createElement('option')
        item.text = `O número ${n} foi adicionado `
        item.value = `lis${n}`
        lis.appendChild(item)

    }
    
}
function final(){
    let res = document.getElementById('res')
        res.innerHTML= item.length
}
   