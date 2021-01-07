var monkey , monkey_running;
var ground;
var banana;
var bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup, bananaGroup;
var score;


function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,400)
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,1000,10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
}


function draw() {
  
  background(150);
  
  if (ground.x<0) {
    ground.x=ground.width/2;
  }
  
  if (keyDown("space")) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  
  drawSprites();
  bananas();
  
}

function bananas() {
  if(World.frameCount%80 === 0) {
    banana = createSprite(500,50,20,20);
    banana.addAnimation ("banane", bananaImage);
    banana.y = Math.round(random(100,250));
    banana.velocityX = -10;
    banana.lifetime = 70;
    banana.scale = 0.1;
  }
}

function obstacles() {
  if(World.frameCount%100 === 0) {
    obstacle = createSprite(450,50,20,20);
    obstacle.addAnimation ("rocc", obstaceImage);
    obstacle.y = Math.round(random(100,400));
    obstacle.velocityX = -8;
    obstacle.lifetime = 70;
    obstacle.scale = 0.15;
    
    obstacleGroup.add(obstacle);
  }
}

