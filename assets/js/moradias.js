function hamburger() {
    let menuBurger = document.querySelector(".hamburger")
    /*A variável acima recebe a função queryselector, que vai acessar documentos dentro da classe
     "hamburger", no html*/
    /*queryselector sempre busca elementos dentro do html*/

    menuBurger.addEventListener("click", hamburger)
    /*função que reproduz um som a partir de qualquer interação 
    com o elemento relacionado, no caso a função hamburger*/

    document.querySelector(".hamburger").classList.toggle("show_menu")
    /*Função que muda a class da função hamburger quando há algum clique*/

    document.querySelector("nav").classList.toggle("show_menu")
    document.querySelector("body").classList.toggle("show_menu")
    /*A função classlist dá uma nova classe aos elementos selecionados
    (nav, body, etc) quando há um clique. Depois, os elementos renomeados
    receberão a estilização atribuída à nova classe*/
}

hamburger();

function modoCor() {
    console.log('Test')
    document.querySelector("main").classList.toggle("change_color")
    document.querySelector("nav").classList.toggle("change_color")
    document.querySelector("body").classList.toggle("change_color")
}
