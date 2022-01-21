var numero = prompt("Digite um número para saber se ele é multiplo de 3 ou 7")
var texto

if(numero%3==0 && numero%7!=0){
    texto = "O número é múltiplo de 3."
}

else
if(numero%7==0 && numero%3!=0){
    texto = "O número é múltiplo de 7."
}

else
if(numero%7==0 && numero%3==0){
    texto = "O número é múltiplo de 3 e de 7."
}

else{
    texto = "O número não é múltiplo nem de 3 e nem de 7."
}

document.write("<p>------------------------------------------------------------</p>")

document.write("<p>"+texto+"</p>")

document.write("<p>------------------------------------------------------------</p>")

