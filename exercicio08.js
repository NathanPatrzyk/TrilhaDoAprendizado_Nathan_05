var n = prompt("Digite um número para calcular seu fatorial : ")

var fatorial = 1

var contador = 0

for(contador=1; contador <= n; contador++) {
    fatorial = fatorial * contador
}

document.write("<p>---------------------------------------------------------</p>")

document.write("<p>Fatorial de "+n+" : "+fatorial+"</p>")

document.write("<p>---------------------------------------------------------</p>")