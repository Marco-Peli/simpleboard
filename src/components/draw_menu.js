import React from "react";
import {onColorChange} from '../actions/menu_actions'
import {useDispatch, useSelector} from 'react-redux'
import '../style/draw_menu.css';

const DrawMenu = () => {

  const dispatch = useDispatch();
  const color = useSelector(state => state.handleDrawMenuReducer.color);

  return (
    <div id="mydiv">
      <div id="mydivheader">Menu</div>
        <p><input type="color" onInput={(e) =>dispatch(onColorChange(e))} defaultValue={color}/></p>
    </div>
  );
}

export default DrawMenu;
