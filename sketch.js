let penSize = 1;
let penState = 0;
var color_picker;

let Archivo;
function preload() {
  Archivo = loadFont(
    "https://cdn.glitch.com/b0f38a5f-fd5b-4a93-a669-dd9ce2328985%2FArchivo-Regular.ttf?v=1615548913164"
  );
}

function setup() {
  var cnv = createCanvas(windowWidth - 400, windowHeight - 300);
  cnv.parent("tool");
  background(255);
  textFont(Archivo, 40);
  title = text("Question goes here!", 30, 50);
  textFont(Archivo, 15);
  title = text("Instructions:", 30, 80);
  title = text("1. Use the colour-picker above to choose a colour", 30, 100);
  title = text("2. Use the right arrow key to increase the pen size", 30, 120);
  title = text("3. Use the left arrow key to decrease the pen size", 30, 140);
  title = text("4. Click & hold to draw", 30, 160);
  title = text("5. Upload your drawing", 30, 180);
  title = text("6. Smile!", 30, 200);
  title = text("7. Press C to clear the canvas", 30, 220);
  color_picker = createColorPicker("green");
  color_picker.size(windowWidth - 400, 30);
  color_picker.parent("picker");
}

function draw() {
  stroke(color_picker.color());
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyTyped() {
  if (key == "c") {
    background(255);
  }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW && penSize > 1) {
    penSize -= 5;
  }

  if (keyCode == RIGHT_ARROW) {
    penSize += 5;
  }

  strokeWeight(penSize);
}

function saveImage() {
  save("mycovid" + ".jpg");
}

window.onresize = function () {
  var w = windowWidth;
  var h = windowHeight;
  canvas.size(w, h);
  width = w;
  height = h;
};
