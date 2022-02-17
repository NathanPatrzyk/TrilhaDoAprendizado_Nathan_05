function calcular() {
    var nome = document.getElementById("nome").value

    var valorSecreto = 7

    var minimo = 2
    var maximo = 10

    var espaco = ("<p>------------------------------------------------------------</p>")

    var acerto = ("<p>" + nome + " você acertou!!!</p>")

    var erro = (nome + " você errou!!!")

    var contadorA = 0

    for (contadorA = 1; contadorA <= 4; contadorA++) {

        var valor = prompt("Digite um número entre " + minimo + " e " + maximo + " : ")

        if (valor == valorSecreto) {
            contadorA = 10

            document.write(espaco)
            document.write("<p>" + acerto + " O número correto é 7.</p>")
            document.write(espaco)
        }

        else {
            minimo++
            maximo--
            alert(erro)

        }
    }

    if (contadorA < 10) {
        document.write(espaco)
        document.write("<p>" + erro + " O número correto é 7.</p>")
        document.write(espaco)
    }
}

