let words = ['wellcode', 'programming', 'javascript', 'laptop', 'projects', 'it'];
let wordIndex;
let lettersNr = [];
let livesNumber = 7;
let result = document.getElementById("displayResult");

function setWord() {
     wordIndex = Math.floor(Math.random() * words.length);
     console.log(words[wordIndex])
}

function startGame() {
    resetGame();
    for (let i = 0; i < words[wordIndex].length; ++i) {
        lettersNr[i] = "_";
        document.getElementById("wordContainer").textContent += lettersNr[i] + " ";
    }
    window.onload;
}

function checkLetter() {
    let inputLetter = document.getElementById("typedLetter").value;
    let abc = words[wordIndex];
    found = false;
    for (let i = 0; i < abc.length; ++i) {
        if (abc[i] == inputLetter) {
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
    console.log(lettersNr)
    console.log(words[wordIndex])
}

function resetGame() {
    lettersNr = [];
    setWord();
    document.getElementById("wordContainer").textContent ="";
    result.textContent = "";
    document.getElementById("numberOfLives").textContent = "";
}


