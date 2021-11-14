import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useRegister from "../../hooks/useRegister";
import paths from "../../path/paths";
import("./Login.css");

const Login = () => {
  const { loginUser, user } = useRegister();
  const initialLogin = {
    username: "",
    password: "",
  };

  const navigate = useNavigate();

  const [newLoginData, setNewUserData] = useState(initialLogin);

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(
      !(newLoginData.username !== "" && newLoginData.password !== "")
    );
  }, [newLoginData]);

  const changeData = (event) => {
    event.preventDefault();
    setNewUserData({ ...newLoginData, [event.target.id]: event.target.value });
  };

  const clickLogin = (evento) => {
    evento.preventDefault();
    loginUser(newLoginData);
    setNewUserData(initialLogin);
  };

  useEffect(() => {
    if (user.isAuth) {
      navigate(paths.profile);
    }
  }, [navigate, user.isAuth]);

  return (
    <form
      className="form-login row justify-content-center align-items-center"
      onSubmit={clickLogin}
    >
      <div className="container-form col-4">
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            value={newLoginData.username}
            onChange={changeData}
            autoComplete="off"
            type="text"
            className="form-control"
            id="username"
            placeholder="username..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            value={newLoginData.password}
            onChange={changeData}
            autoComplete="off"
            type="password"
            className="form-control"
            id="password"
            placeholder="password..."
          />
        </div>

        <button disabled={isDisabled} type="submit" className="btn btn-info">
          LOGIN
        </button>

        <Link to={paths.register}>
          <button type="button" className="btn btn-info">
            REGISTER
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Login;
