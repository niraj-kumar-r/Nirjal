import { answerArray, eligibleObject } from "/js/array.js";

class Board {
    constructor() {
        this.boardArray = [];
        this.currentWord = "";
        this.wordCounter = 0;

        let randomWord = answerArray[272].toUpperCase();
        console.log(randomWord, "randomWord");

        this.matchWord = () => {
            console.log(randomWord, this.currentWord);
            return randomWord
                .split("")
                .map((actualLetter, index) =>
                    this.currentWord.charAt(index) === actualLetter
                        ? true
                        : false
                );
        };
    }

    addLetter(letter) {
        if (this.currentWord.length < 5) {
            this.currentWord += letter;
            document.getElementById(
                `${this.wordCounter}${this.currentWord.length - 1}`
            ).textContent = letter;
        }
    }

    removeLetter() {
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

    processWord() {
        if (
            this.currentWord.length === 5 &&
            this.wordCounter < 6 &&
            eligibleObject[this.currentWord] === true
        ) {
            console.log(this.matchWord);
            changeBoardRow();
            this.boardArray.push(this.matchWord());
            this.wordCounter += 1;
        }
    }

    changeBoardRow() {}
}

const board = new Board();

const keyboardButtonHandler = (event) => {
    console.log(event.target.id);
    if (event.target.id !== "ENTER" && event.target.id !== "DEL") {
        board.addLetter(event.target.id);
    } else if (event.target.id === "DEL") {
        board.removeLetter();
    } else if (event.target.id === "ENTER") {
        board.processWord();
    }
};

const keyboardButtonArray = document.getElementsByClassName("keyboard-button");

for (let keyboardButton of keyboardButtonArray) {
    keyboardButton.addEventListener("click", keyboardButtonHandler);
}
