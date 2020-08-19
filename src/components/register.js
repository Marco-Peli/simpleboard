import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import {onInputNameChange, onInputMailChange, onInputPassChange} from '../actions/textInputActions'
import {sendLoginUserData} from '../actions/signInUp'

const RegisterForm = (store) => {

  const dispatch = useDispatch();
  let userData = {
    email: '',
    password: ''
  };

  userData.email = useSelector(store => store.mail);
  userData.password = useSelector(store => store.pass);

  return (
  <MDBContainer>
    <MDBRow center >
      <MDBCol md="4">
        <form>
          <p className="h5 text-center mb-4 mt-4">Register</p>
          <div className="grey-text">
            <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
              success="right" onChange={(event) => dispatch(onInputNameChange(event))}/>
            <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
              success="right" onChange={(event) => dispatch(onInputMailChange(event))}/>
            <MDBInput label="Your password" icon="lock" group type="password" validate onChange={(event) => dispatch(onInputPassChange(event))}/>
          </div>
          <div className="text-center">
            <MDBBtn color="primary" onClick={() => dispatch(sendLoginUserData(dispatch, userData))}>Register</MDBBtn>
          </div>
        </form>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  );
}

export default RegisterForm;
