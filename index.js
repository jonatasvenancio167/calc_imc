function calc_imc(event){
    
    event.preventDefault()
    
    var peso = document.querySelector("#peso").value
    var altura = document.querySelector("#altura").value
    var resultado = document.querySelector("#total")
    var total
    
    total = peso / Math.pow(altura, 2)
    
    if(total < 18.5){
        resultado.innerHTML = `O seu IMC é: ${total}. Cuidado, você está abaixo o peso`
    }
    else if(total >= 18.5 && total <= 24.9){
        resultado.innerHTML = `O seu IMC é: ${total}. Você está com o seu peso normal`
    }
    else if(total >= 25 && total <= 29.9){
        resultado.innerHTML = `O seu IMC é: ${total}. Você está com sobrepeso`
    }
    else if(total >= 30 && total <= 34.9){
        resultado.innerHTML = `O seu IMC é: ${total}. Cuidado, você está com obesidade grau 1`
    }
    else if(total >= 35 && total <= 39.9){
        resultado.innerHTML = `O seu IMC é: ${total}. Cuidado, você está com obesidade grau 2`
    }
    else if(total >= 40){
        resultado.innerHTML = `O seu IMC é: ${total}. Cuidado, você está com obesidade grau 3`
    }
    show_result()
}

function show_result(){
    var peso = document.querySelector('#peso').value
    var altura = document.querySelector("#altura").value
    if(peso == '' && altura == ''){
        document.querySelector("#result").style.display = "none";
    }
    else{
        document.querySelector("#result").style.display = "block"
    }
}

function input_number(){
    
}

