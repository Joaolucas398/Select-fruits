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

  //criando o Dropdown com o array de frutas
  let select = document.getElementById("frutas");
  for (var i = 0; i < frutas.length; i++) {
    let option = document.createElement("option");
    option.value = frutas[i];
    option.text = frutas[i];
    select.appendChild(option);
  }

  //Criando e exibindo a lista de frutas selecinadas
  let frutasSelecionadas = [];
  var ulElement = document.getElementById("frutasSelecionadas");

  select.addEventListener("change", function () {
    let opcoesSelecionadas = select.selectedOptions;
    ulElement.innerHTML = "";

    for (var i = 0; i < opcoesSelecionadas.length; i++) {
      let frutaSelecionada = opcoesSelecionadas[i].value;
      frutasSelecionadas.push(frutaSelecionada);
    }

    for (var i = 0; i < frutasSelecionadas.length; i++) {
      let index = i;
      let cardFrutas = document.createElement("li");
      cardFrutas.textContent = frutasSelecionadas[i];

      let removeButton = document.createElement("button");
      removeButton.textContent = "remover";
      removeButton.addEventListener("click", function () {
        frutasSelecionadas.splice(index, 1);
        cardFrutas.remove();
        frutasSelecionadas.length = 0;
      });

      ulElement.appendChild(cardFrutas);
      cardFrutas.appendChild(removeButton);
    }
  });
}
