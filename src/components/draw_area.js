import React, { useEffect, useRef } from 'react';
import {useDispatch, connect} from 'react-redux'
import {onDrawMouseDown, onDrawMouseUp, onDrawMouseMove, onInitDrawArea, onCanvasResize} from '../actions/draw_area_actions'
import '../style/draw_area.css';
import CanvasHandler from './drawing_handlers/canvas_handler';
import Circle from './drawing_handlers/circle'

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
      dispatch(onInitDrawArea());
    }
    else {
      new Circle(100, 100, canvas, ctx, 40, '#808080').draw();
      props.socket.on('drawBuf', function(msg){
        console.log('received buffer from server: ', msg);
        drawFromServer(JSON.parse(msg), ctx, props.color);
      });
    }
  });

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={(e) => {if(!props.isMouseOverDrawMenu) {e.persist(); dispatch(onDrawMouseDown(props.color, e, ctx, canvas))}}}
      onMouseUp={() => {if(props.isDrawing) dispatch(onDrawMouseUp(props.socket, props.buffer, ctx))} }
      onMouseMove={(e) => { e.persist(); if(props.isDrawing) dispatch(onDrawMouseMove(props.color, e, ctx, canvas)) }}
      onMouseLeave={() => {if(props.isDrawing) dispatch(onDrawMouseUp(props.socket, props.buffer, ctx))}}
      width={500}
      height={500}
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
    socket: state.initDrawReducer.socket,
    isMouseOverDrawMenu: state.handleDrawMenuReducer.isMouseOverDrawMenu
  });
}

export default connect(mapPropsToState)(DrawArea);
