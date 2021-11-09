/** @class Grid class representing the whole grid. */
class Grid {

  /**
   * Creates a new Grid World
   * @constructor 
   * @param {number} rows - amount of rows in the grid
   * @param {number} cols - amount of columns in the grid
   */
  constructor(rows = 10, cols = 15) {

    this.rows = rows;
    this.cols = cols;
    this.world = new Array(rows);

    fill(255);
    strokeWeight(2);

    let x = 10,
      y = 10;
    for (let row = 0; row < rows; row++) {

      this.world[row] = new Array(cols);

      for (let col = 0; col < cols; col++) {
        this.world[row][col] = new Cell(Cell.size * col + x, Cell.size * row + y);
      }
    }
  }

}