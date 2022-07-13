let ativarNoturno = false

function modoNoturno(){
    ativarNoturno = !ativarNoturno

    if (ativarNoturno){
        document.documentElement.style.setProperty('--body', '#3e3e3e');
        document.documentElement.style.setProperty('--cabeca', '#252625');
        document.documentElement.style.setProperty('--texto', '#ffffff');
        document.documentElement.style.setProperty('--verde', '#779451');
        document.documentElement.style.setProperty('--rosa', '#b12262');
        document.documentElement.style.setProperty('--roxo', '#5d335c');
        document.documentElement.style.setProperty('--azul', '#165d71');
    }
    else{
        document.documentElement.style.setProperty('--body', '#c4c4c4');
        document.documentElement.style.setProperty('--cabeca', '#ffffff');
        document.documentElement.style.setProperty('--texto', '#000000');
        document.documentElement.style.setProperty('--verde', '#a6ce39');
        document.documentElement.style.setProperty('--rosa', '#ed217c');
        document.documentElement.style.setProperty('--roxo', '#753874');
        document.documentElement.style.setProperty('--azul', '#0f7491');
    }
}

var sum;
function firstSection(){
    var value;
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
        value = 45;
    }
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
    return value2;
}

object.onclick = function resultados(){
    sum = firstSection() + secondSection();
    localStorage['consumo'] = sum;
    window.location.assign('./residuos.html');
}
