import configObj from '../constants'

export const onInputNameChange = (event) =>
{
  return {
    type: configObj.ON_NAME_CHANGE_TYPE,
    payload: event.target.value
  }
}

export const onInputMailChange = (event) =>
{
  return {
    type: configObj.ON_MAIL_CHANGE_TYPE,
    payload: event.target.value
  }
}

export const onInputPassChange = (event) =>
{
  return {
    type: configObj.ON_PASS_CHANGE_TYPE,
    payload: event.target.value
  }
}
