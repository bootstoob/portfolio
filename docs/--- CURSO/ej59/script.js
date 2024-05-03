function filtrarAnimales() {
  var entrada = prompt("ingresar una lista de animales separados por espacios:gato rata perro mosquito zorro alacran");
  var animales = entrada.split(" ");
  var animalesFiltrados=[];

  for (var i = 0; i < animales.length; i++) {
    if (animales[i] !== "mosquito" && animales[i] !== "alacran") {
      animalesFiltrados.push(animales[i]);
    }
  }



var mensaje = "Animales finltrados sin 'mosquito' ó 'alacran': gato rata perro zorro -> " + animalesFiltrados;

alert(mensaje);
}

