<h2 class="c-project-heading--task">Draw the Spark</h2>

Draw the spark on a midnight blue background.

### Step 1

Replace the empty `draw()` function so it paints the background and draws the spark.

### Step 2

Use `background("midnightblue")` to colour the canvas. Then set a text size and draw the `✨` emoji at `sparkX` and `sparkY`.

<div class="c-project-code">

--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 12
line_highlights: 13-16
---
function draw() {
  background("midnightblue");

  textSize(44);
  text("✨", sparkX, sparkY);
}
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Run the project and check that the spark appears on the canvas.

<div class="c-project-output">
  <img src="images/step_2_output.png" alt="Step 2 output showing a spark emoji on a midnight blue canvas.">
</div>
