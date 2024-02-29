//FUNCAO PARA MUDAR O ICONE DE LUGAR NOS INPUT SENHA E CONFIRMA-SENHA
function animacao(){
     //DEFINIÇÃO DE VARIAVEIS E BUSCA DE ID
     var animated = document.getElementById('senha')
     var animatedd = document.getElementById('cadeado')
     var eyeS = document.getElementById('eye')
     var inf = document.getElementById('mostrar-senha')
     var animtedd2 = document.getElementById('cadeado2')
     var eyeS2 = document.getElementById('eye2')
     var inf2 = document.getElementById('mostrar-senha2')
     
 
     //SE A VARIAVEL (animated) FOR DO TIPO "password"ENTÃO ELA MUDE O NOME DAS CLASSES
     if(animated.type === 'password'){
        
         animtedd2.classList.replace('cadead2', 'animar2')
         animatedd.classList.replace('cadead', 'animar')
         eyeS2.classList.replace('eyes2', 'eye2')
         eyeS.classList.replace('eyes', 'eye')
         inf2.classList.replace('bx-shows', 'bx-show')
         inf.classList.replace('bx-shows','bx-show')
     }

}

//FUNCAO PARA EXIBIR A SENHA E ESCONDER
function mostrarSenha(){

    //DEFINICAO DE VARIAVEIS E BUSCA DE ID
    var inputPass = document.getElementById('senha')
    var inputPas = document.getElementById('confirma')
    var btnShowPass = document.getElementById('mostrar-senha')
    var btShowPass = document.getElementById('mostrar-senha2')

    //SE O TIPO DO INPUT FOR "PASSWORD" ENTAO AO CLICAR ELE TROCARA O NOME DAS CLASSES FAZENDO ASSIM EXIBIÇÃO DE SENHA
    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bx-show', 'bxs-hide')
        inputPas.setAttribute('type', 'text')
        btShowPass.classList.replace('bx-show','bxs-hide')
    }
    //CASO NÃO FOR DO TIPO "PASSWORD" AO CLICAR ELE TROCARA NOVAMENTE ELE TROCARA O NOME DAS CLASSES ESCONDENDO A SENHA
    else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bxs-hide', 'bx-show')
        inputPas.setAttribute('type','password')
        btShowPass.classList.replace('bxs-hide', 'bx-show')
    }
}

//FUNCAO PARA CONFERIR SE AS SENHAS SÃO AS MESMAS
function confereSenha(){

    //DEFINÇÃO DE VARIAVEIS
    const senha = document.querySelector('input[name=senha]');
    const confirma = document.querySelector('input[name=confirma]');

    //SE O VALOR DA VARIAVEL SENHA E CONFIRMA FOR O MESMO ENTAO AS SENHAS CONFEREM
    if(senha.value === confirma.value){
        confirma.setCustomValidity('As Senhas Conferem!');
    }

    //CASO NAO FOR AS SENHAS NÃO CONFEREM
    else{
        confirma.setCustomValidity('As Senhas não conferem!');
    }

}

