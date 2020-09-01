import configObj from '../constants';

const initialDrawAreaState = {
  isDrawing: false,
  drawBuffer: []
};

export const drawAreaReducer = (state=initialDrawAreaState, action) => {

  switch(action.type)
  {
    case configObj.ON_DRAW_AREA_MOUSE_DOWN:
      state.drawBuffer.push({color: action.payload.color});
      state.drawBuffer.push({x: action.payload.e.clientX, y: action.payload.e.clientY});
      draw(action.payload.e, action.payload.ctx, action.payload.color);
      return Object.assign({}, state, {isDrawing: true});
    case configObj.ON_DRAW_AREA_MOUSE_UP:
      return Object.assign({}, state, {isDrawing: false});
    case configObj.ON_DRAW_AREA_MOUSE_MOVE:
      draw(action.payload.e, action.payload.ctx, action.payload.color);
      return Object.assign({}, state, state.drawBuffer.push({x: action.payload.e.clientX, y: action.payload.e.clientY}));
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
