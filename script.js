function main() {
  console.log("Comienza JS");

  var cero = document.getElementById('0')

  cero.onclick = () => {
    console.log("Cero");

    var display = document.getElementById('Display');
    Display.innerHTML = '0'
  }

}
