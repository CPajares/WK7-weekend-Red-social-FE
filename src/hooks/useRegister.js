import jwtDecode from "jwt-decode";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userIsRegisterAction } from "../redux/actions/actionCreator";
import {
  loginUserThunks,
  registerUserThunks,
} from "../redux/thunks/registerThunks";

const useRegister = () => {
  const dispatch = useDispatch();
  const { register, user } = useSelector(({ register, user }) => ({
    register,
    user,
  }));

  const createUser = (user) => {
    dispatch(registerUserThunks(user));
  };

  const loginUser = (user) => {
    dispatch(loginUserThunks(user));
  };

  const userIsRegistered = useCallback(() => {
    const registeredUser = JSON.parse(localStorage.getItem("tokenStorage"));
    if (registeredUser) {
      const infoUser = jwtDecode(registeredUser.token);
      dispatch(userIsRegisterAction(infoUser));
    }
  }, [dispatch]);

  return {
    register,
    user,
    userIsRegistered,
    createUser,
    loginUser,
  };
};

export default useRegister;
