import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useRegister from "../../hooks/useRegister";
import paths from "../../path/paths";
import("./Register.css");

const Register = () => {
  const { createUser } = useRegister();
  const InitialData = {
    name: "",
    username: "",
    password: "",
    age: "",
  };

  const [newUserData, setNewUserData] = useState(InitialData);

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(
      !(
        newUserData.username !== "" &&
        newUserData.password !== "" &&
        newUserData.age !== "" &&
        newUserData.name !== ""
      )
    );
  }, [newUserData]);

  const changeData = (event) => {
    event.preventDefault();
    setNewUserData({ ...newUserData, [event.target.id]: event.target.value });
  };

  const clickRegister = (evento) => {
    evento.preventDefault();
    createUser(newUserData);
    setNewUserData(InitialData);
  };

  return (
    <form
      className="form-register row justify-content-center align-items-center"
      onSubmit={clickRegister}
    >
      <div className="container-form col-4">
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            value={newUserData.name}
            onChange={changeData}
            autoComplete="off"
            type="text"
            className="form-control"
            id="name"
            placeholder="name..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            value={newUserData.username}
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
            value={newUserData.password}
            onChange={changeData}
            autoComplete="off"
            type="password"
            className="form-control"
            id="password"
            placeholder="password..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age: </label>
          <input
            value={newUserData.age}
            onChange={changeData}
            autoComplete="off"
            type="number"
            min="5"
            className="form-control"
            id="age"
            placeholder="age..."
          />
        </div>
        <button disabled={isDisabled} type="submit" className="btn btn-info">
          REGISTER
        </button>
        <Link to={paths.login}>
          <button type="button" className="btn btn-info">
            LOGIN
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Register;
