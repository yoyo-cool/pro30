class Roof{
    constructor(){

        this.body=Bodies.rectangle(400,100,400,30,{isStatic:true})
        World.add(world,this.body)
    }

    display(){

        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,400,30)
    }
}