import configObj from '../constants';

const initialLoginState = {
  loginPending: false,
  loginResponse: {}
};

export const evaluateUserData = (state={}, action) => {
  switch(action.type)
  {
    case configObj.ON_USER_REGISTER_TYPE:
      break;
    case configObj.ON_USER_LOGIN_TYPE:
      break;
    default:
      break;
  }
  return state;
}

export const loginRequestReducer = (state=initialLoginState, action) => {
  switch(action.type)
  {
    case configObj.ON_USER_LOGIN_PENDING:
      return Object.assign({}, state, {loginPending: true});
    case configObj.ON_USER_LOGIN_SUCCESS:
      console.log('SERV_RESP: ', action.data);
      return Object.assign({}, state, {loginPending: false, loginResponse: action.data});
    case configObj.ON_USER_LOGIN_FAIL:
      return Object.assign({}, state, {loginPending: false, loginResponse: action.data});
    default:
      return state;
  }
}
