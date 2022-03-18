import { answerArray, eligibleObject } from "/js/array.js";

class Board {
    constructor() {
        this.boardArray = ["", "", "", "", ""];
        this.currentWord = "";
        this.wordCounter = 0;
    }

    addLetter(letter) {
        if (this.currentWord.length < 5) {
            this.currentWord += letter;
            document.getElementById(
                `${this.wordCounter}${this.currentWord.length - 1}`
            ).textContent = letter;
        }
    }

    removeLetter(letter) {
        if (this.currentWord.length > 0) {
            document.getElementById(
                `${this.wordCounter}${this.currentWord.length - 1}`
            ).textContent = null;
            this.currentWord = this.currentWord.slice(
                0,
                this.currentWord.length - 1
            );
        }
    }
}

const board = new Board();

const keyboardButtonHandler = (event) => {
    console.log(event.target.id);
    if (event.target.id !== "ENTER" && event.target.id !== "DEL") {
        board.addLetter(event.target.id);
    } else if (event.target.id === "DEL") {
        board.removeLetter();
    } else if (event.target.id === "ENTER") {
        board.matchWord();
    }
};

const keyboardButtonArray = document.getElementsByClassName("keyboard-button");

for (let keyboardButton of keyboardButtonArray) {
    keyboardButton.addEventListener("click", keyboardButtonHandler);
}
