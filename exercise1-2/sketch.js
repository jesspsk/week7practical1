let pickBg;
let pickFill;

function setup(){
    createCanvas(400, 400);
    const mainContainer = select("main");

    pickBg = createColorPicker();
    pickBg.parent(mainContainer);
    pickBg.size(50, 30);
    pickBg.position(20, 20);

    pickFill = createColorPicker();
    pickFill.parent(mainContainer);
    pickFill.size(50, 30);
    pickFill.position(180, 20);
}

function draw(){
    background(pickBg.value())
    fill(pickFill.value());

    textAlign(CENTER, CENTER);
    textSize(50);
    text('Hello World', width/2, height/2)

    textAlign(LEFT, TOP);
    textSize(15);
    text('background', 75, 30);
    text('fill', 235, 30)
}