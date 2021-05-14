let penSize = 5;
let penState = 0;
var pointer = "black";
var eraser = "blue";

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
  title = text("Draw A Lockdown Memory!", 30, 100);
  textFont(Archivo, 15);
  title = text("Instructions:", 30, 130);
  title = text("1. Use the colour-picker above to choose your colours", 30, 150);
  title = text("2. Use the right arrow key to increase the brush size", 30, 170);
  title = text("3. Use the left arrow key to decrease the brush size", 30, 190);
  title = text("4. Click & hold to draw", 30, 210);
  title = text("5. Download your drawing and email it to us below!", 30, 230);
  title = text("6. Smile!", 30, 260);
}

function draw() {
  if (mouseIsPressed) {
    stroke(pointer);
    strokeWeight(penSize);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }


noStroke();

//Button1
fill("yellow");
rect(0, 0, 40, 40);

//drawing 2nd button
fill("orange");
rect(40, 0, 40, 40);

//Drawing 3rd button
fill("red");
rect(80, 0, 40, 40);

//Drawing 3rd button
fill("skyblue");
rect(120, 0, 40, 40);

//Drawing 4th button
fill("cyan");
rect(160, 0, 40, 40);

//Drawing 5th button
fill("royalblue");
rect(200, 0, 40, 40);

//Drawing 6th button
fill("dodgerblue");
rect(240, 0, 40, 40);

//Drawing 7th button
fill("blue");
rect(280, 0, 40, 40);

//Drawing 8th button
fill("lightgreen");
rect(320, 0, 40, 40);

//Drawing 9th button
fill("lime");
rect(360, 0, 40, 40);

//Drawing 7th button
fill("seagreen");
rect(400, 0, 40, 40);

//Drawing 7th button
fill("green");
rect(440, 0, 40, 40);

//Drawing 7th button
fill("darkgreen");
rect(480, 0, 40, 40);

fill("grey");
rect(520, 0, 40, 40);

fill("black");
rect(560, 0, 40, 40);

fill("pink");
rect(600, 0, 40, 40);
strokeWeight(10);
}




function mousePressed() 
{
if(mouseX > 0 && mouseX < 40 && mouseY > 0 && mouseY < 40) 
{
  pointer = "yellow";
}

if(mouseX > 40 && mouseX < 80 && mouseY > 0 && mouseY < 40) 
{
  pointer = "orange";
}

if(mouseX > 80 && mouseX < 120 && mouseY > 0 && mouseY < 40)
{
  pointer = "red";
}

if(mouseX > 120 && mouseX < 160 && mouseY > 0 && mouseY <40)
{
  pointer = "skyblue";
}

if(mouseX > 160 && mouseX < 200 && mouseY > 0 && mouseY < 40)
{
  pointer = "cyan";
}

if(mouseX > 200 && mouseX < 240 && mouseY > 0 && mouseY < 40)
{
  pointer = "royalblue";
}

if(mouseX > 240 && mouseX < 280 && mouseY > 0 && mouseY < 40)
{
  pointer = "dodgerblue";
}

if(mouseX > 280 && mouseX < 320 && mouseY > 0 && mouseY < 40)
{
  pointer = "blue";
}

if(mouseX > 320 && mouseX < 360 && mouseY > 0 && mouseY < 40)
{
  pointer = "lightgreen";
}

if(mouseX > 360 && mouseX < 400 && mouseY > 0 && mouseY < 40)
{
  pointer = "lime";
}

if(mouseX > 400 && mouseX < 440 && mouseY > 0 && mouseY < 40)
{
  pointer = "seagreen";
}

if(mouseX > 440 && mouseX < 480 && mouseY > 0 && mouseY < 40)
{
  pointer = "green";
}

if(mouseX > 480 && mouseX < 520 && mouseY > 0 && mouseY < 40)
{
  pointer = "darkgreen";
}

if(mouseX > 520 && mouseX < 560 && mouseY > 0 && mouseY < 40)
{
  pointer = "grey";
}  

if(mouseX > 560 && mouseX < 600 && mouseY > 0 && mouseY < 40)
{
  pointer = "black";
}

if(mouseX > 600 && mouseX < 640 && mouseY > 0 && mouseY < 40)
{
  pointer = "white";
}
}

function keyPressed() {
  if (keyCode == LEFT_ARROW && penSize > 5) {
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
