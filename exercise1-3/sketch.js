let brushColor;
let brushSize;
let clearCanvas;

function setup(){
    createCanvas(800, 600);
    const container = select('main')

    brushColor = createColorPicker();
    brushColor.parent(container);
    brushColor.size(50, 30);
    brushColor.position(110, 555);

    brushSize = createSlider(5, 50, 20);
    brushSize.parent(container);
    brushSize.size(100, 30);
    brushSize.position(280, 555, 20);

    clearCanvas = createButton("Clear");
    clearCanvas.parent(container);
    clearCanvas.size(60, 30);
    clearCanvas.position(width - 80, 555);
}

function draw(){
    noStroke()
    fill(200)
    rect(0, height - 60, width, 60)
    fill(0)
    circle(410, 570, brushSize.value())
    clearCanvas.mousePressed(reset)
    displayText()
}

function reset(){
    background(255)
}

function mouseDragged(){
    fill(brushColor.value());
    circle(mouseX, mouseY, brushSize.value())
}

function displayText(){
    fill(0);
    textSize(15);
    text("Brush Color:", 15, 577);
    text("Brush Size:", 190, 577);
}