class CanvasListener {
  constructor(name, action){
    this.name = name;
    this.action = action;
  }

  executeAction(evt)
  {
    this.action(evt);
  }

  get getName()
  {
    return this.name;
  }
}

export default CanvasListener;
