function dMode() {
    const mainC = document.getElementById('mainD');
    const selPage = document.getElementById('contain_selectPage');
    const conQuestions = document.getElementById('contain_transporte');
    const atual = document.getElementById('modeColor').value;

    if (atual == 'Escuro') {
            document.getElementById('dmode').innerHTML = `<input class="darkM"  type="button" value="Claro" id="modeColor" onclick="dMode()">`
            mainC.style.background = '#3E3E3E';
            selPage.style.background = '#252625';
            conQuestions.style.background = '#252625';        
    } else {
            document.getElementById('dmode').innerHTML = `<input class="darkM"  type="button" value="Escuro" id="modeColor" onclick="dMode()">`
            mainC.style.background = '#C4C4C4';
            selPage.style.background = 'white';
            conQuestions.style.background = 'white';
    }

}
function saida() {
        const veiculo = document.getElementById('veiculo');
        const infoVeiculo = veiculo.options[veiculo.selectedIndex].value;
        const TrabalhoEmprego = document.getElementById('TrabalhoEmprego');
        const infoTrabalho = TrabalhoEmprego.options[TrabalhoEmprego.selectedIndex].value;
        const percorreDia = document.getElementById('percorreDia');
        const infoPercorrer = percorreDia.options[percorreDia.selectedIndex].value;
        const ferias = document.getElementById('ferias');
        const infoFerias = ferias.options[ferias.selectedIndex].value;
        const fimdeSemana = document.getElementById('fimdeSemana');
        const infoFimSemana = fimdeSemana.options[fimdeSemana.selectedIndex].value;
        const somatransporte = parseInt(infoFimSemana) + parseInt(infoVeiculo) + parseInt(infoTrabalho) + parseInt(infoPercorrer) + parseInt(infoFerias);
        alert(somatransporte)
        localStorage.setItem('transporte', `${somatransporte}`);
        location.href = '/consumo.html';
        
        
        
}