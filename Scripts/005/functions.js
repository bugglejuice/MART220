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

  function incrementIndex(){
    i += 1;
    if (i >= jetIMG.length){
      i = 0;
    }
  }
  