
function dMode() {
    const mainC = document.getElementById('mainD');
    var spanElements = document.getElementsByTagName('span');

       
    
   
    const selPage = document.getElementById('contain_selectPage');
    console.log(selPage);
    const conQuestions = document.getElementById('contain_transporte');
    const conQ = document.getElementById('contain_quests');
    
    const atual = document.getElementById('modeColor').value;

    if (atual == 'Modo escuro') {

            for (var i = 0; i < spanElements.length; i++) {
                spanElements[i].style.color = 'white';
                }

            document.getElementById('dmode').innerHTML = `<input class="darkM"  type="button" value="Modo Claro" id="modeColor" onclick="dMode()">`
            
           
            mainC.style.background = '#3E3E3E';
            selPage.style.background = '#252625';
            conQuestions.style.background = '#ED217C';      
            conQ.style.background =   '#252625';
            
            document.documentElement.style.setProperty('--perguntas', '#d6d6d6');
            
    } else {
                for (var i = 0; i < spanElements.length; i++) {
                spanElements[i].style.color = 'black';
                }
            document.getElementById('dmode').innerHTML = `<input class="darkM"  type="button" value="Modo escuro" id="modeColor" onclick="dMode()">`
            mainC.style.background = '#C4C4C4';
            
            selPage.style.background = '#ED217C';
            conQuestions.style.background = '#ED217C';
            conQ.style.background =   'white';
            
            document.documentElement.style.setProperty('--perguntas', 'rgb(40, 40, 40)');
            
    }

}

function marcaVeiculo(caller) {
        var checks = document.querySelectorAll('input[type="checkbox"]');    
        for(let i = 0; i < checks.length; i++) {
          checks[i].checked = checks[i] == caller;   
        }
      }

      function marca(caller) {
        var checks = document.querySelectorAll('input[type="checkbox"]');    
        for(let i = 0; i < checks.length; i++) {
          checks[i].checked = checks[i] == caller;   
        }
      }


        

function saida() {
        const selecVeiculo = document.querySelector('input[name=veiculo]:checked').value;
        const selecPercorre = document.querySelector('input[name=percorre]:checked').value;
        const selecViajar = document.querySelector('input[name=viajar]:checked').value;

        const TrabalhoEmprego = document.getElementById('TrabalhoEmprego');
        const infoTrabalho = TrabalhoEmprego.options[TrabalhoEmprego.selectedIndex].value;     
        
        const ferias = document.getElementById('ferias');
        const infoFerias = ferias.options[ferias.selectedIndex].value;

        
        const somatransporte = parseInt(selecVeiculo) + parseInt(selecPercorre) + parseInt(selecViajar) + parseInt(infoTrabalho) + parseInt(infoFerias);
        console.log(somatransporte)


                        
        localStorage.setItem('transporte', `${somatransporte}`);
        location.href = '/consumo.html';
        
        
        
        
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