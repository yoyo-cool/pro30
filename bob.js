class Bob{

    constructor(x,y,radius){
        var options={
            restitution:1,
            friction:0,
            density:0.8
        }
        this.body = Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
        this.radius = radius
    }
    display(){
        push()
        ellipseMode(CENTER)
        fill("pink")
        circle(this.body.position.x,this.body.position.y,this.radius*2)
        pop()
    }
}