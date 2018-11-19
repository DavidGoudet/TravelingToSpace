var population;
// Each rocket is alive till 400 frames
var lifespan = 400;
// Made to display count on screen
var lifeP;
// Keeps track of frames
var count = 0;
// Where rockets are trying to go
var target;
// Max force applied to rocket
var maxforce = 0.2;

// Dimensions of barrier
var rx = 300;
var ry = 150;
var rw = 200;
var rh = 30;
var rx2 = 0;

var generationNumber = 0;

function setup() {
  createCanvas(500, 600);
  population = new Population();
  lifeP = createP();
  target = createVector(width / 2, 50);
  lifeP.html("Generación: "+generationNumber);
}

function draw() {
  background(0);
  population.run();


  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    // Population = new Population();
    count = 0;
    generationNumber++;
    lifeP.html("Generación: "+generationNumber);

  }
  // Renders barrier for rockets
  fill(255);
  rect(rx, ry, rw, rh);
  rect(rx2, ry, rw, rh);
  // Renders target
  ellipse(target.x, target.y, 16, 16);
}