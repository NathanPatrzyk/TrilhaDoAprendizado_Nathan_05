var numeroElementos = parseInt(prompt("Digite quantos elementos deseja na sua série de Fibonacci"))

var contador
var contadorInicial = 0
var contadorReserva = 1
var contadorSoma

document.write("[")

for (contador=0;contador<numeroElementos;contador++){
	contadorSoma = contadorReserva + contadorInicial
	contadorReserva = contadorInicial
	contadorInicial = contadorSoma
	
	document.write(" "+contadorInicial+" , ")
}

document.write("]")