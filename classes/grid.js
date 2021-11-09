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
    this.grid = new Array(rows);

    fill(255);
    strokeWeight(2);

    this.x = 10, this.y = 10;
    this.end_x = 0, this.end_y = 0;

    for (let row = 0; row < rows; row++) {

      this.grid[row] = new Array(cols);

      for (let col = 0; col < cols; col++) {
        let X = Cell.size * col + this.x;
        let Y = Cell.size * row + this.y;
        this.grid[row][col] = new Cell(X, Y);
      }

      this.end_x = this.x + Cell.size * cols;
      this.end_y = this.y + Cell.size * rows;
    }

  }

  drawGrid() {
    for (let row of this.grid) {
      for (let cell of row) {
        cell.drawCell();
      }
    }
  }

  checkCellColor(mx, my) {
    for (let row of this.grid) {
      for (let cell of row) {
        if (cell.mouseHover(mx, my)) {
          cell.changeColor();
        }
      }
    }
  }

}