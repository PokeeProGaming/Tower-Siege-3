const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var ball;
var slingshot;
var polygonImg;
var score = 0;

function preload(){
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(390,300,250,10);
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    slingshot = new SlingShot(this.ball,{x:100,y:200});
    //level 1
    block1 = new Block(300,275,30,50);
    block2 = new Block(330,275,30,50);
    block3= new Block(360,275,30,50);
    block4 = new Block(390,275,30,50);
    block5 = new Block(420,275,30,50);
    block6 = new Block(450,275,30,50);
    block7 = new Block(480,275,30,50);
    //level 2
    block8 = new Block(330,235,30,50);
    block9 = new Block(360,235,30,50);
    block10 = new Block(390,235,30,50);
    block11 = new Block(420,235,30,50);
    block12 = new Block(450,235,30,50);
    //level 3
    block13 = new Block(360,195,30,50);
    block14 = new Block(390,195,30,50);
    block15 = new Block(420,195,30,50);
    //level 4
    block16 = new Block(390,155,30,50);
    
    
}

function draw(){
    background(0);

    noStroke();
    textSize(35);
    fill("white");
    text("Score  " + score, width-300, 50);


    Engine.update(engine);
    strokeWeight(4);

    imageMode(CENTER);
    image(polygonImg,ball.position.x,ball.position.y,50,50);
    slingshot.display();
    stand1.display();
    fill("blue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("red");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("green")
    block13.display();
    block14.display();
    block15.display();
    fill("yellow")
    block16.display();


    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(ball);
    }
}