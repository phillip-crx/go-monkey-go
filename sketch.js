var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodgroup, obstaclegroup
var score = 0;
var ground;

function preload(){ 
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas (600,300)

  
  monkey = createSprite(50,160,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.110;
  
  
  ground = createSprite(290,290,800,50)
  ground.X = ground.width/2
  ground.velocityX = -3
  
  
foodgroup = new Group()
obstaclegroup = new Group()
  
}


function draw() {
  background(180)
  
  if(keyDown("space")&& monkey.y >= 230 ) {
    monkey.velocityY = -13
  }
  console.log(monkey.y)
  
 
  
  monkey.velocityY = monkey.velocityY+0.8
  monkey.collide(ground)
  
  if(ground.x < 400) {
    ground.x = ground.width/2
  }
  
  spawnobstacles()
  
  spawnfood()
  
  text("SURVIVAL TIME : "+ score,380,20)
  score = score+Math.round(getFrameRate()/60)

  drawSprites()
}

function spawnobstacles() {
if(frameCount%300 === 0) {
  var obstacle = createSprite(600,250,10,40)
  obstacle.scale = 0.125
  obstacle.lifetime = 300  
  obstacle.addImage(obstacleImage)
  obstacle.velocityX = -6
  obstaclegroup.add(obstacle)
}

}

function spawnfood() {
if(frameCount%120 === 0) {
  var banana = createSprite(600,200,40,10)
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage)
  banana.velocityX = -3
  banana.scale = 0.125
  banana.lifetime = 200;
  //foodgroup.add(banana)
  
  }


}





