var vetor=[4, 8, 7, 6]

//alert("Vetor: "+vetor)

//alert("Vetor[0]: "+vetor[0])


vetor[1]=3

//alert("Vetor atualizado: "+vetor)


var soma=vetor[0]+vetor[3]

//alert("Soma das posições 0 e 3 do vetor: "+soma)


lista=["Juquinha", 1910, "Rua A", "Irati", "PR", 80.5]

//alert(lista)

for(var contador=0; contador<lista.length; contador++){
    document.write("<h2>"+lista[contador]+"</h2>")
}

lista.push("84500-000")
alert(lista)

lista.push("Teste")
lista.pop()
alert(lista)

lista.shift()
alert(lista)

lista.unshift("Zequinha")
alert(lista)


var posicao = lista.indexOf("Irati")
alert(posicao)