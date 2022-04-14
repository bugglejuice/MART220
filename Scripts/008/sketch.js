var i = 0;
//Timer
var timerVal = 10;
let timer = 0;
let dispTime = 0;
//Keybinding
let w = 87;
let a = 65;
let s = 83;
let d = 68;
//Nonreiterating Game Images
var gameIMG = [];//0=ship, 1=background, 2=Lazer, 3=DeadShip
//Asteroid Array
var rock = [];
var pebble;
var rubble = [];
//Asteroid Animations
var astsprites;
var astAnim = [];
var astSingle = [];
var astBoom;
var astIMG;
//Jet Animation
var jetIMG = [];
var jetAnim = [];
var jet;
//HP and Damage
var hpIMG;
var hpBar = [];
var hpAnim = [];
var dmgAnim = [];
//Projectile CD
let shotX = 0;
let shotY = 0;


function preload(){
  //Asteroid
  astsprites = loadSpriteSheet("Assets/sprites/Asteroid/asteroid_spritesheet.png",100,100,8);
  astAnim = loadAnimation(astsprites);
  astIMG = loadImage("Assets/sprites/Asteroid/asteroid.png");
  gameIMG[0] = loadImage("Assets/sprites/player.png");
  gameIMG[1] = loadImage("Assets/images/background.png");
  gameIMG[2] = loadImage("Assets/sprites/Attack/01.png");
  gameIMG[3] = loadImage("Assets/sprites/player_dead.png");
  //Jet Anim
  jet = loadStrings("Assets/sprites/Jet.txt");
  //HP bar
  hpIMG = loadStrings("Assets/sprites/healthbar.txt");
  //Damage Animation
  dmgAnim[0] = loadAnimation("Assets/sprites/Damage/smoke_0.png", "Assets/sprites/Damage/smoke_1.png", "Assets/sprites/Damage/smoke_2.png");
  dmgAnim[1] = loadAnimation("Assets/sprites/Damage/smoke_0.png", "Assets/sprites/Damage/smoke_1.png", "Assets/sprites/Damage/smoke_2.png");
  dmgAnim[2] = loadAnimation("Assets/sprites/Damage/smoke_0.png", "Assets/sprites/Damage/smoke_1.png", "Assets/sprites/Damage/smoke_2.png");
  dmgAnim[3] = loadAnimation("Assets/sprites/Damage/boom_0.png", "Assets/sprites/Damage/boom_1.png", "Assets/sprites/Damage/boom_2.png", "Assets/sprites/Damage/boom_3.png", "Assets/sprites/Damage/boom_4.png", "Assets/sprites/Damage/boom_5.png", "Assets/sprites/Damage/boom_6.png", "Assets/sprites/Damage/boom_7.png", "Assets/sprites/Damage/boom_8.png")
}

function setup() {
  let cnv = createCanvas(800, 450);
  cnv.parent('myContainer');
  setInterval(1000);
//Ship
  shooter = new bulletController(this);
  ship = new player(400,225,10, shooter);
//Asteroids
  for(var i = 0; i<1; i++){
    rock.push(new asteroid(800,200,random(2,6),10)); 
  }

//Jets
  for(var i = 0; i < jet.length; i++){
    jetIMG.push(new imageclass("Assets/sprites/Jet/"+jet[i],0,0));
    jetAnim[i] = jetIMG[i].getImage();
  }
//HP bar
  for(var i = 0; i < hpIMG.length; i++){
    hpBar.push(new imageclass("Assets/sprites/Health/"+hpIMG[i],0,0));
    hpAnim[i] = hpBar[i].getImage();
  }

}

function draw() {
  background(gameIMG[1]);
  rockSpawner();//Spawn Asteroids
  ship.spawn();
  timeIt();
  healthbar();
  UI();
  runtime();

}