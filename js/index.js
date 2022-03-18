import { answerArray, answerObject, eligibleObject } from "/js/array.js";

class Board {
    constructor() {
        this.boardArray = [];
        this.currentWord = "";
        this.wordCounter = 0;

        let randomWord =
            answerArray[
                Math.floor(Math.random() * answerArray.length)
            ].toUpperCase();
        console.log(randomWord, "randomWord");

        this.matchWord = () => {
            console.log(randomWord, this.currentWord);

            return randomWord.split("").map((actualLetter, index) => {
                if (actualLetter === this.currentWord[index]) {
                    return 1;
                } else if (randomWord.includes(this.currentWord[index])) {
                    return 0;
                } else {
                    return -1;
                }
            });
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
            (eligibleObject[this.currentWord.toLowerCase()] === true ||
                answerObject[this.currentWord.toLowerCase()] === true)
        ) {
            this.changeBoardRow(this.matchWord(), this.wordCounter);
            this.boardArray.push(this.matchWord());
            this.wordCounter += 1;
            this.currentWord = "";
        } else if (
            eligibleObject[this.currentWord.toLowerCase()] !== true ||
            answerObject[this.currentWord.toLowerCase()] !== true
        ) {
            console.log("Not in word List");
        }
    }

    changeBoardRow(matchArray, row) {
        console.log(matchArray);
        matchArray.forEach((resultState, index) => {
            if (resultState === 1) {
                document
                    .getElementById(`${row}${index}`)
                    .classList.remove("neutral-button");
                document
                    .getElementById(`${row}${index}`)
                    .classList.add("right-button");
            } else if (resultState === 0) {
                document
                    .getElementById(`${row}${index}`)
                    .classList.remove("neutral-button");
                document
                    .getElementById(`${row}${index}`)
                    .classList.add("maybe-button");
            } else if (resultState === -1) {
                document
                    .getElementById(`${row}${index}`)
                    .classList.remove("neutral-button");
                document
                    .getElementById(`${row}${index}`)
                    .classList.add("wrong-button");
            }
        });
    }
}

const board = new Board();

const keyboardButtonHandler = (event) => {
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
