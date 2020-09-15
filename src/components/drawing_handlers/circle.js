import SelectableObject from './selectable_object';

class Circle extends SelectableObject{
  constructor(posX, posY, canvas, ctx, radius, color)
  {
    super(posX, posY, canvas, ctx, color);
    this.radius = radius;
  }

  draw()
  {
    if(this.isSelected)
    {
      this.ctx.beginPath();
      this.ctx.rect(this.pos.x-this.radius, this.pos.y-this.radius, this.radius*2, this.radius*2);
      this.ctx.stroke();
      this.ctx.beginPath();
    }

    this.ctx.beginPath();
    this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2, true);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.beginPath();
  }

}

export default Circle;
