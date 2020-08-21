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
      return Object.assign({}, state, {name: action.payload});
    case configObj.ON_MAIL_CHANGE_TYPE:
      return Object.assign({}, state, {mail: action.payload});
    case configObj.ON_PASS_CHANGE_TYPE:
      return Object.assign({}, state, {pass: action.payload});
    default:
      return state;
  }
}

export default userInputCollectReducer;
