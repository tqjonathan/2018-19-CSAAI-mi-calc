function main() {
  console.log("Comienza JS");

  //Nuevas variables para los numeros
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

  //Añadir numeros al Display
  Cero.onclick = () => {

  Display.innerHTML = Display.innerHTML + 0;
  }

  Uno.onclick = () => {
  Display.innerHTML = Display.innerHTML + 1;
  }

  Dos.onclick = () => {
  Display.innerHTML = Display.innerHTML + 2;
  }

  Tres.onclick = () => {
  Display.innerHTML = Display.innerHTML + 3;
  }

  Cuatro.onclick = () => {
  Display.innerHTML = Display.innerHTML + 4;
  }

  Cinco.onclick = () => {
  Display.innerHTML = Display.innerHTML + 5;
  }

  Seis.onclick = () => {
  Display.innerHTML = Display.innerHTML + 6;
  }

  Siete.onclick = () => {
  Display.innerHTML = Display.innerHTML + 7;
  }

  Ocho.onclick = () => {
  Display.innerHTML = Display.innerHTML + 8;
  }

  Nueve.onclick = () => {
  Display.innerHTML = Display.innerHTML + 9;
  }
  //........

}
