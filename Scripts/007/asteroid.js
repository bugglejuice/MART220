class asteroid {
    constructor(x,y,speed,hp){
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.hp = hp;
      
      this.width = 100;
      this.height = 100;
      this.Ygrid = [10,120,230,340];
      this.rando = Math.round(random(-1,3));
      this.randY = this.Ygrid[this.rando];
      
    }

    boom(){
      this.speed = 0;
      animation(astAnim,this.x,this.y);
      ship.hp++;
    }

    move(){
      let mult = 1;
      this.speed = 4;
      this.x -= this.speed * mult;
      this.y = this.randY;
      if(timer/100 >= 5 && timer/100 <= 20){ 
        mult += 0.0025;
          if (mult >= 3){
            mult = 3;
          }
      }
    }

    display(){
      var astSprite = createSprite(this.x+50,this.y+50,100,100);
      astSprite.addImage(astIMG);
      drawSprite(astSprite);
      astSprite.setCollider('circle');

    }

    offScreen(){
      if (this.x <= -100){ 
        this.hp = 10;
        this.x = 800;
        this.y = this.randY;
        this.speed = random(2,6);
        for(i=0; i<1;i++){
          if (rock.length <= 4){
              setTimeout(() => { 
                rock.push(new asteroid(random(800,900),this.randY,this.speed,10))
              },2000);
          }
        }
      }
    }

    spawn(){
      this.move();
      this.display();
      this.offScreen();
      this.speed = random(2,6);
    }

/*
    damage(){
      let x = 0;
      let y = 0;
//Replace with collisions from p5.play


      if(ship.speed == 0){
        return;
      }else{
        if (this.x <= ship.x + 74 && this.x+100 >= ship.x){
          x = 1;
        }else{x = 0};
        if (this.y <= ship.y + 74 && this.y+100 >= ship.y){
          y = 1;
        }else{y = 0};
        if ( x == 1 && y == 1){
          this.speed = 0;
          animation(astAnim,this.x,this.y);
          this.x = 900; // Need to move asteroids to array for removal
          this.y = random(10,310);
          ship.hp++;


        }
      }
          
      
    }
*/
}