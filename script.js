import TicTacToe from './ticTacToe.js';
import Player from './player.js';

const gameTypeManual = document.getElementById('gameTypeManual');
const gameTypeAutomatic = document.getElementById('gameTypeAutomatic');
const startButton = document.getElementById('startGameButton');
const resetButton = document.getElementById('resetGameButton');
const statusPlayer = document.getElementById('statusPlayer');

const gameTable = new TicTacToe();
const playerOne = new Player('X');
const playerTwo = new Player('O');
let currentPlayer = playerOne;
let gameMode = '';


function switchCurrentPlayer() {
    (currentPlayer === playerOne) ? currentPlayer = playerTwo : currentPlayer = playerOne;
    statusPlayer.innerHTML = currentPlayer.icon;
}

function handleClickEvent(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('cellIndex'));

    if (gameTable.markCell(clickedCellIndex, currentPlayer.icon, gameMode)) {
        switchCurrentPlayer();
    } else {
        if(gameTable.hasTheGameFinished(playerOne, playerTwo)) {
            alert('El juego ha terminado! Ha ganado el jugador: ', currentPlayer.icon);
            resetGameTable();
        } else {
            alert('Casilla ocupada. Seleccione otra');
        }
    }
}

function resetGameTable() {
    document.querySelectorAll('.cell').forEach((cell) => cell.innerHTML = '');
    currentPlayer = playerOne;
    statusPlayer.innerHTML = currentPlayer.icon;
    gameTypeManual.checked = false;
    gameTypeAutomatic.checked = false;
    gameTypeManual.disabled = false;
    gameTypeAutomatic.disabled = false;
    startButton.disabled = false;
    resetButton.disabled = true;

    gameTable.resetGame()
}

window.onload = () => {
    resetButton.disabled = true;

    startButton.onclick = () => {
        if(gameTypeManual.checked) {
            gameTypeManual.disabled = true;
            gameTypeAutomatic.disabled = true;
            startButton.disabled = true;
            gameMode = 'manual';

        } else if(gameTypeAutomatic.checked) {
            gameTypeManual.disabled = true;
            gameTypeAutomatic.disabled = true;
            startButton.disabled = true;
            gameMode = 'automatic';

        } else {
            alert('Selecciona un modo de juego');
        }
        resetButton.disabled = false;
        document.querySelectorAll('.cell').forEach((cell) => cell.addEventListener('click', handleClickEvent));
    }

    resetButton.onclick = () => {
        resetGameTable();
    };
};