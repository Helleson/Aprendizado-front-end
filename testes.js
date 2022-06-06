function trocaVogais(arroz) {
  let novaString = "";

  for (let i = 0; i < arroz.length; i++) {
    let caractere = arroz[i];
    
    if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
      novaString += "1";
    } else {
      novaString += caractere;
    }
  }

  console.log(novaString) ;
}












/*function trocaVogais(arroz) {
  let n = "";
  for(let i = 0; i <arroz.length; i++){
      let parte = arroz[];
  }if(parte=== 'a' || parte === 'e' || parte=== 'i' || parte === 'o' || parte=== 'u'){
      n += '1'
  }else{
      n+= parte
  }
  return n

*/
