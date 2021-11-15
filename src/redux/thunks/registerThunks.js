import axios from "axios";
import {
  addFriendAction,
  createUserAction,
  getUsersAction,
  loginUserAction,
} from "../actions/actionCreator";
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

export const getUserThunks = () => async (dispatch) => {
  const { token } = JSON.parse(localStorage.getItem("tokenStorage"));
  const response = await axios.get(`${apiURL}cranc/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  dispatch(getUsersAction(response.data));
};

export const addFriendThunks = (id) => async (dispatch) => {
  const { token } = JSON.parse(localStorage.getItem("tokenStorage"));
  console.log(id);
  const response = await axios.post(
    `${apiURL}cranc/friend`,
    { id },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  console.log(response + "sssssssssssssssssssssssss");
  dispatch(addFriendAction(response));
};
