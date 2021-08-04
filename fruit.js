class fruit {
    constructor(x,y,r){
        this.body = Bodies.circle(x,y,r)
        World.add(world, this.body);
        this.r = r
        this.food = loadImage('sad_3.png'); 
    }
    seefruit(){
        imageMode(CENTER)
        image (this.food,this.body.position.x,this.body.position.y,2*this.r,2*this.r)
        
    }
}