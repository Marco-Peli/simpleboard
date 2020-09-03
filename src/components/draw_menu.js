import React from "react";
import {onColorChange, onMenuUnlock, onMenuLock, onMouseEnterMenu, onMouseLeaveMenu} from '../actions/menu_actions'
import {useDispatch, useSelector} from 'react-redux'
import DrawPencil from './draw_menu_components/draw_pencil'
import DrawTrash from './draw_menu_components/draw_trash'
import Draggable from 'react-draggable';
import '../style/draw_menu.css';

const DrawMenu = () => {

  const dispatch = useDispatch();
  const color = useSelector(state => state.handleDrawMenuReducer.color);
  const isMenuLock = useSelector(state => state.handleDrawMenuReducer.isMenuLock);
  let topMenuHeaderClass = '';

  function setTopMenuHeaderClass(isMenuLock){
    if(!isMenuLock)
    {
      topMenuHeaderClass='draggable';
    }
  }

  setTopMenuHeaderClass(isMenuLock);

  return (
    <Draggable onStart={() => !isMenuLock} bounds="parent">
      <div id="mydiv" onMouseEnter={() => dispatch(onMouseEnterMenu())} onMouseLeave={() => dispatch(onMouseLeaveMenu())}>
        <div id="mydivheader" className={topMenuHeaderClass}>{displayMenuLock(isMenuLock, dispatch)}</div>
        <div><DrawPencil/><DrawTrash/></div>
          <p><input type="color" onInput={(e) =>dispatch(onColorChange(e))} defaultValue={color}/></p>
      </div>
    </Draggable>
  );
}


function displayMenuLock(isMenuLock, dispatch)
{
  if(isMenuLock)
  {
    return (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-lock-fill ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
      onClick= {() => dispatch(onMenuUnlock())}>
      <path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z"/>
      <path fillRule="evenodd" d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
      </svg>);
  }
  else
  {
    return (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-unlock-fill ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
      onClick= {() => dispatch(onMenuLock())}>
      <path d="M.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z"/>
      <path fillRule="evenodd" d="M8.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
      </svg>);
  }
}

export default DrawMenu;
