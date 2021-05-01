var  wall, thickness;
var bullet, speed, weight; 

function setup() {
   createCanvas(1000, 400);
	speed=random(223,331)
	weight=random(30,52)
	thickness=random(22,83)

	bullet=createSprite(50, 200, 60,20);   
	bullet.velocityX = speed;
	bullet.shapeColor=color("white");
  
  	wall=createSprite(800,200, thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

 if(hasCollided(bullet, wall))
	{
		bullet.velocityX=0;
		var damage =0.5*weight*speed*speed/(thickness*thickness*thickness);
      console.log(damage);
	  if(damage>10)
	  {
		  bullet.shapeColor=color(255,0,0);
	  }
	  
	  if(damage<10)
	  {
		  bullet.shapeColor=color(0,255,0);
	  }
	}
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
	var bulletRightEdge=lbullet.x +lbullet.width;
	var wallLeftEdge=lwall.x;
	if(bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}

