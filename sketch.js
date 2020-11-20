const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var engine,world;

var particles = [];
var plinkos = [];
var divisions = [];

var a;

var divisionHeight=300;

var score = 0;
var count = 0;

var gameState = "start";

function setup() {

  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  a = "black";

  //  declaration of the divisional height and the plinkos  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {

  background(a);
  Engine.update(engine);


  textSize(20);

  push();
  textSize(27);


  fill('skyblue');

  push();
  fill(random(0, 255), random(0, 255), random(0, 255));
  text("made by Arabhya :) ",320,30);
  pop();


  //All  the  text required 
  text("count : "+count,680,30);

  text("Score : "+score,50,30);

  text("500",20,570);

  text("mouseX "+mouseX +" " +mouseY,300,470);
 
  text("particle"+ particles.length,100,470);

  text("500",100,570);

  text("500",180,570);

  text("500",260,570);

  text("100",340,570);

  text("100",420,570);

  text("100",500,570);

  text("200",580,570);

  text("200",660,570);
  
  text("200",740,570);

  pop();
 

  // displaying the divisional height and the plinkos
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }


   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(count== 2){
     console.log("this  is particle "+particles[1]);
   }



  for (var j = 0; j < particles.length; j++) {

    Matter.Body.setStatic(particles[j].body,false);
    particles[j].display();
  }

  //console.log("this is the particle "+particles);
  //console.log("this is particle 5 "+ particles[1]);
  //console.log(a);
  //console.log(count);
  //console.log("this is the particle "+particles.length);



  // gameover statement here
  if(gameState == "end"){
    
  fill(0, 51, 102);
  rect(410,320,350,100);

  push();
  textSize(57);
  fill(255, 102, 0);
  text("GameOver",280,340);
  pop();

  }


  
}



function mousePressed(){


    //var body =  body.position.y;
    if(count == 5){
      
      if(particles[5].body.position.y >500){
         gameState = "end";
      }

    }
     

  if(gameState === "start"){
    //0, 0, 102
    a =  [0, 0, 102];
   count++;

   particles.push(new Particle(mouseX, 10,10));


   console.log(particles[1].body.position);


   /// score for particle 1

   if(particles[1]){

     if(particles[1].body.position.y >700){ 

      // asigninng 500
      if(particles[1].body.position.x <330){
        score = score+500;
      }

      //asigning 100
      if(particles[1].body.position.x >331&&particles[1].body.position.x<560){
        score = score+100;
      }

      //asigning 200
      if(particles[1].body.position.x >561&&particles[1].body.position.x<800){
        score = score+200;
      }


     }
   }

    /// score for particle 2

    if(particles[2]){

      if(particles[2].body.position.y >700){ 
   
       // asigninng 500
       if(particles[2].body.position.x <330){
         score = score+500;
       }
   
      //asigning 100
      if(particles[2].body.position.x >331&&particles[2].body.position.x<560){
         score = score+100;
      }
   
      //asigning 200
      if(particles[2].body.position.x >561&&particles[2].body.position.x<800){
         score = score+200;
      }
   
   
        }
      }

   /// score for particle 3

   if(particles[3]){

    if(particles[3].body.position.y >700){ 

     // asigninng 500
     if(particles[3].body.position.x <330){
       score = score+500;
     }

     //asigning 100
     if(particles[3].body.position.x >331&&particles[3].body.position.x<560){
       score = score+100;
     }

     //asigning 200
     if(particles[3].body.position.x >561&&particles[3].body.position.x<800){
       score = score+200;
     }


    }
  }

   /// score for particle 4

   if(particles[4]){

    if(particles[4].body.position.y >700){ 

     // asigninng 500
     if(particles[4].body.position.x <330){
       score = score+500;
     }

     //asigning 100
     if(particles[4].body.position.x >331&&particles[4].body.position.x<560){
       score = score+100;
     }

     //asigning 200
     if(particles[4].body.position.x >561&&particles[4].body.position.x<800){
       score = score+200;
     }


    }
  }

   /// score for particle 5

   if(particles[5]){

    if(particles[5].body.position.y >700){ 

     // asigninng 500
     if(particles[5].body.position.x <330){
       score = score+500;
     }

     //asigning 100
     if(particles[5].body.position.x >331&&particles[5].body.position.x<560){
       score = score+100;
     }

     //asigning 200
     if(particles[5].body.position.x >561&&particles[5].body.position.x<800){
       score = score+200;
     }


    }
  }

      
/*

   if(particles[1].body.position.y >700||particles[2].body.position.y >700||particles[3].body.position.y >700||particles[4].body.position.y>700||particles[5].body.position.y >700){

    
    if(particles[1].body.position.x <330||particles[2].body.position.x <330||particles[3].body.position.x <330||particles[4].body.position.x <330||particles[5].body.position.x <330){
      
    score = score+500;
    }


    if(particles[1].body.position.x >331&&particles[1].body.position.x<560||particles[2].body.position.x >331&&particles[2].body.position.x<560||particles[3].body.position.x >331&&particles[3].body.position.x<560||particles[4].body.position.x >331&&particles[4].body.position.x<560||particles[5].body.position.x >331&&particles[5].body.position.x<560){
      
      score = score+100;
      }
  }


  
   local  = new Particle(20, 10,10);
   local.display();
   Matter.Body.setStatic(local.body,false);
   console.log(local);
    
*/

 
}

}
