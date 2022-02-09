function somar(){
    resultado = buscar()
    document.getElementById("resultado").innerHTML = `O resultado da soma é ${resultado}`
}

function buscar(){
    var n1 = parseFloat(document.getElementById("n1").value)
    var n2 = parseFloat(document.getElementById("n2").value)

    return (n1 + n2)
}