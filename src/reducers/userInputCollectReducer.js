import configObj from '../constants';

const initialInputState= {
  name: '',
  mail: '',
  pass: ''
};

const userInputCollectReducer = (state=initialInputState, action) => {
  switch(action.type)
  {
    case configObj.ON_NAME_CHANGE_TYPE:
      state.name = action.payload;
      break;

    case configObj.ON_MAIL_CHANGE_TYPE:
      state.mail = action.payload;
      break;

    case configObj.ON_PASS_CHANGE_TYPE:
      state.pass = action.payload;
      break;

    default:
      break;
  }
  return state;
}

export default userInputCollectReducer;
