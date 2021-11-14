import { useDispatch, useSelector } from "react-redux";
import {
  loginUserThunks,
  registerUserThunks,
} from "../redux/thunks/registerThunks";

const useRegister = () => {
  const dispatch = useDispatch();
  const { register, user } = useSelector(({ register }) => ({
    register,
  }));

  const createUser = (user) => {
    dispatch(registerUserThunks(user));
  };

  const loginUser = (user) => {
    dispatch(loginUserThunks(user));
  };

  return {
    register,
    user,
    createUser,
    loginUser,
  };
};

export default useRegister;
