let ativarNoturno = true;
let result3 = 0
let result1 = 0
let result2 = 0
let soma = 0



function modoNoturno(){
    ativarNoturno = !ativarNoturno

    if(!ativarNoturno){
        document.documentElement.style.setProperty('--body', '#3e3e3e');
        document.documentElement.style.setProperty('--cabeca', '#252625');
        document.documentElement.style.setProperty('--borda', '#165d71');
        document.documentElement.style.setProperty('--texto', '#ffffff');
        document.documentElement.style.setProperty('--verde', '#779451');
        document.documentElement.style.setProperty('--rosa', '#b12262');
        document.documentElement.style.setProperty('--laranja', '#b44a28');
        document.documentElement.style.setProperty('--roxo', '#5d335c');
        document.querySelector(".noturno").innerHTML ="Light Mode";
        
    }else{
        document.documentElement.style.setProperty('--body', '#c4c4c4');
        document.documentElement.style.setProperty('--cabeca', '#ffffff');
        document.documentElement.style.setProperty('--borda', '#0f7491');
        document.documentElement.style.setProperty('--texto', '#000000');
        document.documentElement.style.setProperty('--verde', '#a6ce39');
        document.documentElement.style.setProperty('--rosa', '#ed217c');
        document.documentElement.style.setProperty('--laranja', '#f15a29');
        document.documentElement.style.setProperty('--roxo', '#753874');
         document.querySelector(".noturno").innerHTML ="Dark Mode";
    }
}



//Responsividade
function mobile(){
    document.querySelector(".cabecalho").classList.toggle("show-menu")
    document.querySelector(".nav").classList.toggle("show-menu")
    document.querySelector("header").classList.toggle("show-menu")
    document.querySelector(".logo").classList.toggle("show-menu")
}
//Fim responsividade

//Função para a 3º pergunta
const escolha = function(){
    let radios = document.getElementsByName("pergunta2");
    for(let i = 0; i<radios.length; i++){
        if(radios[i].c){
            let marca = radios[i].value
            for(let i = 0; i<radios.length; i++){
                if(marca == 'sim'){
                    result3=+ 25;

                return
                }else if(marca == 'nao'){
                    result3=+ 125
                   
                    return
                }else if(marca == 'as_vezes'){
                    result3=+ 50
                  
                    return
                }else if(marca == 'raramente'){
                    result3=+ 100
                    
                    return
                }else{
                    alert("Responda a terceira pergunta!")
                }
            }
           
                }   
      }
        }

//1º pergunta
function pergunta1(){
    let p1 = document.getElementById("box-alimen_p1");
    for (i = 0; i < p1.length; i++) {
        if(p1.selectedIndex == "0"){
            alert("Escolha uma das opções para a primeira pergunta!")
            return
        }else if(p1.selectedIndex == "1"){
            result1 = 0;
            return
        }else if(p1.selectedIndex == "2"){
            result1 = 10;
            return
        }else if(p1.selectedIndex == "3"){
            result1 = 20;
            return
        }else if(p1.selectedIndex == "4"){
            result1 = 35;
            return
        }else if(p1.selectedIndex == "5"){
            result1 = 50;
            return
        }
}
}
//Função pergunta 2
function pergunta2(){
    let p2 = document.getElementById("alimentacao_p2");
    for (i = 0; i < p2.length; i++){
        if(p2.selectedIndex == "0"){
            alert("Selecione uma opção para a segunda pergunta!")
            return
        }else if(p2.selectedIndex == "1"){
            result2 = 25;
            return
        }else if(p2.selectedIndex == "2"){
            result2= 20;
            return
        }else if(p2.selectedIndex == "3"){
            result2 = 15;
            return
        }else if(p2.selectedIndex == "4"){
            result2 = 10;
            return
        }
}
}
        //Função soma os 3 resultados das respostas
        function resultado(){
            escolha();
            pergunta1();
            pergunta2();
            if(p2.selectedIndex == "0" || p1.selectedIndex == "0" || radios[i].value == "" ){
                alert("Responda todas as perguntas!");
            }
            soma = result1 + result2 + result3;
            alert("Resultado:" + soma);
        }