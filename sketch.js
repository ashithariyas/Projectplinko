



const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particle = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;




function setup() {
  
  var canvas = createCanvas(480,600);
  engine = Engine.create();
  world = engine.world;


 ground = new Ground(600,590,1200,10);
  
}




function draw() {
  
  background(35,35,35);
  Engine.update(engine);
  
  for(var k = 0; k <=width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
  }  
   
  for(var j=40; j<=width; j=j+70)
   {
     plinkos.push(new Plinko(j,100));
   }
   for(var j =15; j <=width-10; j=j+50)
   {
     plinkos.push(new Plinko(j,150))
   }
   for(var j=15; j<=width; j=j+50)
   {
     plinkos.push(new Plinko(j,55));
   }
   for(var j =40; j <=width-10; j=j+70)
   {
     plinkos.push(new Plinko(j,200))
   }
   
   if(frameCount%60==0){
     particle.push(new Particle(random(width/2-10,width/2+10),10,10));
   }
   ground.display();
   for(var j = 0; j <particle.length; j++){
     particle[j].display();
   }
   for(var k = 0; k <divisions.length; k++){
    divisions[k].display();
  }
  for(var o = 0; o <plinkos.length; o++){
    plinkos[o].display();
  }
  drawSprites();
}