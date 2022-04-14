class bulletController{
    bullets = [];
    shotDelay = 1;

    constructor(canvas){
        this.canvas = canvas;
    }


    shoot(x,y,speed,damage,delay) {
        if (this.shotDelay <= 0){
            this.bullets.push(new bullet(x,y,speed,damage));
            this.shotDelay = delay;
        }

        this.shotDelay--;
        this.draw();
    }
    
    draw(){
        this.bullets.forEach((bullet) => {
              if (dist(this.x,this.y,rock.x,rock.y) <= 50){
                const index = this.bullets.indexOf(bullet);
                this.bullets.splice(index, 1);
              }
              if(this.isBulletOffScreen(bullet)){
                  const index = this.bullets.indexOf(bullet);
                  this.bullets.splice(index, 1);
              }  
            bullet.draw();
        });
    }

    isBulletOffScreen(){
        return bullet.x <= -bullet.width;
    }
}