var jugador1 = prompt("nombre de jugadora 1:");
var jugador2 = prompt("nombre de jugadora 2:");

var puntajeJugador1 = 0;
var puntajeJugador2 = 0;
var ganadora;

function jugarPiedraPapelTijera() {
  var jugadas1 = prompt("JAGADAS de: " + jugador1 + " ->").trim().split(" ");
  var jugadas2 = prompt("JAGADAS de: " + jugador2 + "->").trim().split(" ");

  for (var i = 0; i < jugadas1.length; i++) {
    jugada1 = jugadas1[i];
    jugada2 = jugadas2[i];

    if (jugada1 > jugada2) {
      puntajeJugador1++;
    } else if (jugada2 > jugada1) {
      puntajeJugador2++;
    } 
  }

  if (puntajeJugador1 > puntajeJugador2) {
    ganadora = jugador1;
  } else if (puntajeJugador2 > puntajeJugador1) {
    ganadora = jugador2;
  } else {
    ganadora = "Empate";
  }

  respValores();
}

function respValores() {
  var resp = "resultado1: <br>" + jugador1 + " ->" + puntajeJugador1;
  document.getElementById("resultado1").innerHTML = resp;
  var resp = "resultado2: <br>" + jugador2 + "->" +  puntajeJugador2;
  document.getElementById("resultado2").innerHTML = resp;
  document.getElementById("ganadora").innerHTML =  "GANADORA: " + ganadora;
  alert("GANADORA: " + ganadora);
}