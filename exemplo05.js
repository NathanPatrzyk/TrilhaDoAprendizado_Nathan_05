var multiplicador=0
var contador=0
var derrota=0
var resposta
var nivel=2

document.write("<h1>Jogo da Tabuada</h1>")

while(derrota==0){

    multiplicador++

    while(derrota==0){

        contador++

        resposta = prompt("Digite sua resposta: "+contador+" X "+multiplicador+" = ")

        resultado=contador*multiplicador

        if(resultado!=resposta){
            alert("Errou. Nível Alcançado: "+(nivel-1))
            derrota=1
        }
        else{
            alert("Acertou. Próximo Nível: "+nivel)
            nivel++
        }
    }
}