const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;
var g1;
var count=0;
var count2=0;
function preload(){
  img = loadImage("pipaImg.png");
  go= loadImage("gameover.png");
  gosound = loadSound("gameoversound.mp3");
  airesound = loadSound("aire.mp3");
}
function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  blowerMouth = new BlowerMouth(width / 2 + 80, height / 2 + 20, 80, 20);
  button = createButton("Haz clic para soplar");
  button.position(250, 450 );
  button.class("blowButton");
  g1= new Ground(250,200,50);
  g2= new Ground(420,200,50);
  g3= new Ground(270,260,50);
  g4= new Ground(390,250,50);



  button.mousePressed(blow);

  //buttonPressed(blow);
  
  //button = mousePressed(blow);
  
  //button.mousePressed();

}

function draw() {
  background(240);
  Engine.update(engine);

  ball.show();
  
  imageMode(CENTER);
  image(img,width / 2 + 20, height / 2 + 20, 300, 280)

  if(ball.body.position.y>550 ||ball.body.position.y<-50 ||ball.body.position.x>500 || ball.body.position.x<-50   ){
    
    ball.body.position.x=600;
    ball.body.position.y=1000;
    image(go, width/2, height/2-150, 450,100);
    if(count==0){
      gosound.play();
      count=1;  
    }

  }
}

function blow() {

  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.03});

  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05});
  
  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0.05, y:0.05});
  
  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:-0.05, y:0});
  airesound.play();
}

