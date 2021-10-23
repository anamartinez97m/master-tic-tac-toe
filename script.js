import TicTacToe from './ticTacToe.js';
import Player from './player.js';
import Cell from './cell.js';

const gameTable = new TicTacToe();
const playerOne = new Player('X');
const playerTwo = new Player('O');
let currentPlayer = playerOne;

// const pos1 = 0;
// const pos2 = 4;
// const pos3 = 8;

// const pos4 = 1;
// const pos5 = 2;
// const pos6 = 3;

// gameTable.markCell(pos1, playerOne.getIcon());
// gameTable.markCell(pos2, playerOne.getIcon());
// gameTable.markCell(pos3, playerOne.getIcon());

// gameTable.markCell(pos4, playerTwo.getIcon());
// gameTable.markCell(pos5, playerTwo.getIcon());
// gameTable.markCell(pos6, playerTwo.getIcon());

// console.log(gameTable.getCells());

// console.log('Can player one win?: ', gameTable.canPlayerWin(playerOne));
// console.log('Can player two win?: ', gameTable.canPlayerWin(playerTwo));

// console.log('Is game tied?: ', gameTable.isGameTied(playerOne, playerTwo));
// console.log('Has the game finished?: ', gameTable.hasTheGameFinished(playerOne, playerTwo));

function switchCurrentPlayer() {
    (currentPlayer === playerOne) ? currentPlayer = playerTwo : currentPlayer = playerOne;
    document.getElementById('statusPlayer').innerHTML = currentPlayer.icon;
}

// function handleClickEvent(clickedCellEvent) {
//     const clickedCell = clickedCellEvent.target;
//     const clickedCellIndex = parseInt(clickedCell.getAttribute('cellIndex'));
//     gameTable.markCell(clickedCellIndex, 'X');
// }

window.onload = () => {
    document.getElementById('resetGameButton').onclick = () => {
        currentPlayer = playerOne;
        document.getElementById('statusPlayer').innerHTML = currentPlayer.icon;
        document.getElementById('cellIndex1').innerHTML = 'Cell1';
        return gameTable.resetGame()
    };
    // document.querySelectorAll('.cell').forEach((cell) => cell.addEventListener('click', handleClickEvent()));
    document.getElementById('cellIndex1').onclick = () => 
        gameTable.markCell(1, 'X')? switchCurrentPlayer() : alert('Casilla ocupada. Seleccione otra');
};