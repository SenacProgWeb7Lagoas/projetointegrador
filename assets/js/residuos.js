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
    var valor =  document.getElementById("lixosforadecasa").value;

    if( valor == 1){
        value3 = 10;
    }
    else if(valor == 2){
        value3 = 20;
    }
    else if(valor >= 3){
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
        value4 = 25;
    }
    return value4;
} 

function sendSum(){ //Função para retornar a soma. 

    sum = trashBags() + secondSection() + fristSection() + selector();
<<<<<<< HEAD

    alert ("A soma é: " + sum);
=======
    
    localStorage['residuos'] = sum;
    
    window.location.assign('./resultado.html');
>>>>>>> resultados
}
// Modo Light e Dark-mode

let darkMode = document.querySelector (".color-model")

    document.querySelector(".color-model").addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("change-color")
    document.querySelector("body").classList.toggle("change-color")
    document.querySelector("nav").classList.toggle("change-color")
})

// Muda o texto do botão de acordo com o modo

let mudaText = true
    
        document.querySelector('.change-text').addEventListener('click', function (){
        if (mudaText) {
            mudaText = false
            document.querySelector('.change-text').innerHTML = 'Dark Mode ON'
        }else {
            mudaText = true
            document.querySelector('.change-text').innerHTML = 'Light Mode ON'
        }
})

// Menu Hamburger
let hamburger = document.querySelector (".hamburger");


hamburger.addEventListener("click", function (){
<<<<<<< HEAD
    console.log('> nav',document.querySelector("nav") )
    console.log('> hamburger ',document.querySelector(".hamburger") )
=======
>>>>>>> resultados
    document.querySelector("nav").classList.toggle("show-menu")
    document.querySelector(".hamburger").classList.toggle("show-menu")
})


// let onOff = false
    
//         document.querySelector('span').addEventListener('click', function (){
//          if (onOff) {
//              onOff = false
//             document.querySelector('.positivo').innerHTML = '&#10004'
//             console.log('ola')
//         }else {
//             onOff = true
//             document.querySelector('.positivo').innerHTML = 'ola'
//         }
//         console.log(onOff)
// })