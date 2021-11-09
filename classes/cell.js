/** @class Cell class representing a cell. */
class Cell {

    /** 
     * Cell takes 3 arguments x , y, size
     * and creates a cell of given size
     * at x,y position
     * @param {number} x - x position
     * @param {number} y - y position
     *
     */
    static size = 25;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        //this.size=size;

        fill(255);
        strokeWeight(2);
        rect(this.x, this.y, Cell.size);
    }
}