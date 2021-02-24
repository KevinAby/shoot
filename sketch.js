
var Tourus , wall2, Tspeed,Tweight,Tdeformation;


function setup() {
  createCanvas(1200,800);
 

thickness= random(30,60)

   

Tspeed=random(40,113)
    Tweight=random(22,50)
    
    
    Tourus =createSprite(300, 350, 30, 10);
   Tourus.shapeColor="white"

   wall2 =createSprite(900,350,thickness,80)
   wall2.shapeColor = "white"

    

    Tourus.velocityX=Tspeed


    Tdeformation= 0.5*Tweight*Tspeed*Tspeed/thickness*thickness*thickness
}


function draw() {
  background(10);  
  
   console.log(Tdeformation)

   if (Tourus.velocityX<1){
    if (Tdeformation>30 ){

      wall2.shapeColor="red"
    }
   
    
    if ( Tdeformation<30  ){

      wall2.shapeColor="green"
    }
   
    
   }






  console.log(Tdeformation)

 





  
  
  col2() 
    
    

  
  
  
  
  
  
  
  drawSprites();
}



function col2(){

  if(Tourus.x-wall2.x<wall2.width/2+Tourus.width/2 
    && wall2.x-Tourus.x<wall2.width/2+Tourus.width/2 
     ){
    Tourus.velocityX=Tspeed-Tspeed
  }
}
