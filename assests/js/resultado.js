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
    document.querySelector("nav").classList.toggle("show-menu")
    document.querySelector("body").classList.toggle("show-menu")
    document.querySelector(".hamburger").classList.toggle("show-menu")
})