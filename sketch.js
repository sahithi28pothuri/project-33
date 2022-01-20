var bg;
var snow;
var snowImg;
var bird, birdImg;

function preload(){
  bg = loadImage('snow3.jpg')
  snowImg = loadImage('snow5.webp');
  birdImg = loadImage("bird.png");
}

function setup() {
  createCanvas(800,400);

 
 
}

function draw() {
  background(bg);  

  // for(var j=0;j<800;j=j+100){
  //   snow = createSprite(Math.round(random(10,750)), j, 5, 5);
  //   snow.addImage('snow',snowImg);
  //   snow.scale = 0.05;
  //   snow.velocityY = 10;
  // }

  // if(keyDown('left_arrow')){
  //   bird.x +=5
  // }



  drawSprites();
}