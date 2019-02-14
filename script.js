function main() {
  console.log("Comienza JS");

  //Nueva variable para coger el nº 0 [id='Cero']
  var Cero = document.getElementById("Nº0");
  var Uno = document.getElementById("Nº1");
  var Dos = document.getElementById("Nº2");
  var Tres = document.getElementById("Nº3");
  var Cuatro = document.getElementById("Nº4");
  var Cinco = document.getElementById("Nº5");
  var Seis = document.getElementById("Nº6");
  var Siete = document.getElementById("Nº7");
  var Ocho = document.getElementById("Nº8");
  var Nueve = document.getElementById("Nº9");

  var Display = document.getElementById('Display');

  Cero.onclick = () => {
  Display.innerHTML = Display.innerHTML + 0;
  }

  Uno.onclick = () => {
  Display.innerHTML = Display.innerHTML + 1;
  }


}
