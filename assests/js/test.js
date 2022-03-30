function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    body.classList.toggle(darkModeClass);
    header.classList.toggle(darkModeClass);
    button.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = "light Mode";
    const darkMode = "Dark Mode";

    if(body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        header.innerHTML = darkMode + " ON";
        return;
    }

    button.innerHTML = darkMode;
    header.innerHTML = lightMode + " ON";

}   

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);