
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, floor;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

    ball = new paper(400,400, 50);
    floor = new ground(400, 700);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
    background(0);
    floor.display();
    ball.display();
  
  drawSprites();
 
}



