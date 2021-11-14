import actionTypes from "./actionTypes";

export const createUserAction = (register) => ({
  type: actionTypes.createUser,
  register,
});

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});
