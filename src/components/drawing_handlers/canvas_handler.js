class CanvasHandler{
  constructor(canvas, ctx)
  {
    this.canvas = canvas;
    this.ctx = ctx;
    this.objListeners = [];
  }

  addObjectListener()
  {

  }

  handleListeners()
  {

  }

  print()
  {
    console.log("hey");
  }

  getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
  }

}

export default CanvasHandler;
