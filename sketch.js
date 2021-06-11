
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1=new Roof()
	bob1=new Bob(300,300,25)
	bob2=new Bob(350,300,25)
	bob3=new Bob(400,300,25)
	bob4=new Bob(250,300,25)
	bob5=new Bob(200,300,25)
	rope1=new Rope(bob1.body,roof1.body,0)
	rope2=new Rope(bob2.body,roof1.body,50)
	rope3=new Rope(bob3.body,roof1.body,100)
	rope4=new Rope(bob4.body,roof1.body,-50)
	rope5=new Rope(bob5.body,roof1.body,-100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  roof1.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
}

function keyPressed(){

	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(bob5.body, bob5.body.position,{x:45,y:-45})
	}
}

