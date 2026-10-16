<h2 class="c-project-heading--task">Move the spark</h2>

Change `sparkX` and `sparkY` inside `draw()` so the spark moves every frame. `draw()` runs many times a second, and each run draws a new frame. Moving the spark a little in each frame makes it look like it is moving smoothly.

Store the mouse position in `orbX`, then add the spark speeds to the spark position.

<div class="c-project-code">

--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 12
line_highlights: 15-17
---
function draw() {
  background("midnightblue");

  orbX = mouseX || orbX;
  sparkX = sparkX + sparkSpeedX;
  sparkY = sparkY + sparkSpeedY;

  textSize(44);
  text("✨", sparkX, sparkY);
}
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Run the project and watch the spark move across the canvas.

<div class="c-project-output">
  <img src="images/step3.gif" alt="Step 3 output showing the spark moving across the canvas.">
</div>
