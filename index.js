let wordsList = ["alura", "desafio", "joguinho"];

function addNewWord() {
  const textInput = document.getElementById("input-field");
  wordsList.push(textInput.value);
  console.log(wordsList);
  clearInputField(textInput);
  startGame();
}

function clearInputField(field) {
  field.value = "";
}

function startGame() {
  window.location.href = "/game.html";
  const secretWord = drawSecretWord();
  drawLettersSpaces(secretWord.length);
}
