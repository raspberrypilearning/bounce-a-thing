<h2 class="c-project-heading--task">Bounce Up and Down</h2>

Make the spark bounce off the top and bottom edges too.

### Step 1

The spark already bounces from the side walls. Now add the same idea for the top and bottom edges.

### Step 2

Check whether `sparkY` has reached the top or bottom of the canvas. If it has, reverse `sparkSpeedY`.

<div class="c-project-code">

--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 19
line_highlights: 23-25
---
  if (sparkX < 20 || sparkX > width - 20) {
    sparkSpeedX *= -1;
  }

  if (sparkY < 20 || sparkY > height - 20) {
    sparkSpeedY *= -1;
  }
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Run the project and watch the spark bounce around the whole canvas.

<div class="c-project-output">
  <img src="images/step_5_output.svg" alt="Step 5 output showing the spark bouncing after reaching the top or bottom edge.">
</div>
