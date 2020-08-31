import {combineReducers} from 'redux';
import userInputCollectReducer from './userInputCollectReducer';
import {evaluateUserData, loginRequestReducer} from './signInUpReducers'
import {handleDrawMenuReducer} from './draw_menu_reducers'

const allReducers = combineReducers({
  userInputCollectReducer,
  loginRequestReducer,
  evaluateUserData,
  handleDrawMenuReducer
})

export default allReducers;
