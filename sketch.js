
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var bin1,bin2,bin3
var ground
var bin

function preload()
{
	binImage = loadImage('dustbingreen.png')
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	paper = new Paper(100, 600, 10);

	 bin1 = new Dustbin(550, 620, 20, 100);
     bin2 = new Dustbin(635, 660, 150, 20);
	 bin3 = new Dustbin(720, 620, 20, 100);
	 
	 ground = new Ground(400, 680, 800, 20);
	 
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);

  paper.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  image(binImage,535,500,210,180);
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position,{x:90, y: -100})
	}

  }


