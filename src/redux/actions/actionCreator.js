import actionTypes from "./actionTypes";

export const createUserAction = (user) => ({
  type: actionTypes.createUser,
  user,
});

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});
