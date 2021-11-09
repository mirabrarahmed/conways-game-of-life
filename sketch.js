function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  grid_world = new Grid(20, 15);

}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }