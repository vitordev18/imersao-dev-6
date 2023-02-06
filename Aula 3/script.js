//alert("Seja bem vindo ao catálogo de livros da AluraBooks, aqui esta 14 livros cuja categoria é de autoajuda, psicologia, negocios etc. Logo abaixo deles está nome correspondente de cada livro")

//document.querySelector: Este método permite selecionar elementos com base em seletores CSS. Ele retorna o primeiro elemento que corresponde ao seletor especificado.
//O seletor especificado no caso, foi a class criada lá na div no html, .conteudo-container
const container = document.querySelector('.conteudo-container');
//declarando o nome da const(contante) como "container", mas tu poderia usar outros nomes que quisesse
//const é uma palavra-chave do JavaScript que permite declarar uma constante. Uma constante é um valor que não pode ser alterado após sua inicialização. Em outras palavras, uma vez que você atribuiu um valor a uma constante, você não pode mudá-lo posteriormente. //como a div com a class-conteiner é fixa, dá pra usar o const

var listaLivros = ["https://m.media-amazon.com/images/I/81ZnJcgjCdL.jpg","https://m.media-amazon.com/images/I/81XTXQEVPlL.jpg","https://m.media-amazon.com/images/I/515rjH7yikL._SX342_SY445_QL70_ML2_.jpg","https://m.media-amazon.com/images/I/81KY9mmrF-L.jpg","https://m.media-amazon.com/images/I/5144Ghp-b8L.jpg","https://m.media-amazon.com/images/I/81HKcvLn15L.jpg","https://m.media-amazon.com/images/I/51b6LT-tHwL._SX331_BO1,204,203,200_.jpg","https://m.media-amazon.com/images/I/41ro37po+CL._SX331_BO1,204,203,200_.jpg","https://m.media-amazon.com/images/I/71TlG5gLV7L.jpg","https://m.media-amazon.com/images/I/81eT2pjx4jL.jpg","https://m.media-amazon.com/images/I/71ef0B1lsrL.jpg","https://m.media-amazon.com/images/I/811jUvTg4FL.jpg","https://m.media-amazon.com/images/I/81nUthzU+xL.jpg","https://m.media-amazon.com/images/I/41S2oqwbrVL.jpg"];
var nomeLivros = [" Os segredos da mente milionária. ", "O Poder do Hábito. ", "O milagre da manhã. ", "Pai Rico Pai Pobre. ", "A sutil arte de ligar o F*da-se. ", "O homem mais rico da Babilônia. ", "Mais esperto que o Diabo. ", "Quem pensa enriquece. ", "Como fazer amigos e influenciar pessoas. ", "Hábitos atômicos. ","O poder do agora. ","Os 7 hábitos de pessoas altamente eficazes. ","Trabalhe 4 horas por semana. ","A arte da guerra. "]


//função com os mesmos parametros de antes
//  .innerHTML é uma outra forma de inserir elementos no html pelo js similar ao document.write, mas com esse innerHTML tu consegue especificar aonde tu vai colocar os elementos que está inserindo por aqui
//estão agora tá especificando que os elementos inseridos aqui vão ser incluidos numa div que possui a class conteudo-conteiner

for (var i = 0; i < listaLivros.length; i++) {
  container.innerHTML =
    container.innerHTML +
    '<div class="livros-container"><img src=' +
    listaLivros[i] +
    '><span class="livros-nome">' +
    nomeLivros[i] +
    '</span></div>';
}

//explificando por container.innerHTML recebe ele mesmo + os elementos da lista: 
//nas minhas tentativas de deixar lado a lado, quando deixei apenas container recebe elementos, cada elemento tava sendo repetido a cada loop, e no final ficava somente o ultimo elemento, então dessa forma que coloquei, não substitui, vai acrescentando e mantendo na tela a cada loop

//Função while:
// var i = 0
// while(i < listaLivros.length){
//   document.write("<img src=" + listaLivros[i] + ">")
//   i++
// }
// var i = 0
// while(i < nomeLivros.length){
//   document.write(nomeLivros[i])
//   i++
// }