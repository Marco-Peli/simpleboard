import {combineReducers} from 'redux';
import userInputCollectReducer from './userInputCollectReducer';
import {evaluateUserData, loginRequestReducer} from './signInUpReducers'

const allReducers = combineReducers({
  userInputCollectReducer,
  loginRequestReducer,
  evaluateUserData
})

export default allReducers;
