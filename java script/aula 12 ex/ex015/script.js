function verificar(){
    var data = new Date
    var ano = data.getFullYear
    var fano = document.getElementById('txano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] verifique os dados e tente novamente')
    }else{
        alert('tudo ok')
    }
}