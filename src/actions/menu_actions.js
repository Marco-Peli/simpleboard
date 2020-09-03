import configObj from '../constants';

export const onColorChange = (e) =>
{
  return {
    type: configObj.ON_COLOR_CHANGE,
    payload: e.target.value
  }
}

export const onMenuLock = () =>
{
  return {
    type: configObj.ON_MENU_LOCK
  }
}

export const onMenuUnlock = () =>
{
  return {
    type: configObj.ON_MENU_UNLOCK
  }
}

export const onMouseEnterMenu = () =>
{
  return {
    type: configObj.ON_MOUSE_DRAW_MENU_ENTER
  }
}

export const onMouseLeaveMenu = () =>
{
  return {
    type: configObj.ON_MOUSE_DRAW_MENU_LEAVE
  }
}
