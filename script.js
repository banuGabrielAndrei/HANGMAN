let words = ['wellcode', 'programming', 'javascript', 'laptop', 'projects', 'it'];
let wordIndex;
let lettersNr = [];
let livesNumber = 7;
let result = document.getElementById("displayResult");

function setRandomWord() {
     wordIndex = Math.floor(Math.random() * words.length);
}

function startGame() {
    resetGame();
    for (let i = 0; i < words[wordIndex].length; ++i) {
        lettersNr[i] = "_";
        document.getElementById("wordContainer").textContent += lettersNr[i] + " ";
    }
}

function checkLetter() {
    let inputLetter = document.getElementById("typedLetter").value;
    let selectedWord = words[wordIndex];
    found = false;
    for (let i = 0; i < selectedWord.length; ++i) {
        if (selectedWord[i] == inputLetter) {
            lettersNr[i] = inputLetter;
            found = true;
        } 
    }
    if (found == false) {
        --livesNumber;
    }
    document.getElementById("typedLetter").value = "";
    document.getElementById("numberOfLives").textContent = "";
    document.getElementById("numberOfLives").textContent += "You have " + " " + livesNumber + " " + " lives left!";
    document.getElementById("wordContainer").textContent = lettersNr.join(" ");
    checkWinner();
}

function checkWinner() {
    if (livesNumber == 0) {
        result.textContent = "YOU LOST!";
    } else if (lettersNr.join("") == words[wordIndex]) {
        result.textContent = "YOU WON THE GAME!";
    }
}

function resetGame() {
    lettersNr = [];
    setRandomWord();
    document.getElementById("wordContainer").textContent = "";
    result.textContent = "";
    document.getElementById("numberOfLives").textContent = "";
    livesNumber = 7;
}