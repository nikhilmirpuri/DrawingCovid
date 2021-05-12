let penSize = 1;
let penState = 0;

let Archivo;
function preload() {
  Archivo = loadFont(
    "https://cdn.glitch.com/b0f38a5f-fd5b-4a93-a669-dd9ce2328985%2FArchivo-Regular.ttf?v=1615548913164"
  );
}

function setup() {
  let cnv = createCanvas(1200, 600);
  cnv.parent("tool");
  background(255);
  textFont(Archivo, 40);
  title = text("Question goes here!", 30, 50);
  textFont(Archivo, 15);
  title = text("Instructions:", 30, 80);
  title = text("1. Use the Slider on the Left to Pick a Colour", 30, 100);
  title = text("2. Click & Hold to Draw", 30, 120);
  title = text("3. Upload your Drawing", 30, 140);
  title = text("4. Smile!", 30, 160);
  title = text("5. Press C to Clear the Canvas", 30, 180);
}

function draw() {
  if (mouseIsPressed) {
    if (penState == 0) {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }

    if (penState == 1) {
      ellipse(mouseX, mouseY, 10, 10);
    }

    if (penState == 2) {
      line(mouseX - 5, mouseY - 5, mouseX + 5, mouseY + 5);
      line(mouseX + 5, mouseY - 5, mouseX - 5, mouseY + 5);
    }
  }
}

function keyTyped() {
  if (key == "c") {
    background(255);
  }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW && penSize > 1) {
    penSize -= 1;
  }

  if (keyCode == RIGHT_ARROW) {
    penSize += 1;
  }

  strokeWeight(penSize);
}

function saveImage() {
  save("mycovid" + ".jpg");
}
