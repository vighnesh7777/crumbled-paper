
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	,Db;
var world;
var paperBall;

function preLoad()
{
	paperImg=loadImg("sprites/paper.png");
	DBImg=loadImg("sprites/dustbingreen");
}


function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	//dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
	paperBall=new paper(100,100,50,50);
	dbim= new DBIMG();
}

function keyPressed() 
        { if (keyCode === UP_ARROW) 

          { Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:100,y:-448});
        }
       }

function draw() {
  rectMode(CENTER);
  background(230);

  paperBall.display();
  groundObject.display();
  //dustbinObj.display();
  dbim.display();

}

