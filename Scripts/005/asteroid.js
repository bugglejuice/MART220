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