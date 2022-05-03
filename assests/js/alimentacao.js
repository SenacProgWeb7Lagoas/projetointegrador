let ativarNoturno = true;


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
function mobile(){
    document.querySelector(".cabecalho").classList.toggle("show-menu")
    document.querySelector(".nav").classList.toggle("show-menu")
    document.querySelector("header").classList.toggle("show-menu")
    document.querySelector(".logo").classList.toggle("show-menu")
}

//Função para a 3º pergunta
const escolha = function(){
    let radios = document.getElementsByName("pergunta2");
    for(let i = 0; i<radios.length; i++){
        if(radios[i].checked){
            console.log("Escoheu " + radios[i].value);
            alert("você escolheu como resposta: " + radios[i].value)
      }
        }
  }
