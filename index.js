function preencherDropdown() {
  var frutas = [
    "Banana",
    "Maçã",
    "Goiaba",
    "Limão",
    "Maracujá",
    "Abacaxi",
    "Morango",
    "Melancia",
  ];
  var select = document.getElementById("frutas");
  for (var i = 0; i < frutas.length; i++) {
    var option = document.createElement("option");
    option.value = frutas[i];
    option.text = frutas[i];
    select.appendChild(option);
  }
}
