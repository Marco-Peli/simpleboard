import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterForm from './components/register'
import DrawArea from './components/draw_area'
import DrawMenu from './components/draw_menu'

const App = () => {

    return (
      <>
        <DrawMenu/>
        <DrawArea/>
      </>
    );
}

export default App;
