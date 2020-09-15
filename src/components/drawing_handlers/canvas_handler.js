class CanvasHandler{
  constructor(canvas, ctx)
  {
    this.canvas = canvas;
    this.ctx = ctx;
    this.objListeners = [];
    this.objectsInCanvas = [];
  }

  addObject(obj)
  {
    this.objectsInCanvas.push(obj);
  }

  handleListeners()
  {

  }

  drawScene()
  {
    this.objectsInCanvas.forEach(obj => {
      obj.draw()
    });
  }

  getMousePos(evt) {
      var rect = this.canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
  }

}

export default CanvasHandler;
