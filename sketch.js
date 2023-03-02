var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;

var obstaicle1,obstaicle2,obstaicle3,obstaicle4,obstaicle5,obstaicle6;

var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");

  obstaicle1=loadImage("obstacle1.png");
  obstaicle2=loadImage("obstacle2.png");
  obstaicle3=loadImage("obstacle3.png");
  obstaicle4=loadImage("obstacle4.png");
  obstaicle5=loadImage("obstacle5.png");
  obstaicle6=loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnObstaicles();
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 200
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

    function spawnObstaicles (){
      if(frameCount%60===0){

        var obstaicle=createSprite(600,165,10,40);
        obstaicle.velocityX=-6;

        var rand =Math.round(random(1,6));

        switch(rand){
          case 1:obstaicle.addImage(obstaicle1);
          break;

          case 2:obstaicle.addImage(obstaicle2);
          break;

          case 3:obstaicle.addImage(obstaicle3);
          break;

          case 4:obstaicle.addImage(obstaicle4);
          break;

          case 5:obstaicle.addImage(obstaicle5);
          break;

          case 6:obstaicle.addImage(obstaicle6);
          break;

          default:
            break;
      }

      obstaicle.scale=0.5
      obstaicle.lifetime=100
    } 
  }

