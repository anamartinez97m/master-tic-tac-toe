import Cell from './cell.js'

export default class TicTacToe {
    constructor() {
        this.initializeGameBoard();
    }

    initializeGameBoard() {
        this.cells = new Array(9);

        for(let i = 0; i < this.cells.length; i++) {
            this.cells[i] = new Cell(i);
        }
    }

    resetGame() {
        this.initializeGameBoard();
        // alert('¡Juego reiniciado!');
        console.log(this.getCells());
    }

    getCells() {
        return this.cells;
    }

    canPlayerWin(player) {
        const positionsThatCanWin = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

        const positionsPlayedByPlayer = this.cells
            .filter(({player: playerIcon}) => {
                return playerIcon === player.getIcon();
            })
            .map(({index}) => {
                return index;
            });
        
        console.log(positionsPlayedByPlayer);

        return positionsThatCanWin.some((arr) => {
            return arr.toString() === positionsPlayedByPlayer.toString();
        });
    }

    isCellMarked(cell) {
        return this.cells[cell.index].isCellMarked === true;
    }

    isGameTableComplete() {
        return !this.cells.some(
            ({isCellMarked}) => {
                return isCellMarked === false;
            });
    }

    isGameTied(playerOne, playerTwo) {
        return this.canPlayerWin(playerOne) && this.canPlayerWin(playerTwo) && this.isGameTableComplete();
    }

    hasTheGameFinished(playerOne, playerTwo) {
        return this.isGameTied(playerOne, playerTwo) || this.canPlayerWin(playerOne) || this.canPlayerWin(playerTwo);
    }

    markCell(cellPosition, player) {
        if (!this.isGameTableComplete() && !this.isCellMarked(this.cells[cellPosition])) {
            this.cells[cellPosition].player = player;
            this.cells[cellPosition].isCellMarked = true;

            document.getElementById('cellIndex' + cellPosition.toString()).innerHTML = player;
            return true;
        }

        return false;
    }
}