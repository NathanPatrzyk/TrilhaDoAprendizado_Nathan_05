var primeiraNota = parseFloat(prompt("Digite a nota do 1º Bimestre (Use '.' ao invés de ',', e digite um valor entre 0 e 10) : "))
var segundaNota = parseFloat(prompt("Digite a nota do 2º Bimestre (Use '.' ao invés de ',', e digite um valor entre 0 e 10) : "))
var terceiraNota = parseFloat(prompt("Digite a nota do 3º Bimestre (Use '.' ao invés de ',', e digite um valor entre 0 e 10) : "))
var quartaNota = parseFloat(prompt("Digite a nota do 4º Bimestre (Use '.' ao invés de ',', e digite um valor entre 0 e 10) : "))

const QUANTIDADE_DE_NOTAS = 4
var somatoria = (primeiraNota+segundaNota+terceiraNota+quartaNota)
var media = (somatoria/QUANTIDADE_DE_NOTAS)
var conceito

document.write("<p>-----------------------------------------------</p>")

document.write("<p>Primeiro Bimestre : "+primeiraNota+"</p>")

document.write("<p>-----------------------------------------------</p>")

document.write("<p>Segundo Bimestre : "+segundaNota+"</p>")

document.write("<p>-----------------------------------------------</p>")

document.write("<p>Terceiro Bimestre : "+terceiraNota+"</p>")

document.write("<p>-----------------------------------------------</p>")

document.write("<p>Quarto Bimestre : "+quartaNota+"</p>")

document.write("<p>-----------------------------------------------</p>")

document.write("<p>Média : "+media+"</p>")

document.write("<p>-----------------------------------------------</p>")

if(media<0 || media>10){
    conceito="Valores inválidos."
}

if(media<7 && media>=0){
    conceito="D"
}

else if(media<=7.9){
    conceito="C"
}

else if(media<=8.9){
    conceito="B"
}

else if(media<=10){
    conceito="A"
}

document.write("<p>Conceito : "+conceito+"</p>")


document.write("<p>-----------------------------------------------</p>")