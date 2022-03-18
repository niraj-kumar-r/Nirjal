import { answerArray, eligibleObject } from "/js/array.js";

class Board {
    constructor() {
        this.boardArray = ["", "", "", "", ""];
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
