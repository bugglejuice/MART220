var timerVal = 10;
let timer = 0;
let dispTime = 0;
let w = 87;
let a = 65;
let s = 83;
let d = 68;
var gameIMG = [];//0=asteroid, 1=ship, 2=background, 3=Lazer, 4=DeadShip

var rock = [];

var astsprites;
var astAnim = [];
var astSingle = [];
var astBoom;
var astIMG;
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
  astsprites = loadSpriteSheet("Assets/sprites/Asteroid/asteroid_spritesheet.png",100,100,8);
  astAnim = loadAnimation(astsprites);
  astIMG = loadImage("Assets/sprites/Asteroid/asteroid.png");
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

  shooter = new bulletController(this);
  ship = new player(400,225,10, shooter);
  
  for(var i = 0; i<=6; i++){
    var y = random(0,350);
    var speed = random(2,5);
    rock.push(new asteroid(800,y,speed,10)); 
  }
  for(var i = 0; i < jet.length; i++){
    jetIMG.push(new imageclass("Assets/sprites/Jet/"+jet[i],0,0));
    jetAnim[i] = jetIMG[i].getImage();
  }
  for(var i = 0; i < hpIMG.length; i++){
    hpBar.push(new imageclass("Assets/sprites/Health/"+hpIMG[i],0,0));
    hpAnim[i] = hpBar[i].getImage();
  }
}

function draw() {
  background(gameIMG[1]);


  var rockSPD = random(2,5);

  rock[0].move();
  rock[0].begone();
  rock[0].display();
  rock[0].speed = rockSPD;

  ship.move(); //Spawn player ship
  ship.display();
  ship.damage();
  timeIt();
  ship.shoot();
  healthbar();
  UI();
  runtime();

  if (rock[0].sprite.collide(ship.sprite)){
    rock[0].boom();
  }
  
}