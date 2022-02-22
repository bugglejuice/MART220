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
        rect(this.x,this.y,this.width, this.height);
        //image(gameIMG[3],this.x,this.y);
        console.log('made it here');
        
    }
}
/* Object will not draw and I am unsure as to why. 
    Console log reaches past rectangle. could be difference
    from tutorial in that I am using P5 and the creator did 
    not. Tutorial linked in README for future reference but
    will have to T/S on my own from here I beleive. */