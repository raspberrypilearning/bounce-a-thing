<h2 class="c-project-heading--task">Start script.js</h2>

Build `script.js` so the project can open a canvas and store the spark position and speed.

### Step 1

Open the blank `script.js` from the file list. This is where we will build the sketch.

### Step 2

Add the starting variables for the spark. Then create `setup()` and an empty `draw()` function. In `setup()`, make a `600` by `600` canvas and centre any text you draw.

<div class="c-project-code">

--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 1
line_highlights: 1-11
---
let sparkX = 300;
let sparkY = 260;
let sparkSpeedX = 4;
let sparkSpeedY = -5;
let orbX = 300;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
}

function draw() {
}
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Run the project and check that a canvas appears on the page.

<div class="c-project-output">

  ![Step 1 output showing the Bounce A Spark page with an empty canvas.](images/step_1_output.svg)

</div>
