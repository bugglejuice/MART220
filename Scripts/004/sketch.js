var timerVal = 10;
let time = 0;
let dispTime = 0;
let w = 87;
let a = 65;
let s = 83;
let d = 68;
var mult = 1;
var gameIMG = [];//0=asteroid, 1=ship

function preload(){
  gameIMG[0] = loadImage("Assets/sprites/rock.png");
  gameIMG[1] = loadImage("Assets/sprites/player.png");
}

function setup() {
  let cnv = createCanvas(800, 450);
  cnv.parent('myContainer');
  setInterval(1000);

  ast0 = new asteroid(800,100,3,10);
  ast1 = new asteroid(800,300,4,10);
  ast2 = new asteroid(800,10,2,10);
  ast3 = new asteroid(800,50,2,10);
  ship = new player(400,225,10);
}

function draw() {
  background('Black');

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
  
}

function UI(){
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
}

function runtime(){  //Big clock
  text('Time Elapsed:', 300, 30);
  for (let t = 0; t > 100; t++){
    time = t;
  }
  text(time / 100, 520, 30);
  time += 1;
}

function timeIt() {  //spawn and speed timer
  if(time >= 10 && time <= 60){
    for(var i; i < 10; i++){
      mult += i;
    }
  }
}

class player {
  constructor(x,y,hp) {
    this.x = 0;
    this.y = 0;
    this.hp = 0;
  }
  move(){
    if (keyIsDown(w)){ 
      this.y -= 3; 
    }
    if (keyIsDown(a)){ 
      this.x -= 3;
    }
    if (keyIsDown(s)){ 
      this.y += 3; 
    }
    if (keyIsDown(d)){ 
      this.x += 3; 
    }
    if (mouseIsPressed == true){
      console.log('shots fired!');
    }
  }
  display(){
    translate(this.x, this.y);
  /*  let angle = atan2(mouseY - this.y, mouseX - this.x);
    rotate(angle);  */
    image(gameIMG[1],this.x,this.y); 
  }
}


class asteroid {
  constructor(x,y,speed,hp){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.hp = hp; 
  }
  move(){
    this.x -= this.speed * mult;
    if (this.x <= -100){
      this.x = 800;
      this.y = random(10,310);      
    }
    if(time/100 >= 5 && time/100 <= 20){ 
      mult += 0.0025;
        if (mult >= 3){
          mult = 3;
        }
    }
  }

  display(){
    image(gameIMG[0],this.x,this.y,100,100);
  }
}
