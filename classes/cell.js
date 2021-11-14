/** @class Cell class representing a cell. */
class Cell {

    /** 
     * Cell takes 3 arguments x , y, size
     * and creates a cell of given size
     * at x,y position
     * @param {number} x - x position
     * @param {number} y - y position
     */
    static size = 25;

    constructor(x, y, row_pos, col_pos) {
        this.x = x;
        this.y = y;
        this.row_pos = row_pos;
        this.col_pos = col_pos;
        this.end_x = x + Cell.size;
        this.end_y = y + Cell.size;

        this.color = 255;
        this.alive_neighbors = 0;
    }

    drawCell() {
        fill(this.color);
        strokeWeight(2);
        rect(this.x, this.y, Cell.size);
    }

    /**
     * returns true if mouse is pressed while within the cell otherwise return false
     * @param {number} mx - x position of the Mouse
     * @param {number} my - y position of the Mouse
     * @returns {boolean}
     */
    mouseHover(mx, my) {

        this.end_x = this.x + Cell.size;
        this.end_y = this.y + Cell.size;

        return (mx > this.x + 1 && mx < this.end_x - 1 && my > this.y + 1 && my < this.end_y - 1);
    }

    /**
     * changes the color of the cell
     */
    changeColor() {
        console.log('COLOR CHANGED FROM', this.color);
        this.color = (this.color === 255) ? 0 : 255;
        console.log('TO', Math.abs(this.color - this.color));
    }
}