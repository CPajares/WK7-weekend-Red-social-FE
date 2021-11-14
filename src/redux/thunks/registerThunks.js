import axios from "axios";
import { createUserAction } from "../actions/actionCreator";

const apiURL = process.env.REACT_APP_URL_API_HEROKU;

export const registerUserThunks = (user) => async (dispatch) => {
  const response = await axios.post(`${apiURL}user/register`, user);
  console.log(response);
  if (response.status === 200) {
    console.log("holi");
    dispatch(createUserAction(response));
  }
};
