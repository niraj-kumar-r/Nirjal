const keyboardRows = document.querySelector(".row");
import { answerObject, answerArray, eligibleObject } from "/js/array.js";
console.log(answerObject);
class Board {
    constructor() {
        this._boardArray = 1;
    }

    get array() {
        return this._boardArray;
    }
}

let board = new Board();

// keyboardRows.addEventListener("click", board.addKeyPress);
