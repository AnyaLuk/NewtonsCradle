
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var roof;
var bob1, bob2,bob3,bob4,bob5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,90,600,50);
	bob1 = new Bob (200,500)
	bob2 = new Bob (300,500)
	bob3 = new Bob (400,500)
	bob4 = new Bob (500,500)
	bob5 = new Bob (600,500)

	rope1 = new Rope (bob1.body, roof.body, -bobDiameter*2, 0)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGrey");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  drawSprites();
 
}



