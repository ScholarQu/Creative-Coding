var canvas;

// let img;

// function preload(){
//   img = loadImage("images/arrow1.png");
// }

function windowResized(){
resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight); 
  //normalMaterial();
 
  noCursor();
  canvas.position(0,0);
  canvas.style('z-index','-2');

}


function draw() {
  noCursor();
  background(255);

   let x = 0;
   let y = 0;
  
   let posX = width/2;
   let posY = height/2;
    
  push();
    let angle = Math.atan2(mouseY-posY, mouseX-posX);

    translate(posX, posY);
    rotate(angle);
    //rotate(angle + radians(-90))

    stroke(0);
    strokeWeight(0.5);
    fill(255)
    beginShape();
    vertex(-3, -3);
    vertex(50, -3);
    vertex(50, -6);
    vertex(60, 0);
    vertex(50, 6);
    vertex(50, 3);
    vertex(-3, 3);
    vertex(-3, -3);
    endShape()

    translate(posX/4,posY/4);
    rotate(angle + radians(-90))
    stroke(0)
      strokeWeight(0.5);
      fill(255)
      beginShape();
      vertex(-3, -3);
      vertex(50, -3);
      vertex(50, -6);
      vertex(60, 0);
      vertex(50, 6);
      vertex(50, 3);
      vertex(-3, 3);
      vertex(-3, -3);
      endShape()

  translate(posX/4,posY/4);
  rotate(angle + radians(-90))
  stroke(0)
    strokeWeight(1);
    fill(255)
    beginShape();
    vertex(-3, -3);
    vertex(50, -3);
    vertex(50, -6);
    vertex(60, 0);
    vertex(50, 6);
    vertex(50, 3);
    vertex(-3, 3);
    vertex(-3, -3);
    endShape()
    
  translate(posX/7,posY/7);
  rotate(angle + radians(-120))
  stroke(0)
    strokeWeight(1);
    fill(255)
    beginShape();
    vertex(-3, -3);
    vertex(50, -3);
    vertex(50, -6);
    vertex(60, 0);
    vertex(50, 6);
    vertex(50, 3);
    vertex(-3, 3);
    vertex(-3, -3);
    endShape();
    
    translate(posX/7,posY/7);
    rotate(angle + radians(-120))
    stroke(0)
    strokeWeight(0.5);
      fill(255)
      beginShape();
      vertex(-3, -3);
      vertex(50, -3);
      vertex(50, -6);
      vertex(60, 0);
      vertex(50, 6);
      vertex(50, 3);
      vertex(-3, 3);
      vertex(-3, -3);
      endShape();
      
  translate(posX/9,posY/9);
  rotate(radians(90))
  stroke(0)
    strokeWeight(1);
    fill(255)
    beginShape();
    vertex(-3, -3);
    vertex(50, -3);
    vertex(50, -6);
    vertex(60, 0);
    vertex(50, 6);
    vertex(50, 3);
    vertex(-3, 3);
    vertex(-3, -3);
    endShape();
  
  translate(posX/2,posY/2);
  rotate(radians(-180))
  stroke(0)
    strokeWeight(1);
    fill(255)
    beginShape();
    vertex(-3, -3);
    vertex(50, -3);
    vertex(50, -6);
    vertex(60, 0);
    vertex(50, 6);
    vertex(50, 3);
    vertex(-3, 3);
    vertex(-3, -3);
    endShape();
  
   translate(-posX/9,-posY/9);
  rotate(radians(90))
  stroke(0)
  strokeWeight(0.5);
    fill(255)
    beginShape();
    vertex(-3, -3);
    vertex(50, -3);
    vertex(50, -6);
    vertex(60, 0);
    vertex(50, 6);
    vertex(50, 3);
    vertex(-3, 3);
    vertex(-3, -3);
    endShape();
  
   translate(-posX/4,-posY/4);
  rotate(radians(120))
  stroke(0)
    strokeWeight(1);
    fill(255)
    beginShape();
    vertex(-3, -3);
    vertex(50, -3);
    vertex(50, -6);
    vertex(60, 0);
    vertex(50, 6);
    vertex(50, 3);
    vertex(-3, 3);
    vertex(-3, -3);
    endShape();
  pop();
 
  push();

  //translate(-posX,-posY);
  //rotate(frameCount*0.025);
  // imageMode(CORNER);
  // img.resize(50, 50);
  //image(img, mouseX, mouseY);
  // fill("Blue");
  // noStroke();
  // ellipse(mouseX,mouseY,20,20)
  pop();

}
