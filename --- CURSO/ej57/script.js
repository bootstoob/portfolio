var valoresInp;
var arrayInvertido;

function inpValores() {
  valoresInp = document.getElementById("valoresInp").value.trim().split(" ");
  
  invertirValores();
  respValores();
}

function invertirValores() {
  arrayInvertido = valoresInp.reverse();
}

function respValores() {
  var resp = "arrayInvertido: <br>" + arrayInvertido;
  document.getElementById("resultado").innerHTML = resp;
}
