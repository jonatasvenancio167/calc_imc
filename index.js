function calc_imc(event){
    
    event.preventDefault()
    
    var peso = document.querySelector("#peso").value
    var altura = document.querySelector("#altura").value
    var resultado = document.querySelector("#total")
    var total
    
    total = (peso / Math.pow(altura, 2)).toFixed(2)
    
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
    var campo = document.querySelector('#result')

    if(peso == '' && altura == ''){
        campo.style.display = "none";
    }
    else if(peso == ''){
        campo.style.display = "none";
        alert('Insira o seu peso para calcular o IMC')
    }
    else if(altura == ''){
        campo.style.display = "none";
        alert('Insira a sua altura para calcular o IMC')
    }
    else{
        campo.style.display = "block"
    }
}

function input_number(num){
    var number = /[^0-9.]/
    var campo = num

    var alert = document.querySelector("#result")
    var aviso = document.querySelector("#total")
    number.lastIndex = 0
    if(number.test(campo.value)){
        alert.style.display = 'block'
        alert.style.backgroundColor = "#D9534F"
        alert.style.color = "rgb(126, 44, 44)"
        aviso.innerHTML = "Insira um valor número"
    }
    else{
        alert.style.backgroundColor = "#3EEB88"
        alert.style.color = "rgb(30, 116, 33)"
        aviso.innerHTML = ''
    }
}
