import axios from "axios";
import { createUserAction, loginUserAction } from "../actions/actionCreator";
import jwtDecode from "jwt-decode";

const apiURL = process.env.REACT_APP_URL_API_HEROKU;

export const registerUserThunks = (user) => async (dispatch) => {
  const response = await axios.post(`${apiURL}user/register`, user);
  if (response.status === 200) {
    dispatch(createUserAction(response));
  }
};

export const loginUserThunks = (user) => async (dispatch) => {
  const response = await axios.post(`${apiURL}user/login`, user);
  if (response.status === 200) {
    const token = response.data.token;
    const user = jwtDecode(token);
    dispatch(loginUserAction(user));
    localStorage.setItem("tokenStorage", JSON.stringify({ token }));
  }
};
