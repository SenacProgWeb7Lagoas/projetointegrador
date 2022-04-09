
var  sum;

function fristSection(){
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
function secondSection(){
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
function trashBags(){
    var value3;

    var inValue= document.getElementById("lixosforadecasa").value;

    if(inValue === 1){
        value3 = 10;
    }
    else if(inValue === 2){
        value3 = 20;
    }
    else{
        value3 = 30;
    }

    return value3;
}

function sendSum(){

    sum = trashBags() + secondSection() + fristSection();
    alert ("A soma é: " + sum);
}