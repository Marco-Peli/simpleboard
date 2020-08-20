import configObj from '../constants';

const initialInputState= {
  name: '',
  mail: '',
  pass: ''
};

const userInputCollectReducer = (state=initialInputState, action) => {

  let newState = {};
  switch(action.type)
  {
    case configObj.ON_NAME_CHANGE_TYPE:
      Object.assign({},state, {name: action.payload});
      break;

    case configObj.ON_MAIL_CHANGE_TYPE:
      let payload = {mail: action.payload};
      newState = {...state, ...payload};
      //Object.assign(state, {mail: action.payload});
      break;

    case configObj.ON_PASS_CHANGE_TYPE:
      Object.assign(state, {pass: action.payload});
      break;

    default:
      break;
  }
  return newState;
}

export default userInputCollectReducer;
