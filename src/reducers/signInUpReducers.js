import configObj from '../constants';

const initialLoginState = {
  loginPending: false,
  loginOutcome: false,
  loginResponse: {}
};

const initialEvalState = {
  userAction: configObj.ON_USER_LOGIN_TYPE
};

export const evaluateUserData = (state=initialEvalState, action) => {

  switch(action.type)
  {
    case configObj.ON_USER_REGISTER_TYPE:
      return Object.assign({}, state, {userAction: action.type});
    case configObj.ON_USER_LOGIN_TYPE:
      return Object.assign({}, state, {userAction: action.type});
    default:
      return state;
  }
}

export const loginRequestReducer = (state=initialLoginState, action) => {
  let loginSuccess = false;
  switch(action.type)
  {
    case configObj.ON_USER_LOGIN_PENDING:
      return Object.assign({}, state, {loginPending: true});
    case configObj.ON_USER_LOGIN_SUCCESS:
      console.log('SERV_RESP: ', action.payload);
      if(action.payload.err_stat===1)
      {
        loginSuccess = true;
      }
      return Object.assign({}, state, {loginPending: false, loginResponse: action.payload, loginOutcome: loginSuccess});
    case configObj.ON_USER_LOGIN_FAIL:
      return Object.assign({}, state, {loginPending: false, loginResponse: action.payload, loginOutcome: false});
    default:
      return state;
  }
}
