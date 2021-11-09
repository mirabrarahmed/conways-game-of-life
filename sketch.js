let rows=0,cols=0,button;

function setup() {
  createCanvas(windowWidth, windowHeight);

  button = createButton('Click to create new GRID');
  button.position(windowWidth/2, windowHeight/2);
}

function draw() {
  background(220);

  button.mousePressed(inputRowCol);

  grid_world = new Grid(rows, cols);
}

function inputRowCol(){
  rows = window.prompt("Amount of rows: ");
  cols = window.prompt("Amount of cols: ");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  button.position(windowWidth/2, windowHeight/2);
}