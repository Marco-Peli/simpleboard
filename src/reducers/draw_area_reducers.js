import configObj from '../constants';
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:3002";

const initialDrawAreaState = {
  isDrawing: false,
  drawBuffer: []
};

const initDrawAreaVars = {
  socket: {},
  isInit: false
}

export const drawAreaReducer = (state=initialDrawAreaState, action) => {
  let mousePosRelativeToCanvas = {};
  switch(action.type)
  {
    case configObj.ON_DRAW_AREA_MOUSE_DOWN:
      /*mousePosRelativeToCanvas = getMousePos(action.payload.canvas, action.payload.e);
      state.drawBuffer.push({color: action.payload.color});
      state.drawBuffer.push({x: mousePosRelativeToCanvas.x, y: mousePosRelativeToCanvas.y});
      draw(action.payload.ctx, action.payload.color, mousePosRelativeToCanvas);*/
      action.payload.canvasHandler.handleListeners('mousedown', action.payload.e);
      return Object.assign({}, state, {isDrawing: true});
    case configObj.ON_DRAW_AREA_MOUSE_UP:
      sendData(action.payload.socket, action.payload.buffer);
      state.drawBuffer.length = 0;
      action.payload.ctx.beginPath();
      return Object.assign({}, state, {isDrawing: false});
    case configObj.ON_DRAW_AREA_MOUSE_MOVE:
      mousePosRelativeToCanvas = getMousePos(action.payload.canvas, action.payload.e);
      draw(action.payload.ctx, action.payload.color, mousePosRelativeToCanvas);
      return Object.assign({}, state, state.drawBuffer.push({x: mousePosRelativeToCanvas.x, y: mousePosRelativeToCanvas.y}));
    default:
      return state;
  }
}

export const initDrawReducer = (state=initDrawAreaVars, action) => {
  switch(action.type)
  {
    case configObj.ON_DRAW_AREA_INIT:
      return Object.assign({}, state, {socket: socketIOClient(ENDPOINT), isInit: true});
    default:
      return state;
  }
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

function draw(ctx, color, mousePos) {
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(mousePos.x, mousePos.y);
}

function sendData(socket, buffer)
{
  socket.emit('drawBuf', JSON.stringify(buffer));
}
