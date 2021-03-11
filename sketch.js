var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

var fixedRect1;
var fixedRect2;
var fixedRect3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	

	fixedRect1= createSprite(340, 610, 20, 80);
     fixedRect1.shapeColor=("red");
	
 
 
	fixedRect2= createSprite(499, 610, 20, 80);
	fixedRect2.shapeColor=("red");

	fixedRect3= createSprite(419, 650, 178, 20);
	fixedRect3.shapeColor=("red");

    packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:false});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    
	 fixedBody = Bodies.rectangle(400,610,5,{restitution:0, isStatic:true});
	World.add(world,fixedBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 Engine.update(engine);
 
 packageSprite.x= packageBody.position.x; 
 packageSprite.y= packageBody.position.y; 
 
 
 

  drawSprites();



 
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:false});
	World.add(world, packageBody);	
	    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



