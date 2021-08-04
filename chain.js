class chain{
    constructor(w,h){
        var Option = {
            bodyA:w,
            pointB:h,

        }
        this.chain = Constraint.create(Option)
        World.add(world,this.chain)
    }
    seechain(){
        if(this.chain.bodyA!=null){
            stroke('red')
            line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
        }
    }
    chipchain(){
        this.chain.bodyA = null
    }
}  