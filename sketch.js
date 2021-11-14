let rows = 0,
  cols = 0,
  button, world;

function setup() {
  createCanvas(windowWidth, windowHeight);

  button = createButton('Click to create new GRID');
  button.position(windowWidth / 2, windowHeight / 2-100);

  reset_button = createButton('Click to Reset');
  reset_button.position(windowWidth / 2, windowHeight / 2+100);

  start_button = createButton('Begin.. Life');
  start_button.position(windowWidth / 2, windowHeight / 2+200);

  createWorld();
}

function draw() {
  background(220);

  if (rows > 0) {
    button.mousePressed(createWorld);
    reset_button.mousePressed(resetWorld);
    start_button.mousePressed(startLife);
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
  
  button.position(world.end_x+10, world.end_y/2-60);
  button.size(100,50);

  reset_button.position(world.end_x+10, world.end_y/2);
  reset_button.size(100,35);

  start_button.position(world.end_x+10, world.end_y/2+45);
  start_button.size(100,35);
}

function resetWorld() {
  console.log("Resetting world");
  world.drawGrid(null,null,reset=true,start=false);
  button.position(world.end_x+10, world.end_y/2-60);
  button.size(100,50);

  reset_button.position(world.end_x+10, world.end_y/2);
  reset_button.size(100,35);

  start_button.position(world.end_x+10, world.end_y/2+45);
  start_button.size(100,35);
}

function startLife(){
  console.log("Starting Game of Life");
  world.drawGrid(null,null,reset=false,start=true);
  button.position(world.end_x+10, world.end_y/2-60);
  button.size(100,50);

  reset_button.position(world.end_x+10, world.end_y/2);
  reset_button.size(100,35);

  start_button.position(world.end_x+10, world.end_y/2+45);
  start_button.size(100,35);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  button.position(world.end_x+10, world.end_y/2-60);
  button.size(100,50);

  reset_button.position(world.end_x+10, world.end_y/2);
  reset_button.size(100,35);

  start_button.position(world.end_x+10, world.end_y/2+45);
  start_button.size(100,35);
}