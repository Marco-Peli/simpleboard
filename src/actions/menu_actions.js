import configObj from '../constants';

export const onColorChange = (e) =>
{
  return {
    type: configObj.ON_COLOR_CHANGE,
    payload: e.target.value
  }
}
