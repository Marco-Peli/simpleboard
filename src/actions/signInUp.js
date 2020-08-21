import configObj from '../constants';

export const onUserLogin = () =>
{
  return {
    type: configObj.ON_USER_LOGIN_TYPE
  }
}

export const onUserRegister = () =>
{
  return {
    type: configObj.ON_USER_REGISTER_TYPE
  }
}

export const onUserLoginPending = () =>
{
  return {
    type: configObj.ON_USER_LOGIN_PENDING
  }
}

export const onUserLoginSuccess = (data) =>
{
  return {
    type: configObj.ON_USER_LOGIN_SUCCESS,
    payload : data
  }
}

export const onUserLoginFail = (data) =>
{
  return {
    type: configObj.ON_USER_LOGIN_FAIL,
    payload : data
  }
}

export const onUserRegisterPending = () =>
{
  return {
    type: configObj.ON_USER_REGISTER_PENDING
  }
}

export const onUserRegisterSuccess = (data) =>
{
  return {
    type: configObj.ON_USER_REGISTER_SUCCESS,
    payload : data
  }
}

export const onUserRegisterFail = (data) =>
{
  return {
    type: configObj.ON_USER_REGISTER_FAIL,
    payload : data
  }
}

export const sendRegisterUserData = (dispatch, registerData) =>
{
  return function(dispatch)
  {
    dispatch(onUserLoginPending());
    fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData)
    })
    .then(response =>
      {
        return response.json();
      })
    .then(data => {
      console.log('SERV_RESP_DATA: ', data);
      dispatch(onUserLoginSuccess(data));
    })
    .catch((error) => { dispatch(onUserLoginFail(error))});
  }
}

export const sendLoginUserData = (dispatch, loginData) =>
{
  return function(dispatch)
  {
    dispatch(onUserLoginPending());
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData)
    })
    .then(response =>
      {
        return response.json();
      })
    .then(data => {
      console.log('SERV_RESP_DATA: ', data);
      dispatch(onUserLoginSuccess(data));
    })
    .catch((error) => { dispatch(onUserLoginFail(error))});
  }
}
