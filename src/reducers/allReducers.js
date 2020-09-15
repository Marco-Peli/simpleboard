import {combineReducers} from 'redux';
import userInputCollectReducer from './userInputCollectReducer';
import {evaluateUserData, loginRequestReducer} from './signInUpReducers'
import {drawMenuReducer} from './draw_menu_reducers'
import {drawAreaReducer, initDrawReducer} from './draw_area_reducers'

const allReducers = combineReducers({
  userInputCollectReducer,
  loginRequestReducer,
  evaluateUserData,
  drawMenuReducer,
  drawAreaReducer,
  initDrawReducer
})

export default allReducers;
