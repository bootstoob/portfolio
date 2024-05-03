var valoresInp;
var valoresArr = [];
var valoresMap = {};

function contajeValores() {
  this.valoresInp = document.getElementById("valoresInp").value.trim().split(" ");

  guardarValores();
  respValores();
}


function guardarValores() {

  for (var i = 0; i < this.valoresInp.length; i++) {
    if (!valoresArr.includes(valoresInp[i]) && !valoresMap[valoresInp[i]]) {
      valoresArr.push(valoresInp[i]);
      valoresMap[valoresInp[i]] = 0;
    }
  }
  
  console.log(valoresArr);
  console.log(valoresMap);

  //TODO
  valoresArr.forEach(
    function (item) {
      var valor = item[0];
      var cantidad = 0;
      for (var j = 0; j < valoresInp.length; j++) {
        if (valoresInp[j] === valor) {
          cantidad++;
        }
      }
      item.push(cantidad);

      console.log(valoresArr);
      console.log(valoresMap);
    }
  );
var contador;
  valoresArr.forEach(
    element => {
      valoresArr.push(element);
      valoresMap[valoresInp[i]] = 0;
    }
  );
}



function respValores() {
  var resp2 = "Se cuentan: <br>" + valoresArr + "<br>" + valoresArr;
  document.getElementById("resultado").innerText = resp2;
  var resp = "Se cuentan: <br>" + valoresArr + ", ";
  document.getElementById("resultado").innerHTML = resp;
}