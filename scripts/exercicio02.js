function calcular() {
    var escolha = document.getElementById("escolha").value

    switch (escolha) {
        case "1": {

            real = parseFloat(prompt("Digite o valor em Real (Sem o cifrão e com '.') : "))
            dolar = (real * 0.18)

            break

        }

        case "2": {

            dolar = parseFloat(prompt("Digite o valor em Dólar (Sem o cifrão e com '.') : "))
            real = (dolar * 5.42)

            break

        }

        default: {

            document.write("<p>Código incorreto. Tente novamente.</p>")

            break

        }

    }

    document.write("<p>-----------------------------------------------</p>")

    document.write("<p>Valor em Real : R$" + real + "</p>")

    document.write("<p>-----------------------------------------------</p>")

    document.write("<p>Valor em Dólar : $" + dolar + "</p>")

    document.write("<p>-----------------------------------------------</p>")
}
