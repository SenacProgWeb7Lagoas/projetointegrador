function dMode() {
    const mainC = document.getElementById('mainD');
    const selPage = document.getElementById('contain_selectPage');
    const conQuestions = document.getElementById('contain_transporte');
    const atual = document.getElementById('modeColor').value;

    if (atual == 'escuro') {
            document.getElementById('dmode').innerHTML = `<input class="darkM"  type="button" value="CLARO" id="modeColor" onclick="dMode()">`
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
function saida() {
        const veiculo = document.getElementById('veiculo');
        const infoVeiculo = veiculo.options[veiculo.selectedIndex].value;
        const TrabalhoEmprego = document.getElementById('TrabalhoEmprego');
        const infoTrabalho = veiculo.options[veiculo.selectedIndex].value;
        const percorreDia = document.getElementById('percorreDia');
        const infoPercorrer = veiculo.options[veiculo.selectedIndex].value;
        const ferias = document.getElementById('ferias');
        const infoFerias = veiculo.options[veiculo.selectedIndex].value;
        const fimdeSemana = document.getElementById('fimdeSemana');
        const infoFimSemana = veiculo.options[veiculo.selectedIndex].value;

        document.getElementById('saida').innerHTML = `
        'veiculo':'${infoVeiculo}'
        `
}