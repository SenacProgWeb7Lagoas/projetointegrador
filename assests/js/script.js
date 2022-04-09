var  sum; // Variável responsável por realizar as somas e retornar o resultado.

function fristSection(){ //Função que seleciona os valores da primeira pergunta.

    var value;

    if (document.getElementById("inSempre").checked === true) {
        value = 0;
    }
    else if (document.getElementById("inAsVezes").checked === true) {
        value = 10;
    }
    else if (document.getElementById("inRaramente").checked === true) {
        value = 20;
    }
    else if (document.getElementById("inNunca").checked === true) {
        value = 30;
    }
    return value;
}
function secondSection(){ // Função que seleciona os valores da segunda pergunta.

    var value2;

    if (document.getElementById("inSempre1").checked === true) {
        value2 = 0;
    }
    else if (document.getElementById("inAsVezes1").checked === true) {
        value2 = 10;
    }
    else if (document.getElementById("inRaramente1").checked === true) {
        value2= 20;
    }
    else if (document.getElementById("inNunca1").checked === true) {
        value2 = 30;
    }
    return value2;
}
function trashBags(){ // Função que seleciona o valor da última pergunta.

    var value3;

    if(document.getElementById("lixosforadecasa").value === 1){
        value3 = 10;
    }
    else if(document.getElementById("lixosforadecasa").value === 2){
        value3 = 20;
    }
    else if(document.getElementById("lixosforadecasa").value >= 3){
        value3 = 30;
    }
    else{
        value3 = 0;
    }
    return value3;
}
function selector(){ // Função que escolhe os valores da 3º Pergunta.

    var value4;
    let valor=  document.getElementById("retiralixo").value;
    
    if(valor === "escolha" || valor === "sempre2"){
        value4 = 0;
    }
    else if(valor === "asvezes2"){
        value4 = 10;
    }
    else if(valor === "raramente2"){
        value4 = 20;
    }
    else if(valor === "nunca2"){
        value4 = 20;
    }
    return value4;
} 

function sendSum(){ //Função para retornar a soma. 

    sum = trashBags() + secondSection() + fristSection() + selector();
    alert ("A soma é: " + sum);
}
// Modo Light e Dark-mode

let darkMode = document.querySelector (".color-model")

    document.querySelector(".color-model").addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("change-color")
    document.querySelector("body").classList.toggle("change-color")
    document.querySelector("nav").classList.toggle("change-color")
})
