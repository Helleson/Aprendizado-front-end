
function imc() {
        var tn1 = window.document.getElementById('txtn1')
        var tn2 = window.document.getElementById('txtn2')
        var cal = window.document.getElementById('cal')
        var res =  window.document.getElementById('res')
        var n1 = Number(tn1.value)
        var n2 = Number(tn2.value)
        n1.toFixed().replace('.',',')
        n2.toFixed().replace('.',',')
        var imc = (n1/(n2**2))
        var num = (n1/(n2**2))//<=25?'Parabéns, você esta saudavel!!!': 'você esta a cima do peso, tente fazer exercicios.'
        res.innerHTML = 'Você esta saudavel'
        cal.innerHTML= `Seu IMC é ${imc}`
        if(num<=25 && num > 14){
            //cal.innerHTML += 'Você esta saudavel'
            res.innerHTML= 'você esta saudavel'
        }else{
            res.innerHTML = 'Voce esta fora do seu peso ideal procuere um nutricionista.'
        }

        
       
        
        }
       
        










        //var peso = window.prompt('insira seu peso:')
        //var altura = window.prompt//('insira sua altura')
        //var imc = (`${peso/(altura**2)}`)
        //window.document.write(`Seu imc //é ${imc}`)