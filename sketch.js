
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball=new Ball(400,200,20);
    
	roof=new Roof(400,100,300,20);
    slingshot = new SlingShot


	
  
}


function draw() {
 
  background(0);
  Engine.update(engine);
ball.display();


roof.display();


 
 
}



