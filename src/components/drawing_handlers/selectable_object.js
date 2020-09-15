import DrawableObject from './drawable_object';

class SelectableObject extends DrawableObject{
  constructor(posX, posY, canvas, ctx, color)
  {
    super(posX, posY, canvas, ctx, color);
    this.isSelected = false;
  }

}

export default SelectableObject;
