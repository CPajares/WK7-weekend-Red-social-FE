import { useEffect, useState } from "react";

const Login = () => {
  const initialLogin = {
    username: "",
    password: "",
  };

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
    /*  createUser(newUserData); */
    setNewUserData(initialLogin);
  };

  return (
    <form className="row" onSubmit={clickLogin}>
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
      </div>
    </form>
  );
};

export default Login;
