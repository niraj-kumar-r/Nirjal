import { answerObject, answerArray, eligibleObject } from "/js/array.js";

class Board {
    constructor() {
        this.boardArray = [
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
        ];
        this.row = 0;
        this.col = 0;
    }

    goAhead() {
        if (this.col < 4) {
            this.col += 1;
        }
    }

    goBack() {
        if (this.col > 0) {
            this.col -= 1;
        }
    }

    addLetter(key) {
        this.boardArray[this.row][this.col] = key;
        document.getElementById(`${this.row}${this.col}`).textContent = key;
        this.goAhead();
    }

    removeLetter() {
        this.boardArray[this.row][this.col] = "";
        document.getElementById(`${this.row}${this.col}`).textContent = null;
        this.goBack();
    }
}

const board = new Board();

const addKeyPress = (event) => {
    console.log(event.target);
    if (event.target.id !== "ENTER" && event.target.id !== "DEL") {
        board.addLetter(event.target.id);
    } else if (event.target.id === "DEL") {
        board.removeLetter();
    }
};

const keyboardButtonArray = document.getElementsByClassName("keyboard-button");

for (let keyboardButton of keyboardButtonArray) {
    keyboardButton.addEventListener("click", addKeyPress);
}
