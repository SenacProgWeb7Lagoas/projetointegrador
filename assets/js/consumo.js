let ativarNoturno = parseModoNoturno()
console.log('>> ',ativarNoturno)

<<<<<<< HEAD
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

function setCor(){
    if (ativarNoturno) {
=======
function modoNoturno(){
    ativarNoturno = !ativarNoturno

    if (ativarNoturno){
>>>>>>> consumo
        document.documentElement.style.setProperty('--body', '#3e3e3e');
        document.documentElement.style.setProperty('--cabeca', '#252625');
        document.documentElement.style.setProperty('--texto', '#ffffff');
        document.documentElement.style.setProperty('--verde', '#779451');
        document.documentElement.style.setProperty('--rosa', '#b12262');
        document.documentElement.style.setProperty('--roxo', '#5d335c');
<<<<<<< HEAD
        localStorage.setItem('modoNoturno','true');
    }
    else {
=======
        document.documentElement.style.setProperty('--azul', '#165d71');
    }
    else{
>>>>>>> consumo
        document.documentElement.style.setProperty('--body', '#c4c4c4');
        document.documentElement.style.setProperty('--cabeca', '#ffffff');
        document.documentElement.style.setProperty('--texto', '#000000');
        document.documentElement.style.setProperty('--verde', '#a6ce39');
        document.documentElement.style.setProperty('--rosa', '#ed217c');
        document.documentElement.style.setProperty('--roxo', '#753874');
<<<<<<< HEAD
        localStorage.setItem('modoNoturno','false');
=======
        document.documentElement.style.setProperty('--azul', '#0f7491');
>>>>>>> consumo
    }

}
<<<<<<< HEAD

function modoNoturno() {
    ativarNoturno = !ativarNoturno
    setCor()
}
setCor();

var sum; // Variável responsável por realizar as somas e retornar o resultado.

function firstSection() { //Função que seleciona os valores da primeira pergunta.
=======
>>>>>>> consumo

var sum;
function firstSection(){
    var value;
<<<<<<< HEAD
    if (document.getElementById("inNenhuma").selected === true) {
        value = 0;
    }
    else if (document.getElementById("in1a3").selected === true) {
        value = 15;
    }
    else if (document.getElementById("in4a6").selected === true) {
        value = 30;
    }
    else if (document.getElementById("inMaisde6").selected === true) {
=======
    if (document.getElementById("inNenhuma").checked === true){
        value = 0;
    }
    else if (document.getElementById("in1 a 3").checked === true){
        value = 15;
    }
    else if (document.getElementById("in4 a 6").checked === true){
        value = 30;
    }
    else if (document.getElementById("inMais de 6").checked === true){
>>>>>>> consumo
        value = 45;
    }
    console.log('> ', value)
    return value;
}
function secondSection(){
    var value2;
    if (document.getElementById("inSim").checked === true){
        value2 = 0;
    }
    else if (document.getElementById("inNao").checked === true){
        value2 = 25;
    }
    console.log('> ', value2)
    return value2;
}

<<<<<<< HEAD
function resultados() {
    sum = firstSection() + secondSection();

    //alert(`${sum}`)

    localStorage['consumo'] = sum;

    window.location.assign('./residuos.html');
}
=======
object.onclick = function resultados(){
    sum = firstSection() + secondSection();
    localStorage['consumo'] = sum;
    window.location.assign('./residuos.html');
}
>>>>>>> consumo
