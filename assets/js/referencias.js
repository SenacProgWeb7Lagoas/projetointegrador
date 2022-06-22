let ativarNoturno = true;

function modoNoturno() {
    ativarNoturno = !ativarNoturno

    if (!ativarNoturno) {
        document.documentElement.style.setProperty('--body', '#3e3e3e');
        document.documentElement.style.setProperty('--cabeca', '#303d37');
        document.documentElement.style.setProperty('--texto', '#ffffff');
        document.documentElement.style.setProperty('--cor3', '#02f74c');
        document.querySelector(".noturno").innerHTML = "Modo Claro";

    } else {
        document.documentElement.style.setProperty('--body', '#c4c4c4');
        document.documentElement.style.setProperty('--cabeca', '#b6e6d0');
        document.documentElement.style.setProperty('--texto', '#000000');
        document.documentElement.style.setProperty('--cor3', '#017a01');
        document.querySelector(".noturno").innerHTML = "Modo Escuro";
    }
}
