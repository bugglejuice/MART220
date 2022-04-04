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
      let timeToRock = 0;
      this.sprite = createSprite(this.x+50,this.y+50,100,100);
      this.sprite.addImage(astIMG);
      drawSprite(this.sprite);
      this.sprite.setCollider('circle');
      // let newRock = setInterval(() => {
      //   timeToRock++;
      //   if(timeToRock > 0){
      //     clearInterval(newRock);
      //   }
      //   rock.push(new asteroid(800,this.randY,this.speed,10));
        
      // },2000);
      
    }

    offScreen(){
      let q = rock.indexOf(this);
      if (this.x <= -100){ 
        console.log('The length is',rock.length,'before');
        rock.splice(q);          
        console.log('The length is',rock.length,'after');
      }
    }

    spawn(){
      this.move();
      this.display();
      this.offScreen();
      this.speed = random(2,6);
    }

    damage(){
      let q = rock.indexOf(this);
      if(this.sprite.displace(ship.sprite)){
        this.speed = 0;
        this.hp = 0;
      }
      if (this.hp <= 0){
        animation(astAnim,this.x,this.y);
        rock.splice(q); 
      }
    }
}//Bottom of Class Bracket. Stop fucking with it.