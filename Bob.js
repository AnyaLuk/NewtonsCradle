class Bob {
    constructor(x, y, width, height) {
      var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2,
        isStatic: true
      }
      this.body = Bodies.circle(x, y,20, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("pink")
      stroke("grey")
      ellipse(0, 0, this.width, this.height);
      pop();

    }
  };