function getPlayerPosition() {
  const playerPosition = document.querySelector("#playerPosition");
  return playerPosition.value;
}
function getPlayerName() {
  const playerName = document.querySelector("#playerName");
  return playerName.value;
}
function getPlayerNumber() {
  const playerNumber = document.querySelector("#playerNumber");
  return playerNumber.value;
}
function getEraseNumber() {
  const playerNumberErase = document.querySelector("#playerDeleteNumber");
  return playerNumberErase.value;
}
function insertPlayer() {
  let positionPlayerValue = getPlayerPosition();
  let namePlayerValue = getPlayerName();
  let numberPlayerValue = getPlayerNumber();
  const confirmPlayer = confirm(`Confirma a escalação do jogador:
  Posição: ${positionPlayerValue} 
  Nome: ${namePlayerValue}
  Número: ${numberPlayerValue}`);
  if (confirmPlayer === true) {
    const individualPlayer = document.createElement("li");
    const listContainer = document.createElement("div");
    const playerHeader = document.createElement("h4");
    const playerText = document.createElement("span");

    playerHeader.innerText = namePlayerValue;

    listContainer.setAttribute("id", numberPlayerValue);
    playerText.innerText =
      "\n" +
      "Posição: " +
      positionPlayerValue +
      "\n" +
      "Camisa número: " +
      numberPlayerValue +
      "\n" +
      "\n";

    let playerInform = document.querySelector("#playerList");
    playerInform.appendChild(individualPlayer);
    individualPlayer.appendChild(listContainer);
    listContainer.appendChild(playerHeader);
    listContainer.appendChild(playerText);

    document.querySelector("#playerName").value = "";
    document.querySelector("#playerNumber").value = "";
    document.querySelector("#playerPosition").value = "";
  } else {
    alert(`Jogador não adicionado, tente novamente`);
  }
}

buttonConfirm.addEventListener("click", insertPlayer);

const buttonDelete = document.querySelector("#playerDeleteButton");
function playerDelete() {
  const eraseNumberValue = getEraseNumber();
  const deleteConfirm = confirm(
    `Confirma exclusão do jogador número ${eraseNumberValue}? `
  );
  if (deleteConfirm === true) {
    let playerForDelete = document.getElementById(eraseNumberValue);
    document
      .querySelector("#playerList")
      .removeChild(playerForDelete.parentNode);
    document.querySelector("#playerDeleteNumber").value = "";
  } else {
    alert(`Jogador não excluído, tente novamente`);
  }
}
buttonDelete.addEventListener("click", playerDelete);
