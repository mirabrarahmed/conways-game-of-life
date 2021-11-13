let rows = 0,
  cols = 0,
  button, world;

function setup() {
  createCanvas(windowWidth, windowHeight);

  button = createButton('Click to create new GRID');
  button.position(windowWidth / 2, windowHeight / 2);

  reset_button = createButton('Click to Reset');
  reset_button.position(windowWidth / 2, windowHeight / 2+50);

  createWorld();
}

function draw() {
  background(220);

  if (rows > 0) {
    button.mousePressed(createWorld);
    reset_button.mousePressed(resetWorld);
    world.drawGrid();
  }

}

function mousePressed() {
  world.drawGrid(mouseX,mouseY);
}

function createWorld() {
  rows = window.prompt("Amount of rows: ");
  cols = window.prompt("Amount of cols: ");
  world = new Grid(rows, cols);
}

function resetWorld() {
  console.log("Resetting world");
  world.drawGrid(null,null,reset=true);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  button.position(windowWidth / 2, windowHeight / 2);
}