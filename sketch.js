const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,ground,ball;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world=engine.world;

  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);

  var ball_options = {
    restitution: 1.5
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  console.log(ball);
}

function draw() {
  background("blue"); 
  Engine.update(engine);
   fill("green")
  rectMode(CENTER) 
  rect(ground.position.x, ground.position.y, 1500, 20);

  fill("yellow")
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}

  



