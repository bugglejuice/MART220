var obx = 24;
var oby = 24;
var obxMove = 4;
var obyMove = 4;
var objXnew = 0;
var objYnew = 0;
var obx1 = 400;
var oby1 = 200;
var obxMove1 = 5;
var obyMove1 = 5;
var objXnew1 = 0;
var objYnew1 = 0;
var obx2 = 200;
var oby2 = 400;
var obxMove2 = 3;
var obyMove2 = 3;
let button;
function setup() {
  let cnv = createCanvas(800, 450);
  cnv.parent('myContainer');
}

function draw() {
  background(220);
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
    //Random mover for above object
    objXnew = random(24,776);
    objYnew = random(24,426);
    objXnew += obxMove;
    objYnew += obyMove;
    if (objXnew + 24 >= 800 || objXnew <= 24){
      obxMove *= -1;
    }
    if (objYnew + 24 >= 450 || objYnew <= 24){
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
    //Random mover for above object
    objXnew1 = random(16,784);
    objYnew1 = random(16,434);
    objXnew1 += obxMove1;
    objYnew1 += obyMove1;
    if (objXnew1 + 16 >= 800 || objXnew1 <= 16){
      obxMove1 *= -1;
    }
    if (objYnew1 + 16 >= 450 || objYnew1 <= 16){
      obyMove1 *= -1;
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
  //Object4
    noStroke();
    fill(0,255,0);
    triangle(320,300,400,120,480,300);
  //Title
    fill('Black');
    textSize(32);
    textStyle(ITALIC);
    text('Finding Inner Peace',10,30);
  //Name
    textSize(16);
    text('Zack Leach', 700,440);
}