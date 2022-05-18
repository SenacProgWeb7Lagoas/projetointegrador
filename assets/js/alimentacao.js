<<<<<<< HEAD
let ativarNoturno = true;
let result3 = 0
let result1 = 0
let result2 = 0
let soma = 0



function modoNoturno() {
    ativarNoturno = !ativarNoturno

    if (!ativarNoturno) {
=======
let ativarNoturno = true

function modoNoturno(){
    ativarNoturno = !ativarNoturno

    if(ativarNoturno){
>>>>>>> transporte
        document.documentElement.style.setProperty('--body', '#3e3e3e');
        document.documentElement.style.setProperty('--cabeca', '#252625');
        document.documentElement.style.setProperty('--borda', '#165d71');
        document.documentElement.style.setProperty('--texto', '#ffffff');
        document.documentElement.style.setProperty('--verde', '#779451');
        document.documentElement.style.setProperty('--rosa', '#b12262');
        document.documentElement.style.setProperty('--laranja', '#b44a28');
        document.documentElement.style.setProperty('--roxo', '#5d335c');
<<<<<<< HEAD
        document.querySelector(".noturno").innerHTML = "Modo claro";

    } else {
=======
    }else{
>>>>>>> transporte
        document.documentElement.style.setProperty('--body', '#c4c4c4');
        document.documentElement.style.setProperty('--cabeca', '#ffffff');
        document.documentElement.style.setProperty('--borda', '#0f7491');
        document.documentElement.style.setProperty('--texto', '#000000');
        document.documentElement.style.setProperty('--verde', '#a6ce39');
        document.documentElement.style.setProperty('--rosa', '#ed217c');
        document.documentElement.style.setProperty('--laranja', '#f15a29');
        document.documentElement.style.setProperty('--roxo', '#753874');
<<<<<<< HEAD
        document.querySelector(".noturno").innerHTML = "Modo escuro";
=======
>>>>>>> transporte
    }
}

function mobile(){ // função acionada quando se clica no menu em barras ou no X

    // adiciona a class showmenu no elemento que não tem essa classe e retira show-menu no elemento que contem
    // ou seja alternar entre adicionar e retirar  
    document.querySelector(".cabecalho").classList.toggle("show-menu")
    document.querySelector(".nav").classList.toggle("show-menu")
    document.querySelector("header").classList.toggle("show-menu")
    document.querySelector(".logo").classList.toggle("show-menu")
}


<<<<<<< HEAD

//Responsividade
function mobile() {
    document.querySelector(".cabecalho").classList.toggle("show-menu")
    document.querySelector(".nav").classList.toggle("show-menu")
    document.querySelector("header").classList.toggle("show-menu")
    document.querySelector(".logo").classList.toggle("show-menu")
}
//Fim responsividade

//Função para a 3º pergunta
const escolha = function () {
    let radios = document.getElementsByName("pergunta2");
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].c) {
            let marca = radios[i].value
            for (let i = 0; i < radios.length; i++) {
                if (marca == 'sim') {
                    result3 = + 25;

                    return
                } else if (marca == 'nao') {
                    result3 = + 125

                    return
                } else if (marca == 'as_vezes') {
                    result3 = + 50

                    return
                } else if (marca == 'raramente') {
                    result3 = + 100

                    return
                } else {
                    alert("Responda a terceira pergunta!")
                }
            }

        }
    }
}

//1º pergunta
function pergunta1() {
    let p1 = document.getElementById("box-alimen_p1");
    let resposta = p1.value;
    if(resposta === '-1'){
        alert("Responda a pergunta 1!");
    }else {
        return parseInt(resposta);
    }
}
//Função pergunta 2
function pergunta2() {
    let p2 = document.getElementById("alimentacao_p2");
    console.log(p2);
    let resposta = p2.value;
    console.log('> ', resposta);
    if(resposta === '0'){
        let label2 = document.getElementById('label_pegunta2');
        console.log('>> ', label2);
        alert("Responda a pergunta 2!");
    }else {
        return parseInt(resposta);
    }
}
//Função soma os 3 resultados das respostas
function resultado() {
    escolha();
    pergunta1();
    result2 = pergunta2();
    soma = result1 + result2 + result3;
    alert("Resultado:" + soma);
    if(soma !== NaN){
        localStorage['alimentacao'] = soma;
        window.location.assign('./transporte.html');
    }
}
=======
>>>>>>> transporte
