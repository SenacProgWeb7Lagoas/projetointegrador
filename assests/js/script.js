function checkButton() {

    if (document.getElementById("inSempre").checked === true) {
        console.log("Valor" + 0);
    }
    else if (document.getElementById("inAsVezes").checked === true) {
        console.log("Valor" + 10);
    }
    else if (document.getElementById("inRaramente").checked === true) {
        console.log("Valor" + 20);
    }
    else if (document.getElementById("inNunca").checked === true) {
        console.log("Valor" + 30);
    }

}

// Modo Light e Dark-mode

let darkMode = document.querySelector (".color-model")

    document.querySelector(".color-model").addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("change-color")
    document.querySelector("body").classList.toggle("change-color")
    document.querySelector("nav").classList.toggle("change-color")
})




