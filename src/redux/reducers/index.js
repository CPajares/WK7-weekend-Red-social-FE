import { combineReducers } from "redux";
import getUserReducer from "./getUserReducer";
import registerReducer from "./registerReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  register: registerReducer,
  user: userReducer,
  getUser: getUserReducer,
});

export default rootReducer;
