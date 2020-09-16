class CanvasListener {
  constructor(name, action){
    this.name = name;
    this.action = action;
  }

  executeAction()
  {
    
    this.action();
  }

  get getName()
  {
    return this.name;
  }
}

export default CanvasListener;
