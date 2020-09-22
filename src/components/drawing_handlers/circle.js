import DraggableObject from './draggable_object';
import CanvasListener from './canvas_obj_listener';

class Circle extends DraggableObject{
  constructor(posX, posY, canvas, ctx, radius, color)
  {
    super(posX, posY, canvas, ctx, color);
    this.radius = radius;
    this.addlistener(new CanvasListener('mousedown', (evt) => this.isMouseInsideObject(evt)));
    this.addlistener(new CanvasListener('mousemove', (evt) => this.moveObject(evt)));
    this.addlistener(new CanvasListener('mouseup', (evt) => this.mouseUp(evt)));
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

    if((mousePos.x<(this.pos.x+this.radius)) && (mousePos.x>(this.pos.x-this.radius)))
    {
      this.selectObject();
      this.setDraggable();
      this.setMouseDragRelativePos(mousePos);
    }
    else
    {
      this.deselectObject();
      this.unsetDraggable();
    }
  }

  moveObject(evt)
  {
    if(!this.isDraggable)
    {
      return;
    }
    let mousePos = this.getMousePos(evt);

    if(this.isDraggable)
    {
      this.setNewPos(mousePos.x - this.mouseRelPos.x, mousePos.y - this.mouseRelPos.y);
    }
  }

  mouseUp(evt)
  {
    this.unsetDraggable();
  }

  printInfo(){
    super.printInfo();
    console.log('radius', this.radius);
  }

}

export default Circle;
