import actionTypes from "./actionTypes";

export const createUserAction = (register) => ({
  type: actionTypes.createUser,
  register,
});

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});

export const userIsRegisterAction = (user) => ({
  type: actionTypes.userIsRegister,
  user,
});

export const getUsersAction = (users) => ({
  type: actionTypes.getUsers,
  users,
});
