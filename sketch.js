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

var suelo;
var soga;
var tomate;
var tomate_enlace;
function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  suelo = new Suelo(200,690,600,20);
  soga = new Soga(6, {x:245, y:30});
  var tomate_opciones={
    density: 0.001
  }
  tomate = Bodies.circle(300,300,15,tomate_opciones);
  Matter.Composite.add(soga.body, tomate);
  tomate_enlace = new Enlace(soga, tomate);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background("black");
  suelo.show();
  soga.show();
  ellipse(tomate.position.x, tomate.position.y, 15,15);
  Engine.update(engine);
   
}