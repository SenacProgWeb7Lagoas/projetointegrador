let ativarNoturno = true;

function modoNoturno() {
    ativarNoturno = !ativarNoturno

    if (!ativarNoturno) {
        document.documentElement.style.setProperty('--body', '#3e3e3e');
        document.documentElement.style.setProperty('--cabeca', '#252625');
        document.documentElement.style.setProperty('--texto', '#ffffff');
        document.querySelector(".noturno").innerHTML = "Modo Claro";

    } else {
        document.documentElement.style.setProperty('--body', '#c4c4c4');
        document.documentElement.style.setProperty('--cabeca', '#ffffff');
        document.documentElement.style.setProperty('--texto', '#000000');
        document.querySelector(".noturno").innerHTML = "Modo Escuro";
    }
}
