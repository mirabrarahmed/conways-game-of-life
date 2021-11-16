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
    this.life = false;

    fill(255);
    //strokeWeight(2);

    this.x = 10, this.y = 10;
    this.end_x = 0, this.end_y = 0;

    for (let row = 0; row < rows; row++) {

      this.grid[row] = new Array(cols);

      for (let col = 0; col < cols; col++) {
        let X = Cell.size * col + this.x;
        let Y = Cell.size * row + this.y;

        this.grid[row][col] = new Cell(X, Y, row, col);
      }

      this.end_x = this.x + Cell.size * cols;
      this.end_y = this.y + Cell.size * rows;
    }

  }
  
  drawGrid(mx=null,my=null,reset=false,start=false) {

    if (start){
      this.life = true;
    }
    if (reset){
      this.life = false;
    }

    if(this.life){
      this.calcAllNeighbors();
    }


    let grid = this.grid;
    let all_cell_dead = true;

    for (let row of grid) {
      for (let cell of row) {

        if ( !this.life && mx && my && cell.mouseHover(mx, my) ) {
          print(cell.row_pos+"  "+cell.col_pos);
          cell.changeColor();
        }

        //IF LIFE
        if (this.life){
          cell.applyRulesOfLife();
        }

        //Checking whether a single cell is alive
        if(cell.color==0){
          all_cell_dead=false;
        }

        if (reset){
          cell.color = 255;
        }
        cell.drawCell();
      }
    }
    
    //If game is on but all cell is dead
    if(this.life && all_cell_dead){
      return -1;
    }

  }

  calcAllNeighbors(){
    let grid = this.grid;
    for (let row of grid){
      for (let cell of row){
        cell.alive_neighbors = 0;

        let r = cell.row_pos;
        let c = cell.col_pos;
        
        let up_left,up,up_right, left,right, down_left,down,down_right;

        if( r-1 >=0 && c-1 >=0 ){
          up_left = grid[r-1][c-1].color;
          let add = (up_left==255)?0:1;
          cell.alive_neighbors+=add;
        }
        if ( r-1 >= 0){
          up = grid[r-1][c].color;
          let add = (up==255)?0:1;
          cell.alive_neighbors+=add;
        }
        if(r-1 >= 0 && c+1<this.cols){
          up_right = grid[r-1][c+1].color;
          let add = (up_right==255)?0:1;
          cell.alive_neighbors+=add;
        }
        if(c-1 >= 0){
          left = grid[r][c-1].color;
          let add = (left==255)?0:1;
          cell.alive_neighbors+=add;
        }
        if(c+1 < this.cols){
          right = grid[r][c+1].color;
          let add = (right==255)?0:1;
          cell.alive_neighbors+=add;
        }
        if(r+1< this.rows && c-1>=0){
          down_left = grid[r+1][c-1].color;
          let add = (down_left==255)?0:1;
          cell.alive_neighbors+=add;
        }
        if(r+1< this.rows){
          down = grid[r+1][c].color;
          let add = (down==255)?0:1;
          cell.alive_neighbors+=add;
        }
        if(r+1<this.rows && c+1<this.cols){
          down_right = grid[r+1][c+1].color;
          let add = (down_right==255) ? 0:1;
          cell.alive_neighbors+=add;
        }
      }
    }
  }

}