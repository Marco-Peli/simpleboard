import SelectableObject from './selectable_object';
import DrawableObject from './drawable_object';
import CanvasListener from './canvas_obj_listener';

class Circle extends SelectableObject{
  constructor(posX, posY, canvas, ctx, radius, color)
  {
    super(posX, posY, canvas, ctx, color);
    this.radius = radius;
    this.addlistener(new CanvasListener('mousedown', (evt) => this.isMouseInsideObject(evt)));
    console.log("circle constructor", this.isSelected);
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

  isMouseInsideObject(evt)
  {
    let mousePos = this.getMousePos(evt);

    console.log('mousePos', mousePos);

    if((mousePos.x<(this.pos.x+this.radius)) && (mousePos.x>(this.pos.x-this.radius)))
    {
      this.selectObject();
    }
    else
    {
      this.deselectObject();
    }

    console.log("circle selected: ", this.isSelected);
    this.printInfo();
  }

  printInfo(){
    super.printInfo();
    console.log('radius', this.radius);
  }

}

export default Circle;
