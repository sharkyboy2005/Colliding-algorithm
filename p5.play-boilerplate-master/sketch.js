var mr, fr;

function setup() {
  createCanvas(800,400);
  fr = createSprite(400, 200, 50, 50);
  fr.shapeColor = "red";
  mr = createSprite(200, 100, 25, 25);
  mr.shapeColor = "lightblue";
}

function draw() {
  background("darkblue");  
  mr.x = World.mouseX
  mr.y = World.mouseY
  if (mr.x - fr.x < mr.width/2 + fr.width/2 && fr.x - mr.x < mr.width/2 + fr.width/2 &&  mr.y - fr.y < mr.height/2 + fr.height/2 && fr.y - mr.y < mr.height/2 + fr.height/2){
    fr.shapeColor = "lightgreen";
    mr.shapeColor = "darkgreen";
  }
  else{
    fr.shapeColor = "red";
    mr.shapeColor = "lightblue";
  }
  drawSprites();
}