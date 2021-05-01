var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 
  Rect1 = createSprite(200, 400, 50, 80);
  Rect1.shapeColor = "blue";
  
  Rect2 = createSprite(800, 400, 50, 80);
  Rect2.shapeColor = "yellow";
  
  Rect3 = createSprite(500, 400, 50, 80);
  Rect3.shapeColor = "orange";
  

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
 if( isTouching(movingRect, Rect1)){
  movingRect.shapeColor = "red";
 Rect1.shapeColor = "red";
 }
 else {
  movingRect.shapeColor = "green";
  Rect1.shapeColor = "blue";
}

  drawSprites();
}
  