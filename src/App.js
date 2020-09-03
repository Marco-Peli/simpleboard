import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import logo from './logo.svg';
import './App.css';
import RegisterForm from './components/register'
import DrawArea from './components/draw_area'
import DrawMenu from './components/draw_menu'

const App = () => {

    return (
      <>
      <MDBContainer fluid>
        <DrawMenu/>
        <MDBRow>
          <MDBCol lg="2">.col-lg-4</MDBCol>
          <DrawArea/>
        </MDBRow>
      </MDBContainer>
      </>
    );
}

export default App;
