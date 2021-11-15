import { useEffect } from "react";
import Card from "../../components/Card/Card";
import useRegister from "../../hooks/useRegister";

const ProfilePage = () => {
  const { user, userIsRegistered, getUserList, getUser } = useRegister();
  const auth = user.isAuth;

  useEffect(() => {
    getUserList();
  }, [getUserList]);

  useEffect(() => {
    userIsRegistered();
    if (auth) {
      //
    }
  }, [auth, userIsRegistered]);

  return (
    <>
      <h2>Profile Page</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-around">
        {getUser &&
          getUser.map((user) => {
            return <Card key={user.id} {...user} />;
          })}
      </div>
    </>
  );
};

export default ProfilePage;
