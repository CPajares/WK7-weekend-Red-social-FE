import { useEffect } from "react";
import useRegister from "../../hooks/useRegister";

const ProfilePage = () => {
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
      <h2>Profile Page</h2>
    </>
  );
};

export default ProfilePage;
