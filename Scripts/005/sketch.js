var timerVal = 10;
let time = 0;
let dispTime = 0;
let w = 87;
let a = 65;
let s = 83;
let d = 68;
var mult = 1;
var gameIMG = [];//0=asteroid, 1=ship, 2=background, 3=Lazer
var jetIMG = [];
var jetAnim = [];
var jet;
var i = 0;
let speed = 3;
let shotX = 0;
let shotY = 0;


function preload(){
  gameIMG[0] = loadImage("Assets/sprites/rock.png");
  gameIMG[1] = loadImage("Assets/sprites/player.png");
  gameIMG[2] = loadImage("Assets/images/background.png");
  gameIMG[3] = loadImage("Assets/sprites/Attack/01.png");
  jet = loadStrings("Assets/sprites/Jet.txt");
}

function setup() {
  let cnv = createCanvas(800, 450);
  cnv.parent('myContainer');
  setInterval(1000);

  ast0 = new asteroid(800,100,3,10); 
  ast1 = new asteroid(800,300,4,10);
  ast2 = new asteroid(800,10,2,10);
  ast3 = new asteroid(800,50,2,10);
  shooter = new bulletController(canvas);
  ship = new player(400,225,10, shooter);
  

  for(var i = 0; i < jet.length; i++){
    jetIMG.push(new imageclass("Assets/Sprites/Jet/"+jet[i],0,0));
    jetAnim[i] = jetIMG[i].getImage();
  }
  
}

function draw() {
  background(gameIMG[2]);
  ast0.move(); //Start spawning asteroids
  ast0.display();
  if (time/100 >= 3){
    ast1.move();
    ast1.display();
  }
  else if (time/100 >= 8){
    ast2.move();
    ast2.display();
  }
  else if (time/100 >= 12){
    ast3.move();
    ast3.display();
  }

  UI();
  runtime();


  ship.move(); //Spawn player ship
  ship.display();
  timeIt();
  ship.shoot();
  
}