import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';


class RegisterForm extends React.Component{

  constructor(props){
    super(props);
    this.onNameChangeFun = props.onNameChangeFun;
    this.onMailChangeFun = props.onMailChangeFun;
    this.onPswChangeFun = props.onPswChangeFun;
  }

  componentWillMount(){
     document.addEventListener("keydown", event => {
      if (event.keyCode === 13) {
        console.log('diaocn');
      }
    });
  }

  render(){
    return (
    <MDBContainer className="block-example border border-dark mt-4">
      <MDBRow center >
        <MDBCol md="4">
          <form>
            <p className="h5 text-center mb-4 mt-4">Register</p>
            <div className="grey-text">
              <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                success="right" onChange={this.onNameChangeFun}/>
              <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                success="right" onChange={this.onMailChangeFun}/>
              <MDBInput label="Your password" icon="lock" group type="password" validate onChange={this.onPswChangeFun}/>
            </div>
            <div className="text-center">
              <MDBBtn color="primary">Register</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
}
}

export default RegisterForm;
