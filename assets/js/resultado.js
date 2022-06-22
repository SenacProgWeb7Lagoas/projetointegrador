let outMoradia = document.getElementById("outMoradia");
let outAlimentacao = document.getElementById("outAlimentação");
let outTransporte = document.getElementById("outTransporte");
let outConsumo = document.getElementById("outConsumo");
let outResiduos = document.getElementById("outResiduos");
let outTotal = document.getElementById("outTotal");

let outHectares = document.getElementById("outHectares");
let outArvores = document.getElementById("outArvores");

const moradia = localStorage.getItem('moradia') || 0; // operation to change the value of the constant.
const alimentacao = localStorage.getItem('alimentacao') || 0;
const transporte = localStorage.getItem('trasnporte') || 0;
const consumo = localStorage.getItem('consumo') || 0;
const residuos = localStorage.getItem('residuos') || 0;

const total = parseInt(moradia + alimentacao + transporte + consumo + residuos); // realiza a soma das opções escolhidas pelo user

outMoradia.innerHTML = moradia;
outAlimentacao.innerHTML = alimentacao;
outTransporte.innerHTML = transporte;
outConsumo.innerHTML = consumo;
outResiduos.innerHTML = residuos;

outTotal.innerHTML = total; // show in page the total of the options 

if (total >= 0 && total <= 38){
    outHectares.innerHTML = 1;
    outArvores.innerHTML = 2500;
    
}else if(total >= 39 && total <= 75){
    outHectares.innerHTML = 2;
    outArvores.innerHTML = 5000;

}else if(total >= 76 && total <= 113){
    outHectares.innerHTML = 3;
    outArvores.innerHTML = 7500;

}else if(total >= 114 && total <= 150){
    outHectares.innerHTML = 4;
    outArvores.innerHTML = 10000;

}else if(total >= 151 && total <= 275){
    outHectares.innerHTML = 5;
    outArvores.innerHTML = 12500;

}else if(total >= 276 && total <= 400){
    outHectares.innerHTML = 6;
    outArvores.innerHTML = 15000;

}else if(total >= 401 && total <= 500){
    outHectares.innerHTML = 7;
    outArvores.innerHTML = 17500;

}else if(total >= 501 && total <= 600){
    outHectares.innerHTML = 8;
    outArvores.innerHTML = 20000;

}else if(total >= 601 && total <= 700){
    outHectares.innerHTML = 9;
    outArvores.innerHTML = 22500;

}else if(total >= 701 && total <= 800){
    outHectares.innerHTML = 10;
    outArvores.innerHTML = 25000;

}else if(total >= 801 && total <= 855){
    outHectares.innerHTML = 11;
    outArvores.innerHTML = 275000;

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
            document.querySelector('.change-text').innerHTML = 'Modo Claro'
        }else {
                mudaText = true
                document.querySelector('.change-text').innerHTML = 'Light Mode ON'
            }
        }
    )

// Menu Hamburger
let hamburger = document.querySelector (".hamburger");

hamburger.addEventListener("click", function (){
    document.querySelector("nav").classList.toggle("show-menu")
    document.querySelector("body").classList.toggle("show-menu")
    document.querySelector(".hamburger").classList.toggle("show-menu")
})