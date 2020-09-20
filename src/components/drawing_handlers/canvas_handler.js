import SelectableObject from './selectable_object';
import DrawableObject from './drawable_object';
import CanvasListener from './canvas_obj_listener';
import Circle from './circle';

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
        if(listener.name === listenerName)
        {
          console.log("LISTENER " + listenerName + " CALLED")
          listener.executeAction(evt);
        }
      });
    });
  }

  drawScene()
  {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.objectsInCanvas.forEach(obj => {
      obj.draw();
    });
  }

}

export default CanvasHandler;
