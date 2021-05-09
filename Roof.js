class Roof {

constructor(x, y) {

  this.body = Bodies.rectangle(x, y, 500,80, {isStatic:true});

  World.add(world, this.body);

  this.width = 500;
  this.height = 8;


}

display() {

  rectMode(CENTER);

  stroke("black")

  fill("red");

  rect(this.body.position.x,this.body.position.y, this.width, this.height);

}

};