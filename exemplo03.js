var contador=1
var max=5
var regressiva=max

while(contador<=max){
    alert("Lap "+regressiva+": Você está dentre de um loop de WHILE, clique aqui:")
    contador++
    regressiva--
}
regressiva=max
for(contador=1;contador<=max;contador++){
    alert("Loop "+regressiva+": Você está dentre de um loop de FOR, clique aqui:")
    regressiva--
}
document.write("<h1>Parabéns! Você venceu as estrutura de repetição FOR e o WHILE.</h1")