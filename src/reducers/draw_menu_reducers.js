import configObj from '../constants';
import drawMenuConstants from '../components/draw_menu_components/draw_menu_consts'

const initialMenuState = {
  color: '#0066cc',
  isMenuLock: true,
  isMouseOverDrawMenu: false,
  drawMenuCurrentTool: drawMenuConstants.DRAW_MENU_SELECT_TOOL
};

export const drawMenuReducer = (state=initialMenuState, action) => {

  switch(action.type)
  {
    case configObj.ON_COLOR_CHANGE:
      return Object.assign({}, state, {color: action.payload});
    case configObj.ON_MENU_LOCK:
      return Object.assign({}, state, {isMenuLock: true});
    case configObj.ON_MENU_UNLOCK:
      return Object.assign({}, state, {isMenuLock: false});
    case configObj.ON_MOUSE_DRAW_MENU_ENTER:
      return Object.assign({}, state, {isMouseOverDrawMenu: true});
    case configObj.ON_MOUSE_DRAW_MENU_LEAVE:
      return Object.assign({}, state, {isMouseOverDrawMenu: false});
    case configObj.ON_MOUSE_DRAW_MENU_PENCIL_TOOL_SELECT:
      return Object.assign({}, state, {drawMenuCurrentTool: drawMenuConstants.DRAW_MENU_PENCIL_TOOL});
    case configObj.ON_MOUSE_DRAW_MENU_SELECT_TOOL_SELECT:
      return Object.assign({}, state, {drawMenuCurrentTool: drawMenuConstants.DRAW_MENU_SELECT_TOOL});
    case configObj.ON_MOUSE_DRAW_MENU_MOVE_TOOL_SELECT:
      return Object.assign({}, state, {drawMenuCurrentTool: drawMenuConstants.DRAW_MENU_MOVE_TOOL});
    default:
      return state;
  }
}
