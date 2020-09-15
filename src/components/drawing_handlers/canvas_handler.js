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

  getMousePos(evt) {
      var rect = this.canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
  }

}

export default CanvasHandler;
