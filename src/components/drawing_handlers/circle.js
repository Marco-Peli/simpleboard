import SelectableObject from './selectable_object';
import DrawableObject from './drawable_object';
import CanvasListener from './canvas_obj_listener';

class Circle extends SelectableObject{
  constructor(posX, posY, canvas, ctx, radius, color)
  {
    super(posX, posY, canvas, ctx, color);
    this.addlistener(new CanvasListener('mousedown', this.isMouseInsideObject));
    this.radius = radius;
  }

  draw()
  {
    console.log("circle draw");
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

  isMouseInsideObject()
  {
    /*let mousePos = this.getMousePos(evt);

    if(mousePos.x<this.pos.x+this.radius && mousePos.x>this.pos.x-this.radius)
    {
      this.isSelected = true;
    }
    else
    {
      this.isSelected = false;
    }*/
    super.selectObject();
    //this.isSelected = true;
    console.log("circle listener called", this.isSelected);
  }

}

export default Circle;
