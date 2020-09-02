import React, { useState, useEffect, useRef } from 'react';
import {useDispatch, useSelector, connect} from 'react-redux'
import {onDrawMouseDown, onDrawMouseUp, onDrawMouseMove, onInitDrawArea} from '../actions/draw_area_actions'

const DrawArea = (props) => {

  const canvasRef = useRef(null);
  const dispatch = useDispatch();
  let canvas = {};
  let ctx = {};

  useEffect(() => {
    canvas = canvasRef.current;
    ctx = canvas.getContext('2d');

    if(!props.isInit)
    {
      dispatch(onInitDrawArea());
    }
    else {
      props.socket.on('drawBuf', function(msg){
        console.log('received buffer from server: ', msg);
        let tempBuf = JSON.parse(msg);
        drawFromServer(tempBuf, ctx, props.color);
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
