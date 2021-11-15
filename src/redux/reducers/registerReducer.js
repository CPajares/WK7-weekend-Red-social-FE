import actionTypes from "../actions/actionTypes";

const registerReducer = (register = {}, action) => {
  let newRegister = register;
  switch (action.type) {
    case actionTypes.createUser:
      newRegister = { ...action.register };
      break;
    case actionTypes.addFriend:
      newRegister = { ...action.id };
      break;
    default:
  }

  return newRegister;
};

export default registerReducer;
