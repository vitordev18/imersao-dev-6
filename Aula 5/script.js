var listaJogadores = [
{nick: "vito", kills: 0, assist: 0, deaths: 0, PDL: 0},
{nick: "Gordito", kills: 0, assist: 0, deaths: 0, PDL: 0},
{nick: "Theus", kills: 0, assist: 0, deaths: 0, PDL: 0},
{nick: "Zhaam", kills: 0, assist: 0, deaths: 0, PDL: 0},
{nick: "Turugo", kills: 0, assist: 0, deaths: 0, PDL: 0},
{nick: "Bruno", kills: 0, assist: 0, deaths: 0, PDL: 0},
{nick: "Carlinhuss", kills: 0, assist: 0, deaths: 0, PDL: 0},
];
  
var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();

function exibirNaTela() {
    elementoTabela.innerHTML = ''
    for (var i = 0; i < listaJogadores.length; i++) {
    elementoTabela.innerHTML += `
        <tr>
            <td>${listaJogadores[i].nick}</td>   
            <td>${listaJogadores[i].kills}</td>
            <td>${listaJogadores[i].assist}</td>
            <td>${listaJogadores[i].deaths}</td>
            <td>${listaJogadores[i].PDL}</td>
            <td><button onClick="adicionarKills(listaJogadores[${i}])">Kills</button></td>
            <td><button onClick="adicionarAssist(listaJogadores[${i}])">Assists</button></td>
            <td><button onClick="adicionarDeaths(listaJogadores[${i}])">Death</button></td>
        </tr>
    `;
    }
}
    
function adicionarKills(jogador) {
    jogador.kills++;
    jogador.PDL = jogador.PDL + 1;
    exibirNaTela();
}
    
function adicionarAssist(jogador) {
    jogador.assist++;
    jogador.PDL++;
    exibirNaTela();
}
    
function adicionarDeaths(jogador) {
    jogador.deaths++;
    jogador.PDL = jogador.PDL + 1;
    exibirNaTela();
}