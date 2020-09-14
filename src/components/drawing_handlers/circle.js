import DrawableObject from './drawable_object';

class Circle extends DrawableObject{
  constructor(posX, posY, radius, canvas, ctx)
  {
    super(posX, posY);
    this.canvas = canvas;
    this.ctx = ctx;
    this.radius = radius;
  }

  draw()
  {
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    this.ctx.fillStyle = "#07C";
    this.ctx.fill();
  }

}

export default Circle;
