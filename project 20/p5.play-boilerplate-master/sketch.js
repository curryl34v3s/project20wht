var car, wall, speed, weight;

function setup(){
  createCanvas(1600,400);

  speed=random(55.90)
  weight=random(400,1500);
  //car sprite
  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  
  //wall sprite
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(255);

}
function draw(){
  background(0);

//console.log(weight);
if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX=0;
  var deformation= (weight*speed*speed)/22500;
  console.log(deformation);
  if(deformation>180){
    car.shapeColor='red';
  } else if(deformation>100 && deformation<180){
    car.shapeColor="yellow";
  }else if(deformation<100){
    car.shapeColor='green';
  }
}

  drawSprites();
}
