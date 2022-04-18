function dMode() {
    const mainC = document.getElementById('mainD');
    const selPage = document.getElementById('contain_selectPage');
    const conQuestions = document.getElementById('contain_transporte');
    const atual = document.getElementById('modeColor').value;

    if (atual == 'escuro') {
            document.getElementById('dmode').innerHTML = `<input class="darkM"  type="button" value="claro" id="modeColor" onclick="dMode()">`
            mainC.style.background = '#3E3E3E';
            selPage.style.background = '#252625';
            conQuestions.style.background = '#252625';        
    } else {
            document.getElementById('dmode').innerHTML = `<input class="darkM"  type="button" value="escuro" id="modeColor" onclick="dMode()">`
            mainC.style.background = '#C4C4C4';
            selPage.style.background = 'white';
            conQuestions.style.background = 'white';
    }
}