class particles{
    constructor(){
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.speed = speed;
        this.alpha = 255;
    }

    hit(){
        if (dist(bullets.x,bullets.y,rock.x,rock.y) <= 10){
            for(let i = 0; i < rubble.length; i++){
                rubble[i].show;
            }
        }

    }

    show() {
        this.x = bullets.x;
        this.y = bullets.y;
        this.noStroke();
        this.fill('#c4c4c4');
        this.square(this.x,this.y,10);
    }

    update(){
        this.x += 3;
        this.y += 3;
        this.alpha -= 5;

    }


}