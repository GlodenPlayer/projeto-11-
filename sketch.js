var runner, runnerImage;
var backGround, backGroundImage;
var leftBarrier, rightBarrier;

function preload() {

  //Add Animation to runner and backGround.
  runnerImage = loadAnimation("Runner-1.png", "Runner-2.png");

  backGroundImage = loadImage("path.png");

}

function setup() {
  //Create Sprites and Canvas.

  createCanvas(300, 400);
  backGround = createSprite(145, 150, 300, 20);
  runner = createSprite(150, 370);

  //Adding Image and scale.
  backGround.addImage("background", backGroundImage);
  backGround.scale = 1.0;

  //Adding Image and scale to runner;
  runner.addAnimation("runner", runnerImage);
  runner.scale = 0.05;

  //create barrier
  leftBarrier = createSprite(285, 200, 15, 500);
  leftBarrier.visible = false;
  rightBarrier = createSprite(10, 200, 15, 500);
  rightBarrier.visible = false;
}

function draw() {

  background('black');

  //Moving runner.
  if (keyIsDown(RIGHT_ARROW)) {
    runner.position.x = runner.position.x + 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    runner.position.x = runner.position.x - 5;
  }
  
  //Moving BackGround
  backGround.velocityY = 2

  if (backGround.y < 100 ) {

    backGround.y = backGround.width/2;

  }

  //colide barrier
  runner.collide(rightBarrier);
  runner.collide(leftBarrier);
  drawSprites();

}
