var numeroSecreto = parseInt(Math.random() * 1000);
var jogar = prompt('Olá seja bem vindo!. Você deseja jogar? Responda com sim ou não');
var tentativas = 10;

if (jogar == 'Sim' || jogar == 'sim' || jogar == 'SIM') {
  alert('Otimo. Agora basta jogar mas antes lembre-se, voce só tem ' + tentativas + ' tentativas!') 
  
  while (numeroSecreto != chute && tentativas > 0) {
    tentativas = tentativas - 1
    var chute = prompt('Digite um número entre 1 e 1000')
    if (chute == numeroSecreto) {
      alert('Acertou!') 
    } else if (chute > numeroSecreto) {
      alert('Puts, não foi dessa vez. O número secreto é menor que ' + chute)
    } else if (chute < numeroSecreto) {
      alert('Puts, não foi dessa vez também. O número secreto é maior que ' + chute)
    }
  }
}