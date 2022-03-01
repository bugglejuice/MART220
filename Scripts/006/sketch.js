var timerVal = 10;
let timer = 0;
let dispTime = 0;
let w = 87;
let a = 65;
let s = 83;
let d = 68;
var gameIMG = [];//0=asteroid, 1=ship, 2=background, 3=Lazer, 4=DeadShip
var astAnim;
var astSingle = [];
var astBoom;
var astIMG = []
var jetIMG = [];
var jetAnim = [];
var jet;
var hpIMG;
var hpBar = [];
var hpAnim = [];
var dmgAnim = [];
var i = 0;
let shotX = 0;
let shotY = 0;


function preload(){
  astAnim = loadSpriteSheet("Assets/sprites/Asteroid/asteroid_spritesheet.png",100,100,8);
  astIMG[0] = loadImage("Assets/sprites/Asteroid/asteroid.png");
  gameIMG[0] = loadImage("Assets/sprites/player.png");
  gameIMG[1] = loadImage("Assets/images/background.png");
  gameIMG[2] = loadImage("Assets/sprites/Attack/01.png");
  gameIMG[3] = loadImage("Assets/sprites/player_dead.png");
  
  jet = loadStrings("Assets/sprites/Jet.txt");
  
  hpIMG = loadStrings("Assets/sprites/healthbar.txt");
  dmgAnim[0] = loadAnimation("Assets/sprites/Damage/smoke_0.png", "Assets/sprites/Damage/smoke_1.png", "Assets/sprites/Damage/smoke_2.png");
  dmgAnim[1] = loadAnimation("Assets/sprites/Damage/smoke_0.png", "Assets/sprites/Damage/smoke_1.png", "Assets/sprites/Damage/smoke_2.png");
  dmgAnim[2] = loadAnimation("Assets/sprites/Damage/smoke_0.png", "Assets/sprites/Damage/smoke_1.png", "Assets/sprites/Damage/smoke_2.png");
  dmgAnim[3] = loadAnimation("Assets/sprites/Damage/boom_0.png", "Assets/sprites/Damage/boom_1.png", "Assets/sprites/Damage/boom_2.png", "Assets/sprites/Damage/boom_3.png", "Assets/sprites/Damage/boom_4.png", "Assets/sprites/Damage/boom_5.png", "Assets/sprites/Damage/boom_6.png", "Assets/sprites/Damage/boom_7.png", "Assets/sprites/Damage/boom_8.png")
}

function setup() {
  let cnv = createCanvas(800, 450);
  cnv.parent('myContainer');
  setInterval(1000);
//Convert these into an array
  ast0 = new asteroid(800,100,3,10); 
  ast1 = new asteroid(800,300,4,10);
  ast2 = new asteroid(800,10,2,10);
  ast3 = new asteroid(800,50,2,10);
  shooter = new bulletController(this);
  ship = new player(400,225,10, shooter);
  

  for(var i = 0; i < jet.length; i++){
    jetIMG.push(new imageclass("Assets/Sprites/Jet/"+jet[i],0,0));
    jetAnim[i] = jetIMG[i].getImage();
  }
  for(var i = 0; i < hpIMG.length; i++){
    hpBar.push(new imageclass("Assets/sprites/Health/"+hpIMG[i],0,0));
    hpAnim[i] = hpBar[i].getImage();
  }
}

function draw() {
  background(gameIMG[1]);
  ast0.move(); //Start spawning asteroids
  ast0.display();
  ast0.damage();
  if (timer/100 >= 3){
    ast1.move();
    ast1.display();
    ast1.damage();
  }
  else if (timer/100 >= 8){
    ast2.move();
    ast2.display();
    ast2.damage();
  }
  else if (timer/100 >= 12){
    ast3.move();
    ast3.display();
    ast3.damage();
  }

  UI();
  runtime();
  healthbar();
  ship.move(); //Spawn player ship
  ship.display();
  ship.damage();
  timeIt();
  ship.shoot();
  
}