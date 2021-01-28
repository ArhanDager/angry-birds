const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

var bg

var box1;
var box2;


function preload(){
    bg = loadImage('sprites/bg.png')
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    bird = new Bird(100,300)

    ground = new Ground(600,height,1200,20);

    box1= new Box(700,520,70,70);
    box2= new Box(920,520,70,70)
    pig1 = new Pig(810,550)
    log1 = new Log(810,480,300,PI/2)

    box3= new Box(700,450,70,70);
    box4= new Box(920,450,70,70)
    pig2 = new Pig(810,420)
    log2 = new Log(810,380,300,PI/2)
    
    box5 = new Box(810,320,70,70)
    log3 = new Log(760,280,150,PI/3);
    log4 = new Log(870,280,150,-PI/7);


}


function draw(){
    background(bg);
    Engine.update(engine);

    bird.display()

    ground.display();
    
    box1.display()
    box2.display()
    pig1.display()
    log1.display()

    box3.display()
    box4.display()
    pig2.display()
    log2.display()

    box5.display()
    log3.display()
    log4.display()
}
