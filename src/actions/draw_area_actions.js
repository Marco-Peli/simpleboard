import configObj from '../constants';

export const onDrawMouseDown = (color, e, ctx) =>
{
  return {
    type: configObj.ON_DRAW_AREA_MOUSE_DOWN,
    payload: {color, e, ctx}
  }
}

export const onDrawMouseUp = (socket, buffer, ctx) =>
{
  return {
    type: configObj.ON_DRAW_AREA_MOUSE_UP,
    payload: {socket, buffer, ctx}
  }
}

export const onDrawMouseMove = (color, e, ctx) =>
{
  return {
    type: configObj.ON_DRAW_AREA_MOUSE_MOVE,
    payload: {color, e, ctx}
  }
}

export const onCanvasResize = (canvas, inMemCanvas, ctx, inMemCtx) =>
{
  return {
    type: configObj.ON_CANVAS_RESIZE,
    payload: {canvas, inMemCanvas, ctx, inMemCtx}
  }
}

export const onInitDrawArea = () =>
{
  return {
    type: configObj.ON_DRAW_AREA_INIT
  }
}
