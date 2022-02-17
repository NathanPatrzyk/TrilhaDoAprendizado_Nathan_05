function calcular() {
    var primeiraNota = parseFloat(document.getElementById("primeiraNota").value)
    var segundaNota = parseFloat(document.getElementById("segundaNota").value)
    var terceiraNota = parseFloat(document.getElementById("terceiraNota").value)
    var quartaNota = parseFloat(document.getElementById("quartaNota").value)

    const QUANTIDADE_DE_NOTAS = 4
    var somatoria = (primeiraNota + segundaNota + terceiraNota + quartaNota)
    var media = (somatoria / QUANTIDADE_DE_NOTAS)
    var conceito

    document.write("<p>-----------------------------------------------</p>")

    document.write("<p>Primeiro Bimestre : " + primeiraNota + "</p>")

    document.write("<p>-----------------------------------------------</p>")

    document.write("<p>Segundo Bimestre : " + segundaNota + "</p>")

    document.write("<p>-----------------------------------------------</p>")

    document.write("<p>Terceiro Bimestre : " + terceiraNota + "</p>")

    document.write("<p>-----------------------------------------------</p>")

    document.write("<p>Quarto Bimestre : " + quartaNota + "</p>")

    document.write("<p>-----------------------------------------------</p>")

    document.write("<p>Média : " + media + "</p>")

    document.write("<p>-----------------------------------------------</p>")

    if (media < 0 || media > 10) {
        conceito = "Valores inválidos."
    }

    if (media < 7 && media >= 0) {
        conceito = "D"
    }

    else if (media <= 7.9 && media >= 0) {
        conceito = "C"
    }

    else if (media <= 8.9 && media >= 0) {
        conceito = "B"
    }

    else if (media <= 10 && media >= 0) {
        conceito = "A"
    }

    document.write("<p>Conceito : " + conceito + "</p>")


    document.write("<p>-----------------------------------------------</p>")
}
