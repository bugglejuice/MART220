class bullet{
    constructor(x,y,speed,damage){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;

        this.width = 15;
        this.height = 5;
        this.color = "red";
    }

    draw(){
        fill(this.color)
        this.x += this.speed;
        image(gameIMG[2],this.x,this.y,60,40);
        
    }
}
