let rows = 0,
  cols = 0,
  button, world;

function setup() {
  createCanvas(windowWidth, windowHeight);

  button = createButton('Click to create new GRID');
  button.position(windowWidth / 2, windowHeight / 2);

  createWorld();
}

function draw() {
  background(220);

  if (rows > 0) {
    button.mousePressed(createWorld);
    world.drawGrid();
  }

}

function mousePressed() {
  world.checkCellColor(mouseX, mouseY);
}

function createWorld() {
  rows = window.prompt("Amount of rows: ");
  cols = window.prompt("Amount of cols: ");
  world = new Grid(rows, cols);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  button.position(windowWidth / 2, windowHeight / 2);
}