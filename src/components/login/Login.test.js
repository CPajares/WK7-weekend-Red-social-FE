import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import confirgureStore from "../../redux/store";
import Login from "./login";

beforeEach(() => {
  const store = confirgureStore();
  render(
    <Provider store={store}>
      <Router>
        <Login />
      </Router>
    </Provider>
  );
});

describe("Given Login component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a button Login and Register", async () => {
      const buttonLogin = await screen.findByRole("button", { name: "LOGIN" });
      const usernameForm = await screen.findByPlaceholderText("username...");
      const passwordForm = await screen.findByPlaceholderText("password...");
      const mock = jest.fn();
      buttonLogin.addEventListener("click", mock);

      userEvent.type(usernameForm, "test");
      userEvent.type(passwordForm, "test");
      userEvent.click(buttonLogin);

      expect(buttonLogin).toBeInTheDocument();
      expect(mock).toHaveBeenCalled();
    });
  });

  describe("When the user clicks the register button", () => {
    test("Then it should navigate to the render component", async () => {
      const registerButton = await screen.findByRole("button", {
        name: "REGISTER",
      });
      const mock = jest.fn();

      registerButton.addEventListener("click", mock);
      userEvent.click(registerButton);

      expect(mock).toHaveBeenCalled();
    });
  });
});
