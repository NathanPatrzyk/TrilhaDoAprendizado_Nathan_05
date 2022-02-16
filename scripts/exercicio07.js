//FALTA CONTINUAR ...

var contadorMasculino = 0
var contadorFeminino = 0

var contadorMenorIdade = 0
var contadorMaiorIdade = 0

var maisVelhaMasculino = 0
var maisNovaMasculino = 999

var maisVelhaFeminino = 0
var maisNovaFeminino = 999

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

    if(idade < 18){
        contadorMenorIdade++
    }
    if(idade >= 18){
        contadorMaiorIdade++
    }

    if(sexo == "M" && idade > maisVelhaMasculino){
        maisVelhaMasculino = idade
    }
    if(sexo == "F" && idade > maisVelhaFeminino){
        maisVelhaFeminino = idade
    }

    if(sexo == "M" && idade < maisNovaMasculino){
        maisNovaMasculino = idade
    }
    if(sexo == "F" && idade < maisNovaFeminino){
        maisNovaFeminino = idade
    }

    if(sexo == "M" && idade>=18){
        contadorMaiorIdadeMasculino++
    }
    if(sexo == "F" && idade>=18){
        contadorMaiorIdadeFeminino++
    }
    //FALTA CONTINUAR ...
}


document.write("<p>---------------------------------------------------------</p>")

document.write("<p>Quantidade de Pessoas do Sexo Masculino : "+contadorMasculino+"</p>")

document.write("<p>---------------------------------------------------------</p>")

document.write("<p>Quantidade de Pessoas do Sexo Feminino : "+contadorFeminino+"</p>")

document.write("<p>---------------------------------------------------------</p>")

document.write("<p>Número de Pessoas Menores de Idade : "+contadorMenorIdade+"</p>")

document.write("<p>---------------------------------------------------------</p>")

document.write("<p>Número de Pessoas Maiores de Idade : "+contadorMaiorIdade+"</p>")

document.write("<p>---------------------------------------------------------</p>")

document.write("<p>Pessoa Mais Velha do Sexo Masculino : "+maisVelhaMasculino+"</p>")

document.write("<p>---------------------------------------------------------</p>")

document.write("<p>Pessoa Mais Velha do Sexo Feminino : "+maisVelhaFeminino+"</p>")

document.write("<p>---------------------------------------------------------</p>")

document.write("<p>Pessoa Mais Nova do Sexo Masculino : "+maisNovaMasculino+"</p>")

document.write("<p>---------------------------------------------------------</p>")

document.write("<p>Pessoa Mais Nova do Sexo Feminino : "+maisNovaFeminino+"</p>")

document.write("<p>---------------------------------------------------------</p>")

document.write("<p>Número de Pessoas Maiores de Idade do Sexo Masculino : "+contadorMaiorIdadeMasculino+"</p>")

document.write("<p>---------------------------------------------------------</p>")

document.write("<p>Número de Pessoas Maiores de Idade  do Sexo Feminino : "+contadorMaiorIdadeFeminino+"</p>")

document.write("<p>---------------------------------------------------------</p>")
//FALTA CONTINUAR ...