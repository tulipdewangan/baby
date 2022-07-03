var baby;
function preload(){
  babyImage = loadImage('baby.png');
  milkImage = loadImage('milk.png');

}
function setup(){
 canvas = createCanvas (1000,1000);

baby = createSprite(500,750,20,20);
baby.addImage(babyImage);
baby.scale=0.3;
}

function draw(){
background("black");


if(keyDown(LEFT_ARROW)){
  baby.position.x = baby.position.x-5;
  console.log(baby);
}

if(keyDown(RIGHT_ARROW)){
  baby.position.x = baby.position.x+5;
  console.log(baby);
}
spawnmilk()
drawSprites()
}
function spawnmilk(){
  if(frameCount % 100 === 0){
    a = Math.round(random(50,950))
    b = Math.round(random(50,950))
    milk = createSprite(a,b,50,50)
    milk.addImage(milkImage)
    milk.scale=0.1;
    milk.lifetime = 50;
  }
}