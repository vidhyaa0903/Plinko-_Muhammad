const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var base,testparticle,testplinko;


var score = 0;
var particles = [];
var plinkos = [];
var divs = [];

var divheight = 300;

function setup() {
  createCanvas(485,800);
  engine = Engine.create();
    world = engine.world;
    for (var k = 0;k <=width;k = k + 80){
      divs.push(new div(k,height-divheight/2,10,divheight));
    //  divs[k].display();
    }
    for(var j = 40; j<=width; j = j+50){
      plinkos.push(new plinko(j,75))
    }
    for(var j = 15;j <=width-10; j = j+50){
      plinkos.push(new plinko(j,175))
    }
    for(var j = 40;j <=width; j = j+50){
      plinkos.push(new plinko(j,275))
    }
    for(var j = 40;j <=width; j = j+50){
      plinkos.push(new plinko(j,375));
    }

    if(frameCount%60===0){ 
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }
  base = new ground(240,800,500,15)
  
}

function draw() {
  background("black"); 
  Engine.update(engine);
   
  
  for (var k = 0; k < divs.length; k++) {
    divs[k].display();
  }
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
 /* for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }
  
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }*/
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }

  for (var l = 0; l< particles.length; l++) {
    particles[l].display();
  }
  
  
//  console.log(particles)
  
  base.display();
  
  
  
}
