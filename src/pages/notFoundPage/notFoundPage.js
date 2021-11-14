import { useEffect } from "react";
import useRegister from "../../hooks/useRegister";

const NotFoundPage = () => {
  const { user, userIsRegistered } = useRegister();

  const auth = user.isAuth;
  useEffect(() => {
    userIsRegistered();
    if (auth) {
      //
    }
  }, [auth, userIsRegistered]);

  return (
    <>
      <h2>Not found</h2>
    </>
  );
};

export default NotFoundPage;
