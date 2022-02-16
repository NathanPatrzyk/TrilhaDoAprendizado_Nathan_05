var numero
var menor
var maior
var contador=1

numero = prompt("Digite o 1º número : ")
menor = numero
maior = numero

for(contador=2; contador<=5; contador++){
    numero = prompt("Digite o "+contador+"º número : ")

    if(numero>maior){
        maior = numero
    }

    else
    if(numero<menor){
        menor = numero
    }
}

document.write("<p>-----------------------------------------------</p>")

document.write("<p>Menor : "+menor+"</p>")

document.write("<p>-----------------------------------------------</p>")

document.write("<p>Maior : "+maior+"</p>")

document.write("<p>-----------------------------------------------</p>")
