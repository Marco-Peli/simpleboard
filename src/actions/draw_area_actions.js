import configObj from '../constants';

export const onDrawMouseDown = (color, e, ctx) =>
{
  return {
    type: configObj.ON_DRAW_AREA_MOUSE_DOWN,
    payload: {color, e, ctx}
  }
}

export const onDrawMouseUp = () =>
{
  return {
    type: configObj.ON_DRAW_AREA_MOUSE_UP
  }
}

export const onDrawMouseMove = (color, e, ctx) =>
{
  return {
    type: configObj.ON_DRAW_AREA_MOUSE_MOVE,
    payload: {color, e, ctx}
  }
}

export const onInitDrawArea = (socket, canvas, ctx) =>
{
  return {
    type: configObj.ON_DRAW_AREA_MOUSE_MOVE,
    payload: {socket, canvas, ctx}
  }
}
