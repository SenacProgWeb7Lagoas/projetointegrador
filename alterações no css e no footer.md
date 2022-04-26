## Orientações sobre a estilização do footer

Para fazer a estilização da minha página, eu tinha utilizado o arquivo CSS da Bianca e da Cláudia como base. 
No CSS delas as fontes e o espaçamento dos elementos foi feito dentro da tag p:

![image](https://user-images.githubusercontent.com/99282366/163857481-99d1d185-670e-4c7f-b518-fe328f71c130.png)

_(print do CSS - branch alimentação)_

Tive que **remover** esta tag, pois estava atrapalhando a formatação do texto dentro do footer (as definições feitas em tags gerais se sobrepõe às labels e class no CSS).
 Aí eu coloquei a formatação direto na main e nas perguntas:
 
 ![image](https://user-images.githubusercontent.com/99282366/163857647-19b457f7-155f-4699-ae0c-134fba432e22.png)
![image](https://user-images.githubusercontent.com/99282366/163857696-2973b44f-c6a2-4d73-9232-1bc4583b4017.png)

_(prints do meu código CSS - branch consumo)_

Conversando com o Wisley, achamos interessante utilizar a propriedade hoover nos botões da página, e fiz da seguinte forma (se alguém souber como deixar o código mais limpo, por favor avisar):
 
 ![image](https://user-images.githubusercontent.com/99282366/163858036-82e40c46-eedb-45ae-bdba-37dcdec9a056.png)
 ![image](https://user-images.githubusercontent.com/99282366/163860178-4c29cd9e-30e6-4969-8ebc-00a1543019b8.png)

_(print do CSS - branch consumo)_
  
Também quero chamar atenção para mais um detalhe: coloquem a altura das divs de acordo com o tamanho da main onde ela está contida ou ficarão buracos na tela:

![image](https://user-images.githubusercontent.com/99282366/165196617-a41b254f-9910-42be-a5cb-221da098fe0e.png)
![image](https://user-images.githubusercontent.com/99282366/165196741-9b5ad65f-c841-4045-8ab1-88e8a27cc169.png)
_(div sem altura determinada | resultado)_

![image](https://user-images.githubusercontent.com/99282366/165196765-37088fec-e686-4fbf-bb1e-5666a43bdef9.png)
![image](https://user-images.githubusercontent.com/99282366/165196803-24e796b2-103a-4d7b-bcad-e984fa549f58.png)
_(div com altura em 100% do tamanho da main (500px no meu caso) | resultado)_

A altura do rodapé ficou configurada para 250px. Na minha página ele parece grande, mas tem outras páginas que estão com mais perguntas, aí não vai parecer tão grande.

Também foi recomedação do Wisley deixar a maioria das medidas em porcentagem ao invés de pixels, para ajudar na responsividade (que ainda estou trabalhando pra repassar pra vocês).

## O arquivo do rodapé está disponível na branch na íntegra, mas para facilitar vou deixar um arquivo separado com o código também.
