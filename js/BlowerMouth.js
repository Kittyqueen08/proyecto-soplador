class BlowerMouth {
  constructor(x, y, w, h) {
    let options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.color = color;
    World.add(world, this.body);
    this.image= loadImage("pipaImg.png");
  }

  show() {
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill("#8d6e63");
    imageMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
