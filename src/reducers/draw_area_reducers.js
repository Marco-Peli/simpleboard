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
  switch(action.type)
  {
    case configObj.ON_DRAW_AREA_MOUSE_DOWN:
      state.drawBuffer.push({color: action.payload.color});
      state.drawBuffer.push({x: action.payload.e.clientX, y: action.payload.e.clientY});
      draw(action.payload.e, action.payload.ctx, action.payload.color);
      return Object.assign({}, state, {isDrawing: true});
    case configObj.ON_DRAW_AREA_MOUSE_UP:
      sendData(action.payload.socket, action.payload.buffer);
      state.drawBuffer.length = 0;
      action.payload.ctx.beginPath();
      return Object.assign({}, state, {isDrawing: false});
    case configObj.ON_DRAW_AREA_MOUSE_MOVE:
      draw(action.payload.e, action.payload.ctx, action.payload.color);
      return Object.assign({}, state, state.drawBuffer.push({x: action.payload.e.clientX, y: action.payload.e.clientY}));
    case configObj.ON_CANVAS_RESIZE:
      action.payload.inMemCanvas.width = action.payload.canvas.width;
      action.payload.inMemCanvas.height = action.payload.canvas.height;
      action.payload.inMemCtx.drawImage(action.payload.canvas, 0, 0);
      action.payload.canvas.height = window.innerHeight;
      action.payload.canvas.width = window.innerWidth;
      action.payload.ctx.drawImage(action.payload.inMemCanvas, 0, 0);
      return state;
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

function draw(e, ctx, color) {
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
}

function sendData(socket, buffer)
{
  socket.emit('drawBuf', JSON.stringify(buffer));
}
