import configObj from '../constants'

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

export const sendLoginUserData = (dispatch, loginData) =>
{
  console.log('LOGIN_DATA: ', loginData);
  dispatch({type: configObj.ON_USER_LOGIN_PENDING});
  fetch('http://localhost:3001/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(loginData),
  })
  .then(response => response.json())
  .then(data => {
        dispatch({type: configObj.ON_USER_LOGIN_SUCCESS, payload: data});
  })
  .catch((error) => {
    dispatch({type: configObj.ON_USER_LOGIN_FAIL, payload: error});
});
}
