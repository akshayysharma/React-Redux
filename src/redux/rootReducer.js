import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import cakeReducer from "./cake/cakeReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  user: userReducer,
});

export default rootReducer;
