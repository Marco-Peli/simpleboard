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
      Object.assign({}, state, {loginPending: true});
      break;
    case configObj.ON_USER_LOGIN_SUCCESS:
      Object.assign({}, state, {loginPending: false, loginResponse: action.data});
      console.log('SERV_RESP: ', action.data);
      break;
    case configObj.ON_USER_LOGIN_FAIL:
      Object.assign({}, state, {loginPending: false, loginResponse: action.data});
      break;
    default:
      break;
  }
  return state;
}
