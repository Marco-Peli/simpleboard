import SelectableObject from './selectable_object';

class DraggableObject extends SelectableObject{
  constructor(posX, posY, canvas, ctx, color)
  {
    super(posX, posY, canvas, ctx, color);
    this.isDraggable = true;
    this.mouseRelPos = {
      x: this.pos.x,
      y: this.pos.y
    }
  }

  setDraggable(){
    this.isDraggable = true;
  }

  unsetDraggable(){
    this.isDraggable = false;
  }

  setNewPos(posX, posY)
  {
    this.pos.x = posX;
    this.pos.y = posY;
  }

  setMouseDragRelativePos(mousePos)
  {
    this.mouseRelPos.x = mousePos.x - this.pos.x;
    this.mouseRelPos.x = mousePos.x - this.pos.x;
  }
}

export default DraggableObject;
