class Player {
  constructor(x,y) {
    var options = {
        'restitution':1,
        'density':10,
        isStatic:false
    }
    this.body = Bodies.circle(x, y, 20, options);
    World.add(world, this.body);
    

  }
  display(){
    var pos =this.body.position;
    var angle=this.body.angle;
   // this.body.position.y=mouseY
    //this.body.position.x=mouseX
    push();
    
    translate(pos.x, pos.y);
    rotate(angle);
    fill("red");
    ellipseMode(RADIANS);
    ellipse(0, 0, 40, 40);
    pop();
   
  }
}
