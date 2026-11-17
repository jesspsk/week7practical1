let btn;


function setup(){
    createCanvas(400, 400);
    btn = createButton("click here");
    const mainContainer = select("main");
    btn.parent(mainContainer);
    btn.size(width, 50);
    btn.position(0, height-50)
}


function draw(){
    btn.mouseClicked(addShape)
}


function addShape(){
    fill(120, 156, 180)
    circle(random(width), random(height), random(1, 100))
}