function calcular(){
	var primeiroNumero = document.getElementById("primeiroNumero").value
	var segundoNumero = document.getElementById("segundoNumero").value

	if(primeiroNumero>segundoNumero){
	document.write("<h2>"+primeiroNumero+" é maior que "+segundoNumero+"</h2>")
	}

	else if(segundoNumero>primeiroNumero){
	document.write("<h2>"+segundoNumero+" é maior que "+primeiroNumero+"</h2>")
	}

	else if(segundoNumero=primeiroNumero){
	document.write("<h2>"+primeiroNumero+" é igual a "+segundoNumero+"</h2>")
	}

	else{
    alert("O número digitado é nulo, ou houve algum erro, tente novamente")
	}
}

