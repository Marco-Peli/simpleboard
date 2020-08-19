import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarPage from './components/navbar'
import FooterPage from './components/footer'
import RegisterForm from './components/register'

class App extends React.Component  {

  constructor(){
		super();
	}

  render()
	{
    return (
      <>
        <RegisterForm/>
      </>
    );
  }
}

export default App;
