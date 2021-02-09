var balloon,balloonImg;
var backGroundImg;
var canvas;
var database;


function preload(){
  balloonImg=loadAnimation("pro-C35 images/Hot Air Ballon-02.png","pro-C35 images/Hot Air Ballon-03.png","pro-C35 images/Hot Air Ballon-04.png");
  backGroundImg=loadImage("pro-C35 images/Hot Air Ballon-01.png");

}

function setup() {
  database=firebase.database();
  canvas=createCanvas(500,500);
  balloon=createSprite(300, 200, 50, 50);
  balloon.addAnimation=("moving",balloonImg);
}

function draw() {
  background(backGroundImg);  
  if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x-10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x+10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y=balloon.y-10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y=balloon.y+10;
  }
  drawSprites();
}