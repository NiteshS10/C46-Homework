var gameState = 0;
var playbutton, playbuttonImg;
var helpbutton, questionmarkImg;
var bg, backgroundImg;
var lvl1, lvl2, lvl3;
var playerPlane, opponentPlane;
var playerPlaneImg, opponentPlaneImg;
var playerBullets, opponentBullets;
var invisWall;


function preload() {
  playbuttonImg = loadAnimation("Assets/play_button.gif");
  questionmarkImg = loadAnimation("Assets/question-markbutton.gif");
  bg = loadImage("Assets/Background.jpg");
  lvl1 = loadImage("Assets/lvl1.png");
  lvl2 = loadImage("Assets/lvll 2.png");
  lvl3 = loadImage("Assets/lvll 3.png");
  playerPlaneImg = loadImage("Assets/Fighter jet.png");
  opponentPlaneImg = loadImage("Assets/Opponent Fighter plane.png");
  playerBulletsImg = loadImage("Assets/Bullets Player.png");
  opponentBulletsImg = loadImage("Assets/Bullets Opponent.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  playbutton = createSprite(320, 370, 50, 50);
  playbutton.addAnimation("play", playbuttonImg);
  playbutton.scale = 0.2;

  helpbutton = createSprite(850, 370, 50, 50);
  helpbutton.addAnimation("help", questionmarkImg);
  helpbutton.scale = 0.5;

     lvl1 = createSprite(305, 237, 75, 75);
     lvl1.addImage("level1",lvl1);
     lvl1.hide();

     lvl2 = createSprite(819,237,75,75);
     lvl2.addImage("level 2",lvl2);
     lvl2.hide();

     lvl3 = createSprite(562,461,75,75);
     lvl3.addImage("level 3",lvl3);
     lvl3.hide();

  playerPlane = createSprite(101,258,50,50);
  playerPlane.addAnimation("pc",playerPlaneImg);
  playerPlane.scale = 0.4;
  playerPlane.visible = false;
  
  playerBullets = createSprite(playerPlane.x,playerPlane.y,50,50)
  playerBullets.addAnimation("pc",playerBullets);
  playerBullets.scale = 0.01;


  opponentPlane = createSprite(1038, 259, 50, 50);
  opponentPlane.addAnimation("npc",opponentPlaneImg);
  opponentPlane.scale = 0.4;
  opponentPlane.visible = false;

  // invisWall = createSprite(295,285,70,windowHeight);

  opponentBullets = createSprite(opponentPlane.x,opponentPlane.y,50,50);
  opponentBullets.addAnimation("npc", opponentBullets);
  opponentBullets.scale = 0.01;

  
  
  // trex- game  obstacles - look how it was created
  // follow for bullets, every 100 frames you can shoot (oponenent)
  // images for levels
}

function draw() {
  background(bg);

  if (mousePressedOver(playbutton)) {
    playbutton.visible = false;
    helpbutton.visible = false;
    gameState = 1;
    // lvl1.show();
    // lvl2.show();
    // lvl3.show();

  }

  if(gameState === 1){
     opponentPlane.visible=true;
     playerPlane.visible = true;
    //  playerPlane.x = mouseX;
     playerPlane.y = mouseY;
       
  }
  playerPlane.bounceOff(invisWall);
  textSize(30);
  text(mouseX + " , " + mouseY, mouseX, mouseY);
  drawSprites();
}

// 3 levels - you need to add images and modify the position of lvl 3
//get/paint all images load all images inside function preload
// click on play then only level 1,2,3

