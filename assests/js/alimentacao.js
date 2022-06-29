let ativarNoturno = true;
let result3 = 0;
let result1 = 0;
let result2 = 0;
let soma = 0;

function modoNoturno(){
    ativarNoturno = !ativarNoturno
    if (!ativarNoturno){
        document.documentElement.style.setProperty('--body', '#3e3e3e');
        document.documentElement.style.setProperty('--cabeca', '#252625');
        document.documentElement.style.setProperty('--borda', '#165d71');
        document.documentElement.style.setProperty('--texto', '#ffffff');
        document.documentElement.style.setProperty('--verde', '#779451');
        document.documentElement.style.setProperty('--rosa', '#b12262');
        document.documentElement.style.setProperty('--laranja', '#b44a28');
        document.documentElement.style.setProperty('--roxo', '#5d335c');
        document.querySelector(".noturno").innerHTML = "Modo Claro";
    }else{
        document.documentElement.style.setProperty('--body', '#c4c4c4');
        document.documentElement.style.setProperty('--cabeca', '#ffffff');
        document.documentElement.style.setProperty('--borda', '#0f7491');
        document.documentElement.style.setProperty('--texto', '#000000');
        document.documentElement.style.setProperty('--verde', '#a6ce39');
        document.documentElement.style.setProperty('--rosa', '#ed217c');
        document.documentElement.style.setProperty('--laranja', '#f15a29');
        document.documentElement.style.setProperty('--roxo', '#753874');
        document.querySelector(".noturno").innerHTML = "Modo Escuro";
    }
}
function mobile(){
    document.querySelector(".cabecalho").classList.toggle("show-menu")
    document.querySelector(".nav").classList.toggle("show-menu")
    document.querySelector("header").classList.toggle("show-menu")
    document.querySelector(".logo").classList.toggle("show-menu")
}
    function escolha(){
        let radios = document.getElementsByName("pergunta3");
        let marca = '';
        for (let i = 0; i < radios.length; i++){
            if(radios[i].checked){
               let marca = radios[i].value;
                switch(marca){
                    case 'sim':
                        result3= 25;
                        break
                    case 'nao':
                        result3 = + 125;
                        break
                    case 'as_vezes':
                        result3 = + 50;
                        break
                    case 'raramente':
                        result3 = + 100;
                        break
        }
    }if(marca == null || marca === '' && result3 === 0  ){
        let perg3 = document.querySelector('.perg3');
        if(perg3.style.display === 'none'){
            perg3.style.display = 'block';
        }perg3.style.display = 'block';
        }else{
            let perg3 = document.querySelector('.perg3');
            perg3.style.display = 'none';
        }
    }
}
function pergunta1() {
    let p1 = document.getElementById("box-alimen_p1");
    let resposta = p1.value;
    if(resposta === '-1'){
        let perg = document.querySelector('.perg')
        if(perg.style.display === 'none'){
            perg.style.display = 'block';
        } perg.style.display = 'block';
    }else {
        return parseInt(resposta);
    }
}
function pergunta2() {
    let p2 = document.getElementById("alimentacao_p2");

    let resposta = p2.value;
    if(resposta === '0'){
        let perg2 = document.querySelector('.perg2')
        if(perg2.style.display === 'none'){
            perg2.style.display = 'block';
        } perg2.style.display = 'block';
    }else {
        return parseInt(resposta);
    }
}
function resultado(){
    escolha();
    result1 = pergunta1();
    result2 = pergunta2();
    soma = result1 + result2 + result3;
    if(soma !== NaN){
        localStorage['alimentacao'] = soma;
    }
}
