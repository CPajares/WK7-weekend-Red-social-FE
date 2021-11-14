import useRegister from "../hooks/useRegister";
import LoginPage from "../pages/loginPage/loginPage";

const PrivateRoute = ({ children }) => {
  const { user } = useRegister();
  return user.isAuth ? children : <LoginPage />;
};

export default PrivateRoute;
