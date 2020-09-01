import configObj from '../constants';

const initialMenuState = {
  color: '#0066cc'
};

export const handleDrawMenuReducer = (state=initialMenuState, action) => {

  switch(action.type)
  {
    case configObj.ON_COLOR_CHANGE:
      return Object.assign({}, state, {color: action.payload});
    default:
      return state;
  }
}
