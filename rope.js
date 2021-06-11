class Rope{
    constructor(x,y,z){
        var options={
            bodyA:x,
            bodyB:y,
            pointB:{x:z,y:0},
            length:255
        }
        this.rope= Constraint.create(options)
        World.add(world,this.rope)

        this.pointB=z
    }

    display(){

        push()
        strokeWeight(2)
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,
             this.rope.bodyB.position.x+this.pointB,this.rope.bodyB.position.y)

             pop()
    }

}