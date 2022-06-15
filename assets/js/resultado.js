let outMoradia = document.getElementById("outMoradia");
let outAlimentacao = document.getElementById("outAlimentação");
let outTransporte = document.getElementById("outTransporte");
let outConsumo = document.getElementById("outConsumo");
let outResiduos = document.getElementById("outResiduos");
let outTotal = document.getElementById("outTotal");

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
        }
    )

// Menu Hamburger
let hamburger = document.querySelector (".hamburger");


hamburger.addEventListener("click", function (){
    document.querySelector("nav").classList.toggle("show-menu")
    document.querySelector("body").classList.toggle("show-menu")
    document.querySelector(".hamburger").classList.toggle("show-menu")
})