var obx = 24;
var oby = 24;
var obxMove = 3;
var obyMove = 3;
var objXnew = 0;
var objYnew = 0;
var obx1 = 400;
var oby1 = 200;
var obxMove1 = 4;
var obyMove1 = 4;
var objXnew1 = 0;
var objYnew1 = 0;
var obx2 = 200;
var oby2 = 400;
var obxMove2 = 2;
var obyMove2 = 2;
let button;
var timerVal = 10;
let time = 0;
let dispTime = 0;
let life = 10;

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
  text("Zack Leach")
  fill('Red');
  textFont('Helvetica');
  textSize(32);
  text('Time Elapsed:', 300, 30);
  for (let t = 0; t > 100; t++){
    time = t
  }
  text(time / 100, 520, 30);
  time += 1;
  //Object1
    stroke(255,205,0);
    strokeWeight(48);
    point(obx,oby);
    obx += obxMove;
    oby += obyMove;
    if (obx + 24 >= 800 || obx <= 24){
      obxMove *= -1;
    }
    if (oby + 24 >= 450 || oby <= 24){
      obyMove *= -1;
    }
    
  //Object2
    stroke(255,51,51);
    strokeWeight(32);
    point(obx1,oby1);
    obx1 += obxMove1;
    oby1 += obyMove1;
    if (obx1 + 16 >= 800 || obx1 <= 16){
      obxMove1 *= -1;
    }
    if (oby1 + 16 >= 450 || oby1 <= 16){
      obyMove1 *= -1;
    }
    if ((obx1 + 16 == mouseX || obx1 - 16 == mouseY) && (oby1 + 16 == mouseY || oby1 - 16 == mouseY)){
      obxMove1 *= -1;
    }

  //Object3
    stroke(0,0,255);
    strokeWeight(64);
    point(obx2,oby2);
    obx2 += obxMove2;
    oby2 += obyMove2;
    if (obx2 + 32 >= 800 || obx2 <= 32){
      obxMove2 *= -1;
    }
    if (oby2 + 32 >= 450 || oby2 <= 32){
      obyMove2 *= -1;
    }

  //Goal Line
    stroke(255);
    strokeWeight(3);
    noFill();
    circle(width / 2, height / 2, 200);

  //Mouse Object
  let objX = width / 2;
  let objY = height / 2;
    noStroke();
    fill(255);
    translate(width / 2, height / 2);
    let angle = atan2(mouseY - height / 2, mouseX - width / 2);
    rotate(angle);
    rect(-30, -5, 60, 10);
    if (mouseIsPressed == true){
      return firinMaLazar();
    }

  function firinMaLazar(){
    let moveX = 0;
    let moveY = 0;
    let distX = (mouseX - width / 2);
    let distY = (mouseY - height / 2);
    let angle = atan2(mouseY - height / 2, mouseX - width / 2);
    stroke('Red');
    strokeWeight(3);
    moveX = width / 2;
    moveY = height / 2;
    point(moveX,moveY);
      for (let i = 0; i < 9; i++){
        console.log(i);
      }
    }
}