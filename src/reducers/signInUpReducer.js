import configObj from '../constants';

const signInUpReducer = (state={}, action) => {
  switch(action.type)
  {
    case configObj.ON_NAME_CHANGE_TYPE:
      state.name = action.payload;
      console.log('REDUCER ACTION: ', action.type);
      break;
    case configObj.ON_MAIL_CHANGE_TYPE:
      state.mail = action.payload;
      console.log('REDUCER ACTION: ', action.type);
      break;
    case configObj.ON_PASS_CHANGE_TYPE:
      state.pass = action.payload;
      console.log('REDUCER ACTION: ', action.type);
      break;
    default:
      break;
  }
  return state;
}

export default signInUpReducer;
