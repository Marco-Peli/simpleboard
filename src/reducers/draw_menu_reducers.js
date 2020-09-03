import configObj from '../constants';

const initialMenuState = {
  color: '#0066cc',
  isMenuLock: true,
  isMouseOverDrawMenu: false
};

export const handleDrawMenuReducer = (state=initialMenuState, action) => {

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
    default:
      return state;
  }
}
