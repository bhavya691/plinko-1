const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var line1 ;
var divisionHeight = 300;

var par;
var particles = [];
var plinkos = [];
var divisions = [];
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

  

  line1 = new Ground();

  for(var k = 0; k<=width; k = k + 80){
    divisions.push(new Divisions( k , height-divisionHeight/2, 10, divisionHeight))
  }

  for(var j = 40; j<=width; j = j + 50){
    plinkos.push(new Plinko(j,75))
  }

  for(var j = 15; j<=width-10 ; j = j + 50){
    plinkos.push(new Plinko(j,175))
  }

  for(var j = 40; j<=width; j = j + 50){
    plinkos.push(new Plinko(j,275))
  }

  for(var j = 15; j<=width-10 ; j = j + 50){
    plinkos.push(new Plinko(j,375))
  }

}


function draw() {
  
 
 
  background(0);  
  Engine.update(engine);

  line1.display();

  
 

 for(var k=0; k < divisions.length; k++){
  divisions[k].display();
}


if(frameCount%60===0){
  particles.push(new Particle(random(width/2-30, width/2+30), 10,));

}

for (var j = 0; j < particles.length; j++) {

  particles[j].display();
}


for(var j=0; j <= width; j++){
  plinkos[j].display();
 
}
  
  drawSprites();
}

