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
  for (const element of frutas) {
    let option = document.createElement("option");
    option.value = element;
    option.text = element;
    select.appendChild(option);
  }

  //Criando e exibindo a lista de frutas selecinadas
  let frutasSelecionadas = [];
  let ulElement = document.getElementById("frutasSelecionadas");

  select.addEventListener("change", function () {
    let opcoesSelecionadas = select.selectedOptions;
    ulElement.innerHTML = "";

    for (const element of opcoesSelecionadas) {
      let frutaSelecionada = element.value;
      frutasSelecionadas.push(frutaSelecionada);
    }

    for (let i = 0; i < frutasSelecionadas.length; i++) {
      let index = i;
      let cardFrutas = document.createElement("li");
      cardFrutas.textContent = frutasSelecionadas[i];

      let removeButton = document.createElement("button");
      removeButton.textContent = "X";
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
