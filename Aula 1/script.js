alert(
  "Olá seja bem vindo ao conversor de tempo desenvolvido por Vitor Rodrigues Ferreira com auxilio dos educadores Alura atraves do evento Imersão Dev"
);
alert(
  "Para utilizar nosso convertor, basta você colocar o tempo que  deseja converter na unidade devida (ex: hora para minuto, colocar a hora que vc deseja transformar em minuto em 'valorEmHora1') e então clicando em run você tera o valor convertido"
);
//De hora(h) para minuto(m)
var valorEmHora1 = 10;
var conversaoMinuto = 60;
var valorEmMinuto = valorEmHora1 * conversaoMinuto;
alert("O seu valor de hora para minuto é de: " + valorEmMinuto);

//De hora(h) para segundo(s)
var valorEmHora2 = 10;
var conversaoSegundo = 3600;
var valorEmSegundo = valorEmHora2 * conversaoSegundo;
alert("O seu valor de hora para segundo é de: " + valorEmSegundo);

//De minuto(m) para hora(h)
var valorEmMinuto1 = 10;
var conversaoHora = 60;
var valorEmHora = valorEmMinuto1 / conversaoHora;
valorEmHora = valorEmHora.toFixed(3);
alert("O seu valor de minuto para hora é de: " + valorEmHora);

//De minuto(m) para segundo(s)
var valorEmMinuto2 = 10;
var conversaoSegundo = 60;
var valorEmSegundo = valorEmMinuto2 * conversaoSegundo;
alert("O seu valor de minuto para segundo é de: " + conversaoSegundo);

//De segundo(s) para hora(h)
var valorEmSegundo1 = 10;
var conversaoHora = 3600;
var valorEmHora = valorEmSegundo1 / conversaoHora;
valorEmHora = valorEmHora.toFixed(5);
alert("O seu valor de segundo para hora é de: " + valorEmHora);

//De segundo(s) para minuto(m)
var valorEmSegundo2 = 10;
var conversaoMinuto = 60;
var valorEmMinuto = valorEmSegundo2 / conversaoMinuto;
valorEmMinuto = valorEmMinuto.toFixed(4);
alert("O seu valor de segundo para minuto é de: " + valorEmMinuto);
