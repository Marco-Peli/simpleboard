class DrawableObject{
  constructor(posX, posY)
  {
    this.pos = {
      x: posX,
      y: posY
    };
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
