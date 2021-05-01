var backgroundImg;
var snowImg;
function preload(){
  backgroundImg = loadImage("snow1.jpg")
  snowImg = loadImage("snow5.webp")
}

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(backgroundImg); 
  createSnowfall() 
  drawSprites();
}

function createSnowfall(){
  if(frameCount%10===0){
snow = createSprite(random(0,800), 0, 50, 50);
snow.addImage(snowImg)
snow.velocityX =-2
snow.velocityY = 4
snow.scale = 0.1
  }
}