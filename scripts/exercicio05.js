function calcular() {
    var termo = document.getElementById("termo").value
    var razao = document.getElementById("razao").value
    var nTermos = document.getElementById("nTermos").value
    var contador

    document.write("[")
    for (contador = 0; contador < nTermos; contador++) {
        var numero = termo * razao ** (contador)

        document.write(" " + numero + " , ")
    }
    document.write("]")
}
