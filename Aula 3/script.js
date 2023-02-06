alert("Seja bem vindo ao catálogo de livros da AluraBooks, aqui esta 14 livros cuja categoria é de autoajuda, psicologia, negocios etc. Logo abaixo deles está nome correspondente de cada livro")

const container = document.querySelector('.conteudo-container');

var listaLivros = ["https://m.media-amazon.com/images/I/81ZnJcgjCdL.jpg","https://m.media-amazon.com/images/I/81XTXQEVPlL.jpg","https://m.media-amazon.com/images/I/515rjH7yikL._SX342_SY445_QL70_ML2_.jpg","https://m.media-amazon.com/images/I/81KY9mmrF-L.jpg","https://m.media-amazon.com/images/I/5144Ghp-b8L.jpg","https://m.media-amazon.com/images/I/81HKcvLn15L.jpg","https://m.media-amazon.com/images/I/51b6LT-tHwL._SX331_BO1,204,203,200_.jpg","https://m.media-amazon.com/images/I/41ro37po+CL._SX331_BO1,204,203,200_.jpg","https://m.media-amazon.com/images/I/71TlG5gLV7L.jpg","https://m.media-amazon.com/images/I/81eT2pjx4jL.jpg","https://m.media-amazon.com/images/I/71ef0B1lsrL.jpg","https://m.media-amazon.com/images/I/811jUvTg4FL.jpg","https://m.media-amazon.com/images/I/81nUthzU+xL.jpg","https://m.media-amazon.com/images/I/41S2oqwbrVL.jpg"];
var nomeLivros = [" Os segredos da mente milionária. ", "O Poder do Hábito. ", "O milagre da manhã. ", "Pai Rico Pai Pobre. ", "A sutil arte de ligar o F*da-se. ", "O homem mais rico da Babilônia. ", "Mais esperto que o Diabo. ", "Quem pensa enriquece. ", "Como fazer amigos e influenciar pessoas. ", "Hábitos atômicos. ","O poder do agora. ","Os 7 hábitos de pessoas altamente eficazes. ","Trabalhe 4 horas por semana. ","A arte da guerra. "]

for (var i = 0; i < listaLivros.length; i++) {
  container.innerHTML =
    container.innerHTML +
    '<div class="livros-container"><img src=' +
    listaLivros[i] +
    '><span class="livros-nome">' +
    nomeLivros[i] +
    '</span></div>';
}

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