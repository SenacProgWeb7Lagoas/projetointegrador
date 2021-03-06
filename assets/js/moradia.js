let valorPergunta1 = 0;
let valorPergunta2 = 0;
let valorPergunta3 = 0;
let modoNoturno = parseModoNoturno()

console.log('>> ',modoNoturno)

function parseModoNoturno() {
    if (localStorage.getItem('modoNoturno')) {
        switch (localStorage.getItem('modoNoturno')) {
            case 'true':
                return true;
            case 'false':
                return false;
            default:
                return false;
        }
    } else {
        return false;
    }
}

function hamburger() {
    let menuBurger = document.querySelector(".hamburger")
    /*A variável acima recebe a função queryselector, que vai acessar documentos dentro da classe
     "hamburger", no html*/
    /*queryselector sempre busca elementos dentro do html*/

    menuBurger.addEventListener("click", hamburger)
    /*função que reproduz um som a partir de qualquer interação 
    com o elemento relacionado, no caso a função hamburger*/

    document.querySelector(".hamburger").classList.toggle("show_menu")
    /*Função que muda a class da função hamburger quando há algum clique*/

    document.querySelector("nav").classList.toggle("show_menu")
    document.querySelector("body").classList.toggle("show_menu")
    /*A função classlist dá uma nova classe aos elementos selecionados
    (nav, body, etc) quando há um clique. Depois, os elementos renomeados
    receberão a estilização atribuída à nova classe*/
}

hamburger();

function setCor(){
    if (modoNoturno) {
        document.querySelector("body").classList.add("change_color")
        document.querySelector("main").classList.add("change_color")
        document.querySelector("nav").classList.add("change_color")
        localStorage.setItem('modoNoturno','true');
    } else {
        document.querySelector("body").classList.remove("change_color")
        document.querySelector("main").classList.remove("change_color")
        document.querySelector("nav").classList.remove("change_color")
        localStorage.setItem('modoNoturno','false');
    }
}

function modoCor() {
    console.log('Test ', modoNoturno)
    modoNoturno = !modoNoturno
    setCor();
}

setCor()

function pergunta1() {
    let p1 = document.getElementById("pergunta1")
    console.log(p1.value);
    valorPergunta1 = parseInt(p1.value)
}


function pergunta2() {
    let p2 = document.getElementsByClassName('op2')
    let valor = 0;
    for (i = 0; i < p2.length; i++) {
        if (p2[i].checked) {
            valor = parseInt(p2[i].value);
            break;
        }
    }
    valorPergunta2 = parseInt(valor);
}

function pergunta3() {
    let p3 = document.getElementById("pergunta3")
    console.log(p3.value);
    valorPergunta3 = parseInt(p3.value)
}

function avancar() {
    pergunta1();
    pergunta2();
    pergunta3();
    const soma = valorPergunta1 + valorPergunta2 + valorPergunta3;

    localStorage.setItem('moradia', soma);
    location.href = './alimentacao.html';
}