import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarPage from './components/navbar'
import FooterPage from './components/footer'
import RegisterForm from './components/register'

class App extends React.Component  {

  constructor(){
		super();
		this.state = {
			name: '',
      mail: '',
      pass: ''
		};

    this.registerInfo = {
      name: '',
      email: '',
      password: ''
    };

	}

  render()
	{
    return (
      <>
        <NavbarPage/>
          <RegisterForm/>
        <FooterPage/>
      </>
    );
  }
}

export default App;
