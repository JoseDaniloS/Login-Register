//FUNÇÃO PARA QUANDO CLICAR NO INPUT PASSWORD MOVER O (CADEADO) PARA ESQUERDA E APARECER O OLHO
function animacao(){

    //DEFINIÇÃO DE VARIAVEIS E BUSCA DE ID
    var animated = document.getElementById('senha')
    var animatedd = document.getElementById('cadeado')
    var eyeS = document.getElementById('eye')
    var inf = document.getElementById('mostrar-senha')

    //SE A VARIAVEL (animated) FOR DO TIPO "password"ENTÃO ELA MUDE O NOME DAS CLASSES
    if(animated.type === 'password'){
        animatedd.classList.replace('cadead', 'animar')
        eyeS.classList.replace('eyes', 'eye')
        inf.classList.replace('bx-shows','bx-show')
    }
        
}

//FUNÇÃO PARA EXIBIR E ESCONDER SENHA NO INPUT PASSWORD
function mostrarSenha(){

    //DEFINIÇÃO DE VARIAVEIS E BUSCA DE ID'S
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('mostrar-senha')

    //SE A VARIAVEL "inputPass" FOR DO TIPO "password" ENTÃO ELA TROQUE O TIPO DO INPUT E A CLASSE DA VARIAVEL "btnShowPass" = EXIBINDO A SENHA
    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bx-show', 'bxs-hide')
    }
    //SE NÃO ELA VOLTE PARA O NORMAL= ESCONDENDO A SENHA
    else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bxs-hide', 'bx-show')
    }
}