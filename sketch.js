var fixedRect;
var movingRect;
var edges;

function setup() {
  createCanvas(2000,500);
  fixedRect=createSprite(400, 200, 50, 100);
  fixedRect.velocityX=2;
  fixedRect.velocityY=-2;
  movingRect=createSprite(100,300,100,50);
  edges=createEdgeSprites();
}

function draw() {
  background("lightblue");  
  drawSprites();

  fixedRect.bounceOff(edges);

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  movingRect.shapeColor="yellow";
  fixedRect.shapeColor="purple";

  if(movingRect.x-fixedRect.x<(movingRect.width+fixedRect.width)/2
  && fixedRect.x-movingRect.x < (movingRect.width+fixedRect.width)/2
  && movingRect.y-fixedRect.y < (movingRect.height+fixedRect.height)/2
  && fixedRect.y-movingRect.y < (movingRect.height+ fixedRect.height)/2){
    fixedRect.shapeColor="green";
    movingRect.shapeColor="blue";
    fixedRect.velocityX=fixedRect.velocityX*(-1);
    fixedRect.velocityY=fixedRect.velocityY*(-1);

  }

  console.log(movingRect.x-fixedRect.x);

}