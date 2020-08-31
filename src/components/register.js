import React from "react";
import configObj from '../constants';
import {useDispatch, useSelector, connect} from 'react-redux'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import {onInputNameChange, onInputMailChange, onInputPassChange} from '../actions/textInputActions'
import {sendLoginUserData, onUserLogin, onUserRegister} from '../actions/signInUp'
import '../style/register.css'

const RegisterForm = (props) => {

  const dispatch = useDispatch();
  return showUserDataAction(props, dispatch);
}

function showLoginForm(props, dispatch)
{
  return (
  <MDBContainer>
    <MDBRow center >
      <MDBCol md="4">
        <form>
          <p className="h5 text-center mb-4 mt-4" onClick={() =>dispatch(onUserRegister())}>Login</p>
          <div className="grey-text">
            <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
              success="right" onChange={(event) => dispatch(onInputMailChange(event))}/>
            <MDBInput label="Your password" icon="lock" group type="password" validate onChange={(event) => dispatch(onInputPassChange(event))}/>
          </div>
          <p className="underline" onClick={() => dispatch(onUserRegister())}>Not registered yet? Register instead</p>
          <div className="text-center">
            <MDBBtn color="primary" onClick={() => dispatch(sendLoginUserData(dispatch, {email: props.email, password: props.password}))}>Login</MDBBtn>
          </div>
        </form>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  );
}

function showRegisterForm(props, dispatch)
{
  return (
  <MDBContainer>
    <MDBRow center >
      <MDBCol md="4">
        <form>
          <p className="h5 text-center mb-4 mt-4" onClick={() =>dispatch(onUserRegister())}>Register</p>
          <div className="grey-text">
            <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
              success="right" onChange={(event) => dispatch(onInputNameChange(event))}/>
            <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
              success="right" onChange={(event) => dispatch(onInputMailChange(event))}/>
            <MDBInput label="Your password" icon="lock" group type="password" validate onChange={(event) => dispatch(onInputPassChange(event))}/>
          </div>
          <p className="underline" onClick={() => dispatch(onUserLogin())}>Already Registered? Log in instead</p>
          <div className="text-center">
            <MDBBtn color="primary" onClick={() => dispatch(sendLoginUserData(dispatch, {email: props.email, password: props.password}))}>Register</MDBBtn>
          </div>
        </form>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  );
}

function showUserDataAction(props, dispatch)
{
  switch(props.userAction)
  {
    case configObj.ON_USER_LOGIN_TYPE:
      return showLoginForm(props, dispatch);
    case configObj.ON_USER_REGISTER_TYPE:
      return showRegisterForm(props, dispatch);
    default:
      return null;
  }
}

function mapPropsToState(state)
{
  console.log("state: ", state);
  return({
    email: state.userInputCollectReducer.mail,
    password: state.userInputCollectReducer.pass,
    userAction: state.evaluateUserData.userAction
  });
}

export default connect(mapPropsToState)(RegisterForm);
