import { useState } from "react";

const Form = () => {
  const InitialData = {
    name: "",
    username: "",
    password: "",
    age: "",
    image: "",
  };

  const [newUserData, setNewUserData] = useState(InitialData);

  const changeData = (event) => {
    event.preventDefault();
    setNewUserData({ ...newUserData, [event.target.id]: event.target.value });
  };

  const ClickCreate = (evento) => {
    evento.preventDefault();
    /*  createUser(newUserData); */
    setNewUserData(InitialData);
  };

  return (
    <form onSubmit={ClickCreate}>
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
          className="form-control"
          id="age"
          placeholder="age..."
        />
      </div>
      <button type="submit" className="btn btn-info">
        REGISTER
      </button>
    </form>
  );
};

export default Form;
