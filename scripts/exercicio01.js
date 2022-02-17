function calcular() {
    var celsius = document.getElementById("celsius").value
    var fahrenheit = ((celsius * 1.8) + 32)
    var kelvin = (celsius + 273.15)

    document.write("<p>-----------------------------------------------</p>")

    document.write("<p>Temperatura em Celsius : " + celsius + "</p>")

    document.write("<p>-----------------------------------------------</p>")

    document.write("<p>Temperatura em Fahrenheit : " + fahrenheit + "</p>")

    document.write("<p>-----------------------------------------------</p>")

    document.write("<p>Temperatura em Kelvin : " + kelvin + "</p>")

    document.write("<p>-----------------------------------------------</p>")
}

