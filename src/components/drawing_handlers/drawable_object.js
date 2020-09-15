class DrawableObject{
  constructor(posX, posY, canvas, ctx, color)
  {
    this.pos = {
      x: posX,
      y: posY
    };
    this.color = color;
    this.canvas = canvas;
    this.ctx = ctx;
  }

  draw() {
    throw new Error("Method 'draw()' must be implemented.");
  }

  printInfo()
  {
    console.log("Position Info", this.pos);
  }

}

export default DrawableObject;
