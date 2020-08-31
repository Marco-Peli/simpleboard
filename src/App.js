import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterForm from './components/register'
import DrawArea from './components/draw_area'

class App extends React.Component  {

  constructor(){
		super();
	}

  render()
	{
    return (
      <>
        <DrawArea/>
      </>
    );
  }
}

export default App;
