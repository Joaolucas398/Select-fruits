function preencherDropdown() {
  let frutas = [
    "Banana",
    "Maçã",
    "Goiaba",
    "Limão",
    "Maracujá",
    "Abacaxi",
    "Morango",
    "Melancia",
  ];
  let select = document.getElementById("frutas");
  for (var i = 0; i < frutas.length; i++) {
    let option = document.createElement("option");
    option.value = frutas[i];
    option.text = frutas[i];
    select.appendChild(option);
  }

  const frutasSelecionadas = [];
  var ulElement = document.getElementById("frutasSelecionadas");

  select.addEventListener("change", function () {
    const opcoesSelecionadas = select.selectedOptions;

    ulElement.innerHTML = "";
    // Itera sobre as opções selecionadas e adiciona ao array
    for (var i = 0; i < opcoesSelecionadas.length; i++) {
      const frutaSelecionada = opcoesSelecionadas[i].value;
      frutasSelecionadas.push(frutaSelecionada);
    }

    console.log(frutasSelecionadas);

    for (var i = 0; i < frutasSelecionadas.length; i++) {
      let cardFrutas = document.createElement("li");
      cardFrutas.textContent = frutasSelecionadas[i];
      ulElement.appendChild(cardFrutas);
    }
  });
}
