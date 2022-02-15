let button;
var timerVal = 10;
let time = 0;
let dispTime = 0;
let life = 10;

var astX = [];
var astY = [];
var astSpeed = [];
var asteroidImg;
var shipImg;

class player {
  constructor(x,y,hp) {
    this.x = 400;
    this.y = 225;
    this.hp = 10;
  }
}

function preload(){
  asteroidImg = loadImage("Assets/sprites/rock.png");
  shipImg = loadImage("Assets/sprites/player.png");
}

function setup() {
  let cnv = createCanvas(800, 450);
  cnv.parent('myContainer');
  setInterval(1000);
}

function draw() {
  background('Black');
  //Text
  fill('yellow');
  textFont('Impact');
  textSize(26);
  text("Don't let them touch you!", 2,20);
  textSize(18);
  text('Zack Leach', 700, 448);
  fill('Red');
  textFont('Helvetica');
  textSize(32);
  text('Time Elapsed:', 300, 30);
  for (let t = 0; t > 100; t++){
    time = t
  }
  text(time / 100, 520, 30);
  time += 1;

  let ship = new player(400,225,10);
  image (shipImg,ship.x,ship.y);
  //rotate to follow mouse
  translate(ship.x, ship.y);
  let angle = atan2(mouseY - ship.y, mouseX - ship.x);
  rotate(angle);
  move();

  let w = 87;
  let a = 65;
  let s = 83;
  let d = 68;
  let Lmouse = 1;

  //keybinding
  if (key == w){ 
    ship.y -= 3; }
  if (key == a){ 
    ship.x -= 3; }
  if (key == s){ 
    ship.y += 3; }
  if (key == d){ 
    ship.x += 3; }
  if (key == Lmouse ){
    console.log('Shots Fired'); }
  }
/*
function asteroid0(){
  astX[0] = 24;
  astY[0] = 24;
  astSpeed[0] = 3

  //Object1
  stroke(255,205,0);
  strokeWeight(48);
  point(astX[0],astY[0]);
  astX[0] += astSpeed[0];
  astY[0] += astSpeed[0];
  if (astX[0] + 24 >= 800 || astX[0] <= 24){
    astSpeed[0] *= -1;
  }
  if (astY[0] + 24 >= 450 || astY[0] <= 24){
    astSpeed[0] *= -1;
  }
}

function asteroid1(){
  astX[1] = 400;
  astY[1] = 200;
  astSpeed[1] = 4

  //Object2
  stroke(255,51,51);
  strokeWeight(32);
  point(astX[1],astY[1]);
  astX[1] += astSpeed[1];
  astY[1] += astSpeed[1];
  if (astX[1] + 16 >= 800 || astX[1] <= 16){
    astSpeed[1] *= -1;
  }
  if (astY[1] + 16 >= 450 || astY[1] <= 16){
    astSpeed[1] *= -1;
  }
  if ((astX[1] + 16 == mouseX || astX[1] - 16 == mouseY) && (astY[1] + 16 == mouseY || astY[1] - 16 == mouseY)){
    astSpeed[1] *= -1;
  }
}

function asteroid2(){
  astX[2] = 200;
  astY[2] = 400;
  astSpeed[2] = 2


  //Object3
  stroke(0,0,255);
  strokeWeight(64);
  point(astX[2],astY[2]);
  astX[2] += astSpeed[2];
  astY[2] += astSpeed[2];
  if (astX[2] + 32 >= 800 || astX[2] <= 32){
    astSpeed[2] *= -1;
  }
  if (astY[2] + 32 >= 450 || astY[2] <= 32){
    astSpeed[2] *= -1;
  }
}
*/