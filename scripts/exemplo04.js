function calcular() {
    var multiplicador = document.getElementById("multiplicador").value
    var contador = 0

    document.write("<h1>Tabuada do " + multiplicador + "</h1>")
    for (contador = 0; contador <= 10; contador++) {
        resultado = contador * multiplicador
        document.write("<h2>" + contador + " X " + multiplicador + " = " + resultado + "</h2>")
    }
}
