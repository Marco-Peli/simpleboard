import DrawableObject from './drawable_object';

class SelectableObject extends DrawableObject{
  constructor(posX, posY, canvas, ctx, color)
  {
    super(posX, posY, canvas, ctx, color);
    this.isSelected = false;
    this.listeners = [];
  }

  selectObject()
  {
    this.isSelected = true;
  }

  deselectObject()
  {
    this.isSelected = false;
  }

  addlistener(listener)
  {
    this.listeners.push(listener);
  }

  get getListeners()
  {
    return this.listeners;
  }

  getMousePos(evt) {
      let rect = this.canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
  }

}

export default SelectableObject;
