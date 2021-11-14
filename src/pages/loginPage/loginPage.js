import { useEffect } from "react";
import Login from "../../components/login/login";
import useRegister from "../../hooks/useRegister";

const LoginPage = () => {
  const { user, userIsRegistered } = useRegister();

  const auth = user.isAuth;
  useEffect(() => {
    userIsRegistered();
    if (auth) {
      //get users
    }
  }, [auth, userIsRegistered]);

  return (
    <>
      <h2>Login Page</h2>
      <Login />
    </>
  );
};

export default LoginPage;
