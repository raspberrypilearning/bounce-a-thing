let sparkX = 300;
let sparkY = 260;
let sparkSpeedX = 4;
let sparkSpeedY = -5;
let orbX = 300;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER, CENTER);
}

function draw() {
  background("midnightblue");

  orbX = mouseX || orbX;
  sparkX += sparkSpeedX;
  sparkY += sparkSpeedY;

  if (sparkY < 20 || sparkY > height - 20) {
    sparkSpeedY *= -1;
  }
  
  if (sparkX < 20 || sparkX > width - 20) {
    sparkSpeedX *= -1;
  }

  textSize(44);
  text("✨", sparkX, sparkY);
}
