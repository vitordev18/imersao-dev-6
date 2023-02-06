function adicionarNomeFilme() {
  var nomeFilme = document.getElementById('nome').value
  var elementoNomeFilme = document.getElementById('nomeFilme')
  elementoNomeFilme.innerHTML = nomeFilme
  document.getElementById('nome') = ''
}

function adicionarImagemFilme() {
  var filmeFavorito = document.getElementById('filme').value
  var elementoImagemFilme = document.getElementById('imagemFilme')
  if (!verificacao(filmeFavorito)) {
    alert('Mensagem de Erro, caso link invalido. Tente novamente')
    return 
  }
  elementoImagemFilme.innerHTML = '<img src=' + filmeFavorito + '>'
  document.getElementById('filme').value = ''
}

var listaDeTiposAceitos = ['.jpg', '.png', '.gif', '.jpeg']

function verificacao(link) {
  var validado = false 
  for (var i = 0; i < listaDeTiposAceitos.length; i++) {
    if(link.endsWith(listaDeTiposAceitos[i])) {
      validado = true 
      break
    }
  }
  return validado 
}

function adicionarTrailerFilme() {
  var trailerFilme = document.getElementById('trailer').value 
  var elementoTrailerFilme = document.getElementById('trailerFilme')
  elementoTrailerFilme.innerHTML = trailerFilme 
  document.getElementById('filme') = ''
}

function verificacaoTrailer(link) {
  var validado = false 
    if(link.startsWith('<iframe') && link.endsWith('</iframe>')){
      validado = true 
    } 
    return validado 
  }