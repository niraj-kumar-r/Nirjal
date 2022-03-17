const keyboardRows = document.querySelector(".row");

class Board {
    constructor() {
        this._boardArray = 1;
    }

    get array() {
        return this._boardArray;
    }
}

let board = new Board();

console.log(board.array);
// keyboardRows.addEventListener("click", board.addKeyPress);
