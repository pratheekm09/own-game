var player1
var obstacle1,obstacle2,obstacle3,obstacle4
var enemy1,enemy2,enemy3,enemy4
var ground
var count1
var cloudImage,cloudsGroup
var playeranimation
var groundImage
var invisible_ground
var gameState = PLAY
var PLAY = 1
var END = 0
var score = 0
var player_collide

function preload(){
   playeranimation = loadAnimation("goku1.png","goku2.png","goku3.png","goku4.png","goku5.png","goku6.png","goku7.png","goku8.png");
   cloudImage = loadImage("cloud.png");
   groundImage = loadImage("ground.png")
}

function setup(){
 createCanvas(1200,1200);
      enemy1= createSprite(200,450)
      player1=createSprite(750,450)
      player1.addAnimation("player1",playeranimation);
      player1.scale=1.5
      obstacle1=createSprite(500,450)
      obstacle2=createSprite(1000,450)
      obstacle3=createSprite(1000,349)
      obstacle4=createSprite(1140,450)
      clouds=createSprite(800,100,1200,500)
      clouds.addImage("clouds",cloudImage);

      ground=createSprite(800,128,1200,500)
      ground.addImage("ground",groundImage)
      ground.velocityX = -(7 + 7*score/100);
      ground.scale=3

      invisibleGround = createSprite(800,565,1200,500);
      invisibleGround.visible = false;
      
      score = 0
}

function draw(){
  background(255)
  //displaying score
  text("Score: "+ score, 500,50);
  if(gameState === PLAY){
    //scoring
    score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(7 + 7*score/100);
    if(score>0 && score%100 === 0){
    }
  }
  console.log(ground.x)
  if (ground.x < 0){
    ground.x = 900;
  }

  if(count1===100){
    player1.velocityX=player.velocityX+0.1
    ground.velocityX=ground.velocityX+0.1
    enemy1.velocityX=enemy.velocityX+0.1
  }
  else if(count1===300){
     player1.velocityX=player1.velocityX+0.2;
     ground.velocityX=ground.velocityX+0.2;
     enemy1.velocityX=enemy.velocityX+0.2;
  }
  else if(count1===500){
    player1.velocityX=player1.velocityX+0.2;
    ground.velocityX=ground.velocity+0.2;
    enemy1.velocityX=enemy.velocityX+0.2
  }
  drawSprites();
}
  function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
      var cloud = createSprite(600,120,40,10);
      cloud.x = Math.round(random(80,120));
      cloud.addImage(cloudImage);
      cloud.scale = 0.5;
      cloud.velocityX = -3;
      
       //assign lifetime to the variable
      cloud.lifetime = 200;
      
      //adjust the depth
      cloud.depth = player1.depth;
      player1.depth = player1.depth + 1;
      
      //add each cloud to the group
      cloudsGroup.add(cloud);
    }
  }
  function spawnObstacles(){
    if (frameCount % 60 === 0){
      var box = createSprite(600,165,10,40);
      obstacle.velocityX = -(6 + score/100);
      
       //generate random obstacles
       var rand = Math.round(random(1,6));
       switch(rand) {
         case 1: obstacle.addImage(box1);
                 break;
         case 2: obstacle.addImage(box2);
                 break;
         case 3: obstacle.addImage(box4);
                 break;
         case 4: obstacle.addImage(box5);
       }
          //assign scale and lifetime to the obstacle           
            obstacle.scale = 0.5;
            obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  
    }
   }
