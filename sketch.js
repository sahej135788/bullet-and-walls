var bullet,wall;
var speed,weight;
var thickness
function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  thickness=random(22,90)
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX=speed
  wall = createSprite(1500,200,60,height/2)
}

function draw() {
  background(0);  
  if(wall.x-bullet.x<bullet.width/2+wall.width/2)
  {
   bullet.velocityX=0
   var d=0.5*weight*speed*speed/thickness*thickness*thickness;
   if(d>10)
   {
    bullet.shapeColor="green";
   }
   
   if(d<10)
   {
    bullet.shapeColor="yellow";
   }
   }
  drawSprites();
}