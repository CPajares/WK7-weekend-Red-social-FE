import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import confirgureStore from "../../redux/store";
import Register from "./Register";

beforeEach(() => {
  const store = confirgureStore();
  render(
    <Provider store={store}>
      <Router>
        <Register />
      </Router>
    </Provider>
  );
});
describe("Given the Register component", () => {
  describe("When the user fill all the inputs and click the button register", () => {
    test("Then the mock function on button should be called", async () => {
      const registerButton = await screen.findByRole("button", {
        name: "REGISTER",
      });
      const nameForm = await screen.findByPlaceholderText("name...");
      const usernameForm = await screen.findByPlaceholderText("username...");
      const ageForm = await screen.findByPlaceholderText("age...");
      const passwordForm = await screen.findByPlaceholderText("password...");
      const mockClick = jest.fn();

      userEvent.type(nameForm, "Testname");
      userEvent.type(usernameForm, "Testusername");
      userEvent.type(ageForm, "8");
      userEvent.type(passwordForm, "Testpassword");
      registerButton.addEventListener("click", mockClick);
      userEvent.click(registerButton);

      expect(mockClick).toHaveBeenCalled();
    });
  });
  describe("When the fields are empty", () => {
    test("Then the button should be disabled", async () => {
      const registerButton = await screen.findByRole("button", {
        name: "REGISTER",
      });

      expect(registerButton).toBeDisabled();
    });
  });
});
