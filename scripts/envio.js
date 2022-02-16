function enviar(){

    var nome = document.getElementById("nome")
    var email = document.getElementById("email")
    var datanasc = document.getElementById("datanasc")
    var sugestao = document.getElementById("sugestao")
    var ok=false

    if(nome.value!="" && nome.value.indexOf("")!=-1)
    {
        if(email.value.indexOf("@")!=-1){
            alert("Dados enviados! Agradecemos o contato. Dados: "+nome.value+" ,"+email.value+" ,"+datanasc.value+" ,"+sugestao.value+".")
        }
        else{
            alert("Digite o email válido")
        }
        
    }
    else{
        alert("Preencha seu nome completo")
    }


    return false

}