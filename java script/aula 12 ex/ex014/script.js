function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 


msg.innerHTML= `Agora são ${hora} horas.`
if(hora>= 0 && hora < 12){
    //BOM DIA!
     document.body.style.background= '#ead2ab'
    img.src = 'manha.png'
   
}else if(hora >=12 && hora <= 18){
    //BOA TARDE
    document.body.style.background= '#f7b24f'
    img.src = 'Tarde.png'
}else{
    //BOA NOITE
    img.src = 'noite.png'
    document.body.style.background= '#060000'
}
}