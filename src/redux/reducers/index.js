import { combineReducers } from "redux";
import registerReducer from "./registerReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  register: registerReducer,
  user: userReducer,
});

export default rootReducer;
