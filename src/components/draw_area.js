import React, { useEffect, useRef } from 'react';
import {useDispatch, connect} from 'react-redux'
import {onDrawMouseDown, onDrawMouseUp, onDrawMouseMove, onInitDrawArea} from '../actions/draw_area_actions'
let ctx = {};
let canvas = {};
let inMemCanvas = document.createElement('canvas');
let inMemCtx = inMemCanvas.getContext('2d');

const DrawArea = (props) => {

  const canvasRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!props.isInit)
    {
      canvas = canvasRef.current;
      ctx = canvas.getContext('2d');
      window.addEventListener('resize', () => {
        inMemCanvas.width = canvas.width;
        inMemCanvas.height = canvas.height;
        inMemCtx.drawImage(canvas, 0, 0);
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        ctx.drawImage(inMemCanvas, 0, 0);
      });
      dispatch(onInitDrawArea());
    }
    else {
      props.socket.on('drawBuf', function(msg){
        console.log('received buffer from server: ', msg);
        drawFromServer(JSON.parse(msg), ctx, props.color);
      });
    }
  });

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={(e) => dispatch(onDrawMouseDown(props.color, e, ctx))}
      onMouseUp={() => dispatch(onDrawMouseUp(props.socket, props.buffer, ctx))}
      onMouseMove={(e) => {if(props.isDrawing) dispatch(onDrawMouseMove(props.color, e, ctx))}}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );

}

function drawFromServer(drawBuf, ctx, color)
{
  let metadata = drawBuf[0];
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.lineCap = 'round';
  ctx.strokeStyle = metadata.color;
  ctx.moveTo(drawBuf[1].x, drawBuf[1].y);
  let drawPosBuf = drawBuf.slice(1, drawBuf.length);
  drawPosBuf.forEach((item) => {
    ctx.lineTo(item.x, item.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(item.x, item.y);
  });
  ctx.beginPath();
  ctx.strokeStyle = color;

}

function mapPropsToState(state)
{
  return({
    color: state.handleDrawMenuReducer.color,
    isDrawing: state.drawAreaReducer.isDrawing,
    buffer: state.drawAreaReducer.drawBuffer,
    isInit: state.initDrawReducer.isInit,
    socket: state.initDrawReducer.socket
  });
}

export default connect(mapPropsToState)(DrawArea);
