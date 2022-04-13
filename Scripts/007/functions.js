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
      timer = t;
    }
    text(Math.round(timer / 100), 520, 30);
    timer += 1;
  }
  
  function timeIt() {  //spawn and speed timer
    if(timer >= 10 && timer <= 60){
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

  function healthbar(){
    let x = 750;
    let y = 2;
    let w = 40;
    let h = 120;
    let q = 0;

    if(ship.hp < 4 && ship.hp >= 2){
      q = 1;
    }else if(ship.hp < 6 && ship.hp >= 4){
      q = 2; // animation here
    }else if(ship.hp < 8 && ship.hp >= 6){
      q = 3;
    }else if(ship.hp < 10 && ship.hp >= 8){
      q = 4; //animation here
    }else if(ship.hp < 12 && ship.hp >= 10){
      q = 5;
    }else if(ship.hp < 14 && ship.hp >= 12){
      q = 6; //animation here
    }else if(ship.hp >= 14){
      q = 7;
      speed = 0;
    }
    image(hpAnim[q],x,y,w,h);
  }

  function rockSpawner(){
      rock.forEach(index => index.spawn());

  }

  function rockField(){
    let timeToRock = 0;
    let newRock = setInterval(() => {
      timeToRock++;
      if(timeToRock > 0){
        clearInterval(newRock);
      }
      rock.push(new asteroid(800,this.randY,this.speed,10));
      
    },2000);
  }