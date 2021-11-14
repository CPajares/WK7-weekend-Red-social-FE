import { useEffect } from "react";
import "./App.css";
import Login from "./components/login/login";
import useRegister from "./hooks/useRegister";

function App() {
  const { user, userIsRegistered } = useRegister();

  const auth = user.isAuth;

  useEffect(() => {
    userIsRegistered();
    if (auth) {
    }
  }, [auth, userIsRegistered]);
  return !auth ? (
    <>
      <div className="App">
        <Login />
      </div>
    </>
  ) : (
    <h1>fadsfads</h1>
  );
}

export default App;
