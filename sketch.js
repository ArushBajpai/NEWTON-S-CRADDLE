
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ; 
var bobObject1,bobObject2,bobObject3 ,bobObject4,bobObject5;

var roofObject ; 

 

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(900, 700);

bobObject1=new Bob(350,400,50);
bobObject2=new Bob(400,400,50);
bobObject3=new Bob(450,400,50);
bobObject4=new Bob(500,400,50);
bobObject5=new Bob(550,400,50);
roofObject = new Roof(450,200,400,20);
sling1= new Rope(bobObject1.body,roofObject.body,-50*2,0);
sling2= new Rope(bobObject2.body,roofObject.body,-25*2,0);
sling3= new Rope(bobObject3.body,roofObject.body,-0*2,0);
sling4= new Rope(bobObject4.body,roofObject.body,25*2,0);
sling5= new Rope(bobObject5.body,roofObject.body,50*2,0);
	



	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  
  
  drawSprites();

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	roofObject.display();
	sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
	
  sling1.depth = bobObject1.depth
  bobObject1.depth = bobObject1.depth + 1
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-120,y:-120}); } 
} 



