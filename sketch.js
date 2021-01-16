
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(180,200,80,20);
	ground2 = new Ground(250,200,780,20);
	ground3 = new Ground(320,200,780,20);
	ground4 = new Ground(390,200,780,20);
	ground5 = new Ground(460,200,80,20);
	
	ball1=new Ball(180,200,70);
	ball2=new Ball(250,200,70);
	ball3=new Ball(320,200,70);
	ball4=new Ball(390,200,70);
	ball5=new Ball(460,200,70);
	
	chain1 =new Chain(ground1.body,ball1.body);
	chain2 =new Chain(ground2.body,ball2.body);
    chain3 =new Chain(ground3.body,ball3.body);
	chain4 =new Chain(ground4.body,ball4.body);
	chain5 =new Chain(ground5.body,ball5.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground1.display();
  ground2.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === RIGHT_ARROW) {

	  Matter.Body.applyForce(ball5.body,ball5.body.position,{x:135,y:45});

  
	}
}




