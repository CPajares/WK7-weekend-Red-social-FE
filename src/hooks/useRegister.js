import { useDispatch, useSelector } from "react-redux";
import { registerUserThunks } from "../redux/thunks/registerThunks";

const useRegister = () => {
  const dispatch = useDispatch();
  const { register } = useSelector(({ register }) => ({
    register,
  }));

  const createUser = (user) => {
    dispatch(registerUserThunks(user));
  };

  return {
    register,
    createUser,
  };
};

export default useRegister;
