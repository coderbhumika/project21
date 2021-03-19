var bullet,wall;
var speed,weight,thickness;

function setup()
 {
  createCanvas(1600,400);
 bullet= createSprite(200, 200, 50, 50);
 bullet.shapeColor=color("white");
 wall=createSprite(1200,200,thickness,height/2);

 bullet.velocityX=5;

 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83);
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bbulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}
function draw() {
  background("black");
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/(thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapeColor="red";
    }

    if(damage<10)
    {
      wall.shapeColor="green";
    }

  }
  drawSprites();
}