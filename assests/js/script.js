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