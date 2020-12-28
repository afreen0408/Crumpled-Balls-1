
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,500,800,20);
	paper=new Paper(50,400,30);
	db1=new Dustbin(500,440,20,100);
	db2=new Dustbin(600,480,200,20);
	db3=new Dustbin(700,440,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  
  db2.display();
  db3.display();
  db1.display();
  drawSprites();
 
}
function keyPressed(){

	if (keyCode=== UP_ARROW)
{ 
Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-30})

}
}

