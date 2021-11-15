import jwtDecode from "jwt-decode";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userIsRegisterAction } from "../redux/actions/actionCreator";
import {
  getUserThunks,
  loginUserThunks,
  registerUserThunks,
} from "../redux/thunks/registerThunks";

const useRegister = () => {
  const dispatch = useDispatch();
  const { register, user, getUser } = useSelector(
    ({ register, user, getUser }) => ({
      register,
      user,
      getUser,
    })
  );

  const getUserList = useCallback(() => {
    dispatch(getUserThunks());
  }, [dispatch]);

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
    getUserList,
    getUser,
  };
};

export default useRegister;
