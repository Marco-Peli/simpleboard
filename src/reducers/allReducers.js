import {combineReducers} from 'redux';
import userInputCollectReducer from './userInputCollectReducer';
import {registerReducer, evaluateUserData, loginRequestReducer} from './signInUpReducers'

const allReducers = combineReducers({
  userInputCollectReducer,
  loginRequestReducer
})

export default allReducers;
