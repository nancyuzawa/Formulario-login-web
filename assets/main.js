document.getElementById("btnLogar").addEventListener("click", function(event){
    //Imperdir o envio do formulairo
    event.preventDefault();
    
    //guarda a senha em uma variável
    let senha = document.getElementById("exampleInputPassword1").value;

    //guarda o email em uma variével
    let email = document.getElementById("exampleInputEmail1").value;

    validarEmail(email);
    validarSenha(senha);
})

function validarEmail(email){
    let re =  /\S+@\S+\.\S+/;
    if (re.test(email) == false){
        alert("Digite um email válido!");
        return false;
    }
    else{
        return true;
    }
}

function validarSenha(senha){
    let letraMaiuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let caracteresEspeciais = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    
    let contDigito = 0;
    let contCaracter = 0;
    let contLetraMaiuscula = 0;
    
    for (let i = 0; i < senha.length; i++) {
    
        //Conta se há digitos
        if (!isNaN(senha[i]) ){
            contDigito += 1;
        }
    
        //Conta os Caracteres especiais
        if (caracteresEspeciais.includes(senha[i])) {
            contCaracter += 1;
        }
    
        //Conta as letras maiúsculas da senha
        if(letraMaiuscula.includes(senha[i])){
            contLetraMaiuscula += 1;
        }
    }
    
    // APARECIMENTO DOS ALERTAS PARA O USUÁRIO
    if (senha.length < 8){
        alert("❌ A senha deve conter pelo menos 8 caracteres!");
    }
    else if (contDigito < 1){
        alert("❌ A senha deve conter pelo menos 1 digito numérico!");
    }
    else if (contCaracter < 1){
        alert("❌ A senha deve conter pelo menos 1 caracter especial!");
    }
    else if (contLetraMaiuscula < 1){
        alert("❌ A senha deve conter pelo menos 1 letra maiúscula!");
    }
    else{
        alert("✔️ Logado com sucesso!");
    }
}
