var nome = prompt("Digite seu nome : ")

var valorSecreto = 7
var minimo = 2
var maximo = 10

var valor = prompt("Digite um número")

var espaco = ("<p>------------------------------------------------------------</p>")

var acerto = ("<p>"+nome+" você acertou!!!</p>")
var erro = (nome+" você acertou!!!")

var mensagemValor = ("Digite um número entre "+minimo+" e "+maximo+" : ")

if(valor == valorSecreto){
    document.write(espaco)
    document.write(acerto)
    document.write(espaco)
}
else{
    alert(erro)
    var valor = prompt("Digite um número entre "+minimo+" e "+maximo+" : ")
}
