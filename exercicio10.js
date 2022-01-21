var nome = prompt("Digite seu nome : ")

var valorSecreto = 7

var minimo = 2
var maximo = 10

var espaco = ("<p>------------------------------------------------------------</p>")

var acerto = ("<p>"+nome+" você acertou!!!</p>")

var erro = (nome+" você errou!!!")

var contadorA = 0

var valor = prompt("Digite um número entre "+minimo+" e "+maximo+" : ")

for(contadorA=1; contadorA<4; contadorA++){

    if(valor == valorSecreto){
        document.write(espaco)
        document.write(acerto+" O número correto é 7.")
        document.write(espaco)
        contadorA=999

    }

    else{
        minimo++
        maximo--


        alert(erro)
        var valor = prompt("Digite um número entre "+minimo+" e "+maximo+" : ")
    }
}

if(contadorA >= 4){
    document.write(espaco)
    document.write("<p>"+erro+" O número correto é 7.</p>")
    document.write(espaco)
}
