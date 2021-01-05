const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box2, box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,200,50,50);
    box2 = new Box(220,100,50,70);
    ground = new Ground(200,380,width,10);
    //console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
}