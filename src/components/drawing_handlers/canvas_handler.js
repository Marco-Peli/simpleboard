
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

  handleListeners(listenerName, evt)
  {
    this.objectsInCanvas.forEach(drawObj => {
      let itemListeners = drawObj.getListeners;
      itemListeners.forEach(listener => {
        if(listener.getName === listenerName)
        {
          console.log("LISTENER " + listenerName + " CALLED")
          listener.executeAction();
        }
      });
    });
  }

  drawScene()
  {
    this.objectsInCanvas.forEach(obj => {
      obj.draw();
    });
  }

}

export default CanvasHandler;
