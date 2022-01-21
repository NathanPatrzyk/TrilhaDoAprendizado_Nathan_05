var termo = prompt("Digite o primeiro termo : ")
var razao = prompt("Digite a razão : ")
var nTermos = prompt("Digite a quantidade de termos : ")
var contador

document.write("[")
for(contador = 0; contador < nTermos; contador ++){
    var numero = termo * razao ** (contador)

    document.write(" "+numero+" , ")
}
document.write("]")