import { answerArray, eligibleObject } from "/js/array.js";

class Board {
    constructor() {
        this.boardArray = ["", "", "", "", ""];
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
