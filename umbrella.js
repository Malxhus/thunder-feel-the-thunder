class Umbrella{
 constructor(x,y){
 var options = {
    'isStatic':true,
    'stiffness':1,
 }
  this.image  = loadImage("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png");
  this.body = Bodies.circle(x, y,90, options);
   this.radius = 90
  World.add(world, this.body);
}

 
display(){
var pos = this.body.position;
  image(this.image,pos.x,pos.y+70,300,300)
    
}
}