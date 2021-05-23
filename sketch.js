
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var a=1;
function setup() {
	createCanvas(1400, 600);
	engine = Engine.create();
	world = engine.world;

  //create objects here

  //grounds
ground1= new Ground(700, 580, 1400, 20);
ground2=new Ground(1380, 300, 20, 600);
ground3=new Ground(700, 20, 1400, 20);

  //players
  player1=new Player(200, 200);

  //basket
  net1=new Net(1360, 200, 10, 60);
  net3=new Net(1295, 200, 10, 60);
  net2= new Net(1330, 225, 70, 10);
  

	Engine.run(engine);
  
}


function draw() {
  background(0);
  textSize(20);
fill("red");
 text("press up arrow key to bounce up and use the right arrow key to move right", 50, 50);
 text("only press the right arrow key when the ball is above the net", 50, 100);
 textSize(17);
 fill("blue");
 text("Objective:to put the ball in the net", 1000, 100);
//display objects here
player1.display();
ground1.display();
ground2.display();
net1.display();
net2.display();
net3.display();

if(player1.body.position.x>1300&&player1.body.position.x<1355&&
  player1.body.position.y>160&&player1.body.position.y<220){
    textSize(100);
     text("YOU WIN!",  700, 300);
     textSize(20);
    }else{}
    textSize(20);
    text("press r key to try again", 650, 100);
    text
}


function keyPressed(){
  if(keyCode===38){
    Matter.Body.setPosition(player1.body, {x:200, y:200});
  }
  if(keyCode===39){
    Matter.Body.setPosition(player1.body, {x:1360, y:player1.body.position.y});
  }
  if(keyCode===82){
    Matter.Body.setPosition(player1.body, {x:200, y:200});
  }
}

