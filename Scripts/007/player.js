class player {
    constructor(x,y,hp,bulletController) {
      this.x = 0;
      this.y = 188;
      this.hp = 0;
      this.bulletController = bulletController;

      this.speed = 6;
      this.width = 74;
      this.height = 74;
    }

    move(){
      if (keyIsDown(w)){
        this.y -= this.speed;
      }
      if (keyIsDown(a)){
        this.x -= this.speed;
      }
      if (keyIsDown(s)){
        this.y += this.speed;
        } 
      if (keyIsDown(d)){ 
        this.x += this.speed; 
      }
      if (this.x <= 0){
        this.x = 0;
      }else if (this.x >= 726){
        this.x = 726;
      }
      if (this.y <= 0){
        this.y = 0;
      }else if (this.y >= 376){
        this.y = 376;
      }
      if (keyDown(32)){
        this.shootPressed = true;
      }else if (keyDown(32) == false){
        this.shootPressed = false;
      }
//figure out how to make the shots continue drawing when key is released

    }

    display(){

      var shipSprite = createSprite(this.x+37,this.y+37,74,74);
      shipSprite.addImage(gameIMG[0]);
      drawSprite(shipSprite);
      shipSprite.setCollider('circle');
      


      if(this.hp >= 14){
        image(gameIMG[3],this.x,this.y);
        animation(dmgAnim[3],this.x+37,this.y+37);
        this.speed = 0;
        return;
      }else{image(gameIMG[0],this.x,this.y);}
      /*for (var i = 0; i < jet.length; i++){
        if (timer % 2 == 0){
          image(jetAnim[i],this.x, this.y);
        }  
      }*/
      

      /*
      strokeWeight(5);
      stroke('Red');
      point(this.x,this.y);
      point(this.x + 74, this.y);
      point(this.x, this.y + 74);
      point(this.x + 74, this.y + 74);
      */

    }

    begone(){
      if (this.x <= -100){
        this.pop();
      }
    }

    spawn(){
      this.move();
      this.display();
      this.shoot();
      this.damage();
    }

    shoot(){
      if (this.hp >= 14){
        return;
      }
      if(this.shootPressed){
        const speed = 10;
        const delay = 7;
        const damage = 1;
        const bulletY = this.y + this.height/2-20;
        const bulletX = this.x + this.width/2;
        this.bulletController.shoot(bulletX,bulletY,speed,damage,delay);
      }       
    }

    damage(){
      if (this.hp >=14){
        return;
      }
      if (this.hp >= 4){
        animation(dmgAnim[0],this.x+15,this.y+15,);
      }
      if (this.hp >= 8){
        animation(dmgAnim[1],this.x+15,this.y+56);
      }
      if (this.hp >= 12){
        animation(dmgAnim[2],this.x+20,this.y+36);
      }
      
    }
  }
  
