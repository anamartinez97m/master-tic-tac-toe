export default class Cell {
    constructor(position) {
        this.index = position;
        this.player = '';
        this.isCellMarked = false;
    }

    markCell(player) {
        this.player = player;
        this.isCellMarked = true;
    }
}