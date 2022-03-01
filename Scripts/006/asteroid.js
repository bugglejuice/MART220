class asteroid {

    constructor(x,y,speed,hp){
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.hp = hp;
      
      this.width = 100;
      this.height = 100;
    }
    move(){
      let mult = 1;
      this.x -= this.speed * mult;
      if (this.x <= -100){
        this.x = 800;
        this.y = random(10,310);      
      }
      if(timer/100 >= 5 && timer/100 <= 20){ 
        mult += 0.0025;
          if (mult >= 3){
            mult = 3;
          }
      }
    }
  
    display(){
      var astSprite = createSprite(this.x+50,this.y+50);
      drawSprite(astSprite);
      strokeWeight(5);
      
      /*
      stroke('Red');
      point(this.x,this.y);
      point(this.x + 100, this.y);
      point(this.x, this.y + 100);
      point(this.x + 100, this.y + 100);
      */
    }

    damage(){
      let x = 0;
      let y = 0;
//Replace with collisions from p5.play
      if(ship.speed == 0){
        return; 
      }else{
        if (this.x <= ship.x + 74){
          x = 1;
        }else{x = 0};
        if (this.y <= ship.y + 74 && this.y >= ship.y){
          y = 1;
        }else{y = 0};
        if ( x == 1 && y == 1){
          this.x = 900; // Need to move asteroids to array for removal
          ship.hp++;

        }
      }
          
      
    }

  }