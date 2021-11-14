import "./App.css";
import Login from "./components/login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import paths from "./path/path";
import LoginPage from "./pages/loginPage/loginPage";
import RegisterPage from "./pages/registerPage/register";
import ProfilePage from "./pages/profilePage/profile";
import NotFoundPage from "./pages/notFoundPage/notFoundPage";
import PrivateRoute from "./utilities/utilities";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path={paths.login} element={<LoginPage />} />
          <Route path={paths.register} element={<RegisterPage />} />
          <Route
            path={paths.profile}
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route path={paths.notFoundPage} element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
