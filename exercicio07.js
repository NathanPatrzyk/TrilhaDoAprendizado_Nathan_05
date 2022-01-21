//FALTA CONTINUAR ...

var contadorMasculino = 0
var contadorFeminino = 0

var contadorMenorIdade = 0
var contadorMaiorIdade = 0

var maisVelhaMasculino = 0
var maisNovaMasculino = 0

var maisVelhaFeminino = 0
var maisNovaFeminino = 0

var contadorMaiorIdadeMasculino = 0
var contadorMaiorIdadeFeminino = 0

var contador

var idade
var sexo

for(contador=1; contador<=5; contador++){
    idade = prompt("Digite a idade da "+contador+"º pessoa (Utilize '.') : ")
    sexo = prompt("Digite o sexo da "+contador+"º pessoa (Utilize : F - Feminino, M - Masculino) : ")

    if(sexo == "M"){
        contadorMasculino++
    }
    if(sexo == "F"){
        contadorFeminino++
    }

    //FALTA CONTINUAR ...
}


document.write("<p>---------------------------------------------------------</p>")

document.write("<p>Quantidade de Pessoas do Sexo Masculino : "+contadorMasculino+"</p>")

document.write("<p>---------------------------------------------------------</p>")

document.write("<p>Quantidade de Pessoas do Sexo Feminino : "+contadorFeminino+"</p>")

document.write("<p>---------------------------------------------------------</p>")

//FALTA CONTINUAR ...