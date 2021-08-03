var ship,ship_moving;
var seaImage;

function preload(){
seaImage = loadImage("sea.png");
ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);

sea=createSprite(200,200,30,30);
sea.addImage("sea",seaImage);
sea.velocityX=-5;
sea.scale=0.3;

ship=createSprite(73,334,50,50);
  ship.addAnimation("moving",ship_moving);
  ship.scale=0.25;
}
function draw() {

  background(0);
 
  sea.velocityX=-3;

if(sea.x < 0)
{
  sea.x = sea.width/2;
}
drawSprites();
}