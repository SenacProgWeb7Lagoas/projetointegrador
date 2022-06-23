
function dMode() {
        const mainC = document.getElementById('mainD');
        const selPage = document.getElementById('contain_selectPage');
        const conQuestions = document.getElementById('contain_transporte');
        const conQ = document.getElementById('contain_quests');

        const atual = document.getElementById('modeColor').value;

        if (atual == 'Modo escuro') {
                document.getElementById('dmode').innerHTML = `<input class="darkM"  type="button" value="Modo Claro" id="modeColor" onclick="dMode()">`
                document.documentElement.style.setProperty('--body', '#3e3e3e');
                document.documentElement.style.setProperty('--cabeca', '#252625');
                document.documentElement.style.setProperty('--borda', '#b12262');
                document.documentElement.style.setProperty('--texto', '#ffffff');
                document.documentElement.style.setProperty('--verde', '#779451');
                document.documentElement.style.setProperty('--laranja', '#b44a28');
                document.documentElement.style.setProperty('--roxo', '#5d335c');
        } else {
                document.getElementById('dmode').innerHTML = `<input class="darkM"  type="button" value="Modo escuro" id="modeColor" onclick="dMode()">`
                document.documentElement.style.setProperty('--body', '#c4c4c4');
                document.documentElement.style.setProperty('--cabeca', '#ffffff');
                document.documentElement.style.setProperty('--borda', '#ed217c');
                document.documentElement.style.setProperty('--texto', '#000000');
                document.documentElement.style.setProperty('--verde', '#a6ce39');
                document.documentElement.style.setProperty('--laranja', '#f15a29');
                document.documentElement.style.setProperty('--roxo', '#753874');
        }

}





function saida() {
        const selecVeiculo = document.querySelector('input[name=viajar]:checked').value
        const selecPercorre = document.querySelector('input[name=percorre]:checked').value

        const selecViajar = document.querySelector('input[name=viajar]:checked').value

        console.log(selecPercorre);
        console.log(selecViajar);
        console.log(selecVeiculo);

        const veiculo = document.getElementById('veiculo');
        const infoVeiculo = veiculo.options[veiculo.selectedIndex].value;
        const TrabalhoEmprego = document.getElementById('TrabalhoEmprego');
        const infoTrabalho = TrabalhoEmprego.options[TrabalhoEmprego.selectedIndex].value;

        const ferias = document.getElementById('ferias');
        const infoFerias = ferias.options[ferias.selectedIndex].value;
        const fimdeSemana = document.getElementById('fimdeSemana');
        const infoFimSemana = fimdeSemana.options[fimdeSemana.selectedIndex].value;
        const somatransporte = parseInt(infoFimSemana) + parseInt(infoVeiculo) + parseInt(infoTrabalho) + parseInt(infoPercorrer) + parseInt(infoFerias);
        if (infoVeiculo == "" || infoTrabalho == "" || infoPercorrer == "" || infoFerias == "" || infoFimSemana == "") {
                alert(`POR FAVOR, PREENCHA TODAS AS INFORMAÇÕES`);
                if (infoVeiculo == "") {
                        var p1 = "01";
                        alert(`RESPONDA A PERGUNTA DE NUMERO ${p1}`);
                };
                if (infoTrabalho == "") {
                        var p2 = "02";
                        alert(`RESPONDA A PERGUNTA DE NUMERO ${p2}`);
                };
                if (infoPercorrer == "") {
                        var p3 = "03"
                        alert(`RESPONDA A PERGUNTA DE NUMERO ${p3}`);
                        alert("Cansou né, então responda de uma vez todas as perguntas.")
                };
                if (infoFerias == "") {
                        var p4 = "04";
                        alert(`RESPONDA A PERGUNTA DE NUMERO ${p4}`);
                };
                if (infoFimSemana == "") {
                        var p5 = "05"
                        alert(`RESPONDA A PERGUNTA DE NUMERO ${p5}`);
                };


        } else {
                localStorage.setItem('transporte', `${somatransporte}`);
                location.href = '/consumo.html';
        }
}
function menuMobile() {
        const menu = document.getElementById('menuM');
        if (menu.style.display == 'flex') {
                menu.style.display = 'none';
        } else {
                menu.style.display = 'flex';
        }
}
function nextPage() {
        alert("POR FAVOR, PREENCHA AS INFORMAÇÕES, DEPOIS CLIQUE EM PRÓXIMO.")
}