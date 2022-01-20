var dia=prompt("Digite o número correspondente ao dia da semana:")

switch(dia){
	case "1":{
		document.write("<h2>Domingo</h2>")
		break
	}
	case "2":{
		document.write("<h2>Segunda-Feira</h2>")
		break
	}
	case "3":{
		document.write("<h2>Terça-Feira</h2>")
		break
	}
    case "4":{
		document.write("<h2>Quarta-Feira</h2>")
		break
	}
    case "5":{
		document.write("<h2>Quinta-Feira</h2>")
		break
	}
    case "6":{
		document.write("<h2>Sexta-Feira</h2>")
		break
	}
    case "7":{
		document.write("<h2>Sábado</h2>")
		break
	}
    case "":{
        alert("O número é nulo, tente novamente")
        break
    }
    default:{
        alert("O número não corresponde a um dia da semana, tente novamente.")
    }
    
}