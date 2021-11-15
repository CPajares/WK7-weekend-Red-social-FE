import actionTypes from "../actions/actionTypes";

const getUserReducer = (dataUsers = [], action) => {
  let newDataUsers = dataUsers;
  switch (action.type) {
    case actionTypes.getUsers:
      newDataUsers = [...action.users];
      break;

    default:
  }
  return newDataUsers;
};

export default getUserReducer;
