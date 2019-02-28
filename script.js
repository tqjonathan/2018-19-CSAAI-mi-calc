function main() {
  console.log("Comienza JS");

  //Nuevas variables para los numeros

  //colocarlas en un objeto GUI
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

  var Suma = document.getElementById("Suma");
  var Resta = document.getElementById("Resta");
  var Multiplicacion = document.getElementById('Multiplicacion');
  var Division = document.getElementById("Division");
  var Igual = document.getElementById("Igual");
  var Reset = document.getElementById("Reset");

  var Display = document.getElementById("Display");

  //Añadir numeros al Display

  Cero.onclick = () => {
    Display.innerHTML = Display.innerHTML + 0
  }

  Uno.onclick = () => {
    Display.innerHTML = Display.innerHTML + 1
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

  Suma.onclick = () => {
    Valor1 = Display.innerHTML
    Operacion = "+"
    Display.innerHTML = ""
  }

  Multiplicacion.onclick = () => {
    Valor1 = Display.innerHTML
    Operacion = "x"
    Display.innerHTML = ""
  }

  Resta.onclick = () => {
    Valor1 = Display.innerHTML
    Operacion = "-"
    Display.innerHTML = ""
  }

  Division.onclick = () => {
    Valor1 = Display.innerHTML
    Operacion = "/"
    Display.innerHTML = ""
  }

  Reset.onclick = () => {
    Valor1 = 0;
    Valor2 = 0;
    Display.innerHTML = ""
    console.log("Reset");
  }

  Igual.onclick = () => {
    Valor2 = Display.innerHTML
    console.log("calculando");
    Resolver()
  }

  function Resolver () {
    if (Operacion == "+") {
      Solucion = parseFloat(Valor1) + parseFloat(Valor2)
      console.log("sumando");
      Display.innerHTML = Solucion
    }else if (Operacion == "-") {
      Solucion = parseFloat(Valor1) - parseFloat(Valor2)
      console.log("restando");
      Display.innerHTML = Solucion
    }else if (Operacion == "x") {
      Solucion = parseFloat(Valor1) * parseFloat(Valor2)
      console.log("multiplicando");
      Display.innerHTML = Solucion
    }else if (Operacion == "/") {
      Solucion = parseFloat(Valor1) / parseFloat(Valor2)
      console.log("Dividiendo");
      Display.innerHTML = Solucion.toFixed(4)
    }
  }


}
