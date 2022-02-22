class player {
    constructor(x,y,hp,bulletController) {
      this.x = 0;
      this.y = 0;
      this.hp = 0;
      this.bulletController = bulletController;
    }
    move(){
      if (keyIsDown(w)){
        this.y -= speed;
      }
      if (keyIsDown(a)){
        this.x -= speed;
      }
      if (keyIsDown(s)){
        this.y += speed;
        } 
      if (keyIsDown(d)){ 
        this.x += speed; 
      }
      if (this.x <= 0){
        this.x = 0;
      }else if (this.x >= 366){
        this.x = 366;
      }
      if (this.y <= 0){
        this.y = 0;
      }else if (this.y >= 188){
        this.y = 188;
      }
      if (keyIsDown(32)){
        this.shootPressed = true;
      }else if (keyIsDown(32) == false){
        this.shootPressed = false;
      }
      /*if (mouseIsPressed == true && mouseX >= this.x){
        console.log('shots fired!', mouseX, mouseY);
      }*/
    }

    display(){
      translate(this.x, this.y);
    /*  let angle = atan2(mouseY - this.y, mouseX - this.x);
      rotate(angle);  */
      image(gameIMG[1],this.x,this.y);
      for (var i = 0; i < jet.length; i++){
        if (time % 2 == 0){
          image(jetAnim[i],this.x, this.y);
        }       
      }
    }

    shoot(){
      if(this.shootPressed){
        const speed = 5;
        const delay = 7;
        const damage = 1;
        const bulletY = this.y - this.height/2;
        const bulletX = this.x + this.width/2;
        this.bulletController.shoot(bulletX,bulletY,speed,damage,delay);
      }      
      //image(gameIMG[3], shotX, shotY);  
    }
  }
  
