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
  const frutasSelecionadas = [];
  var ulElement = document.getElementById("frutasSelecionadas");

  select.addEventListener("change", function () {
    const opcoesSelecionadas = select.selectedOptions;
    ulElement.innerHTML = "";

    for (var i = 0; i < opcoesSelecionadas.length; i++) {
      const frutaSelecionada = opcoesSelecionadas[i].value;
      frutasSelecionadas.push(frutaSelecionada);
    }

    for (var i = 0; i < frutasSelecionadas.length; i++) {
      const index = i;
      let cardFrutas = document.createElement("li");
      cardFrutas.textContent = frutasSelecionadas[i];

      let removeButton = document.createElement("button");
      removeButton.textContent = "remover";
      removeButton.addEventListener("click", function () {
        frutasSelecionadas.splice(index, 1);
        cardFrutas.remove();
      });

      ulElement.appendChild(cardFrutas);
      cardFrutas.appendChild(removeButton);
    }
  });
}
