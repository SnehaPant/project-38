var scene,sceneImage;
var spiderman,spidermanImage;
var thanos,thanosImage;
var PLAY=1;
var END=0;
var gameState=PLAY;
var thanosGroup;
var score = 0;

function preload(){
  sceneImage=loadImage('scene.jpg')
  spidermanImage=loadImage('spider_man_.png')
  thanosImage=loadImage('thanos.png')
  }
function setup(){
  createCanvas(600,600)
  scene=createSprite(300,300);
  scene.addImage('scene',sceneImage)
  scene.velocityY=2
  scene.scale=3.4
  spiderman=createSprite(300,300);
  spiderman.addImage('spiderman',spidermanImage)
  spiderman.scale=0.1
  thanosGroup=new Group()
  
}
function draw(){
  background('white')
  drawSprites()
 text(' score: '+score,270,30)
  if(gameState==PLAY){
        if(scene.y>400){
    scene.y=300
  }
  if(keyDown('space')){
    spiderman.velocityY=-10
    camera.position.x=spiderman.x
         camera.position.y=spiderman.y
  }
  if(keyDown('left')){
    spiderman.x=spiderman.x-3
    camera.position.x=spiderman.x
         camera.position.y=spiderman.y
  }
  if(keyDown('right')){
    spiderman.x=spiderman.x+3
    camera.position.x=spiderman.x
         camera.position.y=spiderman.y
  }
  spiderman.velocityY=spiderman.velocityY+0.2
   spawnthanos()
  
    if(thanosGroup.isTouching(spiderman)){
      score++
    }
    if(score==1000){
      gameState=END;
    }
    if(spiderman.y<0){
      spiderman.y=300
      spiderman.x=300
    }
     
  }
  if(gameState==END){
    background('black')
    textSize(30)
    fill('red')
    text('GAME OVER',150,300)
      
  }
 }

function spawnthanos(){
  if(frameCount%150==0){
    thanos=createSprite(50,-50)
    thanos.addImage('thanos',thanosImage)
    thanos.velocityY=2
    thanos.x=Math.round(random(120,400))
    thanos.scale=0.2
    thanos.lifetime=200
   thanosGroup.add(thanos)
    
  }
}