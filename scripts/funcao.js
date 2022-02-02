somar(10,2)
alert(subtrair(12,2))

/*Funções sem retorno*/
function somar(primeiroNumero,segundoNumero){
    var resultado = primeiroNumero + segundoNumero
    
    alert("O resultado de "+primeiroNumero+"+"+segundoNumero+"="+resultado)
}

/*Função  com retorno*/
function subtrair(primeiroNumero,segundoNumero){
	var resultado = primeiroNumero-segundoNumero
	
	return("O resultado de "+primeiroNumero+"-"+segundoNumero+"="+resultado)
}