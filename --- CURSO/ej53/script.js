var valores = [];
var valor;
var valorInd;

var valoresInp;
var valorBuscado;

function buscarValores() {
  valoresInp = document.getElementById("valoresInp").value;
  valorBuscado = prompt("Ingrese el valor a buscar:");

  guardarValores();
  coincidValores();
  respValores();
}


function guardarValores() {
  this.valores = valoresInp.split(" ");
}


function coincidValores() {

  for (var i = 0; i < valores.length; i++) {
    if (valores[i] === this.valorBuscado) {
      this.valor = valores[i];
      this.valorInd = valores.indexOf(valores[i]);
      return true;
    }
  }

  return false;
}


function respValores() {

  var respTrue = valorBuscado + ": Valor se ha encontrado, índice: " + valorInd;
  var respFalse = valorBuscado + ": Valor no se ha encontrado.";

  if (coincidValores) {
    document.getElementById("resultado").innerText = respTrue;

  } else {
    document.getElementById("resultado").innerText = respFalse;
  }

}