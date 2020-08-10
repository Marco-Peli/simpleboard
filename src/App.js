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
			name: "",
		};

    this.registerInfo = {
      name: '',
      email: '',
      password: ''
    };

	}

  onNameChange = (event) =>
	{
		this.setState({name: event.target.value});
    console.log(event.target.value);
	}

  onEmailChange = (event) =>
	{
		this.setState({email: event.target.value});
    console.log(event.target.value);
	}

  onPswChange = (event) =>
	{
		this.setState({password: event.target.value});
    console.log(event.target.value);
	}

  render()
	{
    return (
      <>
        <NavbarPage/>
        <RegisterForm onNameChangeFun={this.onNameChange} onPswChangeFun={this.onPswChange} onMailChangeFun={this.onEmailChange}/>
        <FooterPage/>
      </>
    );
  }
}

export default App;
