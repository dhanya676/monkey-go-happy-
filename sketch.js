
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //createCanvas(600,600)
  //creating monkey 
  monkey= createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1

  ground = createSprite(400,350,900,10)
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
var   Survivaltime=0
 
obstacleGroup=new Group();
FoodGroup=new Group();

}

function draw() {
background(255);
  
 if(ground.x<0) {
    ground.x=ground.width/2;
 } 
  if(keyDown("space")) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  spawnFood();
  spawnObstacle();
 drawSprites(); 
if (obstacleGroup.isTouching(monkey) ) {
  ground.velocityX=0;
  monkey.velocityY=0;
  obstacleGroup.setVelocityXEach(0);
  FoodGroup.setVelocityXEach(0);
} 
Survivaltime=Math.round(frameCount/frameRate());  
  
  
  
text("Survival Time:"+Survivaltime,100,50)  
  textSize(20)
  stroke("black")
  fill("black")
}

function spawnObstacle() {
  
  if (frameCount%240===0) {
    obstacle=createSprite(800,320,10,40)
    obstacle.scale=0.2
    obstacle.velocityX=-2
    obstacle.addImage(obstacleImage);
    obstacle.lifetime=890;
    obstacleGroup.add(obstacle);
  }
  
}

function spawnFood() {
  
  if(frameCount%100===0) {
  banana=createSprite(600,250,40,10)
  banana.y=random(100,250)
  banana.scale=0.2
  banana.velocityX=-2;
  banana.lifetime=850;
  banana.addImage(bananaImage);
  FoodGroup.add(banana);
  }
  
}



