let rows = 0,
  cols = 0,
  button, world,
  fr=5;

function setup() {
  frameRate(fr);

  createCanvas(windowWidth, windowHeight);

  button = createButton('Click to create new GRID');
  // button.position(windowWidth / 2, windowHeight / 2-100);

  reset_button = createButton('Click to Reset');
  // reset_button.position(windowWidth / 2, windowHeight / 2+100);

  start_button = createButton('Begin.. Life');
  // start_button.position(windowWidth/2, windowHeight / 2+200);

  speed_slider = createSlider(1,15,fr,0);
  // speed_slider.position(windowWidth/2, windowHeight / 2+400);

  createWorld();
}

function draw() {

  fr = speed_slider.value();
  frameRate(fr);

  background(220);

  if (rows > 0) {
    button.mousePressed(createWorld);
    reset_button.mousePressed(resetWorld);
    start_button.mousePressed(startLife);
    let flag = world.drawGrid();

    if (flag === -1){
      resetWorld();
    }
  }

}

function mouseClicked() {
  world.drawGrid(mouseX,mouseY);
}

function createWorld() {
  rows = window.prompt("Amount of rows: ");
  cols = window.prompt("Amount of cols: ");
  world = new Grid(rows, cols);
  
  //button.position(world.end_x+10, world.end_y/2-60);
  button.position(world.end_x/2-200, world.end_y+10);
  button.size(100,50);

  // reset_button.position(world.end_x+10, world.end_y/2);
  reset_button.position(world.end_x/2-80, world.end_y+10);
  reset_button.size(100,35);

  // start_button.position(world.end_x+10, world.end_y/2+45);
  start_button.position(world.end_x/2+50, world.end_y+10);
  start_button.size(100,35);

  // speed_slider.position(world.end_x+10, world.end_y/2+90);
  speed_slider.position(world.end_x/2+180, world.end_y+10);
  speed_slider.size(100,35);
}

function resetWorld() {
  console.log("Resetting world");
  world.drawGrid(null,null,reset=true,start=false);
  // button.position(world.end_x+10, world.end_y/2-60);
  button.position(world.end_x/2-200, world.end_y+10);
  button.size(100,50);

  // reset_button.position(world.end_x+10, world.end_y/2);
  reset_button.position(world.end_x/2-80, world.end_y+10);
  reset_button.size(100,35);

  // start_button.position(world.end_x+10, world.end_y/2+45);
  start_button.position(world.end_x/2+50, world.end_y+10);
  start_button.size(100,35);

  // speed_slider.position(world.end_x+10, world.end_y/2+90);
  speed_slider.position(world.end_x/2+180, world.end_y+10);
  speed_slider.size(100,35);
}

function startLife(){
  console.log("Starting Game of Life");
  world.drawGrid(null,null,reset=false,start=true);
  // button.position(world.end_x+10, world.end_y/2-60);
  button.position(world.end_x/2-200, world.end_y+10);
  button.size(100,50);

  // reset_button.position(world.end_x+10, world.end_y/2);
  reset_button.position(world.end_x/2-80, world.end_y+10);
  reset_button.size(100,35);

  // start_button.position(world.end_x+10, world.end_y/2+45);
  start_button.position(world.end_x/2+50, world.end_y+10);
  start_button.size(100,35);

  // speed_slider.position(world.end_x+10, world.end_y/2+90);
  speed_slider.position(world.end_x/2+180, world.end_y+10);
  speed_slider.size(100,35);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}