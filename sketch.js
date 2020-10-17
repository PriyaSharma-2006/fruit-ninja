var knife,knifeImage;
var 
fruit,fruit1,fruit2,fruit3,fruit4;
var
enemy,enemy1,enemy2;
var PLAY=1
var END=0;
var gameState=1;
var fruitGroup;
var enemyGroup;
var gameover;
var Score;
var knifeswooshsound,sound1;
var gameoversound,sound2;
function preload(){
  knifeImage=loadImage("sword.png");
 fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  enemy1=loadImage("alien1.png");
  enemy2=loadImage("alien2.png");
  game=loadImage("gameover.png");
  sound1=loadSound("knifeSwooshSound.mp3")
  sound2=loadSound("gameover.mp3")
}
function setup(){
 createCanvas(400,400);
  knife=createSprite(200,200,10,10);
  knife.addImage("knife",knifeImage);
  knife.scale=0.7;
    
  gameover=createSprite(200,200,10,10)
  gameover.addImage("game",game);
  gameover.visible=false;
  
 fruitGroup=new Group();
  enemyGroup=new Group();
  Score=0;
}



function draw(){
background("lightBlue")
  text("Score"+Score,300,50)
  knife.y=World.mouseY;
  knife.x=World.mouseX
 fruits(); 
  enemy();
  if(fruitGroup.isTouching(knife)){
    fruitGroup.destroyEach();
     Score=Score+2;
    
    sound1.play();
  }
  if(enemyGroup.isTouching(knife)){
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
   gameover.visible=true; 
    
    sound2.play();
  }
  drawSprites();
}
function fruits(){
 if(World.frameCount%80===0){
   
   fruit=createSprite(300,300,10,10);
  fruit.scale=0.2;
   fruit.velocityX=-(10+Score/100);
 
  r=Math.round(random(1,4));
  if(r==1){
    fruit.addImage(fruit1);
    } else if (r==2){
     fruit.addImage(fruit2);
    }else if (r==3){
      fruit.addImage(fruit3);
    }else {
      fruit.addImage(fruit4)
      }
       fruit.y=Math.round(random(50,340)) 
      
  fruit.velocityX=-7;
  fruit.setLifetime=100;
   
   fruitGroup.add(fruit);
  
      }
}
  function enemy(){
   if(World.frameCount%140===0){
     monster=createSprite(200,200,10,20);
     monster.addImage("moving",enemy1);
     monster.y=Math.round(random(100,3000));
     monster.velocityX=-7;
     monster.setLifetime=80;
     monster.velocityX=-(12+Score/100)
     
      enemyGroup.add(monster);
   }
     
     
     
     
     
     
     
      
    
    
    
    
    
    
    
    
  } 
  
  
  
  
  
  
  
  
  
  
  
  
  
  





