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
      this.damage();
    }

    display(){

      this.sprite = createSprite(this.x+50,this.y+50,100,100);
      this.sprite.addImage(astIMG);
      drawSprite(this.sprite);

      
    }

    offScreen(){
      let q = rock.indexOf(this);
      if (this.x <= -100){ 
        console.log('The length is',rock.length,'before');
        rock.splice(q);          
        console.log('The length is',rock.length,'after');
      }else if(this.hp === 0){
        rockField();
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
      if(dist(this.x,this.y,ship.x,ship.y) <= 70){
        this.speed = 0;
        this.hp = 0;
        ship.hp += 3;
      }
      if (this.hp <= 0){
        //this.animate(astAnim, 1000);
        //this.sprite.play();
        //animation(astAnim,this.x,this.y);
        rock.splice(q); 
      }
    }
}//Bottom of Class Bracket. Stop fucking with it.